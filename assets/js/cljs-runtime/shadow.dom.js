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
var G__26850 = arguments.length;
switch (G__26850) {
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
var G__26856 = arguments.length;
switch (G__26856) {
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
var G__26863 = arguments.length;
switch (G__26863) {
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
var G__26872 = arguments.length;
switch (G__26872) {
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
var G__26908 = arguments.length;
switch (G__26908) {
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
var G__26917 = arguments.length;
switch (G__26917) {
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
}catch (e26925){if((e26925 instanceof Object)){
var e = e26925;
return console.log("didnt support attachEvent",el,e);
} else {
throw e26925;

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
var seq__26930 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__26931 = null;
var count__26932 = (0);
var i__26933 = (0);
while(true){
if((i__26933 < count__26932)){
var el = chunk__26931.cljs$core$IIndexed$_nth$arity$2(null,i__26933);
var handler_27503__$1 = ((function (seq__26930,chunk__26931,count__26932,i__26933,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__26930,chunk__26931,count__26932,i__26933,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_27503__$1);


var G__27504 = seq__26930;
var G__27505 = chunk__26931;
var G__27506 = count__26932;
var G__27507 = (i__26933 + (1));
seq__26930 = G__27504;
chunk__26931 = G__27505;
count__26932 = G__27506;
i__26933 = G__27507;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26930);
if(temp__5804__auto__){
var seq__26930__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26930__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26930__$1);
var G__27508 = cljs.core.chunk_rest(seq__26930__$1);
var G__27509 = c__5568__auto__;
var G__27510 = cljs.core.count(c__5568__auto__);
var G__27511 = (0);
seq__26930 = G__27508;
chunk__26931 = G__27509;
count__26932 = G__27510;
i__26933 = G__27511;
continue;
} else {
var el = cljs.core.first(seq__26930__$1);
var handler_27512__$1 = ((function (seq__26930,chunk__26931,count__26932,i__26933,el,seq__26930__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__26930,chunk__26931,count__26932,i__26933,el,seq__26930__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_27512__$1);


var G__27513 = cljs.core.next(seq__26930__$1);
var G__27514 = null;
var G__27515 = (0);
var G__27516 = (0);
seq__26930 = G__27513;
chunk__26931 = G__27514;
count__26932 = G__27515;
i__26933 = G__27516;
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
var G__26968 = arguments.length;
switch (G__26968) {
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
var seq__26969 = cljs.core.seq(events);
var chunk__26970 = null;
var count__26971 = (0);
var i__26972 = (0);
while(true){
if((i__26972 < count__26971)){
var vec__26979 = chunk__26970.cljs$core$IIndexed$_nth$arity$2(null,i__26972);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26979,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26979,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__27518 = seq__26969;
var G__27519 = chunk__26970;
var G__27520 = count__26971;
var G__27521 = (i__26972 + (1));
seq__26969 = G__27518;
chunk__26970 = G__27519;
count__26971 = G__27520;
i__26972 = G__27521;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26969);
if(temp__5804__auto__){
var seq__26969__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26969__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26969__$1);
var G__27522 = cljs.core.chunk_rest(seq__26969__$1);
var G__27523 = c__5568__auto__;
var G__27524 = cljs.core.count(c__5568__auto__);
var G__27525 = (0);
seq__26969 = G__27522;
chunk__26970 = G__27523;
count__26971 = G__27524;
i__26972 = G__27525;
continue;
} else {
var vec__26982 = cljs.core.first(seq__26969__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26982,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26982,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__27526 = cljs.core.next(seq__26969__$1);
var G__27527 = null;
var G__27528 = (0);
var G__27529 = (0);
seq__26969 = G__27526;
chunk__26970 = G__27527;
count__26971 = G__27528;
i__26972 = G__27529;
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
var seq__26985 = cljs.core.seq(styles);
var chunk__26986 = null;
var count__26987 = (0);
var i__26988 = (0);
while(true){
if((i__26988 < count__26987)){
var vec__27018 = chunk__26986.cljs$core$IIndexed$_nth$arity$2(null,i__26988);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27018,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27018,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__27530 = seq__26985;
var G__27531 = chunk__26986;
var G__27532 = count__26987;
var G__27533 = (i__26988 + (1));
seq__26985 = G__27530;
chunk__26986 = G__27531;
count__26987 = G__27532;
i__26988 = G__27533;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26985);
if(temp__5804__auto__){
var seq__26985__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26985__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26985__$1);
var G__27534 = cljs.core.chunk_rest(seq__26985__$1);
var G__27535 = c__5568__auto__;
var G__27536 = cljs.core.count(c__5568__auto__);
var G__27537 = (0);
seq__26985 = G__27534;
chunk__26986 = G__27535;
count__26987 = G__27536;
i__26988 = G__27537;
continue;
} else {
var vec__27021 = cljs.core.first(seq__26985__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27021,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27021,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__27538 = cljs.core.next(seq__26985__$1);
var G__27539 = null;
var G__27540 = (0);
var G__27541 = (0);
seq__26985 = G__27538;
chunk__26986 = G__27539;
count__26987 = G__27540;
i__26988 = G__27541;
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
var G__27024_27542 = key;
var G__27024_27543__$1 = (((G__27024_27542 instanceof cljs.core.Keyword))?G__27024_27542.fqn:null);
switch (G__27024_27543__$1) {
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__27050){
var map__27051 = p__27050;
var map__27051__$1 = cljs.core.__destructure_map(map__27051);
var props = map__27051__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27051__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__27052 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27052,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27052,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27052,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__27055 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__27055,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__27055;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__27057 = arguments.length;
switch (G__27057) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__27058){
var vec__27059 = p__27058;
var seq__27060 = cljs.core.seq(vec__27059);
var first__27061 = cljs.core.first(seq__27060);
var seq__27060__$1 = cljs.core.next(seq__27060);
var nn = first__27061;
var first__27061__$1 = cljs.core.first(seq__27060__$1);
var seq__27060__$2 = cljs.core.next(seq__27060__$1);
var np = first__27061__$1;
var nc = seq__27060__$2;
var node = vec__27059;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__27063 = nn;
var G__27064 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__27063,G__27064) : create_fn.call(null,G__27063,G__27064));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__27066 = nn;
var G__27067 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__27066,G__27067) : create_fn.call(null,G__27066,G__27067));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__27069 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27069,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27069,(1),null);
var seq__27073_27547 = cljs.core.seq(node_children);
var chunk__27074_27548 = null;
var count__27075_27549 = (0);
var i__27076_27550 = (0);
while(true){
if((i__27076_27550 < count__27075_27549)){
var child_struct_27551 = chunk__27074_27548.cljs$core$IIndexed$_nth$arity$2(null,i__27076_27550);
var children_27552 = shadow.dom.dom_node(child_struct_27551);
if(cljs.core.seq_QMARK_(children_27552)){
var seq__27096_27553 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_27552));
var chunk__27098_27554 = null;
var count__27099_27555 = (0);
var i__27100_27556 = (0);
while(true){
if((i__27100_27556 < count__27099_27555)){
var child_27557 = chunk__27098_27554.cljs$core$IIndexed$_nth$arity$2(null,i__27100_27556);
if(cljs.core.truth_(child_27557)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_27557);


var G__27558 = seq__27096_27553;
var G__27559 = chunk__27098_27554;
var G__27560 = count__27099_27555;
var G__27561 = (i__27100_27556 + (1));
seq__27096_27553 = G__27558;
chunk__27098_27554 = G__27559;
count__27099_27555 = G__27560;
i__27100_27556 = G__27561;
continue;
} else {
var G__27562 = seq__27096_27553;
var G__27563 = chunk__27098_27554;
var G__27564 = count__27099_27555;
var G__27565 = (i__27100_27556 + (1));
seq__27096_27553 = G__27562;
chunk__27098_27554 = G__27563;
count__27099_27555 = G__27564;
i__27100_27556 = G__27565;
continue;
}
} else {
var temp__5804__auto___27566 = cljs.core.seq(seq__27096_27553);
if(temp__5804__auto___27566){
var seq__27096_27567__$1 = temp__5804__auto___27566;
if(cljs.core.chunked_seq_QMARK_(seq__27096_27567__$1)){
var c__5568__auto___27568 = cljs.core.chunk_first(seq__27096_27567__$1);
var G__27569 = cljs.core.chunk_rest(seq__27096_27567__$1);
var G__27570 = c__5568__auto___27568;
var G__27571 = cljs.core.count(c__5568__auto___27568);
var G__27572 = (0);
seq__27096_27553 = G__27569;
chunk__27098_27554 = G__27570;
count__27099_27555 = G__27571;
i__27100_27556 = G__27572;
continue;
} else {
var child_27573 = cljs.core.first(seq__27096_27567__$1);
if(cljs.core.truth_(child_27573)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_27573);


var G__27574 = cljs.core.next(seq__27096_27567__$1);
var G__27575 = null;
var G__27576 = (0);
var G__27577 = (0);
seq__27096_27553 = G__27574;
chunk__27098_27554 = G__27575;
count__27099_27555 = G__27576;
i__27100_27556 = G__27577;
continue;
} else {
var G__27578 = cljs.core.next(seq__27096_27567__$1);
var G__27579 = null;
var G__27580 = (0);
var G__27581 = (0);
seq__27096_27553 = G__27578;
chunk__27098_27554 = G__27579;
count__27099_27555 = G__27580;
i__27100_27556 = G__27581;
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


var G__27582 = seq__27073_27547;
var G__27583 = chunk__27074_27548;
var G__27584 = count__27075_27549;
var G__27585 = (i__27076_27550 + (1));
seq__27073_27547 = G__27582;
chunk__27074_27548 = G__27583;
count__27075_27549 = G__27584;
i__27076_27550 = G__27585;
continue;
} else {
var temp__5804__auto___27586 = cljs.core.seq(seq__27073_27547);
if(temp__5804__auto___27586){
var seq__27073_27587__$1 = temp__5804__auto___27586;
if(cljs.core.chunked_seq_QMARK_(seq__27073_27587__$1)){
var c__5568__auto___27588 = cljs.core.chunk_first(seq__27073_27587__$1);
var G__27589 = cljs.core.chunk_rest(seq__27073_27587__$1);
var G__27590 = c__5568__auto___27588;
var G__27591 = cljs.core.count(c__5568__auto___27588);
var G__27592 = (0);
seq__27073_27547 = G__27589;
chunk__27074_27548 = G__27590;
count__27075_27549 = G__27591;
i__27076_27550 = G__27592;
continue;
} else {
var child_struct_27593 = cljs.core.first(seq__27073_27587__$1);
var children_27594 = shadow.dom.dom_node(child_struct_27593);
if(cljs.core.seq_QMARK_(children_27594)){
var seq__27105_27595 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_27594));
var chunk__27107_27596 = null;
var count__27108_27597 = (0);
var i__27109_27598 = (0);
while(true){
if((i__27109_27598 < count__27108_27597)){
var child_27599 = chunk__27107_27596.cljs$core$IIndexed$_nth$arity$2(null,i__27109_27598);
if(cljs.core.truth_(child_27599)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_27599);


var G__27600 = seq__27105_27595;
var G__27601 = chunk__27107_27596;
var G__27602 = count__27108_27597;
var G__27603 = (i__27109_27598 + (1));
seq__27105_27595 = G__27600;
chunk__27107_27596 = G__27601;
count__27108_27597 = G__27602;
i__27109_27598 = G__27603;
continue;
} else {
var G__27604 = seq__27105_27595;
var G__27605 = chunk__27107_27596;
var G__27606 = count__27108_27597;
var G__27607 = (i__27109_27598 + (1));
seq__27105_27595 = G__27604;
chunk__27107_27596 = G__27605;
count__27108_27597 = G__27606;
i__27109_27598 = G__27607;
continue;
}
} else {
var temp__5804__auto___27608__$1 = cljs.core.seq(seq__27105_27595);
if(temp__5804__auto___27608__$1){
var seq__27105_27609__$1 = temp__5804__auto___27608__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27105_27609__$1)){
var c__5568__auto___27610 = cljs.core.chunk_first(seq__27105_27609__$1);
var G__27611 = cljs.core.chunk_rest(seq__27105_27609__$1);
var G__27612 = c__5568__auto___27610;
var G__27613 = cljs.core.count(c__5568__auto___27610);
var G__27614 = (0);
seq__27105_27595 = G__27611;
chunk__27107_27596 = G__27612;
count__27108_27597 = G__27613;
i__27109_27598 = G__27614;
continue;
} else {
var child_27615 = cljs.core.first(seq__27105_27609__$1);
if(cljs.core.truth_(child_27615)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_27615);


var G__27616 = cljs.core.next(seq__27105_27609__$1);
var G__27617 = null;
var G__27618 = (0);
var G__27619 = (0);
seq__27105_27595 = G__27616;
chunk__27107_27596 = G__27617;
count__27108_27597 = G__27618;
i__27109_27598 = G__27619;
continue;
} else {
var G__27620 = cljs.core.next(seq__27105_27609__$1);
var G__27621 = null;
var G__27622 = (0);
var G__27623 = (0);
seq__27105_27595 = G__27620;
chunk__27107_27596 = G__27621;
count__27108_27597 = G__27622;
i__27109_27598 = G__27623;
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


var G__27624 = cljs.core.next(seq__27073_27587__$1);
var G__27625 = null;
var G__27626 = (0);
var G__27627 = (0);
seq__27073_27547 = G__27624;
chunk__27074_27548 = G__27625;
count__27075_27549 = G__27626;
i__27076_27550 = G__27627;
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
var seq__27123 = cljs.core.seq(node);
var chunk__27124 = null;
var count__27125 = (0);
var i__27126 = (0);
while(true){
if((i__27126 < count__27125)){
var n = chunk__27124.cljs$core$IIndexed$_nth$arity$2(null,i__27126);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__27628 = seq__27123;
var G__27629 = chunk__27124;
var G__27630 = count__27125;
var G__27631 = (i__27126 + (1));
seq__27123 = G__27628;
chunk__27124 = G__27629;
count__27125 = G__27630;
i__27126 = G__27631;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27123);
if(temp__5804__auto__){
var seq__27123__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27123__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27123__$1);
var G__27632 = cljs.core.chunk_rest(seq__27123__$1);
var G__27633 = c__5568__auto__;
var G__27634 = cljs.core.count(c__5568__auto__);
var G__27635 = (0);
seq__27123 = G__27632;
chunk__27124 = G__27633;
count__27125 = G__27634;
i__27126 = G__27635;
continue;
} else {
var n = cljs.core.first(seq__27123__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__27636 = cljs.core.next(seq__27123__$1);
var G__27637 = null;
var G__27638 = (0);
var G__27639 = (0);
seq__27123 = G__27636;
chunk__27124 = G__27637;
count__27125 = G__27638;
i__27126 = G__27639;
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
var G__27128 = arguments.length;
switch (G__27128) {
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
var G__27132 = arguments.length;
switch (G__27132) {
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
var G__27149 = arguments.length;
switch (G__27149) {
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
var len__5769__auto___27645 = arguments.length;
var i__5770__auto___27646 = (0);
while(true){
if((i__5770__auto___27646 < len__5769__auto___27645)){
args__5775__auto__.push((arguments[i__5770__auto___27646]));

var G__27647 = (i__5770__auto___27646 + (1));
i__5770__auto___27646 = G__27647;
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
var seq__27160_27648 = cljs.core.seq(nodes);
var chunk__27161_27649 = null;
var count__27162_27650 = (0);
var i__27163_27651 = (0);
while(true){
if((i__27163_27651 < count__27162_27650)){
var node_27652 = chunk__27161_27649.cljs$core$IIndexed$_nth$arity$2(null,i__27163_27651);
fragment.appendChild(shadow.dom._to_dom(node_27652));


var G__27653 = seq__27160_27648;
var G__27654 = chunk__27161_27649;
var G__27655 = count__27162_27650;
var G__27656 = (i__27163_27651 + (1));
seq__27160_27648 = G__27653;
chunk__27161_27649 = G__27654;
count__27162_27650 = G__27655;
i__27163_27651 = G__27656;
continue;
} else {
var temp__5804__auto___27657 = cljs.core.seq(seq__27160_27648);
if(temp__5804__auto___27657){
var seq__27160_27658__$1 = temp__5804__auto___27657;
if(cljs.core.chunked_seq_QMARK_(seq__27160_27658__$1)){
var c__5568__auto___27659 = cljs.core.chunk_first(seq__27160_27658__$1);
var G__27660 = cljs.core.chunk_rest(seq__27160_27658__$1);
var G__27661 = c__5568__auto___27659;
var G__27662 = cljs.core.count(c__5568__auto___27659);
var G__27663 = (0);
seq__27160_27648 = G__27660;
chunk__27161_27649 = G__27661;
count__27162_27650 = G__27662;
i__27163_27651 = G__27663;
continue;
} else {
var node_27664 = cljs.core.first(seq__27160_27658__$1);
fragment.appendChild(shadow.dom._to_dom(node_27664));


var G__27665 = cljs.core.next(seq__27160_27658__$1);
var G__27666 = null;
var G__27667 = (0);
var G__27668 = (0);
seq__27160_27648 = G__27665;
chunk__27161_27649 = G__27666;
count__27162_27650 = G__27667;
i__27163_27651 = G__27668;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq27159){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27159));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__27164_27669 = cljs.core.seq(scripts);
var chunk__27165_27670 = null;
var count__27166_27671 = (0);
var i__27167_27672 = (0);
while(true){
if((i__27167_27672 < count__27166_27671)){
var vec__27174_27673 = chunk__27165_27670.cljs$core$IIndexed$_nth$arity$2(null,i__27167_27672);
var script_tag_27674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27174_27673,(0),null);
var script_body_27675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27174_27673,(1),null);
eval(script_body_27675);


var G__27676 = seq__27164_27669;
var G__27677 = chunk__27165_27670;
var G__27678 = count__27166_27671;
var G__27679 = (i__27167_27672 + (1));
seq__27164_27669 = G__27676;
chunk__27165_27670 = G__27677;
count__27166_27671 = G__27678;
i__27167_27672 = G__27679;
continue;
} else {
var temp__5804__auto___27680 = cljs.core.seq(seq__27164_27669);
if(temp__5804__auto___27680){
var seq__27164_27681__$1 = temp__5804__auto___27680;
if(cljs.core.chunked_seq_QMARK_(seq__27164_27681__$1)){
var c__5568__auto___27682 = cljs.core.chunk_first(seq__27164_27681__$1);
var G__27683 = cljs.core.chunk_rest(seq__27164_27681__$1);
var G__27684 = c__5568__auto___27682;
var G__27685 = cljs.core.count(c__5568__auto___27682);
var G__27686 = (0);
seq__27164_27669 = G__27683;
chunk__27165_27670 = G__27684;
count__27166_27671 = G__27685;
i__27167_27672 = G__27686;
continue;
} else {
var vec__27177_27687 = cljs.core.first(seq__27164_27681__$1);
var script_tag_27688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27177_27687,(0),null);
var script_body_27689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27177_27687,(1),null);
eval(script_body_27689);


var G__27690 = cljs.core.next(seq__27164_27681__$1);
var G__27691 = null;
var G__27692 = (0);
var G__27693 = (0);
seq__27164_27669 = G__27690;
chunk__27165_27670 = G__27691;
count__27166_27671 = G__27692;
i__27167_27672 = G__27693;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__27180){
var vec__27181 = p__27180;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27181,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27181,(1),null);
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
var G__27192 = arguments.length;
switch (G__27192) {
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
var seq__27211 = cljs.core.seq(style_keys);
var chunk__27212 = null;
var count__27213 = (0);
var i__27214 = (0);
while(true){
if((i__27214 < count__27213)){
var it = chunk__27212.cljs$core$IIndexed$_nth$arity$2(null,i__27214);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__27695 = seq__27211;
var G__27696 = chunk__27212;
var G__27697 = count__27213;
var G__27698 = (i__27214 + (1));
seq__27211 = G__27695;
chunk__27212 = G__27696;
count__27213 = G__27697;
i__27214 = G__27698;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27211);
if(temp__5804__auto__){
var seq__27211__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27211__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27211__$1);
var G__27699 = cljs.core.chunk_rest(seq__27211__$1);
var G__27700 = c__5568__auto__;
var G__27701 = cljs.core.count(c__5568__auto__);
var G__27702 = (0);
seq__27211 = G__27699;
chunk__27212 = G__27700;
count__27213 = G__27701;
i__27214 = G__27702;
continue;
} else {
var it = cljs.core.first(seq__27211__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__27703 = cljs.core.next(seq__27211__$1);
var G__27704 = null;
var G__27705 = (0);
var G__27706 = (0);
seq__27211 = G__27703;
chunk__27212 = G__27704;
count__27213 = G__27705;
i__27214 = G__27706;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k27218,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__27222 = k27218;
var G__27222__$1 = (((G__27222 instanceof cljs.core.Keyword))?G__27222.fqn:null);
switch (G__27222__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27218,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__27223){
var vec__27224 = p__27223;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27224,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27224,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27217){
var self__ = this;
var G__27217__$1 = this;
return (new cljs.core.RecordIter((0),G__27217__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27219,other27220){
var self__ = this;
var this27219__$1 = this;
return (((!((other27220 == null)))) && ((((this27219__$1.constructor === other27220.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27219__$1.x,other27220.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27219__$1.y,other27220.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27219__$1.__extmap,other27220.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k27218){
var self__ = this;
var this__5350__auto____$1 = this;
var G__27240 = k27218;
var G__27240__$1 = (((G__27240 instanceof cljs.core.Keyword))?G__27240.fqn:null);
switch (G__27240__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k27218);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__27217){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__27244 = cljs.core.keyword_identical_QMARK_;
var expr__27245 = k__5352__auto__;
if(cljs.core.truth_((pred__27244.cljs$core$IFn$_invoke$arity$2 ? pred__27244.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__27245) : pred__27244.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__27245)))){
return (new shadow.dom.Coordinate(G__27217,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27244.cljs$core$IFn$_invoke$arity$2 ? pred__27244.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__27245) : pred__27244.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__27245)))){
return (new shadow.dom.Coordinate(self__.x,G__27217,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__27217),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__27217){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__27217,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__27221){
var extmap__5385__auto__ = (function (){var G__27257 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27221,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__27221)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27257);
} else {
return G__27257;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__27221),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__27221),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k27267,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__27277 = k27267;
var G__27277__$1 = (((G__27277 instanceof cljs.core.Keyword))?G__27277.fqn:null);
switch (G__27277__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27267,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__27279){
var vec__27281 = p__27279;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27281,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27281,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27266){
var self__ = this;
var G__27266__$1 = this;
return (new cljs.core.RecordIter((0),G__27266__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27268,other27269){
var self__ = this;
var this27268__$1 = this;
return (((!((other27269 == null)))) && ((((this27268__$1.constructor === other27269.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27268__$1.w,other27269.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27268__$1.h,other27269.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27268__$1.__extmap,other27269.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k27267){
var self__ = this;
var this__5350__auto____$1 = this;
var G__27301 = k27267;
var G__27301__$1 = (((G__27301 instanceof cljs.core.Keyword))?G__27301.fqn:null);
switch (G__27301__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k27267);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__27266){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__27302 = cljs.core.keyword_identical_QMARK_;
var expr__27303 = k__5352__auto__;
if(cljs.core.truth_((pred__27302.cljs$core$IFn$_invoke$arity$2 ? pred__27302.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__27303) : pred__27302.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__27303)))){
return (new shadow.dom.Size(G__27266,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27302.cljs$core$IFn$_invoke$arity$2 ? pred__27302.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__27303) : pred__27302.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__27303)))){
return (new shadow.dom.Size(self__.w,G__27266,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__27266),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__27266){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__27266,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__27271){
var extmap__5385__auto__ = (function (){var G__27305 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27271,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__27271)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27305);
} else {
return G__27305;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__27271),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__27271),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27326){
var vec__27327 = p__27326;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27327,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27327,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__27333 = arguments.length;
switch (G__27333) {
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
var vec__27361 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27361,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27361,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27361,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__27364_27716 = cljs.core.seq(props);
var chunk__27365_27717 = null;
var count__27366_27718 = (0);
var i__27367_27719 = (0);
while(true){
if((i__27367_27719 < count__27366_27718)){
var vec__27378_27720 = chunk__27365_27717.cljs$core$IIndexed$_nth$arity$2(null,i__27367_27719);
var k_27721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27378_27720,(0),null);
var v_27722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27378_27720,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_27721);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_27721),v_27722);


var G__27723 = seq__27364_27716;
var G__27724 = chunk__27365_27717;
var G__27725 = count__27366_27718;
var G__27726 = (i__27367_27719 + (1));
seq__27364_27716 = G__27723;
chunk__27365_27717 = G__27724;
count__27366_27718 = G__27725;
i__27367_27719 = G__27726;
continue;
} else {
var temp__5804__auto___27727 = cljs.core.seq(seq__27364_27716);
if(temp__5804__auto___27727){
var seq__27364_27728__$1 = temp__5804__auto___27727;
if(cljs.core.chunked_seq_QMARK_(seq__27364_27728__$1)){
var c__5568__auto___27729 = cljs.core.chunk_first(seq__27364_27728__$1);
var G__27730 = cljs.core.chunk_rest(seq__27364_27728__$1);
var G__27731 = c__5568__auto___27729;
var G__27732 = cljs.core.count(c__5568__auto___27729);
var G__27733 = (0);
seq__27364_27716 = G__27730;
chunk__27365_27717 = G__27731;
count__27366_27718 = G__27732;
i__27367_27719 = G__27733;
continue;
} else {
var vec__27385_27734 = cljs.core.first(seq__27364_27728__$1);
var k_27735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27385_27734,(0),null);
var v_27736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27385_27734,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_27735);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_27735),v_27736);


var G__27737 = cljs.core.next(seq__27364_27728__$1);
var G__27738 = null;
var G__27739 = (0);
var G__27740 = (0);
seq__27364_27716 = G__27737;
chunk__27365_27717 = G__27738;
count__27366_27718 = G__27739;
i__27367_27719 = G__27740;
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
var vec__27397 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27397,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27397,(1),null);
var seq__27401_27741 = cljs.core.seq(node_children);
var chunk__27403_27742 = null;
var count__27404_27743 = (0);
var i__27405_27744 = (0);
while(true){
if((i__27405_27744 < count__27404_27743)){
var child_struct_27745 = chunk__27403_27742.cljs$core$IIndexed$_nth$arity$2(null,i__27405_27744);
if((!((child_struct_27745 == null)))){
if(typeof child_struct_27745 === 'string'){
var text_27746 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_27746),child_struct_27745].join(''));
} else {
var children_27747 = shadow.dom.svg_node(child_struct_27745);
if(cljs.core.seq_QMARK_(children_27747)){
var seq__27442_27748 = cljs.core.seq(children_27747);
var chunk__27444_27749 = null;
var count__27445_27750 = (0);
var i__27446_27751 = (0);
while(true){
if((i__27446_27751 < count__27445_27750)){
var child_27752 = chunk__27444_27749.cljs$core$IIndexed$_nth$arity$2(null,i__27446_27751);
if(cljs.core.truth_(child_27752)){
node.appendChild(child_27752);


var G__27753 = seq__27442_27748;
var G__27754 = chunk__27444_27749;
var G__27755 = count__27445_27750;
var G__27756 = (i__27446_27751 + (1));
seq__27442_27748 = G__27753;
chunk__27444_27749 = G__27754;
count__27445_27750 = G__27755;
i__27446_27751 = G__27756;
continue;
} else {
var G__27757 = seq__27442_27748;
var G__27758 = chunk__27444_27749;
var G__27759 = count__27445_27750;
var G__27760 = (i__27446_27751 + (1));
seq__27442_27748 = G__27757;
chunk__27444_27749 = G__27758;
count__27445_27750 = G__27759;
i__27446_27751 = G__27760;
continue;
}
} else {
var temp__5804__auto___27761 = cljs.core.seq(seq__27442_27748);
if(temp__5804__auto___27761){
var seq__27442_27762__$1 = temp__5804__auto___27761;
if(cljs.core.chunked_seq_QMARK_(seq__27442_27762__$1)){
var c__5568__auto___27763 = cljs.core.chunk_first(seq__27442_27762__$1);
var G__27764 = cljs.core.chunk_rest(seq__27442_27762__$1);
var G__27765 = c__5568__auto___27763;
var G__27766 = cljs.core.count(c__5568__auto___27763);
var G__27767 = (0);
seq__27442_27748 = G__27764;
chunk__27444_27749 = G__27765;
count__27445_27750 = G__27766;
i__27446_27751 = G__27767;
continue;
} else {
var child_27768 = cljs.core.first(seq__27442_27762__$1);
if(cljs.core.truth_(child_27768)){
node.appendChild(child_27768);


var G__27769 = cljs.core.next(seq__27442_27762__$1);
var G__27770 = null;
var G__27771 = (0);
var G__27772 = (0);
seq__27442_27748 = G__27769;
chunk__27444_27749 = G__27770;
count__27445_27750 = G__27771;
i__27446_27751 = G__27772;
continue;
} else {
var G__27773 = cljs.core.next(seq__27442_27762__$1);
var G__27774 = null;
var G__27775 = (0);
var G__27776 = (0);
seq__27442_27748 = G__27773;
chunk__27444_27749 = G__27774;
count__27445_27750 = G__27775;
i__27446_27751 = G__27776;
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


var G__27777 = seq__27401_27741;
var G__27778 = chunk__27403_27742;
var G__27779 = count__27404_27743;
var G__27780 = (i__27405_27744 + (1));
seq__27401_27741 = G__27777;
chunk__27403_27742 = G__27778;
count__27404_27743 = G__27779;
i__27405_27744 = G__27780;
continue;
} else {
var G__27781 = seq__27401_27741;
var G__27782 = chunk__27403_27742;
var G__27783 = count__27404_27743;
var G__27784 = (i__27405_27744 + (1));
seq__27401_27741 = G__27781;
chunk__27403_27742 = G__27782;
count__27404_27743 = G__27783;
i__27405_27744 = G__27784;
continue;
}
} else {
var temp__5804__auto___27785 = cljs.core.seq(seq__27401_27741);
if(temp__5804__auto___27785){
var seq__27401_27786__$1 = temp__5804__auto___27785;
if(cljs.core.chunked_seq_QMARK_(seq__27401_27786__$1)){
var c__5568__auto___27787 = cljs.core.chunk_first(seq__27401_27786__$1);
var G__27788 = cljs.core.chunk_rest(seq__27401_27786__$1);
var G__27789 = c__5568__auto___27787;
var G__27790 = cljs.core.count(c__5568__auto___27787);
var G__27791 = (0);
seq__27401_27741 = G__27788;
chunk__27403_27742 = G__27789;
count__27404_27743 = G__27790;
i__27405_27744 = G__27791;
continue;
} else {
var child_struct_27792 = cljs.core.first(seq__27401_27786__$1);
if((!((child_struct_27792 == null)))){
if(typeof child_struct_27792 === 'string'){
var text_27793 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_27793),child_struct_27792].join(''));
} else {
var children_27794 = shadow.dom.svg_node(child_struct_27792);
if(cljs.core.seq_QMARK_(children_27794)){
var seq__27462_27795 = cljs.core.seq(children_27794);
var chunk__27464_27796 = null;
var count__27465_27797 = (0);
var i__27466_27798 = (0);
while(true){
if((i__27466_27798 < count__27465_27797)){
var child_27799 = chunk__27464_27796.cljs$core$IIndexed$_nth$arity$2(null,i__27466_27798);
if(cljs.core.truth_(child_27799)){
node.appendChild(child_27799);


var G__27800 = seq__27462_27795;
var G__27801 = chunk__27464_27796;
var G__27802 = count__27465_27797;
var G__27803 = (i__27466_27798 + (1));
seq__27462_27795 = G__27800;
chunk__27464_27796 = G__27801;
count__27465_27797 = G__27802;
i__27466_27798 = G__27803;
continue;
} else {
var G__27804 = seq__27462_27795;
var G__27805 = chunk__27464_27796;
var G__27806 = count__27465_27797;
var G__27807 = (i__27466_27798 + (1));
seq__27462_27795 = G__27804;
chunk__27464_27796 = G__27805;
count__27465_27797 = G__27806;
i__27466_27798 = G__27807;
continue;
}
} else {
var temp__5804__auto___27808__$1 = cljs.core.seq(seq__27462_27795);
if(temp__5804__auto___27808__$1){
var seq__27462_27809__$1 = temp__5804__auto___27808__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27462_27809__$1)){
var c__5568__auto___27810 = cljs.core.chunk_first(seq__27462_27809__$1);
var G__27811 = cljs.core.chunk_rest(seq__27462_27809__$1);
var G__27812 = c__5568__auto___27810;
var G__27813 = cljs.core.count(c__5568__auto___27810);
var G__27814 = (0);
seq__27462_27795 = G__27811;
chunk__27464_27796 = G__27812;
count__27465_27797 = G__27813;
i__27466_27798 = G__27814;
continue;
} else {
var child_27815 = cljs.core.first(seq__27462_27809__$1);
if(cljs.core.truth_(child_27815)){
node.appendChild(child_27815);


var G__27816 = cljs.core.next(seq__27462_27809__$1);
var G__27817 = null;
var G__27818 = (0);
var G__27819 = (0);
seq__27462_27795 = G__27816;
chunk__27464_27796 = G__27817;
count__27465_27797 = G__27818;
i__27466_27798 = G__27819;
continue;
} else {
var G__27820 = cljs.core.next(seq__27462_27809__$1);
var G__27821 = null;
var G__27822 = (0);
var G__27823 = (0);
seq__27462_27795 = G__27820;
chunk__27464_27796 = G__27821;
count__27465_27797 = G__27822;
i__27466_27798 = G__27823;
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


var G__27824 = cljs.core.next(seq__27401_27786__$1);
var G__27825 = null;
var G__27826 = (0);
var G__27827 = (0);
seq__27401_27741 = G__27824;
chunk__27403_27742 = G__27825;
count__27404_27743 = G__27826;
i__27405_27744 = G__27827;
continue;
} else {
var G__27828 = cljs.core.next(seq__27401_27786__$1);
var G__27829 = null;
var G__27830 = (0);
var G__27831 = (0);
seq__27401_27741 = G__27828;
chunk__27403_27742 = G__27829;
count__27404_27743 = G__27830;
i__27405_27744 = G__27831;
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
var c__25095__auto___27836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25096__auto__ = (function (){var switch__24913__auto__ = (function (state_27479){
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
var shadow$dom$state_machine__24914__auto__ = null;
var shadow$dom$state_machine__24914__auto____0 = (function (){
var statearr_27482 = [null,null,null,null,null,null,null,null];
(statearr_27482[(0)] = shadow$dom$state_machine__24914__auto__);

(statearr_27482[(1)] = (1));

return statearr_27482;
});
var shadow$dom$state_machine__24914__auto____1 = (function (state_27479){
while(true){
var ret_value__24915__auto__ = (function (){try{while(true){
var result__24916__auto__ = switch__24913__auto__(state_27479);
if(cljs.core.keyword_identical_QMARK_(result__24916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24916__auto__;
}
break;
}
}catch (e27483){var ex__24917__auto__ = e27483;
var statearr_27484_27837 = state_27479;
(statearr_27484_27837[(2)] = ex__24917__auto__);


if(cljs.core.seq((state_27479[(4)]))){
var statearr_27485_27838 = state_27479;
(statearr_27485_27838[(1)] = cljs.core.first((state_27479[(4)])));

} else {
throw ex__24917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27839 = state_27479;
state_27479 = G__27839;
continue;
} else {
return ret_value__24915__auto__;
}
break;
}
});
shadow$dom$state_machine__24914__auto__ = function(state_27479){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__24914__auto____0.call(this);
case 1:
return shadow$dom$state_machine__24914__auto____1.call(this,state_27479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__24914__auto____0;
shadow$dom$state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__24914__auto____1;
return shadow$dom$state_machine__24914__auto__;
})()
})();
var state__25097__auto__ = (function (){var statearr_27486 = f__25096__auto__();
(statearr_27486[(6)] = c__25095__auto___27836);

return statearr_27486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25097__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
