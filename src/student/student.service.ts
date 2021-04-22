import { Injectable } from '@nestjs/common'
import { CreateStudentInput } from './create-student.input'
import { InjectRepository } from '@nestjs/typeorm'
import { Student } from './student.entity'
import { Repository } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  createStudent(createStudentInput: CreateStudentInput): Promise<Student> {
    const { firstName, lastName } = createStudentInput
    const student = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
    })
    return this.studentRepository.save(student)
  }

  getStudents() {
    return this.studentRepository.find()
  }
}
