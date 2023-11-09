import { Component, EventEmitter } from '@angular/core';
import { BsModalRef } from "ngx-bootstrap/modal";
import { Diagnose, DiagnoseActive, DiagnoseStatus } from "../../core/types/diagnose";
import { DiagnoseService } from "../../services/diagnose.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import * as moment from "moment/moment";

@Component({
  selector: 'app-diagnoses-list-modal',
  templateUrl: './diagnoses-list-modal.component.html',
  styleUrls: ['./diagnoses-list-modal.component.scss']
})
export class DiagnosesListModalComponent {
    onClose: EventEmitter<Diagnose[]> = new EventEmitter<Diagnose[]>();
    allDiagnoses: Array<Diagnose & { selected?: boolean }> = [];
    filteredDiagnoses: Array<Diagnose & { selected?: boolean }> = [];
    dropdownActiveFilter = [
        { id: 1, value: 'Active' },
        { id: 2, value: 'Inactive' },
        { id: 3, value: 'Cancelled' },
    ];
    selectedActiveFilter: { id: number, value: DiagnoseActive }[] = [];
    dropdownStatusFilter = [
        { id: 1, value: 'Active' },
        { id: 2, value: 'Not active' },
        { id: 3, value: 'Chronic' },
        { id: 4, value: 'Intermittent' },
        { id: 5, value: 'Denied' },
        { id: 6, value: 'Solved' },
        { id: 7, value: 'Repetitive' },
    ];
    selectedStatusFilter: { id: number, value: DiagnoseStatus }[] = [];
    dropdownSettings = {
        singleSelection: false,
        idField: 'id',
        textField: 'value',
        selectAllText: 'Select All',
        unSelectAllText: 'Unselect All',
        itemsShowLimit: 1,
        allowSearchFilter: false
    };
    nameFilter?: string;
    regDateFilter?: Date;
    allIsChecked: boolean = false;

    constructor(
        private readonly bsModalRef: BsModalRef,
        private readonly diagnoseService: DiagnoseService
    ) {
        this.diagnoseService.getAllDiagnoses().pipe(takeUntilDestroyed())
            .subscribe(res => {
                this.allDiagnoses = [...res];
                this.filteredDiagnoses = this.allDiagnoses;
                this.toggleSelectAll(false, false);
            })
    }
    close(success?: boolean) {
        this.bsModalRef.hide();
        if (success) {
            this.onClose.emit(this.filteredDiagnoses.filter(diagnose => diagnose.selected));
        }
    }

    toggleSelectAll(event: any, force?: boolean) {
        this.allIsChecked = typeof force !== 'undefined' ? force : event.target.checked;
        this.filteredDiagnoses.forEach(item => (item.selected = this.allIsChecked));
    }

    checkAllIsChecked() {
        this.allIsChecked = this.filteredDiagnoses.every(item => item.selected);
    }

    filtering() {
        const lastDiagnosesCount = this.filteredDiagnoses.length;
        this.filteredDiagnoses = this.allDiagnoses
            .filter(diagnose => !this.nameFilter ? true
                : diagnose.name.toLowerCase().includes(this.nameFilter?.toLowerCase()))
            .filter(diagnose => !this.regDateFilter ? true
                : moment(diagnose.registered).format('YYYY-MM-DD') === moment(this.regDateFilter).format('YYYY-MM-DD'))
            .filter(diagnose => !this.selectedActiveFilter.length ? true
                : this.selectedActiveFilter.map(filter => filter.value).includes(diagnose.active) )
            .filter(diagnose => !this.selectedStatusFilter.length ? true
                : this.selectedStatusFilter.map(filter => filter.value).includes(diagnose.status) );
    }
}
