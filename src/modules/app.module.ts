import { Module } from '@nestjs/common'
import { EnvalidModule } from 'nestjs-envalid'
import { validators } from '@config/index'
import { DatabaseModule } from './database/database.module'
import { LoggerModule } from './logger/logger.module'
import { FeaturesModule } from '@features/features.module'

@Module({
  imports: [
    FeaturesModule,
    EnvalidModule.forRoot({
      validators,
      isGlobal: true,
      useDotenv: true
    }),
    LoggerModule,
    DatabaseModule
  ]
})
export class AppModule {}
