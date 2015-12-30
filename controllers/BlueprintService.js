'use strict';

exports.v1BlueprintsGet = function(args, res, next) {
  /**
   * parameters expected in the args:
   **/

var examples = {};
  
  examples['application/json'] = {
  "data" : [ {
    "id" : "4d9f97c2-7f0d-411d-9501-e9c5de41b4e4",
    "name" : "APIC-EM 1.0GA DataCenter Discovery",
    "categories" : [ "APIC-EM" ],
    "availability" : "available",
    "description" : "An example discovery application intended for develoeprs to experiment with",
    "_links" : [ {
      "self" : "/v1/blueprints/4d9f97c2-7f0d-411d-9501-e9c5de41b4e4"
    } ],
    "_actions" : [ {
      "create_sandbox" : null,
      "method" : "POST",
      "body" : {
        "$ref" : "#/definitions/SandboxStartParameters"
      },
      "href" : "/v1/blueprints/1c197b81-4213-467b-8a7a-f51ebd33a4b2/create_sandbox"
    } ]
  }, {
    "id" : "1c197b81-4213-467b-8a7a-f51ebd33a4b2",
    "name" : "APIC-EM 1.0GA DataCenter Discovery",
    "categories" : [ "APIC-EM" ],
    "availability" : "available",
    "description" : "An example discovery application intended for develoeprs to experiment with",
    "_links" : [ {
      "self" : "/v1/blueprints/4d9f97c2-7f0d-411d-9501-e9c5de41b4e4"
    } ],
    "_actions" : [ {
      "create_sandbox" : null,
      "method" : "POST",
      "body" : {
        "$ref" : "#/definitions/SandboxStartParameters"
      },
      "href" : "/v1/blueprints/1c197b81-4213-467b-8a7a-f51ebd33a4b2/create_sandbox"
    } ]
  } ]
};
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.v1BlueprintsBlueprintIdentifierGet = function(args, res, next) {
  /**
   * parameters expected in the args:
   * blueprintIdentifier (String)
   **/

var examples = {};
  
  examples['application/json'] = {
  "data" : {
    "id" : "4d9f97c2-7f0d-411d-9501-e9c5de41b4e4",
    "name" : "APIC-EM 1.0GA DataCenter Discovery",
    "categories" : [ "APIC-EM" ],
    "availability" : "available",
    "description" : "An example discovery application intended for develoeprs to experiment with",
    "_links" : [ {
      "self" : "/v1/blueprints/4d9f97c2-7f0d-411d-9501-e9c5de41b4e4"
    } ],
    "_actions" : [ {
      "create_sandbox" : null,
      "method" : "POST",
      "body" : {
        "$ref" : "#/definitions/SandboxStartParameters"
      },
      "href" : "/v1/blueprints/1c197b81-4213-467b-8a7a-f51ebd33a4b2/create_sandbox"
    } ]
  }
};
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
