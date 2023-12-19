/**
 * Kendo UI v2023.3.1114 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.autocomplete.js";import"./kendo.datepicker.js";import"./kendo.numerictextbox.js";import"./kendo.combobox.js";import"./kendo.dropdownlist.js";import"./kendo.icons.js";var __meta__={id:"filtercell",name:"Row filter",category:"framework",depends:["autocomplete","icons"],advanced:!0};!function(e,t){var r=window.kendo,a=r.ui,o=r.data.DataSource,i=a.Widget,l="change",n="boolean",s="enums",u="string",p="Is equal to",d="Is not equal to",c=["isnull","isnotnull","isempty","isnotempty","isnullorempty","isnotnullorempty"];function f(t){var r="string"==typeof t?t:t.operator;return e.inArray(r,c)>-1}function g(t,r){var a=[];if(e.isPlainObject(t))if(t.hasOwnProperty("filters"))a=t.filters;else if(t.field==r)return t;Array.isArray(t)&&(a=t);for(var o=0;o<a.length;o++){var i=g(a[o],r);if(i)return i}}function m(t,r){t.filters&&(t.filters=e.grep(t.filters,(function(e){return m(e,r),e.filters?e.filters.length:e.field!=r})))}var v=i.extend({init:function(a,o){a=e(a).addClass("k-filtercell");var p,d,c,g,m=this.wrapper=e("<span/>").appendTo(a),v=this,h=o,b=v.operators=o.operators||{},y=v.input=e("<input/>").attr(r.attr("bind"),"value: value").appendTo(m),w=o?o.suggestDataSource:null;w&&(o=e.extend({},o,{suggestDataSource:{}})),i.fn.init.call(v,a[0],o),w&&(v.options.suggestDataSource=w),o=v.options,p=v.dataSource=o.dataSource,v.model=p.reader.model,g=o.type=u;var _=(r.getter("reader.model.fields",!0)(p)||{})[o.field];if(_&&_.type&&(g=o.type=_.type),o.values&&(o.type=g=s),b=b[g]||o.operators[g],!h.operator)for(c in b){o.operator=c;break}if(v._parse=function(e){return null!=e?e+"":e},v.model&&v.model.fields){var S=v.model.fields[o.field];S&&S.parse&&(v._parse=S.parse.bind(S))}v.defaultOperator=o.operator,v.viewModel=d=r.observable({operator:o.operator,value:null,operatorVisible:function(){var e=this.get("value");return null!==e&&e!==t&&"undefined"!=e||f(this.get("operator"))&&v.dataSource.filter()&&!v._clearInProgress}}),v._prevOperator=o.operator,d.bind(l,v.updateDsFilter.bind(v)),g==u&&v.initSuggestDataSource(o),null!==o.inputWidth&&(y.addClass("k-sized-input"),y.width(o.inputWidth)),y.attr("aria-label",v._getColumnTitle()),y.attr("title",v._getColumnTitle()),y.attr(r.attr("size"),v.options.size||"medium"),v._setInputType(o,g),g!=n&&!1!==o.showOperators?v._createOperatorDropDown(b):(e('<div unselectable="on" />').css("display","none").text("eq").appendTo(m),m.addClass("k-operator-hidden")),v._createClearIcon(),r.bind(this.wrapper,d),g==u&&(o.template||v.setAutoCompleteSource()),g==s&&v.setComboBoxSource(v.options.values),v._refreshUI(),v._refreshHandler=v._refreshUI.bind(v),v.dataSource.bind(l,v._refreshHandler)},_setInputType:function(t,a){var o=this,i=o.input;if("function"==typeof t.template)t.template.call(o.viewModel,{element:o.input,dataSource:o.suggestDataSource});else if(a==u)i.attr(r.attr("role"),"autocomplete").attr(r.attr("text-field"),t.dataTextField||t.field).attr(r.attr("filter"),t.suggestionOperator).attr(r.attr("delay"),t.delay).attr(r.attr("min-length"),t.minLength).attr(r.attr("value-primitive"),!0);else if("date"==a)i.attr(r.attr("role"),"datepicker").attr("id",r.guid());else if(a==n){i.remove();var l=e("<input type='radio'/>"),p=o.wrapper,d=r.guid(),c=e("<label/>").text(r.htmlEncode(t.messages.isTrue)).append(l);l.attr(r.attr("bind"),"checked:value").attr("name",d).val("true");var f=c.clone().text(r.htmlEncode(t.messages.isFalse));l.clone().val("false").appendTo(f),p.append([c,f])}else"number"==a?i.attr(r.attr("role"),"numerictextbox").attr("title",o._getColumnTitle()):a==s&&i.attr(r.attr("role"),"combobox").attr(r.attr("text-field"),"text").attr(r.attr("suggest"),!0).attr(r.attr("filter"),"contains").attr(r.attr("value-field"),"value").attr(r.attr("value-primitive"),!0)},_getColumnTitle:function(){var e=this.options.column;return e?e.title||e.field:""},_createOperatorDropDown:function(t){var a,o=[],i=this.viewModel;for(var l in t)o.push({text:t[l],value:l});var n=e('<input class="k-dropdown-operator" '+r.attr("bind")+'="value: operator"/>').appendTo(this.wrapper);n.attr("aria-label",this._getColumnTitle()),this.operatorDropDown=n.kendoDropDownList({dataSource:o,size:this.options.size||"medium",dataTextField:"text",dataValueField:"value",open:function(){this.popup.element.width(150)},valuePrimitive:!0}).data("kendoDropDownList"),i.bind("change",(function(){var e=t[i.operator];n.attr("aria-label",e)})),a=this.operatorDropDown.wrapper.attr("aria-label",this._getColumnTitle()).find('span[class*="i-caret-alt-down"]'),r.ui.icon(a,{icon:"filter"})},initSuggestDataSource:function(e){var a,i,l,n=e.suggestDataSource;n instanceof o||(!e.customDataSource&&n&&(n.group=t,n.filter=t),n=this.suggestDataSource=o.create(n)),e.customDataSource||(n._pageSize=t,n.reader.data=(a=n.reader.data,i=this.options.field,l=r.getter(i,!0),function(e){for(var t=a(e),r=[],o=0,i={};o<t.length;){var n=t[o++],s=l(n);i.hasOwnProperty(s)||(r.push(n),i[s]=!0)}return r})),this.suggestDataSource=n},setAutoCompleteSource:function(){var e=this.input.data("kendoAutoComplete");e&&e.setDataSource(this.suggestDataSource)},setComboBoxSource:function(e){var t=o.create({data:e}),r=this.input.data("kendoComboBox");r&&!this.options.template&&r.setDataSource(t)},_refreshUI:function(){var t=this,r=g(t.dataSource.filter(),this.options.field)||{},a=t.viewModel;t.manuallyUpdatingVM=!0,r=e.extend(!0,{},r),t.options.type==n&&a.value!==r.value&&t.wrapper.find(":radio").prop("checked",!1),r.operator&&a.set("operator",r.operator),a.set("value",r.value),e.isEmptyObject(r)&&a.trigger(l,{field:"operatorVisible"}),t.manuallyUpdatingVM=!1},_applyFilter:function(e){e.filters.length?this.dataSource.filter(e):this.dataSource.filter({})},updateDsFilter:function(r){var a,o=this,i=o.viewModel;if("operator"==r.field&&i.value===t&&!f(i)&&f(o._prevOperator))return m(a=o.dataSource.filter()||{filters:[],logic:"and"},o.options.field),o._prevOperator=i.operator,void o._applyFilter(a);if(!(o.manuallyUpdatingVM||"operator"==r.field&&i.value===t&&!f(i)||"operator"==r.field&&o._clearInProgress&&null!==i.value)){var n=e.extend({},o.viewModel.toJSON(),{field:o.options.field});o._prevOperator=n.operator;var s={logic:"and",filters:[]},u=!1;if((n.value!==t&&null!==n.value||f(n)&&!this._clearInProgress)&&(s.filters.push(n),u=o.trigger(l,{filter:s,field:o.options.field})),(o._clearInProgress||null===n.value)&&(u=o.trigger(l,{filter:null,field:o.options.field})),!u){var p=o._merge(s);o._applyFilter(p)}}},_merge:function(t){var r,a,o,i=this,l=t.logic||"and",n=t.filters,s=i.dataSource.filter()||{filters:[],logic:"and"};for(m(s,i.options.field),a=0,o=n.length;a<o;a++)(r=n[a]).value=i._parse(r.value);return n=e.grep(n,(function(e){return""!==e.value&&null!==e.value||f(e)})),n.length&&(s.filters.length?(t.filters=n,"and"!==s.logic&&(s.filters=[{logic:s.logic,filters:s.filters}],s.logic="and"),n.length>1?s.filters.push(t):s.filters.push(n[0])):(s.filters=n,s.logic=l)),s},_createClearIcon:function(){var t=this,a=r.getValidCssClass("k-button-","size",this.options.size||"medium"),o=r.htmlEncode(t.options.messages.clear);e(`<button type='button' class='k-button ${a} k-rounded-md k-button-solid k-button-solid-base k-icon-button' title = '`+o+"'/>").attr("aria-label",o).attr(r.attr("bind"),"visible:operatorVisible").html(r.ui.icon({icon:"filter-clear",iconClass:"k-button-icon"})).on("click",t.clearFilter.bind(t)).appendTo(t.wrapper)},clearFilter:function(){this._clearInProgress=!0,f(this.viewModel.operator)&&this.viewModel.set("operator",this.defaultOperator),this.viewModel.set("value",null),this._clearInProgress=!1},destroy:function(){var e=this;e.filterModel=null,e.operatorDropDown=null,e._refreshHandler&&(e.dataSource.bind(l,e._refreshHandler),e._refreshHandler=null),r.unbind(e.element),i.fn.destroy.call(e),r.destroy(e.element)},events:[l],options:{name:"FilterCell",delay:200,minLength:1,inputWidth:null,values:t,customDataSource:!1,field:"",dataTextField:"",type:"string",suggestDataSource:null,suggestionOperator:"startswith",operator:"eq",showOperators:!0,template:null,messages:{isTrue:"is true",isFalse:"is false",filter:"Filter",clear:"Clear",operator:"Operator"},operators:{string:{eq:p,neq:d,startswith:"Starts with",contains:"Contains",doesnotcontain:"Does not contain",endswith:"Ends with",isnull:"Is null",isnotnull:"Is not null",isempty:"Is empty",isnotempty:"Is not empty",isnullorempty:"Has no value",isnotnullorempty:"Has value"},number:{eq:p,neq:d,gte:"Is greater than or equal to",gt:"Is greater than",lte:"Is less than or equal to",lt:"Is less than",isnull:"Is null",isnotnull:"Is not null"},date:{eq:p,neq:d,gte:"Is after or equal to",gt:"Is after",lte:"Is before or equal to",lt:"Is before",isnull:"Is null",isnotnull:"Is not null"},enums:{eq:p,neq:d,isnull:"Is null",isnotnull:"Is not null"}}}});a.plugin(v)}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.filtercell.js.map
