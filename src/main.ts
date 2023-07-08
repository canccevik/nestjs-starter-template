import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './modules/app.module'
import { Config, ENV } from './config'

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true })

  const config = app.get<Config>(ENV)

  await app.listen(config.PORT)
}
bootstrap()
