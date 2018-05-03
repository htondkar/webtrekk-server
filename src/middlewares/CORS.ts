import { ExpressMiddleware, Middleware, NestMiddleware } from '@nestjs/common'

@Middleware()
export class CorsMiddleware implements NestMiddleware {
  resolve(): ExpressMiddleware {
    const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001']

    return (req, res, next) => {
      if (allowedOrigins.indexOf(req.header('Origin')) > -1) {
        res.header('Access-Control-Allow-Origin', req.header('Origin'))
        res.header('Access-Control-Allow-Headers', 'content-type')
        res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE')
      }

      next()
    }
  }
}
