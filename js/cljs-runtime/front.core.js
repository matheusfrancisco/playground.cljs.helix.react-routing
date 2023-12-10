goog.provide('front.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
var module$node_modules$react_router_dom$dist$main=shadow.js.require("module$node_modules$react_router_dom$dist$main", {});
if(goog.DEBUG){
front.core.sig22982 = helix.core.signature_BANG_();
} else {
}

front.core.providers = (function (){var G__22983 = (function front$core$providers_render(props__21331__auto__,maybe_ref__21332__auto__){
var vec__22984 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21331__auto__),maybe_ref__21332__auto__], null);
var map__22987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22984,(0),null);
var map__22987__$1 = cljs.core.__destructure_map(map__22987);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22987__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig22982)){
(front.core.sig22982.cljs$core$IFn$_invoke$arity$0 ? front.core.sig22982.cljs$core$IFn$_invoke$arity$0() : front.core.sig22982.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.BrowserRouter,null,children);
});
if(goog.DEBUG === true){
var G__22988 = G__22983;
(G__22988.displayName = "front.core/providers");

return G__22988;
} else {
return G__22983;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig22982)){
(front.core.sig22982.cljs$core$IFn$_invoke$arity$4 ? front.core.sig22982.cljs$core$IFn$_invoke$arity$4(front.core.providers,"",null,null) : front.core.sig22982.call(null,front.core.providers,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.providers,"front.core/providers");
} else {
}

if(goog.DEBUG){
front.core.sig22989 = helix.core.signature_BANG_();
} else {
}

front.core.layout = (function (){var G__22990 = (function front$core$layout_render(props__21331__auto__,maybe_ref__21332__auto__){
var vec__22991 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21331__auto__),maybe_ref__21332__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig22989)){
(front.core.sig22989.cljs$core$IFn$_invoke$arity$0 ? front.core.sig22989.cljs$core$IFn$_invoke$arity$0() : front.core.sig22989.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Outlet,null));
});
if(goog.DEBUG === true){
var G__22994 = G__22990;
(G__22994.displayName = "front.core/layout");

return G__22994;
} else {
return G__22990;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig22989)){
(front.core.sig22989.cljs$core$IFn$_invoke$arity$4 ? front.core.sig22989.cljs$core$IFn$_invoke$arity$4(front.core.layout,"",null,null) : front.core.sig22989.call(null,front.core.layout,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.layout,"front.core/layout");
} else {
}

if(goog.DEBUG){
front.core.sig22995 = helix.core.signature_BANG_();
} else {
}

front.core.home_page = (function (){var G__22996 = (function front$core$home_page_render(props__21331__auto__,maybe_ref__21332__auto__){
var vec__22997 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21331__auto__),maybe_ref__21332__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig22995)){
(front.core.sig22995.cljs$core$IFn$_invoke$arity$0 ? front.core.sig22995.cljs$core$IFn$_invoke$arity$0() : front.core.sig22995.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",null,"home");
});
if(goog.DEBUG === true){
var G__23000 = G__22996;
(G__23000.displayName = "front.core/home-page");

return G__23000;
} else {
return G__22996;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig22995)){
(front.core.sig22995.cljs$core$IFn$_invoke$arity$4 ? front.core.sig22995.cljs$core$IFn$_invoke$arity$4(front.core.home_page,"",null,null) : front.core.sig22995.call(null,front.core.home_page,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.home_page,"front.core/home-page");
} else {
}

if(goog.DEBUG){
front.core.sig23001 = helix.core.signature_BANG_();
} else {
}

front.core.code_page = (function (){var G__23002 = (function front$core$code_page_render(props__21331__auto__,maybe_ref__21332__auto__){
var vec__23003 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21331__auto__),maybe_ref__21332__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig23001)){
(front.core.sig23001.cljs$core$IFn$_invoke$arity$0 ? front.core.sig23001.cljs$core$IFn$_invoke$arity$0() : front.core.sig23001.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",null,"code");
});
if(goog.DEBUG === true){
var G__23006 = G__23002;
(G__23006.displayName = "front.core/code-page");

return G__23006;
} else {
return G__23002;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig23001)){
(front.core.sig23001.cljs$core$IFn$_invoke$arity$4 ? front.core.sig23001.cljs$core$IFn$_invoke$arity$4(front.core.code_page,"",null,null) : front.core.sig23001.call(null,front.core.code_page,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.code_page,"front.core/code-page");
} else {
}

if(goog.DEBUG){
front.core.sig23007 = helix.core.signature_BANG_();
} else {
}

front.core.about_page = (function (){var G__23008 = (function front$core$about_page_render(props__21331__auto__,maybe_ref__21332__auto__){
var vec__23009 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21331__auto__),maybe_ref__21332__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig23007)){
(front.core.sig23007.cljs$core$IFn$_invoke$arity$0 ? front.core.sig23007.cljs$core$IFn$_invoke$arity$0() : front.core.sig23007.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",null,"about");
});
if(goog.DEBUG === true){
var G__23012 = G__23008;
(G__23012.displayName = "front.core/about-page");

return G__23012;
} else {
return G__23008;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig23007)){
(front.core.sig23007.cljs$core$IFn$_invoke$arity$4 ? front.core.sig23007.cljs$core$IFn$_invoke$arity$4(front.core.about_page,"",null,null) : front.core.sig23007.call(null,front.core.about_page,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.about_page,"front.core/about-page");
} else {
}

if(goog.DEBUG){
front.core.sig23013 = helix.core.signature_BANG_();
} else {
}

front.core.not_found_page = (function (){var G__23014 = (function front$core$not_found_page_render(props__21331__auto__,maybe_ref__21332__auto__){
var vec__23015 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21331__auto__),maybe_ref__21332__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig23013)){
(front.core.sig23013.cljs$core$IFn$_invoke$arity$0 ? front.core.sig23013.cljs$core$IFn$_invoke$arity$0() : front.core.sig23013.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",null,"not found");
});
if(goog.DEBUG === true){
var G__23019 = G__23014;
(G__23019.displayName = "front.core/not-found-page");

return G__23019;
} else {
return G__23014;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig23013)){
(front.core.sig23013.cljs$core$IFn$_invoke$arity$4 ? front.core.sig23013.cljs$core$IFn$_invoke$arity$4(front.core.not_found_page,"",null,null) : front.core.sig23013.call(null,front.core.not_found_page,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.not_found_page,"front.core/not-found-page");
} else {
}

front.core.routes = (function front$core$routes(){
return helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Routes,null,helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23024 = ({"path":"/","element":helix.core.get_react().createElement(front.core.layout,null)});
return obj23024;
})(),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23026 = ({"index":true,"element":helix.core.get_react().createElement(front.core.home_page,null)});
return obj23026;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23029 = ({"path":"code","element":helix.core.get_react().createElement(front.core.code_page,null)});
return obj23029;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23031 = ({"path":"about","element":helix.core.get_react().createElement(front.core.about_page,null)});
return obj23031;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23035 = ({"path":"404","element":helix.core.get_react().createElement(front.core.not_found_page,null)});
return obj23035;
})())),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23039 = ({"path":"*","element":helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Navigate,(function (){var obj23041 = ({"to":"404"});
return obj23041;
})())});
return obj23039;
})()));
});
if(goog.DEBUG){
front.core.sig23042 = helix.core.signature_BANG_();
} else {
}

front.core.app = (function (){var G__23043 = (function front$core$app_render(props__21331__auto__,maybe_ref__21332__auto__){
var vec__23044 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21331__auto__),maybe_ref__21332__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig23042)){
(front.core.sig23042.cljs$core$IFn$_invoke$arity$0 ? front.core.sig23042.cljs$core$IFn$_invoke$arity$0() : front.core.sig23042.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement(front.core.providers,null,helix.core.get_react().createElement(front.core.routes,null));
});
if(goog.DEBUG === true){
var G__23047 = G__23043;
(G__23047.displayName = "front.core/app");

return G__23047;
} else {
return G__23043;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig23042)){
(front.core.sig23042.cljs$core$IFn$_invoke$arity$4 ? front.core.sig23042.cljs$core$IFn$_invoke$arity$4(front.core.app,"",null,null) : front.core.sig23042.call(null,front.core.app,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.app,"front.core/app");
} else {
}

if((typeof front !== 'undefined') && (typeof front.core !== 'undefined') && (typeof front.core.root !== 'undefined')){
} else {
front.core.root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
}
front.core.render = (function front$core$render(){
return front.core.root.render(helix.core.get_react().createElement(module$node_modules$react$index.StrictMode,null,helix.core.get_react().createElement(front.core.app,null)));
});
front.core.init = (function front$core$init(){
return front.core.render();
});
goog.exportSymbol('front.core.init', front.core.init);

//# sourceMappingURL=front.core.js.map
