
import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'simple-modal',
    templateUrl: 'simpleModal.component.html',
    styles: [`
        .modal-body { height: 250px; overflow-y : scroll; }
    `]
})
export class simpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    constructor() { }

    
}