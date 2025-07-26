import { env } from '$env/dynamic/public';

export const config = {
  API_URL: env.PUBLIC_API_URL || 'http://localhost:3000',
  APP_NAME: env.PUBLIC_APP_NAME || 'Formeta Labs',
  APP_VERSION: env.PUBLIC_APP_VERSION || '2.0.0'
};
