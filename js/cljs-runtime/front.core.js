goog.provide('front.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
var module$node_modules$react_router_dom$dist$main=shadow.js.require("module$node_modules$react_router_dom$dist$main", {});
if(goog.DEBUG){
front.core.sig23064 = helix.core.signature_BANG_();
} else {
}

front.core.providers = (function (){var G__23067 = (function front$core$providers_render(props__21308__auto__,maybe_ref__21309__auto__){
var vec__23068 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21308__auto__),maybe_ref__21309__auto__], null);
var map__23071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23068,(0),null);
var map__23071__$1 = cljs.core.__destructure_map(map__23071);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23071__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig23064)){
(front.core.sig23064.cljs$core$IFn$_invoke$arity$0 ? front.core.sig23064.cljs$core$IFn$_invoke$arity$0() : front.core.sig23064.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.BrowserRouter,null,children);
});
if(goog.DEBUG === true){
var G__23075 = G__23067;
(G__23075.displayName = "front.core/providers");

return G__23075;
} else {
return G__23067;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig23064)){
(front.core.sig23064.cljs$core$IFn$_invoke$arity$4 ? front.core.sig23064.cljs$core$IFn$_invoke$arity$4(front.core.providers,"",null,null) : front.core.sig23064.call(null,front.core.providers,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.providers,"front.core/providers");
} else {
}

if(goog.DEBUG){
front.core.sig23076 = helix.core.signature_BANG_();
} else {
}

front.core.layout = (function (){var G__23077 = (function front$core$layout_render(props__21308__auto__,maybe_ref__21309__auto__){
var vec__23079 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21308__auto__),maybe_ref__21309__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig23076)){
(front.core.sig23076.cljs$core$IFn$_invoke$arity$0 ? front.core.sig23076.cljs$core$IFn$_invoke$arity$0() : front.core.sig23076.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Outlet,null));
});
if(goog.DEBUG === true){
var G__23082 = G__23077;
(G__23082.displayName = "front.core/layout");

return G__23082;
} else {
return G__23077;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig23076)){
(front.core.sig23076.cljs$core$IFn$_invoke$arity$4 ? front.core.sig23076.cljs$core$IFn$_invoke$arity$4(front.core.layout,"",null,null) : front.core.sig23076.call(null,front.core.layout,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.layout,"front.core/layout");
} else {
}

if(goog.DEBUG){
front.core.sig23083 = helix.core.signature_BANG_();
} else {
}

front.core.home_page = (function (){var G__23088 = (function front$core$home_page_render(props__21308__auto__,maybe_ref__21309__auto__){
var vec__23089 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21308__auto__),maybe_ref__21309__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig23083)){
(front.core.sig23083.cljs$core$IFn$_invoke$arity$0 ? front.core.sig23083.cljs$core$IFn$_invoke$arity$0() : front.core.sig23083.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",null,"home");
});
if(goog.DEBUG === true){
var G__23096 = G__23088;
(G__23096.displayName = "front.core/home-page");

return G__23096;
} else {
return G__23088;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig23083)){
(front.core.sig23083.cljs$core$IFn$_invoke$arity$4 ? front.core.sig23083.cljs$core$IFn$_invoke$arity$4(front.core.home_page,"",null,null) : front.core.sig23083.call(null,front.core.home_page,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.home_page,"front.core/home-page");
} else {
}

if(goog.DEBUG){
front.core.sig23097 = helix.core.signature_BANG_();
} else {
}

front.core.code_page = (function (){var G__23098 = (function front$core$code_page_render(props__21308__auto__,maybe_ref__21309__auto__){
var vec__23099 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21308__auto__),maybe_ref__21309__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig23097)){
(front.core.sig23097.cljs$core$IFn$_invoke$arity$0 ? front.core.sig23097.cljs$core$IFn$_invoke$arity$0() : front.core.sig23097.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",null,"code");
});
if(goog.DEBUG === true){
var G__23103 = G__23098;
(G__23103.displayName = "front.core/code-page");

return G__23103;
} else {
return G__23098;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig23097)){
(front.core.sig23097.cljs$core$IFn$_invoke$arity$4 ? front.core.sig23097.cljs$core$IFn$_invoke$arity$4(front.core.code_page,"",null,null) : front.core.sig23097.call(null,front.core.code_page,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.code_page,"front.core/code-page");
} else {
}

if(goog.DEBUG){
front.core.sig23107 = helix.core.signature_BANG_();
} else {
}

front.core.about_page = (function (){var G__23108 = (function front$core$about_page_render(props__21308__auto__,maybe_ref__21309__auto__){
var vec__23109 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21308__auto__),maybe_ref__21309__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig23107)){
(front.core.sig23107.cljs$core$IFn$_invoke$arity$0 ? front.core.sig23107.cljs$core$IFn$_invoke$arity$0() : front.core.sig23107.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",null,"about");
});
if(goog.DEBUG === true){
var G__23112 = G__23108;
(G__23112.displayName = "front.core/about-page");

return G__23112;
} else {
return G__23108;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig23107)){
(front.core.sig23107.cljs$core$IFn$_invoke$arity$4 ? front.core.sig23107.cljs$core$IFn$_invoke$arity$4(front.core.about_page,"",null,null) : front.core.sig23107.call(null,front.core.about_page,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.about_page,"front.core/about-page");
} else {
}

if(goog.DEBUG){
front.core.sig23113 = helix.core.signature_BANG_();
} else {
}

front.core.not_found_page = (function (){var G__23114 = (function front$core$not_found_page_render(props__21308__auto__,maybe_ref__21309__auto__){
var vec__23115 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21308__auto__),maybe_ref__21309__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig23113)){
(front.core.sig23113.cljs$core$IFn$_invoke$arity$0 ? front.core.sig23113.cljs$core$IFn$_invoke$arity$0() : front.core.sig23113.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",null,"not found");
});
if(goog.DEBUG === true){
var G__23118 = G__23114;
(G__23118.displayName = "front.core/not-found-page");

return G__23118;
} else {
return G__23114;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig23113)){
(front.core.sig23113.cljs$core$IFn$_invoke$arity$4 ? front.core.sig23113.cljs$core$IFn$_invoke$arity$4(front.core.not_found_page,"",null,null) : front.core.sig23113.call(null,front.core.not_found_page,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.not_found_page,"front.core/not-found-page");
} else {
}

front.core.routes = (function front$core$routes(){
return helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Routes,null,helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23122 = ({"path":"/","element":helix.core.get_react().createElement(front.core.layout,null)});
return obj23122;
})(),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23126 = ({"index":true,"element":helix.core.get_react().createElement(front.core.home_page,null)});
return obj23126;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23130 = ({"path":"code","element":helix.core.get_react().createElement(front.core.code_page,null)});
return obj23130;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23132 = ({"path":"about","element":helix.core.get_react().createElement(front.core.about_page,null)});
return obj23132;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23134 = ({"path":"404","element":helix.core.get_react().createElement(front.core.not_found_page,null)});
return obj23134;
})())),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23136 = ({"path":"*","element":helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Navigate,(function (){var obj23138 = ({"to":"404"});
return obj23138;
})())});
return obj23136;
})()));
});
if(goog.DEBUG){
front.core.sig23139 = helix.core.signature_BANG_();
} else {
}

front.core.app = (function (){var G__23140 = (function front$core$app_render(props__21308__auto__,maybe_ref__21309__auto__){
var vec__23141 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21308__auto__),maybe_ref__21309__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig23139)){
(front.core.sig23139.cljs$core$IFn$_invoke$arity$0 ? front.core.sig23139.cljs$core$IFn$_invoke$arity$0() : front.core.sig23139.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement(front.core.providers,null,helix.core.get_react().createElement(front.core.routes,null));
});
if(goog.DEBUG === true){
var G__23144 = G__23140;
(G__23144.displayName = "front.core/app");

return G__23144;
} else {
return G__23140;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig23139)){
(front.core.sig23139.cljs$core$IFn$_invoke$arity$4 ? front.core.sig23139.cljs$core$IFn$_invoke$arity$4(front.core.app,"",null,null) : front.core.sig23139.call(null,front.core.app,"",null,null));
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
