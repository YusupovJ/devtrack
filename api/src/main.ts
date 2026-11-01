import { NestFactory } from "@nestjs/core";
import { AppModule } from "./modules/app/app.module.js";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const port = configService.get<number>("port")!;
  const whiteList = configService.get<string[]>("whiteList")!;

  app.enableCors({
    credentials: true,
    origin: whiteList,
  });

  await app.listen(port);
}
await bootstrap();
