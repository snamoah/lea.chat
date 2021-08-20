import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ChatModule } from './chat/chat.module'
import { serverConfig } from './config'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [serverConfig],
      cache: true,
    }),
    ChatModule,
  ],
})
export class AppModule {}
