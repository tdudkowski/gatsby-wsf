(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Wrocławskie Stowarzyszenie Fortyfikacyjne","description":"strona Stowarzyszenia","author":"@gatsbyjs"}}}}')},GSdC:function(e,t,n){"use strict";var r=n("Wbzz"),a=n("q1tI"),o=n.n(a);t.a=function(){return o.a.createElement("aside",null,o.a.createElement("h2",null,"Infanterie Stellungen I.St.-6"),o.a.createElement("h3",null,"Komendantura"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(r.Link,{to:"/"},"Strona główna")),o.a.createElement("li",null,o.a.createElement(r.Link,{to:"blog"},"Wydarzenia")),o.a.createElement("li",null,o.a.createElement(r.Link,{to:"stowarzyszenie"},"Stowarzyszenie"))),o.a.createElement("h3",null,"Załoga"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(r.Link,{to:"bohaterowie"},"Bohaterowie")),o.a.createElement("li",null,o.a.createElement(r.Link,{to:"landsturm"},"Landsturm")),o.a.createElement("li",null,o.a.createElement(r.Link,{to:"grh609d"},"GRH 609 Division"))),o.a.createElement("h3",null,"Archiwum Fortu"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(r.Link,{to:"fort6"},"Fort Piechoty nr 6")),o.a.createElement("li",null,o.a.createElement(r.Link,{to:"festung-breslau"},"Festung Breslau")),o.a.createElement("li",null,o.a.createElement(r.Link,{to:"bibliografia"},"Bibliografia")),o.a.createElement("li",null,o.a.createElement(r.Link,{to:"oc"},"Luftschutz / Obrona Cywilna")),o.a.createElement("li",null,o.a.createElement(r.Link,{to:"slownik"},"Słowniczek forteczny")),o.a.createElement("li",null,o.a.createElement(r.Link,{to:"map"},"Mapa obiektów fortyfikacyjnych")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.youtube.com/user/fortwroclaw"},"WSF - YouTube"))),o.a.createElement("h3",null,"Komunikacje"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(r.Link,{to:"form"},"Formularz kontaktowy")),o.a.createElement("li",null,o.a.createElement("a",{href:"http://www.forum.fortwroclaw.pl/"},"Forum"))),o.a.createElement("section",{class:"hero"},o.a.createElement("p",null,"Zalajkuj nasz profil i śledź informacje:",o.a.createElement("br",null),o.a.createElement("a",{href:"https://www.facebook.com/fortwroclaw/",class:"facebook"},o.a.createElement("i",{class:"fa fa-facebook-official","aria-hidden":"true"}),"fb.com/fortwroclaw")),o.a.createElement("hr",null),o.a.createElement("p",null,"Wsparcie"),o.a.createElement(r.Link,{to:"mecenat"},"Zostań mecenasem")))}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},JMjB:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);t.a=function(){return a.a.createElement("p",{className:"cr"},"Wykonano w ",a.a.createElement("a",{href:"https://www.gatsbyjs.org"},"GatsbyJS"),". Projekt i realizacja: ",a.a.createElement("a",{href:"http://dygresje.info"},"dygresje.info"),"; 2020.")}},LbRr:function(e,t,n){"use strict";var r=n("Wbzz"),a=n("q1tI"),o=n.n(a),i=n("iZUv"),c=n.n(i);t.a=function(){return o.a.createElement("header",null,o.a.createElement(r.Link,{to:"/"},o.a.createElement("img",{src:c.a,alt:"WSF logo"})),o.a.createElement("h1",null,"Wrocławskie Stowarzyszenie Fortyfikacyjne"))}},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),o=n("hswa").f,i=n("kJMx").f,c=n("quPj"),l=n("C/va"),u=r.RegExp,s=u,f=u.prototype,p=/a/g,d=/a/g,m=new u(p)!==p;if(n("nh4g")&&(!m||n("eeVq")((function(){return d[n("K0xU")("match")]=!1,u(p)!=p||u(d)==d||"/a/i"!=u(p,"i")})))){u=function(e,t){var n=this instanceof u,r=c(e),o=void 0===t;return!n&&r&&e.constructor===u&&o?e:a(m?new s(r&&!o?e.source:e,t):s((r=e instanceof u)?e.source:e,r&&o?l.call(e):t),n?this:f,u)};for(var h=function(e){e in u||o(u,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},y=i(s),b=0;y.length>b;)h(y[b++]);f.constructor=u,u.prototype=f,n("KroJ")(r,"RegExp",u)}n("elZq")("RegExp")},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,l,u,s=r(t),f=r(n);if(s&&f){if((l=t.length)!=n.length)return!1;for(c=l;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(s!=f)return!1;var p=t instanceof Date,d=n instanceof Date;if(p!=d)return!1;if(p&&d)return t.getTime()==n.getTime();var m=t instanceof RegExp,h=n instanceof RegExp;if(m!=h)return!1;if(m&&h)return t.toString()==n.toString();var y=a(t);if((l=y.length)!==a(n).length)return!1;for(c=l;0!=c--;)if(!o.call(n,y[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=l;0!=c--;)if(!("_owner"===(u=y[c])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},h7Nl:function(e,t,n){var r=Date.prototype,a=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=o.call(this);return e==e?a.call(this):"Invalid Date"}))},iZUv:function(e,t,n){e.exports=n.p+"static/fort-logo-small-cut-4ae3add2403fe8a394dff46b16cfbf5c.jpg"},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,a,o,i,c=n("17x9"),l=n.n(c),u=n("8+s/"),s=n.n(u),f=n("bmMU"),p=n.n(f),d=n("q1tI"),m=n.n(d),h=n("MgzW"),y=n.n(h),b="bodyAttributes",w="htmlAttributes",g="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(E).map((function(e){return E[e]})),"charset"),v="cssText",S="href",A="http-equiv",C="innerHTML",O="itemprop",k="name",j="property",L="rel",P="src",I="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",N="defer",R="encodeSpecialCharacters",F="onChangeClientState",q="titleTemplate",z=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),D=[E.NOSCRIPT,E.SCRIPT,E.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},K=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},_=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=Q(e,E.TITLE),n=Q(e,q);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,M);return t||r||void 0},Z=function(e){return Q(e,F)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||n===L&&"canonical"===e[n].toLowerCase()||l===L&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==C&&c!==v&&c!==O||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=y()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;le(E.BODY,r),le(E.HTML,a),ce(f,p);var d={baseTag:ue(E.BASE,n),linkTags:ue(E.LINK,o),metaTags:ue(E.META,i),noscriptTags:ue(E.NOSCRIPT,c),scriptTags:ue(E.SCRIPT,u),styleTags:ue(E.STYLE,s)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),l(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(E.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===a.indexOf(l)&&a.push(l);var s=o.indexOf(l);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(E.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===v)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[x[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[m.a.createElement(E.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+_(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+_(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case w:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=x[e]||e;if(n===C||n===v){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===v)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+_(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(E.BASE,t,r),bodyAttributes:pe(b,n,r),htmlAttributes:pe(w,a,r),link:pe(E.LINK,o,r),meta:pe(E.META,i,r),noscript:pe(E.NOSCRIPT,c,r),script:pe(E.SCRIPT,l,r),style:pe(E.STYLE,u,r),title:pe(E.TITLE,{title:f,titleAttributes:p},r)}},me=s()((function(e){return{baseTag:V([S,I],e),bodyAttributes:G(b,e),defer:Q(e,N),encode:Q(e,R),htmlAttributes:G(w,e),linkTags:X(E.LINK,[L,S],e),metaTags:X(E.META,[k,T,A,j,O],e),noscriptTags:X(E.NOSCRIPT,[C],e),onChangeClientState:Z(e),scriptTags:X(E.SCRIPT,[P,C],e),styleTags:X(E.STYLE,[v],e),title:J(e),titleAttributes:G(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),he=(a=me,i=o=function(e){function t(){return W(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return B({},r,((t={})[n.type]=[].concat(r[n.type]||[],[B({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case E.TITLE:return B({},a,((t={})[r.type]=i,t.titleAttributes=B({},o),t));case E.BODY:return B({},a,{bodyAttributes:B({},o)});case E.HTML:return B({},a,{htmlAttributes:B({},o)})}return B({},a,((n={})[r.type]=B({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=B({},t);return Object.keys(e).forEach((function(t){var r;n=B({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[z[n]||n]=e[n],t}),t)}(U(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=B({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(a,r)},K(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var r=n("EH9Q"),a=n("q1tI"),o=n.n(a),i=n("qhky");function c(e){var t=e.description,n=e.lang,a=e.meta,c=e.title,l=r.data.site,u=t||l.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(a)})}c.defaultProps={lang:"pl",meta:[],description:""},t.a=c},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-a554af5ecf22a9f712cb.js.map