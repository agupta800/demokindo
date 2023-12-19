/**
 * Kendo UI v2023.3.1114 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.data.js";import"./kendo.treelist.js";import"./kendo.core.js";import"./kendo.html.button.js";import"./kendo.menu.js";import"./kendo.dialog.js";import"./kendo.form.js";import"./kendo.upload.js";import"./kendo.window.js";!function(t,e){var i=t.extend,a=kendo.data,n=a.Query,r=a.DataSource,s=a.TreeListDataSource,o=a.Model,d=a.ObservableArray,l=o.define({id:"id",parentId:"parentId",fields:{id:{type:"number",editable:!1},parentId:{type:"number",nullable:!0},name:{type:"string",validation:{required:!0}},title:{type:"string"},avatar:{type:"string"}},init:function(t){o.fn.init.call(this,t),this._loaded=!1,this.parentIdField||(this.parentIdField="parentId"),this.nameField||(this.nameField="name"),this.titleField||(this.titleField="title"),this.avatarField||(this.avatarField="avatar"),this.parentId=this.get(this.parentIdField),this.name=this.get(this.nameField),this.title=this.get(this.titleField),this.avatar=this.get(this.avatarField)},accept:function(t){o.fn.accept.call(this,t),this.parentId=this.get(this.parentIdField),this.name=this.get(this.nameField),this.title=this.get(this.titleField),this.avatar=this.get(this.avatarField)},set:function(t,e,i){"parentId"==t&&"parentId"!=this.nameField&&(this[this.parentIdField]=e),"name"==t&&"name"!=this.nameField&&(this[this.nameField]=e),"title"==t&&"title"!=this.titleField&&(this[this.titleField]=e),"avatar"==t&&"avatar"!=this.avatarField&&(this[this.avatarField]=e),o.fn.set.call(this,t,e,i),t==this.parentIdField&&(this.parentId=this.get(this.parentIdField)),t==this.nameField&&(this.name=this.get(this.nameField)),t==this.titleField&&(this.title=this.get(this.titleField)),t==this.avatarField&&(this.avatar=this.get(this.avatarField))},loaded:function(t){if(t===e)return this._loaded;this._loaded=t},shouldSerialize:function(t){return o.fn.shouldSerialize.call(this,t)&&"_loaded"!==t&&"_error"!=t&&"_edit"!=t&&!("parentId"!==this.parentIdField&&"parentId"===t)}});l.parentIdField="parentId",l.nameField="name",l.titleField="title",l.avatarField="avatar",l.define=function(t,i){i===e&&(i=t,t=l);var a=i.parentId||"parentId",n=i.name||"name",r=i.title||"title",s=i.avatar||"avatar";i.parentIdField=a,i.nameField=n,i.titleField=r,i.avatarField=s;var d=o.define(t,i);return a&&(d.parentIdField=a),n&&(d.nameField=n),r&&(d.titleField=r),s&&(d.avatarField=s),d};var h=s.extend({init:function(t){s.fn.init.call(this,i(!0,{},{schema:{modelBase:l,model:l}},t))},groupedItemsTree:function(t){var e=this._childrenMap(this.view()),i=e[this._defaultParentId()]||[],a=new n(i).group({field:t}).toArray();return this._innerGroupedItemsTree(t,a,e)},itemChildren:function(t,i){var a,r,s={field:"parentId",operator:"eq",value:null},o=this._sort&&this._sort.length?this._sort:{};if(r=i?this.view():this.data(),t){if((a=t.get("id"))===e||null===a||""===a)return[];s.value=a}return r=new n(r).filter(s).sort(o).toArray()},itemsTree:function(t,a){var r,s,o,d=[],l=this.itemChildren(t,!0);for(o=0;o<l.length;o++)(r=l[o]).get("expanded")&&(s=this.itemsTree(r,a),(r=i(!0,{},r)).children=s),r=i(!0,{},r),d.push(r);return null!==a&&a!==e&&(d=new n(d).group({field:a}).toArray()),d},prospectParents:function(t,e){var i,a,n,r=[],s=this.itemChildren(e,!1);for(n=0;n<s.length;n++)(i=s[n]).get("id")!==t.get("id")&&(r.push(i),i.get("hasChildren")&&(a=this.prospectParents(t,i),r=r.concat(a)));return r},read:function(t){return r.fn.read.call(this,t).then(this._loadExpanded.bind(this,t))},toggleChildren:function(i,a){var n=t.Deferred().resolve().promise(),r=i.loaded();return i._error&&(i.expanded=!1,i._error=e),void 0===a&&(a=!i.expanded),i.expanded=a,r||(n=this.load(i)),n},_innerGroupedItemsTree:function(t,e,i){var a,r,s,o,d,l,h;for(r=0;r<e.length;r++){for(a=e[r],l=[],!1,s=0;s<a.items.length;s++)h=a.items[s],!a.hasChildren&&h.hasChildren&&(a.hasChildren=!0),h.expanded&&(a.expanded=!0),o=a.items[s].get("id"),l=l.concat(i[o]);a.expanded&&(d=new n(l).group({field:t}).toArray(),a.children=this._innerGroupedItemsTree(t,d,i)),!a.hasChildren&&l.length>0&&(a.hasChildren=!0)}return e},_loadExpanded:function(t){var i,a,n;if(t)for(i=null!==t.id&&t.id!==e?this._byParentId(t.id):this._byParentId(this._defaultParentId()),a=0;a<i.length;a++)(n=i[a]).expanded&&!n.loaded()&&this.toggleChildren(n,!0)}});h.create=function(t){if(Array.isArray(t)?t={data:t}:t instanceof d&&(t={data:t.toJSON()}),!(t instanceof h)&&t instanceof r)throw new Error("Incorrect DataSource type. Only OrgChartDataSource instances are supported");return t instanceof h?t:new h(t)},i(!0,kendo.data,{OrgChartModel:l,OrgChartDataSource:h})}(window.kendo.jQuery),function(t,e){var i=window.kendo,a=i.keys,n=i.htmlEncode,r=t.extend,s=".kendoOrgChartView",o="click",d="collapse",l="expand",h="menu",c="select",u=".",p=" ",g="#",m="tabindex",f="uid",_="px",v="plus",k="minus",I="aria-owns",b="aria-selected",C="k-orgchart",y="k-orgchart-line",w="k-orgchart-line-v",x="k-orgchart-line-h",S="k-orgchart-line-v-top",F="k-orgchart-group",E="k-orgchart-group-v",T="k-orgchart-group-h",D="k-orgchart-node-group",H="k-orgchart-node-group-container",P="k-orgchart-node-container",j="k-orgchart-node",$="k-orgchart-card",O="k-orgchart-card-menu",L="k-orgchart-button",W="k-focus",N=".k-i-plus,.k-svg-i-plus",q="k-vstack",G="k-hstack",B=({label:t})=>`<div role="tree" aria-orientation="horizontal" aria-label="${n(t)}" class="k-orgchart-group k-orgchart-level-1 k-pos-absolute k-hstack k-justify-content-center"></div>`,A=({guid:t,level:e})=>`<div role="group" id="${n(t)}" class="k-orgchart-level-${n(e)} k-orgchart-group k-pos-absolute k-justify-content-around"></div>`,M=({hasChildren:t,guid:e,expanded:i,level:a})=>{var r='<div role="treeitem" ';return t&&e&&(r+=`aria-owns=${n(e)} `,r+=i?'aria-expanded="true" ':'aria-expanded="false" '),r+=`aria-keyshortcuts="Enter" aria-level="${n(a)}" aria-selected="false" class="k-orgchart-node-group-container">`},R=({label:t,buttonSign:e})=>i.html.renderButton(`<button aria-label="${n(t)}" tabindex="-1" class="k-orgchart-button"></button>`,{icon:n(e)}),V=({color:t,avatar:e,name:a,title:r,editable:s,menuLabel:o})=>{var d=`<div class="k-card-body k-hstack" ${i.attr("style-border-color")}="${n(t)}">`;return e&&(d+=`<div class="k-avatar k-avatar-solid-primary k-avatar-solid k-avatar-lg k-rounded-full"><span class="k-avatar-image"><img alt="${n(a)}" src="${n(e)}"></span></div>`),d+=`<div class="k-vstack k-card-title-wrap"><div class="k-card-title k-text-ellipsis">${n(a)}</div>`,r&&(d+=`<span class="k-spacer"></span><div class="k-card-subtitle k-text-ellipsis">${n(r)}</div>`),d+="</div>",s&&(d+='<span class="k-spacer"></span><div class="k-card-body-actions">'+i.html.renderButton(`<button class="k-orgchart-card-menu" role="button" aria-label="${n(o)}" tabindex="-1"></button>`,{icon:"more-vertical",fillMode:"flat"})+"</div>"),d+="</div>"},U=({uid:t,guid:e,hasChildren:i,expanded:a,cssClass:r,level:s})=>{var o=`<div role="treeitem" data-uid="${n(t)}" `;return i&&e&&(o+=`aria-owns=${n(e)} `,o+=a?'aria-expanded="true" ':'aria-expanded="false" '),o+='class="k-orgchart-card k-card ',r&&(o+=`${n(r)}`),o+=`" aria-keyshortcuts="Enter" aria-level="${n(s)}" aria-selected="false"></div>`},z=({uid:t,level:e,cssClass:i})=>`<div role="treeitem" data-uid="${n(t)}" aria-level="${n(e)}" aria-selected="false" aria-keyshortcuts="Enter" class="k-orgchart-card k-card ${i?n(i):""}"></div>`,Q=i.Observable.extend({init:function(t,e){this.element=t,this.options=e||{},i.Observable.fn.init.call(this),this._attachEvents()},events:[d,l,c,h],destroy:function(){i.ui.Widget.fn.destroy.call(this),this.element.off(s)},collapse:function(){return!1},expand:function(){return!1},jqueryGroupElement:function(t){if(t){var e=this._processItem(t);return e.hasClass(H)||(e=e.closest(u+H)),e&&e.length?e:null}},jqueryItemElement:function(t){if(t){var e=this._processItem(t);return e.hasClass($)||(e=e.closest(u+$)),e&&e.length?e:null}},refresh:function(){this._cacheFocused(),this._clearContent(),this._generateItemsTree(),this._calculateLevels(),this._render()},select:function(t){var e=this._getToSelect(t),i=this.element.find("[tabindex=0]");e&&(i.removeAttr(m).removeClass(W).attr(b,!1),e.attr(m,"0").addClass(W).trigger("focus").attr(b,!0))},_attachEvents:function(){var t=u+$+","+u+H;this.element.on("keydown"+s,t,this._onKeyDown.bind(this)).on(o+s,t,this._onSelect.bind(this)).on(o+s,u+L,this._onButtonClick.bind(this)).on("focus"+s,t,this._onFocus.bind(this)).on("blur"+s,u+W,this._onBlur.bind(this))},_cacheFocused:function(){var t=this.element.find("[tabindex='0']"),e=this._dataItems(t);t.length&&e&&e.length&&!this._idTabIndex&&(this._idTabIndex=e[0].get("id"),t.hasClass(W)?this._shouldRestoreSelection=!0:this._shouldRestoreSelection=!1)},_calculateDimensions:function(){var t=this.element.find(u+this._selector).first();this._buttonHeight||(this._buttonHeight=this.element.find(u+L).first().outerHeight()),this._spacing||(this._spacing=this.element.find(u+w).first().outerHeight()),this._itemWidth||(this._itemWidth=this._calculateItemWidth()),this._itemHeight||(this._itemHeight=t.outerHeight(!0))},_calculateItemWidth:function(){return!1},_calculateLevel:function(){return!1},_calculateLevels:function(){return!1},_clearContent:function(){this.element.empty()},_dataItem:function(t){var e=this.jqueryItemElement(t);if(e&&e.data(f))return this.dataSource.getByUid(e.data(f))},_dataItems:function(){return!1},_generateItemsTree:function(){return!1},_getToSelect:function(){return!1},_groupIsVertical:function(){return!1},_keyCollapse:function(){return!1},_keyExpand:function(){return!1},_keyNext:function(){return!1},_keyPrev:function(){return!1},_keyEnter:function(){return!1},_keyEscape:function(){return!1},_keyEnd:function(){var t=this.element.find(u+$).last();this.element.find("[tabindex=0]")[0]!==t[0]&&this.trigger(c,{item:t,dataItems:[this._dataItem(t)]})},_keyHome:function(){var t=this.element.find(u+$).first();this.element.find("[tabindex=0]")[0]!==t[0]&&this.trigger(c,{item:t,dataItems:[this._dataItem(t)]})},_onBlur:function(){this.element.find(u+W).removeClass(W)},_onKeyDown:function(t){var e=t.keyCode,n=this.element.find("[tabindex=0]"),r=i.support.isRtl(this.element),s=r?[a.LEFT]:[a.RIGHT],o=r?[a.RIGHT]:[a.LEFT],d=a.DOWN,l=a.UP;n&&(this._groupIsVertical(n)&&(s.push(a.DOWN),o.push(a.UP)),e===a.HOME?this._keyHome():e===a.END?this._keyEnd():s.indexOf(e)>-1?(t.preventDefault(),t.stopPropagation(),this._keyNext(n)):o.indexOf(e)>-1?(t.preventDefault(),t.stopPropagation(),this._keyPrev(n)):e===d?(t.preventDefault(),t.stopPropagation(),this._keyExpand(n)):e===l?(t.preventDefault(),t.stopPropagation(),this._keyCollapse(n)):e===a.ENTER?this._keyEnter(n):e===a.ESC&&this._keyEscape(n))},_onButtonClick:function(e){var i,a=this,n=t(e.currentTarget),r=n.find(N).length>0,s=n.siblings(u+this._selector),o=this._dataItems(s);if(r){if(a.trigger(l,{item:s,dataItems:o}))return}else if(a.trigger(d,{item:s,dataItems:o}))return;for(i=0;i<o.length;i++)a.dataSource.toggleChildren(o[i],r).then(this.refresh.bind(this))},_onFocus:function(){return!1},_onSelect:function(){return!1},_orientation:function(){return!1},_processItem:function(e){var a;return"string"===t.type(e)?a=this.element.find(e):i.isElement(e)?a=t(e):e instanceof jQuery&&(a=e),a},_render:function(){var e,a=this._itemsTree,n=t(i.template(B)({label:this.options.messages.label})),r=this.element,s=this._total,o=r.closest(u+C).css("padding-left");r.append(n),this._renderGroup(n,a,1,this._total,0),e=s*this._itemWidth+(s-1)*this._spacing,n.width(e),r.width(e+Number(o.split(_)[0])),this._setHeight(),this._restoreSelection()},_renderNode:function(e,a,n,s,o){var d,l,h=this.options.messages,c=this.options.cardsColors||i.getSeriesColors(),u=t('<div class="k-orgchart-node k-vstack k-align-items-center"></div>');return l=t(e(r(!0,{},n,{menuLabel:h.menuLabel,level:s,guid:o,editable:!!this.options.editable,color:c[s-1]||c[0]}))),n.attributes&&l.attr(JSON.parse(JSON.stringify(n.attributes))),d=t(a(r(!0,{},n,{menuLabel:h.menuLabel,level:s,guid:o,editable:!!this.options.editable,color:c[s-1]||c[0]}))),l.append(d),u.append(l),i.applyStylesFromKendoAttributes(u,["border-color"]),u},_renderGroup:function(){return!1},_restoreSelection:function(){var t,e;this._idTabIndex?((e=(t=this.dataSource.get(this._idTabIndex))?this._getToFocus(t):this.element.find(u+this._selector).first()).attr(m,"0"),this._idTabIndex=null):(e=this.element.find(u+this._selector).first()).attr(m,"0"),this._shouldRestoreSelection&&(this._shouldRestoreSelection=!1,this._preventTriggerSelect=!0,e.trigger("focus"),e.addClass(W))},_setHeight:function(){var e,i=this._selector,a=this.element.find(u+L+","+u+i),n=Number.MAX_VALUE,r=0;this._calculateDimensions(),e=this._buttonHeight,this.element.find(u+S).height(this._spacing+e/2),a.each((function(e,i){var a=t(i).offset().top,s=a+t(i).outerHeight(!0);a<n&&(n=a),s>r&&(r=s)})),this.element.height(r-n)}}),K=Q.extend({init:function(t,e){Q.fn.init.call(this,t,e),this._selector=$},collapse:function(t){var e=this.jqueryItemElement(t);e&&this.dataSource.toggleChildren(this._dataItem(e),!1).then(this.refresh.bind(this))},expand:function(t){var e=this.jqueryItemElement(t);e&&this.dataSource.toggleChildren(this._dataItem(e),!0).then(this.refresh.bind(this))},_calculateItemWidth:function(){return this.element.find(u+this._selector).first().outerWidth(!0)},_calculateLevel:function(t,e){var i,a,n,r=t.length,s=this._maxColumnsPerLevel,o=!1,d=!1;for((!s[e]||s[e]<r)&&(i=s[e],d=!0,s[e]=r),a=0;a<r;a++)(n=t[a]).hasChildren&&(o=!0,n.expanded&&this._calculateLevel(n.children,e+1));!o&&d&&e>0&&(d=!1,s[e]=i||1)},_calculateLevels:function(){var t,e=this._itemsTree,i=this._maxColumnsPerLevel=[],a=1;for(this._calculateLevel(e,0),t=0;t<i.length;t++)a*=i[t];this._total=a},_dataItems:function(t){var e=this.dataSource.getByUid(t.data(f));return e?[e]:null},_generateItemsTree:function(){this._itemsTree=this.dataSource.itemsTree()},_getToFocus:function(t){return this.element.find("[data-uid='"+t.get(f)+"']")},_getToSelect:function(t){return this.jqueryItemElement(t)},_groupIsVertical:function(t){return t.closest(u+F).hasClass(E)},_keyCollapse:function(t){var e,i,a=this._dataItem(t);a.expanded?this.trigger(d,{item:t,dataItems:[a]})||this.collapse(t):a.parentId&&(e=this.dataSource.get(a.parentId).get(f),i=this.element.find("[data-uid='"+e+"']"),this.trigger(c,{item:i,dataItems:[this._dataItem(i)]}))},_keyEnter:function(t){t.find(u+O).length>0&&this.trigger(h,t)},_keyExpand:function(t){var e,i=this._dataItem(t),a=this.element.find(g+t.attr(I));i.hasChildren&&(i.expanded?(e=a.find(u+this._selector).first(),this.trigger(c,{item:e,dataItems:[this._dataItem(e)]})):this.trigger(l,{item:t,dataItems:[i]})||this.expand(t))},_keyNext:function(t){var e=this._dataItem(t),i=t.parent().next(u+j).find(u+$),a=this.element.find(g+t.attr(I));!i.length&&e.hasChildren&&e.expanded&&(i=a.find(u+$).first()),0===i.length||i.hasClass(W)||this.trigger(c,{item:i,dataItems:[this._dataItem(i)]})},_keyPrev:function(t){var e,i=this._dataItem(t),a=t.parent().prev(u+j).find(u+$);!a.length&&i.parentId&&(e=this.dataSource.get(i.parentId).get(f),a=this.element.find("[data-uid='"+e+"']")),0===a.length||a.hasClass(W)||this.trigger(c,{item:a,dataItems:[this._dataItem(a)]})},_onFocus:function(e){var i=t(e.currentTarget),a=t(e.target);if(this._preventTriggerSelect)return e.stopPropagation(),void(this._preventTriggerSelect=!1);if(a.hasClass(O)){if(a.closest("[tabindex='0']").length>0)return void e.stopPropagation();this._preventTriggerSelect=!0}i.hasClass($)||(i=i.closest(u+$)),i.hasClass(W)||this.trigger(c,{item:i,dataItems:[this._dataItem(i)]})},_onSelect:function(e){var i=t(e.currentTarget),a=i.hasClass($)?i:i.closest(u+$);(t(e.target).hasClass(O)?t(e.target):t(e.target).closest(u+O)).length>0||i.hasClass(W)||this.trigger(c,{item:a,dataItems:[this._dataItem(a)]})},_orientation:function(e,i,a){var n=t("<div>").addClass(y+p+w);a&&i>1?(e.addClass(E+p+q),e.find(u+P).addClass(q),0===e.find(u+L).length||1===e.find(u+$).length?(e.find(u+$).before(n.clone()),e.find(u+j).first().find(u+w).addClass(S)):i>1&&e.find(u+$).first().before(n.clone())):(e.addClass(T+p+G),e.find(u+P).addClass(G),i>1&&e.find(u+$).before(n.clone().addClass(S)))},_renderGroup:function(e,i,a,n,r){var s,o;o=t('<div class="k-orgchart-node-container k-justify-content-around"></div>').css("width","100%"),e.append(o),s=this._renderInner(o,i,a,n,r),this._orientation(e,a,s)},_renderInner:function(e,a,n,r,s){var o,d,l,h,c,g,m,f,I,b=i.template(R),C=i.template(U),S=r/a.length,F=!0,E=t("<div>").addClass(y+p+w),D=t("<div>").addClass(y+p+x),H=this.options.messages;for(I=this.options.template?"function"==typeof this.options.template?this.options.template:i.template(this.options.template):i.template(V),o=0;o<a.length;o++)d=a[o],l=i.guid(),h=this._renderNode(C,I,d,n,l),d.hasChildren&&(h.append(E.clone()),c=t(b({buttonSign:d.expanded?k:v,label:d.expanded?H.collapse:H.expand})),h.append(c)),e.append(h),this._calculateDimensions(),m=this._itemWidth,f=this._spacing,d.hasChildren&&(F=!1,d.expanded&&(g=this._renderInnerGroup(d,S,s,o,n,l))),g&&g.hasClass(T)&&d.expanded&&d.children&&d.children.length>1&&c.after(D.clone().css({width:(S-S/d.children.length)*(m+f)+_,"margin-top":this._buttonHeight/-2+_}));return S>1&&!F&&e.find(u+j).width((S-1)*(f+m)),F},_renderInnerGroup:function(e,a,n,r,s,o){var d,l=this._itemWidth,h=this._spacing,c=a*l+(a-1)*h,u=r*a*l+n,p=i.template(A),g=i.support.isRtl(this.element)?"right":"left",m=s*(this._itemHeight+this._buttonHeight+h)+h*(s-1)-this._buttonHeight/2;return r>0&&(u+=r*a*h),(d=t(p({guid:o,level:s+1}))).css({width:c+_,top:m+_}),d.css(g,u+_),this.element.append(d),this._renderGroup(d,e.children,s+1,a,u),d}}),J=Q.extend({init:function(t,e){Q.fn.init.call(this,t,e),this._selector=H},collapse:function(t){var e,i,a=this.jqueryGroupElement(t);if(a)for(e=this._dataItems(a),i=0;i<e.length;i++)this.dataSource.toggleChildren(e[i],!1).then(this.refresh.bind(this))},expand:function(t){var e,i,a=this.jqueryGroupElement(t);if(a)for(e=this._dataItems(a),i=0;i<e.length;i++)this.dataSource.toggleChildren(e[i],!0).then(this.refresh.bind(this))},_dataItems:function(t){var e,i,a=this.dataSource,n=[];return t.hasClass($)?(e=a.getByUid(t.data(f)))&&n.push(e):t.hasClass(H)&&(this._groupFocused=!0,t.find(u+$).each((function(t,e){(i=a.getByUid(e.getAttribute("data-uid")))&&n.push(i)}))),n},_calculateItemWidth:function(){var t=this.element.find(u+this._selector).first();return this.element.find(u+$).first().outerWidth(!0)+2*Number(t.css("padding-left").split(_)[0])+2*Number(t.css("border-left").split(_)[0])},_calculateLevel:function(t,e){var i,a,n,r=t.length,s=!1,o=0;for(this._maxColumnsPerLevel[e]=this._maxColumnsPerLevel[e]||0,this._maxGroups[e]=this._maxGroups[e]||0,a=0;a<r;a++)(i=(n=t[a]).items.length)>o&&(o=i),(n=t[a]).hasChildren&&(s=!0,n.expanded&&this._calculateLevel(n.children,e+1));r>this._maxGroups[e]&&(this._maxGroups[e]=r),s||(o=1),o>this._maxColumnsPerLevel[e]&&(this._maxColumnsPerLevel[e]=o)},_calculateLevels:function(){var t,e,i=this._itemsTree,a=this._maxColumnsPerLevel=[],n=this._maxGroups=[],r=1;for(this._calculateLevel(i,0),t=a.length-1;t>=0;t--)e=a[t]*n[t],r>a[t]?r*=n[t]:r<e&&(r=e);this._total=r},_generateItemsTree:function(){this._itemsTree=this.dataSource.groupedItemsTree(this.options.groupField)},_getToFocus:function(t){return this._groupFocused?(this._groupFocused=!1,this.element.find("[data-uid='"+t.get(f)+"']").closest(u+H)):this.element.find("[data-uid='"+t.get(f)+"']")},_getToSelect:function(t){return this.jqueryItemElement(t)||this.jqueryGroupElement(t)},_groupIsVertical:function(t){return t.closest(u+P).hasClass(q)},_keyCollapse:function(t){var e,i=[];(i=this._dataItems(t)).some((function(t){return t.expanded}))?(t.hasClass($)&&(t=t.closest(u+H),i=this._dataItems(t)),this.trigger(d,{item:t,dataItems:i})||this.collapse(t)):i[0].parentId&&(e=this.dataSource.get(i[0].parentId).get(f),this.trigger(c,{item:this.element.find("[data-uid='"+e+"']").closest(u+this._selector),dataItems:i}))},_keyEnter:function(t){var e,i=[];t.hasClass($)&&t.find(u+O).length>0?this.trigger(h,t):(e=t.find(u+$).first(),i=this._dataItems(e),this.trigger(c,{item:e,dataItems:i}))},_keyEscape:function(t){if(t.hasClass($)){var e=t.closest(u+H),i=this._dataItems(e);this.trigger(c,{item:e,dataItems:i})}},_keyExpand:function(t){var e,i,a,n=t.attr(I)||t.closest(u+this._selector).attr(I),r=this.element.find(g+n),s=this._dataItems(t);e=s.some((function(t){return t.hasChildren})),e&&(i=s.some((function(t){return t.expanded})),i?(a=r.find(u+this._selector).first(),this.trigger(c,{item:a,dataItems:this._dataItems(a)})):(t.hasClass($)&&(t=t.closest(u+H),s=this._dataItems(t)),this.trigger(l,{item:t,dataItems:s})||this.expand(t)))},_keyNext:function(t){var e,i=this.element.find(g+t.attr(I)),a=this._dataItems(t),n=a.some((function(t){return t.hasChildren})),r=a.some((function(t){return t.expanded}));!(e=t.hasClass($)?t.parent().next(u+j).find(u+$):t.parent().next(u+D).find(u+H)).length&&n&&r&&(e=i.find(u+this._selector).first()),0!==e.length&&this.trigger(c,{item:e,dataItems:this._dataItems(e)})},_keyPrev:function(t){var e,i,a=this._dataItems(t);!(i=t.hasClass($)?t.parent().prev(u+j).find(u+$):t.parent().prev(u+D).find(u+H)).length&&a[0].parentId&&(e=this.dataSource.get(a[0].parentId).get(f),i=this.element.find("[data-uid='"+e+"']").closest(u+this._selector)),0!==i.length&&this.trigger(c,{item:i,dataItems:this._dataItems(i)})},_onFocus:function(e){var i,a,n=t(e.target);if(this._preventTriggerSelect)return e.stopPropagation(),void(this._preventTriggerSelect=!1);if(n.hasClass(O)){if(n.closest("[tabindex='0']").length>0)return void e.stopPropagation();this._preventTriggerSelect=!0}n.hasClass($)||n.hasClass(H)||((a=n.closest(u+$)).length||(a=n.closest(u+H)),n=a),0!==n.length&&(i=this._dataItems(n),n.hasClass(W)||(e.stopPropagation(),this.trigger(c,{item:n,dataItems:i})))},_onSelect:function(e){var i,a,n=t(e.target),r=this.element.find("[tabindex=0]");n.hasClass($)||n.hasClass(H)||((a=n.closest(u+$)).length||(a=n.closest(u+H)),n=a),0!==n.length&&r[0]!==n[0]&&(i=this._dataItems(n),this.trigger(c,{item:n,dataItems:i}))},_orientation:function(e,i,a){var n=t("<div>").addClass(y+p+w+p+S);e.addClass(G),i>1&&e.find(u+H).before(n.clone()),a&&i>1?(e.find(u+P).removeClass(G),e.find(u+P).addClass(q)):e.addClass(T)},_renderChildren:function(e,a,n,r,s,o,d){var l,h,c,u,g,m,f,I=i.template(R),b=i.template(A),C=t("<div>").addClass(y+p+w),S=t("<div>").addClass(y+p+x),F=this.options.messages,E=!0,T=i.support.isRtl(this.element)?"right":"left";return e.hasChildren&&(E=!1,s.append(C.clone()),h=t(I({buttonSign:e.expanded?k:v,label:e.expanded?F.collapse:F.expand})),s.append(h),this._calculateDimensions(),m=this._itemWidth,f=this._spacing,e.expanded&&(g=m*n+(n-1)*f,c=a*n*m+o,u=r*(this._itemHeight+this._buttonHeight+f)+f*(r-1)-this._buttonHeight/2,a>0&&(c+=a*n*f),(l=t(b({guid:d,level:r+1}))).css({width:g+_,top:u+_}),l.css(T,c+_),this.element.append(l),this._renderGroup(l,e.children,r+1,n,c))),l&&e.expanded&&e.children&&e.children.length>1&&h.after(S.clone().css({width:(n-n/e.children.length)*(m+f)+_,"margin-top":this._buttonHeight/-2+_})),E},_renderGroup:function(t,e,a,n,s){var o,d,l,h,c,p,g=!0,m=n/e.length;for(l=0;l<e.length;l++)h=i.guid(),p=e[l],d=(o=this._renderNodesContainer(t,r(!0,{},p,{guid:h,level:a}))).closest(u+D),this._renderItems(o,p.items,a,h),c=this._renderChildren(p,l,m,a,d,s,h),g&&(g=c);var f=this._itemWidth*m+(m-1)*this._spacing;t.find(u+D).width(f),this._orientation(t,a,g)},_renderItems:function(t,e,a,n){var r,s,o,d,l=i.template(z);for(d=this.options.template?"function"==typeof this.options.template?this.options.template:i.template(this.options.template):i.template(V),r=0;r<e.length;r++)s=e[r],o=this._renderNode(l,d,s,a,n),t.append(o)},_renderNodesContainer:function(e,a){var n,r=i.template(M),s=t('<div class="k-orgchart-node-group k-align-items-center k-vstack">'),o=t('<div role="group" class="k-orgchart-node-container k-justify-content-around k-hstack"></div>').css("width","100%"),d=t(r(a));return n="function"==typeof this.options.groupHeaderTemplate?this.options.groupHeaderTemplate:i.template(this.options.groupHeaderTemplate),d.append(n({value:a.value,field:a.field})),d.append(o),s.append(d),e.append(s),o}});i.orgChart={View:Q,SingleView:K,GroupedView:J}}(window.kendo.jQuery);var __meta__={id:"orgchart",name:"OrgChart",category:"web",description:"The OrgChart widget displays hierarchical organizational structure.",depends:["core","menu","dialog","form","upload","window","data","treelist","html.button"]};!function(t,e){var i=window.kendo,a=i.htmlEncode,n=i.ui.DataBoundWidget,r=i.data.OrgChartDataSource,s=i.ui.ContextMenu,o=t.extend,d=Array.isArray,l="cancel",h="change",c="click",u="collapse",p="create",g="dataBinding",m="dataBound",f="delete",_="edit",v="error",k="expand",I="progress",b="save",C="select",y="requestStart",w=".",x="k-orgchart",S="k-orgchart-group",F="k-orgchart-node-group",E="k-orgchart-node",T="k-orgchart-card",D="k-orgchart-card-menu",H="k-focus",P="k-item",j="k-orgchart-avatar-preview",$="k-orgchart-update",O="k-orgchart-cancel",L=({edit:t})=>`<li data-action='edit'>${a(t)}</li>`,W=({create:t})=>`<li data-action='create'>${a(t)}</li>`,N=({destroy:t})=>`<li data-action='destroy'>${a(t)}</li>`,q=({avatar:t,name:e,destroy:n,fileName:r})=>`<div class="k-orgchart-avatar-preview k-hstack k-align-items-center k-pb-lg"><div class="k-avatar k-avatar-solid-primary k-avatar-solid k-avatar-lg k-rounded-full"><span class="k-avatar-image"><img src="${a(t)}" alt="${a(e)}"></span></div><div class="k-px-md">${a(r)}</div>`+i.html.renderButton(`<button aria-label="${a(n)}"></button>`,{icon:"trash",fillMode:"flat"})+"</div>",G=({cancel:t,save:e})=>'<div class="k-edit-buttons">'+i.html.renderButton(`<button class="k-orgchart-update">${a(e)}</button>`,{icon:"save",themeColor:"primary"})+i.html.renderButton(`<button class="k-orgchart-cancel">${a(t)}</button>`,{icon:"cancel-outline"})+"</div>",B=n.extend({init:function(t,e,a){d(e)&&(e={dataSource:e}),e=e||{},n.fn.init.call(this,t,e),a&&(this._events=a),this._wrapper(),this._view(),this._dataSource(),this._contextMenu(),this.options.autoBind&&this.dataSource.fetch(),i.notify(this)},options:{name:"OrgChart",autoBind:!0,cardsColors:null,dataSource:{},editable:{create:!0,destroy:!0,fields:!0,form:{buttonsTemplate:()=>"",orientation:"vertical"},parent:!0},groupField:null,groupHeaderTemplate:({value:t,field:e})=>`<div><div class="k-orgchart-node-group-title">${a(t)}</div><div class="k-orgchart-node-group-subtitle">${a(e)}</div></div>`,template:null,messages:{label:"Org Chart",edit:"Edit",create:"Create",destroy:"Delete",destroyContent:"Are you sure you want to delete this item and all its children?",destroyTitle:"Delete item",cancel:"Cancel",save:"Save",menuLabel:"Edit menu",uploadAvatar:"Upload new avatar",parent:"Parent",name:"Name",title:"Title",none:"--None--",expand:"expand",collapse:"collapse"}},events:[l,h,u,p,g,m,f,_,k,"kendoKeydown",b,C],destroy:function(){this._menu&&this._menu.destroy(),this._editWindow&&this._editWindow.destroy(),this._confirmDestroy&&this._confirmDestroy.destroy(),this.view.destroy(),n.fn.destroy.call(this),this.wrapper.off(".kendoOrgChart")},setDataSource:function(t){this.options.dataSource=t,this._dataSource(),this.options.autoBind&&t.fetch()},setOptions:function(t){n.fn.setOptions.call(this,t)},append:function(t,e){var i=this,a=i.view.jqueryItemElement(e),n=i.dataItem(a);a&&n&&(n.loaded()?(i.dataSource.add(o({},t,{parentId:n.id})),i.dataSource.sync()):i.dataSource.read({id:n.id}).then((function(){i.dataSource.add(o({},t,{parentId:n.id})),i.dataSource.sync()})))},cancelChanges:function(){this.dataSource.hasChanges()&&this.dataSource.cancelChanges()},collapse:function(t){return this.view.collapse(t)},dataItem:function(t){var e=this.view.jqueryItemElement(t);if(e&&e.data("uid"))return this.dataSource.getByUid(e.data("uid"))},delete:function(t){var e=this.view.jqueryItemElement(t);e&&(this.dataSource.remove(this.dataItem(e)),this.dataSource.sync())},edit:function(t){var e=this.view.jqueryItemElement(t),i=this.dataItem(e);e&&i&&this._edit(i)},expand:function(t){return this.view.expand(t)},getCollapsedNodes:function(){return this.wrapper.find("[aria-expanded='false']")},items:function(){return this.wrapper.find(w+T)},parent:function(t){var e,i=this.view.jqueryItemElement(t);if(i)return e=i.closest(w+S).attr("id"),this.wrapper.find("[aria-owns='"+e+"']")},saveChanges:function(){this.dataSource.sync()},select:function(t){var e=this.view._getToSelect(t);return e?this.view.select(e):void 0},_avatarPreview:function(t,e){var a,n,r=this._form,s=t.avatar;r&&(e||(e=s.split("\\").pop().split("/").pop())&&-1!=e.indexOf(".")||(e=t.name),n={name:t.name,avatar:s,fileName:e,destroy:this.options.messages.destroy},(a=r.wrapper).find(w+j).remove(),a.find('[type="file"]').closest(".k-form-field").prepend(i.template(q)(n)),a.find(w+j+" "+".k-button").on(c,(function(){a.find(w+j).remove(),t.set("avatar",null)})))},_contextMenu:function(){var t,e=this.options,i=e.editable,a=e.messages,n={target:this.wrapper,filter:w+D,select:this._onMenuItemClick.bind(this),activate:this._onMenuOpen.bind(this),deactivate:this._onMenuClose.bind(this),showOn:"click",animation:!1};(!0===i||!1!==i&&(i.create||i.destroy||i.fields||i.parent))&&(t=((t,e)=>{var i="<ul>";return!0===e?(i+=L(t),i+=W(t),i+=N(t)):((e.fields||e.parent)&&(i+=L(t)),e.create&&(i+=W(t)),e.destroy&&(i+=N(t))),i})(a,i),this._menu=new s(t,n))},_dataSource:function(){var t=this.dataSource,e=this.options.dataSource;t&&(t.unbind(h,this._dataSourceChangeHandler),t.unbind(v,this._errorHandler),t.unbind(I,this._progressHandler),t.unbind(y,this._requestStartHandler)),this._dataSourceChangeHandler=this._onDataSourceChange.bind(this),this._errorHandler=this._onDataSourceError.bind(this),this._progressHandler=this._progress.bind(this),this._requestStartHandler=this._onDataSourceRequestStart.bind(this),(t=this.dataSource=r.create(e)).bind(h,this._dataSourceChangeHandler),t.bind(v,this._errorHandler),t.bind(I,this._progressHandler),t.bind(y,this._requestStartHandler),this.view.dataSource=t},_destroyItem:function(e){var a=this,n=t("<div></div>"),r=a.options.messages,s=this._confirmDestroy=new i.ui.Confirm(n,{title:r.destroyTitle,content:r.destroyContent,messages:{okText:r.destroy,cancel:r.cancel},show:function(){setTimeout((function(){s.element.trigger("focus")}))}});s.open(),s.result.done((function(){a.trigger(f,{dataItem:e})||(a.dataSource.remove(e),a.dataSource.sync()),a.view._shouldRestoreSelection=!0,a.view._restoreSelection()})),s.result.fail((function(){a.wrapper.find(w+T+"[tabindex=0],"+w+F+"[tabindex=0]").addClass(H).trigger("focus")}))},_edit:function(e){var a,n=this,r=t("<div>"),s=t("<div>"),o=this.options.messages,d=this._formOptions(e);d&&(n._form=new i.ui.Form(r,d),e.avatar&&n._avatarPreview(e),s.append(r),n._editWindow=new i.ui.Window(s,{title:o.edit,width:"380 px",modal:!0,close:function(t){a?a=!1:n.trigger(l,{dataItem:e})?t.preventDefault():n.cancelChanges()},deactivate:function(){n._editWindow.wrapper.off(c),n._editWindow.destroy(),n._editWindow=null,n.view._restoreSelection()}}),s.after(i.template(G)({save:o.save,cancel:o.cancel})),n._editWindow.center().open(),n._editWindow.wrapper.on(c,w+$,(function(){n._form.validate()&&(a=!0,n.trigger(b,{dataItem:e})||(n._editWindow.close(),n.saveChanges()))})),n._editWindow.wrapper.on(c,w+O,(function(){n._editWindow.close()})))},_formOptions:function(t){var e,i,a=this.options,n=a.messages,r=a.editable.form,s=[];return r&&(i=r.items),i&&0!==i.length||!(!0===a.editable||a.editable&&a.editable.parent)||(e=[{id:null,name:n.none}].concat(this.dataSource.prospectParents(t)),s.push({field:"parentId",editor:"DropDownList",label:n.parent,editorOptions:{dataSource:e,dataValueField:"id",dataTextField:"name",valuePrimitive:!0}})),i&&0!==i.length||!(!0===a.editable||a.editable&&a.editable.fields)||(s=s.concat([{field:"name",label:n.name,validation:{required:!0}},{field:"title",label:n.title},{field:"avatar",label:n.uploadAvatar,editor:this._uploadEditor.bind(this,t)}])),r&&delete r.formData,!!(s.length>0||i&&i.length>0)&&o(!0,{},{formData:t,items:s},r)},_onDataSourceChange:function(t){"add"===t.action||"itemchange"===t.action&&this._editWindow||(t.action&&"sync"!==t.action||!this.trigger(g,t)?(this._progress(!0),this.view.refresh(),t.action&&"sync"!==t.action||this.trigger(m),this._progress(!1)):this._progress(!1))},_onDataSourceError:function(){this._progress(!1)},_onDataSourceRequestStart:function(){this.view._cacheFocused()},_onMenuClose:function(){0===t(document.activeElement).closest("[role='alertdialog']").length&&this.wrapper.find("[tabindex='0']").addClass(H).trigger("focus")},_onMenuItemClick:function(e){var i,a=this,n=t(e.target).closest(w+E).find(w+T),r=a.dataItem(n),s=t(e.item).data("action");r&&(s===_?a.trigger(_,{dataItem:r})||a._edit(r):s===p?a.trigger(p,{dataItem:r})||(r.loaded()?(i=a.dataSource.add({parentId:r.id}),a._edit(i)):a.dataSource.read({id:r.id}).then((function(){i=a.dataSource.add({parentId:r.id}),a._edit(i)}))):"destroy"===s&&a._destroyItem(r))},_onMenuOpen:function(){this.view._cacheFocused(),this.wrapper.find(w+H).removeClass(H),this._menu.element.find(w+P).first().trigger("focus")},_openMenu:function(t){this._menu&&this._menu.open(t.find(w+D))},_progress:function(t){i.ui.progress(this.container,t)},_triggerCollapse:function(t){this.trigger(u,{item:t.item,dataItems:t.dataItems})&&t.preventDefault()},_triggerExpand:function(t){this.trigger(k,{item:t.item,dataItems:t.dataItems})&&t.preventDefault()},_triggerSelect:function(t){this.trigger(C,{item:t.item,dataItems:t.dataItems})||(this.view.select(t.item),this.trigger(h,{item:t.item,dataItems:t.dataItems}))},_uploadEditor:function(e,i){var a=this;t('<input type="file">').appendTo(i).kendoUpload({async:!1,multiple:!1,select:function(t){var i=t.files[0],n=i.rawFile,r=new FileReader;i.validationErrors&&i.validationErrors.length>0||n&&(r.onloadend=function(){e.set("avatar",this.result),a._avatarPreview(e,n.name)},r.readAsDataURL(n))},validation:{allowedExtensions:[".gif",".jpg",".png"],maxFileSize:1048576}})},_view:function(){null!==this.options.groupField&&undefined!==this.options.groupField?this.view=new i.orgChart.GroupedView(this.container,this.options):this.view=new i.orgChart.SingleView(this.container,this.options),this.view.bind(C,this._triggerSelect.bind(this)),this.view.bind(k,this._triggerExpand.bind(this)),this.view.bind(u,this._triggerCollapse.bind(this)),this.view.bind("menu",this._openMenu.bind(this))},_wrapper:function(){var e=t("<div class='k-orgchart-container'>");this.wrapper=this.element,this.container=e,this.wrapper.addClass(x),this.wrapper.append(e)}});i.ui.plugin(B)}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.orgchart.js.map
