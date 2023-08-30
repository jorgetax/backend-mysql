import fs from 'fs'
import {dirname} from 'path'
import {fileURLToPath} from 'url'
import express from 'express'

/* express */
const router = express()

/* dirname */
const __dirname = dirname(fileURLToPath(import.meta.url))

/* read files */
fs.readdirSync(__dirname).filter(file => {
  const name = file.replace('.js', '')

  /* ignore index.js */
  if (name !== 'index')
    /* import file */
    import(`./${file}`).then(module => {
      const _router = module.default
      router.use(`/${name}`, _router)
    })
})

/* export */
export default router