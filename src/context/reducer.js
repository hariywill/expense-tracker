export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TRANSACTION":
            return {...state}
        case "DELETE_TRANSACTION":
            return state
        default:
            return state
    }
}