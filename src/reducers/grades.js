export default function grades(state = [], action) {
    let updatedGrades = [];
    switch (action.type) {
    //   case "DELETE_GRADE":
    //     return action.assignments;
    case "FETCH_GRADES_SUCCESS":
        // debugger
        return action.grades;
    // case "DELETE_GRADE":
    //     updatedGrades = state.filter((n) => n.id !== action.id);
    //     // debugger
    //     return updatedGrades;
    // case "UPDATE_GRADE":
    //     // debugger
    //     updatedGrades = state.map(grade => {
    //         if(grade.id === action.updatedGrade.id){
    //             return action.updatedGrade
    //         } else {
    //             return grade
    //         }
    //     })
    //     return updatedGrades;
    //   case "ADD_NOTE":
          
    //     return [...state, action.newNote];
    //   case "UPDATE_NOTE":
    //       updatedNotes = state.map(note => {
    //           if(note.id === action.updatedNote.id){
    //               return action.updatedNote
    //           } else {
    //               return note
    //           }
    //       })
    //     return updatedNotes;
      default:
        return state;
    }
  }
  