import { Column, Model, Table, DataType } from 'sequelize-typescript';

interface FeedbackCreationAttr {
  name: string;
  email: string;
  feedback: string;
}

@Table({ tableName: 'feedbacks' })
export class Feedback extends Model<Feedback, FeedbackCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  feedback: string;
}
