import { Module } from '@nestjs/common'
import { MercuriusModule } from 'nestjs-mercurius'
import { CatResolver } from './cat.resolver'

@Module({
  imports: [
    MercuriusModule.forRoot({
      autoSchemaFile: true,
      graphiql: true,
      context: (request, reply) => ({ request, reply }),
      subscription: {
        context: (request, reply) => ({ request, reply })
      }
    })
  ],
  providers: [
    CatResolver
  ]
})
export class GraphqlModule {}
