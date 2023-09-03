import {Router} from 'express'
import controller from '../auth/auth-controller.js'

const router = Router()

router.post('/signup', controller.signup)
router.post('/login', controller.login)
export default router