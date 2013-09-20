module.exports = numHandler;


function numHandler() {
    
    var self = this;
    
    self.add = function(number) {
        
        var total = 0;
        
        if(number !== undefined) {
            
            var obj = self.parseDelimiter(number);
            
            var arrNum = obj.str.split(obj.delimiter);
            
            var arrNegative = [];
            
            arrNum.forEach(function(num) {
                
                var cleanNumber = Number(num);
                
                if(cleanNumber < 0) {
                    arrNegative.push(cleanNumber);
                }
                
                total += cleanNumber;
                
            });
            
            if(arrNegative.length > 0) {
                throw new Error('negatives not allowed ' + arrNegative.join(','));
            }
            
        }
        
        return total;
        
    };
    
    
    self.parseDelimiter = function(str) {
        
        var delimiter = /\n|,/;
            
        var match = str.match(/^\/\/(.*)\n(.+)/);

        if(match !== null) {
            delimiter = match[1];
            str = match[2];
        }
        
        return {
            delimiter: delimiter,
            str: str
        };
        
    };
    
    
    return self;
    
}