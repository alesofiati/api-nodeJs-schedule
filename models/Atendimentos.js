const conexao = require('./../database/conexao')
class Atendimentos{

    create(attributes, response){
        const sql =  `INSERT INTO atendimentos SET ?`

        conexao.query(sql, {...attributes, dt_criacao: new Date()}, (error, result) =>{
            if(error){
                return response.status(400).json({message: error.sqlMessage})
            }else{
                const {insertId} = result
                return this.findById(insertId, response)
            }
        })
    }

    update(params){
        const {id, attributes, response} = params
        const sql = 'UPDATE atendimentos SET ? WHERE id = ?'
        conexao.query(sql, [attributes, id], (error, result) =>{
            if(error){
                return response.status(400).json({message: 'Não foi possivel atualizar o registro informado'})
            }
            return this.findById(id, response)
        })
    }

    all(response){
        const sql = `SELECT * FROM atendimentos ORDER BY data DESC`
        return conexao.query(sql, (error, result) => {
            if(error){
                return response.status(400).json({message: 'Não foi possivel processar a sua requisição'})
            }else{
                return response.status(200).json(result)
            }
        })
    }

    findById(id, response){
        const sql = `SELECT * FROM atendimentos WHERE id = ${id}`
        conexao.query(sql, (error, result) =>{
            if(result.length){
                return response.status(200).json(result[0])
            }
            return response.status(400).json({message: 'Agendamento não encontrado'})
        })
    }

    destroy(id, response){
        const sql = `DELETE FROM atendimentos WHERE id = ?`
        conexao.query(sql, id, (error, result) => {
            if(result.affectedRows){
                return response.status(200).json({ message: 'Agendamento removido com sucesso', id })
            }
            return response.status(400).json({ message: 'Não foi possivel remover o agendamento' })
        })
    }


}

module.exports = new Atendimentos