const connection = require("../dbConfig");

const testCtrl = {

    getTests : async (req,res) => {
        connection.query('SELECT * FROM test1',(error,rows)=> {
            if(error) throw error;
            console.log(rows)
            res.send(rows);
        })
    }
}

module.exports = testCtrl;