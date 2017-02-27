import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router';

import {EventsAppComponent } from './events-app.component'
import {EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { NavBarComponent } from './nav/navbar.component'
import { Error404Component } from './errors/404.component';

import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service'
import { EventRouteActivator } from './events/event-details/event-route-activator.service';

import { appRoutes } from './routes';


@NgModule({
    imports: [ 
        BrowserModule
        ,RouterModule.forRoot(appRoutes)
        ],
    declarations: [ 
        EventsAppComponent
        ,NavBarComponent
        ,EventsListComponent
        ,EventThumbnailComponent
        ,EventDetailsComponent
        ,CreateEventComponent
        ,Error404Component
        ],
    providers:[
        EventService
        ,ToastrService
        ,EventRouteActivator
        ,{
            provide: 'canDeactivateCreateEvent'
            ,useValue: checkDirtyState}
        ],
    bootstrap: [EventsAppComponent]    
})
export class AppModule {}

function checkDirtyState(component: CreateEventComponent){
    if (component.isDirty)
        return window.confirm('you are a dirty girl!')
    return true
}