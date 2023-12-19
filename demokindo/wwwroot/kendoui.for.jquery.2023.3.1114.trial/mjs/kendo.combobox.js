/**
 * Kendo UI v2023.3.1114 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.list.js";import"./kendo.mobile.scroller.js";import"./kendo.virtuallist.js";import"./kendo.html.button.js";var __meta__={id:"combobox",name:"ComboBox",category:"web",description:"The ComboBox widget allows the selection from pre-defined values or entering a new value.",depends:["list","html.button"],features:[{id:"mobile-scroller",name:"Mobile scroller",description:"Support for kinetic scrolling in mobile device",depends:["mobile.scroller"]},{id:"virtualization",name:"VirtualList",description:"Support for virtualization",depends:["virtuallist"]}]};!function(e,t){var i=window.kendo,n=i.htmlEncode,s=i.ui,o=i.html,l=s.List,a=s.Select,r=i.caret,u=i.support,c=u.placeholder,p=i._activeElement,d=i.keys,_=".kendoComboBox",f=_+"FocusEvent",h="click"+_,g="mousedown"+_,v="disabled",m="readonly",x="change",b="k-focus",w="k-disabled",y="aria-disabled",I="aria-readonly",V="filter",T="accept",C="rebind",k="mouseenter"+_+" mouseleave"+_,F=/(\r\n|\n|\r)/gm,B=[16,17,18,19,20,33,34,37,39,45,91,92,144,145],S=a.extend({init:function(t,n){var s,o=this;o.ns=_,n=Array.isArray(n)?{dataSource:n}:n,a.fn.init.call(o,t,n),n=o.options,t=o.element.on("focus"+_,o._focusHandler.bind(o)),n.placeholder=n.placeholder||t.attr("placeholder"),o._reset(),o._wrapper(),o._input(),o._clearButton(),o._tabindex(o.input),o._popup(),o._dataSource(),o._ignoreCase(),o._enable(),o._attachFocusEvents(),o._oldIndex=o.selectedIndex=-1,o._initialIndex=n.index,o.requireValueMapper(o.options),o._initList(),o._cascade(),n.autoBind?o._filterSource():(!(s=n.text)&&o._isSelect&&(s=t.children(":selected").text()),s&&o._setText(s)),s||o._placeholder(),e(o.element).parents("fieldset").is(":disabled")&&o.enable(!1),i.notify(o),o._toggleCloseVisibility(),o._applyCssClasses(),n.label&&o._label(),o._aria()},options:{name:"ComboBox",enabled:!0,index:-1,text:null,value:null,autoBind:!0,delay:200,dataTextField:"",dataValueField:"",minLength:1,enforceMinLength:!1,height:200,highlightFirst:!0,filter:"none",placeholder:"",suggest:!1,cascadeFrom:"",cascadeFromField:"",cascadeFromParentField:"",cascadeOnCustomValue:!1,ignoreCase:!0,animation:{},virtual:!1,template:null,groupTemplate:e=>n(e),fixedGroupTemplate:e=>n(e),clearButton:!0,syncValueAndText:!0,autoWidth:!1,popup:null,size:"medium",fillMode:"solid",rounded:"medium",label:null,clearOnEscape:!0},events:["open","close",x,"select","filtering","dataBinding","dataBound","cascade","set"],setOptions:function(e){var t=this._listOptions(e);a.fn.setOptions.call(this,e),this.listView.setOptions(t),this._accessors(),this._aria(),this._clearButton()},destroy:function(){var e=this;e.input.off(_),e.input.off(f),e.element.off(_),e.wrapper.off(_),clearTimeout(e._pasteTimeout),e.filterInput&&e.filterInput.off(_),e._arrow.off(h+" "+g),e._clear.off(h+" "+g),a.fn.destroy.call(e)},_onActionSheetCreate:function(){var e=this;e.filterInput&&(e.filterInput.on("keydown"+_,e._keydown.bind(e)).on("input"+_,e._search.bind(e)).on("paste"+_,e._inputPaste.bind(e)).attr({role:"combobox","aria-expanded":!1}),e.popup.bind("activate",(()=>{e.filterInput.val(e.input.val()),e.filterInput.trigger("focus")})),e.popup.bind("deactivate",(()=>{e.input.trigger("focus")})))},_onCloseButtonPressed:function(){var e=this,t=e.options.dataTextField||"text";if(!e.listView.focus()){if((e._syncValueAndText()||e._isSelect)&&(!e.dataItem()||e.dataItem()[t]!==e.input.val())){var i=e.filterInput&&p()===e.filterInput[0]?e.filterInput:e.input;e._accessor(i.val())}e.options.highlightFirst?(e.listView.value(e.input.val()),e._blur()):e._oldText=e.text()}},_isValueChanged:function(e){return e!==l.unifyType(this._old,typeof e)&&e!==l.unifyType(this._oldText,typeof e)},_change:function(){var e=this,t=e.text(),i=t&&t!==e._oldText&&t!==e.options.placeholder,n=e.selectedIndex,s=-1===n;if(e.filterInput&&p()===e.filterInput[0]&&s&&i&&e.input.val(e.filterInput.val()),!e.options.syncValueAndText&&!e.value()&&s&&i)return e._old="",e._oldIndex=n,e._oldText=t,e._typing||e.element.trigger(x),e.trigger(x),void(e._typing=!1);a.fn._change.call(e),e._oldText=e.text&&e.text(),e._toggleCloseVisibility()},_attachFocusEvents:function(){var e=this;e.input.on("focus"+f,e._inputFocus.bind(e)).on("focusout"+f,e._inputFocusout.bind(e))},_focusHandler:function(e){e.target===this.element[0]&&this.input.trigger("focus")},_arrowClick:function(){this._toggle()},_inputFocus:function(){this.wrapper.addClass(b),this._placeholder(!1)},_inputFocusout:function(t){var i=this,n=i.value(),s=!e(t.relatedTarget).closest(".k-clear-value").length;if(!i.filterInput||t.relatedTarget!==i.filterInput[0]){i._userTriggered=!0,i.wrapper.removeClass(b),clearTimeout(i._typingTimeout),i._typingTimeout=null,s&&i.text(i.text());var o=i._focus(),l=this.listView.dataItemByIndex(this.listView.getElementIndex(o));n!==i.value()&&i.trigger("select",{dataItem:l,item:o})?i.value(n):(i._placeholder(),i._valueBeforeCascade=i._old,s&&(i._blur(),i.element.trigger("blur")))}},_inputPaste:function(){var e=this;clearTimeout(e._pasteTimeout),e._pasteTimeout=null,e._pasteTimeout=setTimeout((function(){e.search()}))},_editable:function(e){var t=this,i=e.disable,n=e.readonly,s=t.wrapper.off(_),o=t.element.add(t.input.off(_)),l=t._arrow.off(h+" "+g),a=t._clear;n||i?(s.addClass(i?w:"").removeClass(i?"":w),o.attr(v,i).attr(m,n).attr(y,i).attr(I,n)):(s.removeClass(w).on(k,t._toggleHover),o.prop(v,!1).prop(m,!1).attr(y,!1).attr(I,!1),l.on(h,t._arrowClick.bind(t)).on(g,(function(e){e.preventDefault()})),a.on(h+" touchend"+_,t._clearValue.bind(t)),t.input.on("keydown"+_,t._keydown.bind(t)).on("input"+_,t._search.bind(t)).on("paste"+_,t._inputPaste.bind(t)),t.wrapper.on(h+_,t._focusHandler.bind(t))),t._toggleCloseVisibility()},open:function(){var e=this,t=e._state,i=!!e.dataSource.filter()&&e.dataSource.filter().filters.length>0,n=!e.ul.find(e.listView.focus()).length;e.popup.visible()||(!e.listView.bound()&&t!==V||t===T?(e._open=!0,e._state=C,1!==e.options.minLength&&!i||i&&e.value()&&-1===e.selectedIndex?(e.refresh(),e._openPopup(),this.options.virtual||e.listView.bound(!1)):e._filterSource()):e._allowOpening()&&(e.popup._hovered=!0,e._openPopup(),e.options.virtual?e._focusItem():n&&e.options.highlightFirst&&e.listView.focus(0)))},_scrollToFocusedItem:function(){var e=this.listView;e.scrollToIndex(e.getElementIndex(e.focus()))},_openPopup:function(){this.popup.one("activate",this._scrollToFocusedItem.bind(this)),this.popup.open()},_updateSelectionState:function(){var e=this,i=e.options.text,n=e.options.value;e.listView.isFiltered()||(-1===e.selectedIndex?(i!==t&&null!==i||(i=n),e._accessor(n),e.input.val(i||e.input.val()),e._placeholder()):-1===e._oldIndex&&(e._oldIndex=e.selectedIndex))},_buildOptions:function(e){var i=this;if(i._isSelect){var n=i._customOption;i._state===C&&(i._state=""),i._customOption=t,i._options(e,"",i.value()),n&&n[0].selected&&!i.listView._emptySearch&&i._custom(n.val())}},_updateSelection:function(){var t=this,i=t.listView,n=t._initialIndex,s=null!==n&&n>-1;if(t._state===V)e(i.focus()).removeClass("k-selected");else if(!t._fetch){i.value().length||(s?t.select(n):t._accessor()&&i.value(t._accessor())),t._initialIndex=null;var o=i.selectedDataItems()[0];o&&(t._value(o)!==t.value()?t._custom(t._value(o)):t._value(o)!==t.element[0].value&&t._accessor(t._value(o)),t.text()&&t.text()!==t._text(o)&&t._selectValue(o))}},_updateItemFocus:function(){var e=this.listView;this.options.highlightFirst?e.focus()||e.focusIndex()||e.focus(0):e.focus(-1)},_listBound:function(){var e=this,i=e.input[0]===p()||e.filterInput&&e.filterInput[0]===p(),n=e.dataSource.flatView(),s=e.listView.skip(),o=n.length,l=e.dataSource._group?e.dataSource._group.length:0,a=s===t||0===s;e._presetValue=!1,e._renderFooter(),e._renderNoData(),e._toggleNoData(!o),e._toggleHeader(!!l&&!!o),e._resizePopup(),e.popup.position(),e._buildOptions(n),e._updateSelection(),n.length&&a&&(e._updateItemFocus(),e.options.suggest&&i&&e.input.val()&&e.suggest(n[0])),e._open&&(e._open=!1,e._typingTimeout&&!i?e.popup.close():e.toggle(e._allowOpening()),e._typingTimeout=null),e._hideBusy(),e.trigger("dataBound")},_listChange:function(){this._selectValue(this.listView.selectedDataItems()[0]),this._presetValue&&(this._oldIndex=this.selectedIndex)},_get:function(e){var t,i,n;if("function"==typeof e){for(t=this.dataSource.flatView(),n=0;n<t.length;n++)if(e(t[n])){e=n,i=!0;break}i||(e=-1)}return this.dataSource.total()||e||(e=-1),e},_select:function(e,t){var i=this;return-1===(e=i._get(e))&&(i.input[0].value="",i._accessor("")),i.listView.select(e).done((function(){t||i._state!==V||(i._state=T),i._toggleCloseVisibility()}))},_selectValue:function(e){var i=this.listView.select(),n="",s="";(i=i[i.length-1])===t&&(i=-1),this.selectedIndex=i,this.listView.isFiltered()&&-1!==i&&(this._valueBeforeCascade=this._old),-1!==i||e?((e||0===e)&&(n=this._dataValue(e),s=this._text(e)),null===n&&(n="")):(this.options.syncValueAndText?n=s=this.options.dataTextField===this.options.dataValueField?this._accessor():this.input[0].value:s=this.text(),this.listView.focus(-1)),this._setDomInputValue(s),this._accessor(n!==t?n:s,i),this._placeholder(),this._triggerCascade()},_setDomInputValue:function(e){var t,i=this,n=r(this.input);if(n&&n.length&&(t=n[0]),this._prev=this.input[0].value=e,t&&-1===this.selectedIndex){var s=u.mobileOS;s.wp||s.android?setTimeout((function(){i.input[0].setSelectionRange(t,t)}),0):this.input[0].setSelectionRange(t,t)}},refresh:function(){this.listView.refresh()},_toggleCloseVisibility:function(){var e=this.element.is(":disabled")||this.element.is("[readonly]");this.text()&&!e?this._showClear():this._hideClear()},suggest:function(e){var i,n=this,s=n.input[0],o=n.text(),a=r(s)[0],u=n._last,c=n.dataSource.options.accentFoldingFiltering;u!=d.BACKSPACE&&u!=d.DELETE?("string"!=typeof(e=e||"")&&(e[0]&&(e=n.dataSource.view()[l.inArray(e[0],n.ul[0])]),e=e?n._text(e):""),a<=0&&(a=(c?o.toLocaleLowerCase(c):o.toLowerCase()).indexOf(c?e.toLocaleLowerCase(c):e.toLowerCase())+1),e?(e=e.toString(),(i=(c?e.toLocaleLowerCase(c):e.toLowerCase()).indexOf(c?o.toLocaleLowerCase(c):o.toLowerCase()))>-1&&(o+=e.substring(i+o.length))):o=o.substring(0,a),o.length===a&&e||(s.value=o,s===p()&&r(s,a,o.length))):n._last=t},text:function(e){e=null===e?"":e;var i,n,s=this,o=s.filterInput&&s.filterInput[0]===p()?s.filterInput[0]:s.input[0],a=s.options.ignoreCase,r=e;if(e===t)return o.value;!1!==s.options.autoBind||s.listView.bound()?(i=s.dataItem())&&s._text(i).replace&&s._text(i).replace(F,"")===e&&(n=s._value(i))===l.unifyType(s._old,typeof n)?s._triggerCascade():(a&&(r=r.toLowerCase()),s.dataItem()&&s._text(s.dataItem())===e||(s._select((function(e){return e=s._text(e),a&&(e=(e+"").toLowerCase()),e===r})).done((function(){s.selectedIndex<0&&(o.value=e,s.options.syncValueAndText&&s._accessor(e),s._cascadeTriggered=!0,s._triggerCascade(),s._refreshFloatingLabel()),s._prev=o.value})),s._toggleCloseVisibility())):s._setText(e)},toggle:function(e){this._toggle(e,!0)},value:function(e){var i=this,n=i.options,s=i.listView;if(e===t)return(e=i._accessor()||i.listView.value()[0])===t||null===e?"":e;i.requireValueMapper(i.options,e),i.trigger("set",{value:e}),(e!==n.value||i.input.val()!==n.text||i.options.cascadeFrom)&&(i._accessor(e),i._isFilterEnabled()&&s.bound()&&s.isFiltered()?i._clearFilter():i._fetchData(),s.value(e).done((function(){-1!==i.selectedIndex||s._selectedDataItems&&s._selectedDataItems.length||(i._accessor(e),i.input.val(e),i._placeholder(!0)),i._userTriggered?i._old=i._accessor():i._old=i._valueBeforeCascade=i._accessor(),i._oldIndex=i.selectedIndex,i._prev=i._oldText=i.input.val(),i._state===V&&(i._state=T),i._toggleCloseVisibility(),i._refreshFloatingLabel()})))},_hideBusy:function(){var e=this;clearTimeout(e._busy),e._arrowIcon.removeClass("k-i-loading k-input-loading-icon"),e._focused.attr("aria-busy",!1),e._busy=null,e._toggleCloseVisibility()},_click:function(e){var t=this,i=e.item,n=t.listView.dataItemByIndex(t.listView.getElementIndex(i)),s=!0;e.preventDefault(),n&&((s=t._value(n)!==l.unifyType(t.value(),typeof t._value(n)))||t.input.val(t._text(n))),s&&t.trigger("select",{dataItem:n,item:i})?t.close():(t._userTriggered=!0,t._select(i).done((function(){t._blur()})))},_syncValueAndText:function(){return this.options.syncValueAndText},_inputValue:function(){return this.text()},_searchByWord:function(e){var i=this,n=i.options,s=i.dataSource,o=n.ignoreCase;if(o&&(e=e.toLowerCase()),i.ul[0].firstChild){this.listView.focus(this._get((function(n){var s=i._text(n);if(s!==t)return(""==(s+="")||""!==e)&&(o&&(s=s.toLowerCase()),0===s.indexOf(e))})));var l=this.listView.focus();l&&(n.suggest&&i.suggest(l),this.open()),this.options.highlightFirst&&!e&&this.listView.focusFirst()}else s.one(x,(function(){s.view()[0]&&i.search(e)})).fetch()},_input:function(){var e,t,i,n=this,s=n.element.removeClass("k-input-inner")[0],l=s.accessKey,a=n.wrapper,r="input.k-input-inner",u=s.name||"",p=n.options;u&&(u='name="'+u+'_input" '),(e=a.find(r))[0]||(i=o.renderButton('<button type="button" class="k-input-button" aria-label="expand combobox"></button>',{icon:"caret-alt-down",size:p.size,fillMode:p.fillMode,shape:"none",rounded:"none"}),a.append("<input "+u+'class="k-input-inner" type="text" autocomplete="off"/>').append(i).append(n.element),e=a.find(r)),e[0].style.cssText=s.style.cssText,e[0].title=s.title,(t=parseInt(this.element.prop("maxlength")||this.element.attr("maxlength"),10))>-1&&(e[0].maxLength=t),e.addClass(s.className).css({width:"",height:s.style.height,position:""}).attr({role:"combobox","aria-expanded":!1}).show(),c&&e.attr("placeholder",n.options.placeholder),l&&(s.accessKey="",e[0].accessKey=l),n._focused=n.input=e,n._arrow=a.find(".k-input-button").attr({role:"button",tabIndex:-1}),n._arrowIcon=n._arrow.find(".k-icon, .k-svg-icon")},_clearButton:function(){l.fn._clearButton.call(this),this.options.clearButton&&(this._clear.insertAfter(this.input),this.wrapper.addClass("k-combobox-clearable"))},_keydown:function(e){var t=this,i=e.keyCode,n=t.options.dataTextField||"text",s=i>=112&&i<=135,o=B.indexOf(i)>-1;if(t._last=i,clearTimeout(t._typingTimeout),t._typingTimeout=null,i===d.HOME)t._firstItem();else if(i===d.END)t._lastItem();else if(i===d.ENTER||i===d.TAB&&t.popup.visible()){var a=t.listView.focus(),r=t.dataItem(),u=!0;if(t.popup.visible()||r&&t.text()===t._text(r)||(a=null),a){if(t.popup.visible()&&e.preventDefault(),(r=t.listView.dataItemByIndex(t.listView.getElementIndex(a)))&&(u=t._value(r)!==l.unifyType(t.value(),typeof t._value(r))),u&&t.trigger("select",{dataItem:r,item:a}))return;t._userTriggered=!0,t._select(a).done((function(){t._blur(),t._valueBeforeCascade=t._old=t.value()}))}else{if((t._syncValueAndText()||t._isSelect)&&(!t.dataItem()||t.dataItem()[n]!==t.input.val())){var c=t.filterInput&&p()===t.filterInput[0]?t.filterInput:t.input;t._accessor(c.val())}t.options.highlightFirst?(t.listView.value(t.input.val()),t._blur()):t._oldText=t.text()}}else i==d.TAB||t._move(e)||o||s||e.ctrlKey?t.options.clearOnEscape&&i===d.ESC&&!t.popup.visible()&&t.text()&&t._clearValue():t._search()},_placeholder:function(e){if(!c){var i,n=this,s=n.input,o=n.options.placeholder;if(o){if(i=n.value(),e===t&&(e=!i),s.toggleClass("k-readonly",e),!e){if(i)return;o=""}s.val(o),o||s[0]!==p()||r(s[0],0,0)}}},_search:function(){var e=this;clearTimeout(e._typingTimeout),e._typingTimeout=setTimeout((function(){var i=e.text();""!==i&&e._prev!==i?(e._prev=i,"none"===e.options.filter&&e.options.virtual&&e.listView.select(-1),e.search(i),e._toggleCloseVisibility()):""===i&&""!==e._prev&&e._prev!==t&&(e._clearValue(),e._open=!0,e._state=C),e._typingTimeout=null}),e.options.delay)},_setText:function(e){this.input.val(e),this._prev=e},_wrapper:function(){var e=this.element,t=e.parent();t.is("span.k-input")||((t=e.hide().wrap("<span />").parent())[0].style.cssText=e[0].style.cssText),this.wrapper=t.addClass("k-input k-combobox").addClass(e[0].className).removeClass("input-validation-error").css("display","")},_clearSelection:function(e,t){var i=e.value(),n=i&&-1===e.selectedIndex;-1==this.selectedIndex&&this.value()||(t||!i||n)&&(this.options.value="",this.value(""))},_preselect:function(e,t){this.input.val(t),this._accessor(e),this._old=this._accessor(),this._oldIndex=this.selectedIndex,this.listView.setValue(e),this._placeholder(),this._initialIndex=null,this._presetValue=!0,this._toggleCloseVisibility()},_clearText:function(){this._old=this.value(),this.text("")},_clearValue:function(){var e=this,t=e.filterInput&&e.filterInput[0]===p()?e.filterInput:e.input;a.fn._clearValue.call(this),t.trigger("focus")}});s.plugin(S),i.cssProperties.registerPrefix("ComboBox","k-input-"),i.cssProperties.registerValues("ComboBox",[{prop:"rounded",values:i.cssProperties.roundedValues.concat([["full","full"]])}])}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.combobox.js.map
