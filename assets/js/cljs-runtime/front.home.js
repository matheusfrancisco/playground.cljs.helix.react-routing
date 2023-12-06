goog.provide('front.home');
if(goog.DEBUG){
front.home.sig23146 = helix.core.signature_BANG_();
} else {
}

front.home.home = (function (){var G__23147 = (function front$home$home_render(props__21428__auto__,maybe_ref__21429__auto__){
var vec__23148 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21428__auto__),maybe_ref__21429__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.home.sig23146)){
(front.home.sig23146.cljs$core$IFn$_invoke$arity$0 ? front.home.sig23146.cljs$core$IFn$_invoke$arity$0() : front.home.sig23146.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",null,"Home",helix.core.get_react().createElement("div",null,"This is a div"),helix.core.get_react().createElement("button",(function (){var obj23153 = ({"onClick":(function (){
return alert("Hello World");
})});
return obj23153;
})(),"go to about"));
});
if(goog.DEBUG === true){
var G__23154 = G__23147;
(G__23154.displayName = "front.home/home");

return G__23154;
} else {
return G__23147;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.home.sig23146)){
(front.home.sig23146.cljs$core$IFn$_invoke$arity$4 ? front.home.sig23146.cljs$core$IFn$_invoke$arity$4(front.home.home,"",null,null) : front.home.sig23146.call(null,front.home.home,"",null,null));
} else {
}

helix.core.register_BANG_(front.home.home,"front.home/home");
} else {
}


//# sourceMappingURL=front.home.js.map
