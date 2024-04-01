"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=i(function(P,u){
var q=require('@stdlib/assert-is-integer/dist').isPrimitive;function o(e){return q(e)&&e<0}u.exports=o
});var s=i(function(N,v){
var O=require('@stdlib/assert-is-integer/dist').isObject;function m(e){return O(e)&&e.valueOf()<0}v.exports=m
});var c=i(function(d,a){
var I=t(),b=s();function f(e){return I(e)||b(e)}a.exports=f
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),n=c(),j=t(),p=s();g(n,"isPrimitive",j);g(n,"isObject",p);module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
