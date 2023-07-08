import { NestExpressApplication } from '@nestjs/platform-express'
import { Test } from '@nestjs/testing'
import { AppModule } from '@modules/app.module'

export async function createE2ETestApp(): Promise<NestExpressApplication> {
  const module = await Test.createTestingModule({
    imports: [AppModule]
  }).compile()

  const app = module.createNestApplication<NestExpressApplication>()

  return app.init()
}
