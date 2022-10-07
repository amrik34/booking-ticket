export const addUser = (userdetails) => {
    return {
        type: 'ADD_USER',
        payload: userdetails
    }
};