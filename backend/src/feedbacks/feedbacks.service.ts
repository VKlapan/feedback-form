import { Injectable } from '@nestjs/common';
import { Feedback } from './feedbacks.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Injectable()
export class FeedbacksService {
  constructor(
    @InjectModel(Feedback) private feedbackRepository: typeof Feedback,
  ) {}

  async createFeedback(dto: CreateFeedbackDto) {
    const feedback = await this.feedbackRepository.create(dto);
    return feedback;
  }

  async getFeedbacks() {
    const feedbacks = await this.feedbackRepository.findAll();
    return feedbacks;
  }
}
