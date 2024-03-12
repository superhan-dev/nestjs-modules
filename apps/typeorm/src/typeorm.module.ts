import { Module } from '@nestjs/common';
import { TypeormController } from './typeorm.controller';
import { TypeormService } from './typeorm.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/typeorm/.env',
    }),
    DatabaseModule,
    ItemsModule,
  ],
  controllers: [TypeormController],
  providers: [TypeormService],
})
export class TypeormModule {}
