const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {
            flights
        })
    })
};

function newFlight(req, res) {
    res.render('flights/new')
};

function create(req, res) {
    console.log(req.body)
    for (let key in req.body) {
        if(req.body[key] === '') delete req.body[key]
    }
    const flight = new Flight(req.body)
    flight.save(function(err) {
        if(err) {
            console.log(err)
            return res.redirect('/flights/new')
        }
        res.redirect('/flights')
    })
};

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', {title: 'Flight Details', flight })
    })
};