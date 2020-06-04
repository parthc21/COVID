import {Subject} from 'rxjs';

export class PreviewEvent{
    static questionData$ = new Subject();

    static questionDataObs$ = PreviewEvent.questionData$.asObservable();
            
    static setquestionData = state=>PreviewEvent.questionData$.next(state);
}