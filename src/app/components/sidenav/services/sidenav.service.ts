import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SidenavService
{
    private _state: Subject<any> = new Subject();
    public state$ = this._state.asObservable();

    /**
     * Receive a state to open or close sidenav
     *
     * @param state
     */
    public changeState(state: boolean)
    {
        this._state.next(state);
    }

}
