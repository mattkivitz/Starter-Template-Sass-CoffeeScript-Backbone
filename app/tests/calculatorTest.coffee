describe 'A Calculator', ->
	beforeEach ->
		@calc = new Calculator

	it 'should add', ->
		@calc.add(5)
		@calc.total.should.equal 5