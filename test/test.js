var assert = require('assert'),
    navBar = require('../js/model/NavModel'),
    should = require('should'),
    _ = require('underscore');

const items = navBar.getNavBarItems();

describe('Array', function() {
    it('Error - the Array of Objects is empty', function() {
        items.should.be.instanceof(Array).and.not.be.empty();
    });
    it('Error - something is wrong with the Objects properties', function() {
        _.map(items, (item,index) => (
            item.should.have.property('title').which.is.a.String().and.not.be.empty(),
            item.should.have.property('url').which.is.a.String().and.not.be.empty(),
            item.should.have.property('newTab').which.is.a.Boolean()
        ))
    });
});
