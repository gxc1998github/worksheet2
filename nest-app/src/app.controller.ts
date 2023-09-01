// controller, the waitress for clients

import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

// mock up database
import { ARTICLES } from './dummydata/articles';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //create an end point
  @Get('/api/articles')
    getArticles(): any[] {
      return ARTICLES;
    }

  //create an end point with parameter
  @Get('/api/articles:id')
    getArticlesById(@Param('id') id: string): any[] {
      return ARTICLES.find((n)=> n._id === id );
    }
}
