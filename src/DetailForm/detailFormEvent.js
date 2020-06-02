import {Subject} from 'rxjs';

export class detailEvent{
    static hasUserSubmit$ = new Subject();

    static hasUserSubmitObs$ = detailEvent.hasUserSubmit$.asObservable();
    
    static sethasUserSubmit = state=>detailEvent.hasUserSubmit$.next(state);
} 