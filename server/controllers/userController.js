class userController{
    static indexUser (req,res){
        res.send("register")
    }
    static registerUser (req,res){
        const {id_user, phone_number, address, email, password} = req.body
        const date_start = null
        const date_end = null
        const status_member = false

        if(typeof phone_number === 'number'){
            return res.status(400).json({ error: "Phone number is not a number" })
        }else{
            const result = {
                "id_user" : `${id_user}`,
                "phone_number" : `${phone_number}`,
                "address" : `${address}`,
                "email" : `${email}`,
                "password" : `${password}`,
                "date_start" : `${date_start}`,
                "date_end" : `${date_end}`,
                "status_member" : `${status_member}`
            }
            return res.status(200).json(result)   
        }                   
    }       
} 

module.exports = userController