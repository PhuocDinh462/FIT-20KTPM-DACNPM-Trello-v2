import * as Joi from 'joi'
import z from 'zod'
import { configuration } from '@/config'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller'
import { TestController } from './api/test/test.controller'

const EnvSchema = {
  PORT: Joi.number(),
  NODE_ENV: Joi.string(),
  DB_TYPE: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_NAME: Joi.string().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  JWT_REFRESH_SECRET: Joi.string().required(),
}

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object().keys(EnvSchema),
      load: [configuration],
    }),
  ],
  controllers: [AppController, TestController],
  providers: [],
})
export class AppModule {}
