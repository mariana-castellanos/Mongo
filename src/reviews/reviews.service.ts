import { ReviewsModule } from './reviews.module';
import { Review } from './entities/review.entity';
import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';

@Injectable()
export class ReviewsService {

  
  constructor(@InjectModel(Review.name) private ReviewModel: Model <Review> ){}


  create(createReviewDto: CreateReviewDto) {
    return 'This action adds a new review';
  }

 async findAll() {
    return await this.ReviewModel.find().exec();
  }

  findOne(id: string) {
    return this.ReviewModel.find({_id: id } ).exec();
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}
