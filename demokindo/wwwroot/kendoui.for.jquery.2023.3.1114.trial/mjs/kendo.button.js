/**
 * Kendo UI v2023.3.1114 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.badge.js";import"./kendo.html.button.js";var __meta__={id:"button",name:"Button",category:"web",description:"The Button widget displays styled buttons.",depends:["core","badge","html.button"]};!function(e,t){var n=window.kendo,o=n.ui.Widget,i=n.html,s=n.ui,a=n.keys,l="click",d=n.support.mousedown,r=n.support.mouseup,u=".kendoButton",c="disabled",b="k-focus",p="k-active";n.setDefaults("button",{icon:"",iconClass:"",spriteCssClass:"",imageUrl:"",badge:null});var m=o.extend({init:function(t,s){var a=this;o.fn.init.call(a,t,s),t=a.wrapper=a.element,s=a.options,i.renderButton(t,e.extend({},s)),t.attr("role","button"),s.enable=s.enable&&s.enabled&&!t.attr(c),a.enable(s.enable),s.enable&&a._tabindex(),a._badge(),t.on(l+u,a._click.bind(a)).on("focus"+u,a._focus.bind(a)).on("blur"+u,a._blur.bind(a)).on("keydown"+u,a._keydown.bind(a)).on("keyup"+u,a._removeActive.bind(a)).on(d+u,a._addActive.bind(a)).on(r+u+" mouseout"+u,a._removeActive.bind(a)),n.notify(a)},destroy:function(){var e=this;e.wrapper.off(u),e.badge&&e.badge.destroy(),o.fn.destroy.call(e)},events:[l],options:{name:"Button",enable:!0,enabled:!0,icon:"",iconClass:"",spriteCssClass:"",imageUrl:"",badge:null,size:"medium",shape:"rectangle",rounded:"medium",fillMode:"solid",themeColor:"base"},_isNativeButton:function(){return"button"==this.element.prop("tagName").toLowerCase()},_click:function(e){this.options.enable&&this.trigger(l,{event:e,id:this.element.attr("id"),target:this.element})&&e.preventDefault()},_focus:function(){this.options.enable&&this.element.addClass(b)},_blur:function(){var e=this;e.element.removeClass(b),setTimeout((function(){e.element.removeClass(p)}))},_keydown:function(e){var t=this;e.keyCode!=a.ENTER&&e.keyCode!=a.SPACEBAR||(t._addActive(),t._isNativeButton()||(e.keyCode==a.SPACEBAR&&e.preventDefault(),t._click(e)))},_removeActive:function(){this.element.removeClass(p)},_addActive:function(){this.options.enable&&this.element.addClass(p)},enable:function(e){var n=this,o=n.element;e===t&&(e=!0),e=!!e,n.options.enable=e,o.toggleClass("k-disabled",!e).attr("aria-disabled",!e).attr(c,!e),e&&n._tabindex();try{o.trigger("blur")}catch(e){}},_badge:function(n){var o,i=this,a=n||i.options.badge;null!==a&&a!==t&&(a.constructor!==Object&&(a={text:a}),a.position!==t&&""!==a.position||(a.position="edge",a.align!==t&&""!==a.align||(a.align="top end")),a._classNames=["k-button-badge"],i.element.addClass("k-badge-container"),o=e("<span />").appendTo(i.element),i.badge=new s.Badge(o,a))}});!1===m.fn.hasOwnProperty("defaults")&&Object.defineProperty(m.fn,"defaults",{get:function(){return n.defaults.button}}),n.cssProperties.registerPrefix("Button","k-button-"),n.cssProperties.registerValues("Button",[{prop:"fillMode",values:n.cssProperties.fillModeValues.concat(["link"])},{prop:"rounded",values:n.cssProperties.roundedValues.concat([["full","full"]])}]),n.ui.plugin(m)}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.button.js.map
