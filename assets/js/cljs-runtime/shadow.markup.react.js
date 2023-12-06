goog.provide('shadow.markup.react');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
shadow.markup.react.for$ = (function shadow$markup$react$for(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30279 = arguments.length;
var i__5770__auto___30280 = (0);
while(true){
if((i__5770__auto___30280 < len__5769__auto___30279)){
args__5775__auto__.push((arguments[i__5770__auto___30280]));

var G__30281 = (i__5770__auto___30280 + (1));
i__5770__auto___30280 = G__30281;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.for$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.for$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("shadow.markup.react/for is a macro",cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.markup.react.for$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.for$.cljs$lang$applyTo = (function (seq30142){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30142));
}));

shadow.markup.react.$ = (function shadow$markup$react$$(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30282 = arguments.length;
var i__5770__auto___30283 = (0);
while(true){
if((i__5770__auto___30283 < len__5769__auto___30282)){
args__5775__auto__.push((arguments[i__5770__auto___30283]));

var G__30284 = (i__5770__auto___30283 + (1));
i__5770__auto___30283 = G__30284;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.markup.react.$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.markup.react.$.cljs$core$IFn$_invoke$arity$variadic = (function (type,args){
return shadow.markup.react.impl.interop.create_element(type,args);
}));

(shadow.markup.react.$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.markup.react.$.cljs$lang$applyTo = (function (seq30143){
var G__30144 = cljs.core.first(seq30143);
var seq30143__$1 = cljs.core.next(seq30143);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30144,seq30143__$1);
}));

shadow.markup.react.with_inner_html = (function shadow$markup$react$with_inner_html(html,props){
var html_30285__$1 = ({"__html": html});
goog.object.set(props,"dangerouslySetInnerHTML",html_30285__$1);

return props;
});
shadow.markup.react.fragment = (function shadow$markup$react$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30286 = arguments.length;
var i__5770__auto___30287 = (0);
while(true){
if((i__5770__auto___30287 < len__5769__auto___30286)){
args__5775__auto__.push((arguments[i__5770__auto___30287]));

var G__30288 = (i__5770__auto___30287 + (1));
i__5770__auto___30287 = G__30288;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (body){
var arr = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(body);
arr.unshift(null);

arr.unshift(module$node_modules$react$index.Fragment);

return module$node_modules$react$index.createElement.apply(null,arr);
}));

(shadow.markup.react.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.fragment.cljs$lang$applyTo = (function (seq30145){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30145));
}));

shadow.markup.react.a = (function shadow$markup$react$a(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30289 = arguments.length;
var i__5770__auto___30290 = (0);
while(true){
if((i__5770__auto___30290 < len__5769__auto___30289)){
args__5775__auto__.push((arguments[i__5770__auto___30290]));

var G__30291 = (i__5770__auto___30290 + (1));
i__5770__auto___30290 = G__30291;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.a.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.a.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("a",args__30135__auto__);
}));

(shadow.markup.react.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.a.cljs$lang$applyTo = (function (seq30146){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30146));
}));


shadow.markup.react.abbr = (function shadow$markup$react$abbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30292 = arguments.length;
var i__5770__auto___30293 = (0);
while(true){
if((i__5770__auto___30293 < len__5769__auto___30292)){
args__5775__auto__.push((arguments[i__5770__auto___30293]));

var G__30294 = (i__5770__auto___30293 + (1));
i__5770__auto___30293 = G__30294;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("abbr",args__30135__auto__);
}));

(shadow.markup.react.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.abbr.cljs$lang$applyTo = (function (seq30147){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30147));
}));


shadow.markup.react.address = (function shadow$markup$react$address(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30295 = arguments.length;
var i__5770__auto___30296 = (0);
while(true){
if((i__5770__auto___30296 < len__5769__auto___30295)){
args__5775__auto__.push((arguments[i__5770__auto___30296]));

var G__30297 = (i__5770__auto___30296 + (1));
i__5770__auto___30296 = G__30297;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.address.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.address.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("address",args__30135__auto__);
}));

(shadow.markup.react.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.address.cljs$lang$applyTo = (function (seq30148){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30148));
}));


shadow.markup.react.area = (function shadow$markup$react$area(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30298 = arguments.length;
var i__5770__auto___30299 = (0);
while(true){
if((i__5770__auto___30299 < len__5769__auto___30298)){
args__5775__auto__.push((arguments[i__5770__auto___30299]));

var G__30300 = (i__5770__auto___30299 + (1));
i__5770__auto___30299 = G__30300;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.area.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.area.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("area",args__30135__auto__);
}));

(shadow.markup.react.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.area.cljs$lang$applyTo = (function (seq30149){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30149));
}));


shadow.markup.react.article = (function shadow$markup$react$article(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30301 = arguments.length;
var i__5770__auto___30302 = (0);
while(true){
if((i__5770__auto___30302 < len__5769__auto___30301)){
args__5775__auto__.push((arguments[i__5770__auto___30302]));

var G__30303 = (i__5770__auto___30302 + (1));
i__5770__auto___30302 = G__30303;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.article.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.article.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("article",args__30135__auto__);
}));

(shadow.markup.react.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.article.cljs$lang$applyTo = (function (seq30150){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30150));
}));


shadow.markup.react.aside = (function shadow$markup$react$aside(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30304 = arguments.length;
var i__5770__auto___30305 = (0);
while(true){
if((i__5770__auto___30305 < len__5769__auto___30304)){
args__5775__auto__.push((arguments[i__5770__auto___30305]));

var G__30306 = (i__5770__auto___30305 + (1));
i__5770__auto___30305 = G__30306;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("aside",args__30135__auto__);
}));

(shadow.markup.react.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.aside.cljs$lang$applyTo = (function (seq30151){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30151));
}));


shadow.markup.react.audio = (function shadow$markup$react$audio(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30307 = arguments.length;
var i__5770__auto___30308 = (0);
while(true){
if((i__5770__auto___30308 < len__5769__auto___30307)){
args__5775__auto__.push((arguments[i__5770__auto___30308]));

var G__30309 = (i__5770__auto___30308 + (1));
i__5770__auto___30308 = G__30309;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("audio",args__30135__auto__);
}));

(shadow.markup.react.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.audio.cljs$lang$applyTo = (function (seq30152){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30152));
}));


shadow.markup.react.b = (function shadow$markup$react$b(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30310 = arguments.length;
var i__5770__auto___30311 = (0);
while(true){
if((i__5770__auto___30311 < len__5769__auto___30310)){
args__5775__auto__.push((arguments[i__5770__auto___30311]));

var G__30312 = (i__5770__auto___30311 + (1));
i__5770__auto___30311 = G__30312;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.b.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.b.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("b",args__30135__auto__);
}));

(shadow.markup.react.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.b.cljs$lang$applyTo = (function (seq30153){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30153));
}));


shadow.markup.react.base = (function shadow$markup$react$base(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30313 = arguments.length;
var i__5770__auto___30314 = (0);
while(true){
if((i__5770__auto___30314 < len__5769__auto___30313)){
args__5775__auto__.push((arguments[i__5770__auto___30314]));

var G__30315 = (i__5770__auto___30314 + (1));
i__5770__auto___30314 = G__30315;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.base.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.base.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("base",args__30135__auto__);
}));

(shadow.markup.react.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.base.cljs$lang$applyTo = (function (seq30154){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30154));
}));


shadow.markup.react.bdi = (function shadow$markup$react$bdi(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30316 = arguments.length;
var i__5770__auto___30317 = (0);
while(true){
if((i__5770__auto___30317 < len__5769__auto___30316)){
args__5775__auto__.push((arguments[i__5770__auto___30317]));

var G__30318 = (i__5770__auto___30317 + (1));
i__5770__auto___30317 = G__30318;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("bdi",args__30135__auto__);
}));

(shadow.markup.react.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.bdi.cljs$lang$applyTo = (function (seq30155){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30155));
}));


shadow.markup.react.bdo = (function shadow$markup$react$bdo(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30319 = arguments.length;
var i__5770__auto___30320 = (0);
while(true){
if((i__5770__auto___30320 < len__5769__auto___30319)){
args__5775__auto__.push((arguments[i__5770__auto___30320]));

var G__30323 = (i__5770__auto___30320 + (1));
i__5770__auto___30320 = G__30323;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("bdo",args__30135__auto__);
}));

(shadow.markup.react.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.bdo.cljs$lang$applyTo = (function (seq30156){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30156));
}));


shadow.markup.react.big = (function shadow$markup$react$big(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30326 = arguments.length;
var i__5770__auto___30327 = (0);
while(true){
if((i__5770__auto___30327 < len__5769__auto___30326)){
args__5775__auto__.push((arguments[i__5770__auto___30327]));

var G__30328 = (i__5770__auto___30327 + (1));
i__5770__auto___30327 = G__30328;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.big.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.big.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("big",args__30135__auto__);
}));

(shadow.markup.react.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.big.cljs$lang$applyTo = (function (seq30157){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30157));
}));


shadow.markup.react.blockquote = (function shadow$markup$react$blockquote(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30333 = arguments.length;
var i__5770__auto___30334 = (0);
while(true){
if((i__5770__auto___30334 < len__5769__auto___30333)){
args__5775__auto__.push((arguments[i__5770__auto___30334]));

var G__30335 = (i__5770__auto___30334 + (1));
i__5770__auto___30334 = G__30335;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("blockquote",args__30135__auto__);
}));

(shadow.markup.react.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.blockquote.cljs$lang$applyTo = (function (seq30158){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30158));
}));


shadow.markup.react.body = (function shadow$markup$react$body(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30338 = arguments.length;
var i__5770__auto___30339 = (0);
while(true){
if((i__5770__auto___30339 < len__5769__auto___30338)){
args__5775__auto__.push((arguments[i__5770__auto___30339]));

var G__30340 = (i__5770__auto___30339 + (1));
i__5770__auto___30339 = G__30340;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.body.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.body.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("body",args__30135__auto__);
}));

(shadow.markup.react.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.body.cljs$lang$applyTo = (function (seq30159){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30159));
}));


shadow.markup.react.br = (function shadow$markup$react$br(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30345 = arguments.length;
var i__5770__auto___30346 = (0);
while(true){
if((i__5770__auto___30346 < len__5769__auto___30345)){
args__5775__auto__.push((arguments[i__5770__auto___30346]));

var G__30348 = (i__5770__auto___30346 + (1));
i__5770__auto___30346 = G__30348;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.br.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.br.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("br",args__30135__auto__);
}));

(shadow.markup.react.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.br.cljs$lang$applyTo = (function (seq30160){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30160));
}));


shadow.markup.react.button = (function shadow$markup$react$button(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30351 = arguments.length;
var i__5770__auto___30352 = (0);
while(true){
if((i__5770__auto___30352 < len__5769__auto___30351)){
args__5775__auto__.push((arguments[i__5770__auto___30352]));

var G__30353 = (i__5770__auto___30352 + (1));
i__5770__auto___30352 = G__30353;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.button.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("button",args__30135__auto__);
}));

(shadow.markup.react.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.button.cljs$lang$applyTo = (function (seq30161){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30161));
}));


shadow.markup.react.canvas = (function shadow$markup$react$canvas(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30358 = arguments.length;
var i__5770__auto___30359 = (0);
while(true){
if((i__5770__auto___30359 < len__5769__auto___30358)){
args__5775__auto__.push((arguments[i__5770__auto___30359]));

var G__30360 = (i__5770__auto___30359 + (1));
i__5770__auto___30359 = G__30360;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("canvas",args__30135__auto__);
}));

(shadow.markup.react.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.canvas.cljs$lang$applyTo = (function (seq30162){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30162));
}));


shadow.markup.react.caption = (function shadow$markup$react$caption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30361 = arguments.length;
var i__5770__auto___30362 = (0);
while(true){
if((i__5770__auto___30362 < len__5769__auto___30361)){
args__5775__auto__.push((arguments[i__5770__auto___30362]));

var G__30363 = (i__5770__auto___30362 + (1));
i__5770__auto___30362 = G__30363;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("caption",args__30135__auto__);
}));

(shadow.markup.react.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.caption.cljs$lang$applyTo = (function (seq30163){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30163));
}));


shadow.markup.react.cite = (function shadow$markup$react$cite(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30364 = arguments.length;
var i__5770__auto___30365 = (0);
while(true){
if((i__5770__auto___30365 < len__5769__auto___30364)){
args__5775__auto__.push((arguments[i__5770__auto___30365]));

var G__30366 = (i__5770__auto___30365 + (1));
i__5770__auto___30365 = G__30366;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("cite",args__30135__auto__);
}));

(shadow.markup.react.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.cite.cljs$lang$applyTo = (function (seq30164){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30164));
}));


shadow.markup.react.code = (function shadow$markup$react$code(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30367 = arguments.length;
var i__5770__auto___30368 = (0);
while(true){
if((i__5770__auto___30368 < len__5769__auto___30367)){
args__5775__auto__.push((arguments[i__5770__auto___30368]));

var G__30369 = (i__5770__auto___30368 + (1));
i__5770__auto___30368 = G__30369;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.code.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.code.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("code",args__30135__auto__);
}));

(shadow.markup.react.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.code.cljs$lang$applyTo = (function (seq30165){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30165));
}));


shadow.markup.react.col = (function shadow$markup$react$col(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30370 = arguments.length;
var i__5770__auto___30371 = (0);
while(true){
if((i__5770__auto___30371 < len__5769__auto___30370)){
args__5775__auto__.push((arguments[i__5770__auto___30371]));

var G__30372 = (i__5770__auto___30371 + (1));
i__5770__auto___30371 = G__30372;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.col.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.col.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("col",args__30135__auto__);
}));

(shadow.markup.react.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.col.cljs$lang$applyTo = (function (seq30166){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30166));
}));


shadow.markup.react.colgroup = (function shadow$markup$react$colgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30373 = arguments.length;
var i__5770__auto___30374 = (0);
while(true){
if((i__5770__auto___30374 < len__5769__auto___30373)){
args__5775__auto__.push((arguments[i__5770__auto___30374]));

var G__30375 = (i__5770__auto___30374 + (1));
i__5770__auto___30374 = G__30375;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("colgroup",args__30135__auto__);
}));

(shadow.markup.react.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.colgroup.cljs$lang$applyTo = (function (seq30167){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30167));
}));


shadow.markup.react.data = (function shadow$markup$react$data(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30376 = arguments.length;
var i__5770__auto___30377 = (0);
while(true){
if((i__5770__auto___30377 < len__5769__auto___30376)){
args__5775__auto__.push((arguments[i__5770__auto___30377]));

var G__30378 = (i__5770__auto___30377 + (1));
i__5770__auto___30377 = G__30378;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.data.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.data.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("data",args__30135__auto__);
}));

(shadow.markup.react.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.data.cljs$lang$applyTo = (function (seq30168){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30168));
}));


shadow.markup.react.datalist = (function shadow$markup$react$datalist(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30379 = arguments.length;
var i__5770__auto___30380 = (0);
while(true){
if((i__5770__auto___30380 < len__5769__auto___30379)){
args__5775__auto__.push((arguments[i__5770__auto___30380]));

var G__30381 = (i__5770__auto___30380 + (1));
i__5770__auto___30380 = G__30381;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("datalist",args__30135__auto__);
}));

(shadow.markup.react.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.datalist.cljs$lang$applyTo = (function (seq30169){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30169));
}));


shadow.markup.react.dd = (function shadow$markup$react$dd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30382 = arguments.length;
var i__5770__auto___30383 = (0);
while(true){
if((i__5770__auto___30383 < len__5769__auto___30382)){
args__5775__auto__.push((arguments[i__5770__auto___30383]));

var G__30384 = (i__5770__auto___30383 + (1));
i__5770__auto___30383 = G__30384;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("dd",args__30135__auto__);
}));

(shadow.markup.react.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.dd.cljs$lang$applyTo = (function (seq30170){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30170));
}));


shadow.markup.react.del = (function shadow$markup$react$del(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30385 = arguments.length;
var i__5770__auto___30386 = (0);
while(true){
if((i__5770__auto___30386 < len__5769__auto___30385)){
args__5775__auto__.push((arguments[i__5770__auto___30386]));

var G__30387 = (i__5770__auto___30386 + (1));
i__5770__auto___30386 = G__30387;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.del.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.del.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("del",args__30135__auto__);
}));

(shadow.markup.react.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.del.cljs$lang$applyTo = (function (seq30171){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30171));
}));


shadow.markup.react.dfn = (function shadow$markup$react$dfn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30388 = arguments.length;
var i__5770__auto___30389 = (0);
while(true){
if((i__5770__auto___30389 < len__5769__auto___30388)){
args__5775__auto__.push((arguments[i__5770__auto___30389]));

var G__30390 = (i__5770__auto___30389 + (1));
i__5770__auto___30389 = G__30390;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("dfn",args__30135__auto__);
}));

(shadow.markup.react.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.dfn.cljs$lang$applyTo = (function (seq30172){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30172));
}));


shadow.markup.react.div = (function shadow$markup$react$div(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30391 = arguments.length;
var i__5770__auto___30392 = (0);
while(true){
if((i__5770__auto___30392 < len__5769__auto___30391)){
args__5775__auto__.push((arguments[i__5770__auto___30392]));

var G__30393 = (i__5770__auto___30392 + (1));
i__5770__auto___30392 = G__30393;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.div.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("div",args__30135__auto__);
}));

(shadow.markup.react.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.div.cljs$lang$applyTo = (function (seq30173){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30173));
}));


shadow.markup.react.dl = (function shadow$markup$react$dl(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30394 = arguments.length;
var i__5770__auto___30395 = (0);
while(true){
if((i__5770__auto___30395 < len__5769__auto___30394)){
args__5775__auto__.push((arguments[i__5770__auto___30395]));

var G__30396 = (i__5770__auto___30395 + (1));
i__5770__auto___30395 = G__30396;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("dl",args__30135__auto__);
}));

(shadow.markup.react.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.dl.cljs$lang$applyTo = (function (seq30174){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30174));
}));


shadow.markup.react.dt = (function shadow$markup$react$dt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30397 = arguments.length;
var i__5770__auto___30398 = (0);
while(true){
if((i__5770__auto___30398 < len__5769__auto___30397)){
args__5775__auto__.push((arguments[i__5770__auto___30398]));

var G__30399 = (i__5770__auto___30398 + (1));
i__5770__auto___30398 = G__30399;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("dt",args__30135__auto__);
}));

(shadow.markup.react.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.dt.cljs$lang$applyTo = (function (seq30175){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30175));
}));


shadow.markup.react.em = (function shadow$markup$react$em(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30400 = arguments.length;
var i__5770__auto___30401 = (0);
while(true){
if((i__5770__auto___30401 < len__5769__auto___30400)){
args__5775__auto__.push((arguments[i__5770__auto___30401]));

var G__30402 = (i__5770__auto___30401 + (1));
i__5770__auto___30401 = G__30402;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.em.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.em.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("em",args__30135__auto__);
}));

(shadow.markup.react.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.em.cljs$lang$applyTo = (function (seq30176){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30176));
}));


shadow.markup.react.embed = (function shadow$markup$react$embed(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30403 = arguments.length;
var i__5770__auto___30404 = (0);
while(true){
if((i__5770__auto___30404 < len__5769__auto___30403)){
args__5775__auto__.push((arguments[i__5770__auto___30404]));

var G__30405 = (i__5770__auto___30404 + (1));
i__5770__auto___30404 = G__30405;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("embed",args__30135__auto__);
}));

(shadow.markup.react.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.embed.cljs$lang$applyTo = (function (seq30177){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30177));
}));


shadow.markup.react.fieldset = (function shadow$markup$react$fieldset(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30406 = arguments.length;
var i__5770__auto___30407 = (0);
while(true){
if((i__5770__auto___30407 < len__5769__auto___30406)){
args__5775__auto__.push((arguments[i__5770__auto___30407]));

var G__30408 = (i__5770__auto___30407 + (1));
i__5770__auto___30407 = G__30408;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("fieldset",args__30135__auto__);
}));

(shadow.markup.react.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.fieldset.cljs$lang$applyTo = (function (seq30178){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30178));
}));


shadow.markup.react.figcaption = (function shadow$markup$react$figcaption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30409 = arguments.length;
var i__5770__auto___30410 = (0);
while(true){
if((i__5770__auto___30410 < len__5769__auto___30409)){
args__5775__auto__.push((arguments[i__5770__auto___30410]));

var G__30411 = (i__5770__auto___30410 + (1));
i__5770__auto___30410 = G__30411;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("figcaption",args__30135__auto__);
}));

(shadow.markup.react.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.figcaption.cljs$lang$applyTo = (function (seq30179){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30179));
}));


shadow.markup.react.figure = (function shadow$markup$react$figure(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30412 = arguments.length;
var i__5770__auto___30413 = (0);
while(true){
if((i__5770__auto___30413 < len__5769__auto___30412)){
args__5775__auto__.push((arguments[i__5770__auto___30413]));

var G__30414 = (i__5770__auto___30413 + (1));
i__5770__auto___30413 = G__30414;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("figure",args__30135__auto__);
}));

(shadow.markup.react.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.figure.cljs$lang$applyTo = (function (seq30180){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30180));
}));


shadow.markup.react.footer = (function shadow$markup$react$footer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30415 = arguments.length;
var i__5770__auto___30416 = (0);
while(true){
if((i__5770__auto___30416 < len__5769__auto___30415)){
args__5775__auto__.push((arguments[i__5770__auto___30416]));

var G__30417 = (i__5770__auto___30416 + (1));
i__5770__auto___30416 = G__30417;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("footer",args__30135__auto__);
}));

(shadow.markup.react.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.footer.cljs$lang$applyTo = (function (seq30181){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30181));
}));


shadow.markup.react.form = (function shadow$markup$react$form(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30418 = arguments.length;
var i__5770__auto___30419 = (0);
while(true){
if((i__5770__auto___30419 < len__5769__auto___30418)){
args__5775__auto__.push((arguments[i__5770__auto___30419]));

var G__30420 = (i__5770__auto___30419 + (1));
i__5770__auto___30419 = G__30420;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.form.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("form",args__30135__auto__);
}));

(shadow.markup.react.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.form.cljs$lang$applyTo = (function (seq30182){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30182));
}));


shadow.markup.react.input = (function shadow$markup$react$input(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30421 = arguments.length;
var i__5770__auto___30422 = (0);
while(true){
if((i__5770__auto___30422 < len__5769__auto___30421)){
args__5775__auto__.push((arguments[i__5770__auto___30422]));

var G__30423 = (i__5770__auto___30422 + (1));
i__5770__auto___30422 = G__30423;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.input.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("input",args__30135__auto__);
}));

(shadow.markup.react.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.input.cljs$lang$applyTo = (function (seq30183){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30183));
}));


shadow.markup.react.textarea = (function shadow$markup$react$textarea(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30424 = arguments.length;
var i__5770__auto___30425 = (0);
while(true){
if((i__5770__auto___30425 < len__5769__auto___30424)){
args__5775__auto__.push((arguments[i__5770__auto___30425]));

var G__30426 = (i__5770__auto___30425 + (1));
i__5770__auto___30425 = G__30426;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("textarea",args__30135__auto__);
}));

(shadow.markup.react.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.textarea.cljs$lang$applyTo = (function (seq30184){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30184));
}));


shadow.markup.react.option = (function shadow$markup$react$option(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30427 = arguments.length;
var i__5770__auto___30428 = (0);
while(true){
if((i__5770__auto___30428 < len__5769__auto___30427)){
args__5775__auto__.push((arguments[i__5770__auto___30428]));

var G__30429 = (i__5770__auto___30428 + (1));
i__5770__auto___30428 = G__30429;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.option.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.option.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("option",args__30135__auto__);
}));

(shadow.markup.react.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.option.cljs$lang$applyTo = (function (seq30185){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30185));
}));


shadow.markup.react.h1 = (function shadow$markup$react$h1(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30430 = arguments.length;
var i__5770__auto___30431 = (0);
while(true){
if((i__5770__auto___30431 < len__5769__auto___30430)){
args__5775__auto__.push((arguments[i__5770__auto___30431]));

var G__30432 = (i__5770__auto___30431 + (1));
i__5770__auto___30431 = G__30432;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("h1",args__30135__auto__);
}));

(shadow.markup.react.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.h1.cljs$lang$applyTo = (function (seq30186){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30186));
}));


shadow.markup.react.h2 = (function shadow$markup$react$h2(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30433 = arguments.length;
var i__5770__auto___30434 = (0);
while(true){
if((i__5770__auto___30434 < len__5769__auto___30433)){
args__5775__auto__.push((arguments[i__5770__auto___30434]));

var G__30435 = (i__5770__auto___30434 + (1));
i__5770__auto___30434 = G__30435;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("h2",args__30135__auto__);
}));

(shadow.markup.react.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.h2.cljs$lang$applyTo = (function (seq30187){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30187));
}));


shadow.markup.react.h3 = (function shadow$markup$react$h3(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30436 = arguments.length;
var i__5770__auto___30437 = (0);
while(true){
if((i__5770__auto___30437 < len__5769__auto___30436)){
args__5775__auto__.push((arguments[i__5770__auto___30437]));

var G__30438 = (i__5770__auto___30437 + (1));
i__5770__auto___30437 = G__30438;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("h3",args__30135__auto__);
}));

(shadow.markup.react.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.h3.cljs$lang$applyTo = (function (seq30188){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30188));
}));


shadow.markup.react.h4 = (function shadow$markup$react$h4(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30439 = arguments.length;
var i__5770__auto___30440 = (0);
while(true){
if((i__5770__auto___30440 < len__5769__auto___30439)){
args__5775__auto__.push((arguments[i__5770__auto___30440]));

var G__30441 = (i__5770__auto___30440 + (1));
i__5770__auto___30440 = G__30441;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("h4",args__30135__auto__);
}));

(shadow.markup.react.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.h4.cljs$lang$applyTo = (function (seq30189){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30189));
}));


shadow.markup.react.h5 = (function shadow$markup$react$h5(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30442 = arguments.length;
var i__5770__auto___30443 = (0);
while(true){
if((i__5770__auto___30443 < len__5769__auto___30442)){
args__5775__auto__.push((arguments[i__5770__auto___30443]));

var G__30444 = (i__5770__auto___30443 + (1));
i__5770__auto___30443 = G__30444;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("h5",args__30135__auto__);
}));

(shadow.markup.react.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.h5.cljs$lang$applyTo = (function (seq30190){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30190));
}));


shadow.markup.react.h6 = (function shadow$markup$react$h6(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30445 = arguments.length;
var i__5770__auto___30446 = (0);
while(true){
if((i__5770__auto___30446 < len__5769__auto___30445)){
args__5775__auto__.push((arguments[i__5770__auto___30446]));

var G__30447 = (i__5770__auto___30446 + (1));
i__5770__auto___30446 = G__30447;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("h6",args__30135__auto__);
}));

(shadow.markup.react.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.h6.cljs$lang$applyTo = (function (seq30191){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30191));
}));


shadow.markup.react.head = (function shadow$markup$react$head(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30448 = arguments.length;
var i__5770__auto___30449 = (0);
while(true){
if((i__5770__auto___30449 < len__5769__auto___30448)){
args__5775__auto__.push((arguments[i__5770__auto___30449]));

var G__30450 = (i__5770__auto___30449 + (1));
i__5770__auto___30449 = G__30450;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.head.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.head.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("head",args__30135__auto__);
}));

(shadow.markup.react.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.head.cljs$lang$applyTo = (function (seq30192){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30192));
}));


shadow.markup.react.header = (function shadow$markup$react$header(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30451 = arguments.length;
var i__5770__auto___30452 = (0);
while(true){
if((i__5770__auto___30452 < len__5769__auto___30451)){
args__5775__auto__.push((arguments[i__5770__auto___30452]));

var G__30453 = (i__5770__auto___30452 + (1));
i__5770__auto___30452 = G__30453;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.header.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.header.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("header",args__30135__auto__);
}));

(shadow.markup.react.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.header.cljs$lang$applyTo = (function (seq30193){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30193));
}));


shadow.markup.react.hr = (function shadow$markup$react$hr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30454 = arguments.length;
var i__5770__auto___30455 = (0);
while(true){
if((i__5770__auto___30455 < len__5769__auto___30454)){
args__5775__auto__.push((arguments[i__5770__auto___30455]));

var G__30456 = (i__5770__auto___30455 + (1));
i__5770__auto___30455 = G__30456;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("hr",args__30135__auto__);
}));

(shadow.markup.react.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.hr.cljs$lang$applyTo = (function (seq30194){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30194));
}));


shadow.markup.react.html = (function shadow$markup$react$html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30457 = arguments.length;
var i__5770__auto___30458 = (0);
while(true){
if((i__5770__auto___30458 < len__5769__auto___30457)){
args__5775__auto__.push((arguments[i__5770__auto___30458]));

var G__30459 = (i__5770__auto___30458 + (1));
i__5770__auto___30458 = G__30459;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.html.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("html",args__30135__auto__);
}));

(shadow.markup.react.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.html.cljs$lang$applyTo = (function (seq30195){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30195));
}));


shadow.markup.react.i = (function shadow$markup$react$i(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30460 = arguments.length;
var i__5770__auto___30461 = (0);
while(true){
if((i__5770__auto___30461 < len__5769__auto___30460)){
args__5775__auto__.push((arguments[i__5770__auto___30461]));

var G__30462 = (i__5770__auto___30461 + (1));
i__5770__auto___30461 = G__30462;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.i.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.i.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("i",args__30135__auto__);
}));

(shadow.markup.react.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.i.cljs$lang$applyTo = (function (seq30196){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30196));
}));


shadow.markup.react.iframe = (function shadow$markup$react$iframe(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30463 = arguments.length;
var i__5770__auto___30464 = (0);
while(true){
if((i__5770__auto___30464 < len__5769__auto___30463)){
args__5775__auto__.push((arguments[i__5770__auto___30464]));

var G__30465 = (i__5770__auto___30464 + (1));
i__5770__auto___30464 = G__30465;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("iframe",args__30135__auto__);
}));

(shadow.markup.react.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.iframe.cljs$lang$applyTo = (function (seq30197){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30197));
}));


shadow.markup.react.img = (function shadow$markup$react$img(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30466 = arguments.length;
var i__5770__auto___30467 = (0);
while(true){
if((i__5770__auto___30467 < len__5769__auto___30466)){
args__5775__auto__.push((arguments[i__5770__auto___30467]));

var G__30468 = (i__5770__auto___30467 + (1));
i__5770__auto___30467 = G__30468;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.img.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.img.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("img",args__30135__auto__);
}));

(shadow.markup.react.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.img.cljs$lang$applyTo = (function (seq30198){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30198));
}));


shadow.markup.react.ins = (function shadow$markup$react$ins(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30469 = arguments.length;
var i__5770__auto___30470 = (0);
while(true){
if((i__5770__auto___30470 < len__5769__auto___30469)){
args__5775__auto__.push((arguments[i__5770__auto___30470]));

var G__30471 = (i__5770__auto___30470 + (1));
i__5770__auto___30470 = G__30471;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("ins",args__30135__auto__);
}));

(shadow.markup.react.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.ins.cljs$lang$applyTo = (function (seq30199){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30199));
}));


shadow.markup.react.kbd = (function shadow$markup$react$kbd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30472 = arguments.length;
var i__5770__auto___30473 = (0);
while(true){
if((i__5770__auto___30473 < len__5769__auto___30472)){
args__5775__auto__.push((arguments[i__5770__auto___30473]));

var G__30474 = (i__5770__auto___30473 + (1));
i__5770__auto___30473 = G__30474;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("kbd",args__30135__auto__);
}));

(shadow.markup.react.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.kbd.cljs$lang$applyTo = (function (seq30200){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30200));
}));


shadow.markup.react.keygen = (function shadow$markup$react$keygen(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30475 = arguments.length;
var i__5770__auto___30476 = (0);
while(true){
if((i__5770__auto___30476 < len__5769__auto___30475)){
args__5775__auto__.push((arguments[i__5770__auto___30476]));

var G__30477 = (i__5770__auto___30476 + (1));
i__5770__auto___30476 = G__30477;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("keygen",args__30135__auto__);
}));

(shadow.markup.react.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.keygen.cljs$lang$applyTo = (function (seq30201){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30201));
}));


shadow.markup.react.label = (function shadow$markup$react$label(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30478 = arguments.length;
var i__5770__auto___30479 = (0);
while(true){
if((i__5770__auto___30479 < len__5769__auto___30478)){
args__5775__auto__.push((arguments[i__5770__auto___30479]));

var G__30480 = (i__5770__auto___30479 + (1));
i__5770__auto___30479 = G__30480;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.label.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("label",args__30135__auto__);
}));

(shadow.markup.react.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.label.cljs$lang$applyTo = (function (seq30202){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30202));
}));


shadow.markup.react.legend = (function shadow$markup$react$legend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30481 = arguments.length;
var i__5770__auto___30482 = (0);
while(true){
if((i__5770__auto___30482 < len__5769__auto___30481)){
args__5775__auto__.push((arguments[i__5770__auto___30482]));

var G__30483 = (i__5770__auto___30482 + (1));
i__5770__auto___30482 = G__30483;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("legend",args__30135__auto__);
}));

(shadow.markup.react.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.legend.cljs$lang$applyTo = (function (seq30203){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30203));
}));


shadow.markup.react.li = (function shadow$markup$react$li(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30484 = arguments.length;
var i__5770__auto___30485 = (0);
while(true){
if((i__5770__auto___30485 < len__5769__auto___30484)){
args__5775__auto__.push((arguments[i__5770__auto___30485]));

var G__30486 = (i__5770__auto___30485 + (1));
i__5770__auto___30485 = G__30486;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.li.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.li.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("li",args__30135__auto__);
}));

(shadow.markup.react.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.li.cljs$lang$applyTo = (function (seq30204){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30204));
}));


shadow.markup.react.link = (function shadow$markup$react$link(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30487 = arguments.length;
var i__5770__auto___30488 = (0);
while(true){
if((i__5770__auto___30488 < len__5769__auto___30487)){
args__5775__auto__.push((arguments[i__5770__auto___30488]));

var G__30489 = (i__5770__auto___30488 + (1));
i__5770__auto___30488 = G__30489;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.link.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.link.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("link",args__30135__auto__);
}));

(shadow.markup.react.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.link.cljs$lang$applyTo = (function (seq30205){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30205));
}));


shadow.markup.react.main = (function shadow$markup$react$main(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30490 = arguments.length;
var i__5770__auto___30491 = (0);
while(true){
if((i__5770__auto___30491 < len__5769__auto___30490)){
args__5775__auto__.push((arguments[i__5770__auto___30491]));

var G__30492 = (i__5770__auto___30491 + (1));
i__5770__auto___30491 = G__30492;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.main.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("main",args__30135__auto__);
}));

(shadow.markup.react.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.main.cljs$lang$applyTo = (function (seq30206){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30206));
}));


shadow.markup.react.map = (function shadow$markup$react$map(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30493 = arguments.length;
var i__5770__auto___30494 = (0);
while(true){
if((i__5770__auto___30494 < len__5769__auto___30493)){
args__5775__auto__.push((arguments[i__5770__auto___30494]));

var G__30495 = (i__5770__auto___30494 + (1));
i__5770__auto___30494 = G__30495;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.map.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("map",args__30135__auto__);
}));

(shadow.markup.react.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.map.cljs$lang$applyTo = (function (seq30207){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30207));
}));


shadow.markup.react.mark = (function shadow$markup$react$mark(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30496 = arguments.length;
var i__5770__auto___30497 = (0);
while(true){
if((i__5770__auto___30497 < len__5769__auto___30496)){
args__5775__auto__.push((arguments[i__5770__auto___30497]));

var G__30498 = (i__5770__auto___30497 + (1));
i__5770__auto___30497 = G__30498;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("mark",args__30135__auto__);
}));

(shadow.markup.react.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.mark.cljs$lang$applyTo = (function (seq30208){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30208));
}));


shadow.markup.react.marquee = (function shadow$markup$react$marquee(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30499 = arguments.length;
var i__5770__auto___30500 = (0);
while(true){
if((i__5770__auto___30500 < len__5769__auto___30499)){
args__5775__auto__.push((arguments[i__5770__auto___30500]));

var G__30501 = (i__5770__auto___30500 + (1));
i__5770__auto___30500 = G__30501;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.marquee.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("marquee",args__30135__auto__);
}));

(shadow.markup.react.marquee.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.marquee.cljs$lang$applyTo = (function (seq30209){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30209));
}));


shadow.markup.react.menu = (function shadow$markup$react$menu(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30502 = arguments.length;
var i__5770__auto___30503 = (0);
while(true){
if((i__5770__auto___30503 < len__5769__auto___30502)){
args__5775__auto__.push((arguments[i__5770__auto___30503]));

var G__30504 = (i__5770__auto___30503 + (1));
i__5770__auto___30503 = G__30504;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("menu",args__30135__auto__);
}));

(shadow.markup.react.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.menu.cljs$lang$applyTo = (function (seq30210){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30210));
}));


shadow.markup.react.menuitem = (function shadow$markup$react$menuitem(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30505 = arguments.length;
var i__5770__auto___30506 = (0);
while(true){
if((i__5770__auto___30506 < len__5769__auto___30505)){
args__5775__auto__.push((arguments[i__5770__auto___30506]));

var G__30507 = (i__5770__auto___30506 + (1));
i__5770__auto___30506 = G__30507;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("menuitem",args__30135__auto__);
}));

(shadow.markup.react.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.menuitem.cljs$lang$applyTo = (function (seq30211){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30211));
}));


shadow.markup.react.meta = (function shadow$markup$react$meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30508 = arguments.length;
var i__5770__auto___30509 = (0);
while(true){
if((i__5770__auto___30509 < len__5769__auto___30508)){
args__5775__auto__.push((arguments[i__5770__auto___30509]));

var G__30510 = (i__5770__auto___30509 + (1));
i__5770__auto___30509 = G__30510;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("meta",args__30135__auto__);
}));

(shadow.markup.react.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.meta.cljs$lang$applyTo = (function (seq30212){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30212));
}));


shadow.markup.react.meter = (function shadow$markup$react$meter(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30511 = arguments.length;
var i__5770__auto___30512 = (0);
while(true){
if((i__5770__auto___30512 < len__5769__auto___30511)){
args__5775__auto__.push((arguments[i__5770__auto___30512]));

var G__30513 = (i__5770__auto___30512 + (1));
i__5770__auto___30512 = G__30513;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("meter",args__30135__auto__);
}));

(shadow.markup.react.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.meter.cljs$lang$applyTo = (function (seq30213){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30213));
}));


shadow.markup.react.nav = (function shadow$markup$react$nav(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30514 = arguments.length;
var i__5770__auto___30515 = (0);
while(true){
if((i__5770__auto___30515 < len__5769__auto___30514)){
args__5775__auto__.push((arguments[i__5770__auto___30515]));

var G__30516 = (i__5770__auto___30515 + (1));
i__5770__auto___30515 = G__30516;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("nav",args__30135__auto__);
}));

(shadow.markup.react.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.nav.cljs$lang$applyTo = (function (seq30214){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30214));
}));


shadow.markup.react.noscript = (function shadow$markup$react$noscript(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30517 = arguments.length;
var i__5770__auto___30518 = (0);
while(true){
if((i__5770__auto___30518 < len__5769__auto___30517)){
args__5775__auto__.push((arguments[i__5770__auto___30518]));

var G__30519 = (i__5770__auto___30518 + (1));
i__5770__auto___30518 = G__30519;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("noscript",args__30135__auto__);
}));

(shadow.markup.react.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.noscript.cljs$lang$applyTo = (function (seq30215){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30215));
}));


shadow.markup.react.object = (function shadow$markup$react$object(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30520 = arguments.length;
var i__5770__auto___30521 = (0);
while(true){
if((i__5770__auto___30521 < len__5769__auto___30520)){
args__5775__auto__.push((arguments[i__5770__auto___30521]));

var G__30522 = (i__5770__auto___30521 + (1));
i__5770__auto___30521 = G__30522;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.object.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.object.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("object",args__30135__auto__);
}));

(shadow.markup.react.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.object.cljs$lang$applyTo = (function (seq30216){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30216));
}));


shadow.markup.react.ol = (function shadow$markup$react$ol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30523 = arguments.length;
var i__5770__auto___30524 = (0);
while(true){
if((i__5770__auto___30524 < len__5769__auto___30523)){
args__5775__auto__.push((arguments[i__5770__auto___30524]));

var G__30525 = (i__5770__auto___30524 + (1));
i__5770__auto___30524 = G__30525;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("ol",args__30135__auto__);
}));

(shadow.markup.react.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.ol.cljs$lang$applyTo = (function (seq30217){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30217));
}));


shadow.markup.react.optgroup = (function shadow$markup$react$optgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30526 = arguments.length;
var i__5770__auto___30527 = (0);
while(true){
if((i__5770__auto___30527 < len__5769__auto___30526)){
args__5775__auto__.push((arguments[i__5770__auto___30527]));

var G__30528 = (i__5770__auto___30527 + (1));
i__5770__auto___30527 = G__30528;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("optgroup",args__30135__auto__);
}));

(shadow.markup.react.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.optgroup.cljs$lang$applyTo = (function (seq30218){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30218));
}));


shadow.markup.react.output = (function shadow$markup$react$output(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30529 = arguments.length;
var i__5770__auto___30530 = (0);
while(true){
if((i__5770__auto___30530 < len__5769__auto___30529)){
args__5775__auto__.push((arguments[i__5770__auto___30530]));

var G__30531 = (i__5770__auto___30530 + (1));
i__5770__auto___30530 = G__30531;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.output.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.output.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("output",args__30135__auto__);
}));

(shadow.markup.react.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.output.cljs$lang$applyTo = (function (seq30219){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30219));
}));


shadow.markup.react.p = (function shadow$markup$react$p(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30532 = arguments.length;
var i__5770__auto___30533 = (0);
while(true){
if((i__5770__auto___30533 < len__5769__auto___30532)){
args__5775__auto__.push((arguments[i__5770__auto___30533]));

var G__30534 = (i__5770__auto___30533 + (1));
i__5770__auto___30533 = G__30534;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.p.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("p",args__30135__auto__);
}));

(shadow.markup.react.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.p.cljs$lang$applyTo = (function (seq30220){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30220));
}));


shadow.markup.react.param = (function shadow$markup$react$param(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30535 = arguments.length;
var i__5770__auto___30536 = (0);
while(true){
if((i__5770__auto___30536 < len__5769__auto___30535)){
args__5775__auto__.push((arguments[i__5770__auto___30536]));

var G__30537 = (i__5770__auto___30536 + (1));
i__5770__auto___30536 = G__30537;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.param.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.param.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("param",args__30135__auto__);
}));

(shadow.markup.react.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.param.cljs$lang$applyTo = (function (seq30221){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30221));
}));


shadow.markup.react.pre = (function shadow$markup$react$pre(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30538 = arguments.length;
var i__5770__auto___30539 = (0);
while(true){
if((i__5770__auto___30539 < len__5769__auto___30538)){
args__5775__auto__.push((arguments[i__5770__auto___30539]));

var G__30540 = (i__5770__auto___30539 + (1));
i__5770__auto___30539 = G__30540;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("pre",args__30135__auto__);
}));

(shadow.markup.react.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.pre.cljs$lang$applyTo = (function (seq30222){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30222));
}));


shadow.markup.react.progress = (function shadow$markup$react$progress(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30541 = arguments.length;
var i__5770__auto___30542 = (0);
while(true){
if((i__5770__auto___30542 < len__5769__auto___30541)){
args__5775__auto__.push((arguments[i__5770__auto___30542]));

var G__30543 = (i__5770__auto___30542 + (1));
i__5770__auto___30542 = G__30543;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("progress",args__30135__auto__);
}));

(shadow.markup.react.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.progress.cljs$lang$applyTo = (function (seq30223){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30223));
}));


shadow.markup.react.q = (function shadow$markup$react$q(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30544 = arguments.length;
var i__5770__auto___30545 = (0);
while(true){
if((i__5770__auto___30545 < len__5769__auto___30544)){
args__5775__auto__.push((arguments[i__5770__auto___30545]));

var G__30546 = (i__5770__auto___30545 + (1));
i__5770__auto___30545 = G__30546;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.q.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.q.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("q",args__30135__auto__);
}));

(shadow.markup.react.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.q.cljs$lang$applyTo = (function (seq30224){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30224));
}));


shadow.markup.react.rp = (function shadow$markup$react$rp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30547 = arguments.length;
var i__5770__auto___30548 = (0);
while(true){
if((i__5770__auto___30548 < len__5769__auto___30547)){
args__5775__auto__.push((arguments[i__5770__auto___30548]));

var G__30549 = (i__5770__auto___30548 + (1));
i__5770__auto___30548 = G__30549;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("rp",args__30135__auto__);
}));

(shadow.markup.react.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.rp.cljs$lang$applyTo = (function (seq30225){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30225));
}));


shadow.markup.react.rt = (function shadow$markup$react$rt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30550 = arguments.length;
var i__5770__auto___30551 = (0);
while(true){
if((i__5770__auto___30551 < len__5769__auto___30550)){
args__5775__auto__.push((arguments[i__5770__auto___30551]));

var G__30552 = (i__5770__auto___30551 + (1));
i__5770__auto___30551 = G__30552;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("rt",args__30135__auto__);
}));

(shadow.markup.react.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.rt.cljs$lang$applyTo = (function (seq30226){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30226));
}));


shadow.markup.react.ruby = (function shadow$markup$react$ruby(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30553 = arguments.length;
var i__5770__auto___30554 = (0);
while(true){
if((i__5770__auto___30554 < len__5769__auto___30553)){
args__5775__auto__.push((arguments[i__5770__auto___30554]));

var G__30555 = (i__5770__auto___30554 + (1));
i__5770__auto___30554 = G__30555;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("ruby",args__30135__auto__);
}));

(shadow.markup.react.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.ruby.cljs$lang$applyTo = (function (seq30227){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30227));
}));


shadow.markup.react.s = (function shadow$markup$react$s(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30556 = arguments.length;
var i__5770__auto___30557 = (0);
while(true){
if((i__5770__auto___30557 < len__5769__auto___30556)){
args__5775__auto__.push((arguments[i__5770__auto___30557]));

var G__30558 = (i__5770__auto___30557 + (1));
i__5770__auto___30557 = G__30558;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.s.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.s.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("s",args__30135__auto__);
}));

(shadow.markup.react.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.s.cljs$lang$applyTo = (function (seq30228){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30228));
}));


shadow.markup.react.samp = (function shadow$markup$react$samp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30559 = arguments.length;
var i__5770__auto___30560 = (0);
while(true){
if((i__5770__auto___30560 < len__5769__auto___30559)){
args__5775__auto__.push((arguments[i__5770__auto___30560]));

var G__30561 = (i__5770__auto___30560 + (1));
i__5770__auto___30560 = G__30561;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("samp",args__30135__auto__);
}));

(shadow.markup.react.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.samp.cljs$lang$applyTo = (function (seq30229){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30229));
}));


shadow.markup.react.script = (function shadow$markup$react$script(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30562 = arguments.length;
var i__5770__auto___30563 = (0);
while(true){
if((i__5770__auto___30563 < len__5769__auto___30562)){
args__5775__auto__.push((arguments[i__5770__auto___30563]));

var G__30564 = (i__5770__auto___30563 + (1));
i__5770__auto___30563 = G__30564;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.script.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.script.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("script",args__30135__auto__);
}));

(shadow.markup.react.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.script.cljs$lang$applyTo = (function (seq30230){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30230));
}));


shadow.markup.react.section = (function shadow$markup$react$section(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30565 = arguments.length;
var i__5770__auto___30566 = (0);
while(true){
if((i__5770__auto___30566 < len__5769__auto___30565)){
args__5775__auto__.push((arguments[i__5770__auto___30566]));

var G__30567 = (i__5770__auto___30566 + (1));
i__5770__auto___30566 = G__30567;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.section.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("section",args__30135__auto__);
}));

(shadow.markup.react.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.section.cljs$lang$applyTo = (function (seq30231){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30231));
}));


shadow.markup.react.select = (function shadow$markup$react$select(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30568 = arguments.length;
var i__5770__auto___30569 = (0);
while(true){
if((i__5770__auto___30569 < len__5769__auto___30568)){
args__5775__auto__.push((arguments[i__5770__auto___30569]));

var G__30570 = (i__5770__auto___30569 + (1));
i__5770__auto___30569 = G__30570;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.select.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("select",args__30135__auto__);
}));

(shadow.markup.react.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.select.cljs$lang$applyTo = (function (seq30232){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30232));
}));


shadow.markup.react.small = (function shadow$markup$react$small(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30571 = arguments.length;
var i__5770__auto___30572 = (0);
while(true){
if((i__5770__auto___30572 < len__5769__auto___30571)){
args__5775__auto__.push((arguments[i__5770__auto___30572]));

var G__30573 = (i__5770__auto___30572 + (1));
i__5770__auto___30572 = G__30573;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.small.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.small.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("small",args__30135__auto__);
}));

(shadow.markup.react.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.small.cljs$lang$applyTo = (function (seq30233){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30233));
}));


shadow.markup.react.source = (function shadow$markup$react$source(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30574 = arguments.length;
var i__5770__auto___30575 = (0);
while(true){
if((i__5770__auto___30575 < len__5769__auto___30574)){
args__5775__auto__.push((arguments[i__5770__auto___30575]));

var G__30576 = (i__5770__auto___30575 + (1));
i__5770__auto___30575 = G__30576;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.source.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.source.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("source",args__30135__auto__);
}));

(shadow.markup.react.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.source.cljs$lang$applyTo = (function (seq30234){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30234));
}));


shadow.markup.react.span = (function shadow$markup$react$span(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30577 = arguments.length;
var i__5770__auto___30578 = (0);
while(true){
if((i__5770__auto___30578 < len__5769__auto___30577)){
args__5775__auto__.push((arguments[i__5770__auto___30578]));

var G__30579 = (i__5770__auto___30578 + (1));
i__5770__auto___30578 = G__30579;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.span.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.span.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("span",args__30135__auto__);
}));

(shadow.markup.react.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.span.cljs$lang$applyTo = (function (seq30235){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30235));
}));


shadow.markup.react.strong = (function shadow$markup$react$strong(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30580 = arguments.length;
var i__5770__auto___30581 = (0);
while(true){
if((i__5770__auto___30581 < len__5769__auto___30580)){
args__5775__auto__.push((arguments[i__5770__auto___30581]));

var G__30582 = (i__5770__auto___30581 + (1));
i__5770__auto___30581 = G__30582;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("strong",args__30135__auto__);
}));

(shadow.markup.react.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.strong.cljs$lang$applyTo = (function (seq30236){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30236));
}));


shadow.markup.react.style = (function shadow$markup$react$style(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30583 = arguments.length;
var i__5770__auto___30584 = (0);
while(true){
if((i__5770__auto___30584 < len__5769__auto___30583)){
args__5775__auto__.push((arguments[i__5770__auto___30584]));

var G__30585 = (i__5770__auto___30584 + (1));
i__5770__auto___30584 = G__30585;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.style.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("style",args__30135__auto__);
}));

(shadow.markup.react.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.style.cljs$lang$applyTo = (function (seq30237){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30237));
}));


shadow.markup.react.sub = (function shadow$markup$react$sub(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30586 = arguments.length;
var i__5770__auto___30587 = (0);
while(true){
if((i__5770__auto___30587 < len__5769__auto___30586)){
args__5775__auto__.push((arguments[i__5770__auto___30587]));

var G__30588 = (i__5770__auto___30587 + (1));
i__5770__auto___30587 = G__30588;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("sub",args__30135__auto__);
}));

(shadow.markup.react.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.sub.cljs$lang$applyTo = (function (seq30238){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30238));
}));


shadow.markup.react.summary = (function shadow$markup$react$summary(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30589 = arguments.length;
var i__5770__auto___30590 = (0);
while(true){
if((i__5770__auto___30590 < len__5769__auto___30589)){
args__5775__auto__.push((arguments[i__5770__auto___30590]));

var G__30591 = (i__5770__auto___30590 + (1));
i__5770__auto___30590 = G__30591;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("summary",args__30135__auto__);
}));

(shadow.markup.react.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.summary.cljs$lang$applyTo = (function (seq30239){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30239));
}));


shadow.markup.react.sup = (function shadow$markup$react$sup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30592 = arguments.length;
var i__5770__auto___30593 = (0);
while(true){
if((i__5770__auto___30593 < len__5769__auto___30592)){
args__5775__auto__.push((arguments[i__5770__auto___30593]));

var G__30594 = (i__5770__auto___30593 + (1));
i__5770__auto___30593 = G__30594;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("sup",args__30135__auto__);
}));

(shadow.markup.react.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.sup.cljs$lang$applyTo = (function (seq30240){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30240));
}));


shadow.markup.react.table = (function shadow$markup$react$table(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30595 = arguments.length;
var i__5770__auto___30596 = (0);
while(true){
if((i__5770__auto___30596 < len__5769__auto___30595)){
args__5775__auto__.push((arguments[i__5770__auto___30596]));

var G__30597 = (i__5770__auto___30596 + (1));
i__5770__auto___30596 = G__30597;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.table.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("table",args__30135__auto__);
}));

(shadow.markup.react.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.table.cljs$lang$applyTo = (function (seq30241){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30241));
}));


shadow.markup.react.tbody = (function shadow$markup$react$tbody(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30598 = arguments.length;
var i__5770__auto___30599 = (0);
while(true){
if((i__5770__auto___30599 < len__5769__auto___30598)){
args__5775__auto__.push((arguments[i__5770__auto___30599]));

var G__30600 = (i__5770__auto___30599 + (1));
i__5770__auto___30599 = G__30600;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("tbody",args__30135__auto__);
}));

(shadow.markup.react.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.tbody.cljs$lang$applyTo = (function (seq30242){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30242));
}));


shadow.markup.react.td = (function shadow$markup$react$td(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30601 = arguments.length;
var i__5770__auto___30602 = (0);
while(true){
if((i__5770__auto___30602 < len__5769__auto___30601)){
args__5775__auto__.push((arguments[i__5770__auto___30602]));

var G__30603 = (i__5770__auto___30602 + (1));
i__5770__auto___30602 = G__30603;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.td.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.td.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("td",args__30135__auto__);
}));

(shadow.markup.react.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.td.cljs$lang$applyTo = (function (seq30243){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30243));
}));


shadow.markup.react.tfoot = (function shadow$markup$react$tfoot(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30604 = arguments.length;
var i__5770__auto___30605 = (0);
while(true){
if((i__5770__auto___30605 < len__5769__auto___30604)){
args__5775__auto__.push((arguments[i__5770__auto___30605]));

var G__30606 = (i__5770__auto___30605 + (1));
i__5770__auto___30605 = G__30606;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("tfoot",args__30135__auto__);
}));

(shadow.markup.react.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.tfoot.cljs$lang$applyTo = (function (seq30244){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30244));
}));


shadow.markup.react.th = (function shadow$markup$react$th(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30607 = arguments.length;
var i__5770__auto___30608 = (0);
while(true){
if((i__5770__auto___30608 < len__5769__auto___30607)){
args__5775__auto__.push((arguments[i__5770__auto___30608]));

var G__30609 = (i__5770__auto___30608 + (1));
i__5770__auto___30608 = G__30609;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.th.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.th.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("th",args__30135__auto__);
}));

(shadow.markup.react.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.th.cljs$lang$applyTo = (function (seq30245){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30245));
}));


shadow.markup.react.thead = (function shadow$markup$react$thead(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30610 = arguments.length;
var i__5770__auto___30611 = (0);
while(true){
if((i__5770__auto___30611 < len__5769__auto___30610)){
args__5775__auto__.push((arguments[i__5770__auto___30611]));

var G__30612 = (i__5770__auto___30611 + (1));
i__5770__auto___30611 = G__30612;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("thead",args__30135__auto__);
}));

(shadow.markup.react.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.thead.cljs$lang$applyTo = (function (seq30246){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30246));
}));


shadow.markup.react.time = (function shadow$markup$react$time(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30613 = arguments.length;
var i__5770__auto___30614 = (0);
while(true){
if((i__5770__auto___30614 < len__5769__auto___30613)){
args__5775__auto__.push((arguments[i__5770__auto___30614]));

var G__30615 = (i__5770__auto___30614 + (1));
i__5770__auto___30614 = G__30615;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.time.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("time",args__30135__auto__);
}));

(shadow.markup.react.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.time.cljs$lang$applyTo = (function (seq30247){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30247));
}));


shadow.markup.react.title = (function shadow$markup$react$title(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30616 = arguments.length;
var i__5770__auto___30617 = (0);
while(true){
if((i__5770__auto___30617 < len__5769__auto___30616)){
args__5775__auto__.push((arguments[i__5770__auto___30617]));

var G__30618 = (i__5770__auto___30617 + (1));
i__5770__auto___30617 = G__30618;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.title.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("title",args__30135__auto__);
}));

(shadow.markup.react.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.title.cljs$lang$applyTo = (function (seq30248){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30248));
}));


shadow.markup.react.tr = (function shadow$markup$react$tr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30619 = arguments.length;
var i__5770__auto___30620 = (0);
while(true){
if((i__5770__auto___30620 < len__5769__auto___30619)){
args__5775__auto__.push((arguments[i__5770__auto___30620]));

var G__30621 = (i__5770__auto___30620 + (1));
i__5770__auto___30620 = G__30621;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("tr",args__30135__auto__);
}));

(shadow.markup.react.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.tr.cljs$lang$applyTo = (function (seq30249){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30249));
}));


shadow.markup.react.track = (function shadow$markup$react$track(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30622 = arguments.length;
var i__5770__auto___30623 = (0);
while(true){
if((i__5770__auto___30623 < len__5769__auto___30622)){
args__5775__auto__.push((arguments[i__5770__auto___30623]));

var G__30624 = (i__5770__auto___30623 + (1));
i__5770__auto___30623 = G__30624;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.track.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.track.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("track",args__30135__auto__);
}));

(shadow.markup.react.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.track.cljs$lang$applyTo = (function (seq30250){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30250));
}));


shadow.markup.react.u = (function shadow$markup$react$u(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30625 = arguments.length;
var i__5770__auto___30626 = (0);
while(true){
if((i__5770__auto___30626 < len__5769__auto___30625)){
args__5775__auto__.push((arguments[i__5770__auto___30626]));

var G__30627 = (i__5770__auto___30626 + (1));
i__5770__auto___30626 = G__30627;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.u.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.u.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("u",args__30135__auto__);
}));

(shadow.markup.react.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.u.cljs$lang$applyTo = (function (seq30251){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30251));
}));


shadow.markup.react.ul = (function shadow$markup$react$ul(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30628 = arguments.length;
var i__5770__auto___30629 = (0);
while(true){
if((i__5770__auto___30629 < len__5769__auto___30628)){
args__5775__auto__.push((arguments[i__5770__auto___30629]));

var G__30630 = (i__5770__auto___30629 + (1));
i__5770__auto___30629 = G__30630;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("ul",args__30135__auto__);
}));

(shadow.markup.react.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.ul.cljs$lang$applyTo = (function (seq30252){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30252));
}));


shadow.markup.react.var$ = (function shadow$markup$react$var(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30631 = arguments.length;
var i__5770__auto___30632 = (0);
while(true){
if((i__5770__auto___30632 < len__5769__auto___30631)){
args__5775__auto__.push((arguments[i__5770__auto___30632]));

var G__30633 = (i__5770__auto___30632 + (1));
i__5770__auto___30632 = G__30633;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("var",args__30135__auto__);
}));

(shadow.markup.react.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.var$.cljs$lang$applyTo = (function (seq30253){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30253));
}));


shadow.markup.react.video = (function shadow$markup$react$video(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30634 = arguments.length;
var i__5770__auto___30635 = (0);
while(true){
if((i__5770__auto___30635 < len__5769__auto___30634)){
args__5775__auto__.push((arguments[i__5770__auto___30635]));

var G__30636 = (i__5770__auto___30635 + (1));
i__5770__auto___30635 = G__30636;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.video.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.video.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("video",args__30135__auto__);
}));

(shadow.markup.react.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.video.cljs$lang$applyTo = (function (seq30254){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30254));
}));


shadow.markup.react.wbr = (function shadow$markup$react$wbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30637 = arguments.length;
var i__5770__auto___30638 = (0);
while(true){
if((i__5770__auto___30638 < len__5769__auto___30637)){
args__5775__auto__.push((arguments[i__5770__auto___30638]));

var G__30639 = (i__5770__auto___30638 + (1));
i__5770__auto___30638 = G__30639;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("wbr",args__30135__auto__);
}));

(shadow.markup.react.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.wbr.cljs$lang$applyTo = (function (seq30255){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30255));
}));


shadow.markup.react.circle = (function shadow$markup$react$circle(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30640 = arguments.length;
var i__5770__auto___30641 = (0);
while(true){
if((i__5770__auto___30641 < len__5769__auto___30640)){
args__5775__auto__.push((arguments[i__5770__auto___30641]));

var G__30642 = (i__5770__auto___30641 + (1));
i__5770__auto___30641 = G__30642;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("circle",args__30135__auto__);
}));

(shadow.markup.react.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.circle.cljs$lang$applyTo = (function (seq30256){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30256));
}));


shadow.markup.react.ellipse = (function shadow$markup$react$ellipse(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30643 = arguments.length;
var i__5770__auto___30644 = (0);
while(true){
if((i__5770__auto___30644 < len__5769__auto___30643)){
args__5775__auto__.push((arguments[i__5770__auto___30644]));

var G__30645 = (i__5770__auto___30644 + (1));
i__5770__auto___30644 = G__30645;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("ellipse",args__30135__auto__);
}));

(shadow.markup.react.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.ellipse.cljs$lang$applyTo = (function (seq30257){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30257));
}));


shadow.markup.react.g = (function shadow$markup$react$g(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30646 = arguments.length;
var i__5770__auto___30647 = (0);
while(true){
if((i__5770__auto___30647 < len__5769__auto___30646)){
args__5775__auto__.push((arguments[i__5770__auto___30647]));

var G__30648 = (i__5770__auto___30647 + (1));
i__5770__auto___30647 = G__30648;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.g.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.g.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("g",args__30135__auto__);
}));

(shadow.markup.react.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.g.cljs$lang$applyTo = (function (seq30258){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30258));
}));


shadow.markup.react.line = (function shadow$markup$react$line(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30649 = arguments.length;
var i__5770__auto___30650 = (0);
while(true){
if((i__5770__auto___30650 < len__5769__auto___30649)){
args__5775__auto__.push((arguments[i__5770__auto___30650]));

var G__30651 = (i__5770__auto___30650 + (1));
i__5770__auto___30650 = G__30651;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.line.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.line.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("line",args__30135__auto__);
}));

(shadow.markup.react.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.line.cljs$lang$applyTo = (function (seq30259){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30259));
}));


shadow.markup.react.path = (function shadow$markup$react$path(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30652 = arguments.length;
var i__5770__auto___30653 = (0);
while(true){
if((i__5770__auto___30653 < len__5769__auto___30652)){
args__5775__auto__.push((arguments[i__5770__auto___30653]));

var G__30654 = (i__5770__auto___30653 + (1));
i__5770__auto___30653 = G__30654;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.path.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("path",args__30135__auto__);
}));

(shadow.markup.react.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.path.cljs$lang$applyTo = (function (seq30260){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30260));
}));


shadow.markup.react.polyline = (function shadow$markup$react$polyline(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30655 = arguments.length;
var i__5770__auto___30656 = (0);
while(true){
if((i__5770__auto___30656 < len__5769__auto___30655)){
args__5775__auto__.push((arguments[i__5770__auto___30656]));

var G__30657 = (i__5770__auto___30656 + (1));
i__5770__auto___30656 = G__30657;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("polyline",args__30135__auto__);
}));

(shadow.markup.react.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.polyline.cljs$lang$applyTo = (function (seq30261){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30261));
}));


shadow.markup.react.rect = (function shadow$markup$react$rect(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30658 = arguments.length;
var i__5770__auto___30659 = (0);
while(true){
if((i__5770__auto___30659 < len__5769__auto___30658)){
args__5775__auto__.push((arguments[i__5770__auto___30659]));

var G__30660 = (i__5770__auto___30659 + (1));
i__5770__auto___30659 = G__30660;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("rect",args__30135__auto__);
}));

(shadow.markup.react.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.rect.cljs$lang$applyTo = (function (seq30262){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30262));
}));


shadow.markup.react.svg = (function shadow$markup$react$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30661 = arguments.length;
var i__5770__auto___30662 = (0);
while(true){
if((i__5770__auto___30662 < len__5769__auto___30661)){
args__5775__auto__.push((arguments[i__5770__auto___30662]));

var G__30663 = (i__5770__auto___30662 + (1));
i__5770__auto___30662 = G__30663;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("svg",args__30135__auto__);
}));

(shadow.markup.react.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.svg.cljs$lang$applyTo = (function (seq30263){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30263));
}));


shadow.markup.react.text = (function shadow$markup$react$text(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30664 = arguments.length;
var i__5770__auto___30665 = (0);
while(true){
if((i__5770__auto___30665 < len__5769__auto___30664)){
args__5775__auto__.push((arguments[i__5770__auto___30665]));

var G__30666 = (i__5770__auto___30665 + (1));
i__5770__auto___30665 = G__30666;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.text.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("text",args__30135__auto__);
}));

(shadow.markup.react.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.text.cljs$lang$applyTo = (function (seq30264){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30264));
}));


shadow.markup.react.defs = (function shadow$markup$react$defs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30667 = arguments.length;
var i__5770__auto___30668 = (0);
while(true){
if((i__5770__auto___30668 < len__5769__auto___30667)){
args__5775__auto__.push((arguments[i__5770__auto___30668]));

var G__30669 = (i__5770__auto___30668 + (1));
i__5770__auto___30668 = G__30669;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("defs",args__30135__auto__);
}));

(shadow.markup.react.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.defs.cljs$lang$applyTo = (function (seq30265){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30265));
}));


shadow.markup.react.linearGradient = (function shadow$markup$react$linearGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30670 = arguments.length;
var i__5770__auto___30671 = (0);
while(true){
if((i__5770__auto___30671 < len__5769__auto___30670)){
args__5775__auto__.push((arguments[i__5770__auto___30671]));

var G__30672 = (i__5770__auto___30671 + (1));
i__5770__auto___30671 = G__30672;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("linearGradient",args__30135__auto__);
}));

(shadow.markup.react.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.linearGradient.cljs$lang$applyTo = (function (seq30266){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30266));
}));


shadow.markup.react.polygon = (function shadow$markup$react$polygon(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30673 = arguments.length;
var i__5770__auto___30674 = (0);
while(true){
if((i__5770__auto___30674 < len__5769__auto___30673)){
args__5775__auto__.push((arguments[i__5770__auto___30674]));

var G__30675 = (i__5770__auto___30674 + (1));
i__5770__auto___30674 = G__30675;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("polygon",args__30135__auto__);
}));

(shadow.markup.react.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.polygon.cljs$lang$applyTo = (function (seq30267){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30267));
}));


shadow.markup.react.radialGradient = (function shadow$markup$react$radialGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30676 = arguments.length;
var i__5770__auto___30677 = (0);
while(true){
if((i__5770__auto___30677 < len__5769__auto___30676)){
args__5775__auto__.push((arguments[i__5770__auto___30677]));

var G__30678 = (i__5770__auto___30677 + (1));
i__5770__auto___30677 = G__30678;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("radialGradient",args__30135__auto__);
}));

(shadow.markup.react.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.radialGradient.cljs$lang$applyTo = (function (seq30268){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30268));
}));


shadow.markup.react.stop = (function shadow$markup$react$stop(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30679 = arguments.length;
var i__5770__auto___30680 = (0);
while(true){
if((i__5770__auto___30680 < len__5769__auto___30679)){
args__5775__auto__.push((arguments[i__5770__auto___30680]));

var G__30681 = (i__5770__auto___30680 + (1));
i__5770__auto___30680 = G__30681;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("stop",args__30135__auto__);
}));

(shadow.markup.react.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.stop.cljs$lang$applyTo = (function (seq30269){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30269));
}));


shadow.markup.react.tspan = (function shadow$markup$react$tspan(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30682 = arguments.length;
var i__5770__auto___30683 = (0);
while(true){
if((i__5770__auto___30683 < len__5769__auto___30682)){
args__5775__auto__.push((arguments[i__5770__auto___30683]));

var G__30684 = (i__5770__auto___30683 + (1));
i__5770__auto___30683 = G__30684;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.markup.react.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.markup.react.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args__30135__auto__){
return shadow.markup.react.impl.interop.create_element("tspan",args__30135__auto__);
}));

(shadow.markup.react.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.markup.react.tspan.cljs$lang$applyTo = (function (seq30270){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30270));
}));


//# sourceMappingURL=shadow.markup.react.js.map
