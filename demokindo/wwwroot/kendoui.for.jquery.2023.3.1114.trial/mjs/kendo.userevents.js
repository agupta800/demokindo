/**
 * Kendo UI v2023.3.1114 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";var __meta__={id:"userevents",name:"User Events",category:"framework",depends:["core"],hidden:!0};!function(e,t){var n=window.kendo,i=n.support,o=n.Class,r=n.Observable,s=Date.now,a=e.extend,c=i.mobileOS,u=c&&c.android,h=800,l=i.browser.msie?5:0,p="press",d="hold",v="select",f="start",g="move",_="end",m="cancel",T="tap",y="doubleTap",w="release",k="gesturechange",D="gestureend",E="gesturetap",x={api:0,touch:0,mouse:9,pointer:9},M=!i.touch||i.mouseAndTouchPresent;function b(e,t){var n=e.x.location,i=e.y.location,o=t.x.location,r=t.y.location,s=n-o,a=i-r;return{center:{x:(n+o)/2,y:(i+r)/2},distance:Math.sqrt(s*s+a*a)}}function C(e){var t,n,o,r=[],s=e.originalEvent,a=e.currentTarget,c=0;if(e.api)r.push({id:2,event:e,target:e.target,currentTarget:e.target,location:e,type:"api"});else if(e.type.match(/touch/))for(t=(n=s?s.changedTouches:[]).length;c<t;c++)o=n[c],r.push({location:o,event:e,target:o.target,currentTarget:a,id:o.identifier,type:"touch"});else i.pointers||i.msPointers?r.push({location:s,event:e,target:e.target,currentTarget:a,id:s.pointerId,type:"pointer"}):r.push({id:1,event:e,target:e.target,currentTarget:a,location:e,type:"mouse"});return r}var A=o.extend({init:function(e,t){var n=this;n.axis=e,n._updateLocationData(t),n.startLocation=n.location,n.velocity=n.delta=0,n.timeStamp=s()},move:function(e){var t=this,n=e["page"+t.axis],i=s(),o=i-t.timeStamp||1;!n&&u||(t.delta=n-t.location,t._updateLocationData(e),t.initialDelta=n-t.startLocation,t.velocity=t.delta/o,t.timeStamp=i)},_updateLocationData:function(e){var t=this,n=t.axis;t.location=e["page"+n],t.client=e["client"+n],t.screen=e["screen"+n]}}),S=o.extend({init:function(e,t,n){a(this,{x:new A("X",n.location),y:new A("Y",n.location),type:n.type,useClickAsTap:e.useClickAsTap,threshold:e.threshold||x[n.type],userEvents:e,target:t,currentTarget:n.currentTarget,initialTouch:n.target,id:n.id,pressEvent:n,_clicks:e._clicks,supportDoubleTap:e.supportDoubleTap,_moved:!1,_finished:!1})},press:function(){this._holdTimeout=setTimeout(this._hold.bind(this),this.userEvents.minHold),this._trigger(p,this.pressEvent)},_tap:function(e){var t=this;t.userEvents._clicks++,1==t.userEvents._clicks&&(t._clickTimeout=setTimeout((function(){1==t.userEvents._clicks?t._trigger(T,e):t._trigger(y,e),t.userEvents._clicks=0}),300))},_hold:function(){this._trigger(d,this.pressEvent)},move:function(e){var t=this,n="api"!==e.type&&t.userEvents._shouldNotMove;if(!t._finished&&!n){if(t.x.move(e.location),t.y.move(e.location),!t._moved){if(t._withinIgnoreThreshold())return;if(I.current&&I.current!==t.userEvents)return t.dispose();t._start(e)}t._finished||t._trigger(g,e)}},end:function(e){this.endTime=s(),this._finished||(this._finished=!0,this._trigger(w,e),this._moved?this._trigger(_,e):this.useClickAsTap||(this.supportDoubleTap?this._tap(e):this._trigger(T,e)),clearTimeout(this._holdTimeout),this.dispose())},dispose:function(){var t=this.userEvents.touches;this._finished=!0,this.pressEvent=null,clearTimeout(this._holdTimeout),t.splice(e.inArray(this,t),1)},skip:function(){this.dispose()},cancel:function(){this.dispose()},isMoved:function(){return this._moved},_start:function(e){clearTimeout(this._holdTimeout),this.startTime=s(),this._moved=!0,this._trigger(f,e)},_trigger:function(e,t){var n=this,i=t.event,o={touch:n,x:n.x,y:n.y,target:n.target,event:i};n.userEvents.notify(e,o)&&i.preventDefault()},_withinIgnoreThreshold:function(){var e=this.x.initialDelta,t=this.y.initialDelta;return Math.sqrt(e*e+t*t)<=this.threshold}});function P(e){for(var t=n.eventMap.up.split(" "),i=0,o=t.length;i<o;i++)e(t[i])}var I=r.extend({init:function(t,o){var s,c=this,u=n.guid();if(o=o||{},s=c.filter=o.filter,c.threshold=o.threshold||l,c.minHold=o.minHold||h,c.touches=[],c._maxTouches=o.multiTouch?2:1,c.allowSelection=o.allowSelection,c.captureUpIfMoved=o.captureUpIfMoved,c.useClickAsTap=!o.fastTap&&!i.delayedClick(),c.eventNS=u,c._clicks=0,c.supportDoubleTap=o.supportDoubleTap,t=e(t).handler(c),r.fn.init.call(c),a(c,{element:t,surface:o.global&&M?e(t[0].ownerDocument.documentElement):e(o.surface||t),stopPropagation:o.stopPropagation,pressed:!1}),c.surface.handler(c).on(n.applyEventMap("move",u),"_move").on(n.applyEventMap("up cancel",u),"_end"),t.on(n.applyEventMap("down",u),s,"_start"),c.useClickAsTap&&t.on(n.applyEventMap("click",u),s,"_click"),i.pointers||i.msPointers)if(i.browser.version<11){var x="pinch-zoom double-tap-zoom";t.css("-ms-touch-action",o.touchAction&&"none"!=o.touchAction?x+" "+o.touchAction:x)}else t.css("touch-action",o.touchAction||"none");if(o.preventDragEvent&&t.on(n.applyEventMap("dragstart",u),n.preventDefault),t.on(n.applyEventMap("mousedown",u),s,{root:t},"_select"),c.captureUpIfMoved&&i.eventCapture){var b=c.surface[0],C=c.preventIfMoving.bind(c);P((function(e){b.addEventListener(e,C,!0)}))}c.bind([p,d,T,y,f,g,_,w,m,"gesturestart",k,D,E,v],o)},preventIfMoving:function(e){this._isMoved()&&e.preventDefault()},destroy:function(){var e=this;if(!e._destroyed){if(e._destroyed=!0,e.captureUpIfMoved&&i.eventCapture){var t=e.surface[0];P((function(n){t.removeEventListener(n,e.preventIfMoving)}))}e.element.kendoDestroy(e.eventNS),e.surface.kendoDestroy(e.eventNS),e.element.removeData("handler"),e.surface.removeData("handler"),e._disposeAll(),e.unbind(),delete e.surface,delete e.element,delete e.currentTarget}},capture:function(){I.current=this},cancel:function(){this._disposeAll(),this.trigger(m)},notify:function(e,t){var n=this.touches;if(this._isMultiTouch()){switch(e){case g:e=k;break;case _:e=D;break;case T:e=E}a(t,{touches:n},b(n[0],n[1]))}return this.trigger(e,a(t,{type:e}))},press:function(e,t,n){this._apiCall("_start",e,t,n)},move:function(e,t){this._apiCall("_move",e,t)},end:function(e,t){this._apiCall("_end",e,t)},_isMultiTouch:function(){return this.touches.length>1},_maxTouchesReached:function(){return this.touches.length>=this._maxTouches},_disposeAll:function(){for(var e=this.touches;e.length>0;)e.pop().dispose()},_isMoved:function(){return e.grep(this.touches,(function(e){return e.isMoved()})).length},_select:function(e){this.allowSelection&&!this.trigger(v,{event:e})||e.preventDefault()},_start:function(t){var n,i,o=this,r=0,s=o.filter,a=C(t),c=a.length,u=t.which;if(!(u&&u>1||o._maxTouchesReached()))for(I.current=null,o.currentTarget=t.currentTarget,o.stopPropagation&&t.stopPropagation();r<c&&!o._maxTouchesReached();r++)i=a[r],(n=s?e(i.currentTarget):o.element).length&&(i=new S(o,n,i),o.touches.push(i),i.press(),o._isMultiTouch()&&o.notify("gesturestart",{}))},_move:function(e){this._eachTouch("move",e)},_end:function(e){this._eachTouch("end",e)},_click:function(t){var n={touch:{initialTouch:t.target,target:e(t.currentTarget),endTime:s(),x:{location:t.pageX,client:t.clientX},y:{location:t.pageY,client:t.clientY}},x:t.pageX,y:t.pageY,target:e(t.currentTarget),event:t,type:"tap"};this.trigger("tap",n)&&t.preventDefault()},_eachTouch:function(e,t){var n,i,o,r,s={},a=C(t),c=this.touches;for(n=0;n<c.length;n++)s[(i=c[n]).id]=i;for(n=0;n<a.length;n++)(r=s[(o=a[n]).id])&&r[e](o)},_apiCall:function(t,n,i,o){this[t]({api:!0,pageX:n,pageY:i,clientX:n,clientY:i,target:e(o||this.element)[0],stopPropagation:e.noop,preventDefault:e.noop})}}),L=r.extend({init:function(t,i){var o,s=this,c=n.guid();i=i||{},o=s.filter=i.filter,s.touches=[],s._maxTouches=1,s.eventNS=c,s._downStarted=0,t=e(t).handler(s),r.fn.init.call(s),a(s,{element:t,surface:i.global&&M?e(t[0].ownerDocument.documentElement):e(i.surface||t),stopPropagation:i.stopPropagation,pressed:!1}),s.surface.handler(s).on(n.applyEventMap("move",c),"_move").on(n.applyEventMap("cancel up",c),"cancel"),t.on(n.applyEventMap("down",c),o,"_down").on(n.applyEventMap("up",c),o,"_up"),s.bind([f,g,_,d,m,v],i)},_down:function(e){e.which&&e.which>1?this.cancel():(this._downStarted=(new Date).getTime(),this._downTarget=e.target)},_up:function(e){var t=(new Date).getTime(),n=e.target;(!e.which||1===e.which)&&t<this._downStarted+300&&n===this._downTarget?(this.touches&&this.touches.length>0?this._end(e):this._start(e),this._preventCancel=!0):this.cancel(),this._downStarted=0,this._downTarget=null},destroy:function(){var e=this;e._destroyed||(e._destroyed=!0,e.element.kendoDestroy(e.eventNS),e.surface.kendoDestroy(e.eventNS),e.element.removeData("handler"),e.surface.removeData("handler"),e._disposeAll(),e.unbind(),delete e.surface,delete e.element,delete e.currentTarget)},capture:function(){L.current=this},cancel:function(){this._preventCancel?this._preventCancel=!1:this.touches&&this.touches.length>0&&(this._disposeAll(),this.trigger(m))},notify:function(e,t){return t.clickMoveClick=!0,this.trigger(e,a(t,{type:e}))},_maxTouchesReached:function(){return this.touches.length>=this._maxTouches},_disposeAll:function(){for(var e=this.touches;e.length>0;)e.pop().dispose()},_start:function(t){var n,i,o=this,r=0,s=o.filter,a=C(t),c=a.length,u=t.which;if(!(u&&u>1||o._maxTouchesReached()))for(L.current=null,o.currentTarget=t.currentTarget,o.stopPropagation&&t.stopPropagation();r<c&&!o._maxTouchesReached();r++)i=a[r],(n=s?e(i.currentTarget):o.element).length&&(i=new S(o,n,i),o.touches.push(i),i.press(),i._start(i))},_move:function(e){this._eachTouch("move",e)},_end:function(e){this._eachTouch("move",e),this._eachTouch("end",e)},_eachTouch:function(e,t){var n,i,o,r,s={},a=C(t),c=this.touches;for(n=0;n<c.length;n++)s[(i=c[n]).id]=i;for(n=0;n<a.length;n++)(r=s[(o=a[n]).id])&&(r.x.move(o.location),r.y.move(o.location),r[e](o))}});I.defaultThreshold=function(e){l=e},I.minHold=function(e){h=e},n.getTouches=C,n.touchDelta=b,n.UserEvents=I,n.ClickMoveClick=L}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};
//# sourceMappingURL=kendo.userevents.js.map
