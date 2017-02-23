import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';


export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent }
    ,{ path: 'events/:id', component: EventDetailsComponent }
    ,{ path: 'events', component: EventsListComponent}
    ,{ path: '', redirectTo: '/events', pathMatch: 'full' }
    ,{ path: '*', redirectTo: '/events', pathMatch: 'full' }
]

