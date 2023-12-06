goog.provide('front.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
var module$node_modules$react_router_dom$dist$main=shadow.js.require("module$node_modules$react_router_dom$dist$main", {});
front.core.routes = (function front$core$routes(){
return helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Routes,null,helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23707 = ({"path":"/","element":helix.core.get_react().createElement(front.home.home,null)});
return obj23707;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23709 = ({"path":"/about","element":helix.core.get_react().createElement(front.about.about,null)});
return obj23709;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23711 = ({"path":"/code/test","element":helix.core.get_react().createElement(front.code.code,null)});
return obj23711;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23713 = ({"path":"/auth/callback","element":helix.core.get_react().createElement(front.code.callback,null)});
return obj23713;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23715 = ({"path":"*","element":helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Navigate,(function (){var obj23717 = ({"to":"404"});
return obj23717;
})())});
return obj23715;
})()));
});

front.core.providers = (function (){var G__23719 = (function front$core$providers_render(props__21571__auto__,maybe_ref__21572__auto__){
var vec__23720 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21571__auto__),maybe_ref__21572__auto__], null);
var map__23723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23720,(0),null);
var map__23723__$1 = cljs.core.__destructure_map(map__23723);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23723__$1,new cljs.core.Keyword(null,"children","children",-940561982));

return helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.BrowserRouter,null,children);
});
if(goog.DEBUG === true){
var G__23724 = G__23719;
(G__23724.displayName = "front.core/providers");

return G__23724;
} else {
return G__23719;
}
})();




front.core.app = (function (){var G__23726 = (function front$core$app_render(props__21571__auto__,maybe_ref__21572__auto__){
var vec__23727 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21571__auto__),maybe_ref__21572__auto__], null);

return helix.core.get_react().createElement(front.core.providers,null,helix.core.get_react().createElement(front.core.routes,null));
});
if(goog.DEBUG === true){
var G__23730 = G__23726;
(G__23730.displayName = "front.core/app");

return G__23730;
} else {
return G__23726;
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
