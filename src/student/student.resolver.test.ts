import * as student_resolver from "./student.resolver"
import * as student_service from "./student.service"

import * as class_transformer from "class-transformer"
import * as create_student_input from "./create-student.input"
// @ponicode
describe("getStudents", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new student_service.StudentService(undefined)
        inst2 = new student_resolver.StudentResolver(inst)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst2.getStudents()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("createStudent", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new student_service.StudentService(undefined)
        inst2 = new student_resolver.StudentResolver(inst)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst2.createStudent(class_transformer.plainToClass(create_student_input.CreateStudentInput,{ firstName: "Edmond", lastName: "Baziz" }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst2.createStudent(class_transformer.plainToClass(create_student_input.CreateStudentInput,{ firstName: "George", lastName: "Zong" }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst2.createStudent(class_transformer.plainToClass(create_student_input.CreateStudentInput,{ firstName: "Anas", lastName: "Zong" }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst2.createStudent(class_transformer.plainToClass(create_student_input.CreateStudentInput,{ firstName: "Pierre Edouard", lastName: "Al Saud" }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst2.createStudent(class_transformer.plainToClass(create_student_input.CreateStudentInput,{ firstName: "George", lastName: "Dupont" }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst2.createStudent(class_transformer.plainToClass(create_student_input.CreateStudentInput,{ firstName: "", lastName: "" }))
        }
    
        expect(callFunction).not.toThrow()
    })
})
