goog.provide('front.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
var module$node_modules$react_router_dom$dist$main=shadow.js.require("module$node_modules$react_router_dom$dist$main", {});
if(goog.DEBUG){
front.core.sig22820 = helix.core.signature_BANG_();
} else {
}

front.core.providers = (function (){var G__22821 = (function front$core$providers_render(props__21349__auto__,maybe_ref__21350__auto__){
var vec__22822 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21349__auto__),maybe_ref__21350__auto__], null);
var map__22825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22822,(0),null);
var map__22825__$1 = cljs.core.__destructure_map(map__22825);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22825__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig22820)){
(front.core.sig22820.cljs$core$IFn$_invoke$arity$0 ? front.core.sig22820.cljs$core$IFn$_invoke$arity$0() : front.core.sig22820.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.BrowserRouter,null,children);
});
if(goog.DEBUG === true){
var G__22826 = G__22821;
(G__22826.displayName = "front.core/providers");

return G__22826;
} else {
return G__22821;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig22820)){
(front.core.sig22820.cljs$core$IFn$_invoke$arity$4 ? front.core.sig22820.cljs$core$IFn$_invoke$arity$4(front.core.providers,"",null,null) : front.core.sig22820.call(null,front.core.providers,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.providers,"front.core/providers");
} else {
}

if(goog.DEBUG){
front.core.sig22827 = helix.core.signature_BANG_();
} else {
}

front.core.layout = (function (){var G__22828 = (function front$core$layout_render(props__21349__auto__,maybe_ref__21350__auto__){
var vec__22829 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21349__auto__),maybe_ref__21350__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig22827)){
(front.core.sig22827.cljs$core$IFn$_invoke$arity$0 ? front.core.sig22827.cljs$core$IFn$_invoke$arity$0() : front.core.sig22827.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Outlet,null));
});
if(goog.DEBUG === true){
var G__22832 = G__22828;
(G__22832.displayName = "front.core/layout");

return G__22832;
} else {
return G__22828;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig22827)){
(front.core.sig22827.cljs$core$IFn$_invoke$arity$4 ? front.core.sig22827.cljs$core$IFn$_invoke$arity$4(front.core.layout,"",null,null) : front.core.sig22827.call(null,front.core.layout,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.layout,"front.core/layout");
} else {
}

if(goog.DEBUG){
front.core.sig22833 = helix.core.signature_BANG_();
} else {
}

front.core.home_page = (function (){var G__22834 = (function front$core$home_page_render(props__21349__auto__,maybe_ref__21350__auto__){
var vec__22839 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21349__auto__),maybe_ref__21350__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig22833)){
(front.core.sig22833.cljs$core$IFn$_invoke$arity$0 ? front.core.sig22833.cljs$core$IFn$_invoke$arity$0() : front.core.sig22833.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",null,"home");
});
if(goog.DEBUG === true){
var G__22842 = G__22834;
(G__22842.displayName = "front.core/home-page");

return G__22842;
} else {
return G__22834;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig22833)){
(front.core.sig22833.cljs$core$IFn$_invoke$arity$4 ? front.core.sig22833.cljs$core$IFn$_invoke$arity$4(front.core.home_page,"",null,null) : front.core.sig22833.call(null,front.core.home_page,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.home_page,"front.core/home-page");
} else {
}

if(goog.DEBUG){
front.core.sig22843 = helix.core.signature_BANG_();
} else {
}

front.core.code_page = (function (){var G__22844 = (function front$core$code_page_render(props__21349__auto__,maybe_ref__21350__auto__){
var vec__22845 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21349__auto__),maybe_ref__21350__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig22843)){
(front.core.sig22843.cljs$core$IFn$_invoke$arity$0 ? front.core.sig22843.cljs$core$IFn$_invoke$arity$0() : front.core.sig22843.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",null,"code");
});
if(goog.DEBUG === true){
var G__22848 = G__22844;
(G__22848.displayName = "front.core/code-page");

return G__22848;
} else {
return G__22844;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig22843)){
(front.core.sig22843.cljs$core$IFn$_invoke$arity$4 ? front.core.sig22843.cljs$core$IFn$_invoke$arity$4(front.core.code_page,"",null,null) : front.core.sig22843.call(null,front.core.code_page,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.code_page,"front.core/code-page");
} else {
}

if(goog.DEBUG){
front.core.sig22849 = helix.core.signature_BANG_();
} else {
}

front.core.about_page = (function (){var G__22850 = (function front$core$about_page_render(props__21349__auto__,maybe_ref__21350__auto__){
var vec__22851 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21349__auto__),maybe_ref__21350__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig22849)){
(front.core.sig22849.cljs$core$IFn$_invoke$arity$0 ? front.core.sig22849.cljs$core$IFn$_invoke$arity$0() : front.core.sig22849.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",null,"about");
});
if(goog.DEBUG === true){
var G__22854 = G__22850;
(G__22854.displayName = "front.core/about-page");

return G__22854;
} else {
return G__22850;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig22849)){
(front.core.sig22849.cljs$core$IFn$_invoke$arity$4 ? front.core.sig22849.cljs$core$IFn$_invoke$arity$4(front.core.about_page,"",null,null) : front.core.sig22849.call(null,front.core.about_page,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.about_page,"front.core/about-page");
} else {
}

if(goog.DEBUG){
front.core.sig22855 = helix.core.signature_BANG_();
} else {
}

front.core.not_found_page = (function (){var G__22862 = (function front$core$not_found_page_render(props__21349__auto__,maybe_ref__21350__auto__){
var vec__22863 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21349__auto__),maybe_ref__21350__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig22855)){
(front.core.sig22855.cljs$core$IFn$_invoke$arity$0 ? front.core.sig22855.cljs$core$IFn$_invoke$arity$0() : front.core.sig22855.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",null,"not found");
});
if(goog.DEBUG === true){
var G__22866 = G__22862;
(G__22866.displayName = "front.core/not-found-page");

return G__22866;
} else {
return G__22862;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig22855)){
(front.core.sig22855.cljs$core$IFn$_invoke$arity$4 ? front.core.sig22855.cljs$core$IFn$_invoke$arity$4(front.core.not_found_page,"",null,null) : front.core.sig22855.call(null,front.core.not_found_page,"",null,null));
} else {
}

helix.core.register_BANG_(front.core.not_found_page,"front.core/not-found-page");
} else {
}

front.core.routes = (function front$core$routes(){
return helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Routes,null,helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj22872 = ({"path":"/","element":helix.core.get_react().createElement(front.core.layout,null)});
return obj22872;
})(),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj22874 = ({"index":true,"element":helix.core.get_react().createElement(front.core.home_page,null)});
return obj22874;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj22876 = ({"path":"code","element":helix.core.get_react().createElement(front.core.code_page,null)});
return obj22876;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj22880 = ({"path":"about","element":helix.core.get_react().createElement(front.core.about_page,null)});
return obj22880;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj22882 = ({"path":"404","element":helix.core.get_react().createElement(front.core.not_found_page,null)});
return obj22882;
})())),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj22886 = ({"path":"*","element":helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Navigate,(function (){var obj22888 = ({"to":"404"});
return obj22888;
})())});
return obj22886;
})()));
});
if(goog.DEBUG){
front.core.sig22889 = helix.core.signature_BANG_();
} else {
}

front.core.app = (function (){var G__22891 = (function front$core$app_render(props__21349__auto__,maybe_ref__21350__auto__){
var vec__22893 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21349__auto__),maybe_ref__21350__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.core.sig22889)){
(front.core.sig22889.cljs$core$IFn$_invoke$arity$0 ? front.core.sig22889.cljs$core$IFn$_invoke$arity$0() : front.core.sig22889.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement(front.core.providers,null,helix.core.get_react().createElement(front.core.routes,null));
});
if(goog.DEBUG === true){
var G__22898 = G__22891;
(G__22898.displayName = "front.core/app");

return G__22898;
} else {
return G__22891;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.core.sig22889)){
(front.core.sig22889.cljs$core$IFn$_invoke$arity$4 ? front.core.sig22889.cljs$core$IFn$_invoke$arity$4(front.core.app,"",null,null) : front.core.sig22889.call(null,front.core.app,"",null,null));
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
