export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload
        case 'ADD_POST':
            // console.log(action)
            return [...state, action.payload]
    
        case 'ADD_COMMENT':
            console.log(action.payload)
            console.log(state)
            return state.map(sts => {
                // debugger
                if (sts.id === action.payload.id) {
                    console.log(action.payload)
                    return action.payload
                } else {
                    console.log(sts)
                    return sts
                }
            })
        
    //     case 'DELETE_COMMENT':
    //         console.log(state)
    //         console.log(action.payload)
    //         // debugger
    //         return [...state]
            
    //         // return state.map(sts => {
    //         //     const filteredComment = sts.comments.filter(comment =>
    //         //         comment.id !== action.payload)
    //         //     // {debugger}
    //         //     return filteredComment
    //         // })
    //         // const filteredRecipe = state.recipes.filter(recipe =>
    //         // recipe.id !== action.payload.id)
    //     //     return { ...state, recipe: filteredRecipe }
        default:
            return state
    }
}

// { ...state, post:[]}