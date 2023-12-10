goog.provide('front.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
var module$node_modules$react_router_dom$dist$main=shadow.js.require("module$node_modules$react_router_dom$dist$main", {});
if(goog.DEBUG){
front.core.sig22923 = helix.core.signature_BANG_();
} else {
}

front.core.providers = (function (){var G__22928 = (function front$core$providers_render(props__21367__auto__,maybe_ref__21368__auto__){
var vec__22941 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21367__auto__),maybe_ref__21368__auto__], null);
var map__22944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22941,(0),null);
var map__22944__$1 = cljs.core.__destructure_map(map__22944);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22944__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig22923)){
(front.core.sig22923.cljs$core$IFn$_invoke$arity$0 ? front.core.sig22923.cljs$core$IFn$_invoke$arity$0() : front.core.sig22923.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.BrowserRouter,null,children);
});
if(goog.DEBUG === true){
var G__22945 = G__22928;
(G__22945.displayName = "front.core/providers");

return G__22945;
} else {
return G__22928;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig22923)){
(front.core.sig22923.cljs$core$IFn$_invoke$arity$4 ? front.core.sig22923.cljs$core$IFn$_invoke$arity$4(front.core.providers,"",null,null) : front.core.sig22923.call(null,front.core.providers,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.providers,"front.core/providers");
} else {
}

if(goog.DEBUG){
front.core.sig22949 = helix.core.signature_BANG_();
} else {
}

front.core.layout = (function (){var G__22951 = (function front$core$layout_render(props__21367__auto__,maybe_ref__21368__auto__){
var vec__22952 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21367__auto__),maybe_ref__21368__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig22949)){
(front.core.sig22949.cljs$core$IFn$_invoke$arity$0 ? front.core.sig22949.cljs$core$IFn$_invoke$arity$0() : front.core.sig22949.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Outlet,null));
});
if(goog.DEBUG === true){
var G__22959 = G__22951;
(G__22959.displayName = "front.core/layout");

return G__22959;
} else {
return G__22951;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig22949)){
(front.core.sig22949.cljs$core$IFn$_invoke$arity$4 ? front.core.sig22949.cljs$core$IFn$_invoke$arity$4(front.core.layout,"",null,null) : front.core.sig22949.call(null,front.core.layout,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.layout,"front.core/layout");
} else {
}

if(goog.DEBUG){
front.core.sig22960 = helix.core.signature_BANG_();
} else {
}

front.core.home_page = (function (){var G__22961 = (function front$core$home_page_render(props__21367__auto__,maybe_ref__21368__auto__){
var vec__22962 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21367__auto__),maybe_ref__21368__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig22960)){
(front.core.sig22960.cljs$core$IFn$_invoke$arity$0 ? front.core.sig22960.cljs$core$IFn$_invoke$arity$0() : front.core.sig22960.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",null,"home");
});
if(goog.DEBUG === true){
var G__22965 = G__22961;
(G__22965.displayName = "front.core/home-page");

return G__22965;
} else {
return G__22961;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig22960)){
(front.core.sig22960.cljs$core$IFn$_invoke$arity$4 ? front.core.sig22960.cljs$core$IFn$_invoke$arity$4(front.core.home_page,"",null,null) : front.core.sig22960.call(null,front.core.home_page,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.home_page,"front.core/home-page");
} else {
}

if(goog.DEBUG){
front.core.sig22966 = helix.core.signature_BANG_();
} else {
}

front.core.code_page = (function (){var G__22967 = (function front$core$code_page_render(props__21367__auto__,maybe_ref__21368__auto__){
var vec__22968 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21367__auto__),maybe_ref__21368__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig22966)){
(front.core.sig22966.cljs$core$IFn$_invoke$arity$0 ? front.core.sig22966.cljs$core$IFn$_invoke$arity$0() : front.core.sig22966.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",null,"code");
});
if(goog.DEBUG === true){
var G__22971 = G__22967;
(G__22971.displayName = "front.core/code-page");

return G__22971;
} else {
return G__22967;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig22966)){
(front.core.sig22966.cljs$core$IFn$_invoke$arity$4 ? front.core.sig22966.cljs$core$IFn$_invoke$arity$4(front.core.code_page,"",null,null) : front.core.sig22966.call(null,front.core.code_page,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.code_page,"front.core/code-page");
} else {
}

if(goog.DEBUG){
front.core.sig22972 = helix.core.signature_BANG_();
} else {
}

front.core.about_page = (function (){var G__22973 = (function front$core$about_page_render(props__21367__auto__,maybe_ref__21368__auto__){
var vec__22974 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21367__auto__),maybe_ref__21368__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig22972)){
(front.core.sig22972.cljs$core$IFn$_invoke$arity$0 ? front.core.sig22972.cljs$core$IFn$_invoke$arity$0() : front.core.sig22972.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",null,"about");
});
if(goog.DEBUG === true){
var G__22977 = G__22973;
(G__22977.displayName = "front.core/about-page");

return G__22977;
} else {
return G__22973;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig22972)){
(front.core.sig22972.cljs$core$IFn$_invoke$arity$4 ? front.core.sig22972.cljs$core$IFn$_invoke$arity$4(front.core.about_page,"",null,null) : front.core.sig22972.call(null,front.core.about_page,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.about_page,"front.core/about-page");
} else {
}

if(goog.DEBUG){
front.core.sig22978 = helix.core.signature_BANG_();
} else {
}

front.core.not_found_page = (function (){var G__22979 = (function front$core$not_found_page_render(props__21367__auto__,maybe_ref__21368__auto__){
var vec__22980 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21367__auto__),maybe_ref__21368__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig22978)){
(front.core.sig22978.cljs$core$IFn$_invoke$arity$0 ? front.core.sig22978.cljs$core$IFn$_invoke$arity$0() : front.core.sig22978.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",null,"not found");
});
if(goog.DEBUG === true){
var G__22983 = G__22979;
(G__22983.displayName = "front.core/not-found-page");

return G__22983;
} else {
return G__22979;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig22978)){
(front.core.sig22978.cljs$core$IFn$_invoke$arity$4 ? front.core.sig22978.cljs$core$IFn$_invoke$arity$4(front.core.not_found_page,"",null,null) : front.core.sig22978.call(null,front.core.not_found_page,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.not_found_page,"front.core/not-found-page");
} else {
}

front.core.routes = (function front$core$routes(){
return helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Routes,null,helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23005 = ({"path":"/","element":helix.core.get_react().createElement(front.core.layout,null)});
return obj23005;
})(),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23007 = ({"index":true,"element":helix.core.get_react().createElement(front.core.home_page,null)});
return obj23007;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23009 = ({"path":"code","element":helix.core.get_react().createElement(front.core.code_page,null)});
return obj23009;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23011 = ({"path":"about","element":helix.core.get_react().createElement(front.core.about_page,null)});
return obj23011;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23013 = ({"path":"404","element":helix.core.get_react().createElement(front.core.not_found_page,null)});
return obj23013;
})())),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23015 = ({"path":"*","element":helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Navigate,(function (){var obj23017 = ({"to":"404"});
return obj23017;
})())});
return obj23015;
})()));
});
if(goog.DEBUG){
front.core.sig23018 = helix.core.signature_BANG_();
} else {
}

front.core.app = (function (){var G__23019 = (function front$core$app_render(props__21367__auto__,maybe_ref__21368__auto__){
var vec__23020 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21367__auto__),maybe_ref__21368__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig23018)){
(front.core.sig23018.cljs$core$IFn$_invoke$arity$0 ? front.core.sig23018.cljs$core$IFn$_invoke$arity$0() : front.core.sig23018.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement(front.core.providers,null,helix.core.get_react().createElement(front.core.routes,null));
});
if(goog.DEBUG === true){
var G__23023 = G__23019;
(G__23023.displayName = "front.core/app");

return G__23023;
} else {
return G__23019;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig23018)){
(front.core.sig23018.cljs$core$IFn$_invoke$arity$4 ? front.core.sig23018.cljs$core$IFn$_invoke$arity$4(front.core.app,"",null,null) : front.core.sig23018.call(null,front.core.app,"",null,null));
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
