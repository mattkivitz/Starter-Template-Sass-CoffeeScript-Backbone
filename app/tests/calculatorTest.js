// Generated by CoffeeScript 1.4.0
(function() {

  describe('A Calculator', function() {
    beforeEach(function() {
      return this.calc = new Calculator;
    });
    return it('should add', function() {
      this.calc.add(5);
      return this.calc.total.should.equal(5);
    });
  });

}).call(this);
