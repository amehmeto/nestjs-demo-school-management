import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'
import { LessonService } from './lesson.service'
import { CreateLessonInput } from './lesson.input'
import { LessonType } from './lesson.type'
import { AssignStudentsToLessonInput } from './assign-students-to-lesson.input'
import { Lesson } from './lesson.entity'
import { StudentService } from '../student/student.service'

@Resolver((of: void | undefined) => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentService: StudentService,
  ) {}

  @Query((returns: void | undefined) => [LessonType])
  getLessons() {
    return this.lessonService.getLessons()
  }

  @Query((returns: void | undefined) => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id)
  }

  @Mutation((returns: void | undefined) => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput)
  }

  @Mutation((returns) => LessonType)
  assignStudentsToLesson(
    @Args('assignStudentsToLessonInput')
    assignStudentsToLessonInput: AssignStudentsToLessonInput,
  ) {
    const { lessonId, studentIds } = assignStudentsToLessonInput
    return this.lessonService.assignStudentsToLesson(lessonId, studentIds)
  }

  @ResolveField()
  students(@Parent() lesson: Lesson) {
    return this.studentService.getManyStudents(lesson.students)
  }
}
