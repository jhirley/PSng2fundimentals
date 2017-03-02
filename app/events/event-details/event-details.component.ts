import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IEvent } from '../shared/event.model';

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
    event: IEvent
    constructor(private eventService: EventService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
     }
}