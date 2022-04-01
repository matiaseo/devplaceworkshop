const bcrypt = require('bcrypt')
const { db } = require('../db/connect')

const getAllUsers = async () => {
    return await db.models.User.findAll({ raw: true })
    return await db.query(`
        SELECT users.id, users.username, users.address, users.email, roles.name as roleName
        FROM users users
        JOIN roles ON users.role = roles.id
    `, {
        type: db.QueryTypes.SELECT
    })
}

const getUser = async id => {
    const [user] = await db.query(`
    SELECT users.id, users.username, users.address, users.email, roles.name as roleName
    FROM users
    JOIN roles ON users.role = roles.id
    WHERE users.id = :id
    `, {
        type: db.QueryTypes.SELECT,
        replacements: { id }
    })
    return user
}

const updateUser = async user => {
    const [, modified] = await db.query(`
    UPDATE users SET
        username = :username,
        address = :address,
        email = :email,
        role = :role
    WHERE id = :id
    `, {
        type: db.QueryTypes.UPDATE,
        replacements: user
    })
    return modified > 0
}

const addUser = async ({ username, address, email, role, password }) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = {
        username,
        address,
        email,
        role,
        password: hash
    }
    const [id] = await db.query(`
    INSERT INTO users (username, address, email, role, password) VALUES
        (:username, :address, :email, :role, :password)
    `, {
        replacements: user
    })
    return { ...user, id }
}

const deleteUser = async id => {
    await db.query(`
        DELETE FROM users
        WHERE id = :id
    `, {
        replacements: { id }
    })
}

module.exports = {
    getAllUsers,
    getUser,
    updateUser,
    addUser,
    deleteUser
}