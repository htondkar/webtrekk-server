import { NestFactory } from '@nestjs/core'
import { AppModule } from './modules/App/app.module'
import colors from 'colors'

const PORT = 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  await app.listen(PORT)

  console.log('\x1b[36m%s\x1b[0m', `[Nest] listening on port ${PORT}`)
}

bootstrap()
