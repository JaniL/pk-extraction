#!/usr/bin/env node

var pk, args, a2, _, fs;

pk = require('palvelukartta');
_  = require('underscore');
fs = require('fs');

args = process.argv;
args.shift();
args.shift();

a2 = {};

args.forEach(function(arg) {
  arg = arg.split('=');
  a2[arg[0]] = arg[1];
});



// Vuosaaren uimahalli|25.1416744,60.2088469
// address_city_fi
pk.itemRetrieve('unit', null, function(err, units) {
  _.each(a2, function(value, key) {
    var paikat, filu;
    paikat = _.where(units, { address_city_fi: key });
    filu = fs.createWriteStream(value, { flags: 'a', encoding: 'utf8' });
    filu.on('open', function() {
      paikat.forEach(function(unit) {
        filu.write(unit.name_fi + "|" + unit.latitude + "," + unit.longitude + '\n');
      });
      filu.destroySoon();
    });
  });
});
