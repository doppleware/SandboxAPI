'use strict';

exports.v1BlueprintsBlueprintIdentifierStartPost = function(args, res, next) {
  /**
   * parameters expected in the args:
   * blueprintIdentifier (String)
   * body (SandboxStartParameters)
   **/

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
exports.v1SandboxesGet = function(args, res, next) {
  /**
   * parameters expected in the args:
   * showHistoric (Boolean)
   **/

var examples = {};
  
  examples['application/json'] = {
  "data" : [ {
    "id" : "4d9f97c2-7f0d-411d-9501-e9c5de41b4e4",
    "name" : "My Sandbox For DataCenter Discovery",
    "blueprint" : {
      "id" : "4d9f97c2-7f0d-411d-9501-e9c5de41b4e4",
      "name" : "DataCenter Discovery"
    },
    "state" : "ready",
    "description" : "An example discovery application intended for develoeprs to experiment with",
    "_links" : [ {
      "self" : "/v1/sanboxes/4d9f97c2-7f0d-411d-9501-e9c5de41b4e4"
    }, {
      "end" : "/v1/sanboxes/4d9f97c2-7f0d-411d-9501-e9c5de41b4e4/end"
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
exports.v1SandboxesSandboxIdGet = function(args, res, next) {
  /**
   * parameters expected in the args:
   * sandboxId (String)
   **/

var examples = {};
  
  examples['application/json'] = {
  "data" : {
    "id" : "4d9f97c2-7f0d-411d-9501-e9c5de41b4e4",
    "name" : "CI Build 123123 APC-IM Test Policy",
    "type" : "Sandbox",
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
exports.v1SandboxesSandboxIdStopPost = function(args, res, next) {
  /**
   * parameters expected in the args:
   * sandboxId (String)
   **/

var examples = {};
  

  
  res.end();
}
