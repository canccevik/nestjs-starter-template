<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">🐱 A NestJS template with essential features for quick startup.</p>

## Features

- Mongoose
- OpenAPI
- Logger ([pino](https://github.com/iamolegga/nestjs-pino))
- Test ([jest](https://github.com/jestjs/jest))
- Environment config object with types and validation ([nestjs-envalid](https://github.com/simenandre/nestjs-envalid))
- Repository design pattern
- Applied middlewares:
  - [helmet](https://github.com/helmetjs/helmet)
  - [compression](https://github.com/expressjs/compression)
  - [express-mongo-sanitize](https://github.com/fiznool/express-mongo-sanitize)
- Custom decorators:
  - [Message decorator](https://github.com/canccevik/nestjs-starter-template/blob/main/src/core/decorators/message.decorator.ts) (for setting message field of response)
- Filters:
  - [HTTP exception filter](https://github.com/canccevik/nestjs-starter-template/blob/main/src/core/filters/http-exception.filter.ts) (for catch every error and send it as a response)
- Pipes:
  - [Validation pipe](https://github.com/canccevik/nestjs-starter-template/blob/main/src/core/pipes/validation.pipe.ts) (for validating dtos)
- Interceptors:
  - [Logging interceptor](https://github.com/canccevik/nestjs-starter-template/blob/main/src/core/interceptors/logging.interceptor.ts) (for logging every request and response)
  - [Transform interceptor](https://github.com/canccevik/nestjs-starter-template/blob/main/src/core/interceptors/transform.interceptor.ts) (for transforming responses)

## Installation

1. Rename the `.env.example` file to `.env`

2. Install NPM packages

   ```bash
   npm install
   ```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

NestJS Starter Template is [MIT licensed](LICENSE).
