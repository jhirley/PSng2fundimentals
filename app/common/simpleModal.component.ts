
import { Component, Input, ViewChild, ElementRef, Inject} from '@angular/core';
import { JQ_TOKEN } from '../common/jQuery.service';

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
    @ViewChild('modalcontainer') containerEl: ElementRef;
    constructor(
        @Inject(JQ_TOKEN) private $ : any  
    ) { }

    closeModal(){
        this.$(this.containerEl.nativeElement).modal('hide');
    }
}