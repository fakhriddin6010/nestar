import { Field, InputType } from "@nestjs/graphql";
import { IsEmpty, IsNotEmpty, IsOptional, Length } from "class-validator";
import { MemberAuthType, MemberType } from "../enums/member.enum";


@InputType()
export class MemberInput {
    @IsNotEmpty()
    @Length(3,12)
    @Field(() => String)
    memberNick: string;

    @IsNotEmpty()
    @Field(() => String)
    memberPhone: string;

    @IsNotEmpty()
    @Length(5,12)
    @Field(() => String)
    memberPassword: string;

    @IsOptional()
    @Field(() => MemberAuthType, {nullable: true})
    memberAuthType: MemberAuthType;

    @IsOptional()
    @Field(() => MemberType, {nullable: true})
    memberType: MemberType;

}

@InputType()
export class LoginInput {
    @IsNotEmpty()
    @Length(3,12)
    @Field(() => String)
    memberNick: string;


    @IsNotEmpty()
    @Length(5,12)
    @Field(() => String)
    memberPassword: string;

}