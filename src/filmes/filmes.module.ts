import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { FilmesController } from './filmes.controller';
import { FilmesService } from './filmes.service';

@Module({
  controllers: [FilmesController],
  providers: [FilmesService, PrismaService],
})
export class FilmesModule {}