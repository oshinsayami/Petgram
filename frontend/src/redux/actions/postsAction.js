export const fetchPosts = () => {
    return (dispatch) => {
        fetch(`http://localhost:3000/posts`)
            .then(resp => resp.json())
            .then(posts=> dispatch({type: 'FETCH_POSTS', payload: posts}))
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
                dispatch({ type: 'ADD_POST', payload: post})
                history.push(`/posts`)
            })
    
    }
}

export const addComment = (comment) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/comments`, {
            method: 'POST',
            body: JSON.stringify({comment: comment}),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(resp => resp.json())
            .then(comment => {
                console.log(comment)
                dispatch({ type: 'ADD_COMMENT', payload: comment })
            })
    
    }
}

// export const deleteComment = (comment) => {
//     return (dispatch) => {
//         fetch(`http://localhost:3000/comments`, {
//             method: 'DELETE',
//             body: JSON.stringify({comment: comment}),
//             headers: { 'Content-Type': 'application/json' }
//         })
//             .then(resp => resp.json())
//             .then(comment => {
//                 console.log(comment)
//                 dispatch({ type: 'ADD_COMMENT', payload: comment.data })
//             })
    
//     }
// }