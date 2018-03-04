const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        //console.log(JSON.stringify(body, undefined, 2));
        //console.log(JSON.stringify(response, undefined, 2));
        //console.log(JSON.stringify(error, undefined, 2));
        if (error) {
            callback('Unable to connect to Google servers.');
            //console.log('Unable to connect to Google servers.');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address');
            //console.log('Unable to find that address')
        } else if (body.status === 'OK') {
            //////callback(undefined, )
            console.log(`${body.results[0].formatted_address}`);
            console.log(`latitude: ${body.results[0].geometry.location.lat}`);
            console.log(`latitude: ${body.results[0].geometry.location.lng}`);
        }
    });
}

module.exports.geocodeAddress = geocodeAddress;