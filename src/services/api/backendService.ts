import axios from 'axios';
import { getAuthToken } from '../firebase/authService';

const beClient = axios.create({
  baseURL: process.env.API_URL,
});

beClient.interceptors.request.use(async (config) => {
  const token = await getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const apiHealthCheck = async (checkPublicHealth = false) => {
  try {
    const url = checkPublicHealth ? '/app/health/public' : '/app/health';
    await beClient.get(url);
    return true;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const createUser = async () => {
  try {
    await beClient.post('/user');
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const verifyEmail = async () => {
  try {
    await beClient.patch('/user/verify-email');
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const addOrganization = async (name: string) => {
  try {
    await beClient.post('/account', { name });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const doesUserBelongToOrg = async (): Promise<boolean> => {
  try {
    const { data } = await beClient.get('/user/account-status');
    return data && data.hasAccount === true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

// May be used to create api user after provider authentication or to determine user org status
export const apiLogin = async () => {
  try {
    const { data } = await beClient.post('/user/login');
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
