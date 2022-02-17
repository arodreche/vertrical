import { Wand } from '@entity/wand';
import { Body, Controller, Delete, Get, Post, Put, Query, Route, Tags } from 'tsoa';
import { getAllWands, createWand, updateWand, deleteWand, loadWands } from './wands.service';
// import * as WandsData from 'src/database/data.json';

@Tags('Wand')
// @Route('/api/wand-permission')
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
  public async loadWands(@Body() body: any) {
    const WandsData: any[] = [
      {
          "title": "Harry Potter",
          "image": "http://hp-api.herokuapp.com/images/harry.jpg",
          "description": "wood: holly, core: phoenix feather, length: 11",
          "shortDescription": "This wand has a twin... and it belongs to the Dark Lord."
      },
      {
          "title": "Hermione Granger",
          "image": "http://hp-api.herokuapp.com/images/hermione.jpeg",
          "description": "wood: vine, core: dragon heartstring, length: unknown",
          "shortDescription": "Awesome from outside. Very powerful from inside."
      },
      {
          "title": "Ron Weasley",
          "image": "http://hp-api.herokuapp.com/images/ron.jpg",
          "description": "wood: willow, core: unicorn tail-hair, length: 14",
          "shortDescription": "Inherited from their elder brothers, but still very practical."
      },
      {
          "title": "Cho Chang",
          "image": "http://hp-api.herokuapp.com/images/cho.jpg",
          "description": "wood: oak, core: goblin skin fibre, length: 14",
          "shortDescription": "It gets more powerful as it's owner's power grows."
      },
      {
          "title": "Luna Lovegood",
          "image": "http://hp-api.herokuapp.com/images/luna.jpg",
          "description": "wood: yew, core: grindylow hear, length: 14",
          "shortDescription": "Specialty: Reducto and fighting nargles."
      }
  ];
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

