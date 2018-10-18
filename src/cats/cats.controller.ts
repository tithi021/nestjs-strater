import { Controller, Get, Req, Post, Param } from '@nestjs/common';
import { create } from 'domain';

@Controller('cats')
export class CatsController {
   @Get(':id')
   findOne(@Param() params) {
       console.log(params.id)
       return `This action returns a #${params.id} cat`;
   }

   @Post()
   create() {
       return 'This action create a new Cat'
   }
}
