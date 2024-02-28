import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@ObjectType()
export class Task {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number

  @Column()
  @Field((type) => String)
  title: string
}
