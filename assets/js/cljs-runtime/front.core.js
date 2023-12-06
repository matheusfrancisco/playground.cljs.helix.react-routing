goog.provide('front.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
var module$node_modules$react_router_dom$dist$main=shadow.js.require("module$node_modules$react_router_dom$dist$main", {});
front.core.routes = (function front$core$routes(){
return helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Routes,null,helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj30338 = ({"path":"/home","element":helix.core.get_react().createElement(front.home.home,null)});
return obj30338;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj30342 = ({"path":"/about","element":helix.core.get_react().createElement(front.about.about,null)});
return obj30342;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj30345 = ({"path":"/code/test","element":helix.core.get_react().createElement(front.code.code,null)});
return obj30345;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj30350 = ({"path":"/auth/callback","element":helix.core.get_react().createElement(front.code.callback,null)});
return obj30350;
})()));
});

front.core.providers = (function (){var G__30355 = (function front$core$providers_render(props__21368__auto__,maybe_ref__21369__auto__){
var vec__30358 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21368__auto__),maybe_ref__21369__auto__], null);
var map__30361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30358,(0),null);
var map__30361__$1 = cljs.core.__destructure_map(map__30361);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30361__$1,new cljs.core.Keyword(null,"children","children",-940561982));

return helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.BrowserRouter,null,children);
});
if(goog.DEBUG === true){
var G__30365 = G__30355;
(G__30365.displayName = "front.core/providers");

return G__30365;
} else {
return G__30355;
}
})();




front.core.app = (function (){var G__30368 = (function front$core$app_render(props__21368__auto__,maybe_ref__21369__auto__){
var vec__30372 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21368__auto__),maybe_ref__21369__auto__], null);

return helix.core.get_react().createElement(front.core.providers,null,helix.core.get_react().createElement(front.core.routes,null));
});
if(goog.DEBUG === true){
var G__30379 = G__30368;
(G__30379.displayName = "front.core/app");

return G__30379;
} else {
return G__30368;
}
})();



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
