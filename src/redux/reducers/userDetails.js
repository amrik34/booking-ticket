const userdetail = [];

const userDetails = (state = userdetail, action) => {
    switch (action.type) {
        case 'ADD_USER': return [
            ...state,
            action.payload
        ];
        default:
            return state

    }
}
export default userDetails

