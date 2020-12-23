export default function assignments(state = [], action) {
    // let updatedTeachers = [];
    let assignmentNeeded
    let newAssignments
    let assignmentToUpdate
    switch (action.type) {
      case "FETCH_ASSIGNMENTS_SUCCESS":
        return action.assignments;
      case "UPDATE_ASSIGNMENTS":
        assignmentNeeded = state.find(a=>a.id === action.updatedAssignment.assignment_id)
        assignmentNeeded.grades[0].grade.score = action.updatedAssignment.score
        newAssignments = state.map(a=> {
          if (a.id === action.updatedAssignment.assignment_id){
            return assignmentNeeded
          }else {
            return a
          }
        })
        
        return newAssignments;

        case "DELETE_GRADE":
          
          const assignmentId = parseInt(action.id[1]) 
          assignmentToUpdate = state.find((a) => a.id === assignmentId)          
          // debugger
        // assignmentNeeded.grades[0].grade.score = action.updatedAssignment.score
        newAssignments = state.map(a=> {
          if (a.id === assignmentId){
            const newGrades = a.grades.filter(grade => grade.grade.id !== action.id[0])
            a.grades = newGrades
            return a
          }else {
            return a
          }
        })
        // debugger
        return newAssignments;
    //   case "DELETE_NOTE":
    //     updatedNotes = state.filter((n) => n.id !== action.id);
    //     return updatedNotes;
      case "ADD_ASSIGNMENT":
          // debugger
        return [...state, action.newAssignment]; 
      // case "UPDATE_NOTE":
      //     updatedNotes = state.map(note => {
      //         if(note.id === action.updatedNote.id){
      //             return action.updatedNote
      //         } else {
      //             return note
      //         }
      //     })
      //   return updatedNotes;
      default:
        return state;
    }
  }
  