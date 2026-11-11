import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  private isDev: boolean;
  constructor(private configService: ConfigService) {
    this.isDev = this.configService.get("nodeEnv") === "dev";
  }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: "postgres",
      host: this.configService.get("database.host"),
      port: this.configService.get("database.port"),
      username: this.configService.get("database.user"),
      password: this.configService.get("database.password"),
      database: this.configService.get("database.name"),
      autoLoadEntities: true,
      synchronize: this.isDev,
    };
  }
}
