import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { IEvent, ISession } from '../shared/event.model';

import { EventService } from '../shared/event.service';

@Component({
 //   moduleId: module.id,
    selector: 'event-details',
    templateUrl: 'app/events/event-details/event-details.component.html'
    ,styles:[`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image {height: 100px;}
    a {cursor: pointer; padding-left: 10px; text-align: right !important;}
    `]
})
export class EventDetailsComponent implements OnInit {
    event: IEvent
    addMode:boolean
    filterBy: string = 'all';
    sortBy: string = 'votes';

    constructor(
        private eventService: EventService
        ,private route: ActivatedRoute
        ) { }

    ngOnInit() {
        this.route.data.forEach((data ) => {
            this.event = data['event'];
            this.addMode=false;
        })    
    }
     
     addSession(){
        this.addMode = true
     }

     saveNewSession(session:ISession){
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));

        session.id = nextId + 1
        this.event.sessions.push(session);
        this.eventService.saveEvent(this.event).subscribe(result => {
            this.addMode=false;
        });
        
     }

     cancelAddSession(){
         this.addMode=false
     }
}