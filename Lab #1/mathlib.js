

module.exports = {
    sqrt: function(theNumber){
        var answer = Math.sqrt(theNumber);
        return answer;
    },
    // return if theNumber is even (t/f)
    even: function (theNumber){
        var even = (theNumber % 2 == 0);

        return even;
    },
    itsValidInt :function(theNumber){
        var theInt = parseInt(theNumber);
        if(theInt)
            return true;
        else
            return false; //NAN - not a number
    },

    itsValidFloat: function(theNumber){
        var theFloat = parseFloat(theNumber);
        if(theFloat)
            return true;
        else
            return false;
    }


};