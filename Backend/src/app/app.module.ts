import { join } from 'path'

import { BookModule } from '@/graphql/api/book/book.module'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose'

import { AppController } from './app.controller'
import { AuthModule } from './auth/auth.module'
import { BoardModule } from './board/board.module'
import { CardModule } from './card/card.module'
import { CardlistModule } from './cardlist/cardlist.module'
import { TestController } from './test/test.controller'
import { UserModule } from './user/user.module'
import { WorkspaceModule } from './workspace/workspace.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
      subscriptions: {
        'graphql-ws': true,
      },
      sortSchema: true,
    }),
    MongooseModule.forRoot('mongodb://MONGO_USER:MONGO_123@localhost:7000/trello?authSource=admin'),
    CardlistModule,
    WorkspaceModule,
    UserModule,
    BoardModule,
    CardModule,
    AuthModule,
    BookModule,
  ],
  controllers: [AppController, TestController],
  providers: [],
})
export class AppModule {}
