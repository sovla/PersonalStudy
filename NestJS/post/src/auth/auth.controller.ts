import { AuthService } from './auth.service';
import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { Request, Response } from 'express';
import { AuthGuard, RolesGuard } from './security/auth.guard';
import { Roles } from './decorator/role.decorator';
import { RoleType } from './role-type';

@Controller('api')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  @UsePipes(ValidationPipe)
  async registerAccount(@Body() userDTO: UserDTO): Promise<any> {
    return await this.authService.registerNewUser(userDTO);
  }

  @Post('/login')
  async login(@Body() userDTO: UserDTO, @Res() res: Response): Promise<any> {
    const jwt = await this.authService.validateUser(userDTO);
    res.setHeader('Authorization', 'Bearer ' + jwt.accessToken);

    res.cookie('jwt', jwt.accessToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1days
      domain: 'localhost',
      path: '/',
    });
    res.cookie('jwt1', jwt.accessToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1days
      domain: '.localhost.com',
      path: '/',
    });

    return res.send({
      message: 'success',
    });
  }

  @Post('/logout')
  logout(@Req() req: Request, @Res() res: Response): any {
    res.header({
      'Access-Control-Allow-Credentials': true,
    });
    res.cookie('jwt', '', {
      maxAge: 0,
    });
    return res.send({
      message: 'success',
    });
  }

  @Get('/cookies')
  getCookies(@Req() req: Request, @Res() res: Response): any {
    const jwt = req.cookies['jwt'];
    return res.send(jwt);
  }

  @Get('/authenticate')
  @UseGuards(AuthGuard)
  isAuthenticated(@Req() req: Request): any {
    const user: any = req.user;
    return user;
  }

  @Get('/admin-role')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(RoleType.ADMIN)
  adminRole(@Req() req: Request): any {
    const user: any = req.user;
    return user;
  }
}
