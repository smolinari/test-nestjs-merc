import { Module } from '@nestjs/common'
import { GraphqlModule } from './graphql/graphql.module'

@Module({
  imports: [GraphqlModule],
  controllers: [],
  providers: []
})
export class AppModule {}
