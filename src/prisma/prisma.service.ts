import { Injectable, Global } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'
import { PrismaClient } from '../../generated/prisma';

@Global()
@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL'),
        },
      },
    });
  }
}
