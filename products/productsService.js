const getAllProducts = async () => {
    return []
}

const getProduct = async id => {
    return { id }
}

const updateProduct = async product => {
    return product
}

const addProduct = async product => {
    return { ...product, id: 123 }
}

const deleteProduct = async id => { }


module.exports = {
    getAllProducts,
    getProduct,
    updateProduct,
    addProduct,
    deleteProduct
}