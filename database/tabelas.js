class Tabelas{
    init(conexao){
        this.conexao = conexao
        this.criarAtendimentos()
    }

    criarAtendimentos(){
        const sql = `CREATE TABLE IF NOT EXISTS atendimentos(
            id int primary key auto_increment,
            cliente varchar(50) NOT NULL,
            pet varchar(20),
            servico varchar(20) NOT NULL,
            data datetime NOT NULL,
            dt_criacao datetime NOT NULL,
            status varchar(20) NOT NULL,
            observacoes text
        )`
        return this.conexao.query(sql, (error) =>{
            if(error){
                console.log(error)
            } 
        })
    }
}

module.exports = new Tabelas