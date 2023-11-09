import {Diagnose} from "./core/types/diagnose";

export const DIAGNOSES: Diagnose[] = [
    {
        name: '1 Diagnose',
        status: 'Active',
        authenticity: 'Confirmed',
        difficulty: 'Easy',
        category: 'ESI',
        type: 'Main',
        description: 'Description for Diagnose 1',
        circumstances: 'Circumstances for Diagnose 1',
        fromDate: '2023-01-01',
        toDate: '2023-02-01',
        active: 'Active',
        registered: '2023-03-01',
        oldRegistered: ['2023-04-01', '2023-05-01']
    },
    {
        name: '2 Test',
        status: 'Not active',
        authenticity: 'Denied/Rejected',
        difficulty: 'Average',
        category: 'Arrival',
        type: 'Main',
        description: 'Description for Diagnose 2',
        circumstances: 'Circumstances for Diagnose 2',
        fromDate: '2023-03-01',
        toDate: '2023-04-01',
        active: 'Active'
    },
    {
        name: '3 New',
        status: 'Chronic',
        authenticity: 'Entered in error',
        difficulty: 'Heavy',
        category: 'ESI',
        type: 'Accompany',
        description: 'Description for Diagnose 3',
        circumstances: 'Circumstances for Diagnose 3',
        fromDate: '2023-05-01',
        toDate: '2023-06-01',
        active: 'Inactive'
    },
    {
        name: '4 Item',
        status: 'Intermittent',
        authenticity: 'Suspicious',
        difficulty: 'Between easy and moderate',
        category: 'ESI',
        type: 'Main',
        description: 'Description for Diagnose 4',
        circumstances: 'Circumstances for Diagnose 4',
        fromDate: '2023-07-01',
        toDate: '2023-08-01',
        active: 'Cancelled'
    }
];


