import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
/* eslint-disable */
@Module({

  imports: [
    HeroesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../angular-build'),
      exclude: ['/api/(.*)'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
