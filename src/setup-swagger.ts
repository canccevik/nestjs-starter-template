import { NestExpressApplication } from '@nestjs/platform-express'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { Config, ENV } from '@config/index'
import { version } from '../package.json'

export function setupSwagger(app: NestExpressApplication): void {
  const config = app.get<Config>(ENV)

  const swaggerTitle = 'NestJS Starter Template'
  const swaggerDescription = 'Official API documentation of NestJS Starter Template'

  const swaggerConfig = new DocumentBuilder()
    .setTitle(swaggerTitle)
    .setDescription(swaggerDescription)
    .setVersion(version)
    .build()

  const document = SwaggerModule.createDocument(app, swaggerConfig)

  SwaggerModule.setup('/', app, document)
  SwaggerModule.setup(config.GLOBAL_PREFIX, app, document)
}
