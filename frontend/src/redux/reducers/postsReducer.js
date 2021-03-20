export default (state =[], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload
        case 'ADD_POST':
            console.log(action)
            return [...state, action.payload]
    
        case 'ADD_COMMENT':
            console.log(action.payload)
            console.log(state)
            return state.map(sts => {
                // debugger
                if (sts.id === action.payload.id) {
                    return action.payload
                } else {
                    return sts
                }
            })

    
        case 'DELETE_COMMENT':
            return state
        default:
            return state
    }
}