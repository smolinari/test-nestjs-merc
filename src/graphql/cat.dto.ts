import { Field, ID, ObjectType, Int } from '@nestjs/graphql'

@ObjectType()
export class Cat {
  @Field(() => ID)
  id: number

  @Field()
  name: string

  @Field(() => Int)
  ownerId: number
}
