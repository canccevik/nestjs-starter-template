import { Config, ENV } from '@config/index'
import { Inject, Injectable } from '@nestjs/common'
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

@Injectable()
export class DatabaseConfigService implements MongooseOptionsFactory {
  constructor(@Inject(ENV) private readonly config: Config) {}

  public async createMongooseOptions(): Promise<MongooseModuleOptions> {
    let databaseUri = this.config.DATABASE_URI

    if (this.config.isTest) {
      const mongoMemoryServer = await MongoMemoryServer.create()
      databaseUri = mongoMemoryServer.getUri()
    }

    return {
      uri: databaseUri
    }
  }
}
