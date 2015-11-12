'use strict';

var url = require('url');


var Blueprint = require('./BlueprintService');


module.exports.apiV1BlueprintsGet = function apiV1BlueprintsGet (req, res, next) {
  

  var result = Blueprint.apiV1BlueprintsGet();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.apiV1BlueprintsSearchGet = function apiV1BlueprintsSearchGet (req, res, next) {
  var q = req.swagger.params['q'].value;
  var category = req.swagger.params['category'].value;
  

  var result = Blueprint.apiV1BlueprintsSearchGet(q, category);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.apiV1BlueprintsBlueprintIdentifierGet = function apiV1BlueprintsBlueprintIdentifierGet (req, res, next) {
  var blueprintIdentifier = req.swagger.params['blueprint_identifier'].value;
  

  var result = Blueprint.apiV1BlueprintsBlueprintIdentifierGet(blueprintIdentifier);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
