import { apiSlice } from '../services/apiSlice';

interface User {
	first_name: string;
	last_name: string;
	email: string;
}

interface SocialAuthArgs {
	provider: string;
	state: string;
	code: string;
}

interface CreateUserResponse {
	success: boolean;
	user: User;
}

const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		retrieveUser: builder.query<User, void>({
			query: () => '/users/me/',
		}),
		socialAuthenticate: builder.mutation<
			CreateUserResponse,
			SocialAuthArgs
		>({
			query: ({ provider, state, code }) => ({
				url: `/o/${provider}/?state=${encodeURIComponent(
					state
				)}&code=${encodeURIComponent(code)}`,
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}),
		}),
		login: builder.mutation({
			query: ({ email, password }) => ({
				url: '/v1/auth/user-login',
				method: 'POST',
				body: { email, password },
			}),
		}),
		register: builder.mutation({
			query: ({
				first_name,
				last_name,
				email,
				password,
				password2,
			}) => ({
				url: '/v1/accounts/user-registration',
				method: 'POST',
				body: { first_name, last_name, email, password, password2 },
			}),
			
		}),
		verify: builder.mutation({
			query: ({email, otp, purpose}) => ({
				url: '/v1/accounts/otp/verify',
				method: 'POST',
				body:{ email, otp, purpose}
			}),
		}),
		logout: builder.mutation({
			query: ({refresh}) => ({
				url: '/v1/auth/user-logout',
				method: 'POST',
				body: {refresh}
			}),
		}),
		resetPassword: builder.mutation({
			query: email => ({
				url: '/v1/accounts/password-reset-otp',
				method: 'POST',
				body: { email  },
			}),
		}),
		resendOtp: builder.mutation({
			query: ({ email}) => ({
				url: '/v1/accounts/otp/resend',
				method: 'POST',
				body: { email},
			}),
		}),
	}),
});

export const {
	useRetrieveUserQuery,
	useSocialAuthenticateMutation,
	useLoginMutation,
	useRegisterMutation,
	useVerifyMutation,
	useLogoutMutation,
	useResetPasswordMutation,
	useResendOtpMutation,
} = authApiSlice;