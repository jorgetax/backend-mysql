import bcrypt from 'bcrypt'
import data from '../config/mysql.js'

async function creatAccount(payload) {
  const sql = 'INSERT INTO users SET ?'
  const [affectedRows] = await data.query(sql, payload)

  return {success: affectedRows}
}

async function createPassword(userId, password) {
  const hash = bcrypt.hashSync(password, 10)

  const sql = 'INSERT INTO passwords SET ?'
  const [affectedRows] = await data.query(sql, {user_uuid: userId, password: hash})

  return {success: affectedRows}
}

async function findByPassword(userId, password) {
  const sql = 'SELECT password FROM passwords WHERE user_uuid = ?'
  const [rows] = await data.query(sql, userId)

  if (rows.length === 0) return {error: 'Invalid password'}

  const {password: hash} = rows[0]
  const match = bcrypt.compareSync(password, hash)

  if (!match) return {error: 'Invalid password'}

  return {success: true}
}

async function findByEmail(email) {
  const sql = 'SELECT user_uuid FROM users WHERE email = ?'
  const [rows] = await data.query(sql, email)

  if (rows.length === 0) return {error: 'Invalid email'}

  return {success: rows[0].user_uuid}
}

export default {creatAccount, createPassword, findByPassword, findByEmail}