import * as Joi from '@hapi/joi';

export const configValidationSchema = Joi.object({
  PORT: Joi.number().default(3000),
  STAGE: Joi.string().default('development'),
  REDIS_URL: Joi.string().default('redis://localhost:6379'),
  FIREBASE_CLIENT_EMAIL: Joi.string().required(),
  FIREBASE_PROJECT_ID: Joi.string().required(),
  FIREBASE_PRIVATE_KEY: Joi.string().required()
});
