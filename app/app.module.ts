import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { 
    EventsListComponent
    ,EventThumbnailComponent
    ,EventDetailsComponent
    ,CreateEventComponent

    ,EventService
    ,EventRouteActivator
    ,EventListResolver
    ,CreateSessionComponent
    ,SessionListComponent
    ,durationPipe
    ,ProperCasePipe

 } from './events/index.barrel';

import {EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { Error404Component } from './errors/404.component';

// import { ToastrService } from './common/toastr.service'
import { TOASTR_TOKEN
    , Toastr
    ,JQ_TOKEN
    ,CollapsibleWellComponent
} from './common/index.barrel'

import { AuthService } from './user/auth.service';

import { appRoutes } from './routes';

declare let toastr : Toastr;
declare let jQuery : Object;

@NgModule({
    imports: [ 
        BrowserModule
        ,RouterModule.forRoot(appRoutes)
        ,FormsModule
        ,ReactiveFormsModule
        ],
    declarations: [ 
        EventsAppComponent
        ,NavBarComponent
        ,EventsListComponent
        ,EventThumbnailComponent
        ,EventDetailsComponent
        ,CreateEventComponent
        ,Error404Component
        ,CreateSessionComponent
        ,SessionListComponent
        ,CollapsibleWellComponent
        ,ProperCasePipe
        ,durationPipe
        ],
    providers:[
        EventService
        // ,ToastrService
        ,{
            provide: TOASTR_TOKEN,
            useValue: toastr
        }
        ,EventRouteActivator
        ,EventListResolver
        ,AuthService
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