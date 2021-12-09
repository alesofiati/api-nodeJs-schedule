const conexao = require('./../database/conexao')
const moment = require('moment')
class Atendimentos{

    create(attributes){
        const sql =  `INSERT INTO atendimentos SET ?`
        const data = moment(attributes.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        conexao.query(sql, {...attributes, dt_criacao: new Date(), data}, (error, result) =>{
            if(error){
                console.log(error)
            }else{
                console.log(result)
            }
            
        })
    }

    update(){

    }

    all(){
        const sql = `SELECT * FROM atendimentos ORDER BY data DESC`
        return conexao.query(sql, (error, result) => {
            if(error){
                console.log(error)
            }else{
                console.log(result)
            }
        })
    }

    findById(){

    }

    destroy(){

    }


}

module.exports = new Atendimentos