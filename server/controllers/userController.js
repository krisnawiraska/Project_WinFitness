const tbUser = require("../db/user.json")
const md5 = require('md5')
const fs = require ("fs")

class userController{
    static indexUser (req,res){
        res.send("register")
    }
    static registerUser(req, res) {
        try {
            const { name_users, no_handphone, email, password } = req.body
            const date_start_member = null
            const date_end_member = null
            const status = false
        
            if (!name_users || !no_handphone || !email || !password) {
                return res.status(400).json({ message: "Field not empty" })
            }
      
            let idDynamic
      
        
            if (tbUser.dataUser.length === 0) {
                idDynamic = 1;
            } else {
                 const idDataUserLast = tbUser.dataUser[tbUser.dataUser.length - 1].id
                idDynamic = idDataUserLast + 1;
                console.log(idDynamic, "ini jika panjang data tidak sama dengan 0")
            }
      
            let mdPassword = md5(password);
      
            let result = {
                id: idDynamic,
                name_users,
                no_handphone,
                email,
                password: mdPassword,
                date_start_member,
                date_end_member,
                 status
            };
            console.log(result);
            tbUser.dataUser.push(result);
      
            let manipulateResult = JSON.stringify(tbUser.dataUser);
            fs.writeFileSync("./db/user.json", manipulateResult);
            res.status(201).json({ message: "Add data success" });
      
        } catch (err) {
            console.error("Error writing to file:", err);
            res.status(500).json({ message: "Internal server error" });
        }
    }
} 

module.exports = userController