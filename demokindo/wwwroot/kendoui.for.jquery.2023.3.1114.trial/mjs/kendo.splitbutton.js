/**
 * Kendo UI v2023.3.1114 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.html.button.js";import"./kendo.button.menu.js";var __meta__={id:"splitbutton",name:"SplitButton",category:"web",description:"The SplitButton allows the user to execute a default action which is bound to a Button or to choose a predefined action from a drop-down list.",depends:["button.menu","html.button"]};!function(e,t){var n=window.kendo,o=n.ui.Widget,i=".kendoSplitButton",r=n.ui,a=e.extend,s=n.html,l=n._outerWidth,u=n.keys,d="id",p="aria-disabled",c="aria-label",m="aria-expanded",h="disabled",f="k-disabled",b="k-focus",_="click",g="open",w="close",v="focus",k="k-split-button k-button-group",B=o.extend({init:function(t,i){var r=this;i.enabled=!1!==i.enabled&&!e(t).prop(h),o.fn.init.call(r,t,i),r._wrapper(),r._renderButtons(),r._renderMenu(),r._enable(r.options.enabled),r._aria(),r._attachEvents(),n.notify(r),r._applyCssClasses()},options:{name:"SplitButton",enabled:!0,items:[],rounded:"medium",size:"medium",fillMode:"solid",themeColor:"base",icon:null,popup:null,arrowIcon:"caret-alt-down",messages:{labelSuffix:"splitbutton"}},events:[_,g,w],_wrapper:function(){var t=this,o=(t.element.attr(d)||n.guid())+"_wrapper";t.wrapper=t.element.wrap('<div id="'+o+'" class="'+k+'"></div>').parent(".k-split-button"),t.arrowButton=e('<button tabindex="-1" aria-label="arrow-button" class="k-split-button-arrow"></button>').appendTo(t.wrapper)},_applyCssClasses:function(){this.wrapper.addClass(this._getAppearanceClasses())},_clearCssClasses:function(){this.wrapper.removeClass(this._getAppearanceClasses())},_getAppearanceClasses:function(){var e=this.__proto__.options.name;return n.cssProperties.getValidClass({widget:e,propName:"rounded",value:this.options.rounded})},_renderButtons:function(){this._mainButton(),this._arrowButton()},_mainButton:function(){var e=this,t=a({},e.options,{type:e.element.attr("type")||"button"});delete t.click,s.renderButton(e.element,t)},_arrowButton:function(){var e=this,t=a({},e.options,{type:"button",icon:e.options.arrowIcon});delete t.text,delete t.imageUrl,delete t.click,delete t.iconClass,s.renderButton(e.arrowButton,t)},_aria:function(){var e=this,t=e.element,n=e.menu;t.attr("aria-haspopup",n?"menu":null),t.attr(m,!n&&null),t.attr("aria-controls",n?n.list.attr(d):null),t.attr(c)||t.attr(c,t.text()+" "+e.options.messages.labelSuffix)},_renderMenu:function(){var t=this,n=a({},t.options),o=e("<div></div>");delete n.click,delete n.name,n.items.length&&(t.menu=o.appendTo(t.wrapper).kendoButtonMenu(a({mainButton:t.element,toggleTarget:t.arrowButton,menuOpen:t.menuOpenHandler.bind(t),menuClose:t.menuCloseHandler.bind(t),menuClick:t._click.bind(t)},n)).data("kendoButtonMenu"))},menuOpenHandler:function(e){var t=this,n=l(t.wrapper);t.trigger(g,{target:t.element})?e.preventDefault():(e.sender.adjustPopupWidth(n),t.element.attr(m,!0))},menuCloseHandler:function(e){var t=this;t.trigger(w,{target:t.element})?e.preventDefault():(t.element.attr(m,!1),t.element.trigger(v))},_attachEvents:function(){var e=this;e.element.on(_+i,e._click.bind(e)),e.element.on("keydown"+i,e._keydown.bind(e)),e.element.on(v+i,e._focus.bind(e)),e.element.on("blur"+i,e._blur.bind(e))},_focus:function(){this.wrapper.addClass(b)},_blur:function(){this.wrapper.removeClass(b)},_click:function(t){var n=e(t.target).closest(".k-button"),o=n.attr(d),i=t;"menu-click"===t.type&&(o=t.id,n=t.target,i=t.originalEvent),this.menu.close(),this.trigger(_,{id:o,target:n,originalEvent:i})},_keydown:function(e){!this.element.is("."+f)||e.keyCode!==u.ENTER&&e.keyCode!==u.SPACEBAR||e.preventDefault()},focus:function(){this.element.trigger(v)},_enable:function(e,t){this.element.add(this.arrowButton).toggleClass(f,!e),e?this.element.removeAttr(p):this.element.attr(p,!e),t||this.element.attr(h,!e),this.arrowButton.attr(h,!e)},enable:function(e,t,n){var o=this;undefined===e&&(e=!0),t&&t.length?o.menu.enable(e,t):(o.options.enabled=e,o._enable(e,n),o.menu.enable(e))},hide:function(e){e&&e.length&&this.menu.hide(e)},show:function(e){e&&e.length&&this.menu.show(e)},open:function(){this.menu._popup.open()},close:function(){this.menu._popup.close()},items:function(){return this.menu.items()},setOptions:function(e){var t=this;o.fn.setOptions.call(t,e),(e.popup||e.items||e.size)&&(t.menu.destroy(),t._renderMenu()),t._renderButtons(),t._aria()},destroy:function(){var e=this;e.menu.destroy(),e.element.off(i),o.fn.destroy.call(e)}});n.cssProperties.registerPrefix("SplitButton","k-splitbutton-"),n.cssProperties.registerValues("SplitButton",[{prop:"rounded",values:n.cssProperties.roundedValues.concat([["full","full"]])}]),r.plugin(B)}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.splitbutton.js.map
