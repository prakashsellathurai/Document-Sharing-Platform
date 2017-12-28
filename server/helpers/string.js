'use strict'
module.exports = {
     trimChar:function(string, charToRemove) {
        while(string.charAt(0)==charToRemove) {
            string = string.substring(1);
        }
    
        while(string.charAt(string.length-1)==charToRemove) {
            string = string.substring(0,string.length-1);
        }
    
        return string;
    },
    parseURL : function (url) {
        var parser = document.createElement('a'),
            searchObject = {},
            queries, split, i;
        // Let the browser do the work
        parser.href = url;
        // Convert query string to object
        queries = parser.search.replace(/^\?/, '').split('&');
        for( i = 0; i < queries.length; i++ ) {
            split = queries[i].split('=');
            searchObject[split[0]] = split[1];
        }
        return {
            protocol: parser.protocol,
            host: parser.host,
            hostname: parser.hostname,
            port: parser.port,
            pathname: parser.pathname,
            search: parser.search,
            searchObject: searchObject,
            hash: parser.hash
        };
    },
    
    stripSlASH : function(str){
        str = str.replace(/\\'/g, '\'');
        str = str.replace(/\\"/g, '"');
        str = str.replace(/\\0/g, '\0');
        str = str.replace(/\\\\/g, '\\');
        str = str.replace(/'/g, '"');
        return str;
    },
    JSONize: function(str) {
        return str
          // wrap keys without quote with valid double quote
          .replace(/([\$\w]+)\s*:/g, function(_, $1){return '"'+$1+'":'})    
          // replacing single quote wrapped ones to double quote 
          .replace(/'([^']+)'/g, function(_, $1){return '"'+$1+'"'})         
      }
}