export default function teachers(state = [], action) {
  switch (action.type) {
    case "FETCH_TEACHERS_SUCCESS":
      return action.teachers;

    default:
      return state;
  }
}
