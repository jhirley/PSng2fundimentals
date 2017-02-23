import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    // moduleId: module.id,
    // selector: 'selector',
    // templateUrl: 'create-event.component.html'
    template: `
    <h1>Create New Event</h1>
    <hr>
    <div class="col-md-6">
        <h3>[Create Event form will go here</h3>
        <br/>
        <br/>
        <button type= "submit" class = "btn btn-primary" >Save</button>
        <button type= "button" class = "btn btn-default" (click)="cancel()">Cancel</button>
    </div>
    `
})
export class CreateEventComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }
    cancel() {
        this.router.navigate(["/events"])
    }
}