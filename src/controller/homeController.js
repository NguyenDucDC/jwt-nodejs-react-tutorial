// get the client
import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt'
});

const handleHelloworld = (req, res) => {
    return res.render("home.ejs");
}

const handleUserpage = (req, res) => {
    return res.render("user.ejs");
}

const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    // simple query
    connection.query(
        'INSERT INTO users ( email, password, username) VALUES( ?, ?, ?)', [email, password, username],
        function (err, results, fields) {
            if (err) {
                console.log(err);
            }
            console.log(results); // results contains rows returned by server
        }
    );

    console.log('>>> check request: ', req.body)
    return res.send("handleCreateNewUser");
}

module.exports = {
    handleHelloworld,
    handleUserpage,
    handleCreateNewUser
}