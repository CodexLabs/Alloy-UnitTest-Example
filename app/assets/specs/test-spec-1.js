// Require Behave to be able to run Behave Tests
require('behave').andSetup(this);

describe('The Simple Test Setup', function(){
	
	var $;
	
	it('index controller should exist', function(){
		$  = Alloy.createController('index');
		expect($ ).notToBe(null);
	});

	it('label should equal Hello World', function(){
		expect($.label.text).toBe("Hello, World");
	});

	it('counter should equal 1 after calling onClick', function() {
		$.__views.label.fireEvent("click");
		expect($.label.text + '1').toBe('Hello, World1'); // It should fail because the Event was called in the previous Unit Test as well.
	});
	
});