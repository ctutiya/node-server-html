const http = require('http')
const fs = require('fs')

const port = '3000'

const server = http.createServer((req, res) => {
    // change the MIME type from 'text/plain' to 'text/html'
    res.writeHead(200, {'Content-Type': 'text/html'})

    // reading the html file
	fs.readFile('./src/index.html', (err, data) => {
		// checking for errors
		if (err) throw err

		// sending the response
		res.end(data)
	})
})

server.listen(port, (error) => {
    if (error) {
      return console.log('Error occured :', error )
    }

    console.log(`Server running at http://localhost:${port}/`)
})