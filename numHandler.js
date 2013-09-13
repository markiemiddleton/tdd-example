module.exports = numHandler;


function numHandler() {
    
    var self = this;
    
    self.add = function(number) {
        
        var total = 0;
        
        if(number !== undefined) {
            
            var arrNum = number.split(/\n|,/);
            
            arrNum.forEach(function(num) {
                
                total += Number(num);
                
            });
            
        }
        
        return total;
        
    };
    
    return self;
    
}