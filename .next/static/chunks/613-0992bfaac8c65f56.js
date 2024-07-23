"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[613],{925:function(e,r){function t(){return(t=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(null,arguments)}Object.defineProperty(r,"__esModule",{value:!0}),r.extends=t},8087:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var o=t(4241),n=t(294),a=t(9213),l=t(387);r.useFormatter=o.useFormatter,r.useTranslations=o.useTranslations,r.useLocale=n.default,r.NextIntlClientProvider=a.default,Object.keys(l).forEach(function(e){"default"===e||Object.prototype.hasOwnProperty.call(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:function(){return l[e]}})})},4241:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var o=t(387);function n(e,r){return function(){try{return r(...arguments)}catch(e){throw Error(void 0)}}}let a=n(0,o.useTranslations),l=n(0,o.useFormatter);r.useFormatter=l,r.useTranslations=a,Object.keys(o).forEach(function(e){"default"===e||Object.prototype.hasOwnProperty.call(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:function(){return o[e]}})})},294:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var o=t(6463),n=t(4581),a=t(4142);r.default=function(){let e;let r=o.useParams();try{e=n.useLocale()}catch(t){if("string"!=typeof(null==r?void 0:r[a.LOCALE_SEGMENT_NAME]))throw t;e=r[a.LOCALE_SEGMENT_NAME]}return e}},9213:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var o=t(925),n=t(2265),a=t(1765),l=n&&n.__esModule?n:{default:n};r.default=function(e){let{locale:r,...t}=e;if(!r)throw Error(void 0);return l.default.createElement(a.IntlProvider,o.extends({locale:r},t))}},4142:function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.COOKIE_LOCALE_NAME="NEXT_LOCALE",r.COOKIE_MAX_AGE=31536e3,r.COOKIE_SAME_SITE="lax",r.HEADER_LOCALE_NAME="X-NEXT-INTL-LOCALE",r.LOCALE_SEGMENT_NAME="locale"},1765:function(e,r,t){e.exports=t(4480)},4581:function(e,r,t){e.exports=t(9773)},387:function(e,r,t){e.exports=t(2289)},307:function(e,r,t){var o=t(2265),n=t(8945);function a(){let e=o.useContext(n.IntlContext);if(!e)throw Error(void 0);return e}r.useIntlContext=a,r.useLocale=function(){return a().locale}},9773:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var o=t(307);t(2265),t(8945),r.useLocale=o.useLocale},987:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var o=t(3730),n=t(3834);t(2265),t(383),t(9583),r.IntlError=o.IntlError,r.IntlErrorCode=o.IntlErrorCode,r.createFormatter=o.createFormatter,r._createFormatters=n.createFormatters,r.initializeConfig=n.initializeConfig,r.createTranslator=function(e){let{_formatters:r=n.createFormatters(),getMessageFallback:t=n.defaultGetMessageFallback,messages:a,namespace:l,onError:s=n.defaultOnError,...i}=e;return function(e,r){let{messages:t,namespace:n,...a}=e;return t=t["!"],n=o.resolveNamespace(n,"!"),o.createBaseTranslator({...a,messages:t,namespace:n})}({...i,onError:s,formatters:r,getMessageFallback:t,messages:{"!":a},namespace:l?"!.".concat(l):"!"},0)}},3730:function(e,r,t){var o,n=t(2265),a=t(383),l=t(3834),s=a&&a.__esModule?a:{default:a};function i(e,r,t){var o;return(r="symbol"==typeof(o=function(e,r){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,r||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(r,"string"))?o:o+"")in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}let c=((o={}).MISSING_MESSAGE="MISSING_MESSAGE",o.MISSING_FORMAT="MISSING_FORMAT",o.ENVIRONMENT_FALLBACK="ENVIRONMENT_FALLBACK",o.INSUFFICIENT_PATH="INSUFFICIENT_PATH",o.INVALID_MESSAGE="INVALID_MESSAGE",o.INVALID_KEY="INVALID_KEY",o.FORMATTING_ERROR="FORMATTING_ERROR",o);class u extends Error{constructor(e,r){let t=e;r&&(t+=": "+r),super(t),i(this,"code",void 0),i(this,"originalMessage",void 0),this.code=e,r&&(this.originalMessage=r)}}function d(e,r){return e?Object.keys(e).reduce((t,o)=>(t[o]={timeZone:r,...e[o]},t),{}):e}function f(e,r,t,o){let n=l.joinPath(o,t);if(!r)throw Error(n);let a=r;return t.split(".").forEach(r=>{let t=a[r];if(null==r||null==t)throw Error(n+" (".concat(e,")"));a=t}),a}let p=365/12*86400,m={second:1,seconds:1,minute:60,minutes:60,hour:3600,hours:3600,day:86400,days:86400,week:604800,weeks:604800,month:365/12*86400,months:365/12*86400,quarter:365/12*259200,quarters:365/12*259200,year:31536e3,years:31536e3};r.IntlError=u,r.IntlErrorCode=c,r.createBaseTranslator=function(e){let r=function(e,r,t){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:l.defaultOnError;try{if(!r)throw Error(void 0);let o=t?f(e,r,t):r;if(!o)throw Error(t);return o}catch(r){let e=new u(c.MISSING_MESSAGE,r.message);return o(e),e}}(e.locale,e.messages,e.namespace,e.onError);return function(e){let{defaultTranslationValues:r,formats:t,formatters:o,getMessageFallback:a=l.defaultGetMessageFallback,locale:i,messagesOrError:p,namespace:m,onError:b,timeZone:g}=e;function h(e,r,t){let o=new u(r,t);return b(o),a({error:o,key:e,namespace:m})}function v(e,l,b){let v,y;if(p instanceof u)return a({error:p,key:e,namespace:m});try{v=f(i,p,e,m)}catch(r){return h(e,c.MISSING_MESSAGE,r.message)}if("object"==typeof v){let r;return h(e,Array.isArray(v)?c.INVALID_MESSAGE:c.INSUFFICIENT_PATH,r)}let w=function(e,r){if(r)return;let t=e.replace(/'([{}])/gi,"$1");return/<|{/.test(t)?void 0:t}(v,l);if(w)return w;try{y=o.getMessageFormat(v,i,function(e,r){let t=r?{...e,dateTime:d(e.dateTime,r)}:e,o=s.default.formats.date,n=r?d(o,r):o,a=s.default.formats.time,l=r?d(a,r):a;return{...t,date:{...n,...null==t?void 0:t.dateTime},time:{...l,...null==t?void 0:t.dateTime}}}({...t,...b},g),{formatters:{...o,getDateTimeFormat:(e,r)=>o.getDateTimeFormat(e,{timeZone:g,...r})}})}catch(r){return h(e,c.INVALID_MESSAGE,r.message)}try{let e=y.format(function(e){if(0===Object.keys(e).length)return;let r={};return Object.keys(e).forEach(t=>{let o,a=0,l=e[t];o="function"==typeof l?e=>{let r=l(e);return n.isValidElement(r)?n.cloneElement(r,{key:t+a++}):r}:l,r[t]=o}),r}({...r,...l}));if(null==e)throw Error(void 0);return n.isValidElement(e)||Array.isArray(e)||"string"==typeof e?e:String(e)}catch(r){return h(e,c.FORMATTING_ERROR,r.message)}}function y(e,r,t){let o=v(e,r,t);return"string"!=typeof o?h(e,c.INVALID_MESSAGE,void 0):o}return y.rich=v,y.markup=(e,r,t)=>{let o=v(e,r,t);if("string"!=typeof o){let r=new u(c.FORMATTING_ERROR,void 0);return b(r),a({error:r,key:e,namespace:m})}return o},y.raw=e=>{if(p instanceof u)return a({error:p,key:e,namespace:m});try{return f(i,p,e,m)}catch(r){return h(e,c.MISSING_MESSAGE,r.message)}},y}({...e,messagesOrError:r})},r.createFormatter=function(e){let{_formatters:r=l.createFormatters(),formats:t,locale:o,now:n,onError:a=l.defaultOnError,timeZone:s}=e;function i(e){var r;return null!==(r=e)&&void 0!==r&&r.timeZone||(s?e={...e,timeZone:s}:a(new u(c.ENVIRONMENT_FALLBACK,void 0))),e}function d(e,r,t,o){let n;try{n=function(e,r){let t;if("string"==typeof r){if(!(t=null==e?void 0:e[r])){let e=new u(c.MISSING_FORMAT,void 0);throw a(e),e}}else t=r;return t}(r,e)}catch(e){return o()}try{return t(n)}catch(e){return a(new u(c.FORMATTING_ERROR,e.message)),o()}}function f(e,n){return d(n,null==t?void 0:t.dateTime,t=>(t=i(t),r.getDateTimeFormat(o,t).format(e)),()=>String(e))}function b(){return n||(a(new u(c.ENVIRONMENT_FALLBACK,void 0)),new Date)}return{dateTime:f,number:function(e,n){return d(n,null==t?void 0:t.number,t=>r.getNumberFormat(o,t).format(e),()=>String(e))},relativeTime:function(e,t){try{var n;let a,l;let s={};t instanceof Date||"number"==typeof t?a=new Date(t):t&&(a=null!=t.now?new Date(t.now):b(),l=t.unit,s.style=t.style,s.numberingSystem=t.numberingSystem),a||(a=b());let i=(new Date(e).getTime()-a.getTime())/1e3;l||(l=function(e){let r=Math.abs(e);return r<60?"second":r<3600?"minute":r<86400?"hour":r<604800?"day":r<p?"week":r<31536e3?"month":"year"}(i)),s.numeric="second"===l?"auto":"always";let c=(n=l,Math.round(i/m[n]));return r.getRelativeTimeFormat(o,s).format(c,l)}catch(r){return a(new u(c.FORMATTING_ERROR,r.message)),String(e)}},list:function(e,n){let a=[],l=new Map,s=0;for(let r of e){let e;"object"==typeof r?(e=String(s),l.set(e,r)):e=String(r),a.push(e),s++}return d(n,null==t?void 0:t.list,e=>{let t=r.getListFormat(o,e).formatToParts(a).map(e=>"literal"===e.type?e.value:l.get(e.value)||e.value);return l.size>0?t:t.join("")},()=>String(e))},dateTimeRange:function(e,n,a){return d(a,null==t?void 0:t.dateTime,t=>(t=i(t),r.getDateTimeFormat(o,t).formatRange(e,n)),()=>[f(e),f(n)].join(" – "))}}},r.resolveNamespace=function(e,r){return e===r?void 0:e.slice((r+".").length)}},2289:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var o=t(3730),n=t(987),a=t(3834),l=t(4480),s=t(3430),i=t(307);t(2265),t(383),t(9583),t(8945),r.IntlError=o.IntlError,r.IntlErrorCode=o.IntlErrorCode,r.createFormatter=o.createFormatter,r.createTranslator=n.createTranslator,r._createFormatters=a.createFormatters,r.initializeConfig=a.initializeConfig,r.IntlProvider=l.IntlProvider,r.useFormatter=s.useFormatter,r.useMessages=s.useMessages,r.useNow=s.useNow,r.useTimeZone=s.useTimeZone,r.useTranslations=s.useTranslations,r.useLocale=i.useLocale},3430:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var o=t(4480),n=t(307),a=t(2265),l=t(3730);t(3834),t(9583),t(383),t(8945);let s=!1,i="undefined"==typeof window;r.IntlProvider=o.IntlProvider,r.useLocale=n.useLocale,r.useFormatter=function(){let{formats:e,formatters:r,locale:t,now:o,onError:s,timeZone:i}=n.useIntlContext();return a.useMemo(()=>l.createFormatter({formats:e,locale:t,now:o,onError:s,timeZone:i,_formatters:r}),[e,r,o,t,s,i])},r.useMessages=function(){let e=n.useIntlContext();if(!e.messages)throw Error(void 0);return e.messages},r.useNow=function(e){let r=null==e?void 0:e.updateInterval,{now:t}=n.useIntlContext(),[o,l]=a.useState(t||new Date);return a.useEffect(()=>{if(!r)return;let e=setInterval(()=>{l(new Date)},r);return()=>{clearInterval(e)}},[t,r]),null==r&&t?t:o},r.useTimeZone=function(){return n.useIntlContext().timeZone},r.useTranslations=function(e){return function(e,r,t){let{defaultTranslationValues:o,formats:c,formatters:u,getMessageFallback:d,locale:f,onError:p,timeZone:m}=n.useIntlContext();return e=e["!"],r=l.resolveNamespace(r,"!"),m||s||!i||(s=!0,p(new l.IntlError(l.IntlErrorCode.ENVIRONMENT_FALLBACK,void 0))),a.useMemo(()=>l.createBaseTranslator({formatters:u,getMessageFallback:d,messages:e,defaultTranslationValues:o,namespace:r,onError:p,formats:c,locale:f,timeZone:m}),[u,d,e,o,r,p,c,f,m])}({"!":n.useIntlContext().messages},e?"!.".concat(e):"!",0)}},4839:function(e,r,t){t.d(r,{W:function(){return o}});function o(){for(var e,r,t=0,o="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var a=r.length;for(t=0;t<a;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o)}else for(o in r)r[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=r);return o}},6164:function(e,r,t){t.d(r,{m6:function(){return L}});let o=/^\[(.+)\]$/;function n(e,r){let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t}let a=/\s+/;function l(){let e,r,t=0,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=function e(r){let t;if("string"==typeof r)return r;let o="";for(let n=0;n<r.length;n++)r[n]&&(t=e(r[n]))&&(o&&(o+=" "),o+=t);return o}(e))&&(o&&(o+=" "),o+=r);return o}function s(e){let r=r=>r[e]||[];return r.isThemeGetter=!0,r}let i=/^\[(?:([a-z-]+):)?(.+)\]$/i,c=/^\d+\/\d+$/,u=new Set(["px","full","screen"]),d=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,f=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,p=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,m=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,b=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function g(e){return v(e)||u.has(e)||c.test(e)}function h(e){return A(e,"length",C)}function v(e){return!!e&&!Number.isNaN(Number(e))}function y(e){return A(e,"number",v)}function w(e){return!!e&&Number.isInteger(Number(e))}function x(e){return e.endsWith("%")&&v(e.slice(0,-1))}function E(e){return i.test(e)}function I(e){return d.test(e)}let k=new Set(["length","size","percentage"]);function M(e){return A(e,k,F)}function _(e){return A(e,"position",F)}let T=new Set(["image","url"]);function N(e){return A(e,T,z)}function O(e){return A(e,"",j)}function S(){return!0}function A(e,r,t){let o=i.exec(e);return!!o&&(o[1]?"string"==typeof r?o[1]===r:r.has(o[1]):t(o[2]))}function C(e){return f.test(e)&&!p.test(e)}function F(){return!1}function j(e){return m.test(e)}function z(e){return b.test(e)}let L=function(e,...r){let t,s,i;let c=function(a){var l;return s=(t={cache:function(e){if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,o=new Map;function n(n,a){t.set(n,a),++r>e&&(r=0,o=t,t=new Map)}return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):n(e,r)}}}((l=r.reduce((e,r)=>r(e),e())).cacheSize),parseClassName:function(e){let{separator:r,experimentalParseClassName:t}=e,o=1===r.length,n=r[0],a=r.length;function l(e){let t;let l=[],s=0,i=0;for(let c=0;c<e.length;c++){let u=e[c];if(0===s){if(u===n&&(o||e.slice(c,c+a)===r)){l.push(e.slice(i,c)),i=c+a;continue}if("/"===u){t=c;continue}}"["===u?s++:"]"===u&&s--}let c=0===l.length?e:e.substring(i),u=c.startsWith("!"),d=u?c.substring(1):c;return{modifiers:l,hasImportantModifier:u,baseClassName:d,maybePostfixModifierPosition:t&&t>i?t-i:void 0}}return t?function(e){return t({className:e,parseClassName:l})}:l}(l),...function(e){let r=function(e){var r;let{theme:t,prefix:o}=e,a={nextPart:new Map,validators:[]};return(r=Object.entries(e.classGroups),o?r.map(([e,r])=>[e,r.map(e=>"string"==typeof e?o+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,r])=>[o+e,r])):e)]):r).forEach(([e,r])=>{(function e(r,t,o,a){r.forEach(r=>{if("string"==typeof r){(""===r?t:n(t,r)).classGroupId=o;return}if("function"==typeof r){if(r.isThemeGetter){e(r(a),t,o,a);return}t.validators.push({validator:r,classGroupId:o});return}Object.entries(r).forEach(([r,l])=>{e(l,n(t,r),o,a)})})})(r,a,e,t)}),a}(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:a}=e;return{getClassGroupId:function(e){let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),function e(r,t){if(0===r.length)return t.classGroupId;let o=r[0],n=t.nextPart.get(o),a=n?e(r.slice(1),n):void 0;if(a)return a;if(0===t.validators.length)return;let l=r.join("-");return t.validators.find(({validator:e})=>e(l))?.classGroupId}(t,r)||function(e){if(o.test(e)){let r=o.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}(e)},getConflictingClassGroupIds:function(e,r){let o=t[e]||[];return r&&a[e]?[...o,...a[e]]:o}}}(l)}).cache.get,i=t.cache.set,c=u,u(a)};function u(e){let r=s(e);if(r)return r;let o=function(e,r){let{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:n}=r,l=new Set;return e.trim().split(a).map(e=>{let{modifiers:r,hasImportantModifier:n,baseClassName:a,maybePostfixModifierPosition:l}=t(e),s=!!l,i=o(s?a.substring(0,l):a);if(!i){if(!s||!(i=o(a)))return{isTailwindClass:!1,originalClassName:e};s=!1}let c=(function(e){if(e.length<=1)return e;let r=[],t=[];return e.forEach(e=>{"["===e[0]?(r.push(...t.sort(),e),t=[]):t.push(e)}),r.push(...t.sort()),r})(r).join(":");return{isTailwindClass:!0,modifierId:n?c+"!":c,classGroupId:i,originalClassName:e,hasPostfixModifier:s}}).reverse().filter(e=>{if(!e.isTailwindClass)return!0;let{modifierId:r,classGroupId:t,hasPostfixModifier:o}=e,a=r+t;return!l.has(a)&&(l.add(a),n(t,o).forEach(e=>l.add(r+e)),!0)}).reverse().map(e=>e.originalClassName).join(" ")}(e,t);return i(e,o),o}return function(){return c(l.apply(null,arguments))}}(function(){let e=s("colors"),r=s("spacing"),t=s("blur"),o=s("brightness"),n=s("borderColor"),a=s("borderRadius"),l=s("borderSpacing"),i=s("borderWidth"),c=s("contrast"),u=s("grayscale"),d=s("hueRotate"),f=s("invert"),p=s("gap"),m=s("gradientColorStops"),b=s("gradientColorStopPositions"),k=s("inset"),T=s("margin"),A=s("opacity"),C=s("padding"),F=s("saturate"),j=s("scale"),z=s("sepia"),L=s("skew"),G=s("space"),P=s("translate"),R=()=>["auto","contain","none"],D=()=>["auto","hidden","clip","visible","scroll"],V=()=>["auto",E,r],Z=()=>[E,r],K=()=>["",g,h],B=()=>["auto",v,E],$=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],W=()=>["solid","dashed","dotted","double","none"],q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],H=()=>["start","end","center","between","around","evenly","stretch"],X=()=>["","0",E],U=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Y=()=>[v,y],J=()=>[v,E];return{cacheSize:500,separator:":",theme:{colors:[S],spacing:[g,h],blur:["none","",I,E],brightness:Y(),borderColor:[e],borderRadius:["none","","full",I,E],borderSpacing:Z(),borderWidth:K(),contrast:Y(),grayscale:X(),hueRotate:J(),invert:X(),gap:Z(),gradientColorStops:[e],gradientColorStopPositions:[x,h],inset:V(),margin:V(),opacity:Y(),padding:Z(),saturate:Y(),scale:Y(),sepia:X(),skew:J(),space:Z(),translate:Z()},classGroups:{aspect:[{aspect:["auto","square","video",E]}],container:["container"],columns:[{columns:[I]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...$(),E]}],overflow:[{overflow:D()}],"overflow-x":[{"overflow-x":D()}],"overflow-y":[{"overflow-y":D()}],overscroll:[{overscroll:R()}],"overscroll-x":[{"overscroll-x":R()}],"overscroll-y":[{"overscroll-y":R()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[k]}],"inset-x":[{"inset-x":[k]}],"inset-y":[{"inset-y":[k]}],start:[{start:[k]}],end:[{end:[k]}],top:[{top:[k]}],right:[{right:[k]}],bottom:[{bottom:[k]}],left:[{left:[k]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",w,E]}],basis:[{basis:V()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",E]}],grow:[{grow:X()}],shrink:[{shrink:X()}],order:[{order:["first","last","none",w,E]}],"grid-cols":[{"grid-cols":[S]}],"col-start-end":[{col:["auto",{span:["full",w,E]},E]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[S]}],"row-start-end":[{row:["auto",{span:[w,E]},E]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",E]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",E]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...H()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...H(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...H(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[C]}],px:[{px:[C]}],py:[{py:[C]}],ps:[{ps:[C]}],pe:[{pe:[C]}],pt:[{pt:[C]}],pr:[{pr:[C]}],pb:[{pb:[C]}],pl:[{pl:[C]}],m:[{m:[T]}],mx:[{mx:[T]}],my:[{my:[T]}],ms:[{ms:[T]}],me:[{me:[T]}],mt:[{mt:[T]}],mr:[{mr:[T]}],mb:[{mb:[T]}],ml:[{ml:[T]}],"space-x":[{"space-x":[G]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[G]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",E,r]}],"min-w":[{"min-w":[E,r,"min","max","fit"]}],"max-w":[{"max-w":[E,r,"none","full","min","max","fit","prose",{screen:[I]},I]}],h:[{h:[E,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[E,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[E,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[E,r,"auto","min","max","fit"]}],"font-size":[{text:["base",I,h]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",y]}],"font-family":[{font:[S]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",E]}],"line-clamp":[{"line-clamp":["none",v,y]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",g,E]}],"list-image":[{"list-image":["none",E]}],"list-style-type":[{list:["none","disc","decimal",E]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[A]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[A]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...W(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",g,h]}],"underline-offset":[{"underline-offset":["auto",g,E]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:Z()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",E]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",E]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[A]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...$(),_]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",M]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},N]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[A]}],"border-style":[{border:[...W(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[A]}],"divide-style":[{divide:W()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...W()]}],"outline-offset":[{"outline-offset":[g,E]}],"outline-w":[{outline:[g,h]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:K()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[A]}],"ring-offset-w":[{"ring-offset":[g,h]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",I,O]}],"shadow-color":[{shadow:[S]}],opacity:[{opacity:[A]}],"mix-blend":[{"mix-blend":[...q(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":q()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",I,E]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[f]}],saturate:[{saturate:[F]}],sepia:[{sepia:[z]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[A]}],"backdrop-saturate":[{"backdrop-saturate":[F]}],"backdrop-sepia":[{"backdrop-sepia":[z]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",E]}],duration:[{duration:J()}],ease:[{ease:["linear","in","out","in-out",E]}],delay:[{delay:J()}],animate:[{animate:["none","spin","ping","pulse","bounce",E]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[j]}],"scale-x":[{"scale-x":[j]}],"scale-y":[{"scale-y":[j]}],rotate:[{rotate:[w,E]}],"translate-x":[{"translate-x":[P]}],"translate-y":[{"translate-y":[P]}],"skew-x":[{"skew-x":[L]}],"skew-y":[{"skew-y":[L]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",E]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",E]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":Z()}],"scroll-mx":[{"scroll-mx":Z()}],"scroll-my":[{"scroll-my":Z()}],"scroll-ms":[{"scroll-ms":Z()}],"scroll-me":[{"scroll-me":Z()}],"scroll-mt":[{"scroll-mt":Z()}],"scroll-mr":[{"scroll-mr":Z()}],"scroll-mb":[{"scroll-mb":Z()}],"scroll-ml":[{"scroll-ml":Z()}],"scroll-p":[{"scroll-p":Z()}],"scroll-px":[{"scroll-px":Z()}],"scroll-py":[{"scroll-py":Z()}],"scroll-ps":[{"scroll-ps":Z()}],"scroll-pe":[{"scroll-pe":Z()}],"scroll-pt":[{"scroll-pt":Z()}],"scroll-pr":[{"scroll-pr":Z()}],"scroll-pb":[{"scroll-pb":Z()}],"scroll-pl":[{"scroll-pl":Z()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",E]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[g,h,y]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);