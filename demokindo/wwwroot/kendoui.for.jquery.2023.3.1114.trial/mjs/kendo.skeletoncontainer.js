/**
 * Kendo UI v2023.3.1114 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";var __meta__={id:"skeletoncontainer",name:"SkeletonContainer",category:"web",depends:["core"]};!function(e){var t=window.kendo,n=t.ui,i=n.Widget,s=i.extend({init:function(t,n){var s=this;i.fn.init.call(s,t,n),e.cssNumber.gridColumnStart=!0,e.cssNumber.gridColumnEnd=!0,e.cssNumber.gridRowStart=!0,e.cssNumber.gridRowEnd=!0,s.element=e(t).addClass("k-skeleton-container"),s._setWrapperStyles(),s._initItems(),s._initTemplate(),s._aria()},options:{name:"SkeletonContainer",animation:"pulse",grid:null,template:null,height:"",width:""},setOptions:function(e){t.deepExtend(this.options,e),this.element.empty(),this.init(this.element,this.options)},getOptions:function(){return e.extend(!0,{},this.options)},_aria:function(){this.element.attr({role:"alert","aria-live":"polite","aria-label":t.ui.progress.messages.loading})},_initItems:function(){if(this.options.grid)for(var n,i,s,o=this.options.grid.items,a=0;a<o.length;a++)i=o[a],s=e("<div></div>"),n=i.shape.toLowerCase(),s.css({"grid-column":t.format("{0} / span {1}",i.colStart,i.colSpan),"grid-row":t.format("{0} / span {1}",i.rowStart,i.rowSpan)}).addClass("k-skeleton").addClass(t.format("k-skeleton-{0}","rectangle"===n?"rect":n)),s.appendTo(this.element)},_initTemplate:function(){if(this.options.template&&!this.options.grid){var e=t.template(this.options.template)({});e=e.replace(/data-animation/gi,"k-skeleton").replace(/data-shape/gi,"k-skeleton").replace(/k-skeleton-rectangle/gi,"k-skeleton-rect"),this.element.append(e),this._addClasses()}},_addClasses:function(){for(var e=["circle","rect","text"],t=["wave","pulse"],n=0;n<e.length;n++)this.element.find("[k-skeleton-"+e[n]+"]").removeAttr("k-skeleton-"+e[n]).addClass("k-skeleton k-skeleton-"+e[n]);for(var i=0;i<t.length;i++)this.element.find("[k-skeleton-"+t[i]+"]").removeAttr("k-skeleton-"+t[i]).addClass("k-skeleton-"+t[i])},_setWrapperStyles:function(){var e=this,n=e.options,i=n.grid,s=n.animation.toLowerCase();i&&e.element.css({"grid-template-columns":t.format("repeat({0}, 1fr)",i.columns),"grid-template-rows":t.format("repeat({0}, 1fr)",i.rows),"column-gap":(i.gap||{}).columns,"row-gap":(i.gap||{}).rows}).addClass("k-d-grid"),e.element.css({width:"string"==typeof n.width?n.width:n.width+"px",height:"string"==typeof n.height?n.height:n.height+"px"}),"none"!==s&&e.element.addClass("wave"==s?"k-skeleton-wave":"k-skeleton-pulse")}});n.plugin(s)}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.skeletoncontainer.js.map
