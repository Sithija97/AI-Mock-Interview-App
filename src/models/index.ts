export interface User {
  displayName: string | null;
  email: string | null;
  phoneNumber: null | string | number;
  photoURL: string | null;
  providerId: string | null;
  uid: string | null;
}

export interface InitialAuthState {
  user: User;
  isAuthLoading: boolean;
  isAuthSucess: boolean;
  isAuthError: boolean;
  message: string;
}
