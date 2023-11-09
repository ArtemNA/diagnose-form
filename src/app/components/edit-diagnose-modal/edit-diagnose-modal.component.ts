import { Component, EventEmitter, OnInit } from '@angular/core';
import { BsModalRef } from "ngx-bootstrap/modal";
import {
    Diagnose,
    DiagnoseAuthenticity,
    DiagnoseCategory,
    DiagnoseDifficulty,
    DiagnoseStatus, DiagnoseType
} from "../../core/types/diagnose";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as moment from "moment/moment";

@Component({
  selector: 'app-edit-diagnose-modal',
  templateUrl: './edit-diagnose-modal.component.html',
  styleUrls: ['./edit-diagnose-modal.component.scss']
})
export class EditDiagnoseModalComponent implements OnInit {
    diagnose!: Diagnose;
    statuses: DiagnoseStatus[] = ['Active', 'Not active', 'Chronic', 'Intermittent', 'Denied', 'Solved', 'Repetitive'];
    authenticates: DiagnoseAuthenticity[] = ['Suspicious', 'Confirmed', 'Denied/Rejected', 'Entered in error'];
    difficulties: DiagnoseDifficulty[] = ['Easy', 'Between easy and moderate', 'Average', 'Between medium and hard', 'Heavy', 'Danger to life'];
    categories: DiagnoseCategory[] = ['ESI', 'Arrival'];
    types: DiagnoseType[] = ['Main', 'Accompany'];
    formGroup!: FormGroup;
    onClose: EventEmitter<Diagnose | Diagnose & { new: boolean }> = new EventEmitter<Diagnose | (Diagnose & {new: boolean})>();
    constructor(
        private readonly bsModalRef: BsModalRef,
        private readonly fb: FormBuilder,
    ) { }

    ngOnInit() {
        this.formGroup = this.fb.group({
            status: this.fb.control(this.diagnose?.status ?? null, Validators.required),
            authenticity: this.fb.control(this.diagnose?.authenticity ?? null, Validators.required),
            difficulty: this.fb.control(this.diagnose?.difficulty ?? null),
            category: this.fb.control(this.diagnose?.category ?? null, Validators.required),
            type: this.fb.control(this.diagnose?.type ?? null),
            description: this.fb.control(this.diagnose?.description ?? null),
            circumstances: this.fb.control(this.diagnose?.circumstances ?? null),
            fromDate: this.fb.control(moment(this.diagnose?.fromDate).toDate() ?? null, Validators.required),
            toDate: this.fb.control(moment(this.diagnose?.toDate).toDate() ?? null, Validators.required),
        })
    }

    close(success?: boolean) {
        if (success) {
            if (this.formGroup.invalid) return;
            this.onClose.emit({...this.diagnose, ...this.formGroup.value});
        }
        this.bsModalRef.hide();
    }
}
