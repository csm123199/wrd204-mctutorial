parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KF0D":[function(require,module,exports) {
!function(){"use strict";var e,n=!1,t=[],o=!1;function d(){window.WebComponents.ready=!0,document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}function i(){window.customElements&&customElements.polyfillWrapFlushCallback&&customElements.polyfillWrapFlushCallback(function(n){e=n,o&&e()})}function r(){window.HTMLTemplateElement&&HTMLTemplateElement.bootstrap&&HTMLTemplateElement.bootstrap(window.document),n=!0,c().then(d)}function c(){o=!1;var n=t.map(function(e){return e instanceof Function?e():e});return t=[],Promise.all(n).then(function(){o=!0,e&&e()}).catch(function(e){console.error(e)})}window.WebComponents=window.WebComponents||{},window.WebComponents.ready=window.WebComponents.ready||!1,window.WebComponents.waitFor=window.WebComponents.waitFor||function(e){e&&(t.push(e),n&&c())},window.WebComponents._batchCustomElements=i;var a="webcomponents-loader.js",l=[];(!("attachShadow"in Element.prototype&&"getRootNode"in Element.prototype)||window.ShadyDOM&&window.ShadyDOM.force)&&l.push("sd"),window.customElements&&!window.customElements.forcePolyfill||l.push("ce");var s=function(){var e=document.createElement("template");if(!("content"in e))return!0;if(!(e.content.cloneNode()instanceof DocumentFragment))return!0;var n=document.createElement("template");n.content.appendChild(document.createElement("div")),e.content.appendChild(n);var t=e.cloneNode(!0);return 0===t.content.childNodes.length||0===t.content.firstChild.content.childNodes.length}();if(window.Promise&&Array.from&&window.URL&&window.Symbol&&!s||(l=["sd-ce-pf"]),l.length){var m,w="bundles/webcomponents-"+l.join("-")+".js";if(window.WebComponents.root)m=window.WebComponents.root+w;else{var u=document.querySelector('script[src*="'+a+'"]');m=u.src.replace(a,w)}var p=document.createElement("script");p.src=m,"loading"===document.readyState?(p.setAttribute("onload","window.WebComponents._batchCustomElements()"),document.write(p.outerHTML),document.addEventListener("DOMContentLoaded",r)):(p.addEventListener("load",function(){i(),r()}),p.addEventListener("error",function(){throw new Error("Could not load polyfill bundle"+m)}),document.head.appendChild(p))}else"complete"===document.readyState?(n=!0,d()):(window.addEventListener("load",r),window.addEventListener("DOMContentLoaded",function(){window.removeEventListener("load",r),r()}))}();
},{}]},{},["KF0D"], null)
//# sourceMappingURL=/wrd204-mctutorial/webcomponents-loader.c9ea3821.js.map