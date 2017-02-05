import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  isEqual } from '../app/validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	registration: FormGroup;
	dataFromform:any;

	constructor(private _build:FormBuilder) {
		this.registration = this._build.group({
			firstName: ['', Validators.compose([ Validators.required, Validators.minLength(3)])],
			lastName: ['', Validators.compose([ Validators.required, Validators.minLength(3)])],
			password: ['', Validators.compose([ Validators.required, Validators.pattern('^[A-Za-z0-9]{6,}$')])],
			password2: ['', Validators.required],
			// telephone: ['', Validators.compose([ Validators.required, Validators.pattern('^\(\d{3}\)\d{3}-\d{2}-\d{2}$')])]
		}, {validator: isEqual('password', 'password2')});
	}

	ngOnInit() {
		this.registration.valueChanges
		.subscribe(value => {
			//console.log(value);
			this.dataFromform = value;
		});
	}

	onSubmit() {
		console.log(this.dataFromform);
	}
}
