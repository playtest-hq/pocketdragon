/*! Built with http://stenciljs.com */
const{h:e}=window.App;class t{constructor(){this.expanded=!1}render(){return e("section",{class:`\n                    ${this.expanded?"expanded":"collapsed"}\n                `},e("header",{onClick:()=>{this.expanded=!this.expanded}},e("slot",{name:"header"})),e("div",{class:"body"},e("slot",null)))}static get is(){return"app-collapsible-section"}static get encapsulation(){return"shadow"}static get properties(){return{expanded:{state:!0}}}static get style(){return"\@charset \"UTF-8\";[data-app-collapsible-section-host]{display:block}[hidden][data-app-collapsible-section-host]{display:none}header[data-app-collapsible-section]{cursor:pointer}header[data-app-collapsible-section]:before{float:left;margin-right:.5rem}section.collapsed[data-app-collapsible-section]   header[data-app-collapsible-section]:before{content:'▲'}section.collapsed[data-app-collapsible-section]   .body[data-app-collapsible-section]{display:none}section.expanded[data-app-collapsible-section]   header[data-app-collapsible-section]:before{content:'▼'}"}}export{t as AppCollapsibleSection};