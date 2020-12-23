import { combineReducers } from 'redux'
import teachersReducer from './teachers.js'
import gradesReducer from './grades.js'
import assignmentsReducer from './assignments.js'
import auth from './auth.js'

export default combineReducers({
    teachers: teachersReducer,
    assignments: assignmentsReducer,
    grades: gradesReducer,
    auth
})
