require('core-js/es5');

describe('Store', function() {

  var Helper;

  beforeEach( function() {
    jasmine.clock().install();
    // spyOn(window, 'ENV').and.returnValue({first: 'en'})
    // jasmine.stub(window, 'ENV', 'first', 'en');
    Helper = require('../helper');
    spyOn(Helper, 'first').and.returnValue('en');
  });


  it('call action handler', function() {
    var Store = require('../store'),
        Actions = require('../actions');

    

    Actions.transition();
    jasmine.clock().tick();

    expect(Store.getButtons()).not.toEqual('');
    expect(Store.getButtons()).toEqual('Handle Transition action in en');
  });
});