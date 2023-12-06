goog.provide('shadow.markup.react.impl.interop');
goog.scope(function(){
  shadow.markup.react.impl.interop.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
shadow.markup.react.impl.interop.element_marker = shadow.markup.react.impl.interop.goog$module$goog$object.get(module$node_modules$react$index.createElement("div",null),"$$typeof");
shadow.markup.react.impl.interop.element_QMARK_ = (function shadow$markup$react$impl$interop$element_QMARK_(x){
return ((cljs.core.object_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.markup.react.impl.interop.element_marker,shadow.markup.react.impl.interop.goog$module$goog$object.get(x,"$$typeof"))));
});
shadow.markup.react.impl.interop.convert_props = (function shadow$markup$react$impl$interop$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
shadow.markup.react.impl.interop.create_element_STAR_ = (function shadow$markup$react$impl$interop$create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return module$node_modules$react$index.createElement.apply(null,arr);
});
shadow.markup.react.impl.interop.arr_append_STAR_ = (function shadow$markup$react$impl$interop$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
shadow.markup.react.impl.interop.arr_append = (function shadow$markup$react$impl$interop$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.markup.react.impl.interop.arr_append_STAR_,arr,tail);
});
shadow.markup.react.impl.interop.create_element = (function shadow$markup$react$impl$interop$create_element(type,args){
var vec__23116 = args;
var seq__23117 = cljs.core.seq(vec__23116);
var first__23118 = cljs.core.first(seq__23117);
var seq__23117__$1 = cljs.core.next(seq__23117);
var head = first__23118;
var tail = seq__23117__$1;
if(cljs.core.map_QMARK_(head)){
return shadow.markup.react.impl.interop.create_element_STAR_((function (){var G__23129 = [type,shadow.markup.react.impl.interop.convert_props(head)];
shadow.markup.react.impl.interop.arr_append(G__23129,tail);

return G__23129;
})());
} else {
if((head == null)){
return shadow.markup.react.impl.interop.create_element_STAR_((function (){var G__23133 = [type,null];
shadow.markup.react.impl.interop.arr_append(G__23133,tail);

return G__23133;
})());
} else {
if(shadow.markup.react.impl.interop.element_QMARK_(head)){
return shadow.markup.react.impl.interop.create_element_STAR_((function (){var G__23134 = [type,null];
shadow.markup.react.impl.interop.arr_append(G__23134,args);

return G__23134;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return shadow.markup.react.impl.interop.create_element_STAR_((function (){var G__23135 = [type,head];
shadow.markup.react.impl.interop.arr_append(G__23135,tail);

return G__23135;
})());
} else {
return shadow.markup.react.impl.interop.create_element_STAR_((function (){var G__23136 = [type,null];
shadow.markup.react.impl.interop.arr_append(G__23136,args);

return G__23136;
})());

}
}
}
}
});

//# sourceMappingURL=shadow.markup.react.impl.interop.js.map
