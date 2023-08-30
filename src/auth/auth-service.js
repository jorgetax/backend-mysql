import model from './auth-model.js'

async function signup(user) {
  const {first_name, last_name, email, address, birthdate, password} = user

  const ifExistAccount = await model.findByEmail(email)

  if (ifExistAccount.success) return {error: 'User already exists'}

  const account = await model.creatAccount({first_name, last_name, email, address, birthdate})
  const uuid = await model.findByEmail(email)
  const match = await model.createPassword(uuid.success, password)

  if (!account.success || !uuid.success || !match.success) return {error: 'Error creating account'}

  return {success: true}
}

async function login(email, password) {
  const ifExistAccount = await model.findByEmail(email)

  if (ifExistAccount.error) return {error: 'User not found'}

  const match = await model.findByPassword(ifExistAccount.success, password)

  if (!match.success) return {error: 'Password incorrect'}

  return {success: true}
}

export default {signup, login}