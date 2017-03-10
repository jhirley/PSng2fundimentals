
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ISession, restrictedWords } from '../shared/index.barrel';

@Component({
    selector: 'create-session'
    ,templateUrl: 'app/events/event-details/create-session.component.html'
    ,styles:[`
    em {float: right; color: red; padding-left: 10px;}
    .error input, .error select, .error textarea {background-color : #e3c3c5;}
    .error ::-webkit-input-placeholder {color: #999; }
    .error ::-moz-placeholder {color: #999; }
    .error :-moz-input-placeholder {color: #999; }
    .error :ms-input-placeholder {color: #999; }
  `]
})
export class CreateSessionComponent implements OnInit {
    @Output() saveNewSession = new EventEmitter()
    @Output() cancelAddSession = new EventEmitter()

    newSessionForm : FormGroup
    name: FormControl
    presenter: FormControl
    duration: FormControl
    level: FormControl
    abstract: FormControl

    constructor() { }

    ngOnInit() { 
        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400),restrictedWords(['foo', 'bar','pudding'])])

        this.newSessionForm = new FormGroup({
            name: this.name
            ,presenter: this.presenter
            ,duration: this.duration
            ,level: this.level
            ,abstract: this.abstract
        })
    }
 

    saveSession(formValues){
        let session: ISession = {
            id: undefined
            ,name: formValues.name
            ,presenter: formValues.presenter
            ,duration: +formValues.duration
            ,level: formValues.level
            ,abstract: formValues.abstract
            ,voters: []
        }
        this.saveNewSession.emit(session)
    }

    cancel(){
        this.cancelAddSession.emit()
    }
}