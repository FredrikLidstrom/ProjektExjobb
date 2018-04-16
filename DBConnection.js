
// var mysql = require('mysql');                               /*KOPPLA UPP MOT SERVER*/

// var con = mysql.createConnection({
//   host: "85.225.250.33",          
//   user: "user",
//   password: "12345"
// });


// con.connect(function(err) {                                 /*SKAPA EN DATABAS mydb*/
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE mydb", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });


var mysql = require('mysql');                       /*KOPPLA UPP MOT SERVER och databas mydb*/

var con = mysql.createConnection({
  host: "85.225.250.33",
  user: "user",
  password: "12345",
  database: "mydb"
});


// con.connect(function(err) {                                   /*skapa en tabell, Student/company */
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE Studenter (name VARCHAR(255), adress VARCHAR(255))"; 
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// }); 



// con.connect(function(err) {                                   /*skapa en tabell,*/
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE Company (name VARCHAR(255), password VARCHAR(255), AuthCode VARCHAR(255))"; 
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });


//                                                              /*DELETE tabell*/
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DROP TABLE Company";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table deleted");
//   });
// });
