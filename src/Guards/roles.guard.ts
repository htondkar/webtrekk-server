import { Guard, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'

@Guard()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(req, context: ExecutionContext): boolean {
    const { parent, handler } = context
    const handlerRoles = this.reflector.get<string[]>('roles', handler)

    if (!handlerRoles) return true

    const user = req.user
    if (!user) return false

    const hasRole = () =>
      !!user.roles.find(role => !!handlerRoles.find(item => item === role))

    return user.roles && hasRole()
  }
}
