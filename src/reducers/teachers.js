export default function teachers(state = [], action) {
    // let updatedTeachers = [];
    switch (action.type) {
      case "FETCH_TEACHERS_SUCCESS":
        return action.teachers;
    //   case "FETCH_STUDENTS_SUCCESS":
    //     return action.students;
    //   case "DELETE_NOTE":
    //     updatedNotes = state.filter((n) => n.id !== action.id);
    //     return updatedNotes;
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
  