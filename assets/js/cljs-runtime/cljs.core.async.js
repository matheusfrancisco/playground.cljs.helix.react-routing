goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__25203 = arguments.length;
switch (G__25203) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25204 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25204 = (function (f,blockable,meta25205){
this.f = f;
this.blockable = blockable;
this.meta25205 = meta25205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25206,meta25205__$1){
var self__ = this;
var _25206__$1 = this;
return (new cljs.core.async.t_cljs$core$async25204(self__.f,self__.blockable,meta25205__$1));
}));

(cljs.core.async.t_cljs$core$async25204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25206){
var self__ = this;
var _25206__$1 = this;
return self__.meta25205;
}));

(cljs.core.async.t_cljs$core$async25204.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25204.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25204.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async25204.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async25204.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25205","meta25205",1937298302,null)], null);
}));

(cljs.core.async.t_cljs$core$async25204.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25204.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25204");

(cljs.core.async.t_cljs$core$async25204.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async25204");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25204.
 */
cljs.core.async.__GT_t_cljs$core$async25204 = (function cljs$core$async$__GT_t_cljs$core$async25204(f__$1,blockable__$1,meta25205){
return (new cljs.core.async.t_cljs$core$async25204(f__$1,blockable__$1,meta25205));
});

}

return (new cljs.core.async.t_cljs$core$async25204(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__25209 = arguments.length;
switch (G__25209) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__25211 = arguments.length;
switch (G__25211) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__25213 = arguments.length;
switch (G__25213) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_26785 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_26785) : fn1.call(null,val_26785));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_26785) : fn1.call(null,val_26785));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__25215 = arguments.length;
switch (G__25215) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___26787 = n;
var x_26788 = (0);
while(true){
if((x_26788 < n__5636__auto___26787)){
(a[x_26788] = x_26788);

var G__26789 = (x_26788 + (1));
x_26788 = G__26789;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25216 = (function (flag,meta25217){
this.flag = flag;
this.meta25217 = meta25217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25218,meta25217__$1){
var self__ = this;
var _25218__$1 = this;
return (new cljs.core.async.t_cljs$core$async25216(self__.flag,meta25217__$1));
}));

(cljs.core.async.t_cljs$core$async25216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25218){
var self__ = this;
var _25218__$1 = this;
return self__.meta25217;
}));

(cljs.core.async.t_cljs$core$async25216.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25216.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async25216.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25216.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async25216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25217","meta25217",-131081463,null)], null);
}));

(cljs.core.async.t_cljs$core$async25216.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25216");

(cljs.core.async.t_cljs$core$async25216.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async25216");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25216.
 */
cljs.core.async.__GT_t_cljs$core$async25216 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25216(flag__$1,meta25217){
return (new cljs.core.async.t_cljs$core$async25216(flag__$1,meta25217));
});

}

return (new cljs.core.async.t_cljs$core$async25216(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25223 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25223 = (function (flag,cb,meta25224){
this.flag = flag;
this.cb = cb;
this.meta25224 = meta25224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25225,meta25224__$1){
var self__ = this;
var _25225__$1 = this;
return (new cljs.core.async.t_cljs$core$async25223(self__.flag,self__.cb,meta25224__$1));
}));

(cljs.core.async.t_cljs$core$async25223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25225){
var self__ = this;
var _25225__$1 = this;
return self__.meta25224;
}));

(cljs.core.async.t_cljs$core$async25223.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25223.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async25223.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25223.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async25223.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25224","meta25224",-1645500672,null)], null);
}));

(cljs.core.async.t_cljs$core$async25223.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25223");

(cljs.core.async.t_cljs$core$async25223.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async25223");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25223.
 */
cljs.core.async.__GT_t_cljs$core$async25223 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25223(flag__$1,cb__$1,meta25224){
return (new cljs.core.async.t_cljs$core$async25223(flag__$1,cb__$1,meta25224));
});

}

return (new cljs.core.async.t_cljs$core$async25223(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25229_SHARP_){
var G__25236 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25229_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25236) : fret.call(null,G__25236));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25230_SHARP_){
var G__25238 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25230_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25238) : fret.call(null,G__25238));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26792 = (i + (1));
i = G__26792;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26793 = arguments.length;
var i__5770__auto___26794 = (0);
while(true){
if((i__5770__auto___26794 < len__5769__auto___26793)){
args__5775__auto__.push((arguments[i__5770__auto___26794]));

var G__26795 = (i__5770__auto___26794 + (1));
i__5770__auto___26794 = G__26795;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25246){
var map__25247 = p__25246;
var map__25247__$1 = cljs.core.__destructure_map(map__25247);
var opts = map__25247__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25244){
var G__25245 = cljs.core.first(seq25244);
var seq25244__$1 = cljs.core.next(seq25244);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25245,seq25244__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__25254 = arguments.length;
switch (G__25254) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25095__auto___26797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25096__auto__ = (function (){var switch__24913__auto__ = (function (state_25341){
var state_val_25342 = (state_25341[(1)]);
if((state_val_25342 === (7))){
var inst_25337 = (state_25341[(2)]);
var state_25341__$1 = state_25341;
var statearr_25347_26798 = state_25341__$1;
(statearr_25347_26798[(2)] = inst_25337);

(statearr_25347_26798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25342 === (1))){
var state_25341__$1 = state_25341;
var statearr_25348_26799 = state_25341__$1;
(statearr_25348_26799[(2)] = null);

(statearr_25348_26799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25342 === (4))){
var inst_25311 = (state_25341[(7)]);
var inst_25311__$1 = (state_25341[(2)]);
var inst_25317 = (inst_25311__$1 == null);
var state_25341__$1 = (function (){var statearr_25352 = state_25341;
(statearr_25352[(7)] = inst_25311__$1);

return statearr_25352;
})();
if(cljs.core.truth_(inst_25317)){
var statearr_25353_26800 = state_25341__$1;
(statearr_25353_26800[(1)] = (5));

} else {
var statearr_25354_26801 = state_25341__$1;
(statearr_25354_26801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25342 === (13))){
var state_25341__$1 = state_25341;
var statearr_25356_26802 = state_25341__$1;
(statearr_25356_26802[(2)] = null);

(statearr_25356_26802[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25342 === (6))){
var inst_25311 = (state_25341[(7)]);
var state_25341__$1 = state_25341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25341__$1,(11),to,inst_25311);
} else {
if((state_val_25342 === (3))){
var inst_25339 = (state_25341[(2)]);
var state_25341__$1 = state_25341;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25341__$1,inst_25339);
} else {
if((state_val_25342 === (12))){
var state_25341__$1 = state_25341;
var statearr_25359_26803 = state_25341__$1;
(statearr_25359_26803[(2)] = null);

(statearr_25359_26803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25342 === (2))){
var state_25341__$1 = state_25341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25341__$1,(4),from);
} else {
if((state_val_25342 === (11))){
var inst_25329 = (state_25341[(2)]);
var state_25341__$1 = state_25341;
if(cljs.core.truth_(inst_25329)){
var statearr_25360_26804 = state_25341__$1;
(statearr_25360_26804[(1)] = (12));

} else {
var statearr_25361_26805 = state_25341__$1;
(statearr_25361_26805[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25342 === (9))){
var state_25341__$1 = state_25341;
var statearr_25362_26806 = state_25341__$1;
(statearr_25362_26806[(2)] = null);

(statearr_25362_26806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25342 === (5))){
var state_25341__$1 = state_25341;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25363_26807 = state_25341__$1;
(statearr_25363_26807[(1)] = (8));

} else {
var statearr_25364_26808 = state_25341__$1;
(statearr_25364_26808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25342 === (14))){
var inst_25335 = (state_25341[(2)]);
var state_25341__$1 = state_25341;
var statearr_25365_26809 = state_25341__$1;
(statearr_25365_26809[(2)] = inst_25335);

(statearr_25365_26809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25342 === (10))){
var inst_25326 = (state_25341[(2)]);
var state_25341__$1 = state_25341;
var statearr_25366_26810 = state_25341__$1;
(statearr_25366_26810[(2)] = inst_25326);

(statearr_25366_26810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25342 === (8))){
var inst_25322 = cljs.core.async.close_BANG_(to);
var state_25341__$1 = state_25341;
var statearr_25367_26811 = state_25341__$1;
(statearr_25367_26811[(2)] = inst_25322);

(statearr_25367_26811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24914__auto__ = null;
var cljs$core$async$state_machine__24914__auto____0 = (function (){
var statearr_25369 = [null,null,null,null,null,null,null,null];
(statearr_25369[(0)] = cljs$core$async$state_machine__24914__auto__);

(statearr_25369[(1)] = (1));

return statearr_25369;
});
var cljs$core$async$state_machine__24914__auto____1 = (function (state_25341){
while(true){
var ret_value__24915__auto__ = (function (){try{while(true){
var result__24916__auto__ = switch__24913__auto__(state_25341);
if(cljs.core.keyword_identical_QMARK_(result__24916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24916__auto__;
}
break;
}
}catch (e25370){var ex__24917__auto__ = e25370;
var statearr_25371_26812 = state_25341;
(statearr_25371_26812[(2)] = ex__24917__auto__);


if(cljs.core.seq((state_25341[(4)]))){
var statearr_25372_26813 = state_25341;
(statearr_25372_26813[(1)] = cljs.core.first((state_25341[(4)])));

} else {
throw ex__24917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26814 = state_25341;
state_25341 = G__26814;
continue;
} else {
return ret_value__24915__auto__;
}
break;
}
});
cljs$core$async$state_machine__24914__auto__ = function(state_25341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24914__auto____1.call(this,state_25341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24914__auto____0;
cljs$core$async$state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24914__auto____1;
return cljs$core$async$state_machine__24914__auto__;
})()
})();
var state__25097__auto__ = (function (){var statearr_25373 = f__25096__auto__();
(statearr_25373[(6)] = c__25095__auto___26797);

return statearr_25373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25097__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__25376){
var vec__25377 = p__25376;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25377,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25377,(1),null);
var job = vec__25377;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__25095__auto___26815 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25096__auto__ = (function (){var switch__24913__auto__ = (function (state_25384){
var state_val_25385 = (state_25384[(1)]);
if((state_val_25385 === (1))){
var state_25384__$1 = state_25384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25384__$1,(2),res,v);
} else {
if((state_val_25385 === (2))){
var inst_25381 = (state_25384[(2)]);
var inst_25382 = cljs.core.async.close_BANG_(res);
var state_25384__$1 = (function (){var statearr_25387 = state_25384;
(statearr_25387[(7)] = inst_25381);

return statearr_25387;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25384__$1,inst_25382);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____0 = (function (){
var statearr_25389 = [null,null,null,null,null,null,null,null];
(statearr_25389[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__);

(statearr_25389[(1)] = (1));

return statearr_25389;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____1 = (function (state_25384){
while(true){
var ret_value__24915__auto__ = (function (){try{while(true){
var result__24916__auto__ = switch__24913__auto__(state_25384);
if(cljs.core.keyword_identical_QMARK_(result__24916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24916__auto__;
}
break;
}
}catch (e25390){var ex__24917__auto__ = e25390;
var statearr_25391_26816 = state_25384;
(statearr_25391_26816[(2)] = ex__24917__auto__);


if(cljs.core.seq((state_25384[(4)]))){
var statearr_25393_26817 = state_25384;
(statearr_25393_26817[(1)] = cljs.core.first((state_25384[(4)])));

} else {
throw ex__24917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26818 = state_25384;
state_25384 = G__26818;
continue;
} else {
return ret_value__24915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__ = function(state_25384){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____1.call(this,state_25384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__;
})()
})();
var state__25097__auto__ = (function (){var statearr_25395 = f__25096__auto__();
(statearr_25395[(6)] = c__25095__auto___26815);

return statearr_25395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25097__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__25396){
var vec__25397 = p__25396;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25397,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25397,(1),null);
var job = vec__25397;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___26819 = n;
var __26820 = (0);
while(true){
if((__26820 < n__5636__auto___26819)){
var G__25401_26821 = type;
var G__25401_26822__$1 = (((G__25401_26821 instanceof cljs.core.Keyword))?G__25401_26821.fqn:null);
switch (G__25401_26822__$1) {
case "compute":
var c__25095__auto___26824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__26820,c__25095__auto___26824,G__25401_26821,G__25401_26822__$1,n__5636__auto___26819,jobs,results,process__$1,async){
return (function (){
var f__25096__auto__ = (function (){var switch__24913__auto__ = ((function (__26820,c__25095__auto___26824,G__25401_26821,G__25401_26822__$1,n__5636__auto___26819,jobs,results,process__$1,async){
return (function (state_25415){
var state_val_25416 = (state_25415[(1)]);
if((state_val_25416 === (1))){
var state_25415__$1 = state_25415;
var statearr_25419_26825 = state_25415__$1;
(statearr_25419_26825[(2)] = null);

(statearr_25419_26825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (2))){
var state_25415__$1 = state_25415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25415__$1,(4),jobs);
} else {
if((state_val_25416 === (3))){
var inst_25413 = (state_25415[(2)]);
var state_25415__$1 = state_25415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25415__$1,inst_25413);
} else {
if((state_val_25416 === (4))){
var inst_25405 = (state_25415[(2)]);
var inst_25406 = process__$1(inst_25405);
var state_25415__$1 = state_25415;
if(cljs.core.truth_(inst_25406)){
var statearr_25421_26826 = state_25415__$1;
(statearr_25421_26826[(1)] = (5));

} else {
var statearr_25422_26827 = state_25415__$1;
(statearr_25422_26827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (5))){
var state_25415__$1 = state_25415;
var statearr_25423_26828 = state_25415__$1;
(statearr_25423_26828[(2)] = null);

(statearr_25423_26828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (6))){
var state_25415__$1 = state_25415;
var statearr_25424_26829 = state_25415__$1;
(statearr_25424_26829[(2)] = null);

(statearr_25424_26829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (7))){
var inst_25411 = (state_25415[(2)]);
var state_25415__$1 = state_25415;
var statearr_25426_26830 = state_25415__$1;
(statearr_25426_26830[(2)] = inst_25411);

(statearr_25426_26830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__26820,c__25095__auto___26824,G__25401_26821,G__25401_26822__$1,n__5636__auto___26819,jobs,results,process__$1,async))
;
return ((function (__26820,switch__24913__auto__,c__25095__auto___26824,G__25401_26821,G__25401_26822__$1,n__5636__auto___26819,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____0 = (function (){
var statearr_25427 = [null,null,null,null,null,null,null];
(statearr_25427[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__);

(statearr_25427[(1)] = (1));

return statearr_25427;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____1 = (function (state_25415){
while(true){
var ret_value__24915__auto__ = (function (){try{while(true){
var result__24916__auto__ = switch__24913__auto__(state_25415);
if(cljs.core.keyword_identical_QMARK_(result__24916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24916__auto__;
}
break;
}
}catch (e25428){var ex__24917__auto__ = e25428;
var statearr_25429_26831 = state_25415;
(statearr_25429_26831[(2)] = ex__24917__auto__);


if(cljs.core.seq((state_25415[(4)]))){
var statearr_25430_26832 = state_25415;
(statearr_25430_26832[(1)] = cljs.core.first((state_25415[(4)])));

} else {
throw ex__24917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26833 = state_25415;
state_25415 = G__26833;
continue;
} else {
return ret_value__24915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__ = function(state_25415){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____1.call(this,state_25415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__;
})()
;})(__26820,switch__24913__auto__,c__25095__auto___26824,G__25401_26821,G__25401_26822__$1,n__5636__auto___26819,jobs,results,process__$1,async))
})();
var state__25097__auto__ = (function (){var statearr_25431 = f__25096__auto__();
(statearr_25431[(6)] = c__25095__auto___26824);

return statearr_25431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25097__auto__);
});})(__26820,c__25095__auto___26824,G__25401_26821,G__25401_26822__$1,n__5636__auto___26819,jobs,results,process__$1,async))
);


break;
case "async":
var c__25095__auto___26834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__26820,c__25095__auto___26834,G__25401_26821,G__25401_26822__$1,n__5636__auto___26819,jobs,results,process__$1,async){
return (function (){
var f__25096__auto__ = (function (){var switch__24913__auto__ = ((function (__26820,c__25095__auto___26834,G__25401_26821,G__25401_26822__$1,n__5636__auto___26819,jobs,results,process__$1,async){
return (function (state_25444){
var state_val_25445 = (state_25444[(1)]);
if((state_val_25445 === (1))){
var state_25444__$1 = state_25444;
var statearr_25446_26835 = state_25444__$1;
(statearr_25446_26835[(2)] = null);

(statearr_25446_26835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (2))){
var state_25444__$1 = state_25444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25444__$1,(4),jobs);
} else {
if((state_val_25445 === (3))){
var inst_25442 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25444__$1,inst_25442);
} else {
if((state_val_25445 === (4))){
var inst_25434 = (state_25444[(2)]);
var inst_25435 = async(inst_25434);
var state_25444__$1 = state_25444;
if(cljs.core.truth_(inst_25435)){
var statearr_25447_26836 = state_25444__$1;
(statearr_25447_26836[(1)] = (5));

} else {
var statearr_25448_26837 = state_25444__$1;
(statearr_25448_26837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (5))){
var state_25444__$1 = state_25444;
var statearr_25449_26838 = state_25444__$1;
(statearr_25449_26838[(2)] = null);

(statearr_25449_26838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (6))){
var state_25444__$1 = state_25444;
var statearr_25450_26839 = state_25444__$1;
(statearr_25450_26839[(2)] = null);

(statearr_25450_26839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (7))){
var inst_25440 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25451_26840 = state_25444__$1;
(statearr_25451_26840[(2)] = inst_25440);

(statearr_25451_26840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__26820,c__25095__auto___26834,G__25401_26821,G__25401_26822__$1,n__5636__auto___26819,jobs,results,process__$1,async))
;
return ((function (__26820,switch__24913__auto__,c__25095__auto___26834,G__25401_26821,G__25401_26822__$1,n__5636__auto___26819,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____0 = (function (){
var statearr_25452 = [null,null,null,null,null,null,null];
(statearr_25452[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__);

(statearr_25452[(1)] = (1));

return statearr_25452;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____1 = (function (state_25444){
while(true){
var ret_value__24915__auto__ = (function (){try{while(true){
var result__24916__auto__ = switch__24913__auto__(state_25444);
if(cljs.core.keyword_identical_QMARK_(result__24916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24916__auto__;
}
break;
}
}catch (e25453){var ex__24917__auto__ = e25453;
var statearr_25454_26842 = state_25444;
(statearr_25454_26842[(2)] = ex__24917__auto__);


if(cljs.core.seq((state_25444[(4)]))){
var statearr_25455_26843 = state_25444;
(statearr_25455_26843[(1)] = cljs.core.first((state_25444[(4)])));

} else {
throw ex__24917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26844 = state_25444;
state_25444 = G__26844;
continue;
} else {
return ret_value__24915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__ = function(state_25444){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____1.call(this,state_25444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__;
})()
;})(__26820,switch__24913__auto__,c__25095__auto___26834,G__25401_26821,G__25401_26822__$1,n__5636__auto___26819,jobs,results,process__$1,async))
})();
var state__25097__auto__ = (function (){var statearr_25456 = f__25096__auto__();
(statearr_25456[(6)] = c__25095__auto___26834);

return statearr_25456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25097__auto__);
});})(__26820,c__25095__auto___26834,G__25401_26821,G__25401_26822__$1,n__5636__auto___26819,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25401_26822__$1)].join('')));

}

var G__26845 = (__26820 + (1));
__26820 = G__26845;
continue;
} else {
}
break;
}

var c__25095__auto___26846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25096__auto__ = (function (){var switch__24913__auto__ = (function (state_25478){
var state_val_25479 = (state_25478[(1)]);
if((state_val_25479 === (7))){
var inst_25474 = (state_25478[(2)]);
var state_25478__$1 = state_25478;
var statearr_25480_26848 = state_25478__$1;
(statearr_25480_26848[(2)] = inst_25474);

(statearr_25480_26848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (1))){
var state_25478__$1 = state_25478;
var statearr_25481_26849 = state_25478__$1;
(statearr_25481_26849[(2)] = null);

(statearr_25481_26849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (4))){
var inst_25459 = (state_25478[(7)]);
var inst_25459__$1 = (state_25478[(2)]);
var inst_25460 = (inst_25459__$1 == null);
var state_25478__$1 = (function (){var statearr_25482 = state_25478;
(statearr_25482[(7)] = inst_25459__$1);

return statearr_25482;
})();
if(cljs.core.truth_(inst_25460)){
var statearr_25483_26851 = state_25478__$1;
(statearr_25483_26851[(1)] = (5));

} else {
var statearr_25484_26852 = state_25478__$1;
(statearr_25484_26852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (6))){
var inst_25459 = (state_25478[(7)]);
var inst_25464 = (state_25478[(8)]);
var inst_25464__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_25465 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25466 = [inst_25459,inst_25464__$1];
var inst_25467 = (new cljs.core.PersistentVector(null,2,(5),inst_25465,inst_25466,null));
var state_25478__$1 = (function (){var statearr_25485 = state_25478;
(statearr_25485[(8)] = inst_25464__$1);

return statearr_25485;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25478__$1,(8),jobs,inst_25467);
} else {
if((state_val_25479 === (3))){
var inst_25476 = (state_25478[(2)]);
var state_25478__$1 = state_25478;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25478__$1,inst_25476);
} else {
if((state_val_25479 === (2))){
var state_25478__$1 = state_25478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25478__$1,(4),from);
} else {
if((state_val_25479 === (9))){
var inst_25471 = (state_25478[(2)]);
var state_25478__$1 = (function (){var statearr_25486 = state_25478;
(statearr_25486[(9)] = inst_25471);

return statearr_25486;
})();
var statearr_25487_26853 = state_25478__$1;
(statearr_25487_26853[(2)] = null);

(statearr_25487_26853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (5))){
var inst_25462 = cljs.core.async.close_BANG_(jobs);
var state_25478__$1 = state_25478;
var statearr_25488_26855 = state_25478__$1;
(statearr_25488_26855[(2)] = inst_25462);

(statearr_25488_26855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (8))){
var inst_25464 = (state_25478[(8)]);
var inst_25469 = (state_25478[(2)]);
var state_25478__$1 = (function (){var statearr_25489 = state_25478;
(statearr_25489[(10)] = inst_25469);

return statearr_25489;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25478__$1,(9),results,inst_25464);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____0 = (function (){
var statearr_25490 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25490[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__);

(statearr_25490[(1)] = (1));

return statearr_25490;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____1 = (function (state_25478){
while(true){
var ret_value__24915__auto__ = (function (){try{while(true){
var result__24916__auto__ = switch__24913__auto__(state_25478);
if(cljs.core.keyword_identical_QMARK_(result__24916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24916__auto__;
}
break;
}
}catch (e25491){var ex__24917__auto__ = e25491;
var statearr_25492_26857 = state_25478;
(statearr_25492_26857[(2)] = ex__24917__auto__);


if(cljs.core.seq((state_25478[(4)]))){
var statearr_25493_26858 = state_25478;
(statearr_25493_26858[(1)] = cljs.core.first((state_25478[(4)])));

} else {
throw ex__24917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26859 = state_25478;
state_25478 = G__26859;
continue;
} else {
return ret_value__24915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__ = function(state_25478){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____1.call(this,state_25478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__;
})()
})();
var state__25097__auto__ = (function (){var statearr_25494 = f__25096__auto__();
(statearr_25494[(6)] = c__25095__auto___26846);

return statearr_25494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25097__auto__);
}));


var c__25095__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25096__auto__ = (function (){var switch__24913__auto__ = (function (state_25532){
var state_val_25533 = (state_25532[(1)]);
if((state_val_25533 === (7))){
var inst_25528 = (state_25532[(2)]);
var state_25532__$1 = state_25532;
var statearr_25534_26860 = state_25532__$1;
(statearr_25534_26860[(2)] = inst_25528);

(statearr_25534_26860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (20))){
var state_25532__$1 = state_25532;
var statearr_25535_26862 = state_25532__$1;
(statearr_25535_26862[(2)] = null);

(statearr_25535_26862[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (1))){
var state_25532__$1 = state_25532;
var statearr_25536_26864 = state_25532__$1;
(statearr_25536_26864[(2)] = null);

(statearr_25536_26864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (4))){
var inst_25497 = (state_25532[(7)]);
var inst_25497__$1 = (state_25532[(2)]);
var inst_25498 = (inst_25497__$1 == null);
var state_25532__$1 = (function (){var statearr_25537 = state_25532;
(statearr_25537[(7)] = inst_25497__$1);

return statearr_25537;
})();
if(cljs.core.truth_(inst_25498)){
var statearr_25538_26865 = state_25532__$1;
(statearr_25538_26865[(1)] = (5));

} else {
var statearr_25539_26866 = state_25532__$1;
(statearr_25539_26866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (15))){
var inst_25510 = (state_25532[(8)]);
var state_25532__$1 = state_25532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25532__$1,(18),to,inst_25510);
} else {
if((state_val_25533 === (21))){
var inst_25523 = (state_25532[(2)]);
var state_25532__$1 = state_25532;
var statearr_25540_26867 = state_25532__$1;
(statearr_25540_26867[(2)] = inst_25523);

(statearr_25540_26867[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (13))){
var inst_25525 = (state_25532[(2)]);
var state_25532__$1 = (function (){var statearr_25541 = state_25532;
(statearr_25541[(9)] = inst_25525);

return statearr_25541;
})();
var statearr_25542_26868 = state_25532__$1;
(statearr_25542_26868[(2)] = null);

(statearr_25542_26868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (6))){
var inst_25497 = (state_25532[(7)]);
var state_25532__$1 = state_25532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25532__$1,(11),inst_25497);
} else {
if((state_val_25533 === (17))){
var inst_25518 = (state_25532[(2)]);
var state_25532__$1 = state_25532;
if(cljs.core.truth_(inst_25518)){
var statearr_25543_26869 = state_25532__$1;
(statearr_25543_26869[(1)] = (19));

} else {
var statearr_25544_26870 = state_25532__$1;
(statearr_25544_26870[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (3))){
var inst_25530 = (state_25532[(2)]);
var state_25532__$1 = state_25532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25532__$1,inst_25530);
} else {
if((state_val_25533 === (12))){
var inst_25507 = (state_25532[(10)]);
var state_25532__$1 = state_25532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25532__$1,(14),inst_25507);
} else {
if((state_val_25533 === (2))){
var state_25532__$1 = state_25532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25532__$1,(4),results);
} else {
if((state_val_25533 === (19))){
var state_25532__$1 = state_25532;
var statearr_25545_26873 = state_25532__$1;
(statearr_25545_26873[(2)] = null);

(statearr_25545_26873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (11))){
var inst_25507 = (state_25532[(2)]);
var state_25532__$1 = (function (){var statearr_25546 = state_25532;
(statearr_25546[(10)] = inst_25507);

return statearr_25546;
})();
var statearr_25547_26874 = state_25532__$1;
(statearr_25547_26874[(2)] = null);

(statearr_25547_26874[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (9))){
var state_25532__$1 = state_25532;
var statearr_25548_26875 = state_25532__$1;
(statearr_25548_26875[(2)] = null);

(statearr_25548_26875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (5))){
var state_25532__$1 = state_25532;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25549_26876 = state_25532__$1;
(statearr_25549_26876[(1)] = (8));

} else {
var statearr_25550_26877 = state_25532__$1;
(statearr_25550_26877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (14))){
var inst_25512 = (state_25532[(11)]);
var inst_25510 = (state_25532[(8)]);
var inst_25510__$1 = (state_25532[(2)]);
var inst_25511 = (inst_25510__$1 == null);
var inst_25512__$1 = cljs.core.not(inst_25511);
var state_25532__$1 = (function (){var statearr_25551 = state_25532;
(statearr_25551[(11)] = inst_25512__$1);

(statearr_25551[(8)] = inst_25510__$1);

return statearr_25551;
})();
if(inst_25512__$1){
var statearr_25552_26878 = state_25532__$1;
(statearr_25552_26878[(1)] = (15));

} else {
var statearr_25553_26879 = state_25532__$1;
(statearr_25553_26879[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (16))){
var inst_25512 = (state_25532[(11)]);
var state_25532__$1 = state_25532;
var statearr_25554_26880 = state_25532__$1;
(statearr_25554_26880[(2)] = inst_25512);

(statearr_25554_26880[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (10))){
var inst_25504 = (state_25532[(2)]);
var state_25532__$1 = state_25532;
var statearr_25555_26881 = state_25532__$1;
(statearr_25555_26881[(2)] = inst_25504);

(statearr_25555_26881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (18))){
var inst_25515 = (state_25532[(2)]);
var state_25532__$1 = state_25532;
var statearr_25556_26882 = state_25532__$1;
(statearr_25556_26882[(2)] = inst_25515);

(statearr_25556_26882[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25533 === (8))){
var inst_25501 = cljs.core.async.close_BANG_(to);
var state_25532__$1 = state_25532;
var statearr_25558_26883 = state_25532__$1;
(statearr_25558_26883[(2)] = inst_25501);

(statearr_25558_26883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____0 = (function (){
var statearr_25559 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25559[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__);

(statearr_25559[(1)] = (1));

return statearr_25559;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____1 = (function (state_25532){
while(true){
var ret_value__24915__auto__ = (function (){try{while(true){
var result__24916__auto__ = switch__24913__auto__(state_25532);
if(cljs.core.keyword_identical_QMARK_(result__24916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24916__auto__;
}
break;
}
}catch (e25560){var ex__24917__auto__ = e25560;
var statearr_25561_26884 = state_25532;
(statearr_25561_26884[(2)] = ex__24917__auto__);


if(cljs.core.seq((state_25532[(4)]))){
var statearr_25562_26885 = state_25532;
(statearr_25562_26885[(1)] = cljs.core.first((state_25532[(4)])));

} else {
throw ex__24917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26886 = state_25532;
state_25532 = G__26886;
continue;
} else {
return ret_value__24915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__ = function(state_25532){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____1.call(this,state_25532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24914__auto__;
})()
})();
var state__25097__auto__ = (function (){var statearr_25581 = f__25096__auto__();
(statearr_25581[(6)] = c__25095__auto__);

return statearr_25581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25097__auto__);
}));

return c__25095__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__25588 = arguments.length;
switch (G__25588) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__25590 = arguments.length;
switch (G__25590) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__25596 = arguments.length;
switch (G__25596) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__25095__auto___26890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25096__auto__ = (function (){var switch__24913__auto__ = (function (state_25622){
var state_val_25623 = (state_25622[(1)]);
if((state_val_25623 === (7))){
var inst_25618 = (state_25622[(2)]);
var state_25622__$1 = state_25622;
var statearr_25625_26891 = state_25622__$1;
(statearr_25625_26891[(2)] = inst_25618);

(statearr_25625_26891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (1))){
var state_25622__$1 = state_25622;
var statearr_25626_26892 = state_25622__$1;
(statearr_25626_26892[(2)] = null);

(statearr_25626_26892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (4))){
var inst_25599 = (state_25622[(7)]);
var inst_25599__$1 = (state_25622[(2)]);
var inst_25600 = (inst_25599__$1 == null);
var state_25622__$1 = (function (){var statearr_25627 = state_25622;
(statearr_25627[(7)] = inst_25599__$1);

return statearr_25627;
})();
if(cljs.core.truth_(inst_25600)){
var statearr_25628_26893 = state_25622__$1;
(statearr_25628_26893[(1)] = (5));

} else {
var statearr_25629_26894 = state_25622__$1;
(statearr_25629_26894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (13))){
var state_25622__$1 = state_25622;
var statearr_25630_26895 = state_25622__$1;
(statearr_25630_26895[(2)] = null);

(statearr_25630_26895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (6))){
var inst_25599 = (state_25622[(7)]);
var inst_25605 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_25599) : p.call(null,inst_25599));
var state_25622__$1 = state_25622;
if(cljs.core.truth_(inst_25605)){
var statearr_25631_26896 = state_25622__$1;
(statearr_25631_26896[(1)] = (9));

} else {
var statearr_25632_26897 = state_25622__$1;
(statearr_25632_26897[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (3))){
var inst_25620 = (state_25622[(2)]);
var state_25622__$1 = state_25622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25622__$1,inst_25620);
} else {
if((state_val_25623 === (12))){
var state_25622__$1 = state_25622;
var statearr_25633_26898 = state_25622__$1;
(statearr_25633_26898[(2)] = null);

(statearr_25633_26898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (2))){
var state_25622__$1 = state_25622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25622__$1,(4),ch);
} else {
if((state_val_25623 === (11))){
var inst_25599 = (state_25622[(7)]);
var inst_25609 = (state_25622[(2)]);
var state_25622__$1 = state_25622;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25622__$1,(8),inst_25609,inst_25599);
} else {
if((state_val_25623 === (9))){
var state_25622__$1 = state_25622;
var statearr_25634_26899 = state_25622__$1;
(statearr_25634_26899[(2)] = tc);

(statearr_25634_26899[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (5))){
var inst_25602 = cljs.core.async.close_BANG_(tc);
var inst_25603 = cljs.core.async.close_BANG_(fc);
var state_25622__$1 = (function (){var statearr_25635 = state_25622;
(statearr_25635[(8)] = inst_25602);

return statearr_25635;
})();
var statearr_25636_26900 = state_25622__$1;
(statearr_25636_26900[(2)] = inst_25603);

(statearr_25636_26900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (14))){
var inst_25616 = (state_25622[(2)]);
var state_25622__$1 = state_25622;
var statearr_25637_26901 = state_25622__$1;
(statearr_25637_26901[(2)] = inst_25616);

(statearr_25637_26901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (10))){
var state_25622__$1 = state_25622;
var statearr_25638_26902 = state_25622__$1;
(statearr_25638_26902[(2)] = fc);

(statearr_25638_26902[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25623 === (8))){
var inst_25611 = (state_25622[(2)]);
var state_25622__$1 = state_25622;
if(cljs.core.truth_(inst_25611)){
var statearr_25639_26903 = state_25622__$1;
(statearr_25639_26903[(1)] = (12));

} else {
var statearr_25640_26904 = state_25622__$1;
(statearr_25640_26904[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24914__auto__ = null;
var cljs$core$async$state_machine__24914__auto____0 = (function (){
var statearr_25641 = [null,null,null,null,null,null,null,null,null];
(statearr_25641[(0)] = cljs$core$async$state_machine__24914__auto__);

(statearr_25641[(1)] = (1));

return statearr_25641;
});
var cljs$core$async$state_machine__24914__auto____1 = (function (state_25622){
while(true){
var ret_value__24915__auto__ = (function (){try{while(true){
var result__24916__auto__ = switch__24913__auto__(state_25622);
if(cljs.core.keyword_identical_QMARK_(result__24916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24916__auto__;
}
break;
}
}catch (e25642){var ex__24917__auto__ = e25642;
var statearr_25643_26905 = state_25622;
(statearr_25643_26905[(2)] = ex__24917__auto__);


if(cljs.core.seq((state_25622[(4)]))){
var statearr_25644_26906 = state_25622;
(statearr_25644_26906[(1)] = cljs.core.first((state_25622[(4)])));

} else {
throw ex__24917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26909 = state_25622;
state_25622 = G__26909;
continue;
} else {
return ret_value__24915__auto__;
}
break;
}
});
cljs$core$async$state_machine__24914__auto__ = function(state_25622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24914__auto____1.call(this,state_25622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24914__auto____0;
cljs$core$async$state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24914__auto____1;
return cljs$core$async$state_machine__24914__auto__;
})()
})();
var state__25097__auto__ = (function (){var statearr_25645 = f__25096__auto__();
(statearr_25645[(6)] = c__25095__auto___26890);

return statearr_25645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25097__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25095__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25096__auto__ = (function (){var switch__24913__auto__ = (function (state_25667){
var state_val_25668 = (state_25667[(1)]);
if((state_val_25668 === (7))){
var inst_25663 = (state_25667[(2)]);
var state_25667__$1 = state_25667;
var statearr_25669_26910 = state_25667__$1;
(statearr_25669_26910[(2)] = inst_25663);

(statearr_25669_26910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (1))){
var inst_25646 = init;
var inst_25647 = inst_25646;
var state_25667__$1 = (function (){var statearr_25670 = state_25667;
(statearr_25670[(7)] = inst_25647);

return statearr_25670;
})();
var statearr_25671_26911 = state_25667__$1;
(statearr_25671_26911[(2)] = null);

(statearr_25671_26911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (4))){
var inst_25650 = (state_25667[(8)]);
var inst_25650__$1 = (state_25667[(2)]);
var inst_25651 = (inst_25650__$1 == null);
var state_25667__$1 = (function (){var statearr_25672 = state_25667;
(statearr_25672[(8)] = inst_25650__$1);

return statearr_25672;
})();
if(cljs.core.truth_(inst_25651)){
var statearr_25673_26912 = state_25667__$1;
(statearr_25673_26912[(1)] = (5));

} else {
var statearr_25674_26913 = state_25667__$1;
(statearr_25674_26913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (6))){
var inst_25650 = (state_25667[(8)]);
var inst_25647 = (state_25667[(7)]);
var inst_25654 = (state_25667[(9)]);
var inst_25654__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_25647,inst_25650) : f.call(null,inst_25647,inst_25650));
var inst_25655 = cljs.core.reduced_QMARK_(inst_25654__$1);
var state_25667__$1 = (function (){var statearr_25675 = state_25667;
(statearr_25675[(9)] = inst_25654__$1);

return statearr_25675;
})();
if(inst_25655){
var statearr_25676_26914 = state_25667__$1;
(statearr_25676_26914[(1)] = (8));

} else {
var statearr_25677_26915 = state_25667__$1;
(statearr_25677_26915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (3))){
var inst_25665 = (state_25667[(2)]);
var state_25667__$1 = state_25667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25667__$1,inst_25665);
} else {
if((state_val_25668 === (2))){
var state_25667__$1 = state_25667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25667__$1,(4),ch);
} else {
if((state_val_25668 === (9))){
var inst_25654 = (state_25667[(9)]);
var inst_25647 = inst_25654;
var state_25667__$1 = (function (){var statearr_25678 = state_25667;
(statearr_25678[(7)] = inst_25647);

return statearr_25678;
})();
var statearr_25679_26918 = state_25667__$1;
(statearr_25679_26918[(2)] = null);

(statearr_25679_26918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (5))){
var inst_25647 = (state_25667[(7)]);
var state_25667__$1 = state_25667;
var statearr_25680_26919 = state_25667__$1;
(statearr_25680_26919[(2)] = inst_25647);

(statearr_25680_26919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (10))){
var inst_25661 = (state_25667[(2)]);
var state_25667__$1 = state_25667;
var statearr_25681_26920 = state_25667__$1;
(statearr_25681_26920[(2)] = inst_25661);

(statearr_25681_26920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (8))){
var inst_25654 = (state_25667[(9)]);
var inst_25657 = cljs.core.deref(inst_25654);
var state_25667__$1 = state_25667;
var statearr_25682_26921 = state_25667__$1;
(statearr_25682_26921[(2)] = inst_25657);

(statearr_25682_26921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__24914__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24914__auto____0 = (function (){
var statearr_25683 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25683[(0)] = cljs$core$async$reduce_$_state_machine__24914__auto__);

(statearr_25683[(1)] = (1));

return statearr_25683;
});
var cljs$core$async$reduce_$_state_machine__24914__auto____1 = (function (state_25667){
while(true){
var ret_value__24915__auto__ = (function (){try{while(true){
var result__24916__auto__ = switch__24913__auto__(state_25667);
if(cljs.core.keyword_identical_QMARK_(result__24916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24916__auto__;
}
break;
}
}catch (e25684){var ex__24917__auto__ = e25684;
var statearr_25685_26922 = state_25667;
(statearr_25685_26922[(2)] = ex__24917__auto__);


if(cljs.core.seq((state_25667[(4)]))){
var statearr_25686_26923 = state_25667;
(statearr_25686_26923[(1)] = cljs.core.first((state_25667[(4)])));

} else {
throw ex__24917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26924 = state_25667;
state_25667 = G__26924;
continue;
} else {
return ret_value__24915__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24914__auto__ = function(state_25667){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24914__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24914__auto____1.call(this,state_25667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24914__auto____0;
cljs$core$async$reduce_$_state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24914__auto____1;
return cljs$core$async$reduce_$_state_machine__24914__auto__;
})()
})();
var state__25097__auto__ = (function (){var statearr_25687 = f__25096__auto__();
(statearr_25687[(6)] = c__25095__auto__);

return statearr_25687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25097__auto__);
}));

return c__25095__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__25095__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25096__auto__ = (function (){var switch__24913__auto__ = (function (state_25693){
var state_val_25694 = (state_25693[(1)]);
if((state_val_25694 === (1))){
var inst_25688 = cljs.core.async.reduce(f__$1,init,ch);
var state_25693__$1 = state_25693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25693__$1,(2),inst_25688);
} else {
if((state_val_25694 === (2))){
var inst_25690 = (state_25693[(2)]);
var inst_25691 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_25690) : f__$1.call(null,inst_25690));
var state_25693__$1 = state_25693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25693__$1,inst_25691);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__24914__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24914__auto____0 = (function (){
var statearr_25695 = [null,null,null,null,null,null,null];
(statearr_25695[(0)] = cljs$core$async$transduce_$_state_machine__24914__auto__);

(statearr_25695[(1)] = (1));

return statearr_25695;
});
var cljs$core$async$transduce_$_state_machine__24914__auto____1 = (function (state_25693){
while(true){
var ret_value__24915__auto__ = (function (){try{while(true){
var result__24916__auto__ = switch__24913__auto__(state_25693);
if(cljs.core.keyword_identical_QMARK_(result__24916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24916__auto__;
}
break;
}
}catch (e25696){var ex__24917__auto__ = e25696;
var statearr_25697_26926 = state_25693;
(statearr_25697_26926[(2)] = ex__24917__auto__);


if(cljs.core.seq((state_25693[(4)]))){
var statearr_25698_26927 = state_25693;
(statearr_25698_26927[(1)] = cljs.core.first((state_25693[(4)])));

} else {
throw ex__24917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26928 = state_25693;
state_25693 = G__26928;
continue;
} else {
return ret_value__24915__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24914__auto__ = function(state_25693){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24914__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24914__auto____1.call(this,state_25693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24914__auto____0;
cljs$core$async$transduce_$_state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24914__auto____1;
return cljs$core$async$transduce_$_state_machine__24914__auto__;
})()
})();
var state__25097__auto__ = (function (){var statearr_25699 = f__25096__auto__();
(statearr_25699[(6)] = c__25095__auto__);

return statearr_25699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25097__auto__);
}));

return c__25095__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__25701 = arguments.length;
switch (G__25701) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25095__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25096__auto__ = (function (){var switch__24913__auto__ = (function (state_25726){
var state_val_25727 = (state_25726[(1)]);
if((state_val_25727 === (7))){
var inst_25708 = (state_25726[(2)]);
var state_25726__$1 = state_25726;
var statearr_25728_26934 = state_25726__$1;
(statearr_25728_26934[(2)] = inst_25708);

(statearr_25728_26934[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25727 === (1))){
var inst_25702 = cljs.core.seq(coll);
var inst_25703 = inst_25702;
var state_25726__$1 = (function (){var statearr_25729 = state_25726;
(statearr_25729[(7)] = inst_25703);

return statearr_25729;
})();
var statearr_25730_26935 = state_25726__$1;
(statearr_25730_26935[(2)] = null);

(statearr_25730_26935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25727 === (4))){
var inst_25703 = (state_25726[(7)]);
var inst_25706 = cljs.core.first(inst_25703);
var state_25726__$1 = state_25726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25726__$1,(7),ch,inst_25706);
} else {
if((state_val_25727 === (13))){
var inst_25720 = (state_25726[(2)]);
var state_25726__$1 = state_25726;
var statearr_25731_26936 = state_25726__$1;
(statearr_25731_26936[(2)] = inst_25720);

(statearr_25731_26936[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25727 === (6))){
var inst_25711 = (state_25726[(2)]);
var state_25726__$1 = state_25726;
if(cljs.core.truth_(inst_25711)){
var statearr_25732_26937 = state_25726__$1;
(statearr_25732_26937[(1)] = (8));

} else {
var statearr_25733_26938 = state_25726__$1;
(statearr_25733_26938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25727 === (3))){
var inst_25724 = (state_25726[(2)]);
var state_25726__$1 = state_25726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25726__$1,inst_25724);
} else {
if((state_val_25727 === (12))){
var state_25726__$1 = state_25726;
var statearr_25734_26939 = state_25726__$1;
(statearr_25734_26939[(2)] = null);

(statearr_25734_26939[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25727 === (2))){
var inst_25703 = (state_25726[(7)]);
var state_25726__$1 = state_25726;
if(cljs.core.truth_(inst_25703)){
var statearr_25735_26940 = state_25726__$1;
(statearr_25735_26940[(1)] = (4));

} else {
var statearr_25736_26941 = state_25726__$1;
(statearr_25736_26941[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25727 === (11))){
var inst_25717 = cljs.core.async.close_BANG_(ch);
var state_25726__$1 = state_25726;
var statearr_25737_26942 = state_25726__$1;
(statearr_25737_26942[(2)] = inst_25717);

(statearr_25737_26942[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25727 === (9))){
var state_25726__$1 = state_25726;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25738_26943 = state_25726__$1;
(statearr_25738_26943[(1)] = (11));

} else {
var statearr_25739_26944 = state_25726__$1;
(statearr_25739_26944[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25727 === (5))){
var inst_25703 = (state_25726[(7)]);
var state_25726__$1 = state_25726;
var statearr_25740_26945 = state_25726__$1;
(statearr_25740_26945[(2)] = inst_25703);

(statearr_25740_26945[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25727 === (10))){
var inst_25722 = (state_25726[(2)]);
var state_25726__$1 = state_25726;
var statearr_25741_26946 = state_25726__$1;
(statearr_25741_26946[(2)] = inst_25722);

(statearr_25741_26946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25727 === (8))){
var inst_25703 = (state_25726[(7)]);
var inst_25713 = cljs.core.next(inst_25703);
var inst_25703__$1 = inst_25713;
var state_25726__$1 = (function (){var statearr_25742 = state_25726;
(statearr_25742[(7)] = inst_25703__$1);

return statearr_25742;
})();
var statearr_25743_26947 = state_25726__$1;
(statearr_25743_26947[(2)] = null);

(statearr_25743_26947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24914__auto__ = null;
var cljs$core$async$state_machine__24914__auto____0 = (function (){
var statearr_25744 = [null,null,null,null,null,null,null,null];
(statearr_25744[(0)] = cljs$core$async$state_machine__24914__auto__);

(statearr_25744[(1)] = (1));

return statearr_25744;
});
var cljs$core$async$state_machine__24914__auto____1 = (function (state_25726){
while(true){
var ret_value__24915__auto__ = (function (){try{while(true){
var result__24916__auto__ = switch__24913__auto__(state_25726);
if(cljs.core.keyword_identical_QMARK_(result__24916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24916__auto__;
}
break;
}
}catch (e25745){var ex__24917__auto__ = e25745;
var statearr_25746_26948 = state_25726;
(statearr_25746_26948[(2)] = ex__24917__auto__);


if(cljs.core.seq((state_25726[(4)]))){
var statearr_25747_26949 = state_25726;
(statearr_25747_26949[(1)] = cljs.core.first((state_25726[(4)])));

} else {
throw ex__24917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26950 = state_25726;
state_25726 = G__26950;
continue;
} else {
return ret_value__24915__auto__;
}
break;
}
});
cljs$core$async$state_machine__24914__auto__ = function(state_25726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24914__auto____1.call(this,state_25726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24914__auto____0;
cljs$core$async$state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24914__auto____1;
return cljs$core$async$state_machine__24914__auto__;
})()
})();
var state__25097__auto__ = (function (){var statearr_25748 = f__25096__auto__();
(statearr_25748[(6)] = c__25095__auto__);

return statearr_25748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25097__auto__);
}));

return c__25095__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__25750 = arguments.length;
switch (G__25750) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_26952 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_26952(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_26953 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_26953(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_26954 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_26954(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_26955 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_26955(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25751 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25751 = (function (ch,cs,meta25752){
this.ch = ch;
this.cs = cs;
this.meta25752 = meta25752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25753,meta25752__$1){
var self__ = this;
var _25753__$1 = this;
return (new cljs.core.async.t_cljs$core$async25751(self__.ch,self__.cs,meta25752__$1));
}));

(cljs.core.async.t_cljs$core$async25751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25753){
var self__ = this;
var _25753__$1 = this;
return self__.meta25752;
}));

(cljs.core.async.t_cljs$core$async25751.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25751.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25751.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25751.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async25751.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async25751.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async25751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25752","meta25752",1948103995,null)], null);
}));

(cljs.core.async.t_cljs$core$async25751.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25751");

(cljs.core.async.t_cljs$core$async25751.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async25751");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25751.
 */
cljs.core.async.__GT_t_cljs$core$async25751 = (function cljs$core$async$mult_$___GT_t_cljs$core$async25751(ch__$1,cs__$1,meta25752){
return (new cljs.core.async.t_cljs$core$async25751(ch__$1,cs__$1,meta25752));
});

}

return (new cljs.core.async.t_cljs$core$async25751(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__25095__auto___26956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25096__auto__ = (function (){var switch__24913__auto__ = (function (state_25886){
var state_val_25887 = (state_25886[(1)]);
if((state_val_25887 === (7))){
var inst_25882 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
var statearr_25888_26957 = state_25886__$1;
(statearr_25888_26957[(2)] = inst_25882);

(statearr_25888_26957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (20))){
var inst_25787 = (state_25886[(7)]);
var inst_25799 = cljs.core.first(inst_25787);
var inst_25800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25799,(0),null);
var inst_25801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25799,(1),null);
var state_25886__$1 = (function (){var statearr_25889 = state_25886;
(statearr_25889[(8)] = inst_25800);

return statearr_25889;
})();
if(cljs.core.truth_(inst_25801)){
var statearr_25890_26958 = state_25886__$1;
(statearr_25890_26958[(1)] = (22));

} else {
var statearr_25891_26959 = state_25886__$1;
(statearr_25891_26959[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (27))){
var inst_25756 = (state_25886[(9)]);
var inst_25836 = (state_25886[(10)]);
var inst_25829 = (state_25886[(11)]);
var inst_25831 = (state_25886[(12)]);
var inst_25836__$1 = cljs.core._nth(inst_25829,inst_25831);
var inst_25837 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25836__$1,inst_25756,done);
var state_25886__$1 = (function (){var statearr_25892 = state_25886;
(statearr_25892[(10)] = inst_25836__$1);

return statearr_25892;
})();
if(cljs.core.truth_(inst_25837)){
var statearr_25893_26960 = state_25886__$1;
(statearr_25893_26960[(1)] = (30));

} else {
var statearr_25894_26961 = state_25886__$1;
(statearr_25894_26961[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (1))){
var state_25886__$1 = state_25886;
var statearr_25895_26962 = state_25886__$1;
(statearr_25895_26962[(2)] = null);

(statearr_25895_26962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (24))){
var inst_25787 = (state_25886[(7)]);
var inst_25806 = (state_25886[(2)]);
var inst_25807 = cljs.core.next(inst_25787);
var inst_25765 = inst_25807;
var inst_25766 = null;
var inst_25767 = (0);
var inst_25768 = (0);
var state_25886__$1 = (function (){var statearr_25896 = state_25886;
(statearr_25896[(13)] = inst_25768);

(statearr_25896[(14)] = inst_25766);

(statearr_25896[(15)] = inst_25765);

(statearr_25896[(16)] = inst_25767);

(statearr_25896[(17)] = inst_25806);

return statearr_25896;
})();
var statearr_25897_26963 = state_25886__$1;
(statearr_25897_26963[(2)] = null);

(statearr_25897_26963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (39))){
var state_25886__$1 = state_25886;
var statearr_25901_26964 = state_25886__$1;
(statearr_25901_26964[(2)] = null);

(statearr_25901_26964[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (4))){
var inst_25756 = (state_25886[(9)]);
var inst_25756__$1 = (state_25886[(2)]);
var inst_25757 = (inst_25756__$1 == null);
var state_25886__$1 = (function (){var statearr_25902 = state_25886;
(statearr_25902[(9)] = inst_25756__$1);

return statearr_25902;
})();
if(cljs.core.truth_(inst_25757)){
var statearr_25903_26965 = state_25886__$1;
(statearr_25903_26965[(1)] = (5));

} else {
var statearr_25904_26966 = state_25886__$1;
(statearr_25904_26966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (15))){
var inst_25768 = (state_25886[(13)]);
var inst_25766 = (state_25886[(14)]);
var inst_25765 = (state_25886[(15)]);
var inst_25767 = (state_25886[(16)]);
var inst_25783 = (state_25886[(2)]);
var inst_25784 = (inst_25768 + (1));
var tmp25898 = inst_25766;
var tmp25899 = inst_25765;
var tmp25900 = inst_25767;
var inst_25765__$1 = tmp25899;
var inst_25766__$1 = tmp25898;
var inst_25767__$1 = tmp25900;
var inst_25768__$1 = inst_25784;
var state_25886__$1 = (function (){var statearr_25905 = state_25886;
(statearr_25905[(13)] = inst_25768__$1);

(statearr_25905[(14)] = inst_25766__$1);

(statearr_25905[(18)] = inst_25783);

(statearr_25905[(15)] = inst_25765__$1);

(statearr_25905[(16)] = inst_25767__$1);

return statearr_25905;
})();
var statearr_25906_26992 = state_25886__$1;
(statearr_25906_26992[(2)] = null);

(statearr_25906_26992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (21))){
var inst_25810 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
var statearr_25910_26993 = state_25886__$1;
(statearr_25910_26993[(2)] = inst_25810);

(statearr_25910_26993[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (31))){
var inst_25836 = (state_25886[(10)]);
var inst_25840 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25836);
var state_25886__$1 = state_25886;
var statearr_25911_26994 = state_25886__$1;
(statearr_25911_26994[(2)] = inst_25840);

(statearr_25911_26994[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (32))){
var inst_25830 = (state_25886[(19)]);
var inst_25829 = (state_25886[(11)]);
var inst_25831 = (state_25886[(12)]);
var inst_25828 = (state_25886[(20)]);
var inst_25842 = (state_25886[(2)]);
var inst_25843 = (inst_25831 + (1));
var tmp25907 = inst_25830;
var tmp25908 = inst_25829;
var tmp25909 = inst_25828;
var inst_25828__$1 = tmp25909;
var inst_25829__$1 = tmp25908;
var inst_25830__$1 = tmp25907;
var inst_25831__$1 = inst_25843;
var state_25886__$1 = (function (){var statearr_25912 = state_25886;
(statearr_25912[(21)] = inst_25842);

(statearr_25912[(19)] = inst_25830__$1);

(statearr_25912[(11)] = inst_25829__$1);

(statearr_25912[(12)] = inst_25831__$1);

(statearr_25912[(20)] = inst_25828__$1);

return statearr_25912;
})();
var statearr_25913_26995 = state_25886__$1;
(statearr_25913_26995[(2)] = null);

(statearr_25913_26995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (40))){
var inst_25855 = (state_25886[(22)]);
var inst_25859 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25855);
var state_25886__$1 = state_25886;
var statearr_25914_26996 = state_25886__$1;
(statearr_25914_26996[(2)] = inst_25859);

(statearr_25914_26996[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (33))){
var inst_25846 = (state_25886[(23)]);
var inst_25848 = cljs.core.chunked_seq_QMARK_(inst_25846);
var state_25886__$1 = state_25886;
if(inst_25848){
var statearr_25915_26997 = state_25886__$1;
(statearr_25915_26997[(1)] = (36));

} else {
var statearr_25916_26998 = state_25886__$1;
(statearr_25916_26998[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (13))){
var inst_25777 = (state_25886[(24)]);
var inst_25780 = cljs.core.async.close_BANG_(inst_25777);
var state_25886__$1 = state_25886;
var statearr_25917_26999 = state_25886__$1;
(statearr_25917_26999[(2)] = inst_25780);

(statearr_25917_26999[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (22))){
var inst_25800 = (state_25886[(8)]);
var inst_25803 = cljs.core.async.close_BANG_(inst_25800);
var state_25886__$1 = state_25886;
var statearr_25918_27000 = state_25886__$1;
(statearr_25918_27000[(2)] = inst_25803);

(statearr_25918_27000[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (36))){
var inst_25846 = (state_25886[(23)]);
var inst_25850 = cljs.core.chunk_first(inst_25846);
var inst_25851 = cljs.core.chunk_rest(inst_25846);
var inst_25852 = cljs.core.count(inst_25850);
var inst_25828 = inst_25851;
var inst_25829 = inst_25850;
var inst_25830 = inst_25852;
var inst_25831 = (0);
var state_25886__$1 = (function (){var statearr_25919 = state_25886;
(statearr_25919[(19)] = inst_25830);

(statearr_25919[(11)] = inst_25829);

(statearr_25919[(12)] = inst_25831);

(statearr_25919[(20)] = inst_25828);

return statearr_25919;
})();
var statearr_25920_27001 = state_25886__$1;
(statearr_25920_27001[(2)] = null);

(statearr_25920_27001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (41))){
var inst_25846 = (state_25886[(23)]);
var inst_25861 = (state_25886[(2)]);
var inst_25862 = cljs.core.next(inst_25846);
var inst_25828 = inst_25862;
var inst_25829 = null;
var inst_25830 = (0);
var inst_25831 = (0);
var state_25886__$1 = (function (){var statearr_25921 = state_25886;
(statearr_25921[(19)] = inst_25830);

(statearr_25921[(25)] = inst_25861);

(statearr_25921[(11)] = inst_25829);

(statearr_25921[(12)] = inst_25831);

(statearr_25921[(20)] = inst_25828);

return statearr_25921;
})();
var statearr_25922_27002 = state_25886__$1;
(statearr_25922_27002[(2)] = null);

(statearr_25922_27002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (43))){
var state_25886__$1 = state_25886;
var statearr_25923_27003 = state_25886__$1;
(statearr_25923_27003[(2)] = null);

(statearr_25923_27003[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (29))){
var inst_25870 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
var statearr_25924_27004 = state_25886__$1;
(statearr_25924_27004[(2)] = inst_25870);

(statearr_25924_27004[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (44))){
var inst_25879 = (state_25886[(2)]);
var state_25886__$1 = (function (){var statearr_25925 = state_25886;
(statearr_25925[(26)] = inst_25879);

return statearr_25925;
})();
var statearr_25926_27005 = state_25886__$1;
(statearr_25926_27005[(2)] = null);

(statearr_25926_27005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (6))){
var inst_25820 = (state_25886[(27)]);
var inst_25819 = cljs.core.deref(cs);
var inst_25820__$1 = cljs.core.keys(inst_25819);
var inst_25821 = cljs.core.count(inst_25820__$1);
var inst_25822 = cljs.core.reset_BANG_(dctr,inst_25821);
var inst_25827 = cljs.core.seq(inst_25820__$1);
var inst_25828 = inst_25827;
var inst_25829 = null;
var inst_25830 = (0);
var inst_25831 = (0);
var state_25886__$1 = (function (){var statearr_25927 = state_25886;
(statearr_25927[(28)] = inst_25822);

(statearr_25927[(19)] = inst_25830);

(statearr_25927[(11)] = inst_25829);

(statearr_25927[(12)] = inst_25831);

(statearr_25927[(27)] = inst_25820__$1);

(statearr_25927[(20)] = inst_25828);

return statearr_25927;
})();
var statearr_25928_27006 = state_25886__$1;
(statearr_25928_27006[(2)] = null);

(statearr_25928_27006[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (28))){
var inst_25846 = (state_25886[(23)]);
var inst_25828 = (state_25886[(20)]);
var inst_25846__$1 = cljs.core.seq(inst_25828);
var state_25886__$1 = (function (){var statearr_25929 = state_25886;
(statearr_25929[(23)] = inst_25846__$1);

return statearr_25929;
})();
if(inst_25846__$1){
var statearr_25930_27007 = state_25886__$1;
(statearr_25930_27007[(1)] = (33));

} else {
var statearr_25931_27008 = state_25886__$1;
(statearr_25931_27008[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (25))){
var inst_25830 = (state_25886[(19)]);
var inst_25831 = (state_25886[(12)]);
var inst_25833 = (inst_25831 < inst_25830);
var inst_25834 = inst_25833;
var state_25886__$1 = state_25886;
if(cljs.core.truth_(inst_25834)){
var statearr_25932_27009 = state_25886__$1;
(statearr_25932_27009[(1)] = (27));

} else {
var statearr_25933_27010 = state_25886__$1;
(statearr_25933_27010[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (34))){
var state_25886__$1 = state_25886;
var statearr_25934_27011 = state_25886__$1;
(statearr_25934_27011[(2)] = null);

(statearr_25934_27011[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (17))){
var state_25886__$1 = state_25886;
var statearr_25935_27012 = state_25886__$1;
(statearr_25935_27012[(2)] = null);

(statearr_25935_27012[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (3))){
var inst_25884 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25886__$1,inst_25884);
} else {
if((state_val_25887 === (12))){
var inst_25815 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
var statearr_25936_27013 = state_25886__$1;
(statearr_25936_27013[(2)] = inst_25815);

(statearr_25936_27013[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (2))){
var state_25886__$1 = state_25886;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25886__$1,(4),ch);
} else {
if((state_val_25887 === (23))){
var state_25886__$1 = state_25886;
var statearr_25937_27014 = state_25886__$1;
(statearr_25937_27014[(2)] = null);

(statearr_25937_27014[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (35))){
var inst_25868 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
var statearr_25938_27025 = state_25886__$1;
(statearr_25938_27025[(2)] = inst_25868);

(statearr_25938_27025[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (19))){
var inst_25787 = (state_25886[(7)]);
var inst_25791 = cljs.core.chunk_first(inst_25787);
var inst_25792 = cljs.core.chunk_rest(inst_25787);
var inst_25793 = cljs.core.count(inst_25791);
var inst_25765 = inst_25792;
var inst_25766 = inst_25791;
var inst_25767 = inst_25793;
var inst_25768 = (0);
var state_25886__$1 = (function (){var statearr_25939 = state_25886;
(statearr_25939[(13)] = inst_25768);

(statearr_25939[(14)] = inst_25766);

(statearr_25939[(15)] = inst_25765);

(statearr_25939[(16)] = inst_25767);

return statearr_25939;
})();
var statearr_25940_27026 = state_25886__$1;
(statearr_25940_27026[(2)] = null);

(statearr_25940_27026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (11))){
var inst_25787 = (state_25886[(7)]);
var inst_25765 = (state_25886[(15)]);
var inst_25787__$1 = cljs.core.seq(inst_25765);
var state_25886__$1 = (function (){var statearr_25941 = state_25886;
(statearr_25941[(7)] = inst_25787__$1);

return statearr_25941;
})();
if(inst_25787__$1){
var statearr_25942_27027 = state_25886__$1;
(statearr_25942_27027[(1)] = (16));

} else {
var statearr_25943_27028 = state_25886__$1;
(statearr_25943_27028[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (9))){
var inst_25817 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
var statearr_25944_27029 = state_25886__$1;
(statearr_25944_27029[(2)] = inst_25817);

(statearr_25944_27029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (5))){
var inst_25763 = cljs.core.deref(cs);
var inst_25764 = cljs.core.seq(inst_25763);
var inst_25765 = inst_25764;
var inst_25766 = null;
var inst_25767 = (0);
var inst_25768 = (0);
var state_25886__$1 = (function (){var statearr_25945 = state_25886;
(statearr_25945[(13)] = inst_25768);

(statearr_25945[(14)] = inst_25766);

(statearr_25945[(15)] = inst_25765);

(statearr_25945[(16)] = inst_25767);

return statearr_25945;
})();
var statearr_25946_27030 = state_25886__$1;
(statearr_25946_27030[(2)] = null);

(statearr_25946_27030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (14))){
var state_25886__$1 = state_25886;
var statearr_25947_27031 = state_25886__$1;
(statearr_25947_27031[(2)] = null);

(statearr_25947_27031[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (45))){
var inst_25876 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
var statearr_25948_27032 = state_25886__$1;
(statearr_25948_27032[(2)] = inst_25876);

(statearr_25948_27032[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (26))){
var inst_25820 = (state_25886[(27)]);
var inst_25872 = (state_25886[(2)]);
var inst_25873 = cljs.core.seq(inst_25820);
var state_25886__$1 = (function (){var statearr_25949 = state_25886;
(statearr_25949[(29)] = inst_25872);

return statearr_25949;
})();
if(inst_25873){
var statearr_25950_27033 = state_25886__$1;
(statearr_25950_27033[(1)] = (42));

} else {
var statearr_25951_27034 = state_25886__$1;
(statearr_25951_27034[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (16))){
var inst_25787 = (state_25886[(7)]);
var inst_25789 = cljs.core.chunked_seq_QMARK_(inst_25787);
var state_25886__$1 = state_25886;
if(inst_25789){
var statearr_25952_27035 = state_25886__$1;
(statearr_25952_27035[(1)] = (19));

} else {
var statearr_25953_27036 = state_25886__$1;
(statearr_25953_27036[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (38))){
var inst_25865 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
var statearr_25954_27037 = state_25886__$1;
(statearr_25954_27037[(2)] = inst_25865);

(statearr_25954_27037[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (30))){
var state_25886__$1 = state_25886;
var statearr_25955_27038 = state_25886__$1;
(statearr_25955_27038[(2)] = null);

(statearr_25955_27038[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (10))){
var inst_25768 = (state_25886[(13)]);
var inst_25766 = (state_25886[(14)]);
var inst_25776 = cljs.core._nth(inst_25766,inst_25768);
var inst_25777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25776,(0),null);
var inst_25778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25776,(1),null);
var state_25886__$1 = (function (){var statearr_25956 = state_25886;
(statearr_25956[(24)] = inst_25777);

return statearr_25956;
})();
if(cljs.core.truth_(inst_25778)){
var statearr_25957_27039 = state_25886__$1;
(statearr_25957_27039[(1)] = (13));

} else {
var statearr_25958_27040 = state_25886__$1;
(statearr_25958_27040[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (18))){
var inst_25813 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
var statearr_25959_27041 = state_25886__$1;
(statearr_25959_27041[(2)] = inst_25813);

(statearr_25959_27041[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (42))){
var state_25886__$1 = state_25886;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25886__$1,(45),dchan);
} else {
if((state_val_25887 === (37))){
var inst_25756 = (state_25886[(9)]);
var inst_25855 = (state_25886[(22)]);
var inst_25846 = (state_25886[(23)]);
var inst_25855__$1 = cljs.core.first(inst_25846);
var inst_25856 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25855__$1,inst_25756,done);
var state_25886__$1 = (function (){var statearr_25960 = state_25886;
(statearr_25960[(22)] = inst_25855__$1);

return statearr_25960;
})();
if(cljs.core.truth_(inst_25856)){
var statearr_25961_27042 = state_25886__$1;
(statearr_25961_27042[(1)] = (39));

} else {
var statearr_25962_27043 = state_25886__$1;
(statearr_25962_27043[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (8))){
var inst_25768 = (state_25886[(13)]);
var inst_25767 = (state_25886[(16)]);
var inst_25770 = (inst_25768 < inst_25767);
var inst_25771 = inst_25770;
var state_25886__$1 = state_25886;
if(cljs.core.truth_(inst_25771)){
var statearr_25963_27044 = state_25886__$1;
(statearr_25963_27044[(1)] = (10));

} else {
var statearr_25964_27045 = state_25886__$1;
(statearr_25964_27045[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__24914__auto__ = null;
var cljs$core$async$mult_$_state_machine__24914__auto____0 = (function (){
var statearr_25965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25965[(0)] = cljs$core$async$mult_$_state_machine__24914__auto__);

(statearr_25965[(1)] = (1));

return statearr_25965;
});
var cljs$core$async$mult_$_state_machine__24914__auto____1 = (function (state_25886){
while(true){
var ret_value__24915__auto__ = (function (){try{while(true){
var result__24916__auto__ = switch__24913__auto__(state_25886);
if(cljs.core.keyword_identical_QMARK_(result__24916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24916__auto__;
}
break;
}
}catch (e25966){var ex__24917__auto__ = e25966;
var statearr_25967_27046 = state_25886;
(statearr_25967_27046[(2)] = ex__24917__auto__);


if(cljs.core.seq((state_25886[(4)]))){
var statearr_25968_27047 = state_25886;
(statearr_25968_27047[(1)] = cljs.core.first((state_25886[(4)])));

} else {
throw ex__24917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27048 = state_25886;
state_25886 = G__27048;
continue;
} else {
return ret_value__24915__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24914__auto__ = function(state_25886){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24914__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24914__auto____1.call(this,state_25886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24914__auto____0;
cljs$core$async$mult_$_state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24914__auto____1;
return cljs$core$async$mult_$_state_machine__24914__auto__;
})()
})();
var state__25097__auto__ = (function (){var statearr_25969 = f__25096__auto__();
(statearr_25969[(6)] = c__25095__auto___26956);

return statearr_25969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25097__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__25971 = arguments.length;
switch (G__25971) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_27062 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_27062(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_27065 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_27065(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_27068 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_27068(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_27072 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_27072(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_27077 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_27077(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27084 = arguments.length;
var i__5770__auto___27085 = (0);
while(true){
if((i__5770__auto___27085 < len__5769__auto___27084)){
args__5775__auto__.push((arguments[i__5770__auto___27085]));

var G__27086 = (i__5770__auto___27085 + (1));
i__5770__auto___27085 = G__27086;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25976){
var map__25977 = p__25976;
var map__25977__$1 = cljs.core.__destructure_map(map__25977);
var opts = map__25977__$1;
var statearr_25978_27093 = state;
(statearr_25978_27093[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_25979_27094 = state;
(statearr_25979_27094[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_25980_27095 = state;
(statearr_25980_27095[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25972){
var G__25973 = cljs.core.first(seq25972);
var seq25972__$1 = cljs.core.next(seq25972);
var G__25974 = cljs.core.first(seq25972__$1);
var seq25972__$2 = cljs.core.next(seq25972__$1);
var G__25975 = cljs.core.first(seq25972__$2);
var seq25972__$3 = cljs.core.next(seq25972__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25973,G__25974,G__25975,seq25972__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25981 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25981 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25982){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25982 = meta25982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25983,meta25982__$1){
var self__ = this;
var _25983__$1 = this;
return (new cljs.core.async.t_cljs$core$async25981(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25982__$1));
}));

(cljs.core.async.t_cljs$core$async25981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25983){
var self__ = this;
var _25983__$1 = this;
return self__.meta25982;
}));

(cljs.core.async.t_cljs$core$async25981.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25981.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async25981.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25981.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async25981.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async25981.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async25981.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async25981.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async25981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25982","meta25982",-2101551943,null)], null);
}));

(cljs.core.async.t_cljs$core$async25981.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25981");

(cljs.core.async.t_cljs$core$async25981.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async25981");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25981.
 */
cljs.core.async.__GT_t_cljs$core$async25981 = (function cljs$core$async$mix_$___GT_t_cljs$core$async25981(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25982){
return (new cljs.core.async.t_cljs$core$async25981(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25982));
});

}

return (new cljs.core.async.t_cljs$core$async25981(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25095__auto___27102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25096__auto__ = (function (){var switch__24913__auto__ = (function (state_26051){
var state_val_26052 = (state_26051[(1)]);
if((state_val_26052 === (7))){
var inst_26011 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
if(cljs.core.truth_(inst_26011)){
var statearr_26053_27103 = state_26051__$1;
(statearr_26053_27103[(1)] = (8));

} else {
var statearr_26054_27104 = state_26051__$1;
(statearr_26054_27104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (20))){
var inst_26004 = (state_26051[(7)]);
var state_26051__$1 = state_26051;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26051__$1,(23),out,inst_26004);
} else {
if((state_val_26052 === (1))){
var inst_25987 = calc_state();
var inst_25988 = cljs.core.__destructure_map(inst_25987);
var inst_25989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25988,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25988,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25988,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25992 = inst_25987;
var state_26051__$1 = (function (){var statearr_26055 = state_26051;
(statearr_26055[(8)] = inst_25992);

(statearr_26055[(9)] = inst_25991);

(statearr_26055[(10)] = inst_25990);

(statearr_26055[(11)] = inst_25989);

return statearr_26055;
})();
var statearr_26056_27111 = state_26051__$1;
(statearr_26056_27111[(2)] = null);

(statearr_26056_27111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (24))){
var inst_25995 = (state_26051[(12)]);
var inst_25992 = inst_25995;
var state_26051__$1 = (function (){var statearr_26057 = state_26051;
(statearr_26057[(8)] = inst_25992);

return statearr_26057;
})();
var statearr_26058_27112 = state_26051__$1;
(statearr_26058_27112[(2)] = null);

(statearr_26058_27112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (4))){
var inst_26006 = (state_26051[(13)]);
var inst_26004 = (state_26051[(7)]);
var inst_26003 = (state_26051[(2)]);
var inst_26004__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26003,(0),null);
var inst_26005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26003,(1),null);
var inst_26006__$1 = (inst_26004__$1 == null);
var state_26051__$1 = (function (){var statearr_26059 = state_26051;
(statearr_26059[(14)] = inst_26005);

(statearr_26059[(13)] = inst_26006__$1);

(statearr_26059[(7)] = inst_26004__$1);

return statearr_26059;
})();
if(cljs.core.truth_(inst_26006__$1)){
var statearr_26060_27113 = state_26051__$1;
(statearr_26060_27113[(1)] = (5));

} else {
var statearr_26061_27114 = state_26051__$1;
(statearr_26061_27114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (15))){
var inst_26025 = (state_26051[(15)]);
var inst_25996 = (state_26051[(16)]);
var inst_26025__$1 = cljs.core.empty_QMARK_(inst_25996);
var state_26051__$1 = (function (){var statearr_26062 = state_26051;
(statearr_26062[(15)] = inst_26025__$1);

return statearr_26062;
})();
if(inst_26025__$1){
var statearr_26063_27115 = state_26051__$1;
(statearr_26063_27115[(1)] = (17));

} else {
var statearr_26064_27116 = state_26051__$1;
(statearr_26064_27116[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (21))){
var inst_25995 = (state_26051[(12)]);
var inst_25992 = inst_25995;
var state_26051__$1 = (function (){var statearr_26065 = state_26051;
(statearr_26065[(8)] = inst_25992);

return statearr_26065;
})();
var statearr_26066_27117 = state_26051__$1;
(statearr_26066_27117[(2)] = null);

(statearr_26066_27117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (13))){
var inst_26018 = (state_26051[(2)]);
var inst_26019 = calc_state();
var inst_25992 = inst_26019;
var state_26051__$1 = (function (){var statearr_26067 = state_26051;
(statearr_26067[(8)] = inst_25992);

(statearr_26067[(17)] = inst_26018);

return statearr_26067;
})();
var statearr_26068_27118 = state_26051__$1;
(statearr_26068_27118[(2)] = null);

(statearr_26068_27118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (22))){
var inst_26045 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
var statearr_26069_27119 = state_26051__$1;
(statearr_26069_27119[(2)] = inst_26045);

(statearr_26069_27119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (6))){
var inst_26005 = (state_26051[(14)]);
var inst_26009 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26005,change);
var state_26051__$1 = state_26051;
var statearr_26070_27120 = state_26051__$1;
(statearr_26070_27120[(2)] = inst_26009);

(statearr_26070_27120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (25))){
var state_26051__$1 = state_26051;
var statearr_26071_27121 = state_26051__$1;
(statearr_26071_27121[(2)] = null);

(statearr_26071_27121[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (17))){
var inst_26005 = (state_26051[(14)]);
var inst_25997 = (state_26051[(18)]);
var inst_26027 = (inst_25997.cljs$core$IFn$_invoke$arity$1 ? inst_25997.cljs$core$IFn$_invoke$arity$1(inst_26005) : inst_25997.call(null,inst_26005));
var inst_26028 = cljs.core.not(inst_26027);
var state_26051__$1 = state_26051;
var statearr_26072_27129 = state_26051__$1;
(statearr_26072_27129[(2)] = inst_26028);

(statearr_26072_27129[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (3))){
var inst_26049 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26051__$1,inst_26049);
} else {
if((state_val_26052 === (12))){
var state_26051__$1 = state_26051;
var statearr_26073_27131 = state_26051__$1;
(statearr_26073_27131[(2)] = null);

(statearr_26073_27131[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (2))){
var inst_25992 = (state_26051[(8)]);
var inst_25995 = (state_26051[(12)]);
var inst_25995__$1 = cljs.core.__destructure_map(inst_25992);
var inst_25996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25995__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25995__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25995__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26051__$1 = (function (){var statearr_26074 = state_26051;
(statearr_26074[(18)] = inst_25997);

(statearr_26074[(12)] = inst_25995__$1);

(statearr_26074[(16)] = inst_25996);

return statearr_26074;
})();
return cljs.core.async.ioc_alts_BANG_(state_26051__$1,(4),inst_25998);
} else {
if((state_val_26052 === (23))){
var inst_26036 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
if(cljs.core.truth_(inst_26036)){
var statearr_26075_27133 = state_26051__$1;
(statearr_26075_27133[(1)] = (24));

} else {
var statearr_26076_27134 = state_26051__$1;
(statearr_26076_27134[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (19))){
var inst_26031 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
var statearr_26077_27135 = state_26051__$1;
(statearr_26077_27135[(2)] = inst_26031);

(statearr_26077_27135[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (11))){
var inst_26005 = (state_26051[(14)]);
var inst_26015 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_26005);
var state_26051__$1 = state_26051;
var statearr_26078_27136 = state_26051__$1;
(statearr_26078_27136[(2)] = inst_26015);

(statearr_26078_27136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (9))){
var inst_26005 = (state_26051[(14)]);
var inst_26022 = (state_26051[(19)]);
var inst_25996 = (state_26051[(16)]);
var inst_26022__$1 = (inst_25996.cljs$core$IFn$_invoke$arity$1 ? inst_25996.cljs$core$IFn$_invoke$arity$1(inst_26005) : inst_25996.call(null,inst_26005));
var state_26051__$1 = (function (){var statearr_26079 = state_26051;
(statearr_26079[(19)] = inst_26022__$1);

return statearr_26079;
})();
if(cljs.core.truth_(inst_26022__$1)){
var statearr_26080_27137 = state_26051__$1;
(statearr_26080_27137[(1)] = (14));

} else {
var statearr_26081_27138 = state_26051__$1;
(statearr_26081_27138[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (5))){
var inst_26006 = (state_26051[(13)]);
var state_26051__$1 = state_26051;
var statearr_26082_27139 = state_26051__$1;
(statearr_26082_27139[(2)] = inst_26006);

(statearr_26082_27139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (14))){
var inst_26022 = (state_26051[(19)]);
var state_26051__$1 = state_26051;
var statearr_26083_27140 = state_26051__$1;
(statearr_26083_27140[(2)] = inst_26022);

(statearr_26083_27140[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (26))){
var inst_26041 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
var statearr_26084_27141 = state_26051__$1;
(statearr_26084_27141[(2)] = inst_26041);

(statearr_26084_27141[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (16))){
var inst_26033 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
if(cljs.core.truth_(inst_26033)){
var statearr_26085_27142 = state_26051__$1;
(statearr_26085_27142[(1)] = (20));

} else {
var statearr_26086_27143 = state_26051__$1;
(statearr_26086_27143[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (10))){
var inst_26047 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
var statearr_26087_27144 = state_26051__$1;
(statearr_26087_27144[(2)] = inst_26047);

(statearr_26087_27144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (18))){
var inst_26025 = (state_26051[(15)]);
var state_26051__$1 = state_26051;
var statearr_26088_27145 = state_26051__$1;
(statearr_26088_27145[(2)] = inst_26025);

(statearr_26088_27145[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (8))){
var inst_26004 = (state_26051[(7)]);
var inst_26013 = (inst_26004 == null);
var state_26051__$1 = state_26051;
if(cljs.core.truth_(inst_26013)){
var statearr_26089_27146 = state_26051__$1;
(statearr_26089_27146[(1)] = (11));

} else {
var statearr_26090_27147 = state_26051__$1;
(statearr_26090_27147[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__24914__auto__ = null;
var cljs$core$async$mix_$_state_machine__24914__auto____0 = (function (){
var statearr_26091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26091[(0)] = cljs$core$async$mix_$_state_machine__24914__auto__);

(statearr_26091[(1)] = (1));

return statearr_26091;
});
var cljs$core$async$mix_$_state_machine__24914__auto____1 = (function (state_26051){
while(true){
var ret_value__24915__auto__ = (function (){try{while(true){
var result__24916__auto__ = switch__24913__auto__(state_26051);
if(cljs.core.keyword_identical_QMARK_(result__24916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24916__auto__;
}
break;
}
}catch (e26092){var ex__24917__auto__ = e26092;
var statearr_26093_27150 = state_26051;
(statearr_26093_27150[(2)] = ex__24917__auto__);


if(cljs.core.seq((state_26051[(4)]))){
var statearr_26094_27151 = state_26051;
(statearr_26094_27151[(1)] = cljs.core.first((state_26051[(4)])));

} else {
throw ex__24917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27152 = state_26051;
state_26051 = G__27152;
continue;
} else {
return ret_value__24915__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24914__auto__ = function(state_26051){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24914__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24914__auto____1.call(this,state_26051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24914__auto____0;
cljs$core$async$mix_$_state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24914__auto____1;
return cljs$core$async$mix_$_state_machine__24914__auto__;
})()
})();
var state__25097__auto__ = (function (){var statearr_26095 = f__25096__auto__();
(statearr_26095[(6)] = c__25095__auto___27102);

return statearr_26095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25097__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_27153 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_27153(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_27154 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_27154(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_27155 = (function() {
var G__27156 = null;
var G__27156__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__27156__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__27156 = function(p,v){
switch(arguments.length){
case 1:
return G__27156__1.call(this,p);
case 2:
return G__27156__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27156.cljs$core$IFn$_invoke$arity$1 = G__27156__1;
G__27156.cljs$core$IFn$_invoke$arity$2 = G__27156__2;
return G__27156;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__26097 = arguments.length;
switch (G__26097) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27155(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27155(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__26100 = arguments.length;
switch (G__26100) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__26098_SHARP_){
if(cljs.core.truth_((p1__26098_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26098_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__26098_SHARP_.call(null,topic)))){
return p1__26098_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26098_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26101 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26101 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26102){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26102 = meta26102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26103,meta26102__$1){
var self__ = this;
var _26103__$1 = this;
return (new cljs.core.async.t_cljs$core$async26101(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26102__$1));
}));

(cljs.core.async.t_cljs$core$async26101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26103){
var self__ = this;
var _26103__$1 = this;
return self__.meta26102;
}));

(cljs.core.async.t_cljs$core$async26101.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26101.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async26101.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26101.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async26101.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async26101.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async26101.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async26101.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26102","meta26102",-473363152,null)], null);
}));

(cljs.core.async.t_cljs$core$async26101.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26101");

(cljs.core.async.t_cljs$core$async26101.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async26101");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26101.
 */
cljs.core.async.__GT_t_cljs$core$async26101 = (function cljs$core$async$__GT_t_cljs$core$async26101(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26102){
return (new cljs.core.async.t_cljs$core$async26101(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26102));
});

}

return (new cljs.core.async.t_cljs$core$async26101(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25095__auto___27184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25096__auto__ = (function (){var switch__24913__auto__ = (function (state_26175){
var state_val_26176 = (state_26175[(1)]);
if((state_val_26176 === (7))){
var inst_26171 = (state_26175[(2)]);
var state_26175__$1 = state_26175;
var statearr_26177_27185 = state_26175__$1;
(statearr_26177_27185[(2)] = inst_26171);

(statearr_26177_27185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (20))){
var state_26175__$1 = state_26175;
var statearr_26178_27186 = state_26175__$1;
(statearr_26178_27186[(2)] = null);

(statearr_26178_27186[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (1))){
var state_26175__$1 = state_26175;
var statearr_26179_27187 = state_26175__$1;
(statearr_26179_27187[(2)] = null);

(statearr_26179_27187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (24))){
var inst_26154 = (state_26175[(7)]);
var inst_26163 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_26154);
var state_26175__$1 = state_26175;
var statearr_26180_27188 = state_26175__$1;
(statearr_26180_27188[(2)] = inst_26163);

(statearr_26180_27188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (4))){
var inst_26106 = (state_26175[(8)]);
var inst_26106__$1 = (state_26175[(2)]);
var inst_26107 = (inst_26106__$1 == null);
var state_26175__$1 = (function (){var statearr_26181 = state_26175;
(statearr_26181[(8)] = inst_26106__$1);

return statearr_26181;
})();
if(cljs.core.truth_(inst_26107)){
var statearr_26182_27190 = state_26175__$1;
(statearr_26182_27190[(1)] = (5));

} else {
var statearr_26183_27191 = state_26175__$1;
(statearr_26183_27191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (15))){
var inst_26148 = (state_26175[(2)]);
var state_26175__$1 = state_26175;
var statearr_26184_27193 = state_26175__$1;
(statearr_26184_27193[(2)] = inst_26148);

(statearr_26184_27193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (21))){
var inst_26168 = (state_26175[(2)]);
var state_26175__$1 = (function (){var statearr_26185 = state_26175;
(statearr_26185[(9)] = inst_26168);

return statearr_26185;
})();
var statearr_26186_27194 = state_26175__$1;
(statearr_26186_27194[(2)] = null);

(statearr_26186_27194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (13))){
var inst_26130 = (state_26175[(10)]);
var inst_26132 = cljs.core.chunked_seq_QMARK_(inst_26130);
var state_26175__$1 = state_26175;
if(inst_26132){
var statearr_26187_27195 = state_26175__$1;
(statearr_26187_27195[(1)] = (16));

} else {
var statearr_26188_27196 = state_26175__$1;
(statearr_26188_27196[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (22))){
var inst_26160 = (state_26175[(2)]);
var state_26175__$1 = state_26175;
if(cljs.core.truth_(inst_26160)){
var statearr_26189_27197 = state_26175__$1;
(statearr_26189_27197[(1)] = (23));

} else {
var statearr_26190_27198 = state_26175__$1;
(statearr_26190_27198[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (6))){
var inst_26106 = (state_26175[(8)]);
var inst_26154 = (state_26175[(7)]);
var inst_26156 = (state_26175[(11)]);
var inst_26154__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_26106) : topic_fn.call(null,inst_26106));
var inst_26155 = cljs.core.deref(mults);
var inst_26156__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26155,inst_26154__$1);
var state_26175__$1 = (function (){var statearr_26191 = state_26175;
(statearr_26191[(7)] = inst_26154__$1);

(statearr_26191[(11)] = inst_26156__$1);

return statearr_26191;
})();
if(cljs.core.truth_(inst_26156__$1)){
var statearr_26192_27199 = state_26175__$1;
(statearr_26192_27199[(1)] = (19));

} else {
var statearr_26193_27200 = state_26175__$1;
(statearr_26193_27200[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (25))){
var inst_26165 = (state_26175[(2)]);
var state_26175__$1 = state_26175;
var statearr_26194_27201 = state_26175__$1;
(statearr_26194_27201[(2)] = inst_26165);

(statearr_26194_27201[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (17))){
var inst_26130 = (state_26175[(10)]);
var inst_26139 = cljs.core.first(inst_26130);
var inst_26140 = cljs.core.async.muxch_STAR_(inst_26139);
var inst_26141 = cljs.core.async.close_BANG_(inst_26140);
var inst_26142 = cljs.core.next(inst_26130);
var inst_26116 = inst_26142;
var inst_26117 = null;
var inst_26118 = (0);
var inst_26119 = (0);
var state_26175__$1 = (function (){var statearr_26195 = state_26175;
(statearr_26195[(12)] = inst_26118);

(statearr_26195[(13)] = inst_26116);

(statearr_26195[(14)] = inst_26117);

(statearr_26195[(15)] = inst_26141);

(statearr_26195[(16)] = inst_26119);

return statearr_26195;
})();
var statearr_26196_27202 = state_26175__$1;
(statearr_26196_27202[(2)] = null);

(statearr_26196_27202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (3))){
var inst_26173 = (state_26175[(2)]);
var state_26175__$1 = state_26175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26175__$1,inst_26173);
} else {
if((state_val_26176 === (12))){
var inst_26150 = (state_26175[(2)]);
var state_26175__$1 = state_26175;
var statearr_26197_27203 = state_26175__$1;
(statearr_26197_27203[(2)] = inst_26150);

(statearr_26197_27203[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (2))){
var state_26175__$1 = state_26175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26175__$1,(4),ch);
} else {
if((state_val_26176 === (23))){
var state_26175__$1 = state_26175;
var statearr_26198_27204 = state_26175__$1;
(statearr_26198_27204[(2)] = null);

(statearr_26198_27204[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (19))){
var inst_26106 = (state_26175[(8)]);
var inst_26156 = (state_26175[(11)]);
var inst_26158 = cljs.core.async.muxch_STAR_(inst_26156);
var state_26175__$1 = state_26175;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26175__$1,(22),inst_26158,inst_26106);
} else {
if((state_val_26176 === (11))){
var inst_26116 = (state_26175[(13)]);
var inst_26130 = (state_26175[(10)]);
var inst_26130__$1 = cljs.core.seq(inst_26116);
var state_26175__$1 = (function (){var statearr_26199 = state_26175;
(statearr_26199[(10)] = inst_26130__$1);

return statearr_26199;
})();
if(inst_26130__$1){
var statearr_26200_27205 = state_26175__$1;
(statearr_26200_27205[(1)] = (13));

} else {
var statearr_26201_27206 = state_26175__$1;
(statearr_26201_27206[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (9))){
var inst_26152 = (state_26175[(2)]);
var state_26175__$1 = state_26175;
var statearr_26202_27207 = state_26175__$1;
(statearr_26202_27207[(2)] = inst_26152);

(statearr_26202_27207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (5))){
var inst_26113 = cljs.core.deref(mults);
var inst_26114 = cljs.core.vals(inst_26113);
var inst_26115 = cljs.core.seq(inst_26114);
var inst_26116 = inst_26115;
var inst_26117 = null;
var inst_26118 = (0);
var inst_26119 = (0);
var state_26175__$1 = (function (){var statearr_26203 = state_26175;
(statearr_26203[(12)] = inst_26118);

(statearr_26203[(13)] = inst_26116);

(statearr_26203[(14)] = inst_26117);

(statearr_26203[(16)] = inst_26119);

return statearr_26203;
})();
var statearr_26204_27208 = state_26175__$1;
(statearr_26204_27208[(2)] = null);

(statearr_26204_27208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (14))){
var state_26175__$1 = state_26175;
var statearr_26208_27209 = state_26175__$1;
(statearr_26208_27209[(2)] = null);

(statearr_26208_27209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (16))){
var inst_26130 = (state_26175[(10)]);
var inst_26134 = cljs.core.chunk_first(inst_26130);
var inst_26135 = cljs.core.chunk_rest(inst_26130);
var inst_26136 = cljs.core.count(inst_26134);
var inst_26116 = inst_26135;
var inst_26117 = inst_26134;
var inst_26118 = inst_26136;
var inst_26119 = (0);
var state_26175__$1 = (function (){var statearr_26209 = state_26175;
(statearr_26209[(12)] = inst_26118);

(statearr_26209[(13)] = inst_26116);

(statearr_26209[(14)] = inst_26117);

(statearr_26209[(16)] = inst_26119);

return statearr_26209;
})();
var statearr_26210_27210 = state_26175__$1;
(statearr_26210_27210[(2)] = null);

(statearr_26210_27210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (10))){
var inst_26118 = (state_26175[(12)]);
var inst_26116 = (state_26175[(13)]);
var inst_26117 = (state_26175[(14)]);
var inst_26119 = (state_26175[(16)]);
var inst_26124 = cljs.core._nth(inst_26117,inst_26119);
var inst_26125 = cljs.core.async.muxch_STAR_(inst_26124);
var inst_26126 = cljs.core.async.close_BANG_(inst_26125);
var inst_26127 = (inst_26119 + (1));
var tmp26205 = inst_26118;
var tmp26206 = inst_26116;
var tmp26207 = inst_26117;
var inst_26116__$1 = tmp26206;
var inst_26117__$1 = tmp26207;
var inst_26118__$1 = tmp26205;
var inst_26119__$1 = inst_26127;
var state_26175__$1 = (function (){var statearr_26211 = state_26175;
(statearr_26211[(17)] = inst_26126);

(statearr_26211[(12)] = inst_26118__$1);

(statearr_26211[(13)] = inst_26116__$1);

(statearr_26211[(14)] = inst_26117__$1);

(statearr_26211[(16)] = inst_26119__$1);

return statearr_26211;
})();
var statearr_26212_27215 = state_26175__$1;
(statearr_26212_27215[(2)] = null);

(statearr_26212_27215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (18))){
var inst_26145 = (state_26175[(2)]);
var state_26175__$1 = state_26175;
var statearr_26213_27216 = state_26175__$1;
(statearr_26213_27216[(2)] = inst_26145);

(statearr_26213_27216[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (8))){
var inst_26118 = (state_26175[(12)]);
var inst_26119 = (state_26175[(16)]);
var inst_26121 = (inst_26119 < inst_26118);
var inst_26122 = inst_26121;
var state_26175__$1 = state_26175;
if(cljs.core.truth_(inst_26122)){
var statearr_26214_27227 = state_26175__$1;
(statearr_26214_27227[(1)] = (10));

} else {
var statearr_26215_27228 = state_26175__$1;
(statearr_26215_27228[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24914__auto__ = null;
var cljs$core$async$state_machine__24914__auto____0 = (function (){
var statearr_26216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26216[(0)] = cljs$core$async$state_machine__24914__auto__);

(statearr_26216[(1)] = (1));

return statearr_26216;
});
var cljs$core$async$state_machine__24914__auto____1 = (function (state_26175){
while(true){
var ret_value__24915__auto__ = (function (){try{while(true){
var result__24916__auto__ = switch__24913__auto__(state_26175);
if(cljs.core.keyword_identical_QMARK_(result__24916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24916__auto__;
}
break;
}
}catch (e26217){var ex__24917__auto__ = e26217;
var statearr_26218_27229 = state_26175;
(statearr_26218_27229[(2)] = ex__24917__auto__);


if(cljs.core.seq((state_26175[(4)]))){
var statearr_26219_27230 = state_26175;
(statearr_26219_27230[(1)] = cljs.core.first((state_26175[(4)])));

} else {
throw ex__24917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27231 = state_26175;
state_26175 = G__27231;
continue;
} else {
return ret_value__24915__auto__;
}
break;
}
});
cljs$core$async$state_machine__24914__auto__ = function(state_26175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24914__auto____1.call(this,state_26175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24914__auto____0;
cljs$core$async$state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24914__auto____1;
return cljs$core$async$state_machine__24914__auto__;
})()
})();
var state__25097__auto__ = (function (){var statearr_26220 = f__25096__auto__();
(statearr_26220[(6)] = c__25095__auto___27184);

return statearr_26220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25097__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__26222 = arguments.length;
switch (G__26222) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__26224 = arguments.length;
switch (G__26224) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__26226 = arguments.length;
switch (G__26226) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__25095__auto___27235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25096__auto__ = (function (){var switch__24913__auto__ = (function (state_26269){
var state_val_26270 = (state_26269[(1)]);
if((state_val_26270 === (7))){
var state_26269__$1 = state_26269;
var statearr_26271_27236 = state_26269__$1;
(statearr_26271_27236[(2)] = null);

(statearr_26271_27236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (1))){
var state_26269__$1 = state_26269;
var statearr_26272_27237 = state_26269__$1;
(statearr_26272_27237[(2)] = null);

(statearr_26272_27237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (4))){
var inst_26230 = (state_26269[(7)]);
var inst_26229 = (state_26269[(8)]);
var inst_26232 = (inst_26230 < inst_26229);
var state_26269__$1 = state_26269;
if(cljs.core.truth_(inst_26232)){
var statearr_26273_27238 = state_26269__$1;
(statearr_26273_27238[(1)] = (6));

} else {
var statearr_26274_27239 = state_26269__$1;
(statearr_26274_27239[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (15))){
var inst_26255 = (state_26269[(9)]);
var inst_26260 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26255);
var state_26269__$1 = state_26269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26269__$1,(17),out,inst_26260);
} else {
if((state_val_26270 === (13))){
var inst_26255 = (state_26269[(9)]);
var inst_26255__$1 = (state_26269[(2)]);
var inst_26256 = cljs.core.some(cljs.core.nil_QMARK_,inst_26255__$1);
var state_26269__$1 = (function (){var statearr_26275 = state_26269;
(statearr_26275[(9)] = inst_26255__$1);

return statearr_26275;
})();
if(cljs.core.truth_(inst_26256)){
var statearr_26276_27241 = state_26269__$1;
(statearr_26276_27241[(1)] = (14));

} else {
var statearr_26277_27242 = state_26269__$1;
(statearr_26277_27242[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (6))){
var state_26269__$1 = state_26269;
var statearr_26278_27243 = state_26269__$1;
(statearr_26278_27243[(2)] = null);

(statearr_26278_27243[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (17))){
var inst_26262 = (state_26269[(2)]);
var state_26269__$1 = (function (){var statearr_26280 = state_26269;
(statearr_26280[(10)] = inst_26262);

return statearr_26280;
})();
var statearr_26281_27247 = state_26269__$1;
(statearr_26281_27247[(2)] = null);

(statearr_26281_27247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (3))){
var inst_26267 = (state_26269[(2)]);
var state_26269__$1 = state_26269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26269__$1,inst_26267);
} else {
if((state_val_26270 === (12))){
var _ = (function (){var statearr_26282 = state_26269;
(statearr_26282[(4)] = cljs.core.rest((state_26269[(4)])));

return statearr_26282;
})();
var state_26269__$1 = state_26269;
var ex26279 = (state_26269__$1[(2)]);
var statearr_26283_27248 = state_26269__$1;
(statearr_26283_27248[(5)] = ex26279);


if((ex26279 instanceof Object)){
var statearr_26284_27249 = state_26269__$1;
(statearr_26284_27249[(1)] = (11));

(statearr_26284_27249[(5)] = null);

} else {
throw ex26279;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (2))){
var inst_26228 = cljs.core.reset_BANG_(dctr,cnt);
var inst_26229 = cnt;
var inst_26230 = (0);
var state_26269__$1 = (function (){var statearr_26285 = state_26269;
(statearr_26285[(11)] = inst_26228);

(statearr_26285[(7)] = inst_26230);

(statearr_26285[(8)] = inst_26229);

return statearr_26285;
})();
var statearr_26286_27250 = state_26269__$1;
(statearr_26286_27250[(2)] = null);

(statearr_26286_27250[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (11))){
var inst_26234 = (state_26269[(2)]);
var inst_26235 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_26269__$1 = (function (){var statearr_26287 = state_26269;
(statearr_26287[(12)] = inst_26234);

return statearr_26287;
})();
var statearr_26288_27251 = state_26269__$1;
(statearr_26288_27251[(2)] = inst_26235);

(statearr_26288_27251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (9))){
var inst_26230 = (state_26269[(7)]);
var _ = (function (){var statearr_26289 = state_26269;
(statearr_26289[(4)] = cljs.core.cons((12),(state_26269[(4)])));

return statearr_26289;
})();
var inst_26241 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_26230) : chs__$1.call(null,inst_26230));
var inst_26242 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_26230) : done.call(null,inst_26230));
var inst_26243 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26241,inst_26242);
var ___$1 = (function (){var statearr_26290 = state_26269;
(statearr_26290[(4)] = cljs.core.rest((state_26269[(4)])));

return statearr_26290;
})();
var state_26269__$1 = state_26269;
var statearr_26291_27252 = state_26269__$1;
(statearr_26291_27252[(2)] = inst_26243);

(statearr_26291_27252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (5))){
var inst_26253 = (state_26269[(2)]);
var state_26269__$1 = (function (){var statearr_26292 = state_26269;
(statearr_26292[(13)] = inst_26253);

return statearr_26292;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26269__$1,(13),dchan);
} else {
if((state_val_26270 === (14))){
var inst_26258 = cljs.core.async.close_BANG_(out);
var state_26269__$1 = state_26269;
var statearr_26293_27253 = state_26269__$1;
(statearr_26293_27253[(2)] = inst_26258);

(statearr_26293_27253[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (16))){
var inst_26265 = (state_26269[(2)]);
var state_26269__$1 = state_26269;
var statearr_26294_27254 = state_26269__$1;
(statearr_26294_27254[(2)] = inst_26265);

(statearr_26294_27254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (10))){
var inst_26230 = (state_26269[(7)]);
var inst_26246 = (state_26269[(2)]);
var inst_26247 = (inst_26230 + (1));
var inst_26230__$1 = inst_26247;
var state_26269__$1 = (function (){var statearr_26295 = state_26269;
(statearr_26295[(7)] = inst_26230__$1);

(statearr_26295[(14)] = inst_26246);

return statearr_26295;
})();
var statearr_26296_27255 = state_26269__$1;
(statearr_26296_27255[(2)] = null);

(statearr_26296_27255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (8))){
var inst_26251 = (state_26269[(2)]);
var state_26269__$1 = state_26269;
var statearr_26297_27256 = state_26269__$1;
(statearr_26297_27256[(2)] = inst_26251);

(statearr_26297_27256[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24914__auto__ = null;
var cljs$core$async$state_machine__24914__auto____0 = (function (){
var statearr_26298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26298[(0)] = cljs$core$async$state_machine__24914__auto__);

(statearr_26298[(1)] = (1));

return statearr_26298;
});
var cljs$core$async$state_machine__24914__auto____1 = (function (state_26269){
while(true){
var ret_value__24915__auto__ = (function (){try{while(true){
var result__24916__auto__ = switch__24913__auto__(state_26269);
if(cljs.core.keyword_identical_QMARK_(result__24916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24916__auto__;
}
break;
}
}catch (e26299){var ex__24917__auto__ = e26299;
var statearr_26300_27258 = state_26269;
(statearr_26300_27258[(2)] = ex__24917__auto__);


if(cljs.core.seq((state_26269[(4)]))){
var statearr_26301_27259 = state_26269;
(statearr_26301_27259[(1)] = cljs.core.first((state_26269[(4)])));

} else {
throw ex__24917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27260 = state_26269;
state_26269 = G__27260;
continue;
} else {
return ret_value__24915__auto__;
}
break;
}
});
cljs$core$async$state_machine__24914__auto__ = function(state_26269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24914__auto____1.call(this,state_26269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24914__auto____0;
cljs$core$async$state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24914__auto____1;
return cljs$core$async$state_machine__24914__auto__;
})()
})();
var state__25097__auto__ = (function (){var statearr_26302 = f__25096__auto__();
(statearr_26302[(6)] = c__25095__auto___27235);

return statearr_26302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25097__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__26305 = arguments.length;
switch (G__26305) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25095__auto___27262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25096__auto__ = (function (){var switch__24913__auto__ = (function (state_26337){
var state_val_26338 = (state_26337[(1)]);
if((state_val_26338 === (7))){
var inst_26316 = (state_26337[(7)]);
var inst_26317 = (state_26337[(8)]);
var inst_26316__$1 = (state_26337[(2)]);
var inst_26317__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26316__$1,(0),null);
var inst_26318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26316__$1,(1),null);
var inst_26319 = (inst_26317__$1 == null);
var state_26337__$1 = (function (){var statearr_26339 = state_26337;
(statearr_26339[(9)] = inst_26318);

(statearr_26339[(7)] = inst_26316__$1);

(statearr_26339[(8)] = inst_26317__$1);

return statearr_26339;
})();
if(cljs.core.truth_(inst_26319)){
var statearr_26340_27263 = state_26337__$1;
(statearr_26340_27263[(1)] = (8));

} else {
var statearr_26341_27264 = state_26337__$1;
(statearr_26341_27264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (1))){
var inst_26306 = cljs.core.vec(chs);
var inst_26307 = inst_26306;
var state_26337__$1 = (function (){var statearr_26342 = state_26337;
(statearr_26342[(10)] = inst_26307);

return statearr_26342;
})();
var statearr_26343_27265 = state_26337__$1;
(statearr_26343_27265[(2)] = null);

(statearr_26343_27265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (4))){
var inst_26307 = (state_26337[(10)]);
var state_26337__$1 = state_26337;
return cljs.core.async.ioc_alts_BANG_(state_26337__$1,(7),inst_26307);
} else {
if((state_val_26338 === (6))){
var inst_26333 = (state_26337[(2)]);
var state_26337__$1 = state_26337;
var statearr_26344_27270 = state_26337__$1;
(statearr_26344_27270[(2)] = inst_26333);

(statearr_26344_27270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (3))){
var inst_26335 = (state_26337[(2)]);
var state_26337__$1 = state_26337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26337__$1,inst_26335);
} else {
if((state_val_26338 === (2))){
var inst_26307 = (state_26337[(10)]);
var inst_26309 = cljs.core.count(inst_26307);
var inst_26310 = (inst_26309 > (0));
var state_26337__$1 = state_26337;
if(cljs.core.truth_(inst_26310)){
var statearr_26346_27272 = state_26337__$1;
(statearr_26346_27272[(1)] = (4));

} else {
var statearr_26347_27273 = state_26337__$1;
(statearr_26347_27273[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (11))){
var inst_26307 = (state_26337[(10)]);
var inst_26326 = (state_26337[(2)]);
var tmp26345 = inst_26307;
var inst_26307__$1 = tmp26345;
var state_26337__$1 = (function (){var statearr_26348 = state_26337;
(statearr_26348[(10)] = inst_26307__$1);

(statearr_26348[(11)] = inst_26326);

return statearr_26348;
})();
var statearr_26349_27274 = state_26337__$1;
(statearr_26349_27274[(2)] = null);

(statearr_26349_27274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (9))){
var inst_26317 = (state_26337[(8)]);
var state_26337__$1 = state_26337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26337__$1,(11),out,inst_26317);
} else {
if((state_val_26338 === (5))){
var inst_26331 = cljs.core.async.close_BANG_(out);
var state_26337__$1 = state_26337;
var statearr_26350_27275 = state_26337__$1;
(statearr_26350_27275[(2)] = inst_26331);

(statearr_26350_27275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (10))){
var inst_26329 = (state_26337[(2)]);
var state_26337__$1 = state_26337;
var statearr_26351_27276 = state_26337__$1;
(statearr_26351_27276[(2)] = inst_26329);

(statearr_26351_27276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26338 === (8))){
var inst_26318 = (state_26337[(9)]);
var inst_26316 = (state_26337[(7)]);
var inst_26307 = (state_26337[(10)]);
var inst_26317 = (state_26337[(8)]);
var inst_26321 = (function (){var cs = inst_26307;
var vec__26312 = inst_26316;
var v = inst_26317;
var c = inst_26318;
return (function (p1__26303_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26303_SHARP_);
});
})();
var inst_26322 = cljs.core.filterv(inst_26321,inst_26307);
var inst_26307__$1 = inst_26322;
var state_26337__$1 = (function (){var statearr_26352 = state_26337;
(statearr_26352[(10)] = inst_26307__$1);

return statearr_26352;
})();
var statearr_26353_27278 = state_26337__$1;
(statearr_26353_27278[(2)] = null);

(statearr_26353_27278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24914__auto__ = null;
var cljs$core$async$state_machine__24914__auto____0 = (function (){
var statearr_26354 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26354[(0)] = cljs$core$async$state_machine__24914__auto__);

(statearr_26354[(1)] = (1));

return statearr_26354;
});
var cljs$core$async$state_machine__24914__auto____1 = (function (state_26337){
while(true){
var ret_value__24915__auto__ = (function (){try{while(true){
var result__24916__auto__ = switch__24913__auto__(state_26337);
if(cljs.core.keyword_identical_QMARK_(result__24916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24916__auto__;
}
break;
}
}catch (e26355){var ex__24917__auto__ = e26355;
var statearr_26356_27280 = state_26337;
(statearr_26356_27280[(2)] = ex__24917__auto__);


if(cljs.core.seq((state_26337[(4)]))){
var statearr_26357_27284 = state_26337;
(statearr_26357_27284[(1)] = cljs.core.first((state_26337[(4)])));

} else {
throw ex__24917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27285 = state_26337;
state_26337 = G__27285;
continue;
} else {
return ret_value__24915__auto__;
}
break;
}
});
cljs$core$async$state_machine__24914__auto__ = function(state_26337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24914__auto____1.call(this,state_26337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24914__auto____0;
cljs$core$async$state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24914__auto____1;
return cljs$core$async$state_machine__24914__auto__;
})()
})();
var state__25097__auto__ = (function (){var statearr_26358 = f__25096__auto__();
(statearr_26358[(6)] = c__25095__auto___27262);

return statearr_26358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25097__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__26360 = arguments.length;
switch (G__26360) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25095__auto___27287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25096__auto__ = (function (){var switch__24913__auto__ = (function (state_26384){
var state_val_26385 = (state_26384[(1)]);
if((state_val_26385 === (7))){
var inst_26366 = (state_26384[(7)]);
var inst_26366__$1 = (state_26384[(2)]);
var inst_26367 = (inst_26366__$1 == null);
var inst_26368 = cljs.core.not(inst_26367);
var state_26384__$1 = (function (){var statearr_26386 = state_26384;
(statearr_26386[(7)] = inst_26366__$1);

return statearr_26386;
})();
if(inst_26368){
var statearr_26387_27288 = state_26384__$1;
(statearr_26387_27288[(1)] = (8));

} else {
var statearr_26388_27289 = state_26384__$1;
(statearr_26388_27289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26385 === (1))){
var inst_26361 = (0);
var state_26384__$1 = (function (){var statearr_26389 = state_26384;
(statearr_26389[(8)] = inst_26361);

return statearr_26389;
})();
var statearr_26390_27290 = state_26384__$1;
(statearr_26390_27290[(2)] = null);

(statearr_26390_27290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26385 === (4))){
var state_26384__$1 = state_26384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26384__$1,(7),ch);
} else {
if((state_val_26385 === (6))){
var inst_26379 = (state_26384[(2)]);
var state_26384__$1 = state_26384;
var statearr_26391_27291 = state_26384__$1;
(statearr_26391_27291[(2)] = inst_26379);

(statearr_26391_27291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26385 === (3))){
var inst_26381 = (state_26384[(2)]);
var inst_26382 = cljs.core.async.close_BANG_(out);
var state_26384__$1 = (function (){var statearr_26392 = state_26384;
(statearr_26392[(9)] = inst_26381);

return statearr_26392;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26384__$1,inst_26382);
} else {
if((state_val_26385 === (2))){
var inst_26361 = (state_26384[(8)]);
var inst_26363 = (inst_26361 < n);
var state_26384__$1 = state_26384;
if(cljs.core.truth_(inst_26363)){
var statearr_26393_27292 = state_26384__$1;
(statearr_26393_27292[(1)] = (4));

} else {
var statearr_26394_27293 = state_26384__$1;
(statearr_26394_27293[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26385 === (11))){
var inst_26361 = (state_26384[(8)]);
var inst_26371 = (state_26384[(2)]);
var inst_26372 = (inst_26361 + (1));
var inst_26361__$1 = inst_26372;
var state_26384__$1 = (function (){var statearr_26395 = state_26384;
(statearr_26395[(10)] = inst_26371);

(statearr_26395[(8)] = inst_26361__$1);

return statearr_26395;
})();
var statearr_26396_27294 = state_26384__$1;
(statearr_26396_27294[(2)] = null);

(statearr_26396_27294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26385 === (9))){
var state_26384__$1 = state_26384;
var statearr_26397_27295 = state_26384__$1;
(statearr_26397_27295[(2)] = null);

(statearr_26397_27295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26385 === (5))){
var state_26384__$1 = state_26384;
var statearr_26398_27296 = state_26384__$1;
(statearr_26398_27296[(2)] = null);

(statearr_26398_27296[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26385 === (10))){
var inst_26376 = (state_26384[(2)]);
var state_26384__$1 = state_26384;
var statearr_26399_27297 = state_26384__$1;
(statearr_26399_27297[(2)] = inst_26376);

(statearr_26399_27297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26385 === (8))){
var inst_26366 = (state_26384[(7)]);
var state_26384__$1 = state_26384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26384__$1,(11),out,inst_26366);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24914__auto__ = null;
var cljs$core$async$state_machine__24914__auto____0 = (function (){
var statearr_26400 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26400[(0)] = cljs$core$async$state_machine__24914__auto__);

(statearr_26400[(1)] = (1));

return statearr_26400;
});
var cljs$core$async$state_machine__24914__auto____1 = (function (state_26384){
while(true){
var ret_value__24915__auto__ = (function (){try{while(true){
var result__24916__auto__ = switch__24913__auto__(state_26384);
if(cljs.core.keyword_identical_QMARK_(result__24916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24916__auto__;
}
break;
}
}catch (e26401){var ex__24917__auto__ = e26401;
var statearr_26402_27298 = state_26384;
(statearr_26402_27298[(2)] = ex__24917__auto__);


if(cljs.core.seq((state_26384[(4)]))){
var statearr_26403_27299 = state_26384;
(statearr_26403_27299[(1)] = cljs.core.first((state_26384[(4)])));

} else {
throw ex__24917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27300 = state_26384;
state_26384 = G__27300;
continue;
} else {
return ret_value__24915__auto__;
}
break;
}
});
cljs$core$async$state_machine__24914__auto__ = function(state_26384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24914__auto____1.call(this,state_26384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24914__auto____0;
cljs$core$async$state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24914__auto____1;
return cljs$core$async$state_machine__24914__auto__;
})()
})();
var state__25097__auto__ = (function (){var statearr_26404 = f__25096__auto__();
(statearr_26404[(6)] = c__25095__auto___27287);

return statearr_26404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25097__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26406 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26406 = (function (f,ch,meta26407){
this.f = f;
this.ch = ch;
this.meta26407 = meta26407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26408,meta26407__$1){
var self__ = this;
var _26408__$1 = this;
return (new cljs.core.async.t_cljs$core$async26406(self__.f,self__.ch,meta26407__$1));
}));

(cljs.core.async.t_cljs$core$async26406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26408){
var self__ = this;
var _26408__$1 = this;
return self__.meta26407;
}));

(cljs.core.async.t_cljs$core$async26406.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26406.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26406.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26406.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26406.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26409 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26409 = (function (f,ch,meta26407,_,fn1,meta26410){
this.f = f;
this.ch = ch;
this.meta26407 = meta26407;
this._ = _;
this.fn1 = fn1;
this.meta26410 = meta26410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26411,meta26410__$1){
var self__ = this;
var _26411__$1 = this;
return (new cljs.core.async.t_cljs$core$async26409(self__.f,self__.ch,self__.meta26407,self__._,self__.fn1,meta26410__$1));
}));

(cljs.core.async.t_cljs$core$async26409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26411){
var self__ = this;
var _26411__$1 = this;
return self__.meta26410;
}));

(cljs.core.async.t_cljs$core$async26409.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26409.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async26409.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26409.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__26405_SHARP_){
var G__26412 = (((p1__26405_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__26405_SHARP_) : self__.f.call(null,p1__26405_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26412) : f1.call(null,G__26412));
});
}));

(cljs.core.async.t_cljs$core$async26409.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26407","meta26407",-296129034,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26406","cljs.core.async/t_cljs$core$async26406",950716595,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26410","meta26410",-1772744982,null)], null);
}));

(cljs.core.async.t_cljs$core$async26409.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26409");

(cljs.core.async.t_cljs$core$async26409.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async26409");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26409.
 */
cljs.core.async.__GT_t_cljs$core$async26409 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26409(f__$1,ch__$1,meta26407__$1,___$2,fn1__$1,meta26410){
return (new cljs.core.async.t_cljs$core$async26409(f__$1,ch__$1,meta26407__$1,___$2,fn1__$1,meta26410));
});

}

return (new cljs.core.async.t_cljs$core$async26409(self__.f,self__.ch,self__.meta26407,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__26413 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26413) : self__.f.call(null,G__26413));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async26406.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26406.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async26406.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26407","meta26407",-296129034,null)], null);
}));

(cljs.core.async.t_cljs$core$async26406.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26406.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26406");

(cljs.core.async.t_cljs$core$async26406.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async26406");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26406.
 */
cljs.core.async.__GT_t_cljs$core$async26406 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26406(f__$1,ch__$1,meta26407){
return (new cljs.core.async.t_cljs$core$async26406(f__$1,ch__$1,meta26407));
});

}

return (new cljs.core.async.t_cljs$core$async26406(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26414 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26414 = (function (f,ch,meta26415){
this.f = f;
this.ch = ch;
this.meta26415 = meta26415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26416,meta26415__$1){
var self__ = this;
var _26416__$1 = this;
return (new cljs.core.async.t_cljs$core$async26414(self__.f,self__.ch,meta26415__$1));
}));

(cljs.core.async.t_cljs$core$async26414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26416){
var self__ = this;
var _26416__$1 = this;
return self__.meta26415;
}));

(cljs.core.async.t_cljs$core$async26414.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26414.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26414.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26414.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26414.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26414.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async26414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26415","meta26415",-1759535790,null)], null);
}));

(cljs.core.async.t_cljs$core$async26414.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26414");

(cljs.core.async.t_cljs$core$async26414.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async26414");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26414.
 */
cljs.core.async.__GT_t_cljs$core$async26414 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26414(f__$1,ch__$1,meta26415){
return (new cljs.core.async.t_cljs$core$async26414(f__$1,ch__$1,meta26415));
});

}

return (new cljs.core.async.t_cljs$core$async26414(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26417 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26417 = (function (p,ch,meta26418){
this.p = p;
this.ch = ch;
this.meta26418 = meta26418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26419,meta26418__$1){
var self__ = this;
var _26419__$1 = this;
return (new cljs.core.async.t_cljs$core$async26417(self__.p,self__.ch,meta26418__$1));
}));

(cljs.core.async.t_cljs$core$async26417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26419){
var self__ = this;
var _26419__$1 = this;
return self__.meta26418;
}));

(cljs.core.async.t_cljs$core$async26417.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26417.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26417.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async26417.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26417.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26417.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26417.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async26417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26418","meta26418",-318529054,null)], null);
}));

(cljs.core.async.t_cljs$core$async26417.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26417");

(cljs.core.async.t_cljs$core$async26417.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async26417");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26417.
 */
cljs.core.async.__GT_t_cljs$core$async26417 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26417(p__$1,ch__$1,meta26418){
return (new cljs.core.async.t_cljs$core$async26417(p__$1,ch__$1,meta26418));
});

}

return (new cljs.core.async.t_cljs$core$async26417(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__26421 = arguments.length;
switch (G__26421) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25095__auto___27307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25096__auto__ = (function (){var switch__24913__auto__ = (function (state_26442){
var state_val_26443 = (state_26442[(1)]);
if((state_val_26443 === (7))){
var inst_26438 = (state_26442[(2)]);
var state_26442__$1 = state_26442;
var statearr_26444_27308 = state_26442__$1;
(statearr_26444_27308[(2)] = inst_26438);

(statearr_26444_27308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26443 === (1))){
var state_26442__$1 = state_26442;
var statearr_26445_27309 = state_26442__$1;
(statearr_26445_27309[(2)] = null);

(statearr_26445_27309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26443 === (4))){
var inst_26424 = (state_26442[(7)]);
var inst_26424__$1 = (state_26442[(2)]);
var inst_26425 = (inst_26424__$1 == null);
var state_26442__$1 = (function (){var statearr_26446 = state_26442;
(statearr_26446[(7)] = inst_26424__$1);

return statearr_26446;
})();
if(cljs.core.truth_(inst_26425)){
var statearr_26447_27310 = state_26442__$1;
(statearr_26447_27310[(1)] = (5));

} else {
var statearr_26448_27311 = state_26442__$1;
(statearr_26448_27311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26443 === (6))){
var inst_26424 = (state_26442[(7)]);
var inst_26429 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_26424) : p.call(null,inst_26424));
var state_26442__$1 = state_26442;
if(cljs.core.truth_(inst_26429)){
var statearr_26449_27312 = state_26442__$1;
(statearr_26449_27312[(1)] = (8));

} else {
var statearr_26450_27313 = state_26442__$1;
(statearr_26450_27313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26443 === (3))){
var inst_26440 = (state_26442[(2)]);
var state_26442__$1 = state_26442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26442__$1,inst_26440);
} else {
if((state_val_26443 === (2))){
var state_26442__$1 = state_26442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26442__$1,(4),ch);
} else {
if((state_val_26443 === (11))){
var inst_26432 = (state_26442[(2)]);
var state_26442__$1 = state_26442;
var statearr_26451_27314 = state_26442__$1;
(statearr_26451_27314[(2)] = inst_26432);

(statearr_26451_27314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26443 === (9))){
var state_26442__$1 = state_26442;
var statearr_26452_27315 = state_26442__$1;
(statearr_26452_27315[(2)] = null);

(statearr_26452_27315[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26443 === (5))){
var inst_26427 = cljs.core.async.close_BANG_(out);
var state_26442__$1 = state_26442;
var statearr_26453_27316 = state_26442__$1;
(statearr_26453_27316[(2)] = inst_26427);

(statearr_26453_27316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26443 === (10))){
var inst_26435 = (state_26442[(2)]);
var state_26442__$1 = (function (){var statearr_26454 = state_26442;
(statearr_26454[(8)] = inst_26435);

return statearr_26454;
})();
var statearr_26455_27317 = state_26442__$1;
(statearr_26455_27317[(2)] = null);

(statearr_26455_27317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26443 === (8))){
var inst_26424 = (state_26442[(7)]);
var state_26442__$1 = state_26442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26442__$1,(11),out,inst_26424);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24914__auto__ = null;
var cljs$core$async$state_machine__24914__auto____0 = (function (){
var statearr_26456 = [null,null,null,null,null,null,null,null,null];
(statearr_26456[(0)] = cljs$core$async$state_machine__24914__auto__);

(statearr_26456[(1)] = (1));

return statearr_26456;
});
var cljs$core$async$state_machine__24914__auto____1 = (function (state_26442){
while(true){
var ret_value__24915__auto__ = (function (){try{while(true){
var result__24916__auto__ = switch__24913__auto__(state_26442);
if(cljs.core.keyword_identical_QMARK_(result__24916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24916__auto__;
}
break;
}
}catch (e26457){var ex__24917__auto__ = e26457;
var statearr_26458_27318 = state_26442;
(statearr_26458_27318[(2)] = ex__24917__auto__);


if(cljs.core.seq((state_26442[(4)]))){
var statearr_26459_27319 = state_26442;
(statearr_26459_27319[(1)] = cljs.core.first((state_26442[(4)])));

} else {
throw ex__24917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27320 = state_26442;
state_26442 = G__27320;
continue;
} else {
return ret_value__24915__auto__;
}
break;
}
});
cljs$core$async$state_machine__24914__auto__ = function(state_26442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24914__auto____1.call(this,state_26442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24914__auto____0;
cljs$core$async$state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24914__auto____1;
return cljs$core$async$state_machine__24914__auto__;
})()
})();
var state__25097__auto__ = (function (){var statearr_26460 = f__25096__auto__();
(statearr_26460[(6)] = c__25095__auto___27307);

return statearr_26460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25097__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26462 = arguments.length;
switch (G__26462) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25095__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25096__auto__ = (function (){var switch__24913__auto__ = (function (state_26524){
var state_val_26525 = (state_26524[(1)]);
if((state_val_26525 === (7))){
var inst_26520 = (state_26524[(2)]);
var state_26524__$1 = state_26524;
var statearr_26526_27330 = state_26524__$1;
(statearr_26526_27330[(2)] = inst_26520);

(statearr_26526_27330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (20))){
var inst_26490 = (state_26524[(7)]);
var inst_26501 = (state_26524[(2)]);
var inst_26502 = cljs.core.next(inst_26490);
var inst_26476 = inst_26502;
var inst_26477 = null;
var inst_26478 = (0);
var inst_26479 = (0);
var state_26524__$1 = (function (){var statearr_26527 = state_26524;
(statearr_26527[(8)] = inst_26477);

(statearr_26527[(9)] = inst_26479);

(statearr_26527[(10)] = inst_26478);

(statearr_26527[(11)] = inst_26501);

(statearr_26527[(12)] = inst_26476);

return statearr_26527;
})();
var statearr_26528_27332 = state_26524__$1;
(statearr_26528_27332[(2)] = null);

(statearr_26528_27332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (1))){
var state_26524__$1 = state_26524;
var statearr_26529_27334 = state_26524__$1;
(statearr_26529_27334[(2)] = null);

(statearr_26529_27334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (4))){
var inst_26465 = (state_26524[(13)]);
var inst_26465__$1 = (state_26524[(2)]);
var inst_26466 = (inst_26465__$1 == null);
var state_26524__$1 = (function (){var statearr_26530 = state_26524;
(statearr_26530[(13)] = inst_26465__$1);

return statearr_26530;
})();
if(cljs.core.truth_(inst_26466)){
var statearr_26531_27335 = state_26524__$1;
(statearr_26531_27335[(1)] = (5));

} else {
var statearr_26532_27336 = state_26524__$1;
(statearr_26532_27336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (15))){
var state_26524__$1 = state_26524;
var statearr_26536_27337 = state_26524__$1;
(statearr_26536_27337[(2)] = null);

(statearr_26536_27337[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (21))){
var state_26524__$1 = state_26524;
var statearr_26537_27338 = state_26524__$1;
(statearr_26537_27338[(2)] = null);

(statearr_26537_27338[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (13))){
var inst_26477 = (state_26524[(8)]);
var inst_26479 = (state_26524[(9)]);
var inst_26478 = (state_26524[(10)]);
var inst_26476 = (state_26524[(12)]);
var inst_26486 = (state_26524[(2)]);
var inst_26487 = (inst_26479 + (1));
var tmp26533 = inst_26477;
var tmp26534 = inst_26478;
var tmp26535 = inst_26476;
var inst_26476__$1 = tmp26535;
var inst_26477__$1 = tmp26533;
var inst_26478__$1 = tmp26534;
var inst_26479__$1 = inst_26487;
var state_26524__$1 = (function (){var statearr_26538 = state_26524;
(statearr_26538[(8)] = inst_26477__$1);

(statearr_26538[(9)] = inst_26479__$1);

(statearr_26538[(10)] = inst_26478__$1);

(statearr_26538[(14)] = inst_26486);

(statearr_26538[(12)] = inst_26476__$1);

return statearr_26538;
})();
var statearr_26539_27339 = state_26524__$1;
(statearr_26539_27339[(2)] = null);

(statearr_26539_27339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (22))){
var state_26524__$1 = state_26524;
var statearr_26540_27340 = state_26524__$1;
(statearr_26540_27340[(2)] = null);

(statearr_26540_27340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (6))){
var inst_26465 = (state_26524[(13)]);
var inst_26474 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26465) : f.call(null,inst_26465));
var inst_26475 = cljs.core.seq(inst_26474);
var inst_26476 = inst_26475;
var inst_26477 = null;
var inst_26478 = (0);
var inst_26479 = (0);
var state_26524__$1 = (function (){var statearr_26541 = state_26524;
(statearr_26541[(8)] = inst_26477);

(statearr_26541[(9)] = inst_26479);

(statearr_26541[(10)] = inst_26478);

(statearr_26541[(12)] = inst_26476);

return statearr_26541;
})();
var statearr_26542_27341 = state_26524__$1;
(statearr_26542_27341[(2)] = null);

(statearr_26542_27341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (17))){
var inst_26490 = (state_26524[(7)]);
var inst_26494 = cljs.core.chunk_first(inst_26490);
var inst_26495 = cljs.core.chunk_rest(inst_26490);
var inst_26496 = cljs.core.count(inst_26494);
var inst_26476 = inst_26495;
var inst_26477 = inst_26494;
var inst_26478 = inst_26496;
var inst_26479 = (0);
var state_26524__$1 = (function (){var statearr_26543 = state_26524;
(statearr_26543[(8)] = inst_26477);

(statearr_26543[(9)] = inst_26479);

(statearr_26543[(10)] = inst_26478);

(statearr_26543[(12)] = inst_26476);

return statearr_26543;
})();
var statearr_26544_27342 = state_26524__$1;
(statearr_26544_27342[(2)] = null);

(statearr_26544_27342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (3))){
var inst_26522 = (state_26524[(2)]);
var state_26524__$1 = state_26524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26524__$1,inst_26522);
} else {
if((state_val_26525 === (12))){
var inst_26510 = (state_26524[(2)]);
var state_26524__$1 = state_26524;
var statearr_26545_27343 = state_26524__$1;
(statearr_26545_27343[(2)] = inst_26510);

(statearr_26545_27343[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (2))){
var state_26524__$1 = state_26524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26524__$1,(4),in$);
} else {
if((state_val_26525 === (23))){
var inst_26518 = (state_26524[(2)]);
var state_26524__$1 = state_26524;
var statearr_26546_27344 = state_26524__$1;
(statearr_26546_27344[(2)] = inst_26518);

(statearr_26546_27344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (19))){
var inst_26505 = (state_26524[(2)]);
var state_26524__$1 = state_26524;
var statearr_26547_27345 = state_26524__$1;
(statearr_26547_27345[(2)] = inst_26505);

(statearr_26547_27345[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (11))){
var inst_26490 = (state_26524[(7)]);
var inst_26476 = (state_26524[(12)]);
var inst_26490__$1 = cljs.core.seq(inst_26476);
var state_26524__$1 = (function (){var statearr_26548 = state_26524;
(statearr_26548[(7)] = inst_26490__$1);

return statearr_26548;
})();
if(inst_26490__$1){
var statearr_26549_27346 = state_26524__$1;
(statearr_26549_27346[(1)] = (14));

} else {
var statearr_26550_27347 = state_26524__$1;
(statearr_26550_27347[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (9))){
var inst_26512 = (state_26524[(2)]);
var inst_26513 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_26524__$1 = (function (){var statearr_26551 = state_26524;
(statearr_26551[(15)] = inst_26512);

return statearr_26551;
})();
if(cljs.core.truth_(inst_26513)){
var statearr_26552_27348 = state_26524__$1;
(statearr_26552_27348[(1)] = (21));

} else {
var statearr_26553_27349 = state_26524__$1;
(statearr_26553_27349[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (5))){
var inst_26468 = cljs.core.async.close_BANG_(out);
var state_26524__$1 = state_26524;
var statearr_26554_27350 = state_26524__$1;
(statearr_26554_27350[(2)] = inst_26468);

(statearr_26554_27350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (14))){
var inst_26490 = (state_26524[(7)]);
var inst_26492 = cljs.core.chunked_seq_QMARK_(inst_26490);
var state_26524__$1 = state_26524;
if(inst_26492){
var statearr_26555_27351 = state_26524__$1;
(statearr_26555_27351[(1)] = (17));

} else {
var statearr_26556_27352 = state_26524__$1;
(statearr_26556_27352[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (16))){
var inst_26508 = (state_26524[(2)]);
var state_26524__$1 = state_26524;
var statearr_26557_27353 = state_26524__$1;
(statearr_26557_27353[(2)] = inst_26508);

(statearr_26557_27353[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (10))){
var inst_26477 = (state_26524[(8)]);
var inst_26479 = (state_26524[(9)]);
var inst_26484 = cljs.core._nth(inst_26477,inst_26479);
var state_26524__$1 = state_26524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26524__$1,(13),out,inst_26484);
} else {
if((state_val_26525 === (18))){
var inst_26490 = (state_26524[(7)]);
var inst_26499 = cljs.core.first(inst_26490);
var state_26524__$1 = state_26524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26524__$1,(20),out,inst_26499);
} else {
if((state_val_26525 === (8))){
var inst_26479 = (state_26524[(9)]);
var inst_26478 = (state_26524[(10)]);
var inst_26481 = (inst_26479 < inst_26478);
var inst_26482 = inst_26481;
var state_26524__$1 = state_26524;
if(cljs.core.truth_(inst_26482)){
var statearr_26558_27354 = state_26524__$1;
(statearr_26558_27354[(1)] = (10));

} else {
var statearr_26559_27355 = state_26524__$1;
(statearr_26559_27355[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24914__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24914__auto____0 = (function (){
var statearr_26560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26560[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24914__auto__);

(statearr_26560[(1)] = (1));

return statearr_26560;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24914__auto____1 = (function (state_26524){
while(true){
var ret_value__24915__auto__ = (function (){try{while(true){
var result__24916__auto__ = switch__24913__auto__(state_26524);
if(cljs.core.keyword_identical_QMARK_(result__24916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24916__auto__;
}
break;
}
}catch (e26561){var ex__24917__auto__ = e26561;
var statearr_26562_27356 = state_26524;
(statearr_26562_27356[(2)] = ex__24917__auto__);


if(cljs.core.seq((state_26524[(4)]))){
var statearr_26563_27357 = state_26524;
(statearr_26563_27357[(1)] = cljs.core.first((state_26524[(4)])));

} else {
throw ex__24917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27358 = state_26524;
state_26524 = G__27358;
continue;
} else {
return ret_value__24915__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24914__auto__ = function(state_26524){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24914__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24914__auto____1.call(this,state_26524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24914__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24914__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24914__auto__;
})()
})();
var state__25097__auto__ = (function (){var statearr_26564 = f__25096__auto__();
(statearr_26564[(6)] = c__25095__auto__);

return statearr_26564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25097__auto__);
}));

return c__25095__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26566 = arguments.length;
switch (G__26566) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26568 = arguments.length;
switch (G__26568) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26570 = arguments.length;
switch (G__26570) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25095__auto___27375 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25096__auto__ = (function (){var switch__24913__auto__ = (function (state_26594){
var state_val_26595 = (state_26594[(1)]);
if((state_val_26595 === (7))){
var inst_26589 = (state_26594[(2)]);
var state_26594__$1 = state_26594;
var statearr_26596_27376 = state_26594__$1;
(statearr_26596_27376[(2)] = inst_26589);

(statearr_26596_27376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (1))){
var inst_26571 = null;
var state_26594__$1 = (function (){var statearr_26597 = state_26594;
(statearr_26597[(7)] = inst_26571);

return statearr_26597;
})();
var statearr_26598_27377 = state_26594__$1;
(statearr_26598_27377[(2)] = null);

(statearr_26598_27377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (4))){
var inst_26574 = (state_26594[(8)]);
var inst_26574__$1 = (state_26594[(2)]);
var inst_26575 = (inst_26574__$1 == null);
var inst_26576 = cljs.core.not(inst_26575);
var state_26594__$1 = (function (){var statearr_26599 = state_26594;
(statearr_26599[(8)] = inst_26574__$1);

return statearr_26599;
})();
if(inst_26576){
var statearr_26600_27381 = state_26594__$1;
(statearr_26600_27381[(1)] = (5));

} else {
var statearr_26601_27382 = state_26594__$1;
(statearr_26601_27382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (6))){
var state_26594__$1 = state_26594;
var statearr_26602_27383 = state_26594__$1;
(statearr_26602_27383[(2)] = null);

(statearr_26602_27383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (3))){
var inst_26591 = (state_26594[(2)]);
var inst_26592 = cljs.core.async.close_BANG_(out);
var state_26594__$1 = (function (){var statearr_26603 = state_26594;
(statearr_26603[(9)] = inst_26591);

return statearr_26603;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26594__$1,inst_26592);
} else {
if((state_val_26595 === (2))){
var state_26594__$1 = state_26594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26594__$1,(4),ch);
} else {
if((state_val_26595 === (11))){
var inst_26574 = (state_26594[(8)]);
var inst_26583 = (state_26594[(2)]);
var inst_26571 = inst_26574;
var state_26594__$1 = (function (){var statearr_26604 = state_26594;
(statearr_26604[(10)] = inst_26583);

(statearr_26604[(7)] = inst_26571);

return statearr_26604;
})();
var statearr_26605_27384 = state_26594__$1;
(statearr_26605_27384[(2)] = null);

(statearr_26605_27384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (9))){
var inst_26574 = (state_26594[(8)]);
var state_26594__$1 = state_26594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26594__$1,(11),out,inst_26574);
} else {
if((state_val_26595 === (5))){
var inst_26571 = (state_26594[(7)]);
var inst_26574 = (state_26594[(8)]);
var inst_26578 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26574,inst_26571);
var state_26594__$1 = state_26594;
if(inst_26578){
var statearr_26607_27388 = state_26594__$1;
(statearr_26607_27388[(1)] = (8));

} else {
var statearr_26608_27389 = state_26594__$1;
(statearr_26608_27389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (10))){
var inst_26586 = (state_26594[(2)]);
var state_26594__$1 = state_26594;
var statearr_26609_27390 = state_26594__$1;
(statearr_26609_27390[(2)] = inst_26586);

(statearr_26609_27390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (8))){
var inst_26571 = (state_26594[(7)]);
var tmp26606 = inst_26571;
var inst_26571__$1 = tmp26606;
var state_26594__$1 = (function (){var statearr_26610 = state_26594;
(statearr_26610[(7)] = inst_26571__$1);

return statearr_26610;
})();
var statearr_26611_27391 = state_26594__$1;
(statearr_26611_27391[(2)] = null);

(statearr_26611_27391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24914__auto__ = null;
var cljs$core$async$state_machine__24914__auto____0 = (function (){
var statearr_26612 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26612[(0)] = cljs$core$async$state_machine__24914__auto__);

(statearr_26612[(1)] = (1));

return statearr_26612;
});
var cljs$core$async$state_machine__24914__auto____1 = (function (state_26594){
while(true){
var ret_value__24915__auto__ = (function (){try{while(true){
var result__24916__auto__ = switch__24913__auto__(state_26594);
if(cljs.core.keyword_identical_QMARK_(result__24916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24916__auto__;
}
break;
}
}catch (e26613){var ex__24917__auto__ = e26613;
var statearr_26614_27393 = state_26594;
(statearr_26614_27393[(2)] = ex__24917__auto__);


if(cljs.core.seq((state_26594[(4)]))){
var statearr_26615_27394 = state_26594;
(statearr_26615_27394[(1)] = cljs.core.first((state_26594[(4)])));

} else {
throw ex__24917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27395 = state_26594;
state_26594 = G__27395;
continue;
} else {
return ret_value__24915__auto__;
}
break;
}
});
cljs$core$async$state_machine__24914__auto__ = function(state_26594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24914__auto____1.call(this,state_26594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24914__auto____0;
cljs$core$async$state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24914__auto____1;
return cljs$core$async$state_machine__24914__auto__;
})()
})();
var state__25097__auto__ = (function (){var statearr_26616 = f__25096__auto__();
(statearr_26616[(6)] = c__25095__auto___27375);

return statearr_26616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25097__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26618 = arguments.length;
switch (G__26618) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25095__auto___27400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25096__auto__ = (function (){var switch__24913__auto__ = (function (state_26656){
var state_val_26657 = (state_26656[(1)]);
if((state_val_26657 === (7))){
var inst_26652 = (state_26656[(2)]);
var state_26656__$1 = state_26656;
var statearr_26658_27407 = state_26656__$1;
(statearr_26658_27407[(2)] = inst_26652);

(statearr_26658_27407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26657 === (1))){
var inst_26619 = (new Array(n));
var inst_26620 = inst_26619;
var inst_26621 = (0);
var state_26656__$1 = (function (){var statearr_26659 = state_26656;
(statearr_26659[(7)] = inst_26620);

(statearr_26659[(8)] = inst_26621);

return statearr_26659;
})();
var statearr_26660_27408 = state_26656__$1;
(statearr_26660_27408[(2)] = null);

(statearr_26660_27408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26657 === (4))){
var inst_26624 = (state_26656[(9)]);
var inst_26624__$1 = (state_26656[(2)]);
var inst_26625 = (inst_26624__$1 == null);
var inst_26626 = cljs.core.not(inst_26625);
var state_26656__$1 = (function (){var statearr_26661 = state_26656;
(statearr_26661[(9)] = inst_26624__$1);

return statearr_26661;
})();
if(inst_26626){
var statearr_26662_27415 = state_26656__$1;
(statearr_26662_27415[(1)] = (5));

} else {
var statearr_26663_27416 = state_26656__$1;
(statearr_26663_27416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26657 === (15))){
var inst_26646 = (state_26656[(2)]);
var state_26656__$1 = state_26656;
var statearr_26664_27417 = state_26656__$1;
(statearr_26664_27417[(2)] = inst_26646);

(statearr_26664_27417[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26657 === (13))){
var state_26656__$1 = state_26656;
var statearr_26665_27418 = state_26656__$1;
(statearr_26665_27418[(2)] = null);

(statearr_26665_27418[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26657 === (6))){
var inst_26621 = (state_26656[(8)]);
var inst_26642 = (inst_26621 > (0));
var state_26656__$1 = state_26656;
if(cljs.core.truth_(inst_26642)){
var statearr_26666_27419 = state_26656__$1;
(statearr_26666_27419[(1)] = (12));

} else {
var statearr_26667_27420 = state_26656__$1;
(statearr_26667_27420[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26657 === (3))){
var inst_26654 = (state_26656[(2)]);
var state_26656__$1 = state_26656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26656__$1,inst_26654);
} else {
if((state_val_26657 === (12))){
var inst_26620 = (state_26656[(7)]);
var inst_26644 = cljs.core.vec(inst_26620);
var state_26656__$1 = state_26656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26656__$1,(15),out,inst_26644);
} else {
if((state_val_26657 === (2))){
var state_26656__$1 = state_26656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26656__$1,(4),ch);
} else {
if((state_val_26657 === (11))){
var inst_26636 = (state_26656[(2)]);
var inst_26637 = (new Array(n));
var inst_26620 = inst_26637;
var inst_26621 = (0);
var state_26656__$1 = (function (){var statearr_26668 = state_26656;
(statearr_26668[(7)] = inst_26620);

(statearr_26668[(10)] = inst_26636);

(statearr_26668[(8)] = inst_26621);

return statearr_26668;
})();
var statearr_26669_27421 = state_26656__$1;
(statearr_26669_27421[(2)] = null);

(statearr_26669_27421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26657 === (9))){
var inst_26620 = (state_26656[(7)]);
var inst_26634 = cljs.core.vec(inst_26620);
var state_26656__$1 = state_26656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26656__$1,(11),out,inst_26634);
} else {
if((state_val_26657 === (5))){
var inst_26620 = (state_26656[(7)]);
var inst_26624 = (state_26656[(9)]);
var inst_26629 = (state_26656[(11)]);
var inst_26621 = (state_26656[(8)]);
var inst_26628 = (inst_26620[inst_26621] = inst_26624);
var inst_26629__$1 = (inst_26621 + (1));
var inst_26630 = (inst_26629__$1 < n);
var state_26656__$1 = (function (){var statearr_26670 = state_26656;
(statearr_26670[(12)] = inst_26628);

(statearr_26670[(11)] = inst_26629__$1);

return statearr_26670;
})();
if(cljs.core.truth_(inst_26630)){
var statearr_26671_27422 = state_26656__$1;
(statearr_26671_27422[(1)] = (8));

} else {
var statearr_26672_27423 = state_26656__$1;
(statearr_26672_27423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26657 === (14))){
var inst_26649 = (state_26656[(2)]);
var inst_26650 = cljs.core.async.close_BANG_(out);
var state_26656__$1 = (function (){var statearr_26674 = state_26656;
(statearr_26674[(13)] = inst_26649);

return statearr_26674;
})();
var statearr_26675_27424 = state_26656__$1;
(statearr_26675_27424[(2)] = inst_26650);

(statearr_26675_27424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26657 === (10))){
var inst_26640 = (state_26656[(2)]);
var state_26656__$1 = state_26656;
var statearr_26676_27425 = state_26656__$1;
(statearr_26676_27425[(2)] = inst_26640);

(statearr_26676_27425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26657 === (8))){
var inst_26620 = (state_26656[(7)]);
var inst_26629 = (state_26656[(11)]);
var tmp26673 = inst_26620;
var inst_26620__$1 = tmp26673;
var inst_26621 = inst_26629;
var state_26656__$1 = (function (){var statearr_26677 = state_26656;
(statearr_26677[(7)] = inst_26620__$1);

(statearr_26677[(8)] = inst_26621);

return statearr_26677;
})();
var statearr_26678_27426 = state_26656__$1;
(statearr_26678_27426[(2)] = null);

(statearr_26678_27426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24914__auto__ = null;
var cljs$core$async$state_machine__24914__auto____0 = (function (){
var statearr_26679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26679[(0)] = cljs$core$async$state_machine__24914__auto__);

(statearr_26679[(1)] = (1));

return statearr_26679;
});
var cljs$core$async$state_machine__24914__auto____1 = (function (state_26656){
while(true){
var ret_value__24915__auto__ = (function (){try{while(true){
var result__24916__auto__ = switch__24913__auto__(state_26656);
if(cljs.core.keyword_identical_QMARK_(result__24916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24916__auto__;
}
break;
}
}catch (e26680){var ex__24917__auto__ = e26680;
var statearr_26681_27433 = state_26656;
(statearr_26681_27433[(2)] = ex__24917__auto__);


if(cljs.core.seq((state_26656[(4)]))){
var statearr_26682_27434 = state_26656;
(statearr_26682_27434[(1)] = cljs.core.first((state_26656[(4)])));

} else {
throw ex__24917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27435 = state_26656;
state_26656 = G__27435;
continue;
} else {
return ret_value__24915__auto__;
}
break;
}
});
cljs$core$async$state_machine__24914__auto__ = function(state_26656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24914__auto____1.call(this,state_26656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24914__auto____0;
cljs$core$async$state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24914__auto____1;
return cljs$core$async$state_machine__24914__auto__;
})()
})();
var state__25097__auto__ = (function (){var statearr_26683 = f__25096__auto__();
(statearr_26683[(6)] = c__25095__auto___27400);

return statearr_26683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25097__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26685 = arguments.length;
switch (G__26685) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25095__auto___27437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25096__auto__ = (function (){var switch__24913__auto__ = (function (state_26730){
var state_val_26731 = (state_26730[(1)]);
if((state_val_26731 === (7))){
var inst_26726 = (state_26730[(2)]);
var state_26730__$1 = state_26730;
var statearr_26732_27438 = state_26730__$1;
(statearr_26732_27438[(2)] = inst_26726);

(statearr_26732_27438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26731 === (1))){
var inst_26686 = [];
var inst_26687 = inst_26686;
var inst_26688 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26730__$1 = (function (){var statearr_26733 = state_26730;
(statearr_26733[(7)] = inst_26687);

(statearr_26733[(8)] = inst_26688);

return statearr_26733;
})();
var statearr_26734_27439 = state_26730__$1;
(statearr_26734_27439[(2)] = null);

(statearr_26734_27439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26731 === (4))){
var inst_26691 = (state_26730[(9)]);
var inst_26691__$1 = (state_26730[(2)]);
var inst_26692 = (inst_26691__$1 == null);
var inst_26693 = cljs.core.not(inst_26692);
var state_26730__$1 = (function (){var statearr_26735 = state_26730;
(statearr_26735[(9)] = inst_26691__$1);

return statearr_26735;
})();
if(inst_26693){
var statearr_26736_27440 = state_26730__$1;
(statearr_26736_27440[(1)] = (5));

} else {
var statearr_26737_27441 = state_26730__$1;
(statearr_26737_27441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26731 === (15))){
var inst_26687 = (state_26730[(7)]);
var inst_26718 = cljs.core.vec(inst_26687);
var state_26730__$1 = state_26730;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26730__$1,(18),out,inst_26718);
} else {
if((state_val_26731 === (13))){
var inst_26713 = (state_26730[(2)]);
var state_26730__$1 = state_26730;
var statearr_26738_27448 = state_26730__$1;
(statearr_26738_27448[(2)] = inst_26713);

(statearr_26738_27448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26731 === (6))){
var inst_26687 = (state_26730[(7)]);
var inst_26715 = inst_26687.length;
var inst_26716 = (inst_26715 > (0));
var state_26730__$1 = state_26730;
if(cljs.core.truth_(inst_26716)){
var statearr_26739_27449 = state_26730__$1;
(statearr_26739_27449[(1)] = (15));

} else {
var statearr_26740_27450 = state_26730__$1;
(statearr_26740_27450[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26731 === (17))){
var inst_26723 = (state_26730[(2)]);
var inst_26724 = cljs.core.async.close_BANG_(out);
var state_26730__$1 = (function (){var statearr_26741 = state_26730;
(statearr_26741[(10)] = inst_26723);

return statearr_26741;
})();
var statearr_26742_27451 = state_26730__$1;
(statearr_26742_27451[(2)] = inst_26724);

(statearr_26742_27451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26731 === (3))){
var inst_26728 = (state_26730[(2)]);
var state_26730__$1 = state_26730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26730__$1,inst_26728);
} else {
if((state_val_26731 === (12))){
var inst_26687 = (state_26730[(7)]);
var inst_26706 = cljs.core.vec(inst_26687);
var state_26730__$1 = state_26730;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26730__$1,(14),out,inst_26706);
} else {
if((state_val_26731 === (2))){
var state_26730__$1 = state_26730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26730__$1,(4),ch);
} else {
if((state_val_26731 === (11))){
var inst_26691 = (state_26730[(9)]);
var inst_26695 = (state_26730[(11)]);
var inst_26687 = (state_26730[(7)]);
var inst_26703 = inst_26687.push(inst_26691);
var tmp26743 = inst_26687;
var inst_26687__$1 = tmp26743;
var inst_26688 = inst_26695;
var state_26730__$1 = (function (){var statearr_26744 = state_26730;
(statearr_26744[(7)] = inst_26687__$1);

(statearr_26744[(8)] = inst_26688);

(statearr_26744[(12)] = inst_26703);

return statearr_26744;
})();
var statearr_26745_27452 = state_26730__$1;
(statearr_26745_27452[(2)] = null);

(statearr_26745_27452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26731 === (9))){
var inst_26688 = (state_26730[(8)]);
var inst_26699 = cljs.core.keyword_identical_QMARK_(inst_26688,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_26730__$1 = state_26730;
var statearr_26746_27453 = state_26730__$1;
(statearr_26746_27453[(2)] = inst_26699);

(statearr_26746_27453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26731 === (5))){
var inst_26691 = (state_26730[(9)]);
var inst_26695 = (state_26730[(11)]);
var inst_26696 = (state_26730[(13)]);
var inst_26688 = (state_26730[(8)]);
var inst_26695__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26691) : f.call(null,inst_26691));
var inst_26696__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26695__$1,inst_26688);
var state_26730__$1 = (function (){var statearr_26747 = state_26730;
(statearr_26747[(11)] = inst_26695__$1);

(statearr_26747[(13)] = inst_26696__$1);

return statearr_26747;
})();
if(inst_26696__$1){
var statearr_26748_27454 = state_26730__$1;
(statearr_26748_27454[(1)] = (8));

} else {
var statearr_26749_27455 = state_26730__$1;
(statearr_26749_27455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26731 === (14))){
var inst_26691 = (state_26730[(9)]);
var inst_26695 = (state_26730[(11)]);
var inst_26708 = (state_26730[(2)]);
var inst_26709 = [];
var inst_26710 = inst_26709.push(inst_26691);
var inst_26687 = inst_26709;
var inst_26688 = inst_26695;
var state_26730__$1 = (function (){var statearr_26750 = state_26730;
(statearr_26750[(14)] = inst_26710);

(statearr_26750[(15)] = inst_26708);

(statearr_26750[(7)] = inst_26687);

(statearr_26750[(8)] = inst_26688);

return statearr_26750;
})();
var statearr_26751_27456 = state_26730__$1;
(statearr_26751_27456[(2)] = null);

(statearr_26751_27456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26731 === (16))){
var state_26730__$1 = state_26730;
var statearr_26752_27457 = state_26730__$1;
(statearr_26752_27457[(2)] = null);

(statearr_26752_27457[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26731 === (10))){
var inst_26701 = (state_26730[(2)]);
var state_26730__$1 = state_26730;
if(cljs.core.truth_(inst_26701)){
var statearr_26753_27458 = state_26730__$1;
(statearr_26753_27458[(1)] = (11));

} else {
var statearr_26754_27459 = state_26730__$1;
(statearr_26754_27459[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26731 === (18))){
var inst_26720 = (state_26730[(2)]);
var state_26730__$1 = state_26730;
var statearr_26755_27460 = state_26730__$1;
(statearr_26755_27460[(2)] = inst_26720);

(statearr_26755_27460[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26731 === (8))){
var inst_26696 = (state_26730[(13)]);
var state_26730__$1 = state_26730;
var statearr_26756_27461 = state_26730__$1;
(statearr_26756_27461[(2)] = inst_26696);

(statearr_26756_27461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24914__auto__ = null;
var cljs$core$async$state_machine__24914__auto____0 = (function (){
var statearr_26757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26757[(0)] = cljs$core$async$state_machine__24914__auto__);

(statearr_26757[(1)] = (1));

return statearr_26757;
});
var cljs$core$async$state_machine__24914__auto____1 = (function (state_26730){
while(true){
var ret_value__24915__auto__ = (function (){try{while(true){
var result__24916__auto__ = switch__24913__auto__(state_26730);
if(cljs.core.keyword_identical_QMARK_(result__24916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24916__auto__;
}
break;
}
}catch (e26758){var ex__24917__auto__ = e26758;
var statearr_26759_27468 = state_26730;
(statearr_26759_27468[(2)] = ex__24917__auto__);


if(cljs.core.seq((state_26730[(4)]))){
var statearr_26760_27469 = state_26730;
(statearr_26760_27469[(1)] = cljs.core.first((state_26730[(4)])));

} else {
throw ex__24917__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27470 = state_26730;
state_26730 = G__27470;
continue;
} else {
return ret_value__24915__auto__;
}
break;
}
});
cljs$core$async$state_machine__24914__auto__ = function(state_26730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24914__auto____1.call(this,state_26730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24914__auto____0;
cljs$core$async$state_machine__24914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24914__auto____1;
return cljs$core$async$state_machine__24914__auto__;
})()
})();
var state__25097__auto__ = (function (){var statearr_26761 = f__25096__auto__();
(statearr_26761[(6)] = c__25095__auto___27437);

return statearr_26761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25097__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
