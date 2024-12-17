import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver,Query } from '@nestjs/graphql';
import { ObjectId, } from 'mongoose';
import { BoardArticle } from '../../libs/dto/board-article/board-article';
import { BoardArticleInput } from '../../libs/dto/board-article/board-article.input';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { AuthGuard } from '../auth/guards/auth.guard';
import { BoardArticleService } from './board-article.service';
import { WithoutGuard } from '../auth/guards/without.guard';
import { shapeIntoMongoObjectId } from '../../libs/config';

@Resolver()
export class BoardArticleResolver {
	constructor(private readonly boardArticleService: BoardArticleService) {}

	@UseGuards(AuthGuard)
	@Mutation((returns) => BoardArticle)
	public async createBoardArticle(
		@Args('input') input: BoardArticleInput,
		@AuthMember('_id') memberId: ObjectId,
	): Promise<BoardArticle> {
		console.log('Mutation: createBoardArticle');
		return await this.boardArticleService.createBoardArticle(memberId, input);
	}

	@UseGuards(WithoutGuard)
	@Query((returns) => BoardArticle)
	public async getBoardArticle(
		@Args('articleId') input: string,
		@AuthMember('_id') memberId: ObjectId,
	): Promise<BoardArticle> {
		console.log('Query: getProperty');
		const articleId = shapeIntoMongoObjectId(input);
		return await this.boardArticleService.getBoardArticle(memberId, articleId);
	}
}
