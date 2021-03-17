export const signup = (user, history) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ user: user })
        })
            .then(res => res.json())
            .then((data) => {
                dispatch({
                    type: 'AUTH_SUCCESS',
                    payload: { loggedIn: data.logged_in, currentUser: data.user },
                })
                history.push(`/posts`)
            })
    }
}

export const login = (user, history) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/sessions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ user: user })
        })
            .then(res => res.json())
            .then((data) => {
                dispatch({
                    type: 'AUTH_SUCCESS',
                    payload: { loggedIn: data.logged_in, currentUser: data.user },
                })
                history.push(`/posts`)
            })
    }
}

export const checkLoggedIn = () => {
    return (dispatch) => {
        fetch(`http://localhost:3000/logged_in`, {
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => dispatch({
                type: 'AUTH_SUCCESS',
                payload: { loggedIn: data.logged_in, currentUser: data.user },
            }))
        }
}

export const logout = () => {
    return dispatch => {
        fetch(`http://localhost:3000/logout`, {
            method: 'DELETE',
            credentials: 'include'
        })
            .then((res) => res.json())
            .then((data) => dispatch({
                type: 'LOGOUT'
            }))
    }
}