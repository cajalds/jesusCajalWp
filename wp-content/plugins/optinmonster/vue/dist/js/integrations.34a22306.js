(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["integrations"],{"7e9f":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("core-page",[i("common-alerts",{attrs:{alerts:t.alerts}}),t.isLoading?i("core-loading",{staticClass:"integrations-loading"}):t._e(),i("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isLoading?t._e():i("div",{staticClass:"omapi-integrations"},[t.showIntegrations?i("div",{staticClass:"omapi-integrations__section"},[i("h2",[t._v("My Integrations")]),i("div",{staticClass:"omapi-integrations-wrap",attrs:{id:"om-my-integrations"}},t._l(t.integrations,function(t){return i("integrations-integration",{key:t.slug,attrs:{provider:t}})}),1)]):t._e(),t.showFeatured?i("div",{staticClass:"omapi-integrations__section"},[i("h2",[t._v("Featured Integrations")]),i("div",{staticClass:"omapi-integrations-wrap",attrs:{id:"om-featured-integrations"}},t._l(t.featuredProviders,function(t){return i("integrations-integration",{key:t.slug,attrs:{provider:t}})}),1)]):t._e(),i("div",{staticClass:"omapi-integrations__section all-integrations"},[i("h2",[t._v("All Integrations")]),i("integrations-filters"),i("div",{staticClass:"omapi-integrations-wrap",attrs:{id:"om-all-integrations"}},t._l(t.providers,function(t){return i("integrations-integration",{key:t.slug,attrs:{provider:t}})}),1),t.showSearchAlert?i("div",{staticClass:"search-alert"},[i("integrations-partials-custom-integrations")],1):t._e()],1)])]),i("integrations-modal-analytics"),i("integrations-modal-custom"),i("templates-modal-not-connected")],1)},r=[],s=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),a=i("43ef"),o=i("2f62");function c(t,e){var i=Object.keys(t);return Object.getOwnPropertySymbols&&i.push.apply(i,Object.getOwnPropertySymbols(t)),e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(i,!0).forEach(function(e){Object(s["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var l=Object(o["a"])("integrations"),u=l.mapState,d={mixins:[a["a"]],created:function(){this.$store.dispatch("integrations/fetchIntegrationData").catch(function(){}),this.$store.getters.isFetched("siteSettings")||this.$store.dispatch("settings/fetchSiteSettings").catch(function(){})},beforeDestroy:function(){this.resetProviders()},computed:g({},u(["integrations","providers","featuredProviders","filters","search","searchResults"]),{showSearchAlert:function(){return(this.isFiltering||this.isSearching)&&0===this.searchResults.length},isLoading:function(){return this.$store.getters.isLoading("integrations")},alerts:function(){return this.$get("$store.state.alerts",[])},showIntegrations:function(){return 0<this.integrations.length},showFeatured:function(){return 0<this.featuredProviders.length}})},h=d,p=(i("eb5b"),i("2877")),f=Object(p["a"])(h,n,r,!1,null,null,null);e["default"]=f.exports},d968:function(t,e,i){},eb5b:function(t,e,i){"use strict";var n=i("d968"),r=i.n(n);r.a}}]);
//# sourceMappingURL=integrations.34a22306.js.map