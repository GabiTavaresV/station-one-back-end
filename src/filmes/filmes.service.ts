import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { FilmeDTO } from './filme.dto';

@Injectable()
export class FilmesService {
  constructor(private prisma: PrismaService) {}

  async create(data: FilmeDTO) {
    const filmeExists = await this.prisma.filme.findFirst({
      where: {
        titulo: data.titulo,
      },
    });
    if (filmeExists) {
      throw new Error('Filme já existe');
    }
    const filme = await this.prisma.filme.create({
      data,
    });

    return filme;
  }

  async list() {
    const listFilmes = await this.prisma.filme.findMany();
    return listFilmes;
  }
}
