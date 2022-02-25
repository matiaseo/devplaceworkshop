const getAllOrders = async () => {
    return []
}

const getOrder = async id => {
    return { id }
}

const updateOrder = async order => {
    return order
}

const addOrder = async order => {
    return { ...order, id: 123 }
}

const deleteOrder = async id => { }


module.exports = {
    getAllOrders,
    getOrder,
    updateOrder,
    addOrder,
    deleteOrder
}