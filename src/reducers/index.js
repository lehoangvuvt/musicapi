import {REGISTER} from '../constants/action-type';
import {LOGIN} from '../constants/action-type';
import {REDIRECT_PAGE} from '../constants/action-type';
import {SIGNOUT} from '../constants/action-type';
import User from '../data/user';
const initialState = {
	user:User,
	username:"asd",
	password:"",
	country:"japan",
	valid:false,
	view:"ABOUT"
}

function rootReducer(state=initialState,action){
	switch(action.type){
		case REGISTER:
			User.push(action.payload);
			return{
				...state,
				user:User,
				view:"LOGIN"
				}
		case LOGIN:
			state.username = action.payload.username;
			state.password = action.payload.password;
			User.forEach(user=>{
				if(state.username.toUpperCase() === user.username.toUpperCase() && state.password === user.password){
					state.valid=true;
					state.password="*****";
					state.country=user.country;
					state.view="USERPAGE";
				}
			});
			return state;
		case REDIRECT_PAGE:
			return{
				...state,
				view:action.view
			}
		case SIGNOUT:
			return{
				...state,
				username:action.payload.username,
				password:action.payload.password,
				valid:action.payload.valid,
				view:action.payload.view
			}
		default:
			return state;
	}
};
export default rootReducer;