'use strict';

var url = require('url');


var Sandbox = require('./SandboxService');


module.exports.v1BlueprintsBlueprintIdentifierSetupSandboxPost = function v1BlueprintsBlueprintIdentifierSetupSandboxPost (req, res, next) {
  var blueprintIdentifier = req.swagger.params['blueprint_identifier'].value;
  var body = req.swagger.params['body'].value;
  

  var result = Sandbox.v1BlueprintsBlueprintIdentifierSetupSandboxPost(blueprintIdentifier, body);

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

module.exports.v1SandboxesSandboxIdGet = function v1SandboxesSandboxIdGet (req, res, next) {
  var sandboxId = req.swagger.params['sandbox_id'].value;
  

  var result = Sandbox.v1SandboxesSandboxIdGet(sandboxId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.v1SandboxesSandboxIdTeardownSandboxPost = function v1SandboxesSandboxIdTeardownSandboxPost (req, res, next) {
  var sandboxId = req.swagger.params['sandbox_id'].value;
  

  var result = Sandbox.v1SandboxesSandboxIdTeardownSandboxPost(sandboxId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
