/**
 * Kendo UI v2023.3.1114 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.tooltip.js";import"./kendo.html.button.js";var __meta__={id:"popover",name:"Popover",category:"web",description:"The Popover widget displays a popup with additional information for an element.",depends:["tooltip","html.button"],features:[{id:"popover-fx",name:"Animation",description:"Support for animation",depends:["fx"]}]};!function(t,o){var e=window.kendo,i=e.ui.Popup,n=e.ui.TooltipBase,r=t.extend,s=t(document),a=".kendoPopover",p=({index:t,text:o})=>e.html.renderButton(`<button ${t}>${o}</button>`,{fillMode:"flat",themeColor:"primary"}),c=({index:t,text:o,icon:i,iconClass:n})=>e.html.renderButton(`<button ${t}>${o}</button>`,{icon:i,iconClass:"k-button-icon"+(n?` ${n}`:"")}),l=({index:t,icon:o,iconClass:i})=>e.html.renderButton(`<button ${t}></button>`,{icon:o,iconClass:"k-button-icon"+(i?` ${i}`:"")}),d=({callout:t,dir:o})=>'<div role="tooltip" class="k-popover">'+(t?'<div class="k-popover-callout k-callout-'+o+'"></div><div class="k-popover-inner"></div>':"")+"</div>",u="show",h="hide",f={top:"bottom",bottom:"top",left:"right",right:"left",center:"center"},m={bottom:{origin:"bottom center",position:"top center"},top:{origin:"top center",position:"bottom center"},left:{origin:"center left",position:"center right",collision:"fit flip"},right:{origin:"center right",position:"center left",collision:"fit flip"},center:{position:"center center",origin:"center center"}},v={bottom:"n",top:"s",left:"e",right:"w",center:"n"},_={mouseenter:"mouseleave",focus:"blur",focusin:"focusout"},g={horizontal:{offset:"top",size:"outerHeight"},vertical:{offset:"left",size:"outerWidth"}},w=n.extend({init:function(o,i){var r,s=this;n.fn.init.call(s,o,i),r=s.options.position.match(/left|right/)?"horizontal":"vertical",s.dimensions=g[r],s._saveTitle=t.noop,s._documentKeyDownHandler=s._documentKeyDown.bind(s),s._actionsHandler=s._actionsClick.bind(s),s.options.toggleOnClick&&s._isShownOnClick()&&s.element.on((e.support.touch?e.support.mousedown:s.options.showOn)+a,s.options.filter,s._showAction.bind(s)),s._isShownOnClick()||s.element.on(_[s.options.showOn],s.options.filter,s._dismissAction.bind(s))},options:{name:"Popover",filter:"",actions:[],actionsLayout:"center",position:"bottom",showOn:"mouseenter",toggleOnClick:!1,width:null,height:null,animation:{open:{effects:"fade:in",duration:0},close:{duration:40,hide:!0}}},events:[u,h],_addAria:function(){var t,o=this,i=o.options;o._isShownOnClick()&&o.wrapper.find("a,input,select,textarea,button").length?(o.wrapper.attr("role","dialog"),o._isDialog=!0,i.header&&(t=e.guid(),o.wrapper.attr("aria-labelledby",t).find(".k-popover-header").attr("id",t)),i.body&&(t=e.guid(),o.wrapper.attr("aria-describedby",t).find(".k-popover-body").attr("id",t))):o.wrapper.attr("role","tooltip")},_appendContent:function(t){var o=this,i=o.options,n=o.wrapper.find(".k-popover-inner"),r=o.options.template,s=()=>"";n.length?n.children().remove():o.wrapper.children(":not(.k-popover-callout)").remove(),n=n.length?n:o.wrapper,r?n.append(e.template(r)({target:t})):n.append((({header:t,actions:o,body:e,positioning:i})=>(t?'<div class="k-popover-header">'+t+"</div>":"")+`<div class="k-popover-body">${e}</div>`+(o?'<div class="k-popover-actions k-actions k-actions-horizontal k-justify-content-'+i+'">'+o+"</div>":""))({header:e.template(i.header||s)({target:t}),body:e.template(i.body||s)({target:t}),actions:o._buildActions(i.actions),positioning:i.actionsLayout}))},_actionsClick:function(o){var i=this,n=i.options.actions,r=t(o.currentTarget),s=n[parseInt(r.attr(e.attr("index")),10)];s.click&&s.click.call(i,{sender:i,target:r})},_attachActions:function(){this.wrapper.on("click"+a,".k-popover-actions .k-button",this._actionsHandler)},_dettachActions:function(){var t=this;t.wrapper&&t.wrapper.off("click"+a,t._actionsHandler)},_buildActions:function(t){if(t.length){for(var o,i="",n=0;n<t.length;n++)(o=t[n]).text&&(o.icon||o.iconClass)?i+=e.template(c)({text:o.text,index:e.attr("index")+"="+n,icon:o.icon,iconClass:o.iconClass}):!o.icon&&!o.iconClass||o.text?i+=e.template(p)({text:o.text,index:e.attr("index")+"="+n}):i+=e.template(l)({index:e.attr("index")+"="+n,icon:o.icon,iconClass:o.iconClass});return i}},_documentKeyDown:function(t){if(t.keyCode===e.keys.ESC&&(this._shown=!1,this._dismissAction()),t.keyCode===e.keys.TAB){var o=this.wrapper.find(":kendoFocusable"),i=o.first(),n=o.last();t.shiftKey?document.activeElement===i[0]&&(n.trigger("focus"),t.preventDefault()):document.activeElement===n[0]&&(i.trigger("focus"),t.preventDefault())}},_initPopup:function(){var o=this,n=o.options,p=t(e.template(d)({callout:n.callout&&"center"!==n.position,dir:v[n.position]}));o.wrapper=p,o.popup=new i(p,r({activate:function(){o._offset(o.options.position,o.options.offset,28),o._positionCallout(),o._attachActions(),s.on("keydown"+a,o._documentKeyDownHandler),o._isDialog?o.wrapper.find(":kendoFocusable").first().trigger("focus"):o._addDescribedBy(),o.trigger(u),o.popup._hovered=undefined},close:function(t){o.options.toggleOnClick&&o._shown?t.preventDefault():o.trigger(h)},copyAnchorStyles:!1,animation:n.animation},m[n.position])),p.css({width:n.width,height:n.height}),o._isShownOnMouseEnter()&&p.on("mouseleave"+a,o._dismissAction.bind(o)),o.arrow=p.find(".k-popover-callout")},_dismissAction:function(){var t=this;clearTimeout(t.timeout),t.timeout=setTimeout((function(){t.popup&&!t.popup._hovered&&t.popup.close()}),t.options.hideAfter)},_showAction:function(){var t=this;t._shown=!t._shown,t._shown||t.popup.close()},_show:function(t){var o=this,e=o.target();o.popup||o._initPopup(),e&&e[0]!=t[0]&&(o.popup.close(),o.popup.element.kendoStop(!0,!0)),e&&e[0]==t[0]||(o._appendContent(t),o._addAria(),o.popup.options.anchor=t),o.popup.one("deactivate",(function(){s.off("keydown"+a,o._documentKeyDownHandler),o._isDialog||(o._removeDescribedBy(o.target()),this.element.removeAttr("id")),o._dettachActions()})),o._openPopup()},_positionCallout:function(){var t=this,o=t.options.position,e=t.popup,i=v[e.flipped?f[o]:o];t.arrow.removeClass("k-callout-s k-callout-w k-callout-e k-callout-n").addClass("k-callout-"+i)},destroy:function(){this.element.off(a),this._dettachActions(),clearTimeout(this.timeout),s.off("keydown"+a,this._documentKeyDownHandler),n.fn.destroy.call(this)}});e.ui.plugin(w)}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.popover.js.map