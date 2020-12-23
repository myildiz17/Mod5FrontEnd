
export const loginSuccess = ({user, sections}) => {
    return {
        type: 'LOGIN_SUCCESS',
        user,
        sections
    }
}

export const currentUser = ({user, sections}) => {
    return {
        type: 'CURRENT_USER',
        user,
        sections
    }
}

export const logoutUser = () => {
    return {
        type: 'LOGOUT_USER',
    }
}