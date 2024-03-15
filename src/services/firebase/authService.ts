import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from './init';
import { FirebaseError } from 'firebase/app';

export const getUser = (): User | null => {
  const user = auth.currentUser;
  return user;
};

export const getUserOrThrow = (): User => {
  const user = getUser();
  if (user === null) {
    throw new Error('login_required');
  }
  return user;
};

const refreshUser = async () => {
  const user = getUserOrThrow();
  await user.reload();
};

export const signUpUser = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (userCredential.user) {
      await sendEmailVerification(userCredential.user);
    }
    return userCredential;
  } catch (err) {
    console.error('ARGH! signUpUser', err);
    throw err;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (err) {
    if (err instanceof FirebaseError) {
      if (err.code === FirebaseErrorCode.InvalidCredential) {
        return { failed: 'Invalid username or password' };
      }
      // Include other FirebaseError handling here as needed
    }

    console.error('Unknown login error', err);
    throw err;
  }
};

type FirebaseUserUpdate = {
  displayName?: string | null;
  photoURL?: string | null;
};
export const updateUser = async (updates: FirebaseUserUpdate) => {
  try {
    let user = getUserOrThrow();

    await updateProfile(user, updates);
    user = getUserOrThrow();
    return user;
  } catch (err) {
    console.error('Update User failed', err);
    throw err;
  }
};

export const resendEmailVerification = async () => {
  const user = auth.currentUser;

  if (!user) {
    console.warn('No authenticated user found');
    // @TODO probably create a custom error
    throw new Error('Login required');
  }

  try {
    await sendEmailVerification(user);
  } catch (err) {
    console.error(
      'sendEmailVerification in resendEmailVerification failed',
      err
    );
  }
};

export const getAuthToken = async (
  forceRefresh = false
): Promise<string | null> => {
  console.log('getAuthtoken called');
  const user = auth.currentUser;
  if (!user) return null;

  let token = await user.getIdToken(forceRefresh);
  const claims = getDecodedJWTClaims(token);

  if (!claims.email_verified && !forceRefresh) {
    token = await user.getIdToken(true);
  }

  return token;
};

export const isUserEmailVerified = async () => {
  await refreshUser();
  const user = getUserOrThrow();
  return user.emailVerified;
};

const FirebaseErrorCode = {
  InvalidCredential: 'auth/invalid-credential',
};

// Helpers
const getDecodedJWTClaims = (token: string) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonClaims = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );
  const claims = JSON.parse(jsonClaims);
  console.log('claims', claims);
  return claims;
};
