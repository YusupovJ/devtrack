import { NestFactory, Reflector } from "@nestjs/core";
import { AppModule } from "./modules/app/app.module.js";
import { ConfigService } from "@nestjs/config";
import { ClassSerializerInterceptor, ValidationPipe } from "@nestjs/common";
import { TypeormExceptionFilter } from "./common/filters/typeorm-exception.filter.js";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const port = configService.get<number>("port")!;
  const whiteList = configService.get<string[]>("whiteList")!;
  const nodeEnv = configService.get<string>("nodeEnv")!;

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

  const swaggerConfig = new DocumentBuilder()
    .setTitle("Devtrack API")
    .setDescription("Todo & Task tracking application REST API")
    .setVersion("1.0")
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, swaggerConfig);
  if (nodeEnv === "dev") {
    SwaggerModule.setup("docs", app, documentFactory, {
      jsonDocumentUrl: "docs/json",
      yamlDocumentUrl: "docs/yaml",
    });
  }

  await app.listen(port);
}

await bootstrap();
