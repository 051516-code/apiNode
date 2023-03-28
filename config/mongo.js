const mongoose = require('mongoose')

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    
    mongoose.connect(DB_URI, {
        useNewUrlParser : true,
        useUnifiedTopology: true,

    }).then( ()=>{
        console.log('********EXITO DE CCONEXION A MONGO*********')
    }).catch((err) => {
        console.log(`******ERROR AL CONECTARTE A MONGO error :${err}`) 
    })

}

module.exports = dbConnect;