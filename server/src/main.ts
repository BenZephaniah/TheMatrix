import * as process from "node:process";
import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {NestExpressApplication} from "@nestjs/platform-express";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function start() {
    const PORT = process.env.PORT || 5001;
    const app = await NestFactory.create<NestExpressApplication>(AppModule)

    const config = new DocumentBuilder()
        .setTitle("Чат(наверно)")
        .setDescription("Дока REST API")
        .setVersion("1.0.0")
        .addTag("stepa")
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    await app.listen(PORT, () => console.log(`Listening on ${PORT}`));
}

start()