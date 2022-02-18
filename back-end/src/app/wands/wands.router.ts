import { Wand } from '@entity/wand';
import { Body, Controller, Delete, Get, Post, Put, Query, Route, Tags } from 'tsoa';
import { getAllWands, createWand, updateWand, deleteWand, loadWands } from './wands.service';
import * as WandsData from 'src/database/data.json';

@Tags('Wand')
@Route('/wands')
export class WandController extends Controller {

  @Get('/get-all/')
  public async getAllWand() {
    return getAllWands();
  }

  @Post('/create/')
  public async createWand(@Body() body: { title: string, image: string, description: string, shortDescription: string }) {
    return createWand({ title: body.title, image:  body.image, description:  body.description, shortDescription:  body.shortDescription });
  }

  @Post('/load-all/')
  public async loadWands() {
    return loadWands(WandsData);
  }

  @Put('/update/{id}/')
  public async updateWand(@Query('id') id: string, @Body() body: { title: string, image: string, description: string, shortDescription: string }) {
    return updateWand({ id: Number(id), title: body.title, image:  body.image, description:  body.description, shortDescription:  body.shortDescription });
  }

  @Delete('/delete/{id}/')
  public async deleteWand(@Query('id') id: string) {
    console.log('Wand id =', id);
    return deleteWand({ id: Number(id) });
  }

}

