import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from "rxjs";
import { Diagnose, WarningFilledOut } from "../core/types/diagnose";
import { DIAGNOSES } from "../diagnoses.mock";

@Injectable({
  providedIn: 'root'
})
export class DiagnoseService {
    private currentDiagnoses: BehaviorSubject<Diagnose[]> = new BehaviorSubject<Diagnose[]>([DIAGNOSES[0]]);

  constructor() { }

    getAllDiagnoses(): Observable<Diagnose[]> {
      return of(...[DIAGNOSES]);
    }

    getWarning(): Observable<WarningFilledOut> {
        const mockWarning: WarningFilledOut = {
            date: '03/14/2022',
            form: '025-5/a'
        }
      return of(mockWarning);
    }

    searchDiagnose(name: string): Observable<Diagnose> {
      // Here I use include which required non-strict equal name of diagnose (will be replaced with ===)
        const foundDiagnose = DIAGNOSES.find(diagnose => diagnose.name.toLowerCase().includes(name.toLowerCase()));

        if (foundDiagnose) {
            return of(foundDiagnose);
        } else {
            // Mock-throw an error with an appropriate message
            return throwError(`No diagnose found with name: ${name}`);
        }
    }

    getCurrentDiagnoses(): Observable<Diagnose[]> {
        return this.currentDiagnoses.asObservable();
    }
}
