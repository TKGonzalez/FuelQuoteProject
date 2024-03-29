// const express = require('express')
// const app = express()
// const port = 3000;

// app.use(express.static('public'))
// var urlencodedParser = bodyParser.urlencoded({ extended: true })

const mysql = require('mysql2');
const fs = require('fs');

var config = mysql.createConnection({
  host: 'cosc4353project.mysql.database.azure.com', // Replace with host name
  user: 'cosc4353admin',      // Replace with database username
  password: 'FuelQuoteProject4353',      // Replace with database password
  database: 'fuel_rate_application', // // Replace with database Name
  port:3306,
  //ssl:{ca:fs.readFileSync("C:/Users/kgnzl/OneDrive/Desktop/VSCode/ProgAssignments/cosc4353/DigiCertGlobalRootG2.crt.pem")}
}); 

const conn = new mysql.createConnection(config);

conn.connect(function(err) {
  if (err) throw err;
  else {console.log('Database is connected successfully !');
        createOrder(); }
});

function createOrder(){
  var orderid = 0;
  var userid = user;
  var gallons = 100;
  var address = 'asdf';
  var date = '2023-12-10';
  var ppg = 5//req.body.price_per_gallon;
  var total = 20//req.body.total_amount;
  conn.query('INSERT INTO fuel_rate_application.fuelquote (orderID, userID, gallonsRequested, deliveryAddress, deliveryDate, ppg, totalPrice) VALUES (?, ?, ?, ?, ?, ?, ?);',
              [orderid, userid, gallons, address, date, ppg, total],
        function (err, results, fields) {
            if (err) throw err;
            else console.log('Inserted ' + results.affectedRows + ' row(s).');
        }
    )
  conn.end(function (err) {
      if (err) throw err;
      else  console.log('Done.')
  });
};

//module.exports = db;

//const orders = [];

// app.get('*', function(req, res, next){
//     res.locals.user = req.user || null;
//     next();
// })

// app.get('/', function (req, res) {
//     res.sendFile("./Fuel_Quote_Form.html");
//   })

// app.listen(port, function() {  
//     console.log('Server running on port 3000');  
// }); 

// app.post('/orders', urlencodedParser, function (req, res) {
//     var userid = user//req.user.username
//     var gallons = req.body.gallons_requested;
//     var address = req.body.delivery_address;
//     var date = req.body.delivery_date;
//     var ppg = 5//req.body.price_per_gallon;
//     var total = 20//req.body.total_amount;
//     if (!username || !gallons || !address || !date || !ppg || !total) {
//       res.status(400).json({ message: 'Incomplete order request' });
//     } else {
//         db.query('INSERT INTO FuelQuote (userID, gallonsRequested, deliveryAddress, deliveryDate, ppg, totalPrice) VALUES (?, ?, ?, ?, ?, ?)', [userid, gallons, address, date, ppg, total], (err, result) => {
//         if (err) {
//             return res.status(500).json({ message: 'Database error' });
//         }
//     })
//       //orders.push(newOrder);
//       res.status(201).json(newOrder);
//     }
//   });