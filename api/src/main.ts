import { NestFactory, Reflector } from "@nestjs/core";
import { AppModule } from "./modules/app/app.module.js";
import { ConfigService } from "@nestjs/config";
import { ClassSerializerInterceptor, ValidationPipe } from "@nestjs/common";
import { TypeormExceptionFilter } from "./common/filters/typeorm-exception.filter.js";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const port = configService.get<number>("port")!;
  const whiteList = configService.get<string[]>("whiteList")!;

  app.enableCors({
    credentials: true,
    origin: whiteList,
  });

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalFilters(new TypeormExceptionFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  await app.listen(port);
}

await bootstrap();
