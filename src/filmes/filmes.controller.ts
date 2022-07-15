import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { FilmeDTO } from './filme.dto';
import { FilmesService } from './filmes.service';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmeService: FilmesService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() data: FilmeDTO) {
    return this.filmeService.create(data);
  }

  @Get()
  @HttpCode(200)
  async list() {
    return this.filmeService.list();
  }
}
