#!/usr/bin/env node

var pk;

pk = require('palvelukartta');


// Vuosaaren uimahalli|25.1416744,60.2088469
pk.itemRetrieve('unit', null, function(err, units) {
  units.forEach(function(unit) {
    process.stdout.write(unit.name_fi + "|" + unit.latitude + "," + unit.longitude + '\n');
  });
  process.exit();
});