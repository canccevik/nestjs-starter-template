import { HttpExceptionFilter } from '@core/filters'
import { ValidationPipe } from '@core/pipes'
import { AppModule } from '@modules/app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { useContainer } from 'class-validator'
import { Config, ENV } from '@config/index'
import { TransformInterceptor } from '@core/interceptors'
import { Reflector } from '@nestjs/core'

export function setupApp(app: NestExpressApplication): void {
  const config = app.get<Config>(ENV)

  useContainer(app.select(AppModule), { fallbackOnErrors: true })

  app.setGlobalPrefix(config.GLOBAL_PREFIX)

  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalInterceptors(new TransformInterceptor(new Reflector()))
}
