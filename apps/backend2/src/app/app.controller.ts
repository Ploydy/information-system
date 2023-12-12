import { Controller, Get } from '@nestjs/common';
/* import mongoose from "mongoose"; */
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getData() {
    /* if( !mongoose.Types.ObjectId.isValid(id) ) return false; */
    return this.appService.getData();
  }
}
