const mysql = require ("mysql2/promise");
const db = mysql.createPool({
    host : "localhost",
    user : "root",
    database : "kampus_merdeka",
    password : "", 
    connectionLimit : 20,
    enableKeepAlive : true,
    keepAliveInitialDelay : 0,
});

// query adalah string
// value adalah array query
async function query(query, value) {
    try {
        //hasil dari query
        const [executeQuery] = await db.query(query, value ?? []); //[executeQuery] mengakses isi dari array yang pertama
        console.log(executeQuery);
        return (executeQuery);
    } catch (error) {
        console.log(error);
    }
};

module.exports = query;