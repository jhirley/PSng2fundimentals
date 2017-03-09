import { Component, Input } from '@angular/core';
import { ISession } from '../shared/index.barrel';

@Component({
    moduleId: module.id,
    selector: 'session-list',
    templateUrl: 'session-list.component.html'
})
export class SessionListComponent {
    @Input() sessions:ISession[]
    constructor() { }

}