const express = require ('express')
const app = express()
const port = 3000

app.get('/data-catalog', (req, res) => {
    res.json([
        {
            id : 1,
            catalog_name : "push",
        }
    ])
})
  

app.listen(port, () => {
    console.log(`berhasil ${port}` )
})

