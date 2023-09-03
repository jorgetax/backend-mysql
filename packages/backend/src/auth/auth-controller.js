import service from './auth-service.js'

async function signup(req, res) {
  try {
    const body = req.body
    const result = await service.signup(body)

    if (result.error) return res.status(400).json(result)

    return res.status(200).json(result)
  } catch (e) {
    console.log(e.message)
    return res.status(500).json({error: 'Internal server error'})
  }
}

async function login(req, res) {
  try {
    const {email, password} = req.body
    const result = await service.login(email, password)

    if (result.error) return res.status(400).json(result)

    return res.status(200).json(result)
  } catch (e) {
    console.log(e.message)
    return res.status(500).json({error: 'Internal server error'})
  }
}

export default {signup, login}