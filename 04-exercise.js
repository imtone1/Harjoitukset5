// Harjoitukset 5 tehtävä 4


const http = require('http')
const fs = require('fs')
const hostname = '127.0.0.1'
const port = 3000
//määritellään mihin tiedostoon tallenetaan
const counterfile ='./counter.txt'

const server = http.createServer((req, res) => {

fs.readFile(counterfile, (error, data) => {
    if (error) {
     
        res.statusCode=500
        res.end()
    }
    else {
        let counter = Number(data.toString()) +1
        //kirjoitetaan tiedostoon
        fs.writeFile(counterfile, counter+'', (error) => {
            if (error) console.error(error)
            else {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                res.write('<h1>Hello!</h1>')
                res.write('Request counter value is ' + counter)
                res.end()
            }
         })
    }

 })

})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})