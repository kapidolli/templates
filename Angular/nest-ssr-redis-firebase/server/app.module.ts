import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { configValidationSchema } from './configs/config.schema';
import { FirebaseService } from './configs/firebase.service';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`env.stage.${process.env['STAGE']}`],
      validationSchema: configValidationSchema,
    }),
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/nest-ssr-redis-firebase/browser'),
    }),
    AuthModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [FirebaseService],
})
export class AppModule {}
