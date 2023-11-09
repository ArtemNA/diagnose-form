import { Component } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { DiagnoseService } from "../../services/diagnose.service";
import { take } from "rxjs";
import { Diagnose, WarningFilledOut } from "../../core/types/diagnose";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { BsModalService } from "ngx-bootstrap/modal";
import { EditDiagnoseModalComponent } from "../edit-diagnose-modal/edit-diagnose-modal.component";
import { DiagnosesListModalComponent } from "../diagnoses-list-modal/diagnoses-list-modal.component";

@Component({
    selector: 'app-diagnoses-form',
    templateUrl: './diagnoses-form.component.html',
    styleUrls: ['./diagnoses-form.component.scss']
})
export class DiagnosesFormComponent {
    isFirstOpen: boolean = true;
    selectedOption: FormControl<string | null> = new FormControl(null, Validators.required);
    currentDiagnoses: Array<Diagnose & { new?: boolean }> = [];
    showWarning: boolean = false;
    warningDetails!: WarningFilledOut;

    constructor(
        private readonly diagnoseService: DiagnoseService,
        private readonly modalService: BsModalService
    ) {
        this.diagnoseService.getCurrentDiagnoses().pipe(takeUntilDestroyed())
            .subscribe(res => this.currentDiagnoses = res);
        this.diagnoseService.getWarning().pipe(takeUntilDestroyed())
            .subscribe(res => {
                if (!res) return;
                this.showWarning = true;
                this.warningDetails = res;
            })
    }

    searchDiagnose() {
        if (!this.selectedOption.value) return;
        this.diagnoseService.searchDiagnose(this.selectedOption.value).pipe(take(1))
            .subscribe(res => {
                console.log(res);
                this.openAddDiagnoseModal({...res, new: true});
            });
        this.selectedOption.setValue(null);
    }

    openAddDiagnoseModal(diagnose: Diagnose & { new?: boolean }) {
        const initialState = {
            diagnose
        };
        const ref = this.modalService.show(EditDiagnoseModalComponent, {
            initialState,
            animated: true,
            class: 'modal-xl'
        });
        ref.content!.onClose.subscribe((result: Diagnose & { new?: boolean }) => {
            this.currentDiagnoses.push(result);
        });
    }

    openUploadDiagnoseModal() {
        const ref = this.modalService.show(DiagnosesListModalComponent, {
            animated: true,
            class: 'modal-xl'
        });
        ref.content!.onClose.subscribe((result: Array<Diagnose & { new?: boolean }>) => {
            this.currentDiagnoses.push(...result.map(item => ({...item, new: true})));
        });
    }

    openEditDiagnoseModal(i: number) {
        const initialState = {
            diagnose: this.currentDiagnoses[i]
        };
        const ref = this.modalService.show(EditDiagnoseModalComponent, {
            initialState,
            animated: true,
            class: 'modal-xl'
        });
        ref.content!.onClose.subscribe((result: Diagnose & { new?: boolean }) => {
            this.currentDiagnoses[i] = {...result, new: true};
        });
    }

    delete(i: number) {
        this.currentDiagnoses.splice(i, 1);
    }
}
