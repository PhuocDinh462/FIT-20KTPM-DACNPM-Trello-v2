import * as Joi from 'joi'

import { configuration } from '@/config'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo'
import { AppController } from './app.controller'
import { AuthModule } from './auth/auth.module'
import { BoardModule } from './board/board.module'
import { CardModule } from './card/card.module'
import { CardlistModule } from './cardlist/cardlist.module'
import { TestController } from './test/test.controller'
import { UserModule } from './user/user.module'
import { WorkspaceModule } from './workspace/workspace.module'
import { TasksModule } from '@/tasks/tasks.module'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { TypeOrmModule } from '@nestjs/typeorm'
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
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    MongooseModule.forRoot('mongodb://MONGO_USER:MONGO_123@localhost:7001/trello?authSource=admin'),
    CardlistModule,
    WorkspaceModule,
    UserModule,
    BoardModule,
    CardModule,
    AuthModule,
    TasksModule,
  ],
  controllers: [AppController, TestController],
  providers: [],
})
export class AppModule {}
