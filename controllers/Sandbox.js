'use strict';

var url = require('url');


var Sandbox = require('./SandboxService');


module.exports.apiV1BlueprintsBlueprintIdentifierCreateSandboxPost = function apiV1BlueprintsBlueprintIdentifierCreateSandboxPost (req, res, next) {
  var blueprintIdentifier = req.swagger.params['blueprint_identifier'].value;
  var body = req.swagger.params['body'].value;
  

  var result = Sandbox.apiV1BlueprintsBlueprintIdentifierCreateSandboxPost(blueprintIdentifier, body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.apiV1SandboxesGet = function apiV1SandboxesGet (req, res, next) {
  var showHistoric = req.swagger.params['show_historic'].value;
  

  var result = Sandbox.apiV1SandboxesGet(showHistoric);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.apiV1SandboxesIdGet = function apiV1SandboxesIdGet (req, res, next) {
  var id = req.swagger.params['id'].value;
  

  var result = Sandbox.apiV1SandboxesIdGet(id);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.apiV1SandboxesIdEndPost = function apiV1SandboxesIdEndPost (req, res, next) {
  var id = req.swagger.params['id'].value;
  

  var result = Sandbox.apiV1SandboxesIdEndPost(id);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
