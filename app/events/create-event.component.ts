import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from './shared/index.barrel';

@Component({
    // moduleId: module.id,
    // selector: 'selector',
    // templateUrl: 'create-event.component.html'
    templateUrl: 'app/events/create-event.component.html'
    ,styles: [`
    em {float: right; color: red; padding-left: 10px;}
    .error input {background-color : #e3c3c5;}
    .error ::-webkit-input-placeholder {color: #999; }
    .error ::-moz-placeholder {color: #999; }
    .error :-moz-input-placeholder {color: #999; }
    .error :ms-input-placeholder {color: #999; }
  `] 
})
export class CreateEventComponent implements OnInit {
    isDirty: boolean = true
    constructor(
        private router: Router
        ,private eventService: EventService) { }

    ngOnInit() { }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues).subscribe(event => {
            this.router.navigate(["/events"]);
            this.isDirty=false
        })
    }
    cancel() {
        this.router.navigate(["/events"])
    }
}