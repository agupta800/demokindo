/**
 * Kendo UI v2023.3.1114 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.html.base.js";import"./kendo.icons.js";var __meta__={id:"html.chip",name:"Html.Chip",category:"web",description:"HTML rendering utility for Kendo UI for jQuery.",depends:["html.base","icons"],features:[]};!function(a,e){var n=window.kendo,s=n.html.HTMLBase,t=s.extend({init:function(a,e){s.fn.init.call(this,a,e),this._wrapper()},options:{name:"HTMLChip",size:"medium",rounded:"medium",fillMode:"solid",themeColor:"base",attr:{},icon:"",iconClass:"",iconAttr:{},removable:!1,removableAttr:{},removeIcon:"x-circle",removeIconClass:"",content:"",text:"",actions:[],stylingOptions:["size","rounded","fillMode","themeColor"]},_wrapper:function(){var e=this,s=e.options;s.text=s.text||s.label,e.wrapper=e.element.wrap("<div class='k-chip'></div>").parent().attr(s.attr),e._addClasses(),s.icon?e.wrapper.prepend(a(n.ui.icon({icon:s.icon,size:"small",iconClass:"k-chip-icon"+(s.iconClass?` ${s.iconClass}`:"")})).attr(s.iconAttr)):s.iconClass?e.wrapper.prepend(a("<span class='"+s.iconClass+"'></span>").attr(s.iconAttr)):s.avatarClass&&e.wrapper.prepend(a("<span class='k-chip-avatar k-avatar k-avatar-md k-avatar-solid k-avatar-solid-primary k-rounded-full "+s.avatarClass+"'></span>").attr(s.iconAttr)),e.element.addClass("k-chip-content"),s.text&&e.element.html('<span class="k-chip-label">'+s.text+"</span>"),!1===s.visible&&e.wrapper.addClass("k-hidden"),!0===s.selected&&e.wrapper.addClass("k-selected"),!1===s.enabled&&e.wrapper.addClass("k-disabled"),(s.actions&&s.actions.length>0||s.removable)&&e._actions()},_actions:function(){var e=this,s=e.options;if(e.actionsWrapper=a("<span class='k-chip-actions'></span>"),e.actionsWrapper.appendTo(e.wrapper),s.actions&&s.actions.length>0)for(var t=0;t<s.actions.length;t++){var i=s.actions[t];e.actionsWrapper.append(a(`<span class='k-chip-action ${i.iconClass?i.iconClass:""}'>${n.ui.icon({icon:i.icon,iconClass:"k-chip-icon"})}</span>`).attr(i.attr?i.attr:{}))}s.removable&&e.actionsWrapper.append(a(`<span class='k-chip-action k-chip-remove-action'>${n.ui.icon({icon:s.removeIcon,iconClass:"k-chip-icon"})}</span>`).attr(s.removableAttr))}});a.extend(n.html,{renderChip:function(e,n){return e&&!a.isPlainObject(e)||(n=e,e=a("<span></span>")),new t(e,n).html()},HTMLChip:t}),n.cssProperties.registerPrefix("HTMLChip","k-chip-"),n.cssProperties.registerValues("HTMLChip",[{prop:"rounded",values:n.cssProperties.roundedValues.concat([["full","full"]])}])}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.html.chip.js.map
