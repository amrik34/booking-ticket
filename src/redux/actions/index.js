export const addItem = (product) => {
    return {
        type: 'ADDITEM',
        payload: product
    }
};
export const delItem = (product) => {
    return {
        type: 'DELETEITEM',
        payload: product
    }
}
