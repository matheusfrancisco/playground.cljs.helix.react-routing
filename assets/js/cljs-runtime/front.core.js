goog.provide('front.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
var module$node_modules$react_router_dom$dist$main=shadow.js.require("module$node_modules$react_router_dom$dist$main", {});
front.core.routes = (function front$core$routes(){
return helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Routes,null,helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23060 = ({"path":"/","element":helix.core.get_react().createElement(front.home.home,null)});
return obj23060;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23063 = ({"path":"/about","element":helix.core.get_react().createElement(front.about.about,null)});
return obj23063;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23066 = ({"path":"/code/test","element":helix.core.get_react().createElement(front.code.code,null)});
return obj23066;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23068 = ({"path":"/auth/callback","element":helix.core.get_react().createElement(front.code.callback,null)});
return obj23068;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23070 = ({"path":"*","element":helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Navigate,(function (){var obj23072 = ({"to":"404"});
return obj23072;
})())});
return obj23070;
})()));
});

front.core.providers = (function (){var G__23075 = (function front$core$providers_render(props__21429__auto__,maybe_ref__21430__auto__){
var vec__23078 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21429__auto__),maybe_ref__21430__auto__], null);
var map__23081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23078,(0),null);
var map__23081__$1 = cljs.core.__destructure_map(map__23081);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23081__$1,new cljs.core.Keyword(null,"children","children",-940561982));

return helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.BrowserRouter,null,children);
});
if(goog.DEBUG === true){
var G__23083 = G__23075;
(G__23083.displayName = "front.core/providers");

return G__23083;
} else {
return G__23075;
}
})();




front.core.app = (function (){var G__23087 = (function front$core$app_render(props__21429__auto__,maybe_ref__21430__auto__){
var vec__23088 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21429__auto__),maybe_ref__21430__auto__], null);

return helix.core.get_react().createElement(front.core.providers,null,helix.core.get_react().createElement(front.core.routes,null));
});
if(goog.DEBUG === true){
var G__23091 = G__23087;
(G__23091.displayName = "front.core/app");

return G__23091;
} else {
return G__23087;
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
