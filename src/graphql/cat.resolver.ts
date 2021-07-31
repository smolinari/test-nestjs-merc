import { Resolver, Query } from '@nestjs/graphql'
import { Cat } from './cat.dto'

@Resolver(() => Cat)
export class CatResolver {
  @Query(() => String)
  helloCat () {
    return 'hello kitty!'
  }
}
