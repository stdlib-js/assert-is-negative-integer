"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(q){throw (r=0, q)}};};var t=i(function(N,u){
var o=require('@stdlib/assert-is-integer/dist').isPrimitive;function O(e){return o(e)&&e<0}u.exports=O
});var s=i(function(d,v){
var m=require('@stdlib/assert-is-integer/dist').isObject;function I(e){return m(e)&&e.valueOf()<0}v.exports=I
});var c=i(function(y,a){
var b=t(),f=s();function j(e){return b(e)||f(e)}a.exports=j
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),n=c(),p=t(),x=s();g(n,"isPrimitive",p);g(n,"isObject",x);module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
