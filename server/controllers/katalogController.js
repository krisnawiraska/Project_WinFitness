class katalogController {
    static indexCatalog (req,res){
        res.send("ini index")
    }
    static addCatalog (req,res){
        const {id_katalog, katalog_name} = req.body
        const result_katalog = {
            "id_katalog" : `${id_katalog}`,
            "katalog name" : `${katalog_name}`
        }
        return res.status(200).json(result_katalog)
    }
    static editCatalog (req,res){

    }
    static indexkatalogDetail(req,res){

    }
    static addKatalogDetail(req,res){
        
    }
}
module.exports = katalogController