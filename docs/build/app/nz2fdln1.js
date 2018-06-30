/*! Built with http://stenciljs.com */
const{h:t}=window.App;import{c as e,d as n,e as o,f as r,g as i}from"./chunk-d3ec1289.js";class s{componentDidLoad(){const t=document.querySelector(".mdc-top-app-bar");new e(t)}render(){return t("div",null,t("header",{class:"mdc-top-app-bar"},t("div",{class:"mdc-top-app-bar__row"},t("section",{class:"mdc-top-app-bar__section mdc-top-app-bar__section--align-start"},t("span",{class:"mdc-top-app-bar__title"},"Pocket Dragon")))),t("main",null,t("stencil-router",null,t("stencil-route-switch",{scrollTopOffset:0},t("stencil-route",{url:"/pocketdragon/",component:"app-home",exact:!0}),t("stencil-route",{url:"/profile/:name",component:"app-profile"})))))}static get is(){return"app-root"}static get style(){return".mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary,#6200ee);color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary,#fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before{background-color:#fff}\@supports not (-ms-ime-align:auto){.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before{background-color:var(--mdc-theme-on-primary,#fff)}}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before{opacity:.08}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.32}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.32}.mdc-top-app-bar__row{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.mdc-top-app-bar__section--align-end{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.mdc-top-app-bar__title{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit;padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}.mdc-top-app-bar__title[dir=rtl],[dir=rtl] .mdc-top-app-bar__title{padding-left:0;padding-right:20px}.mdc-top-app-bar__action-item,.mdc-top-app-bar__navigation-icon{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:transparent;will-change:transform,opacity;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:48px;height:48px;padding:12px;border:none;outline:0;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer}.mdc-top-app-bar__action-item::after,.mdc-top-app-bar__action-item::before,.mdc-top-app-bar__navigation-icon::after,.mdc-top-app-bar__navigation-icon::before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\";top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-top-app-bar__action-item::before,.mdc-top-app-bar__navigation-icon::before{-webkit-transition:opacity 15ms linear;transition:opacity 15ms linear;z-index:1}.mdc-top-app-bar__action-item.mdc-ripple-upgraded::before,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale,1));transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-top-app-bar__action-item.mdc-ripple-upgraded::after,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center;width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-top-app-bar__action-item.mdc-ripple-upgraded--unbounded::after,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-top-app-bar__action-item.mdc-ripple-upgraded--foreground-activation::after,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--foreground-activation::after{-webkit-animation:225ms forwards mdc-ripple-fg-radius-in,75ms forwards mdc-ripple-fg-opacity-in;animation:225ms forwards mdc-ripple-fg-radius-in,75ms forwards mdc-ripple-fg-opacity-in}.mdc-top-app-bar__action-item.mdc-ripple-upgraded--foreground-deactivation::after,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--foreground-deactivation::after{-webkit-animation:150ms mdc-ripple-fg-opacity-out;animation:150ms mdc-ripple-fg-opacity-out;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-top-app-bar__action-item.mdc-ripple-upgraded::after,.mdc-top-app-bar__action-item.mdc-ripple-upgraded::before,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded::after,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded::before{top:var(--mdc-ripple-top,calc(50% - 50%));left:var(--mdc-ripple-left,calc(50% - 50%));width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;-webkit-transition:width 250ms cubic-bezier(.4,0,.2,1);transition:width 250ms cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short[dir=rtl],[dir=rtl] .mdc-top-app-bar--short{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{-webkit-transition:opacity .2s cubic-bezier(.4,0,.2,1);transition:opacity .2s cubic-bezier(.4,0,.2,1);opacity:1}.mdc-top-app-bar--short-collapsed{border-bottom-left-radius:0;border-bottom-right-radius:4px;-webkit-box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);width:56px;-webkit-transition:width .3s cubic-bezier(.4,0,.2,1);transition:width .3s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed[dir=rtl],[dir=rtl] .mdc-top-app-bar--short-collapsed{border-bottom-left-radius:4px;border-bottom-right-radius:0}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{-webkit-transition:padding 150ms cubic-bezier(.4,0,.2,1);transition:padding 150ms cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl],[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl],[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{-ms-flex-item-align:end;align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{-ms-flex-item-align:start;align-self:flex-start}.mdc-top-app-bar--fixed{-webkit-transition:-webkit-box-shadow .2s linear;transition:-webkit-box-shadow .2s linear;transition:box-shadow .2s linear;transition:box-shadow .2s linear,-webkit-box-shadow .2s linear}.mdc-top-app-bar--fixed-scrolled{-webkit-box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);-webkit-transition:-webkit-box-shadow .2s linear;transition:-webkit-box-shadow .2s linear;transition:box-shadow .2s linear;transition:box-shadow .2s linear,-webkit-box-shadow .2s linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl],[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}\@media (max-width:599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{-webkit-transition:width .2s cubic-bezier(.4,0,.2,1);transition:width .2s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed{-webkit-transition:width 250ms cubic-bezier(.4,0,.2,1);transition:width 250ms cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl],[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}"}}var a="/",c="./",l=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function h(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function u(t){return t.replace(/([=!:$/()])/g,"\\$1")}function p(t){return t&&t.sensitive?"":"i"}function d(t,e,n){return t instanceof RegExp?function(t,e){if(!e)return t;var n=t.source.match(/\((?!\?)/g);if(n)for(var o=0;o<n.length;o++)e.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}(t,e):Array.isArray(t)?function(t,e,n){for(var o=[],r=0;r<t.length;r++)o.push(d(t[r],e,n).source);return new RegExp("(?:"+o.join("|")+")",p(n))}(t,e,n):function(t,e,n){return function(t,e,n){for(var o=(n=n||{}).strict,r=!1!==n.end,i=h(n.delimiter||a),s=n.delimiters||c,l=[].concat(n.endsWith||[]).map(h).concat("$").join("|"),u="",d=!1,f=0;f<t.length;f++){var g=t[f];if("string"==typeof g)u+=h(g),d=f===t.length-1&&s.indexOf(g[g.length-1])>-1;else{var y=h(g.prefix),m=g.repeat?"(?:"+g.pattern+")(?:"+y+"(?:"+g.pattern+"))*":g.pattern;e&&e.push(g),g.optional?g.partial?u+=y+"("+m+")?":u+="(?:"+y+"("+m+"))?":u+=y+"("+m+")"}}return r?(o||(u+="(?:"+i+")?"),u+="$"===l?"$":"(?="+l+")"):(o||(u+="(?:"+i+"(?="+l+"))?"),d||(u+="(?="+i+"|"+l+")")),new RegExp("^"+u,p(n))}(function(t,e){for(var n,o=[],r=0,i=0,s="",p=e&&e.delimiter||a,d=e&&e.delimiters||c,f=!1;null!==(n=l.exec(t));){var g=n[0],y=n[1],m=n.index;if(s+=t.slice(i,m),i=m+g.length,y)s+=y[1],f=!0;else{var w="",b=t[i],v=n[2],x=n[3],O=n[4],P=n[5];if(!f&&s.length){var S=s.length-1;d.indexOf(s[S])>-1&&(w=s[S],s=s.slice(0,S))}s&&(o.push(s),s="",f=!1);var A=""!==w&&void 0!==b&&b!==w,T="+"===P||"*"===P,E="?"===P||"*"===P,k=w||p,R=x||O;o.push({name:v||r++,prefix:w,delimiter:k,optional:E,repeat:T,partial:A,pattern:R?u(R):"[^"+h(k)+"]+?"})}}return(s||i<t.length)&&o.push(s+t.substr(i)),o}(t,n),e,n)}(t,e,n)}const f={},g=1e4;let y=0;function m(t,e={}){"string"==typeof e&&(e={path:e});const{path:n="/",exact:o=!1,strict:r=!1}=e,{re:i,keys:s}=function(t,e){const n=`${e.end}${e.strict}`,o=f[n]||(f[n]={}),r=JSON.stringify(t);if(o[r])return o[r];const i=[],s={re:d(t,i,e),keys:i};return y<g&&(o[r]=s,y+=1),s}(n,{end:o,strict:r}),a=i.exec(t);if(!a)return null;const[c,...l]=a,h=t===c;return o&&!h?null:{path:n,url:"/"===n&&""===c?"/":c,isExact:h,params:s.reduce((t,e,n)=>(t[e.name]=l[n],t),{})}}var w=function(e,n=function(e,n){return t("context-consumer",{subscribe:e,renderer:n})}){let o=new Map,r={location:null,titleSuffix:"",root:"/",history:null};function i(t,e){Array.isArray(t)?[...t].forEach(t=>{e[t]=r[t]}):e[t]=Object.assign({},r),e.forceUpdate()}function s(t){return e=>{o.has(e)||(o.set(e,t),i(t,e))}}function a(t,e){return s(e)(t),function(){o.delete(t)}}return{Provider:function({state:t,children:e}){return r=t,o.forEach(i),e},Consumer:function({children:t}){return n(a,t[0])},wrapConsumer:function(e,n){const o=e.is;return e=>{var{children:r}=e,i=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&(n[o[r]]=t[o[r]])}return n}(e,["children"]);return t(o,Object.assign({ref:s(n)},i),r)}},injectProps:function(t,e){let n=null;const o=Object.keys(t.properties).find(e=>1==t.properties[e].elementRef);if(void 0==o)throw new Error(`Please ensure that your Component ${t.is} has an attribtue with "@Element" decorator. `+"This is required to be able to inject properties.");const r=t.prototype.componentWillLoad;t.prototype.componentWillLoad=function(){if(n=a(this[o],e),r)return r.bind(this)()};const i=t.prototype.componentDidUnload;t.prototype.componentDidUnload=function(){if(n(),i)return i.bind(this)()}}}}(),b=function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function s(t){try{c(o.next(t))}catch(t){i(t)}}function a(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(s,a)}c((o=o.apply(t,e||[])).next())})};class v{constructor(){this.group=null,this.groupMatch=null,this.componentUpdated=null,this.match=null,this.unsubscribe=(()=>{}),this.componentProps={},this.exact=!1,this.routeRender=null,this.scrollTopOffset=null,this.scrollOnNextRender=!1}componentWillLoad(){return b(this,void 0,void 0,function*(){this.groupMatch&&this.groupMatchChanged(this.groupMatch)})}groupMatchChanged(t){this.match=t}computeMatch(){this.group||(this.match=m(this.location.pathname,{path:this.url,exact:this.exact,strict:!0}))}componentDidUpdate(){return b(this,void 0,void 0,function*(){"function"==typeof this.componentUpdated&&(yield Promise.all(Array.from(this.el.children).map(t=>t.componentOnReady?t.componentOnReady():Promise.resolve(t))),"function"==typeof this.componentUpdated&&this.componentUpdated(this.scrollTo.bind(this)))})}scrollTo(){if(null!=this.scrollTopOffset&&this.history&&!this.isServer)return"POP"===this.history.action&&null!=this.history.location.scrollPosition?this.queue.write(()=>{window.scrollTo(this.history.location.scrollPosition[0],this.history.location.scrollPosition[1])}):this.queue.write(()=>{window.scrollTo(0,this.scrollTopOffset)})}render(){if(!this.match)return null;const e=Object.assign({},this.componentProps,{history:this.history,match:this.match});if(this.routeRender)return this.routeRender(Object.assign({},e,{component:this.component}));if(this.component){const n=this.component;return t(n,Object.assign({},e))}}static get is(){return"stencil-route"}static get properties(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},componentUpdated:{type:"Any",attr:"component-updated"},el:{elementRef:!0},exact:{type:Boolean,attr:"exact"},group:{type:String,attr:"group"},groupMatch:{type:"Any",attr:"group-match",watchCallbacks:["groupMatchChanged"]},history:{type:"Any",attr:"history"},isServer:{context:"isServer"},location:{type:"Any",attr:"location",watchCallbacks:["computeMatch"]},match:{state:!0},queue:{context:"queue"},routeRender:{type:"Any",attr:"route-render"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"},url:{type:String,attr:"url"}}}static get style(){return"stencil-route.inactive{display:none}"}}w.injectProps(v,["location","history"]);var x=function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function s(t){try{c(o.next(t))}catch(t){i(t)}}function a(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(s,a)}c((o=o.apply(t,e||[])).next())})};class O{constructor(){this.group=window.crypto?([1e7].toString()+-1e3.toString()+-4e3.toString()+-8e3.toString()+-1e11.toString()).replace(/[018]/g,function(t){return(t^window.crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}):(1e17*Math.random()).toString().match(/.{4}/g).join("-"),this.scrollTopOffset=null,this.activeIndex=null}componentWillLoad(){this.regenerateSubscribers(this.location)}regenerateSubscribers(t){return x(this,void 0,void 0,function*(){let e=null;var n,o,r;if(this.subscribers=Array.from(this.el.children).map((i,s)=>{const a=(n=t.pathname,o=i.url,r=i.exact,m(n,{path:o,exact:r,strict:!0}));return a&&null===e&&(e=s),{el:i,match:a}}),this.activeIndex===e)return void(this.subscribers[this.activeIndex].el.groupMatch=this.subscribers[this.activeIndex].match);this.activeIndex=e;const i=yield new Promise(t=>{const e=this.subscribers[this.activeIndex];e.el.scrollTopOffset=this.scrollTopOffset,e.el.group=this.group,e.el.groupMatch=e.match,e.el.componentUpdated=t});this.queue.write(()=>{this.subscribers.forEach((t,e)=>{if(t.el.componentUpdated=null,e===this.activeIndex)return t.el.style.display=null;t.el.scrollTopOffset=this.scrollTopOffset,t.el.group=this.group,t.el.groupMatch=null,t.el.style.display="none"})}),i()})}render(){return t("slot",null)}static get is(){return"stencil-route-switch"}static get properties(){return{el:{elementRef:!0},group:{type:String,attr:"group",reflectToAttr:!0},location:{type:"Any",attr:"location",watchCallbacks:["regenerateSubscribers"]},queue:{context:"queue"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"}}}}function P(t,e){return new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t)}function S(t,e){return P(t,e)?t.substr(e.length):t}function A(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function T(t){return"/"===t.charAt(0)?t:"/"+t}function E(t){return"/"===t.charAt(0)?t.substr(1):t}function k(t){const{pathname:e,search:n,hash:o}=t;let r=e||"/";return n&&"?"!==n&&(r+="?"===n.charAt(0)?n:`?${n}`),o&&"#"!==o&&(r+="#"===o.charAt(0)?o:`#${o}`),r}function R(t){return"/"===t.charAt(0)}function j(t,e){for(let n=e,o=n+1,r=t.length;o<r;n+=1,o+=1)t[n]=t[o];t.pop()}function L(t,e,n,o){let r;"string"==typeof t?(r=function(t){let e=t||"/",n="",o="";const r=e.indexOf("#");-1!==r&&(o=e.substr(r),e=e.substr(0,r));const i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===o?"":o}}(t)).state=e:(void 0===(r=Object.assign({},t)).pathname&&(r.pathname=""),r.search?"?"!==r.search.charAt(0)&&(r.search="?"+r.search):r.search="",r.hash?"#"!==r.hash.charAt(0)&&(r.hash="#"+r.hash):r.hash="",void 0!==e&&void 0===r.state&&(r.state=e));try{r.pathname=decodeURI(r.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+r.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}var i;return n&&(r.key=n),o?r.pathname?"/"!==r.pathname.charAt(0)&&(r.pathname=function(t,e=""){const n=t&&t.split("/")||[];let o=e&&e.split("/")||[];const r=t&&R(t),i=e&&R(e),s=r||i;if(t&&R(t)?o=n:n.length&&(o.pop(),o=o.concat(n)),!o.length)return"/";let a;if(o.length){const t=o[o.length-1];a="."===t||".."===t||""===t}else a=!1;let c=0;for(let t=o.length;t>=0;t--){const e=o[t];"."===e?j(o,t):".."===e?(j(o,t),c++):c&&(j(o,t),c--)}if(!s)for(;c--;c)o.unshift("..");!s||""===o[0]||o[0]&&R(o[0])||o.unshift("");let l=o.join("/");return a&&"/"!==l.substr(-1)&&(l+="/"),l}(r.pathname,o.pathname)):r.pathname=o.pathname:r.pathname||(r.pathname="/"),r.query=(i=r.search)?(/^[?#]/.test(i)?i.slice(1):i).split("&").reduce((t,e)=>{let[n,o]=e.split("=");return t[n]=o?decodeURIComponent(o.replace(/\+/g," ")):"",t},{}):{},r}function U(t,...e){t||console.error(...e)}function M(t,...e){t||console.warn(...e)}w.injectProps(O,["location"]);const C=()=>{let t,e=[];return{setPrompt:e=>(M(null==t,"A history supports only one prompt at a time"),t=e,()=>{t===e&&(t=null)}),confirmTransitionTo:(e,n,o,r)=>{if(null!=t){const i="function"==typeof t?t(e,n):t;"string"==typeof i?"function"==typeof o?o(i,r):(M(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),r(!0)):r(!1!==i)}else r(!0)},appendListener:t=>{let n=!0;const o=(...e)=>{n&&t(...e)};return e.push(o),()=>{n=!1,e=e.filter(t=>t!==o)}},notifyListeners:(...t)=>{e.forEach(e=>e(...t))}}},I=!("undefined"==typeof window||!window.document||!window.document.createElement),_=(t,e,n)=>t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n),H=(t,e,n)=>t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n),$=(t,e)=>e(window.confirm(t)),q=t=>{try{var e=window[t],n="__storage_test__";return e.setItem(n,n),e.removeItem(n),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&0!==e.length}},D=(t="scrollPositions")=>{let e=new Map;function n(t,n){if(e.set(t,n),q("sessionStorage")){const t=[];e.forEach((e,n)=>{t.push([n,e])}),window.sessionStorage.setItem("scrollPositions",JSON.stringify(t))}}return q("sessionStorage")&&(e=window.sessionStorage.getItem(t)?new Map(JSON.parse(window.sessionStorage.getItem(t))):e),"scrollRestoration"in history&&(history.scrollRestoration="manual"),{set:n,get:function(t){return e.get(t)},has:function(t){return e.has(t)},capture:function(t){n(t,[window.scrollX,window.scrollY])}}},N=()=>{try{return window.history.state||{}}catch(t){return{}}},W={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+E(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:E,decodePath:T},slash:{encodePath:T,decodePath:T}},B=()=>{const t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},Y=t=>{const e=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,e>=0?e:0)+"#"+t)};var F=function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function s(t){try{c(o.next(t))}catch(t){i(t)}}function a(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(s,a)}c((o=o.apply(t,e||[])).next())})};const J={browser:(t={})=>{U(I,"Browser history needs a DOM");const e=window.history,n=(()=>{const t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history})(),o=!(()=>-1===window.navigator.userAgent.indexOf("Trident"))(),r=D(),{forceRefresh:i=!1,getUserConfirmation:s=$,keyLength:a=6}=t,c=t.basename?A(T(t.basename)):"",l=t=>{t=t||{};const{key:e,state:n}=t,{pathname:o,search:r,hash:i}=window.location;let s=o+r+i;return M(!c||P(s,c),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+s+'" to begin with "'+c+'".'),c&&(s=S(s,c)),L(s,n,e)},h=()=>Math.random().toString(36).substr(2,a),u=C(),p=t=>{r.capture(j.location.key),Object.assign(j,t),j.location.scrollPosition=r.get(j.location.key),j.length=e.length,u.notifyListeners(j.location,j.action)},d=t=>{(t=>void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS"))(t)||y(l(t.state))},f=()=>{y(l(N()))};let g=!1;const y=t=>{if(g)g=!1,p();else{const e="POP";u.confirmTransitionTo(t,e,s,n=>{n?p({action:e,location:t}):m(t)})}},m=t=>{const e=j.location;let n=b.indexOf(e.key);-1===n&&(n=0);let o=b.indexOf(t.key);-1===o&&(o=0);const r=n-o;r&&(g=!0,x(r))},w=l(N());let b=[w.key];const v=t=>c+k(t),x=t=>{e.go(t)};let O=0;const E=t=>{1===(O+=t)?(_(window,"popstate",d),o&&_(window,"hashchange",f)):0===O&&(H(window,"popstate",d),o&&H(window,"hashchange",f))};let R=!1;const j={length:e.length,action:"POP",location:w,createHref:v,push:(t,o)=>{M(!("object"==typeof t&&void 0!==t.state&&void 0!==o),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const r=L(t,o,h(),j.location);u.confirmTransitionTo(r,"PUSH",s,t=>{if(!t)return;const o=v(r),{key:s,state:a}=r;if(n)if(e.pushState({key:s,state:a},null,o),i)window.location.href=o;else{const t=b.indexOf(j.location.key),e=b.slice(0,-1===t?0:t+1);e.push(r.key),b=e,p({action:"PUSH",location:r})}else M(void 0===a,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=o})},replace:(t,o)=>{M(!("object"==typeof t&&void 0!==t.state&&void 0!==o),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const r=L(t,o,h(),j.location);u.confirmTransitionTo(r,"REPLACE",s,t=>{if(!t)return;const o=v(r),{key:s,state:a}=r;if(n)if(e.replaceState({key:s,state:a},null,o),i)window.location.replace(o);else{const t=b.indexOf(j.location.key);-1!==t&&(b[t]=r.key),p({action:"REPLACE",location:r})}else M(void 0===a,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(o)})},go:x,goBack:()=>x(-1),goForward:()=>x(1),block:(t="")=>{const e=u.setPrompt(t);return R||(E(1),R=!0),()=>(R&&(R=!1,E(-1)),e())},listen:t=>{const e=u.appendListener(t);return E(1),()=>{E(-1),e()}}};return j},hash:(t={})=>{U(I,"Hash history needs a DOM");const e=window.history,n=(()=>-1===window.navigator.userAgent.indexOf("Firefox"))(),{getUserConfirmation:o=$,hashType:r="slash"}=t,i=t.basename?A(T(t.basename)):"",{encodePath:s,decodePath:a}=W[r],c=()=>{let t=a(B());return M(!i||P(t,i),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+i+'".'),i&&(t=S(t,i)),L(t)},l=C(),h=t=>{Object.assign(R,t),R.length=e.length,l.notifyListeners(R.location,R.action)};let u=!1,p=null;const d=()=>{const t=B(),e=s(t);if(t!==e)Y(e);else{const t=c(),e=R.location;if(!u&&(G=t,(Q=e).pathname===G.pathname&&Q.search===G.search&&Q.hash===G.hash&&Q.key===G.key&&function t(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(Array.isArray(e))return Array.isArray(n)&&e.length===n.length&&e.every(function(e,o){return t(e,n[o])});const o=typeof e;if(o!==typeof n)return!1;if("object"===o){const o=e.valueOf(),r=n.valueOf();if(o!==e||r!==n)return t(o,r);const i=Object.keys(e),s=Object.keys(n);return i.length===s.length&&i.every(function(o){return t(e[o],n[o])})}return!1}(Q.state,G.state)))return;if(p===k(t))return;p=null,f(t)}},f=t=>{if(u)u=!1,h();else{const e="POP";l.confirmTransitionTo(t,e,o,n=>{n?h({action:e,location:t}):g(t)})}},g=t=>{const e=R.location;let n=b.lastIndexOf(k(e));-1===n&&(n=0);let o=b.lastIndexOf(k(t));-1===o&&(o=0);const r=n-o;r&&(u=!0,v(r))},y=B(),m=s(y);y!==m&&Y(m);const w=c();let b=[k(w)];const v=t=>{M(n,"Hash history go(n) causes a full page reload in this browser"),e.go(t)};let x=0;const O=t=>{1===(x+=t)?_(window,"hashchange",d):0===x&&H(window,"hashchange",d)};let E=!1;const R={length:e.length,action:"POP",location:w,createHref:t=>"#"+s(i+k(t)),push:(t,e)=>{M(void 0===e,"Hash history cannot push state; it is ignored");const n=L(t,void 0,void 0,R.location);l.confirmTransitionTo(n,"PUSH",o,t=>{if(!t)return;const e=k(n),o=s(i+e);if(B()!==o){p=e,(t=>window.location.hash=t)(o);const t=b.lastIndexOf(k(R.location)),r=b.slice(0,-1===t?0:t+1);r.push(e),b=r,h({action:"PUSH",location:n})}else M(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),h()})},replace:(t,e)=>{M(void 0===e,"Hash history cannot replace state; it is ignored");const n=L(t,void 0,void 0,R.location);l.confirmTransitionTo(n,"REPLACE",o,t=>{if(!t)return;const e=k(n),o=s(i+e);B()!==o&&(p=e,Y(o));const r=b.indexOf(k(R.location));-1!==r&&(b[r]=e),h({action:"REPLACE",location:n})})},go:v,goBack:()=>v(-1),goForward:()=>v(1),block:(t="")=>{const e=l.setPrompt(t);return E||(O(1),E=!0),()=>(E&&(E=!1,O(-1)),e())},listen:t=>{const e=l.appendListener(t);return O(1),()=>{O(-1),e()}}};return R}};var Q,G;class V{constructor(){this.root="/",this.historyType="browser",this.titleSuffix="",this.asyncListeners=[],this.asyncGroups={}}componentWillLoad(){this.history=J[this.historyType](),this.history.listen(t=>F(this,void 0,void 0,function*(){t=this.getLocation(t),this.location=t})),this.location=this.getLocation(this.history.location)}getLocation(t){const e=0==t.pathname.indexOf(this.root)?"/"+t.pathname.slice(this.root.length):t.pathname;return Object.assign({},t,{pathname:e})}render(){const e={location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history};return t(w.Provider,{state:e},t("slot",null))}static get is(){return"stencil-router"}static get properties(){return{history:{state:!0},historyType:{type:String,attr:"history-type"},location:{state:!0},root:{type:String,attr:"root"},titleSuffix:{type:String,attr:"title-suffix"}}}}export{s as AppRoot,v as StencilRoute,O as StencilRouteSwitch,V as StencilRouter};