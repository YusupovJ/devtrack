import { NestFactory } from "@nestjs/core";
import { AppModule } from "./modules/app/app.module.js";
import { ConfigService } from "@nestjs/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { setupApp } from "./setup-app.js";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  setupApp(app);

  const port = configService.get<number>("port")!;
  const whiteList = configService.get<string[]>("whiteList")!;
  const nodeEnv = configService.get<string>("nodeEnv")!;

  app.enableCors({
    credentials: true,
    origin: whiteList,
  });

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
