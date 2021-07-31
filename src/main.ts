import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify'
import { AppModule } from './app.module'
import { Logger } from '@nestjs/common'

async function bootstrap () {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  )
  await app.listen(3000, () => {
    Logger.log('Listening at http://localhost:3000/graphql')
  })
}
void bootstrap()
