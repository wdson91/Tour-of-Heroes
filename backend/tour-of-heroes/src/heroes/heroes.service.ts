import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { PrismaService } from 'prisma.service';

/* eslint-disable */
@Injectable()
export class HeroesService {
  constructor(private prisma: PrismaService) { }
  async create(createHeroDto: CreateHeroDto) {
    const { name, specialPower } = createHeroDto;

    const heroExists = await this.prisma.hero.findFirst({
      where: {
        name: createHeroDto.name,
      },
    });
    if (heroExists) {
      throw new BadRequestException('Hero already exists');
    }


    try {

      const hero = await this.prisma.hero.create({
        data: {
          name,
          specialPower,
        },
      });
      return { message: 'Hero created successfully' }
    } catch (error) {
      throw new BadRequestException(error);
    }

  }

  async findAll() {
    try {
      return await this.prisma.hero.findMany();

    } catch (error) {
      throw new BadRequestException(error);
    }

  }

  async findOne(id: number) {

    try {
      const hero = await this.prisma.hero.findUnique({
        where: {
          id: id,
        },
      });
      if (!hero) {
        throw new BadRequestException('Hero does not exist');
      }
      return hero;
    } catch (error) {
      throw new BadRequestException(error);

    }
  }

  async update(id: number, updateHeroDto: UpdateHeroDto) {

    const { name, specialPower } = updateHeroDto;

    const heroExistsByName = await this.prisma.hero.findFirst({
      where: {
        name: updateHeroDto.name,
      },
    });
    if (heroExistsByName && heroExistsByName.id !== id) {
      throw new BadRequestException('Hero already exists');
    }


    const heroExistsById = await this.prisma.hero.findFirst({
      where: {
        id: id,
      },
    });
    if (!heroExistsById && heroExistsById.id !== id) {
      throw new BadRequestException('Hero does not exist');
    }
    try {


      await this.prisma.hero.update({
        where: {
          id: id,
        },
        data: {
          name,
          specialPower,
        },
      });
      return { message: 'Hero updated successfully' }
    }
    catch (error) {
      throw new BadRequestException(error);
    }

  }

  remove(id: number) {

    const heroExistsById = this.prisma.hero.findFirst({
      where: {
        id: id,
      },
    });
    if (!heroExistsById) {
      throw new BadRequestException('Hero does not exist');
    }
    try {
      this.prisma.hero.delete({
        where: {
          id: id,
        },
      });
      return { message: 'Hero deleted successfully' }
    } catch (error) {
      throw new BadRequestException(error);
    }

  }
}
