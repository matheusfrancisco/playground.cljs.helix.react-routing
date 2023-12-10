goog.provide('front.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
var module$node_modules$react_router_dom$dist$main=shadow.js.require("module$node_modules$react_router_dom$dist$main", {});
if(goog.DEBUG){
front.core.sig23014 = helix.core.signature_BANG_();
} else {
}

front.core.providers = (function (){var G__23017 = (function front$core$providers_render(props__21293__auto__,maybe_ref__21294__auto__){
var vec__23019 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21293__auto__),maybe_ref__21294__auto__], null);
var map__23022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23019,(0),null);
var map__23022__$1 = cljs.core.__destructure_map(map__23022);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23022__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig23014)){
(front.core.sig23014.cljs$core$IFn$_invoke$arity$0 ? front.core.sig23014.cljs$core$IFn$_invoke$arity$0() : front.core.sig23014.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.BrowserRouter,null,children);
});
if(goog.DEBUG === true){
var G__23027 = G__23017;
(G__23027.displayName = "front.core/providers");

return G__23027;
} else {
return G__23017;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig23014)){
(front.core.sig23014.cljs$core$IFn$_invoke$arity$4 ? front.core.sig23014.cljs$core$IFn$_invoke$arity$4(front.core.providers,"",null,null) : front.core.sig23014.call(null,front.core.providers,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.providers,"front.core/providers");
} else {
}

if(goog.DEBUG){
front.core.sig23031 = helix.core.signature_BANG_();
} else {
}

front.core.layout = (function (){var G__23033 = (function front$core$layout_render(props__21293__auto__,maybe_ref__21294__auto__){
var vec__23034 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21293__auto__),maybe_ref__21294__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig23031)){
(front.core.sig23031.cljs$core$IFn$_invoke$arity$0 ? front.core.sig23031.cljs$core$IFn$_invoke$arity$0() : front.core.sig23031.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Outlet,null));
});
if(goog.DEBUG === true){
var G__23039 = G__23033;
(G__23039.displayName = "front.core/layout");

return G__23039;
} else {
return G__23033;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig23031)){
(front.core.sig23031.cljs$core$IFn$_invoke$arity$4 ? front.core.sig23031.cljs$core$IFn$_invoke$arity$4(front.core.layout,"",null,null) : front.core.sig23031.call(null,front.core.layout,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.layout,"front.core/layout");
} else {
}

if(goog.DEBUG){
front.core.sig23042 = helix.core.signature_BANG_();
} else {
}

front.core.home_page = (function (){var G__23047 = (function front$core$home_page_render(props__21293__auto__,maybe_ref__21294__auto__){
var vec__23048 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21293__auto__),maybe_ref__21294__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig23042)){
(front.core.sig23042.cljs$core$IFn$_invoke$arity$0 ? front.core.sig23042.cljs$core$IFn$_invoke$arity$0() : front.core.sig23042.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",null,"home");
});
if(goog.DEBUG === true){
var G__23051 = G__23047;
(G__23051.displayName = "front.core/home-page");

return G__23051;
} else {
return G__23047;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig23042)){
(front.core.sig23042.cljs$core$IFn$_invoke$arity$4 ? front.core.sig23042.cljs$core$IFn$_invoke$arity$4(front.core.home_page,"",null,null) : front.core.sig23042.call(null,front.core.home_page,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.home_page,"front.core/home-page");
} else {
}

if(goog.DEBUG){
front.core.sig23052 = helix.core.signature_BANG_();
} else {
}

front.core.code_page = (function (){var G__23054 = (function front$core$code_page_render(props__21293__auto__,maybe_ref__21294__auto__){
var vec__23056 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21293__auto__),maybe_ref__21294__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig23052)){
(front.core.sig23052.cljs$core$IFn$_invoke$arity$0 ? front.core.sig23052.cljs$core$IFn$_invoke$arity$0() : front.core.sig23052.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",null,"code");
});
if(goog.DEBUG === true){
var G__23072 = G__23054;
(G__23072.displayName = "front.core/code-page");

return G__23072;
} else {
return G__23054;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig23052)){
(front.core.sig23052.cljs$core$IFn$_invoke$arity$4 ? front.core.sig23052.cljs$core$IFn$_invoke$arity$4(front.core.code_page,"",null,null) : front.core.sig23052.call(null,front.core.code_page,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.code_page,"front.core/code-page");
} else {
}

if(goog.DEBUG){
front.core.sig23076 = helix.core.signature_BANG_();
} else {
}

front.core.about_page = (function (){var G__23077 = (function front$core$about_page_render(props__21293__auto__,maybe_ref__21294__auto__){
var vec__23078 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21293__auto__),maybe_ref__21294__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig23076)){
(front.core.sig23076.cljs$core$IFn$_invoke$arity$0 ? front.core.sig23076.cljs$core$IFn$_invoke$arity$0() : front.core.sig23076.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",null,"about");
});
if(goog.DEBUG === true){
var G__23081 = G__23077;
(G__23081.displayName = "front.core/about-page");

return G__23081;
} else {
return G__23077;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig23076)){
(front.core.sig23076.cljs$core$IFn$_invoke$arity$4 ? front.core.sig23076.cljs$core$IFn$_invoke$arity$4(front.core.about_page,"",null,null) : front.core.sig23076.call(null,front.core.about_page,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.about_page,"front.core/about-page");
} else {
}

if(goog.DEBUG){
front.core.sig23084 = helix.core.signature_BANG_();
} else {
}

front.core.not_found_page = (function (){var G__23085 = (function front$core$not_found_page_render(props__21293__auto__,maybe_ref__21294__auto__){
var vec__23086 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21293__auto__),maybe_ref__21294__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig23084)){
(front.core.sig23084.cljs$core$IFn$_invoke$arity$0 ? front.core.sig23084.cljs$core$IFn$_invoke$arity$0() : front.core.sig23084.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",null,"not found");
});
if(goog.DEBUG === true){
var G__23089 = G__23085;
(G__23089.displayName = "front.core/not-found-page");

return G__23089;
} else {
return G__23085;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig23084)){
(front.core.sig23084.cljs$core$IFn$_invoke$arity$4 ? front.core.sig23084.cljs$core$IFn$_invoke$arity$4(front.core.not_found_page,"",null,null) : front.core.sig23084.call(null,front.core.not_found_page,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.not_found_page,"front.core/not-found-page");
} else {
}

front.core.routes = (function front$core$routes(){
return helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Routes,null,helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23096 = ({"path":"/","element":helix.core.get_react().createElement(front.core.layout,null)});
return obj23096;
})(),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23099 = ({"index":true,"element":helix.core.get_react().createElement(front.core.home_page,null)});
return obj23099;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23101 = ({"path":"code","element":helix.core.get_react().createElement(front.core.code_page,null)});
return obj23101;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23106 = ({"path":"about","element":helix.core.get_react().createElement(front.core.about_page,null)});
return obj23106;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23108 = ({"path":"404","element":helix.core.get_react().createElement(front.core.not_found_page,null)});
return obj23108;
})())),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23111 = ({"path":"*","element":helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Navigate,(function (){var obj23113 = ({"to":"404"});
return obj23113;
})())});
return obj23111;
})()));
});
if(goog.DEBUG){
front.core.sig23114 = helix.core.signature_BANG_();
} else {
}

front.core.app = (function (){var G__23115 = (function front$core$app_render(props__21293__auto__,maybe_ref__21294__auto__){
var vec__23116 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21293__auto__),maybe_ref__21294__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig23114)){
(front.core.sig23114.cljs$core$IFn$_invoke$arity$0 ? front.core.sig23114.cljs$core$IFn$_invoke$arity$0() : front.core.sig23114.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement(front.core.providers,null,helix.core.get_react().createElement(front.core.routes,null));
});
if(goog.DEBUG === true){
var G__23120 = G__23115;
(G__23120.displayName = "front.core/app");

return G__23120;
} else {
return G__23115;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig23114)){
(front.core.sig23114.cljs$core$IFn$_invoke$arity$4 ? front.core.sig23114.cljs$core$IFn$_invoke$arity$4(front.core.app,"",null,null) : front.core.sig23114.call(null,front.core.app,"",null,null));
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
