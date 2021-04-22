import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Lesson } from './lesson'
import { LessonService } from './lesson.service'
import { CreateLessonInput } from './lesson.input'

@Resolver((of: void | undefined) => Lesson)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query((returns: void | undefined) => [Lesson])
  getLessons() {
    return this.lessonService.getLessons()
  }

  @Query((returns: void | undefined) => Lesson)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id)
  }

  @Mutation((returns: void | undefined) => Lesson)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput)
  }
}
