// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

// If you use your ALLOY constants then when Alloy 'precompiles' down to Titanium
// it will strip the code out and not even package it in the IPA or APK, etc file if it shouldn't be there
// Documentation on the constants I am talking about: 
// http://docs.appcelerator.com/titanium/3.0/#!/guide/Alloy_Controllers-section-34636384_AlloyControllers-ConditionalCode


if(!OS_PRODUCTION)
{
	var behave = require('behave');	//require your created specs
	require('specs/test-spec-1');	//run:tests
	behave.run();
}

if(!OS_PRODUCTION))
{
	var behave = require('behave');

	//require your created specs
	require('specs/test-spec-1');

	//run:tests
	behave.run();	
}
