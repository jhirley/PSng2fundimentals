import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template : `
<div>
    <h1>Upcoming Angular 2 Events</h1>
    <hr />
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span>&nbsp;</span>
            <span>{{event.location.city}}, {{event.location.country}}</span>
        </div>
    </div>
</div>
`
   // templateUrl: './events/events-list.component.html' 
})

export class EventsListComponent {

    event = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2013',
        time: '10:00 am',
        price: 599.99,
        imageUrl: 'app/assets/images/angularconnect-shield.png',
        location: {
            address: '1058 DT',
            city: 'London',
            country: 'England'
        }
    }

}