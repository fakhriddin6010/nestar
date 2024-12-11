import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import MemberSchema from '../../schemas/Member.model';
import { AuthModule } from '../auth/auth.module';
import { MemberResolver } from './member.resolver';
import { MemberService } from './member.service';
import { ViewModule } from '../view/view.module';

@Module({
	imports: [MongooseModule.forFeature([
		{ name: 'Member', schema: MemberSchema }
	]),
	 AuthModule, 
	 ViewModule,
	],
	providers: [MemberResolver, MemberService],
	exports: [MemberService]
})
export class MemberModule {}
