import { HttpExceptionFilter } from '@core/filters'
import { ValidationPipe } from '@core/pipes'
import { AppModule } from '@modules/app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { useContainer } from 'class-validator'

export function setupApp(app: NestExpressApplication): void {
  useContainer(app.select(AppModule), { fallbackOnErrors: true })

  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalFilters(new HttpExceptionFilter())
}
