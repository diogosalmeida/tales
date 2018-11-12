import { Module } from '@nestjs/common';
import { TimelineModule } from './timeline/timeline.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    TimelineModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      debug: true,
      include: [TimelineModule]
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
