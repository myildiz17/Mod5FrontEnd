export default function grades(state = [], action) {
  let updatedGrades = [];
  switch (action.type) {
    case "FETCH_GRADES_SUCCESS":
      return action.grades;

    default:
      return state;
  }
}
