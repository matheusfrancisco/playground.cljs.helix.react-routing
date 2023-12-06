goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_27488 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_27488(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_27489 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_27489(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__26790 = coll;
var G__26791 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__26790,G__26791) : shadow.dom.lazy_native_coll_seq.call(null,G__26790,G__26791));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__26794 = arguments.length;
switch (G__26794) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__26800 = arguments.length;
switch (G__26800) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__26809 = arguments.length;
switch (G__26809) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__26820 = arguments.length;
switch (G__26820) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__26826 = arguments.length;
switch (G__26826) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__26828 = arguments.length;
switch (G__26828) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e26829){if((e26829 instanceof Object)){
var e = e26829;
return console.log("didnt support attachEvent",el,e);
} else {
throw e26829;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__26830 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__26831 = null;
var count__26832 = (0);
var i__26833 = (0);
while(true){
if((i__26833 < count__26832)){
var el = chunk__26831.cljs$core$IIndexed$_nth$arity$2(null,i__26833);
var handler_27501__$1 = ((function (seq__26830,chunk__26831,count__26832,i__26833,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__26830,chunk__26831,count__26832,i__26833,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_27501__$1);


var G__27502 = seq__26830;
var G__27503 = chunk__26831;
var G__27504 = count__26832;
var G__27505 = (i__26833 + (1));
seq__26830 = G__27502;
chunk__26831 = G__27503;
count__26832 = G__27504;
i__26833 = G__27505;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26830);
if(temp__5804__auto__){
var seq__26830__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26830__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26830__$1);
var G__27506 = cljs.core.chunk_rest(seq__26830__$1);
var G__27507 = c__5568__auto__;
var G__27508 = cljs.core.count(c__5568__auto__);
var G__27509 = (0);
seq__26830 = G__27506;
chunk__26831 = G__27507;
count__26832 = G__27508;
i__26833 = G__27509;
continue;
} else {
var el = cljs.core.first(seq__26830__$1);
var handler_27510__$1 = ((function (seq__26830,chunk__26831,count__26832,i__26833,el,seq__26830__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__26830,chunk__26831,count__26832,i__26833,el,seq__26830__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_27510__$1);


var G__27511 = cljs.core.next(seq__26830__$1);
var G__27512 = null;
var G__27513 = (0);
var G__27514 = (0);
seq__26830 = G__27511;
chunk__26831 = G__27512;
count__26832 = G__27513;
i__26833 = G__27514;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__26850 = arguments.length;
switch (G__26850) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__26861 = cljs.core.seq(events);
var chunk__26862 = null;
var count__26863 = (0);
var i__26864 = (0);
while(true){
if((i__26864 < count__26863)){
var vec__26880 = chunk__26862.cljs$core$IIndexed$_nth$arity$2(null,i__26864);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26880,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26880,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__27516 = seq__26861;
var G__27517 = chunk__26862;
var G__27518 = count__26863;
var G__27519 = (i__26864 + (1));
seq__26861 = G__27516;
chunk__26862 = G__27517;
count__26863 = G__27518;
i__26864 = G__27519;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26861);
if(temp__5804__auto__){
var seq__26861__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26861__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26861__$1);
var G__27520 = cljs.core.chunk_rest(seq__26861__$1);
var G__27521 = c__5568__auto__;
var G__27522 = cljs.core.count(c__5568__auto__);
var G__27523 = (0);
seq__26861 = G__27520;
chunk__26862 = G__27521;
count__26863 = G__27522;
i__26864 = G__27523;
continue;
} else {
var vec__26885 = cljs.core.first(seq__26861__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26885,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26885,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__27524 = cljs.core.next(seq__26861__$1);
var G__27525 = null;
var G__27526 = (0);
var G__27527 = (0);
seq__26861 = G__27524;
chunk__26862 = G__27525;
count__26863 = G__27526;
i__26864 = G__27527;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__26891 = cljs.core.seq(styles);
var chunk__26892 = null;
var count__26893 = (0);
var i__26894 = (0);
while(true){
if((i__26894 < count__26893)){
var vec__26901 = chunk__26892.cljs$core$IIndexed$_nth$arity$2(null,i__26894);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26901,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26901,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__27528 = seq__26891;
var G__27529 = chunk__26892;
var G__27530 = count__26893;
var G__27531 = (i__26894 + (1));
seq__26891 = G__27528;
chunk__26892 = G__27529;
count__26893 = G__27530;
i__26894 = G__27531;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26891);
if(temp__5804__auto__){
var seq__26891__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26891__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26891__$1);
var G__27532 = cljs.core.chunk_rest(seq__26891__$1);
var G__27533 = c__5568__auto__;
var G__27534 = cljs.core.count(c__5568__auto__);
var G__27535 = (0);
seq__26891 = G__27532;
chunk__26892 = G__27533;
count__26893 = G__27534;
i__26894 = G__27535;
continue;
} else {
var vec__26904 = cljs.core.first(seq__26891__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26904,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26904,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__27536 = cljs.core.next(seq__26891__$1);
var G__27537 = null;
var G__27538 = (0);
var G__27539 = (0);
seq__26891 = G__27536;
chunk__26892 = G__27537;
count__26893 = G__27538;
i__26894 = G__27539;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__26907_27540 = key;
var G__26907_27541__$1 = (((G__26907_27540 instanceof cljs.core.Keyword))?G__26907_27540.fqn:null);
switch (G__26907_27541__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_27545 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_27545,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_27545,"aria-");
}
})())){
el.setAttribute(ks_27545,value);
} else {
(el[ks_27545] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__26913){
var map__26915 = p__26913;
var map__26915__$1 = cljs.core.__destructure_map(map__26915);
var props = map__26915__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26915__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__26917 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26917,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26917,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26917,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__26922 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__26922,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__26922;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__26928 = arguments.length;
switch (G__26928) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__26939){
var vec__26940 = p__26939;
var seq__26941 = cljs.core.seq(vec__26940);
var first__26942 = cljs.core.first(seq__26941);
var seq__26941__$1 = cljs.core.next(seq__26941);
var nn = first__26942;
var first__26942__$1 = cljs.core.first(seq__26941__$1);
var seq__26941__$2 = cljs.core.next(seq__26941__$1);
var np = first__26942__$1;
var nc = seq__26941__$2;
var node = vec__26940;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26944 = nn;
var G__26945 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__26944,G__26945) : create_fn.call(null,G__26944,G__26945));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26947 = nn;
var G__26948 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__26947,G__26948) : create_fn.call(null,G__26947,G__26948));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__26949 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26949,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26949,(1),null);
var seq__26953_27547 = cljs.core.seq(node_children);
var chunk__26954_27548 = null;
var count__26955_27549 = (0);
var i__26956_27550 = (0);
while(true){
if((i__26956_27550 < count__26955_27549)){
var child_struct_27551 = chunk__26954_27548.cljs$core$IIndexed$_nth$arity$2(null,i__26956_27550);
var children_27552 = shadow.dom.dom_node(child_struct_27551);
if(cljs.core.seq_QMARK_(children_27552)){
var seq__26987_27553 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_27552));
var chunk__26989_27554 = null;
var count__26990_27555 = (0);
var i__26991_27556 = (0);
while(true){
if((i__26991_27556 < count__26990_27555)){
var child_27557 = chunk__26989_27554.cljs$core$IIndexed$_nth$arity$2(null,i__26991_27556);
if(cljs.core.truth_(child_27557)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_27557);


var G__27558 = seq__26987_27553;
var G__27559 = chunk__26989_27554;
var G__27560 = count__26990_27555;
var G__27561 = (i__26991_27556 + (1));
seq__26987_27553 = G__27558;
chunk__26989_27554 = G__27559;
count__26990_27555 = G__27560;
i__26991_27556 = G__27561;
continue;
} else {
var G__27562 = seq__26987_27553;
var G__27563 = chunk__26989_27554;
var G__27564 = count__26990_27555;
var G__27565 = (i__26991_27556 + (1));
seq__26987_27553 = G__27562;
chunk__26989_27554 = G__27563;
count__26990_27555 = G__27564;
i__26991_27556 = G__27565;
continue;
}
} else {
var temp__5804__auto___27566 = cljs.core.seq(seq__26987_27553);
if(temp__5804__auto___27566){
var seq__26987_27567__$1 = temp__5804__auto___27566;
if(cljs.core.chunked_seq_QMARK_(seq__26987_27567__$1)){
var c__5568__auto___27568 = cljs.core.chunk_first(seq__26987_27567__$1);
var G__27569 = cljs.core.chunk_rest(seq__26987_27567__$1);
var G__27570 = c__5568__auto___27568;
var G__27571 = cljs.core.count(c__5568__auto___27568);
var G__27572 = (0);
seq__26987_27553 = G__27569;
chunk__26989_27554 = G__27570;
count__26990_27555 = G__27571;
i__26991_27556 = G__27572;
continue;
} else {
var child_27573 = cljs.core.first(seq__26987_27567__$1);
if(cljs.core.truth_(child_27573)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_27573);


var G__27574 = cljs.core.next(seq__26987_27567__$1);
var G__27575 = null;
var G__27576 = (0);
var G__27577 = (0);
seq__26987_27553 = G__27574;
chunk__26989_27554 = G__27575;
count__26990_27555 = G__27576;
i__26991_27556 = G__27577;
continue;
} else {
var G__27578 = cljs.core.next(seq__26987_27567__$1);
var G__27579 = null;
var G__27580 = (0);
var G__27581 = (0);
seq__26987_27553 = G__27578;
chunk__26989_27554 = G__27579;
count__26990_27555 = G__27580;
i__26991_27556 = G__27581;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_27552);
}


var G__27582 = seq__26953_27547;
var G__27583 = chunk__26954_27548;
var G__27584 = count__26955_27549;
var G__27585 = (i__26956_27550 + (1));
seq__26953_27547 = G__27582;
chunk__26954_27548 = G__27583;
count__26955_27549 = G__27584;
i__26956_27550 = G__27585;
continue;
} else {
var temp__5804__auto___27586 = cljs.core.seq(seq__26953_27547);
if(temp__5804__auto___27586){
var seq__26953_27587__$1 = temp__5804__auto___27586;
if(cljs.core.chunked_seq_QMARK_(seq__26953_27587__$1)){
var c__5568__auto___27588 = cljs.core.chunk_first(seq__26953_27587__$1);
var G__27589 = cljs.core.chunk_rest(seq__26953_27587__$1);
var G__27590 = c__5568__auto___27588;
var G__27591 = cljs.core.count(c__5568__auto___27588);
var G__27592 = (0);
seq__26953_27547 = G__27589;
chunk__26954_27548 = G__27590;
count__26955_27549 = G__27591;
i__26956_27550 = G__27592;
continue;
} else {
var child_struct_27593 = cljs.core.first(seq__26953_27587__$1);
var children_27594 = shadow.dom.dom_node(child_struct_27593);
if(cljs.core.seq_QMARK_(children_27594)){
var seq__27006_27595 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_27594));
var chunk__27008_27596 = null;
var count__27009_27597 = (0);
var i__27010_27598 = (0);
while(true){
if((i__27010_27598 < count__27009_27597)){
var child_27599 = chunk__27008_27596.cljs$core$IIndexed$_nth$arity$2(null,i__27010_27598);
if(cljs.core.truth_(child_27599)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_27599);


var G__27600 = seq__27006_27595;
var G__27601 = chunk__27008_27596;
var G__27602 = count__27009_27597;
var G__27603 = (i__27010_27598 + (1));
seq__27006_27595 = G__27600;
chunk__27008_27596 = G__27601;
count__27009_27597 = G__27602;
i__27010_27598 = G__27603;
continue;
} else {
var G__27604 = seq__27006_27595;
var G__27605 = chunk__27008_27596;
var G__27606 = count__27009_27597;
var G__27607 = (i__27010_27598 + (1));
seq__27006_27595 = G__27604;
chunk__27008_27596 = G__27605;
count__27009_27597 = G__27606;
i__27010_27598 = G__27607;
continue;
}
} else {
var temp__5804__auto___27608__$1 = cljs.core.seq(seq__27006_27595);
if(temp__5804__auto___27608__$1){
var seq__27006_27609__$1 = temp__5804__auto___27608__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27006_27609__$1)){
var c__5568__auto___27610 = cljs.core.chunk_first(seq__27006_27609__$1);
var G__27611 = cljs.core.chunk_rest(seq__27006_27609__$1);
var G__27612 = c__5568__auto___27610;
var G__27613 = cljs.core.count(c__5568__auto___27610);
var G__27614 = (0);
seq__27006_27595 = G__27611;
chunk__27008_27596 = G__27612;
count__27009_27597 = G__27613;
i__27010_27598 = G__27614;
continue;
} else {
var child_27615 = cljs.core.first(seq__27006_27609__$1);
if(cljs.core.truth_(child_27615)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_27615);


var G__27616 = cljs.core.next(seq__27006_27609__$1);
var G__27617 = null;
var G__27618 = (0);
var G__27619 = (0);
seq__27006_27595 = G__27616;
chunk__27008_27596 = G__27617;
count__27009_27597 = G__27618;
i__27010_27598 = G__27619;
continue;
} else {
var G__27620 = cljs.core.next(seq__27006_27609__$1);
var G__27621 = null;
var G__27622 = (0);
var G__27623 = (0);
seq__27006_27595 = G__27620;
chunk__27008_27596 = G__27621;
count__27009_27597 = G__27622;
i__27010_27598 = G__27623;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_27594);
}


var G__27624 = cljs.core.next(seq__26953_27587__$1);
var G__27625 = null;
var G__27626 = (0);
var G__27627 = (0);
seq__26953_27547 = G__27624;
chunk__26954_27548 = G__27625;
count__26955_27549 = G__27626;
i__26956_27550 = G__27627;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__27031 = cljs.core.seq(node);
var chunk__27032 = null;
var count__27033 = (0);
var i__27034 = (0);
while(true){
if((i__27034 < count__27033)){
var n = chunk__27032.cljs$core$IIndexed$_nth$arity$2(null,i__27034);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__27628 = seq__27031;
var G__27629 = chunk__27032;
var G__27630 = count__27033;
var G__27631 = (i__27034 + (1));
seq__27031 = G__27628;
chunk__27032 = G__27629;
count__27033 = G__27630;
i__27034 = G__27631;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27031);
if(temp__5804__auto__){
var seq__27031__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27031__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27031__$1);
var G__27632 = cljs.core.chunk_rest(seq__27031__$1);
var G__27633 = c__5568__auto__;
var G__27634 = cljs.core.count(c__5568__auto__);
var G__27635 = (0);
seq__27031 = G__27632;
chunk__27032 = G__27633;
count__27033 = G__27634;
i__27034 = G__27635;
continue;
} else {
var n = cljs.core.first(seq__27031__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__27636 = cljs.core.next(seq__27031__$1);
var G__27637 = null;
var G__27638 = (0);
var G__27639 = (0);
seq__27031 = G__27636;
chunk__27032 = G__27637;
count__27033 = G__27638;
i__27034 = G__27639;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__27044 = arguments.length;
switch (G__27044) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__27050 = arguments.length;
switch (G__27050) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__27066 = arguments.length;
switch (G__27066) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27643 = arguments.length;
var i__5770__auto___27644 = (0);
while(true){
if((i__5770__auto___27644 < len__5769__auto___27643)){
args__5775__auto__.push((arguments[i__5770__auto___27644]));

var G__27645 = (i__5770__auto___27644 + (1));
i__5770__auto___27644 = G__27645;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__27092_27646 = cljs.core.seq(nodes);
var chunk__27093_27647 = null;
var count__27094_27648 = (0);
var i__27095_27649 = (0);
while(true){
if((i__27095_27649 < count__27094_27648)){
var node_27650 = chunk__27093_27647.cljs$core$IIndexed$_nth$arity$2(null,i__27095_27649);
fragment.appendChild(shadow.dom._to_dom(node_27650));


var G__27651 = seq__27092_27646;
var G__27652 = chunk__27093_27647;
var G__27653 = count__27094_27648;
var G__27654 = (i__27095_27649 + (1));
seq__27092_27646 = G__27651;
chunk__27093_27647 = G__27652;
count__27094_27648 = G__27653;
i__27095_27649 = G__27654;
continue;
} else {
var temp__5804__auto___27655 = cljs.core.seq(seq__27092_27646);
if(temp__5804__auto___27655){
var seq__27092_27656__$1 = temp__5804__auto___27655;
if(cljs.core.chunked_seq_QMARK_(seq__27092_27656__$1)){
var c__5568__auto___27657 = cljs.core.chunk_first(seq__27092_27656__$1);
var G__27658 = cljs.core.chunk_rest(seq__27092_27656__$1);
var G__27659 = c__5568__auto___27657;
var G__27660 = cljs.core.count(c__5568__auto___27657);
var G__27661 = (0);
seq__27092_27646 = G__27658;
chunk__27093_27647 = G__27659;
count__27094_27648 = G__27660;
i__27095_27649 = G__27661;
continue;
} else {
var node_27662 = cljs.core.first(seq__27092_27656__$1);
fragment.appendChild(shadow.dom._to_dom(node_27662));


var G__27663 = cljs.core.next(seq__27092_27656__$1);
var G__27664 = null;
var G__27665 = (0);
var G__27666 = (0);
seq__27092_27646 = G__27663;
chunk__27093_27647 = G__27664;
count__27094_27648 = G__27665;
i__27095_27649 = G__27666;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq27084){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27084));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__27116_27667 = cljs.core.seq(scripts);
var chunk__27117_27668 = null;
var count__27118_27669 = (0);
var i__27119_27670 = (0);
while(true){
if((i__27119_27670 < count__27118_27669)){
var vec__27132_27671 = chunk__27117_27668.cljs$core$IIndexed$_nth$arity$2(null,i__27119_27670);
var script_tag_27672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27132_27671,(0),null);
var script_body_27673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27132_27671,(1),null);
eval(script_body_27673);


var G__27674 = seq__27116_27667;
var G__27675 = chunk__27117_27668;
var G__27676 = count__27118_27669;
var G__27677 = (i__27119_27670 + (1));
seq__27116_27667 = G__27674;
chunk__27117_27668 = G__27675;
count__27118_27669 = G__27676;
i__27119_27670 = G__27677;
continue;
} else {
var temp__5804__auto___27678 = cljs.core.seq(seq__27116_27667);
if(temp__5804__auto___27678){
var seq__27116_27679__$1 = temp__5804__auto___27678;
if(cljs.core.chunked_seq_QMARK_(seq__27116_27679__$1)){
var c__5568__auto___27680 = cljs.core.chunk_first(seq__27116_27679__$1);
var G__27681 = cljs.core.chunk_rest(seq__27116_27679__$1);
var G__27682 = c__5568__auto___27680;
var G__27683 = cljs.core.count(c__5568__auto___27680);
var G__27684 = (0);
seq__27116_27667 = G__27681;
chunk__27117_27668 = G__27682;
count__27118_27669 = G__27683;
i__27119_27670 = G__27684;
continue;
} else {
var vec__27137_27685 = cljs.core.first(seq__27116_27679__$1);
var script_tag_27686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27137_27685,(0),null);
var script_body_27687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27137_27685,(1),null);
eval(script_body_27687);


var G__27688 = cljs.core.next(seq__27116_27679__$1);
var G__27689 = null;
var G__27690 = (0);
var G__27691 = (0);
seq__27116_27667 = G__27688;
chunk__27117_27668 = G__27689;
count__27118_27669 = G__27690;
i__27119_27670 = G__27691;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__27140){
var vec__27141 = p__27140;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27141,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27141,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__27157 = arguments.length;
switch (G__27157) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__27180 = cljs.core.seq(style_keys);
var chunk__27181 = null;
var count__27182 = (0);
var i__27183 = (0);
while(true){
if((i__27183 < count__27182)){
var it = chunk__27181.cljs$core$IIndexed$_nth$arity$2(null,i__27183);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__27695 = seq__27180;
var G__27696 = chunk__27181;
var G__27697 = count__27182;
var G__27698 = (i__27183 + (1));
seq__27180 = G__27695;
chunk__27181 = G__27696;
count__27182 = G__27697;
i__27183 = G__27698;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27180);
if(temp__5804__auto__){
var seq__27180__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27180__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27180__$1);
var G__27699 = cljs.core.chunk_rest(seq__27180__$1);
var G__27700 = c__5568__auto__;
var G__27701 = cljs.core.count(c__5568__auto__);
var G__27702 = (0);
seq__27180 = G__27699;
chunk__27181 = G__27700;
count__27182 = G__27701;
i__27183 = G__27702;
continue;
} else {
var it = cljs.core.first(seq__27180__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__27703 = cljs.core.next(seq__27180__$1);
var G__27704 = null;
var G__27705 = (0);
var G__27706 = (0);
seq__27180 = G__27703;
chunk__27181 = G__27704;
count__27182 = G__27705;
i__27183 = G__27706;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k27190,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__27211 = k27190;
var G__27211__$1 = (((G__27211 instanceof cljs.core.Keyword))?G__27211.fqn:null);
switch (G__27211__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27190,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__27214){
var vec__27216 = p__27214;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27216,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27216,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27189){
var self__ = this;
var G__27189__$1 = this;
return (new cljs.core.RecordIter((0),G__27189__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27191,other27192){
var self__ = this;
var this27191__$1 = this;
return (((!((other27192 == null)))) && ((((this27191__$1.constructor === other27192.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27191__$1.x,other27192.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27191__$1.y,other27192.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27191__$1.__extmap,other27192.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k27190){
var self__ = this;
var this__5350__auto____$1 = this;
var G__27235 = k27190;
var G__27235__$1 = (((G__27235 instanceof cljs.core.Keyword))?G__27235.fqn:null);
switch (G__27235__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k27190);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__27189){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__27239 = cljs.core.keyword_identical_QMARK_;
var expr__27240 = k__5352__auto__;
if(cljs.core.truth_((pred__27239.cljs$core$IFn$_invoke$arity$2 ? pred__27239.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__27240) : pred__27239.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__27240)))){
return (new shadow.dom.Coordinate(G__27189,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27239.cljs$core$IFn$_invoke$arity$2 ? pred__27239.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__27240) : pred__27239.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__27240)))){
return (new shadow.dom.Coordinate(self__.x,G__27189,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__27189),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__27189){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__27189,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__27194){
var extmap__5385__auto__ = (function (){var G__27256 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27194,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__27194)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27256);
} else {
return G__27256;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__27194),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__27194),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k27268,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__27281 = k27268;
var G__27281__$1 = (((G__27281 instanceof cljs.core.Keyword))?G__27281.fqn:null);
switch (G__27281__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27268,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__27284){
var vec__27285 = p__27284;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27285,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27285,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27267){
var self__ = this;
var G__27267__$1 = this;
return (new cljs.core.RecordIter((0),G__27267__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27269,other27270){
var self__ = this;
var this27269__$1 = this;
return (((!((other27270 == null)))) && ((((this27269__$1.constructor === other27270.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27269__$1.w,other27270.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27269__$1.h,other27270.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27269__$1.__extmap,other27270.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k27268){
var self__ = this;
var this__5350__auto____$1 = this;
var G__27301 = k27268;
var G__27301__$1 = (((G__27301 instanceof cljs.core.Keyword))?G__27301.fqn:null);
switch (G__27301__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k27268);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__27267){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__27302 = cljs.core.keyword_identical_QMARK_;
var expr__27303 = k__5352__auto__;
if(cljs.core.truth_((pred__27302.cljs$core$IFn$_invoke$arity$2 ? pred__27302.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__27303) : pred__27302.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__27303)))){
return (new shadow.dom.Size(G__27267,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27302.cljs$core$IFn$_invoke$arity$2 ? pred__27302.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__27303) : pred__27302.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__27303)))){
return (new shadow.dom.Size(self__.w,G__27267,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__27267),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__27267){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__27267,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__27274){
var extmap__5385__auto__ = (function (){var G__27317 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27274,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__27274)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27317);
} else {
return G__27317;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__27274),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__27274),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__27711 = (i + (1));
var G__27712 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__27711;
ret = G__27712;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27344){
var vec__27345 = p__27344;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27345,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27345,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__27353 = arguments.length;
switch (G__27353) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__27714 = ps;
var G__27715 = (i + (1));
el__$1 = G__27714;
i = G__27715;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__27401 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27401,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27401,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27401,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__27404_27716 = cljs.core.seq(props);
var chunk__27405_27717 = null;
var count__27406_27718 = (0);
var i__27407_27719 = (0);
while(true){
if((i__27407_27719 < count__27406_27718)){
var vec__27414_27720 = chunk__27405_27717.cljs$core$IIndexed$_nth$arity$2(null,i__27407_27719);
var k_27721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27414_27720,(0),null);
var v_27722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27414_27720,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_27721);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_27721),v_27722);


var G__27723 = seq__27404_27716;
var G__27724 = chunk__27405_27717;
var G__27725 = count__27406_27718;
var G__27726 = (i__27407_27719 + (1));
seq__27404_27716 = G__27723;
chunk__27405_27717 = G__27724;
count__27406_27718 = G__27725;
i__27407_27719 = G__27726;
continue;
} else {
var temp__5804__auto___27727 = cljs.core.seq(seq__27404_27716);
if(temp__5804__auto___27727){
var seq__27404_27728__$1 = temp__5804__auto___27727;
if(cljs.core.chunked_seq_QMARK_(seq__27404_27728__$1)){
var c__5568__auto___27729 = cljs.core.chunk_first(seq__27404_27728__$1);
var G__27730 = cljs.core.chunk_rest(seq__27404_27728__$1);
var G__27731 = c__5568__auto___27729;
var G__27732 = cljs.core.count(c__5568__auto___27729);
var G__27733 = (0);
seq__27404_27716 = G__27730;
chunk__27405_27717 = G__27731;
count__27406_27718 = G__27732;
i__27407_27719 = G__27733;
continue;
} else {
var vec__27434_27734 = cljs.core.first(seq__27404_27728__$1);
var k_27735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27434_27734,(0),null);
var v_27736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27434_27734,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_27735);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_27735),v_27736);


var G__27737 = cljs.core.next(seq__27404_27728__$1);
var G__27738 = null;
var G__27739 = (0);
var G__27740 = (0);
seq__27404_27716 = G__27737;
chunk__27405_27717 = G__27738;
count__27406_27718 = G__27739;
i__27407_27719 = G__27740;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__27438 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27438,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27438,(1),null);
var seq__27441_27741 = cljs.core.seq(node_children);
var chunk__27443_27742 = null;
var count__27444_27743 = (0);
var i__27445_27744 = (0);
while(true){
if((i__27445_27744 < count__27444_27743)){
var child_struct_27745 = chunk__27443_27742.cljs$core$IIndexed$_nth$arity$2(null,i__27445_27744);
if((!((child_struct_27745 == null)))){
if(typeof child_struct_27745 === 'string'){
var text_27746 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_27746),child_struct_27745].join(''));
} else {
var children_27747 = shadow.dom.svg_node(child_struct_27745);
if(cljs.core.seq_QMARK_(children_27747)){
var seq__27459_27748 = cljs.core.seq(children_27747);
var chunk__27461_27749 = null;
var count__27462_27750 = (0);
var i__27463_27751 = (0);
while(true){
if((i__27463_27751 < count__27462_27750)){
var child_27752 = chunk__27461_27749.cljs$core$IIndexed$_nth$arity$2(null,i__27463_27751);
if(cljs.core.truth_(child_27752)){
node.appendChild(child_27752);


var G__27753 = seq__27459_27748;
var G__27754 = chunk__27461_27749;
var G__27755 = count__27462_27750;
var G__27756 = (i__27463_27751 + (1));
seq__27459_27748 = G__27753;
chunk__27461_27749 = G__27754;
count__27462_27750 = G__27755;
i__27463_27751 = G__27756;
continue;
} else {
var G__27757 = seq__27459_27748;
var G__27758 = chunk__27461_27749;
var G__27759 = count__27462_27750;
var G__27760 = (i__27463_27751 + (1));
seq__27459_27748 = G__27757;
chunk__27461_27749 = G__27758;
count__27462_27750 = G__27759;
i__27463_27751 = G__27760;
continue;
}
} else {
var temp__5804__auto___27761 = cljs.core.seq(seq__27459_27748);
if(temp__5804__auto___27761){
var seq__27459_27762__$1 = temp__5804__auto___27761;
if(cljs.core.chunked_seq_QMARK_(seq__27459_27762__$1)){
var c__5568__auto___27763 = cljs.core.chunk_first(seq__27459_27762__$1);
var G__27764 = cljs.core.chunk_rest(seq__27459_27762__$1);
var G__27765 = c__5568__auto___27763;
var G__27766 = cljs.core.count(c__5568__auto___27763);
var G__27767 = (0);
seq__27459_27748 = G__27764;
chunk__27461_27749 = G__27765;
count__27462_27750 = G__27766;
i__27463_27751 = G__27767;
continue;
} else {
var child_27768 = cljs.core.first(seq__27459_27762__$1);
if(cljs.core.truth_(child_27768)){
node.appendChild(child_27768);


var G__27769 = cljs.core.next(seq__27459_27762__$1);
var G__27770 = null;
var G__27771 = (0);
var G__27772 = (0);
seq__27459_27748 = G__27769;
chunk__27461_27749 = G__27770;
count__27462_27750 = G__27771;
i__27463_27751 = G__27772;
continue;
} else {
var G__27773 = cljs.core.next(seq__27459_27762__$1);
var G__27774 = null;
var G__27775 = (0);
var G__27776 = (0);
seq__27459_27748 = G__27773;
chunk__27461_27749 = G__27774;
count__27462_27750 = G__27775;
i__27463_27751 = G__27776;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_27747);
}
}


var G__27777 = seq__27441_27741;
var G__27778 = chunk__27443_27742;
var G__27779 = count__27444_27743;
var G__27780 = (i__27445_27744 + (1));
seq__27441_27741 = G__27777;
chunk__27443_27742 = G__27778;
count__27444_27743 = G__27779;
i__27445_27744 = G__27780;
continue;
} else {
var G__27781 = seq__27441_27741;
var G__27782 = chunk__27443_27742;
var G__27783 = count__27444_27743;
var G__27784 = (i__27445_27744 + (1));
seq__27441_27741 = G__27781;
chunk__27443_27742 = G__27782;
count__27444_27743 = G__27783;
i__27445_27744 = G__27784;
continue;
}
} else {
var temp__5804__auto___27785 = cljs.core.seq(seq__27441_27741);
if(temp__5804__auto___27785){
var seq__27441_27786__$1 = temp__5804__auto___27785;
if(cljs.core.chunked_seq_QMARK_(seq__27441_27786__$1)){
var c__5568__auto___27787 = cljs.core.chunk_first(seq__27441_27786__$1);
var G__27788 = cljs.core.chunk_rest(seq__27441_27786__$1);
var G__27789 = c__5568__auto___27787;
var G__27790 = cljs.core.count(c__5568__auto___27787);
var G__27791 = (0);
seq__27441_27741 = G__27788;
chunk__27443_27742 = G__27789;
count__27444_27743 = G__27790;
i__27445_27744 = G__27791;
continue;
} else {
var child_struct_27792 = cljs.core.first(seq__27441_27786__$1);
if((!((child_struct_27792 == null)))){
if(typeof child_struct_27792 === 'string'){
var text_27793 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_27793),child_struct_27792].join(''));
} else {
var children_27794 = shadow.dom.svg_node(child_struct_27792);
if(cljs.core.seq_QMARK_(children_27794)){
var seq__27465_27795 = cljs.core.seq(children_27794);
var chunk__27467_27796 = null;
var count__27468_27797 = (0);
var i__27469_27798 = (0);
while(true){
if((i__27469_27798 < count__27468_27797)){
var child_27799 = chunk__27467_27796.cljs$core$IIndexed$_nth$arity$2(null,i__27469_27798);
if(cljs.core.truth_(child_27799)){
node.appendChild(child_27799);


var G__27800 = seq__27465_27795;
var G__27801 = chunk__27467_27796;
var G__27802 = count__27468_27797;
var G__27803 = (i__27469_27798 + (1));
seq__27465_27795 = G__27800;
chunk__27467_27796 = G__27801;
count__27468_27797 = G__27802;
i__27469_27798 = G__27803;
continue;
} else {
var G__27804 = seq__27465_27795;
var G__27805 = chunk__27467_27796;
var G__27806 = count__27468_27797;
var G__27807 = (i__27469_27798 + (1));
seq__27465_27795 = G__27804;
chunk__27467_27796 = G__27805;
count__27468_27797 = G__27806;
i__27469_27798 = G__27807;
continue;
}
} else {
var temp__5804__auto___27808__$1 = cljs.core.seq(seq__27465_27795);
if(temp__5804__auto___27808__$1){
var seq__27465_27809__$1 = temp__5804__auto___27808__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27465_27809__$1)){
var c__5568__auto___27810 = cljs.core.chunk_first(seq__27465_27809__$1);
var G__27811 = cljs.core.chunk_rest(seq__27465_27809__$1);
var G__27812 = c__5568__auto___27810;
var G__27813 = cljs.core.count(c__5568__auto___27810);
var G__27814 = (0);
seq__27465_27795 = G__27811;
chunk__27467_27796 = G__27812;
count__27468_27797 = G__27813;
i__27469_27798 = G__27814;
continue;
} else {
var child_27815 = cljs.core.first(seq__27465_27809__$1);
if(cljs.core.truth_(child_27815)){
node.appendChild(child_27815);


var G__27816 = cljs.core.next(seq__27465_27809__$1);
var G__27817 = null;
var G__27818 = (0);
var G__27819 = (0);
seq__27465_27795 = G__27816;
chunk__27467_27796 = G__27817;
count__27468_27797 = G__27818;
i__27469_27798 = G__27819;
continue;
} else {
var G__27820 = cljs.core.next(seq__27465_27809__$1);
var G__27821 = null;
var G__27822 = (0);
var G__27823 = (0);
seq__27465_27795 = G__27820;
chunk__27467_27796 = G__27821;
count__27468_27797 = G__27822;
i__27469_27798 = G__27823;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_27794);
}
}


var G__27824 = cljs.core.next(seq__27441_27786__$1);
var G__27825 = null;
var G__27826 = (0);
var G__27827 = (0);
seq__27441_27741 = G__27824;
chunk__27443_27742 = G__27825;
count__27444_27743 = G__27826;
i__27445_27744 = G__27827;
continue;
} else {
var G__27828 = cljs.core.next(seq__27441_27786__$1);
var G__27829 = null;
var G__27830 = (0);
var G__27831 = (0);
seq__27441_27741 = G__27828;
chunk__27443_27742 = G__27829;
count__27444_27743 = G__27830;
i__27445_27744 = G__27831;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27832 = arguments.length;
var i__5770__auto___27833 = (0);
while(true){
if((i__5770__auto___27833 < len__5769__auto___27832)){
args__5775__auto__.push((arguments[i__5770__auto___27833]));

var G__27834 = (i__5770__auto___27833 + (1));
i__5770__auto___27833 = G__27834;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq27471){
var G__27472 = cljs.core.first(seq27471);
var seq27471__$1 = cljs.core.next(seq27471);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27472,seq27471__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__27474 = arguments.length;
switch (G__27474) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__25273__auto___27836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25274__auto__ = (function (){var switch__25184__auto__ = (function (state_27479){
var state_val_27480 = (state_27479[(1)]);
if((state_val_27480 === (1))){
var state_27479__$1 = state_27479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27479__$1,(2),once_or_cleanup);
} else {
if((state_val_27480 === (2))){
var inst_27476 = (state_27479[(2)]);
var inst_27477 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_27479__$1 = (function (){var statearr_27481 = state_27479;
(statearr_27481[(7)] = inst_27476);

return statearr_27481;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27479__$1,inst_27477);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__25185__auto__ = null;
var shadow$dom$state_machine__25185__auto____0 = (function (){
var statearr_27482 = [null,null,null,null,null,null,null,null];
(statearr_27482[(0)] = shadow$dom$state_machine__25185__auto__);

(statearr_27482[(1)] = (1));

return statearr_27482;
});
var shadow$dom$state_machine__25185__auto____1 = (function (state_27479){
while(true){
var ret_value__25186__auto__ = (function (){try{while(true){
var result__25187__auto__ = switch__25184__auto__(state_27479);
if(cljs.core.keyword_identical_QMARK_(result__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25187__auto__;
}
break;
}
}catch (e27483){var ex__25188__auto__ = e27483;
var statearr_27484_27837 = state_27479;
(statearr_27484_27837[(2)] = ex__25188__auto__);


if(cljs.core.seq((state_27479[(4)]))){
var statearr_27485_27838 = state_27479;
(statearr_27485_27838[(1)] = cljs.core.first((state_27479[(4)])));

} else {
throw ex__25188__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27839 = state_27479;
state_27479 = G__27839;
continue;
} else {
return ret_value__25186__auto__;
}
break;
}
});
shadow$dom$state_machine__25185__auto__ = function(state_27479){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__25185__auto____0.call(this);
case 1:
return shadow$dom$state_machine__25185__auto____1.call(this,state_27479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__25185__auto____0;
shadow$dom$state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__25185__auto____1;
return shadow$dom$state_machine__25185__auto__;
})()
})();
var state__25275__auto__ = (function (){var statearr_27486 = f__25274__auto__();
(statearr_27486[(6)] = c__25273__auto___27836);

return statearr_27486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25275__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
