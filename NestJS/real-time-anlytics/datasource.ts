import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'myuser',
  password: 'mypassword',
  database: 'mydatabase',
  synchronize: false,
  entities: ['src/**/*.entity.ts'],
  migrations: [__dirname + '/**/migrations/*.js}'], // 마이그레이션을 수행할 파일이 관리되는 경로 설정
  migrationsTableName: 'migrations', // 마이그레이션 테이블 명
});
