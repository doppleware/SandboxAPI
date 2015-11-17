'use strict';

exports.v1BlueprintsBlueprintIdentifierSetupSandboxPost = function(blueprintIdentifier, body) {

  var examples = {};
  
  examples['application/json'] = {
    "id" : "4d9f97c2-7f0d-411d-9501-e9c5de41b4e4",
    "name" : "APIC-EM 1.0GA DataCenter Discovery",
    "category" : "APIC-EM",
    "availability" : "available",
    "description" : "An example discovery application intended for develoeprs to experiment with",
    "_links" : [ {
      "self" : "/v1/blueprints/4d9f97c2-7f0d-411d-9501-e9c5de41b4e4"
    }, {
      "create_sandbox" : "/v1/blueprints/4d9f97c2-7f0d-411d-9501-e9c5de41b4e4/create_sandbox"
    } ]

};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.v1SandboxesGet = function(showHistoric) {

  var examples = {};
  
  examples['application/json'] = {
  "data" : [ {
    "id" : "4d9f97c2-7f0d-411d-9501-e9c5de41b4e4",
    "name" : "My Sandbox For DataCenter Discovery",
    "state" : "ready",
    "description" : "An example discovery application intended for develoeprs to experiment with",
    "_links" : [ {
      "self" : "/v1/sanboxes/4d9f97c2-7f0d-411d-9501-e9c5de41b4e4"
    }, {
      "end" : "/v1/sanboxes/4d9f97c2-7f0d-411d-9501-e9c5de41b4e4/end"
    } ]
  } ]
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.v1SandboxesSandboxIdGet = function(sandboxId) {

  var examples = {};
  
  examples['application/json'] = {
  "data" : {
    "id" : "4d9f97c2-7f0d-411d-9501-e9c5de41b4e4",
    "name" : "CI Build 123123 APC-IM Test Policy",
    "state" : "in setup",
    "description" : "An example discovery application intended for develoeprs to experiment with",
    "components" : [ {
      "name" : "Client Desktop",
      "description" : "Represents a client machine connected to a WAN network",
      "type" : "SandboxComponent",
      "component_type" : "Virtual Machine",
      "connection_interfaces" : [ {
        "name" : "Remote Desktop",
        "type" : "ConnectionInterface",
        "connection_interface_type" : "WebRemoteLink",
        "url" : "http://sandbox_api_remote_server.com/nav?id=c%2FDEFAULT&amp;guac.hostname=192.33.45.66&amp;guac.protocol=rdp&amp;guac.port=3389&amp;guac.username=test&amp;guac.password=D*SDAD&"
      } ]
    } ],
    "attributes" : [ {
      "name" : "Version",
      "type" : "ComponentAttribute",
      "value" : "2.3.0"
    } ],
    "_links" : [ {
      "self" : "/v1/sanboxes/4d9f97c2-7f0d-411d-9501-e9c5de41b4e4"
    }, {
      "end" : "/v1/sanboxes/4d9f97c2-7f0d-411d-9501-e9c5de41b4e4/end"
    } ]
  }
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.v1SandboxesSandboxIdTeardownSandboxPost = function(sandboxId) {

  var examples = {};
  

  
}
