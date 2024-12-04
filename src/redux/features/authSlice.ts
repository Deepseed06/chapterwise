import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
	isAuthenticated: boolean;
	isLoading: boolean;
}
  function getLoggedInState (){
	const isLoggedIn = 	localStorage.getItem('isLoggedIn');
	 return Boolean(isLoggedIn)?true:false
	}
	const loggedInState = getLoggedInState()

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
			const isLoggedIn = localStorage.getItem('isLoggedIn')
			state.isAuthenticated = Boolean(isLoggedIn);

		},
		logout: state => {
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