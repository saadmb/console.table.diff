var isEqual = require('./lodash.isequal');
var differenceWith = require('./lodash.differencewith');

function getProperties(obj) {
    var props = [];

    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            props.push(prop);
        }
    }

    return props;
}

// get the longest property name/value
function getLongestTextLength(objArray) {
    var longest = 0;

    objArray.forEach(function(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                var length = Math.max((prop + '').length, (obj[prop] + '').length);
                if (length > longest)
                    longest = length;
            }
        }
    });

    return longest;
}

window.console.table.diff = function(objArray, Ar2) {
    var objProto = objArray[0];
    var args = [];
    var header = '';

    var greenBackgd = 'background: lightgreen;';
    var redBackgd = 'background: lightcoral;';

    var baseStyles = 'padding: 2px; line-height: 18px; color: black; ';
    var baseBorders = 'border-top: 1px solid black; border-bottom: 1px solid black; border-left: 1px solid black; ';
    var headerStyles = baseStyles + baseBorders + 'font-weight: bold; background: lightblue;';
    var lastHeaderStyles = baseStyles + 'font-weight: bold; border: 1px solid black; background: lightblue;';

    var props = getProperties(objProto);
    var longestTextLength = getLongestTextLength(objArray);

    for (var i = 0; i < props.length; i++) {
        var prop = props[i] + '';

        // pad the text with spaces to match the longestTextLength 
        while (prop.length < longestTextLength) {
            prop += ' ';
        }

        header += '%c' + prop.toUpperCase() + ' ';

        if (i === props.length - 1) {
            args.push(lastHeaderStyles);
        } else {
            args.push(headerStyles);
        }
    }

    var diffAr = differenceWith(objArray, Ar2, isEqual);
    var remAr = differenceWith(objArray, diffAr, isEqual);

    for (var i = 0; i < objArray.length; i++) {
        var obj = objArray[i];

        var rowStyles = baseStyles + baseBorders + greenBackgd;
        var lastRowStyles = baseStyles + 'border: 1px solid black; ' + greenBackgd;

        if (remAr.length != 0) {
            remAr.forEach(function(r) {
                if (isEqual(obj, r)) {
                    rowStyles = baseStyles + baseBorders + redBackgd;
                    lastRowStyles = baseStyles + 'border: 1px solid black; ' + redBackgd;
                }
            });
        }

        header += '\n';

        for (var j = 0; j < props.length; j++) {
            var val = obj[props[j]] + '';

            // pad the text with spaces to match the longestTextLength 
            while (val.length < longestTextLength) {
                val += ' ';
            }

            header += '%c' + val + ' ';

            if (j === props.length - 1) {
                args.push(lastRowStyles);
            } else {
                args.push(rowStyles);
            }
        }
    }

    args.unshift(header);
    window.console.log.apply(this, args);
}

module.exports = window.console.table;