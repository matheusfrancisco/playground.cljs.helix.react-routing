goog.provide('front.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
var module$node_modules$react_router_dom$dist$main=shadow.js.require("module$node_modules$react_router_dom$dist$main", {});
front.core.routes = (function front$core$routes(){
return helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Switch,null,helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23084 = ({"path":"/","exact":true,"element":helix.core.get_react().createElement(front.home.home,null)});
return obj23084;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23086 = ({"path":"/about","element":helix.core.get_react().createElement(front.about.about,null)});
return obj23086;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23088 = ({"path":"/code/test","element":helix.core.get_react().createElement(front.code.code,null)});
return obj23088;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23090 = ({"path":"/auth/callback","element":helix.core.get_react().createElement(front.code.callback,null)});
return obj23090;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj23093 = ({"path":"*","element":helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Navigate,(function (){var obj23096 = ({"to":"404"});
return obj23096;
})())});
return obj23093;
})()));
});

front.core.providers = (function (){var G__23098 = (function front$core$providers_render(props__21326__auto__,maybe_ref__21327__auto__){
var vec__23101 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21326__auto__),maybe_ref__21327__auto__], null);
var map__23104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23101,(0),null);
var map__23104__$1 = cljs.core.__destructure_map(map__23104);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23104__$1,new cljs.core.Keyword(null,"children","children",-940561982));

return helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.BrowserRouter,null,children);
});
if(goog.DEBUG === true){
var G__23107 = G__23098;
(G__23107.displayName = "front.core/providers");

return G__23107;
} else {
return G__23098;
}
})();




front.core.app = (function (){var G__23109 = (function front$core$app_render(props__21326__auto__,maybe_ref__21327__auto__){
var vec__23110 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21326__auto__),maybe_ref__21327__auto__], null);

return helix.core.get_react().createElement(front.core.providers,null,helix.core.get_react().createElement(front.core.routes,null));
});
if(goog.DEBUG === true){
var G__23114 = G__23109;
(G__23114.displayName = "front.core/app");

return G__23114;
} else {
return G__23109;
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
