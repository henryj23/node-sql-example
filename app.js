const mysql = require('mysql2');


//OBTAIN CONNECTION
const connection = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'root',
    database:'helloapp'

});

//CHECK FOR SUCCESS
connection.connect((err) => {

    if(err) {
        console.log(`Error while Connecting to MySQL ${err}`)
    }

    console.log(`Connected succesfully`);


});

//FETCH QUERY / LOG ERROR
connection.query('select 1+2 AS sum', (err, results) => {

    if(err) {
        console.log(`Error while Connecting to MySQL ${err}`)
        return;
    }

    console.log(`Query exectuion sucess: results[0].sum`)
    
});

//CLOSE CONNECTION / CHECK FOR ERRORS
connection.end((err)=> {

    if(err) {
        console.log(`Error while Closing MySQL Connection: ${err}`)
        return;
    }

    console.log(`Connection Closed Successfully`)
});