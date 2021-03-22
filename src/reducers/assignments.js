export default function assignments(state = [], action) {
  let assignmentNeeded;
  let newAssignments;
  let assignmentToUpdate;
  switch (action.type) {
    case "FETCH_ASSIGNMENTS_SUCCESS":
      return action.assignments;
    case "UPDATE_ASSIGNMENTS":
      assignmentNeeded = state.find(
        (a) => a.id === action.updatedAssignment.assignment_id
      );
      assignmentNeeded.grades[0].grade.score = action.updatedAssignment.score;
      newAssignments = state.map((a) => {
        if (a.id === action.updatedAssignment.assignment_id) {
          return assignmentNeeded;
        } else {
          return a;
        }
      });

      return newAssignments;

    case "DELETE_ASSIGNMENT":
      newAssignments = state.filter((a) => a.id !== action.id);
      return newAssignments;

    case "DELETE_GRADE":
      const assignmentId = parseInt(action.id[1]);
      assignmentToUpdate = state.find((a) => a.id === assignmentId);

      newAssignments = state.map((a) => {
        if (a.id === assignmentId) {
          const newGrades = a.grades.filter(
            (grade) => grade.grade.id !== action.id[0]
          );
          a.grades = newGrades;
          return a;
        } else {
          return a;
        }
      });

      return newAssignments;

    case "ADD_ASSIGNMENT":
      return [...state, action.newAssignment];

    default:
      return state;
  }
}
