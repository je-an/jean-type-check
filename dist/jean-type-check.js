!function(e,r){"function"==typeof define&&define.amd?define([],r):"object"==typeof module&&module.exports?module.exports=r():(e.TypeCheck=e.TypeCheck||{},e.TypeCheck=r())}(this,function(){var e,r;return function(n){function i(e){for(var r=0,n=[];r<e.length;r++){var i=s.resolved[e[r]];i&&n.push(i)}return n}function t(){for(var e in s.unresolved){var r=s.unresolved[e],n=i(r.dependencies);o(e,r.factory,r.dependencies,n,!1)}}function o(e,r,n,i,t){i.length===n.length?s.resolved[e]=r.apply(r,i):t&&(s.unresolved[e]={dependencies:n,factory:r})}var s={resolved:{},unresolved:{}};r=function(e,r,n){return s.resolved[e]?void console.warn("There is already a module with id <"+e+"> defined. Therefore this module will be ignored"):"string"==typeof e&&Array.isArray(r)&&"function"==typeof n?(0===r.length?o(e,n,r,[],!1):o(e,n,r,i(r),!0),void t()):void console.warn("Passed arguments for module are invalid")},r.amd={},e=function(e,r){e=Array.isArray(e)?e:[e];var n=i(e);if(1===n.length&&!r)return n[0];if(n.length!==e.length||!r)throw new Error("Not all modules are resolved");r.apply(r,n)}}(),r("node_modules/jean-amd/dist/jean-amd",function(){}),r("src/TypeCheck",[],function(){return{isString:function(e){return"string"==typeof e},isBoolean:function(e){return"boolean"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:function(e){var r=!1;if(this.isString(e)||this.isFunction(e))return!1;if(this.isEmptyObject(e))return!0;for(var n in e)if(e.hasOwnProperty(n)){r=!0;break}return r},isEmptyObject:function(e){var r=!0;if(!this.isDefined(e)||this.isBoolean(e)||this.isFunction(e)||this.isNumber(e)||this.isString(e)||Array.isArray(e))return!1;for(var n in e)if(e.hasOwnProperty(n)){r=!1;break}return r},isFunction:function(e){return"function"==typeof e},isDefined:function(e){return void 0!==e&&null!=e},isArray:function(e){return Array.isArray(e)},isArrayTypeOf:function(e,r){var n=!0;if(!this.isString(r))throw new TypeError("options.type is not a string");if(!Array.isArray(e))throw new TypeError("options.array is not an array");0===e.length&&(n=!1);for(var i=0,t=e.length;i<t;i++){if(typeof e[i]!==r){n=!1;break}}return n},isInstanceOf:function(e,r){if(!this.isObject(e))throw new TypeError("child is not an object");if(!this.isFunction(r))throw new TypeError("parent is not a function");return e instanceof r}}}),e("src/TypeCheck")});