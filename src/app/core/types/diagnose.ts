export interface Diagnose {
    name: string;
    status: DiagnoseStatus;
    authenticity: DiagnoseAuthenticity;
    difficulty?: DiagnoseDifficulty;
    category: DiagnoseCategory;
    type?: DiagnoseType;
    description?: string;
    circumstances?: string;
    fromDate: string;
    toDate: string;
    registered?: string;
    renewed?: string;
    oldRegistered?: string[];
    active: DiagnoseActive;
}

export interface WarningFilledOut {
    form: string
    date: string
}

export type DiagnoseStatus = 'Active' | 'Not active' | 'Chronic' | 'Intermittent' | 'Denied' | 'Solved' | 'Repetitive';
export type DiagnoseAuthenticity = 'Suspicious' | 'Confirmed' | 'Denied/Rejected' | 'Entered in error';
export type DiagnoseDifficulty = 'Easy' | 'Between easy and moderate' | 'Average' | 'Between medium and hard' | 'Heavy' | 'Danger to life';
export type DiagnoseCategory = 'ESI' | 'Arrival';
export type DiagnoseType = 'Main' | 'Accompany';
export type DiagnoseActive = 'Active' | 'Inactive' | 'Cancelled';
