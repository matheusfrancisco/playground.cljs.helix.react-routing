goog.provide('front.home');
if(goog.DEBUG){
front.home.sig22862 = helix.core.signature_BANG_();
} else {
}

front.home.home = (function (){var G__22863 = (function front$home$home_render(props__21367__auto__,maybe_ref__21368__auto__){
var vec__22864 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21367__auto__),maybe_ref__21368__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.home.sig22862)){
(front.home.sig22862.cljs$core$IFn$_invoke$arity$0 ? front.home.sig22862.cljs$core$IFn$_invoke$arity$0() : front.home.sig22862.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",null,"Home",helix.core.get_react().createElement("div",null,"This is a div"),helix.core.get_react().createElement("button",(function (){var obj22868 = ({"onClick":(function (){
return alert("Hello World");
})});
return obj22868;
})(),"go to about"));
});
if(goog.DEBUG === true){
var G__22869 = G__22863;
(G__22869.displayName = "front.home/home");

return G__22869;
} else {
return G__22863;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.home.sig22862)){
(front.home.sig22862.cljs$core$IFn$_invoke$arity$4 ? front.home.sig22862.cljs$core$IFn$_invoke$arity$4(front.home.home,"",null,null) : front.home.sig22862.call(null,front.home.home,"",null,null));
} else {
}

helix.core.register_BANG_(front.home.home,"front.home/home");
} else {
}


//# sourceMappingURL=front.home.js.map
