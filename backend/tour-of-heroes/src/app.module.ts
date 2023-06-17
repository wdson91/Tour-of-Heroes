import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';

/* eslint-disable */
@Module({

  imports: [
    HeroesModule,
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '../angular-build '),

    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
