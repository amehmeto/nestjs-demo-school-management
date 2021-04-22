import { StudentService } from './student.service'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateStudentInput } from './create-student.input'
import { StudentType } from './student.type'
import { Student } from './student.entity'

@Resolver((of: void | undefined) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query((returns: void | undefined) => [StudentType])
  getStudents(): Promise<Student[]> {
    return this.studentService.getStudents()
  }

  @Mutation((returns: void | undefined) => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    return this.studentService.createStudent(createStudentInput)
  }
}
