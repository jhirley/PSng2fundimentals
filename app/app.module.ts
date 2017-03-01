import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router';

import { 
    EventsListComponent
    ,EventThumbnailComponent
    ,EventDetailsComponent
    ,CreateEventComponent

    ,EventService
    ,EventRouteActivator
    ,EventListResolver

 } from './events/index.barrel';

import {EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { Error404Component } from './errors/404.component';

import { ToastrService } from './common/toastr.service'

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
        ,EventListResolver
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