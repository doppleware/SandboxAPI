'use strict';

var url = require('url');


var Sandbox = require('./SandboxService');


module.exports.v1BlueprintsBlueprintIdentifierStartPost = function v1BlueprintsBlueprintIdentifierStartPost (req, res, next) {
  Sandbox.v1BlueprintsBlueprintIdentifierStartPost(req.swagger.params, res, next);
};

module.exports.v1SandboxesGet = function v1SandboxesGet (req, res, next) {
  Sandbox.v1SandboxesGet(req.swagger.params, res, next);
};

module.exports.v1SandboxesSandboxIdGet = function v1SandboxesSandboxIdGet (req, res, next) {
  Sandbox.v1SandboxesSandboxIdGet(req.swagger.params, res, next);
};

module.exports.v1SandboxesSandboxIdStopPost = function v1SandboxesSandboxIdStopPost (req, res, next) {
  Sandbox.v1SandboxesSandboxIdStopPost(req.swagger.params, res, next);
};
