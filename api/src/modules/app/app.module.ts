import { Module } from "@nestjs/common";
import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";
import { ConfigModule, ConfigService } from "@nestjs/config";
import configuration from "../../config/configuration.js";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfigService } from "../../config/typeorm.js";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
