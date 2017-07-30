define("match",[],function(){return function(t){function e(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return t[n].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(3),o=n(a);e.default=o.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=e.isObj=function(t){return"object"===("undefined"==typeof t?"undefined":r(t))&&!(t instanceof Array)};e.isFun=function(t){return"function"==typeof t},e.isArray=function(t){return!n(t)&&t instanceof Array},e.isStr=function(t){return"string"==typeof t},e.typeCharge=function(t){try{t=t.trim();var e=/^(['"])(.*)\1$/;if(e.test(t))return t=t.match(e).pop();var r=parseFloat(t),n="false"!==t&&("true"===t||"");return t=r||""!==n?r||n:t}catch(e){return t}},e.objToArray=function(t,e){try{var r=[],n=!0,a=!1,o=void 0;try{for(var u,i=t[Symbol.iterator]();!(n=(u=i.next()).done);n=!0){var c=u.value;r=r.concat(c[e])}}catch(t){a=!0,o=t}finally{try{!n&&i.return&&i.return()}finally{if(a)throw o}}return r}catch(t){return[]}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.extendConfig=void 0;var n=r(1),a={filterUndefined:!0,filterNull:!0,autoComplete:!1};e.default=a;e.extendConfig=function(t){return(0,n.isObj)(t)?void Object.assign(a,t):void console.log("error config type")}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.matchArray=e.matchObject=void 0;var a=r(7),o=r(1),u=r(4),i=r(6),c=n(i),f=r(5),l=n(f),d=r(2),s=(n(d),e.matchObject=function(t,e){var r=void 0,n={};for(var o in e)r=(0,a.parse)(e[o]),n[o]=(0,a.parseToData)(r,t,n),(0,c.default)(o,n);return(0,l.default)(n,t),n}),v=e.matchArray=function(t,e){var r={};if(1===e.length)for(var n=0;n<t.length;n++)r[n]=s(t[n],e[0]);if(2===e.length){t=t[e[0]];for(var a=0;a<t.length;a++)r[a]=s(t[a],e[1])}return r},y={parse:function(t,e){var r=void 0;return(0,o.isObj)(e)&&(r=s(t,e)),(0,o.isArray)(e)&&(r=v(t,e)),r},register:function(t,e){(0,u.pushStack)({value:t,name:e})},update:function(t,e){(0,u.updateStack)(t,e)},remove:function(t){(0,u.removeStack)(t)},removeAll:function(){(0,u.cleanStack)()},config:function(t){(0,d.extendConfig)(t)}};e.default=y},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cleanStack=e.removeStack=e.updateStack=e.pushStack=void 0;var n=(r(1),[]);e.default=n;e.pushStack=function(t){for(var e=!1,r=0;r<n.length;r++)n[r].name===t.name&&(n[r]=t,e=!0);e||n.push(t)},e.updateStack=function(t,e){try{for(var r=0;r<n.length;r++)n[r].name===e&&(n[r].value=t)}catch(t){console.log(t)}},e.removeStack=function(t){for(var e=0;e<n.length;)n[e].name===t?n.splice(e,1):e++},e.cleanStack=function(){n=[]}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(2),o=n(a),u=function(t,e){if(o.default.autoComplete)for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])};e.default=u},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(2),o=n(a),u=function(t,e){o.default.filterUndefined&&void 0===e[t]&&delete e[t],o.default.filterNull&&null===e[t]&&delete e[t]};e.default=u},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.parseToData=e.parse=void 0;var a=r(1),o=r(3),u=r(4),i=n(u),c=(e.parse=function(t){var e=void 0,r=void 0,n=void 0,o={},u=/\$\$\{\{(.*)\}\}/;if((0,a.isObj)(t))return o.matchObject=t,o;if((0,a.isArray)(t))return o.matchArray=t,o;if((0,a.isFun)(t))return o.matchFun=t,o;if(!(0,a.isStr)(t)||!u.test(t))return o.noMatch=t,o;e=t.split("||");var i=!0,c=!1,f=void 0;try{for(var l,d=e[Symbol.iterator]();!(i=(l=d.next()).done);i=!0)r=l.value,n=r.trim().match(u),n&&n.length&&n.length>=1?o.matchParam=n[1]:n||(o.default=r.trim())}catch(t){c=!0,f=t}finally{try{!i&&d.return&&d.return()}finally{if(c)throw f}}return o},e.parseToData=function(t,e,r){try{var n=void 0;if(t.matchObject)return n=(0,o.matchObject)(e,t.matchObject);if(t.matchArray)return n=(0,o.matchArray)(e,t.matchArray);if(t.noMatch)return n=t.noMatch;if(t.matchParam)return n=c(e,t.matchParam)||(0,a.typeCharge)(t.default);if(t.matchFun)return n=t.matchFun.apply(r,[e].concat((0,a.objToArray)(i.default,"value")))}catch(t){console.log(t)}},function(t,e){var r=t,n=e.split("."),a=!0,o=!1,u=void 0;try{for(var i,c=n[Symbol.iterator]();!(a=(i=c.next()).done);a=!0){var f=i.value;r=r[f]}}catch(t){o=!0,u=t}finally{try{!a&&c.return&&c.return()}finally{if(o)throw u}}return r})}])});
//# sourceMappingURL=bundle.js.map