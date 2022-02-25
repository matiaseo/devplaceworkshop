const getAllUsers = async () => {
    return []
}

const getUser = async id => {
    return { id }
}

const updateUser = async user => {
    return user
}

const addUser = async user => {
    return { ...user, id: 123 }
}

const deleteUser = async id => { }


module.exports = {
    getAllUsers,
    getUser,
    updateUser,
    addUser,
    deleteUser
}