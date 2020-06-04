import {Subject} from 'rxjs';


// const userData={
//     firstName:'',
//     lastName:'',
//     gender:'',
//     temperature:'',
//     address:'',
//     state:'',
//     district:'',
//     village:'',
//     submit:false
// }
export class detailEvent{
    static hasUserSubmit$ = new Subject();

    static hasUserSubmitObs$ = detailEvent.hasUserSubmit$.asObservable();
    
    static sethasUserSubmit = state=>detailEvent.hasUserSubmit$.next(state);
} 