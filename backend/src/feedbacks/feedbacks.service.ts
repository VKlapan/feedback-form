import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Feedback } from './feedbacks.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Injectable()
export class FeedbacksService {
  constructor(
    @InjectModel(Feedback) private feedbackRepository: typeof Feedback,
  ) {}

  async createFeedback(dto: CreateFeedbackDto) {
    try {
      const feedback = await this.feedbackRepository.create(dto);
      //console.log('Create Feedback', feedback);
      return feedback;
    } catch (error) {
      const fail = error.errors[0].message;
      // console.log(fail);
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: fail,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getFeedbacks() {
    try {
      const feedbacks = await this.feedbackRepository.findAll();
      //console.log('back_getFeedbacks', feedbacks);
      return feedbacks;
    } catch (error) {}
  }
}
