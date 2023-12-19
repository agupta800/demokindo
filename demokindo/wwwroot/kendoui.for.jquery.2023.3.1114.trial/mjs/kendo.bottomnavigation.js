/**
 * Kendo UI v2023.3.1114 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.icons.js";var __meta__={id:"bottomnavigation",name:"BottomNavigation",category:"web",description:"The BottomNavigation widget is a navigation element that allows movement between primary destinations in an app.",depends:["core","icons"]};!function(e,t){var i=window.kendo,n=i.ui,s=n.Widget,o=e.extend,a=i.template,l=i.keys,r=e.isPlainObject,d=e.isEmptyObject,m=".kendoBottomNavigation",c=".",f="select",p=function(e){return"string"==typeof e},u={widget:"k-bottom-nav",item:"k-bottom-nav-item",navIcon:"k-bottom-nav-item-icon",icon:"k-icon",text:"k-bottom-nav-item-text",itemFlow:{vertical:"k-bottom-nav-item-flow-vertical",horizontal:"k-bottom-nav-item-flow-horizontal"},selected:"k-selected",disabled:"k-disabled",border:"k-bottom-nav-border",shadow:"k-bottom-nav-shadow",focus:"k-focus"},v={item:a((()=>`<span class="${u.item}"></span>`)),anchor:a((({url:e})=>`<a class="${u.item}"  href="${i.htmlEncode(e)}"></a>`)),text:a((({text:e})=>`<span class="${u.text}" >${e}</span>`)),icon:a((({icon:t})=>i.ui.icon(e(`<span class="${u.navIcon}"></span>`),{icon:t,size:"xlarge"})))},h=s.extend({init:function(t,i){var n=this;i=i||{},s.fn.init.call(n,t,i),n.element=e(t),null===this.options.fillMode&&(this.options.fillMode=this.options.fill),n._updateCssClasses(),n._items(),n._bindEvents()},options:{name:"BottomNavigation",positionMode:"fixed",items:[],themeColor:"primary",itemFlow:"vertical",fillMode:null,fill:"flat",shadow:!1,border:!0,template:null},events:[f],destroy:function(){this.element.off(m),s.fn.destroy.call(this)},_tabindex:function(e){var t=this.element,n="tabindex",s=t.attr("data-"+i.ns+n),o=e.attr(n)||t.attr(n)||s;s||(t.removeAttr(n),t.attr("data-"+i.ns+n,o)),e.attr(n,isNaN(o)?0:o)},_updateCssClasses:function(){var e=this,t=e.options,n=u;e.element.removeClass((function(t,i){0===i.indexOf("k-")&&e.element.removeClass(i)})),e.element.addClass(n.widget),e.element.addClass(i.getValidCssClass("k-pos-","positionMode",t.positionMode)),e.element.toggleClass(n.border,t.border),e.element.toggleClass(n.shadow,t.shadow),e._itemFlow(t.itemFlow),e._applyCssClasses()},_itemFlow:function(e){var t=u.itemFlow;this._toggleClassGroup(this.element,e,t)},_toggleClassGroup:function(e,t,i){if(p(i[t])){for(var n in i)e.removeClass(i[n]);e.addClass(i[t])}},_items:function(){for(var e,t=this,i=t.options.items,n=0;n<i.length;n++)e=t._renderItem(i[n]),t.element.append(e)},_renderItem:function(t){var n,s,l=t.template||this.options.template,r=t.url&&p(t.url);return(n=e(r?a(v.anchor)(t):a(v.item)(t))).toggleClass(u.selected,!0===t.selected).toggleClass(u.disabled,!1===t.enabled).addClass(t.cssClass).attr(o({},t.attributes,{"aria-disabled":!1===t.enabled})).data(t.data),this._tabindex(n),n.attr("role")||r||n.attr("role","link"),l?(n.append(a(l)(t)),n):(t=o({},{icon:""},t),s=e(v.icon(t)).addClass(t.iconClass),n.append(s),t.text&&(t.text=!1===t.encoded?t.text:i.htmlEncode(t.text),n.append(e(v.text(t)))),n)},_bindEvents:function(){var e=this,t=e._click.bind(e),i=e._keydown.bind(e);e.element.on("click"+m,c+u.item,t).on("keydown"+m,c+u.item,i)},_click:function(t){var i=e(t.target).closest(c+u.item);i.is(c+u.disabled)?t.preventDefault():this._triggerSelect(i,t)},_triggerSelect:function(e,t){e.is(c+u.disabled)||this.trigger(f,{originalEvent:t,item:e,data:e.data()})||this.select(e)},_keydown:function(t){var i=e(t.target),n=t.keyCode;n!==l.ENTER&&n!==l.SPACEBAR||this._isItem(i)&&(this._triggerSelect(i,t),n===l.SPACEBAR&&t.preventDefault())},_isItem:function(t){return(t=e(t)).is(c+u.item)&&!!this.element.find(t).length},items:function(){return this.element.children()},select:function(t,i){var n=this.items().filter(c+u.selected);if(!t)return n;i=!1!==i,this._isItem(t)&&(n.removeClass(u.selected),e(t).toggleClass(u.selected,i))},enable:function(t,i){i=!1===i,t&&this._isItem(t)&&(e(t).toggleClass(u.disabled,i),e(t).attr("aria-disabled",i))},item:function(e){return isNaN(e)?null:this.items().eq(e)},itemById:function(e){return this.element.find("#"+e)},add:function(t,i){var n=this,s="append",o=n.element;i&&n._isItem(i)&&(s="before",o=e(i)),t&&r(t)&&!d(t)&&o[s](n._renderItem(t))},remove:function(e){e&&this._isItem(e)&&e.remove()},showText:function(e){e=!1!==e,this.items().find(c+u.text).toggle(e)},setOptions:function(e){var t=this;s.fn.setOptions.call(this,e),t._updateCssClasses(),("items"in e||"template"in e)&&(t.element.empty(),t._items())}});n.plugin(h),i.cssProperties.registerPrefix("BottomNavigation","k-bottom-nav-")}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.bottomnavigation.js.map
