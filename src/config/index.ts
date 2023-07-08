import { port, str } from 'envalid'
import { makeValidators, Static } from 'nestjs-envalid'

const config = {
  PORT: port({ default: 3001 }),
  GLOBAL_PREFIX: str({ default: 'api' }),
  DATABASE_URI: str({ default: 'mongodb://localhost:27017/nestjs-starter-template' })
}

export const validators = makeValidators(config)

export type Config = Static<typeof validators>

export const ENV = 'EnvalidModuleEnv'
