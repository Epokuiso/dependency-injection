import { NestFactory } from "@nestjs/core";
import { ComputerModule } from "./computer/computer.module";

const bootstrap = async () => {
    const app = await NestFactory.create(ComputerModule);
    await app.listen (3000);
}
bootstrap();