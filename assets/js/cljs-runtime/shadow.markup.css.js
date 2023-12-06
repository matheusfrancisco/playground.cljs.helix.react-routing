goog.provide('shadow.markup.css');
shadow.markup.css.set_env_BANG_ = (function shadow$markup$css$set_env_BANG_(env){
return shadow.markup.react.impl.css.set_env_BANG_(env);
});
shadow.markup.css.root = (function shadow$markup$css$root(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28463 = arguments.length;
var i__5770__auto___28464 = (0);
while(true){
if((i__5770__auto___28464 < len__5769__auto___28463)){
args__5775__auto__.push((arguments[i__5770__auto___28464]));

var G__28465 = (i__5770__auto___28464 + (1));
i__5770__auto___28464 = G__28465;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.markup.css.root.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.markup.css.root.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,rules){
return shadow.markup.css.impl.gen.root_STAR_(attrs,rules);
}));

(shadow.markup.css.root.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.markup.css.root.cljs$lang$applyTo = (function (seq28461){
var G__28462 = cljs.core.first(seq28461);
var seq28461__$1 = cljs.core.next(seq28461);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28462,seq28461__$1);
}));

shadow.markup.css.rule = (function shadow$markup$css$rule(selector,attrs){
return shadow.markup.css.impl.gen.rule(selector,attrs);
});
shadow.markup.css.nested_rule = (function shadow$markup$css$nested_rule(parent,attrs){
return shadow.markup.css.impl.gen.nested_rule(parent,attrs);
});
/**
 * don't use directly, use defstyled macro
 */
shadow.markup.css.element_STAR_ = (function shadow$markup$css$element_STAR_(el_type,el_selector,style_fn){
return (new shadow.markup.react.impl.css.StyledElement(el_type,el_selector,style_fn,false));
});

//# sourceMappingURL=shadow.markup.css.js.map
