import express from 'express'

const router = express.Router()

/* create a team */
/* path: /teams */
router.post('/')
/* create a user for a team */
/* path: /teams/:teamsId */
router.post('/:teamsId')
export default router