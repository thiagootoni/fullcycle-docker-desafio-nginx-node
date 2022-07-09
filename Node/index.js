const e = require('express');
const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};


function insert() {
    const mysql = require('mysql')
    const connection = mysql.createConnection(config)
    
    
    connection.query(sql)
    connection.end()
}


app.get('/', (req,res) => {
    
    const mysql = require('mysql')
    const connection = mysql.createConnection(config)

    try {
        const insert = `INSERT INTO people(name) values('Thiago Full Cycle!')`;
        connection.query(insert);

        const selectAll = `SELECT * FROM PEOPLE;`
        connection.query(selectAll, function (err, rows, fields) {
            if (err) throw err;
            let html = "<h1>Full Cycle Rocks!</h1>"
            html += "<ul>"
            rows.map(result => {
                html += `<li>${result.name}</li>`
            })
            html += "</ul>"
            res.send(html)
        });
    } catch (error) {
        console.log(error);
        res.send('<h3>Ocorreu um erro!</h3>');
    }finally{
        connection.end();
    }    
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})