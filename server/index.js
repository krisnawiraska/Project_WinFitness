const express = require ('express')
const app = express()
const port = 3000

app.get('/data-catalog', (req, res) => {

})
  

app.listen(port, () => {
    console.log(`berhasil ${port}` )
})

