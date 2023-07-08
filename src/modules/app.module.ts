import { Module } from '@nestjs/common'
import { EnvalidModule } from 'nestjs-envalid'
import { validators } from '@config/index'
import { DatabaseModule } from './database/database.module'

@Module({
  imports: [
    EnvalidModule.forRoot({
      validators,
      isGlobal: true,
      useDotenv: true
    }),
    DatabaseModule
  ]
})
export class AppModule {}
