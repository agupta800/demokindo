/**
 * Kendo UI v2023.3.1114 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.popup.js";import"./kendo.icons.js";import"./kendo.html.button.js";var __meta__={id:"actionsheet",name:"ActionSheet",category:"web",description:"The ActionSheet widget displays a set of choices related to a task the user initiates.",depends:["core","popup","icons","html.button"]};!function(t,e){var n=window.kendo,o=n.htmlEncode,i=n.ui.Widget,a=n.ui,s=".kendoActionSheet",c=a.Popup,r=n.keys,l=n.isFunction,p=c.TabKeyTrap,d=t(document.documentElement),u="open",h="close",f="activate",m="deactivate",v=":kendoFocusable:not([tabindex='-1'])",k="k-actionsheet-bottom",_="k-actionsheet-fullscreen",g=`.k-actionsheet-item:not(.${b}),.k-actions .k-button[ref-actionsheet-action-button]:not(.${b})`,b="k-disabled",w="aria-disabled",y="k-hidden",C=n.guid(),A=t.extend,T=n.template,B=/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,x=t=>'<div class="k-text-center k-actionsheet-titlebar" >'+(t.title?`<div class="k-actionsheet-titlebar-group k-hbox"><div id="${C}" class="k-actionsheet-title"><div class="k-text-center">${t.title}</div>`+(t.subtitle?`<div class="k-actionsheet-subtitle k-text-center">${t.subtitle||""}</div>`:"")+"</div>"+(t.closeButton?'<div class="k-actionsheet-actions">'+n.html.renderButton(`<button ${n.attr("ref-actionsheet-close-button")}></button>`,{icon:"x",fillMode:"flat",size:"large"})+"</div>":"")+"</div>":"")+"</div>",E=({disabled:t,icon:e,text:n,description:i})=>`<span role="button" tabindex="0" class="k-actionsheet-item ${t?b:""}"><span class="k-actionsheet-action">`+(e?`<span class="k-icon-wrap">${e}</span>`:"")+'<span class="k-actionsheet-item-text">'+`<span class="k-actionsheet-item-title">${o(n)}</span>`+(i?'<span class="k-actionsheet-item-description">'+o(i)+"</span>":"")+"</span></span></span>",P={text:"",description:"",iconClass:"",iconSize:0,iconColor:"",click:t.noop,group:"top",disabled:!1},$={text:"",icon:"",iconClass:"",click:t.noop,disabled:!1};var I=i.extend({init:function(t,e){var o=this;e=e||{},i.fn.init.call(o,t,e),e.appendTo&&o.element.appendTo(e.appendTo),o._hasItems=e.items&&e.items.length,o._hasActionButtons=e.actionButtons&&e.actionButtons.length,o._mapItems(),o._mapActionButtons(),o._wrapper(),o._popup(),o._createContent(),o._createHeader(),o._createFooter(),o._applyAria(),o._tabKeyTrap=new p(o.wrapper),o.downEvent=n.applyEventMap("down",n.guid()),o.clickEvent=n.applyEventMap("click",n.guid()),o._mousedownProxy=o._mousedown.bind(o),o._clickProxy=o._click.bind(o),o.wrapper.on("keydown"+s,o,o._keydown.bind(o))},events:[u,h,f,m],options:{name:"ActionSheet",title:"",items:[],popup:null,fullscreen:!1,footerTemplate:null,headerTemplate:null,contentTemplate:null,actionButtons:[],closeButton:!1,adaptive:!1,focusOnActivate:!0},_mapItems:function(){var t=this;t._hasItems&&(t.options.items=t.options.items.map(S))},_mapActionButtons:function(){var t=this;t._hasActionButtons&&(t.options.actionButtons=t.options.actionButtons.map(H))},_wrapper:function(){var e,n=this,o=n.element,i=1==n.options.fullscreen?_:k;o.addClass("k-actionsheet "+i+(n.options.adaptive?" k-adaptive-actionsheet":" k-actionsheet-jq")),n.wrapper=e=o.wrap("<div class='k-actionsheet-container "+y+"'></div>").parent(),e.prepend(t("<div></div>").addClass("k-overlay"))},_applyAria:function(){var t=this,e=t.element,n=t.wrapper.find(".k-actionsheet-title").attr("id");e.attr({role:"dialog","aria-modal":!0,"aria-labelledby":t.options.title?n:null})},_popup:function(){var t=this,e=t.options,o=!!e.adaptive&&{open:{effects:"slideIn:up",transition:!0,duration:200}};e.open=null,e.close=null,e.activate=null,e.deactivate=null,t.popup=new c(t.element,A(e.popup,e,{name:"Popup",isRtl:n.support.isRtl(e.anchor),omitOriginOffsets:!0,appendTo:t.wrapper,modal:!0,animation:o,position:"top center",anchor:e.anchor||t.wrapper})),e.focusOnActivate&&t.popup.bind(f,t._openHandler.bind(t)),t.popup.bind(f,(e=>{t.trigger(f,e)})),t.popup.bind(m,(e=>{t.wrapper.addClass(y),d.off(t.downEvent,t._mousedownProxy),d.off(t.clickEvent,t._clickProxy),t.trigger(m,e)})),t.popup.bind(u,(e=>{t.trigger(u,e)})),t.popup.bind(h,(e=>{var n=t._closeButtonPressed;t._closeButtonPressed=!1,t.trigger(h,A({},e,{closeButton:n}))}))},_createHeader:function(){var t=this.options;(t.title||t.headerTemplate)&&this.element.prepend(T(t.headerTemplate||x)(t))},_items:function(){var t=this;if(t._hasItems){var e=t.options.items.reduce(((t,e)=>{const n=e.group||"top";return t[n]=t[n]||[],t[n].push(e),t}),new Map),n=e.top,o=e.bottom;t._createItems(n),n&&n.length&&o&&o.length&&t._content.append('<hr class="k-hr" />'),t._createItems(o)}},_createContent:function(){var e=this,n=e.options;e.element.wrapInner(t("<div class='k-actionsheet-content'></div>"));var o=e._content=e.element.find(".k-actionsheet-content");if(e._hasItems)return o.empty(),void e._items();(n.contentTemplate||n.hideOverflowContent)&&o.addClass("!k-overflow-hidden"),n.contentTemplate&&o.html(T(n.contentTemplate)(n))},_createItems:function(e){var o,i,a,s,c,r,l,p,d=this._content,u=t("<div class='k-list-ul' role='group'></div>");if(e&&e.length)for(d.append(u),a=T(E),o=0;o<e.length;o++)i=e[o],l=void 0,p=void 0,p={},c=(r=i).iconClass||r.icon?(l=t(n.html.renderIcon({icon:r.icon,iconClass:r.iconClass+" k-actionsheet-item-icon"})),r.iconColor&&B.test(r.iconColor)?p.color=r.iconColor:r.iconColor&&l.addClass("k-text-"+r.iconColor),r.iconSize&&(p.fontSize=r.iconSize),Object.keys(p).length&&l.css(p),l):"",s=t(a(A({},i,{icon:c&&c.prop("outerHTML")}))),u.append(s),i.click&&s.data("action",i.click)},_createActionButtons:function(){for(var e,o=this.options.actionButtons,i=this._footer,a=0;a<o.length;a++){var s=o[a],c=!0!==s.disabled;e=t(n.html.renderButton(`<button ref-actionsheet-action-button>${s.text||""}</button>`,t.extend({size:"large"},s))),i.append(e),e.toggleClass(b,!c),e.attr("disabled",!c),c?e.removeAttr(w):e.attr(w,!c),s.click&&e.data("action",s.click)}},_createFooter:function(){var e,n=this,o=n.options;if(n._hasActionButtons||o.footerTemplate){if((e=n._footer=t("<div class='k-actionsheet-footer'></div>")).insertAfter(n._content),n._hasActionButtons)return e.addClass("k-actions k-actions-stretched k-actions-horizontal"),void n._createActionButtons();o.footerTemplate&&n._footer.append(T(o.footerTemplate)(o))}},destroy:function(){var t=this;t.close(),i.fn.destroy.call(t),t._content=null,t._footer=null,t._header=null,t.element.off(s),t.wrapper.off(s),t.popup.destroy()},open:function(t){var e=this;e.altTarget=t&&t.altTarget,e.wrapper.removeClass(y),e._elementHeight=e._elementHeight||e.element.outerHeight(),e.options.adaptive&&e.wrapper.width("100%"),e.popup.open("auto",0),e.popup.wrapper.find(">.k-child-animation-container").css({bottom:0,width:"100%"}),d.off(e.downEvent,e._mousedownProxy).on(e.downEvent,e._mousedownProxy),d.off(e.clickEvent,e._clickProxy).on(e.clickEvent,e._clickProxy),e._tabKeyTrap.trap()},visible:function(){return this.popup.visible()},toggle:function(){this.visible()?this.close():this.open()},fullscreen:function(t){var e=this;e.element.toggleClass(_,!0===t),e.element.toggleClass(k,!0!==t),e.element.closest(".k-child-animation-container").css({height:t?"100%":"auto"})},close:function(){this.popup.close()},position:t.noop,_focusFirstFocusableElement:function(){var t=this.element.find(v).first();t.length&&t.trigger("focus")},_focusLastFocusableElement:function(){var t=this.element.find(v).last();t.length&&t.trigger("focus")},_openHandler:function(){var t=this;if(t._hasItems){var e=t._content.find(".k-actionsheet-item")[0];e&&e.focus()}else t._focusFirstFocusableElement()},_isActionableButton:function(e){return t(e).closest(g).length>0},_triggerAction:function(e){var n=t(e.target).closest(g).data("action");l(n)&&n(e),e.isDefaultPrevented()||this.close()},_keydown:function(e){var o=this,i=n.keys,a=e.keyCode,s=t(e.target);if(a==i.ESC)e.stopPropagation(),o.close();else if(o._isActionableButton(s)&&F(e))o._triggerAction(e);else if(e.keyCode===n.keys.TAB){var c=this.wrapper.find(v),r=c.first(),l=c.last();e.shiftKey?document.activeElement===r[0]&&(l.trigger("focus"),e.preventDefault()):document.activeElement===l[0]&&(r.trigger("focus"),e.preventDefault())}},_click:function(t){var e=n.eventTarget(t);this._isActionableButton(e)&&this._triggerAction(t)},_mousedown:function(e){var o=this,i=o.element[0],a=n.eventTarget(e);o.altTarget&&o.altTarget.is(t(a))||(!function(e,n){return!(!e||!n)&&(e===n||t.contains(e,n))}(i,a)||t(a).closest(`[${n.attr("ref-actionsheet-close-button")}]`,t(i).find("k-actionsheet-titlebar")).length>0)&&(o._closeButtonPressed=!0,o.close())}});function F(t){return t.keyCode==r.ENTER||t.keyCode==r.SPACEBAR}function S(t){return A({},P,t)}function H(t){return A({},$,t)}a.plugin(I)}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.actionsheet.js.map
