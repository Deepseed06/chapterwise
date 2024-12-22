import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
	isAuthenticated: boolean;
	isLoading: boolean;
}
  function getLoggedInState (){
	if(typeof window !=='undefined' ){
		const isLoggedIn = localStorage.getItem('isLoggedIn');
		return Boolean(isLoggedIn)?true:false
	}
	}
	function getCookie(name :string) {
		if(typeof window !=='undefined' ){
			
			const value = `; ${document.cookie}`;
			const parts = value.split(`; ${name}=`);
			if (parts.length === 2) {
				return true
			}
			else{
				return false
			}
		}
		
	}
	
	const loggedInState = typeof window !=='undefined'? getLoggedInState() || getCookie('refresh'): ''
	// console.log('check state',getLoggedInState())
	// console.log('getting cookies',getCookie('refresh'))

const initialState = {
	isAuthenticated: loggedInState,
	isLoading: true,
} as AuthState;

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: state => {
			localStorage.setItem('isLoggedIn',String(true))
			const isLoggedIn = typeof window !=='undefined'?  localStorage.getItem('isLoggedIn'):''
			state.isAuthenticated = Boolean(isLoggedIn);

		},
		logout: state => {
			// localStorage.setItem('isLoggedIn', String(false))
			localStorage.removeItem('isLoggedIn')
			state.isAuthenticated = false;
		},
		finishInitialLoad: state => {
			state.isLoading = false;
		},
	},
});

export const { setAuth, logout, finishInitialLoad } = authSlice.actions;
export default authSlice.reducer;