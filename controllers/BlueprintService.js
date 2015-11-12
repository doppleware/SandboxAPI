'use strict';

exports.apiV1BlueprintsGet = function() {

  var examples = {};
  
  examples['application/json'] = {
  "data" : [ {
    "id" : "4d9f97c2-7f0d-411d-9501-e9c5de41b4e4",
    "type" : "blueprint",
    "name" : "APIC-EM 1.0GA DataCenter Discovery",
    "category" : "APIC-EM",
    "description" : "An example discovery application intended for develoeprs to experiment with",
    "_links" : [ {
      "self" : "/v1/blueprints/4d9f97c2-7f0d-411d-9501-e9c5de41b4e4"
    }, {
      "create_sandbox" : "/v1/blueprints/4d9f97c2-7f0d-411d-9501-e9c5de41b4e4/create_sandbox"
    } ]
  }, {
    "id" : "1c197b81-4213-467b-8a7a-f51ebd33a4b2",
    "type" : "blueprint",
    "name" : "APIC-EM 1.0GA Hello world example",
    "category" : "APIC-EM",
    "description" : "An example hello world application intended for develoeprs to experiment with",
    "_links" : [ {
      "self" : "/v1/blueprints/1c197b81-4213-467b-8a7a-f51ebd33a4b2"
    }, {
      "create_sandbox" : "/v1/blueprints/1c197b81-4213-467b-8a7a-f51ebd33a4b2/create_sandbox"
    } ]
  } ]
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.apiV1BlueprintsSearchGet = function(q, category) {

  var examples = {};
  
  examples['application/json'] = {
  "data" : [ {
    "id" : "4d9f97c2-7f0d-411d-9501-e9c5de41b4e4",
    "name" : "APIC-EM 1.0GA DataCenter Discovery",
    "category" : "APIC-EM",
    "description" : "An example discovery application intended for develoeprs to experiment with",
    "_links" : [ {
      "self" : "/v1/blueprints/4d9f97c2-7f0d-411d-9501-e9c5de41b4e4"
    }, {
      "create_sandbox" : "/v1/blueprints/4d9f97c2-7f0d-411d-9501-e9c5de41b4e4/create_sandbox"
    } ]
  }, {
    "id" : "1c197b81-4213-467b-8a7a-f51ebd33a4b2",
    "name" : "APIC-EM 1.0GA Hello world example",
    "category" : "APIC-EM",
    "description" : "An example hello world application intended for develoeprs to experiment with",
    "_links" : [ {
      "self" : "/v1/blueprints/1c197b81-4213-467b-8a7a-f51ebd33a4b2"
    }, {
      "create_sandbox" : "/v1/blueprints/1c197b81-4213-467b-8a7a-f51ebd33a4b2/create_sandbox"
    } ]
  } ]
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.apiV1BlueprintsBlueprintIdentifierGet = function(blueprintIdentifier) {

  var examples = {};
  
  examples['application/json'] = {
  "data" : {
    "id" : "4d9f97c2-7f0d-411d-9501-e9c5de41b4e4",
    "name" : "APIC-EM 1.0GA DataCenter Discovery",
    "category" : "APIC-EM",
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
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
