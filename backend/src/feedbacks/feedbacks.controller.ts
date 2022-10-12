import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { FeedbacksService } from './feedbacks.service';

@Controller('feedbacks')
export class FeedbacksController {
  constructor(private feedbackService: FeedbacksService) {}

  @Post()
  create(@Body() feedbackDto: CreateFeedbackDto) {
    return this.feedbackService.createFeedback(feedbackDto);
  }

  @Get()
  getAll() {
    return this.feedbackService.getFeedbacks();
  }
}
