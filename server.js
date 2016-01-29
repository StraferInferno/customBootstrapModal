var express = require('express');
var app = express();


app.use(express.static(__dirname + '/'));

app.get('/people/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};
    for (var i = 0, len = people.length; i < len; i++) {
        if (people[i].id === customerId) {
            data = people[i];
            break;
        }
    }
res.json(data);
});


app.get('/people', function(req, res){

res.json(people);
});


app.get('/allorders', function(req, res) {
    var ordersdata = [];
    for (var i = 0, len = people.length; i < len; i++) {
    	if(people[i].orders){
    		for (var j=0,ordersLen=people[i].orders.length;j<ordersLen;j++){
    				ordersdata.push(people[i].orders[j]);

    		}
    	}
               
    }
res.json(ordersdata);
});

app.delete('/people/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = { status: true };
    for (var i=0,len=people.length;i<len;i++) {
        if (people[i].id === customerId) {
           people.splice(i,1);
           data = { status: true };
           break;
        }
    }  
    res.json(data);
});





app.listen(3000);
console.log("App listening on port 3000");



var people = [{
        id: 1,
        joined: '2000-12-02',
        name: 'John Legend',
        city: 'Chandler Bing',
        orderTotal: 9.9956,
        orders: [{
            id: 1,
            product: 'Shoes',
            total: 9.9956
        }]

    }, {
        id: 2,
        joined: '1965-01-25',
        name: 'Zed Zapplin',
        city: 'Las Vegas',
        orderTotal: 19.99,
        orders: [{
            id: 2,
            product: 'Baseball',
            total: 9.995
        }, {
            id: 3,
            product: 'Bat',
            total: 9.995
        }]
    }, {
        id: 3,
        joined: '1944-06-15',
        name: 'Tina christopher',
        city: 'New York',
        orderTotal: 44.99,
        orders: [{
            id: 4,
            product: 'Headphones',
            total: 44.99
        }]
    }, {
        id: 4,
        joined: '1995-03-28',
        name: 'Dave matthews',
        city: 'Seattle',
        orderTotal: 101.50,
        orders: [{
            id: 5,
            product: 'Kindle',
            total: 101.50
        }]

    },{
        id: 5,
        joined: '1998-03-28',
        name: 'Robin matthews',
        city: 'NY',
        orderTotal: 301.50,
        orders: [{
            id: 6,
            product: 'IPAD',
            total: 301.50
        }]

    }


];
