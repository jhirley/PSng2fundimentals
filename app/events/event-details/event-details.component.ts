import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
 //   moduleId: module.id,
    selector: 'event-details',
    templateUrl: '/app/events/event-details/event-details.component.html'
    ,styles:[`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image {height: 100px;}
    `]
})
export class EventDetailsComponent implements OnInit {
    event: any
    constructor(private eventService: EventService) { }

    ngOnInit() {
        this.event = this.eventService.getEvent(1);
     }
}