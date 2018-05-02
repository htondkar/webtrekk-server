import 'reflect-metadata'

import { NestFactory } from '@nestjs/core'
import { AppModule } from './modules/App/app.module'
import serverConfig from 'serverConfig'

/**
 * Starts the server
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(serverConfig.port)
  if (serverConfig.onServerStart) serverConfig.onServerStart(serverConfig)
}

bootstrap()
