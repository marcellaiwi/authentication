const query = require("../database");

async function register(req, res){
    const {nama, email, phone_number, password, confPassword} = req.body;

    console.log(req.body);

    //membuat validation isi data
    if (
        nama === undefined || nama === "" || 
        email === undefined || email === "" || 
        phone_number === undefined || isNaN(+phone_number) || 
        password === undefined || password === "" || 
        confPassword === undefined || confPassword === ""
        )
        return res.status(400).json("Invalid Data!");
    
    //membuat validasi password
    if (password !== confPassword) return res.status(400).json("Password not match!");

    try {
        //logichandling
    } catch (error) {
        return res.status(400).json("Something when wrong!");
    }
};
async function login(req, res){
    const {} = req.body;
    try {
        
    } catch (error) {
        return res.status(400).json("Something when wrong!");
    }
};

module.exports = {
    register,
    login
};