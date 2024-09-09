import { createServer } from 'http'
import { Modules } from './modules'

const PORT = 3000

const app = createServer((req, res) => {
  new Modules(req, res)
})

app
  .listen(PORT)
  .on('listening', () => console.log(`Listening on port ${PORT}`))