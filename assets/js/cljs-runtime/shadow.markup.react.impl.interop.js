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
var vec__22905 = args;
var seq__22906 = cljs.core.seq(vec__22905);
var first__22907 = cljs.core.first(seq__22906);
var seq__22906__$1 = cljs.core.next(seq__22906);
var head = first__22907;
var tail = seq__22906__$1;
if(cljs.core.map_QMARK_(head)){
return shadow.markup.react.impl.interop.create_element_STAR_((function (){var G__22909 = [type,shadow.markup.react.impl.interop.convert_props(head)];
shadow.markup.react.impl.interop.arr_append(G__22909,tail);

return G__22909;
})());
} else {
if((head == null)){
return shadow.markup.react.impl.interop.create_element_STAR_((function (){var G__22912 = [type,null];
shadow.markup.react.impl.interop.arr_append(G__22912,tail);

return G__22912;
})());
} else {
if(shadow.markup.react.impl.interop.element_QMARK_(head)){
return shadow.markup.react.impl.interop.create_element_STAR_((function (){var G__22914 = [type,null];
shadow.markup.react.impl.interop.arr_append(G__22914,args);

return G__22914;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return shadow.markup.react.impl.interop.create_element_STAR_((function (){var G__22917 = [type,head];
shadow.markup.react.impl.interop.arr_append(G__22917,tail);

return G__22917;
})());
} else {
return shadow.markup.react.impl.interop.create_element_STAR_((function (){var G__22918 = [type,null];
shadow.markup.react.impl.interop.arr_append(G__22918,args);

return G__22918;
})());

}
}
}
}
});

//# sourceMappingURL=shadow.markup.react.impl.interop.js.map
