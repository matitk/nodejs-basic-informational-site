const fs = require("node:fs/promises")
const http = require("node:http")

async function readHTML(relPath) {
  try {
    const content = await fs.readFile(__dirname + relPath, 'utf-8')
    return content
  } catch (err) {
    console.log(err)
  }
}

const server = http.createServer(async (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  if(req.url === '/index.html' || req.url === '/') {
    return res.end(await readHTML('/index.html'))
  }
  if(req.url === '/about.html') {
    return res.end(await readHTML(req.url))
  }
  if(req.url === '/contact-me.html') {
    return res.end(await readHTML(req.url))
  }
  return res.end(await readHTML('/404.html'))
})

server.listen(8080, () => {
  console.log('Server Running...')
})