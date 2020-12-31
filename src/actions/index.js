
export const fetchTeachers = (teachers) => {
    return {
        type: "FETCH_TEACHERS_SUCCESS",
        teachers: teachers
    }
}

export const fetchAssignments = (assignments) => {
    return {
        type: "FETCH_ASSIGNMENTS_SUCCESS",
        assignments: assignments
    }
}

export const fetchGrades = (grades) => {

    return {
        type: "FETCH_GRADES_SUCCESS",
        grades: grades
    }
}

export const deleteGrade = (id) => {
    // debugger
    return {
        type: "DELETE_GRADE",
        id: id
    }
}

export const updateGrade = (updatedGrade) => {
    // debugger
    return {
        type: "UPDATE_GRADE",
        updatedGrade: updatedGrade
    }
}

export const updateAssignments = (updatedAssignment) => {
    // debugger
    return {
        type: "UPDATE_ASSIGNMENTS",
        updatedAssignment: updatedAssignment
    }
}

export const addAssignment = (newAssignment) => {
    
    return {
        type: "ADD_ASSIGNMENT",
        newAssignment: newAssignment
    }
}

export const deleteAssignment = (id) => {
    // debugger
    return {
        type: "DELETE_ASSIGNMENT",
        id: id
    }
}