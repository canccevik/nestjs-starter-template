import { HttpExceptionFilter } from '@core/filters'
import { ValidationPipe } from '@core/pipes'
import { AppModule } from '@modules/app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { useContainer } from 'class-validator'
import { Config, ENV } from '@config/index'
import { LoggingInterceptor, TransformInterceptor } from '@core/interceptors'
import { Reflector } from '@nestjs/core'
import { Logger } from 'nestjs-pino'
import mongoSanitize from 'express-mongo-sanitize'
import compression from 'compression'
import helmet from 'helmet'

export function setupApp(app: NestExpressApplication): void {
  const config = app.get<Config>(ENV)

  useContainer(app.select(AppModule), { fallbackOnErrors: true })

  app.setGlobalPrefix(config.GLOBAL_PREFIX)

  app.use(helmet())
  app.use(compression())
  app.use(mongoSanitize())

  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalInterceptors(new TransformInterceptor(new Reflector()))

  if (!config.isTest) {
    const logger = app.get<Logger>(Logger)
    app.useGlobalInterceptors(new LoggingInterceptor(logger))
  }
}
