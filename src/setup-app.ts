import { HttpExceptionFilter } from '@core/filters'
import { NestExpressApplication } from '@nestjs/platform-express'

export function setupApp(app: NestExpressApplication): void {
  app.useGlobalFilters(new HttpExceptionFilter())
}
