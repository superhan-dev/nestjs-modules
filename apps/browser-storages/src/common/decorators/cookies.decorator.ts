import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Cookies = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    console.log(request.cookies);
    console.log(data);

    return data ? request.cookies?.[data] : request.cookies;
  },
);
