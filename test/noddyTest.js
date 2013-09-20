var expect = require("chai").expect;

var numHandler = require('../numHandler');

var objNumHandler = new numHandler();

describe("Our noddy test", function() {
    
    it('should accept no input', function(done) {
        
        expect(objNumHandler.add()).to.be.equal(0);
        
        done();
        
    });
    
    it('should accept one input', function(done) {
        
        expect(objNumHandler.add('1')).to.be.equal(12);
        
        done();
        
    });
    
    it('should accept two inputs in one param', function(done) {
        
        expect(objNumHandler.add('1,2')).to.be.equal(3);
        
        done();
        
    });
    
    it('should accept an unknown amount of numbers', function(done) {
        
        expect(objNumHandler.add('1,2,3,4,5')).to.be.equal(15);
        
        done();
        
    });
    
    it('should accept new lines between number', function(done) {
        
        expect(objNumHandler.add("1\n2,3")).to.be.equal(6);
        
        done();
        
    });
    
    it('should allow us to specify the delimiter', function(done) {
        
        expect(objNumHandler.add("//;\n1;2")).to.be.equal(3);
        
        done();
        
    });
    
    it('should throw an error when receiving negative numbers', function(done) {
        
        var fn = function() {
            objNumHandler.add('-1');
        };
        
        expect(fn).to.throw('negatives not allowed -1');
        
        done();
        
    });
    
    it('should throw an error when receiving multiple negative numbers', function(done) {
        
        var fn = function() {
            objNumHandler.add('-1,-2');
        };
        
        expect(fn).to.throw('negatives not allowed -1,-2');
        
        done();
        
    });
    
    
});