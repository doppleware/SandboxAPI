'use strict';

var url = require('url');


var Sandbox = require('./SandboxService');


module.exports.v1BlueprintsBlueprintIdentifierCreateSandboxPost = function v1BlueprintsBlueprintIdentifierCreateSandboxPost (req, res, next) {
  var blueprintIdentifier = req.swagger.params['blueprint_identifier'].value;
  var body = req.swagger.params['body'].value;
  

  var result = Sandbox.v1BlueprintsBlueprintIdentifierCreateSandboxPost(blueprintIdentifier, body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.v1SandboxesGet = function v1SandboxesGet (req, res, next) {
  var showHistoric = req.swagger.params['show_historic'].value;
  

  var result = Sandbox.v1SandboxesGet(showHistoric);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.v1SandboxesIdGet = function v1SandboxesIdGet (req, res, next) {
  var id = req.swagger.params['id'].value;
  

  var result = Sandbox.v1SandboxesIdGet(id);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.v1SandboxesIdEndPost = function v1SandboxesIdEndPost (req, res, next) {
  var id = req.swagger.params['id'].value;
  

  var result = Sandbox.v1SandboxesIdEndPost(id);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
