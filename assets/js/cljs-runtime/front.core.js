goog.provide('front.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
var module$node_modules$react_router_dom$dist$main=shadow.js.require("module$node_modules$react_router_dom$dist$main", {});
front.core.routes = (function front$core$routes(){
return helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Routes,null,helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj22925 = ({"path":"/","element":helix.core.get_react().createElement(front.home.home,null)});
return obj22925;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj22933 = ({"path":"/about","element":helix.core.get_react().createElement(front.about.about,null)});
return obj22933;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj22938 = ({"path":"/code/test","element":helix.core.get_react().createElement(front.code.code,null)});
return obj22938;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj22941 = ({"path":"/auth/callback","element":helix.core.get_react().createElement(front.code.callback,null)});
return obj22941;
})()),helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Route,(function (){var obj22945 = ({"path":"*","element":helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.Navigate,(function (){var obj22947 = ({"to":"404"});
return obj22947;
})())});
return obj22945;
})()));
});

front.core.providers = (function (){var G__22949 = (function front$core$providers_render(props__21367__auto__,maybe_ref__21368__auto__){
var vec__22950 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21367__auto__),maybe_ref__21368__auto__], null);
var map__22953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22950,(0),null);
var map__22953__$1 = cljs.core.__destructure_map(map__22953);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22953__$1,new cljs.core.Keyword(null,"children","children",-940561982));

return helix.core.get_react().createElement(module$node_modules$react_router_dom$dist$main.BrowserRouter,null,children);
});
if(goog.DEBUG === true){
var G__22954 = G__22949;
(G__22954.displayName = "front.core/providers");

return G__22954;
} else {
return G__22949;
}
})();




front.core.app = (function (){var G__22956 = (function front$core$app_render(props__21367__auto__,maybe_ref__21368__auto__){
var vec__22957 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__21367__auto__),maybe_ref__21368__auto__], null);

return helix.core.get_react().createElement(front.core.providers,null,helix.core.get_react().createElement(front.core.routes,null));
});
if(goog.DEBUG === true){
var G__22960 = G__22956;
(G__22960.displayName = "front.core/app");

return G__22960;
} else {
return G__22956;
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
