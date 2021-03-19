export const fetchPosts = () => {
    return (dispatch) => {
        fetch(`http://localhost:3000/posts`)
            .then(resp => resp.json())
            .then(posts=> dispatch({type: 'FETCH_POSTS', payload: posts.data}))
    }
}

export const addPost = (post, history) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/posts`, {
            method: 'POST',
            body: JSON.stringify({post: post}),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(resp => resp.json())
            .then(post => {
                console.log(post)
                dispatch({ type: 'ADD_POST', payload: post.data })
                history.push(`/posts`)
            })
    
    }
}