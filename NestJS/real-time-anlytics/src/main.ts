import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 검증 데코레이터가 없는 필드 제거
      forbidNonWhitelisted: true, // 화이트리스트에 없는 속성이 있으면 요청 거부
      transform: true, // 받은 데이터를 DTO에 정의된 타입으로 자동 변환
      disableErrorMessages: false, // 오류 메시지 표시 활성화
      validationError: { target: false }, // 응답에 대상 객체 포함 비활성화
      stopAtFirstError: true, // 첫 번째 오류 발견 시 검증 중단
    }),
  );
  await app.listen(3000);
}
bootstrap();
