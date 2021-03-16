export const signup = (user) => {
    return (dispatch) => {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: user})
        })
            .then(res => res.json())
            .then(data => dispatch({type: 'AUTH_SUCCESS', payload: {loggedIn: data.logged_in, currentUser: data.user}}))
    }
}