/**
 * Kendo UI v2023.3.1114 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.floatinglabel.js";var __meta__={id:"label",name:"Label",category:"framework",description:"Abstraction of label rendering for inputs",depends:["core","floatinglabel"],hidden:!0};const kendo=window.kendo,$=kendo.jQuery,ui=kendo.ui,Widget=ui.Widget,isFunction=kendo.isFunction,LABELCLASSES="k-label k-input-label";var Label=Widget.extend({options:{name:"Label",widget:null},init:function(e,t){var n=this;e=e||$("<label></label>"),Widget.fn.init.call(n,e,t),t=$.extend(!0,{},t),n.widget=t.widget,t.floating&&n._floatingLabel(),n._label()},destroy:function(){this.floatingLabel&&this.floatingLabel.destroy(),Widget.fn.destroy.call(this)},_unwrapFloating:function(){var e=this;e.floatingLabel&&(e.floatingLabel.destroy(),e.widget.wrapper.unwrap(e._floatingLabelContainer))},setOptions:function(e){var t=this,n=!1;("string"==typeof e||$.isPlainObject(e)&&!1===e.floating)&&(n=!0),e=$.isPlainObject(e)?e:{content:e},Widget.fn.setOptions.call(t,e),n&&t.floatingLabel?(t._unwrapFloating(),t.floatingLabel.destroy(),delete t.floatingLabel):!0!==e.floating||t.floatingLabel||(t.element.remove(),t._floatingLabel()),t._label(),t.floatingLabel&&t.floatingLabel.refresh()},_label:function(){var e=this,t=e.widget.element,n=e.options,a=t.attr("id"),i=n.content;isFunction(i)&&(i=i.call(e)),i||(i=""),a||(a=n.name+"_"+kendo.guid(),t.attr("id",a)),e.element.addClass(LABELCLASSES).attr("for",a).text(i).insertBefore(e.options.beforeElm||e.widget.wrapper)},_floatingLabel:function(){var e=this,t=$.extend({},e.options);delete t.name,(t.floating||!1)&&(e._floatingLabelContainer=e.widget.wrapper.wrap("<span></span>").parent(),e.floatingLabel=new kendo.ui.FloatingLabel(e._floatingLabelContainer,$.extend({},t)))}});kendo.ui.plugin(Label);export{kendo as default};
//# sourceMappingURL=kendo.label.js.map
