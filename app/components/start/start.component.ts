import {Component} from 'angular2/core';
import {FirebaseEventPipe} from '../../utils/firebasepipe';
import {FBREF, DEFAULTIMGURL} from '../../app.constants';
// import {user} from './user'

@Component({
	selector: 'start',
	moduleId: 'app/components/start/',
	templateUrl: 'start.html',
	pipes: [FirebaseEventPipe],
	inputs: ['user']	
})

// class QuestionList{
// 	public questionsRef: Firebase;
// 	constructor(){
// 		debugger;
// 		this.questionsRef = new Firebase(FBREF + 'questions');
// 	}
	
// }


export class StartComponent {
	isLoggedIn: boolean;
	authRef: Firebase;
	authData: any;
	user: any;
	email: string;
	password: string;
	error: any;
	activeForm: string;
	constructor(){
		this.authRef  = new Firebase(FBREF);
		this.activeForm = "login";
		this.user = {};
	}
	
	login(){
		this.authRef.authWithPassword({
			email: this.email,
			password: this.password
		}, this.handleAuth.bind(this))
	}

	handleAuth(error, authData){
		if(error){
			return this.handleError(error)
		}
		this.user.email = this.email;
		this.user.uid = authData.uid;
		this.user.imgUrl = authData.password ? authData.password.profileImageURL : DEFAULTIMGURL;	
		this.authRef.child('users').child(authData.uid).update(this.user);
	}

	register(){
		this.authRef.createUser({
			email: this.email,
			password: this.password
		}, function (error){
			error ? this.handleError(error) : this.login.call(this)
		}.bind(this))
	}

	handleError(error){
		this.error = error
	}
	
	showForm(type){
		this.activeForm = type;
	}
	
}