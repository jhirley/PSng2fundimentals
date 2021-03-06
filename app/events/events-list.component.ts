import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';

import { IEvent } from './shared/event.model';

import { EventService } from './shared/event.service'
// import { ToastrService } from '../common/toastr.service'

@Component({
   // selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html'

})

export class EventsListComponent implements OnInit {
    events:IEvent[]
    constructor(
        private eventService: EventService
        // ,private toastr: ToastrService
        ,private route: ActivatedRoute
        ){
    }
    ngOnInit() {
        this.events =  this.route.snapshot.data['events']
    }
    // handleThumbnailClick(eventName){
    //     this.toastr.success(eventName);
    // }
}