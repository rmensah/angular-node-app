'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
Day is an object in a collection

    Day belongs to -> Schedule

*/

var daySchema = new Schema({
    dayDate: String,
    hours: Schema.Types.Mixed
});


var Day = mongoose.model('Day', daySchema);
module.exports = Day;
```

scheduleModel.js
```
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
Day is an object in a collection

    Schedule has many Days

*/

var scheduleSchema = new Schema({
    days: [{
        type: Schema.Types.ObjectId,
        ref: 'Day'
    }]
});


var Schedule = mongoose.model('Schedule', scheduleSchema);
module.exports = Schedule;