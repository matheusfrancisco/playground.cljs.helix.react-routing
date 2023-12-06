goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__25341 = arguments.length;
switch (G__25341) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25342 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25342 = (function (f,blockable,meta25343){
this.f = f;
this.blockable = blockable;
this.meta25343 = meta25343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25344,meta25343__$1){
var self__ = this;
var _25344__$1 = this;
return (new cljs.core.async.t_cljs$core$async25342(self__.f,self__.blockable,meta25343__$1));
}));

(cljs.core.async.t_cljs$core$async25342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25344){
var self__ = this;
var _25344__$1 = this;
return self__.meta25343;
}));

(cljs.core.async.t_cljs$core$async25342.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25342.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25342.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async25342.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async25342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25343","meta25343",1756997592,null)], null);
}));

(cljs.core.async.t_cljs$core$async25342.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25342");

(cljs.core.async.t_cljs$core$async25342.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async25342");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25342.
 */
cljs.core.async.__GT_t_cljs$core$async25342 = (function cljs$core$async$__GT_t_cljs$core$async25342(f__$1,blockable__$1,meta25343){
return (new cljs.core.async.t_cljs$core$async25342(f__$1,blockable__$1,meta25343));
});

}

return (new cljs.core.async.t_cljs$core$async25342(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25347 = arguments.length;
switch (G__25347) {
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
var G__25349 = arguments.length;
switch (G__25349) {
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
var G__25351 = arguments.length;
switch (G__25351) {
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
var val_26781 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_26781) : fn1.call(null,val_26781));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_26781) : fn1.call(null,val_26781));
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
var G__25353 = arguments.length;
switch (G__25353) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25354 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25354 = (function (flag,meta25355){
this.flag = flag;
this.meta25355 = meta25355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25356,meta25355__$1){
var self__ = this;
var _25356__$1 = this;
return (new cljs.core.async.t_cljs$core$async25354(self__.flag,meta25355__$1));
}));

(cljs.core.async.t_cljs$core$async25354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25356){
var self__ = this;
var _25356__$1 = this;
return self__.meta25355;
}));

(cljs.core.async.t_cljs$core$async25354.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25354.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async25354.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25354.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async25354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25355","meta25355",-2026886706,null)], null);
}));

(cljs.core.async.t_cljs$core$async25354.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25354");

(cljs.core.async.t_cljs$core$async25354.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async25354");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25354.
 */
cljs.core.async.__GT_t_cljs$core$async25354 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25354(flag__$1,meta25355){
return (new cljs.core.async.t_cljs$core$async25354(flag__$1,meta25355));
});

}

return (new cljs.core.async.t_cljs$core$async25354(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25357 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25357 = (function (flag,cb,meta25358){
this.flag = flag;
this.cb = cb;
this.meta25358 = meta25358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25359,meta25358__$1){
var self__ = this;
var _25359__$1 = this;
return (new cljs.core.async.t_cljs$core$async25357(self__.flag,self__.cb,meta25358__$1));
}));

(cljs.core.async.t_cljs$core$async25357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25359){
var self__ = this;
var _25359__$1 = this;
return self__.meta25358;
}));

(cljs.core.async.t_cljs$core$async25357.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25357.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async25357.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25357.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async25357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25358","meta25358",-821560979,null)], null);
}));

(cljs.core.async.t_cljs$core$async25357.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25357");

(cljs.core.async.t_cljs$core$async25357.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async25357");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25357.
 */
cljs.core.async.__GT_t_cljs$core$async25357 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25357(flag__$1,cb__$1,meta25358){
return (new cljs.core.async.t_cljs$core$async25357(flag__$1,cb__$1,meta25358));
});

}

return (new cljs.core.async.t_cljs$core$async25357(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25360_SHARP_){
var G__25362 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25360_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25362) : fret.call(null,G__25362));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25361_SHARP_){
var G__25363 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25361_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25363) : fret.call(null,G__25363));
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
var G__26795 = (i + (1));
i = G__26795;
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
var len__5769__auto___26796 = arguments.length;
var i__5770__auto___26797 = (0);
while(true){
if((i__5770__auto___26797 < len__5769__auto___26796)){
args__5775__auto__.push((arguments[i__5770__auto___26797]));

var G__26798 = (i__5770__auto___26797 + (1));
i__5770__auto___26797 = G__26798;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25366){
var map__25367 = p__25366;
var map__25367__$1 = cljs.core.__destructure_map(map__25367);
var opts = map__25367__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25364){
var G__25365 = cljs.core.first(seq25364);
var seq25364__$1 = cljs.core.next(seq25364);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25365,seq25364__$1);
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
var G__25369 = arguments.length;
switch (G__25369) {
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
var c__25273__auto___26802 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25274__auto__ = (function (){var switch__25184__auto__ = (function (state_25393){
var state_val_25394 = (state_25393[(1)]);
if((state_val_25394 === (7))){
var inst_25389 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
var statearr_25395_26803 = state_25393__$1;
(statearr_25395_26803[(2)] = inst_25389);

(statearr_25395_26803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (1))){
var state_25393__$1 = state_25393;
var statearr_25396_26804 = state_25393__$1;
(statearr_25396_26804[(2)] = null);

(statearr_25396_26804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (4))){
var inst_25372 = (state_25393[(7)]);
var inst_25372__$1 = (state_25393[(2)]);
var inst_25373 = (inst_25372__$1 == null);
var state_25393__$1 = (function (){var statearr_25397 = state_25393;
(statearr_25397[(7)] = inst_25372__$1);

return statearr_25397;
})();
if(cljs.core.truth_(inst_25373)){
var statearr_25398_26805 = state_25393__$1;
(statearr_25398_26805[(1)] = (5));

} else {
var statearr_25399_26806 = state_25393__$1;
(statearr_25399_26806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (13))){
var state_25393__$1 = state_25393;
var statearr_25400_26808 = state_25393__$1;
(statearr_25400_26808[(2)] = null);

(statearr_25400_26808[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (6))){
var inst_25372 = (state_25393[(7)]);
var state_25393__$1 = state_25393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25393__$1,(11),to,inst_25372);
} else {
if((state_val_25394 === (3))){
var inst_25391 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25393__$1,inst_25391);
} else {
if((state_val_25394 === (12))){
var state_25393__$1 = state_25393;
var statearr_25401_26810 = state_25393__$1;
(statearr_25401_26810[(2)] = null);

(statearr_25401_26810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (2))){
var state_25393__$1 = state_25393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25393__$1,(4),from);
} else {
if((state_val_25394 === (11))){
var inst_25382 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
if(cljs.core.truth_(inst_25382)){
var statearr_25402_26811 = state_25393__$1;
(statearr_25402_26811[(1)] = (12));

} else {
var statearr_25403_26812 = state_25393__$1;
(statearr_25403_26812[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (9))){
var state_25393__$1 = state_25393;
var statearr_25404_26813 = state_25393__$1;
(statearr_25404_26813[(2)] = null);

(statearr_25404_26813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (5))){
var state_25393__$1 = state_25393;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25405_26814 = state_25393__$1;
(statearr_25405_26814[(1)] = (8));

} else {
var statearr_25406_26815 = state_25393__$1;
(statearr_25406_26815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (14))){
var inst_25387 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
var statearr_25407_26816 = state_25393__$1;
(statearr_25407_26816[(2)] = inst_25387);

(statearr_25407_26816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (10))){
var inst_25379 = (state_25393[(2)]);
var state_25393__$1 = state_25393;
var statearr_25408_26817 = state_25393__$1;
(statearr_25408_26817[(2)] = inst_25379);

(statearr_25408_26817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25394 === (8))){
var inst_25376 = cljs.core.async.close_BANG_(to);
var state_25393__$1 = state_25393;
var statearr_25409_26818 = state_25393__$1;
(statearr_25409_26818[(2)] = inst_25376);

(statearr_25409_26818[(1)] = (10));


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
var cljs$core$async$state_machine__25185__auto__ = null;
var cljs$core$async$state_machine__25185__auto____0 = (function (){
var statearr_25410 = [null,null,null,null,null,null,null,null];
(statearr_25410[(0)] = cljs$core$async$state_machine__25185__auto__);

(statearr_25410[(1)] = (1));

return statearr_25410;
});
var cljs$core$async$state_machine__25185__auto____1 = (function (state_25393){
while(true){
var ret_value__25186__auto__ = (function (){try{while(true){
var result__25187__auto__ = switch__25184__auto__(state_25393);
if(cljs.core.keyword_identical_QMARK_(result__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25187__auto__;
}
break;
}
}catch (e25411){var ex__25188__auto__ = e25411;
var statearr_25412_26821 = state_25393;
(statearr_25412_26821[(2)] = ex__25188__auto__);


if(cljs.core.seq((state_25393[(4)]))){
var statearr_25413_26822 = state_25393;
(statearr_25413_26822[(1)] = cljs.core.first((state_25393[(4)])));

} else {
throw ex__25188__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26823 = state_25393;
state_25393 = G__26823;
continue;
} else {
return ret_value__25186__auto__;
}
break;
}
});
cljs$core$async$state_machine__25185__auto__ = function(state_25393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25185__auto____1.call(this,state_25393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25185__auto____0;
cljs$core$async$state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25185__auto____1;
return cljs$core$async$state_machine__25185__auto__;
})()
})();
var state__25275__auto__ = (function (){var statearr_25414 = f__25274__auto__();
(statearr_25414[(6)] = c__25273__auto___26802);

return statearr_25414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25275__auto__);
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
var process__$1 = (function (p__25415){
var vec__25416 = p__25415;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25416,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25416,(1),null);
var job = vec__25416;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__25273__auto___26824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25274__auto__ = (function (){var switch__25184__auto__ = (function (state_25423){
var state_val_25424 = (state_25423[(1)]);
if((state_val_25424 === (1))){
var state_25423__$1 = state_25423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25423__$1,(2),res,v);
} else {
if((state_val_25424 === (2))){
var inst_25420 = (state_25423[(2)]);
var inst_25421 = cljs.core.async.close_BANG_(res);
var state_25423__$1 = (function (){var statearr_25425 = state_25423;
(statearr_25425[(7)] = inst_25420);

return statearr_25425;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25423__$1,inst_25421);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____0 = (function (){
var statearr_25426 = [null,null,null,null,null,null,null,null];
(statearr_25426[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__);

(statearr_25426[(1)] = (1));

return statearr_25426;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____1 = (function (state_25423){
while(true){
var ret_value__25186__auto__ = (function (){try{while(true){
var result__25187__auto__ = switch__25184__auto__(state_25423);
if(cljs.core.keyword_identical_QMARK_(result__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25187__auto__;
}
break;
}
}catch (e25427){var ex__25188__auto__ = e25427;
var statearr_25428_26834 = state_25423;
(statearr_25428_26834[(2)] = ex__25188__auto__);


if(cljs.core.seq((state_25423[(4)]))){
var statearr_25429_26835 = state_25423;
(statearr_25429_26835[(1)] = cljs.core.first((state_25423[(4)])));

} else {
throw ex__25188__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26836 = state_25423;
state_25423 = G__26836;
continue;
} else {
return ret_value__25186__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__ = function(state_25423){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____1.call(this,state_25423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__;
})()
})();
var state__25275__auto__ = (function (){var statearr_25430 = f__25274__auto__();
(statearr_25430[(6)] = c__25273__auto___26824);

return statearr_25430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25275__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__25431){
var vec__25432 = p__25431;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25432,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25432,(1),null);
var job = vec__25432;
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
var n__5636__auto___26837 = n;
var __26838 = (0);
while(true){
if((__26838 < n__5636__auto___26837)){
var G__25435_26839 = type;
var G__25435_26840__$1 = (((G__25435_26839 instanceof cljs.core.Keyword))?G__25435_26839.fqn:null);
switch (G__25435_26840__$1) {
case "compute":
var c__25273__auto___26842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__26838,c__25273__auto___26842,G__25435_26839,G__25435_26840__$1,n__5636__auto___26837,jobs,results,process__$1,async){
return (function (){
var f__25274__auto__ = (function (){var switch__25184__auto__ = ((function (__26838,c__25273__auto___26842,G__25435_26839,G__25435_26840__$1,n__5636__auto___26837,jobs,results,process__$1,async){
return (function (state_25448){
var state_val_25449 = (state_25448[(1)]);
if((state_val_25449 === (1))){
var state_25448__$1 = state_25448;
var statearr_25450_26843 = state_25448__$1;
(statearr_25450_26843[(2)] = null);

(statearr_25450_26843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (2))){
var state_25448__$1 = state_25448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25448__$1,(4),jobs);
} else {
if((state_val_25449 === (3))){
var inst_25446 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25448__$1,inst_25446);
} else {
if((state_val_25449 === (4))){
var inst_25438 = (state_25448[(2)]);
var inst_25439 = process__$1(inst_25438);
var state_25448__$1 = state_25448;
if(cljs.core.truth_(inst_25439)){
var statearr_25451_26844 = state_25448__$1;
(statearr_25451_26844[(1)] = (5));

} else {
var statearr_25452_26845 = state_25448__$1;
(statearr_25452_26845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (5))){
var state_25448__$1 = state_25448;
var statearr_25453_26846 = state_25448__$1;
(statearr_25453_26846[(2)] = null);

(statearr_25453_26846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (6))){
var state_25448__$1 = state_25448;
var statearr_25454_26848 = state_25448__$1;
(statearr_25454_26848[(2)] = null);

(statearr_25454_26848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (7))){
var inst_25444 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
var statearr_25455_26849 = state_25448__$1;
(statearr_25455_26849[(2)] = inst_25444);

(statearr_25455_26849[(1)] = (3));


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
});})(__26838,c__25273__auto___26842,G__25435_26839,G__25435_26840__$1,n__5636__auto___26837,jobs,results,process__$1,async))
;
return ((function (__26838,switch__25184__auto__,c__25273__auto___26842,G__25435_26839,G__25435_26840__$1,n__5636__auto___26837,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____0 = (function (){
var statearr_25456 = [null,null,null,null,null,null,null];
(statearr_25456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__);

(statearr_25456[(1)] = (1));

return statearr_25456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____1 = (function (state_25448){
while(true){
var ret_value__25186__auto__ = (function (){try{while(true){
var result__25187__auto__ = switch__25184__auto__(state_25448);
if(cljs.core.keyword_identical_QMARK_(result__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25187__auto__;
}
break;
}
}catch (e25457){var ex__25188__auto__ = e25457;
var statearr_25458_26851 = state_25448;
(statearr_25458_26851[(2)] = ex__25188__auto__);


if(cljs.core.seq((state_25448[(4)]))){
var statearr_25459_26852 = state_25448;
(statearr_25459_26852[(1)] = cljs.core.first((state_25448[(4)])));

} else {
throw ex__25188__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26853 = state_25448;
state_25448 = G__26853;
continue;
} else {
return ret_value__25186__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__ = function(state_25448){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____1.call(this,state_25448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__;
})()
;})(__26838,switch__25184__auto__,c__25273__auto___26842,G__25435_26839,G__25435_26840__$1,n__5636__auto___26837,jobs,results,process__$1,async))
})();
var state__25275__auto__ = (function (){var statearr_25460 = f__25274__auto__();
(statearr_25460[(6)] = c__25273__auto___26842);

return statearr_25460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25275__auto__);
});})(__26838,c__25273__auto___26842,G__25435_26839,G__25435_26840__$1,n__5636__auto___26837,jobs,results,process__$1,async))
);


break;
case "async":
var c__25273__auto___26854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__26838,c__25273__auto___26854,G__25435_26839,G__25435_26840__$1,n__5636__auto___26837,jobs,results,process__$1,async){
return (function (){
var f__25274__auto__ = (function (){var switch__25184__auto__ = ((function (__26838,c__25273__auto___26854,G__25435_26839,G__25435_26840__$1,n__5636__auto___26837,jobs,results,process__$1,async){
return (function (state_25473){
var state_val_25474 = (state_25473[(1)]);
if((state_val_25474 === (1))){
var state_25473__$1 = state_25473;
var statearr_25475_26855 = state_25473__$1;
(statearr_25475_26855[(2)] = null);

(statearr_25475_26855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (2))){
var state_25473__$1 = state_25473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25473__$1,(4),jobs);
} else {
if((state_val_25474 === (3))){
var inst_25471 = (state_25473[(2)]);
var state_25473__$1 = state_25473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25473__$1,inst_25471);
} else {
if((state_val_25474 === (4))){
var inst_25463 = (state_25473[(2)]);
var inst_25464 = async(inst_25463);
var state_25473__$1 = state_25473;
if(cljs.core.truth_(inst_25464)){
var statearr_25476_26856 = state_25473__$1;
(statearr_25476_26856[(1)] = (5));

} else {
var statearr_25477_26857 = state_25473__$1;
(statearr_25477_26857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (5))){
var state_25473__$1 = state_25473;
var statearr_25478_26858 = state_25473__$1;
(statearr_25478_26858[(2)] = null);

(statearr_25478_26858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (6))){
var state_25473__$1 = state_25473;
var statearr_25479_26859 = state_25473__$1;
(statearr_25479_26859[(2)] = null);

(statearr_25479_26859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25474 === (7))){
var inst_25469 = (state_25473[(2)]);
var state_25473__$1 = state_25473;
var statearr_25480_26860 = state_25473__$1;
(statearr_25480_26860[(2)] = inst_25469);

(statearr_25480_26860[(1)] = (3));


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
});})(__26838,c__25273__auto___26854,G__25435_26839,G__25435_26840__$1,n__5636__auto___26837,jobs,results,process__$1,async))
;
return ((function (__26838,switch__25184__auto__,c__25273__auto___26854,G__25435_26839,G__25435_26840__$1,n__5636__auto___26837,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____0 = (function (){
var statearr_25481 = [null,null,null,null,null,null,null];
(statearr_25481[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__);

(statearr_25481[(1)] = (1));

return statearr_25481;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____1 = (function (state_25473){
while(true){
var ret_value__25186__auto__ = (function (){try{while(true){
var result__25187__auto__ = switch__25184__auto__(state_25473);
if(cljs.core.keyword_identical_QMARK_(result__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25187__auto__;
}
break;
}
}catch (e25482){var ex__25188__auto__ = e25482;
var statearr_25483_26865 = state_25473;
(statearr_25483_26865[(2)] = ex__25188__auto__);


if(cljs.core.seq((state_25473[(4)]))){
var statearr_25484_26866 = state_25473;
(statearr_25484_26866[(1)] = cljs.core.first((state_25473[(4)])));

} else {
throw ex__25188__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26870 = state_25473;
state_25473 = G__26870;
continue;
} else {
return ret_value__25186__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__ = function(state_25473){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____1.call(this,state_25473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__;
})()
;})(__26838,switch__25184__auto__,c__25273__auto___26854,G__25435_26839,G__25435_26840__$1,n__5636__auto___26837,jobs,results,process__$1,async))
})();
var state__25275__auto__ = (function (){var statearr_25485 = f__25274__auto__();
(statearr_25485[(6)] = c__25273__auto___26854);

return statearr_25485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25275__auto__);
});})(__26838,c__25273__auto___26854,G__25435_26839,G__25435_26840__$1,n__5636__auto___26837,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25435_26840__$1)].join('')));

}

var G__26871 = (__26838 + (1));
__26838 = G__26871;
continue;
} else {
}
break;
}

var c__25273__auto___26872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25274__auto__ = (function (){var switch__25184__auto__ = (function (state_25507){
var state_val_25508 = (state_25507[(1)]);
if((state_val_25508 === (7))){
var inst_25503 = (state_25507[(2)]);
var state_25507__$1 = state_25507;
var statearr_25509_26873 = state_25507__$1;
(statearr_25509_26873[(2)] = inst_25503);

(statearr_25509_26873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25508 === (1))){
var state_25507__$1 = state_25507;
var statearr_25510_26874 = state_25507__$1;
(statearr_25510_26874[(2)] = null);

(statearr_25510_26874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25508 === (4))){
var inst_25488 = (state_25507[(7)]);
var inst_25488__$1 = (state_25507[(2)]);
var inst_25489 = (inst_25488__$1 == null);
var state_25507__$1 = (function (){var statearr_25511 = state_25507;
(statearr_25511[(7)] = inst_25488__$1);

return statearr_25511;
})();
if(cljs.core.truth_(inst_25489)){
var statearr_25512_26878 = state_25507__$1;
(statearr_25512_26878[(1)] = (5));

} else {
var statearr_25513_26879 = state_25507__$1;
(statearr_25513_26879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25508 === (6))){
var inst_25493 = (state_25507[(8)]);
var inst_25488 = (state_25507[(7)]);
var inst_25493__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_25494 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25495 = [inst_25488,inst_25493__$1];
var inst_25496 = (new cljs.core.PersistentVector(null,2,(5),inst_25494,inst_25495,null));
var state_25507__$1 = (function (){var statearr_25514 = state_25507;
(statearr_25514[(8)] = inst_25493__$1);

return statearr_25514;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25507__$1,(8),jobs,inst_25496);
} else {
if((state_val_25508 === (3))){
var inst_25505 = (state_25507[(2)]);
var state_25507__$1 = state_25507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25507__$1,inst_25505);
} else {
if((state_val_25508 === (2))){
var state_25507__$1 = state_25507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25507__$1,(4),from);
} else {
if((state_val_25508 === (9))){
var inst_25500 = (state_25507[(2)]);
var state_25507__$1 = (function (){var statearr_25515 = state_25507;
(statearr_25515[(9)] = inst_25500);

return statearr_25515;
})();
var statearr_25516_26883 = state_25507__$1;
(statearr_25516_26883[(2)] = null);

(statearr_25516_26883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25508 === (5))){
var inst_25491 = cljs.core.async.close_BANG_(jobs);
var state_25507__$1 = state_25507;
var statearr_25517_26884 = state_25507__$1;
(statearr_25517_26884[(2)] = inst_25491);

(statearr_25517_26884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25508 === (8))){
var inst_25493 = (state_25507[(8)]);
var inst_25498 = (state_25507[(2)]);
var state_25507__$1 = (function (){var statearr_25518 = state_25507;
(statearr_25518[(10)] = inst_25498);

return statearr_25518;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25507__$1,(9),results,inst_25493);
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
var cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____0 = (function (){
var statearr_25519 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25519[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__);

(statearr_25519[(1)] = (1));

return statearr_25519;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____1 = (function (state_25507){
while(true){
var ret_value__25186__auto__ = (function (){try{while(true){
var result__25187__auto__ = switch__25184__auto__(state_25507);
if(cljs.core.keyword_identical_QMARK_(result__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25187__auto__;
}
break;
}
}catch (e25520){var ex__25188__auto__ = e25520;
var statearr_25521_26888 = state_25507;
(statearr_25521_26888[(2)] = ex__25188__auto__);


if(cljs.core.seq((state_25507[(4)]))){
var statearr_25522_26889 = state_25507;
(statearr_25522_26889[(1)] = cljs.core.first((state_25507[(4)])));

} else {
throw ex__25188__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26890 = state_25507;
state_25507 = G__26890;
continue;
} else {
return ret_value__25186__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__ = function(state_25507){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____1.call(this,state_25507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__;
})()
})();
var state__25275__auto__ = (function (){var statearr_25523 = f__25274__auto__();
(statearr_25523[(6)] = c__25273__auto___26872);

return statearr_25523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25275__auto__);
}));


var c__25273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25274__auto__ = (function (){var switch__25184__auto__ = (function (state_25561){
var state_val_25562 = (state_25561[(1)]);
if((state_val_25562 === (7))){
var inst_25557 = (state_25561[(2)]);
var state_25561__$1 = state_25561;
var statearr_25563_26908 = state_25561__$1;
(statearr_25563_26908[(2)] = inst_25557);

(statearr_25563_26908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (20))){
var state_25561__$1 = state_25561;
var statearr_25564_26909 = state_25561__$1;
(statearr_25564_26909[(2)] = null);

(statearr_25564_26909[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (1))){
var state_25561__$1 = state_25561;
var statearr_25565_26910 = state_25561__$1;
(statearr_25565_26910[(2)] = null);

(statearr_25565_26910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (4))){
var inst_25526 = (state_25561[(7)]);
var inst_25526__$1 = (state_25561[(2)]);
var inst_25527 = (inst_25526__$1 == null);
var state_25561__$1 = (function (){var statearr_25566 = state_25561;
(statearr_25566[(7)] = inst_25526__$1);

return statearr_25566;
})();
if(cljs.core.truth_(inst_25527)){
var statearr_25567_26911 = state_25561__$1;
(statearr_25567_26911[(1)] = (5));

} else {
var statearr_25568_26912 = state_25561__$1;
(statearr_25568_26912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (15))){
var inst_25539 = (state_25561[(8)]);
var state_25561__$1 = state_25561;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25561__$1,(18),to,inst_25539);
} else {
if((state_val_25562 === (21))){
var inst_25552 = (state_25561[(2)]);
var state_25561__$1 = state_25561;
var statearr_25569_26914 = state_25561__$1;
(statearr_25569_26914[(2)] = inst_25552);

(statearr_25569_26914[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (13))){
var inst_25554 = (state_25561[(2)]);
var state_25561__$1 = (function (){var statearr_25570 = state_25561;
(statearr_25570[(9)] = inst_25554);

return statearr_25570;
})();
var statearr_25571_26916 = state_25561__$1;
(statearr_25571_26916[(2)] = null);

(statearr_25571_26916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (6))){
var inst_25526 = (state_25561[(7)]);
var state_25561__$1 = state_25561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25561__$1,(11),inst_25526);
} else {
if((state_val_25562 === (17))){
var inst_25547 = (state_25561[(2)]);
var state_25561__$1 = state_25561;
if(cljs.core.truth_(inst_25547)){
var statearr_25572_26920 = state_25561__$1;
(statearr_25572_26920[(1)] = (19));

} else {
var statearr_25573_26921 = state_25561__$1;
(statearr_25573_26921[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (3))){
var inst_25559 = (state_25561[(2)]);
var state_25561__$1 = state_25561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25561__$1,inst_25559);
} else {
if((state_val_25562 === (12))){
var inst_25536 = (state_25561[(10)]);
var state_25561__$1 = state_25561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25561__$1,(14),inst_25536);
} else {
if((state_val_25562 === (2))){
var state_25561__$1 = state_25561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25561__$1,(4),results);
} else {
if((state_val_25562 === (19))){
var state_25561__$1 = state_25561;
var statearr_25574_26923 = state_25561__$1;
(statearr_25574_26923[(2)] = null);

(statearr_25574_26923[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (11))){
var inst_25536 = (state_25561[(2)]);
var state_25561__$1 = (function (){var statearr_25575 = state_25561;
(statearr_25575[(10)] = inst_25536);

return statearr_25575;
})();
var statearr_25576_26924 = state_25561__$1;
(statearr_25576_26924[(2)] = null);

(statearr_25576_26924[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (9))){
var state_25561__$1 = state_25561;
var statearr_25577_26926 = state_25561__$1;
(statearr_25577_26926[(2)] = null);

(statearr_25577_26926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (5))){
var state_25561__$1 = state_25561;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25578_26927 = state_25561__$1;
(statearr_25578_26927[(1)] = (8));

} else {
var statearr_25579_26929 = state_25561__$1;
(statearr_25579_26929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (14))){
var inst_25539 = (state_25561[(8)]);
var inst_25541 = (state_25561[(11)]);
var inst_25539__$1 = (state_25561[(2)]);
var inst_25540 = (inst_25539__$1 == null);
var inst_25541__$1 = cljs.core.not(inst_25540);
var state_25561__$1 = (function (){var statearr_25580 = state_25561;
(statearr_25580[(8)] = inst_25539__$1);

(statearr_25580[(11)] = inst_25541__$1);

return statearr_25580;
})();
if(inst_25541__$1){
var statearr_25581_26930 = state_25561__$1;
(statearr_25581_26930[(1)] = (15));

} else {
var statearr_25582_26931 = state_25561__$1;
(statearr_25582_26931[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (16))){
var inst_25541 = (state_25561[(11)]);
var state_25561__$1 = state_25561;
var statearr_25583_26932 = state_25561__$1;
(statearr_25583_26932[(2)] = inst_25541);

(statearr_25583_26932[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (10))){
var inst_25533 = (state_25561[(2)]);
var state_25561__$1 = state_25561;
var statearr_25584_26933 = state_25561__$1;
(statearr_25584_26933[(2)] = inst_25533);

(statearr_25584_26933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (18))){
var inst_25544 = (state_25561[(2)]);
var state_25561__$1 = state_25561;
var statearr_25585_26934 = state_25561__$1;
(statearr_25585_26934[(2)] = inst_25544);

(statearr_25585_26934[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (8))){
var inst_25530 = cljs.core.async.close_BANG_(to);
var state_25561__$1 = state_25561;
var statearr_25586_26935 = state_25561__$1;
(statearr_25586_26935[(2)] = inst_25530);

(statearr_25586_26935[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____0 = (function (){
var statearr_25587 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25587[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__);

(statearr_25587[(1)] = (1));

return statearr_25587;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____1 = (function (state_25561){
while(true){
var ret_value__25186__auto__ = (function (){try{while(true){
var result__25187__auto__ = switch__25184__auto__(state_25561);
if(cljs.core.keyword_identical_QMARK_(result__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25187__auto__;
}
break;
}
}catch (e25588){var ex__25188__auto__ = e25588;
var statearr_25589_26936 = state_25561;
(statearr_25589_26936[(2)] = ex__25188__auto__);


if(cljs.core.seq((state_25561[(4)]))){
var statearr_25590_26937 = state_25561;
(statearr_25590_26937[(1)] = cljs.core.first((state_25561[(4)])));

} else {
throw ex__25188__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26938 = state_25561;
state_25561 = G__26938;
continue;
} else {
return ret_value__25186__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__ = function(state_25561){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____1.call(this,state_25561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25185__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25185__auto__;
})()
})();
var state__25275__auto__ = (function (){var statearr_25591 = f__25274__auto__();
(statearr_25591[(6)] = c__25273__auto__);

return statearr_25591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25275__auto__);
}));

return c__25273__auto__;
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
var G__25593 = arguments.length;
switch (G__25593) {
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
var G__25595 = arguments.length;
switch (G__25595) {
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
var G__25597 = arguments.length;
switch (G__25597) {
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
var c__25273__auto___26957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25274__auto__ = (function (){var switch__25184__auto__ = (function (state_25623){
var state_val_25624 = (state_25623[(1)]);
if((state_val_25624 === (7))){
var inst_25619 = (state_25623[(2)]);
var state_25623__$1 = state_25623;
var statearr_25625_26964 = state_25623__$1;
(statearr_25625_26964[(2)] = inst_25619);

(statearr_25625_26964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (1))){
var state_25623__$1 = state_25623;
var statearr_25626_26965 = state_25623__$1;
(statearr_25626_26965[(2)] = null);

(statearr_25626_26965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (4))){
var inst_25600 = (state_25623[(7)]);
var inst_25600__$1 = (state_25623[(2)]);
var inst_25601 = (inst_25600__$1 == null);
var state_25623__$1 = (function (){var statearr_25627 = state_25623;
(statearr_25627[(7)] = inst_25600__$1);

return statearr_25627;
})();
if(cljs.core.truth_(inst_25601)){
var statearr_25628_26966 = state_25623__$1;
(statearr_25628_26966[(1)] = (5));

} else {
var statearr_25629_26967 = state_25623__$1;
(statearr_25629_26967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (13))){
var state_25623__$1 = state_25623;
var statearr_25630_26968 = state_25623__$1;
(statearr_25630_26968[(2)] = null);

(statearr_25630_26968[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (6))){
var inst_25600 = (state_25623[(7)]);
var inst_25606 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_25600) : p.call(null,inst_25600));
var state_25623__$1 = state_25623;
if(cljs.core.truth_(inst_25606)){
var statearr_25631_26969 = state_25623__$1;
(statearr_25631_26969[(1)] = (9));

} else {
var statearr_25632_26970 = state_25623__$1;
(statearr_25632_26970[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (3))){
var inst_25621 = (state_25623[(2)]);
var state_25623__$1 = state_25623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25623__$1,inst_25621);
} else {
if((state_val_25624 === (12))){
var state_25623__$1 = state_25623;
var statearr_25633_26971 = state_25623__$1;
(statearr_25633_26971[(2)] = null);

(statearr_25633_26971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (2))){
var state_25623__$1 = state_25623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25623__$1,(4),ch);
} else {
if((state_val_25624 === (11))){
var inst_25600 = (state_25623[(7)]);
var inst_25610 = (state_25623[(2)]);
var state_25623__$1 = state_25623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25623__$1,(8),inst_25610,inst_25600);
} else {
if((state_val_25624 === (9))){
var state_25623__$1 = state_25623;
var statearr_25634_26972 = state_25623__$1;
(statearr_25634_26972[(2)] = tc);

(statearr_25634_26972[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (5))){
var inst_25603 = cljs.core.async.close_BANG_(tc);
var inst_25604 = cljs.core.async.close_BANG_(fc);
var state_25623__$1 = (function (){var statearr_25635 = state_25623;
(statearr_25635[(8)] = inst_25603);

return statearr_25635;
})();
var statearr_25636_26973 = state_25623__$1;
(statearr_25636_26973[(2)] = inst_25604);

(statearr_25636_26973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (14))){
var inst_25617 = (state_25623[(2)]);
var state_25623__$1 = state_25623;
var statearr_25637_26974 = state_25623__$1;
(statearr_25637_26974[(2)] = inst_25617);

(statearr_25637_26974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (10))){
var state_25623__$1 = state_25623;
var statearr_25638_26981 = state_25623__$1;
(statearr_25638_26981[(2)] = fc);

(statearr_25638_26981[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25624 === (8))){
var inst_25612 = (state_25623[(2)]);
var state_25623__$1 = state_25623;
if(cljs.core.truth_(inst_25612)){
var statearr_25639_26982 = state_25623__$1;
(statearr_25639_26982[(1)] = (12));

} else {
var statearr_25640_26983 = state_25623__$1;
(statearr_25640_26983[(1)] = (13));

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
var cljs$core$async$state_machine__25185__auto__ = null;
var cljs$core$async$state_machine__25185__auto____0 = (function (){
var statearr_25641 = [null,null,null,null,null,null,null,null,null];
(statearr_25641[(0)] = cljs$core$async$state_machine__25185__auto__);

(statearr_25641[(1)] = (1));

return statearr_25641;
});
var cljs$core$async$state_machine__25185__auto____1 = (function (state_25623){
while(true){
var ret_value__25186__auto__ = (function (){try{while(true){
var result__25187__auto__ = switch__25184__auto__(state_25623);
if(cljs.core.keyword_identical_QMARK_(result__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25187__auto__;
}
break;
}
}catch (e25642){var ex__25188__auto__ = e25642;
var statearr_25643_26984 = state_25623;
(statearr_25643_26984[(2)] = ex__25188__auto__);


if(cljs.core.seq((state_25623[(4)]))){
var statearr_25644_26985 = state_25623;
(statearr_25644_26985[(1)] = cljs.core.first((state_25623[(4)])));

} else {
throw ex__25188__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26986 = state_25623;
state_25623 = G__26986;
continue;
} else {
return ret_value__25186__auto__;
}
break;
}
});
cljs$core$async$state_machine__25185__auto__ = function(state_25623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25185__auto____1.call(this,state_25623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25185__auto____0;
cljs$core$async$state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25185__auto____1;
return cljs$core$async$state_machine__25185__auto__;
})()
})();
var state__25275__auto__ = (function (){var statearr_25645 = f__25274__auto__();
(statearr_25645[(6)] = c__25273__auto___26957);

return statearr_25645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25275__auto__);
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
var c__25273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25274__auto__ = (function (){var switch__25184__auto__ = (function (state_25667){
var state_val_25668 = (state_25667[(1)]);
if((state_val_25668 === (7))){
var inst_25663 = (state_25667[(2)]);
var state_25667__$1 = state_25667;
var statearr_25669_26993 = state_25667__$1;
(statearr_25669_26993[(2)] = inst_25663);

(statearr_25669_26993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (1))){
var inst_25646 = init;
var inst_25647 = inst_25646;
var state_25667__$1 = (function (){var statearr_25670 = state_25667;
(statearr_25670[(7)] = inst_25647);

return statearr_25670;
})();
var statearr_25671_26994 = state_25667__$1;
(statearr_25671_26994[(2)] = null);

(statearr_25671_26994[(1)] = (2));


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
var statearr_25673_26995 = state_25667__$1;
(statearr_25673_26995[(1)] = (5));

} else {
var statearr_25674_26996 = state_25667__$1;
(statearr_25674_26996[(1)] = (6));

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
var statearr_25676_26997 = state_25667__$1;
(statearr_25676_26997[(1)] = (8));

} else {
var statearr_25677_26998 = state_25667__$1;
(statearr_25677_26998[(1)] = (9));

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
var statearr_25679_26999 = state_25667__$1;
(statearr_25679_26999[(2)] = null);

(statearr_25679_26999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (5))){
var inst_25647 = (state_25667[(7)]);
var state_25667__$1 = state_25667;
var statearr_25680_27000 = state_25667__$1;
(statearr_25680_27000[(2)] = inst_25647);

(statearr_25680_27000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (10))){
var inst_25661 = (state_25667[(2)]);
var state_25667__$1 = state_25667;
var statearr_25681_27001 = state_25667__$1;
(statearr_25681_27001[(2)] = inst_25661);

(statearr_25681_27001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (8))){
var inst_25654 = (state_25667[(9)]);
var inst_25657 = cljs.core.deref(inst_25654);
var state_25667__$1 = state_25667;
var statearr_25682_27002 = state_25667__$1;
(statearr_25682_27002[(2)] = inst_25657);

(statearr_25682_27002[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__25185__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25185__auto____0 = (function (){
var statearr_25683 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25683[(0)] = cljs$core$async$reduce_$_state_machine__25185__auto__);

(statearr_25683[(1)] = (1));

return statearr_25683;
});
var cljs$core$async$reduce_$_state_machine__25185__auto____1 = (function (state_25667){
while(true){
var ret_value__25186__auto__ = (function (){try{while(true){
var result__25187__auto__ = switch__25184__auto__(state_25667);
if(cljs.core.keyword_identical_QMARK_(result__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25187__auto__;
}
break;
}
}catch (e25684){var ex__25188__auto__ = e25684;
var statearr_25685_27003 = state_25667;
(statearr_25685_27003[(2)] = ex__25188__auto__);


if(cljs.core.seq((state_25667[(4)]))){
var statearr_25686_27004 = state_25667;
(statearr_25686_27004[(1)] = cljs.core.first((state_25667[(4)])));

} else {
throw ex__25188__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27005 = state_25667;
state_25667 = G__27005;
continue;
} else {
return ret_value__25186__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25185__auto__ = function(state_25667){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25185__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25185__auto____1.call(this,state_25667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25185__auto____0;
cljs$core$async$reduce_$_state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25185__auto____1;
return cljs$core$async$reduce_$_state_machine__25185__auto__;
})()
})();
var state__25275__auto__ = (function (){var statearr_25687 = f__25274__auto__();
(statearr_25687[(6)] = c__25273__auto__);

return statearr_25687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25275__auto__);
}));

return c__25273__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__25273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25274__auto__ = (function (){var switch__25184__auto__ = (function (state_25693){
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
var cljs$core$async$transduce_$_state_machine__25185__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25185__auto____0 = (function (){
var statearr_25695 = [null,null,null,null,null,null,null];
(statearr_25695[(0)] = cljs$core$async$transduce_$_state_machine__25185__auto__);

(statearr_25695[(1)] = (1));

return statearr_25695;
});
var cljs$core$async$transduce_$_state_machine__25185__auto____1 = (function (state_25693){
while(true){
var ret_value__25186__auto__ = (function (){try{while(true){
var result__25187__auto__ = switch__25184__auto__(state_25693);
if(cljs.core.keyword_identical_QMARK_(result__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25187__auto__;
}
break;
}
}catch (e25696){var ex__25188__auto__ = e25696;
var statearr_25697_27012 = state_25693;
(statearr_25697_27012[(2)] = ex__25188__auto__);


if(cljs.core.seq((state_25693[(4)]))){
var statearr_25698_27013 = state_25693;
(statearr_25698_27013[(1)] = cljs.core.first((state_25693[(4)])));

} else {
throw ex__25188__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27014 = state_25693;
state_25693 = G__27014;
continue;
} else {
return ret_value__25186__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25185__auto__ = function(state_25693){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25185__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25185__auto____1.call(this,state_25693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25185__auto____0;
cljs$core$async$transduce_$_state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25185__auto____1;
return cljs$core$async$transduce_$_state_machine__25185__auto__;
})()
})();
var state__25275__auto__ = (function (){var statearr_25699 = f__25274__auto__();
(statearr_25699[(6)] = c__25273__auto__);

return statearr_25699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25275__auto__);
}));

return c__25273__auto__;
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
var c__25273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25274__auto__ = (function (){var switch__25184__auto__ = (function (state_25726){
var state_val_25727 = (state_25726[(1)]);
if((state_val_25727 === (7))){
var inst_25708 = (state_25726[(2)]);
var state_25726__$1 = state_25726;
var statearr_25728_27016 = state_25726__$1;
(statearr_25728_27016[(2)] = inst_25708);

(statearr_25728_27016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25727 === (1))){
var inst_25702 = cljs.core.seq(coll);
var inst_25703 = inst_25702;
var state_25726__$1 = (function (){var statearr_25729 = state_25726;
(statearr_25729[(7)] = inst_25703);

return statearr_25729;
})();
var statearr_25730_27017 = state_25726__$1;
(statearr_25730_27017[(2)] = null);

(statearr_25730_27017[(1)] = (2));


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
var statearr_25731_27018 = state_25726__$1;
(statearr_25731_27018[(2)] = inst_25720);

(statearr_25731_27018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25727 === (6))){
var inst_25711 = (state_25726[(2)]);
var state_25726__$1 = state_25726;
if(cljs.core.truth_(inst_25711)){
var statearr_25732_27019 = state_25726__$1;
(statearr_25732_27019[(1)] = (8));

} else {
var statearr_25733_27020 = state_25726__$1;
(statearr_25733_27020[(1)] = (9));

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
var statearr_25734_27021 = state_25726__$1;
(statearr_25734_27021[(2)] = null);

(statearr_25734_27021[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25727 === (2))){
var inst_25703 = (state_25726[(7)]);
var state_25726__$1 = state_25726;
if(cljs.core.truth_(inst_25703)){
var statearr_25735_27022 = state_25726__$1;
(statearr_25735_27022[(1)] = (4));

} else {
var statearr_25736_27023 = state_25726__$1;
(statearr_25736_27023[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25727 === (11))){
var inst_25717 = cljs.core.async.close_BANG_(ch);
var state_25726__$1 = state_25726;
var statearr_25737_27024 = state_25726__$1;
(statearr_25737_27024[(2)] = inst_25717);

(statearr_25737_27024[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25727 === (9))){
var state_25726__$1 = state_25726;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25738_27025 = state_25726__$1;
(statearr_25738_27025[(1)] = (11));

} else {
var statearr_25739_27026 = state_25726__$1;
(statearr_25739_27026[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25727 === (5))){
var inst_25703 = (state_25726[(7)]);
var state_25726__$1 = state_25726;
var statearr_25740_27027 = state_25726__$1;
(statearr_25740_27027[(2)] = inst_25703);

(statearr_25740_27027[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25727 === (10))){
var inst_25722 = (state_25726[(2)]);
var state_25726__$1 = state_25726;
var statearr_25741_27029 = state_25726__$1;
(statearr_25741_27029[(2)] = inst_25722);

(statearr_25741_27029[(1)] = (3));


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
var statearr_25743_27030 = state_25726__$1;
(statearr_25743_27030[(2)] = null);

(statearr_25743_27030[(1)] = (2));


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
var cljs$core$async$state_machine__25185__auto__ = null;
var cljs$core$async$state_machine__25185__auto____0 = (function (){
var statearr_25744 = [null,null,null,null,null,null,null,null];
(statearr_25744[(0)] = cljs$core$async$state_machine__25185__auto__);

(statearr_25744[(1)] = (1));

return statearr_25744;
});
var cljs$core$async$state_machine__25185__auto____1 = (function (state_25726){
while(true){
var ret_value__25186__auto__ = (function (){try{while(true){
var result__25187__auto__ = switch__25184__auto__(state_25726);
if(cljs.core.keyword_identical_QMARK_(result__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25187__auto__;
}
break;
}
}catch (e25745){var ex__25188__auto__ = e25745;
var statearr_25746_27035 = state_25726;
(statearr_25746_27035[(2)] = ex__25188__auto__);


if(cljs.core.seq((state_25726[(4)]))){
var statearr_25747_27036 = state_25726;
(statearr_25747_27036[(1)] = cljs.core.first((state_25726[(4)])));

} else {
throw ex__25188__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27037 = state_25726;
state_25726 = G__27037;
continue;
} else {
return ret_value__25186__auto__;
}
break;
}
});
cljs$core$async$state_machine__25185__auto__ = function(state_25726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25185__auto____1.call(this,state_25726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25185__auto____0;
cljs$core$async$state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25185__auto____1;
return cljs$core$async$state_machine__25185__auto__;
})()
})();
var state__25275__auto__ = (function (){var statearr_25748 = f__25274__auto__();
(statearr_25748[(6)] = c__25273__auto__);

return statearr_25748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25275__auto__);
}));

return c__25273__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_27039 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_27039(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_27040 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_27040(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_27041 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_27041(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_27042 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_27042(m);
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
var c__25273__auto___27045 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25274__auto__ = (function (){var switch__25184__auto__ = (function (state_25886){
var state_val_25887 = (state_25886[(1)]);
if((state_val_25887 === (7))){
var inst_25882 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
var statearr_25888_27046 = state_25886__$1;
(statearr_25888_27046[(2)] = inst_25882);

(statearr_25888_27046[(1)] = (3));


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
var statearr_25890_27047 = state_25886__$1;
(statearr_25890_27047[(1)] = (22));

} else {
var statearr_25891_27049 = state_25886__$1;
(statearr_25891_27049[(1)] = (23));

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
var statearr_25893_27051 = state_25886__$1;
(statearr_25893_27051[(1)] = (30));

} else {
var statearr_25894_27052 = state_25886__$1;
(statearr_25894_27052[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (1))){
var state_25886__$1 = state_25886;
var statearr_25895_27053 = state_25886__$1;
(statearr_25895_27053[(2)] = null);

(statearr_25895_27053[(1)] = (2));


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
var statearr_25897_27054 = state_25886__$1;
(statearr_25897_27054[(2)] = null);

(statearr_25897_27054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (39))){
var state_25886__$1 = state_25886;
var statearr_25901_27055 = state_25886__$1;
(statearr_25901_27055[(2)] = null);

(statearr_25901_27055[(1)] = (41));


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
var statearr_25903_27056 = state_25886__$1;
(statearr_25903_27056[(1)] = (5));

} else {
var statearr_25904_27057 = state_25886__$1;
(statearr_25904_27057[(1)] = (6));

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
var statearr_25906_27058 = state_25886__$1;
(statearr_25906_27058[(2)] = null);

(statearr_25906_27058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (21))){
var inst_25810 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
var statearr_25910_27059 = state_25886__$1;
(statearr_25910_27059[(2)] = inst_25810);

(statearr_25910_27059[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (31))){
var inst_25836 = (state_25886[(10)]);
var inst_25840 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25836);
var state_25886__$1 = state_25886;
var statearr_25911_27060 = state_25886__$1;
(statearr_25911_27060[(2)] = inst_25840);

(statearr_25911_27060[(1)] = (32));


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
var statearr_25913_27061 = state_25886__$1;
(statearr_25913_27061[(2)] = null);

(statearr_25913_27061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (40))){
var inst_25855 = (state_25886[(22)]);
var inst_25859 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25855);
var state_25886__$1 = state_25886;
var statearr_25914_27062 = state_25886__$1;
(statearr_25914_27062[(2)] = inst_25859);

(statearr_25914_27062[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (33))){
var inst_25846 = (state_25886[(23)]);
var inst_25848 = cljs.core.chunked_seq_QMARK_(inst_25846);
var state_25886__$1 = state_25886;
if(inst_25848){
var statearr_25915_27063 = state_25886__$1;
(statearr_25915_27063[(1)] = (36));

} else {
var statearr_25916_27064 = state_25886__$1;
(statearr_25916_27064[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (13))){
var inst_25777 = (state_25886[(24)]);
var inst_25780 = cljs.core.async.close_BANG_(inst_25777);
var state_25886__$1 = state_25886;
var statearr_25917_27067 = state_25886__$1;
(statearr_25917_27067[(2)] = inst_25780);

(statearr_25917_27067[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (22))){
var inst_25800 = (state_25886[(8)]);
var inst_25803 = cljs.core.async.close_BANG_(inst_25800);
var state_25886__$1 = state_25886;
var statearr_25918_27068 = state_25886__$1;
(statearr_25918_27068[(2)] = inst_25803);

(statearr_25918_27068[(1)] = (24));


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
var statearr_25920_27069 = state_25886__$1;
(statearr_25920_27069[(2)] = null);

(statearr_25920_27069[(1)] = (25));


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
var statearr_25922_27070 = state_25886__$1;
(statearr_25922_27070[(2)] = null);

(statearr_25922_27070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (43))){
var state_25886__$1 = state_25886;
var statearr_25923_27071 = state_25886__$1;
(statearr_25923_27071[(2)] = null);

(statearr_25923_27071[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (29))){
var inst_25870 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
var statearr_25924_27072 = state_25886__$1;
(statearr_25924_27072[(2)] = inst_25870);

(statearr_25924_27072[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (44))){
var inst_25879 = (state_25886[(2)]);
var state_25886__$1 = (function (){var statearr_25925 = state_25886;
(statearr_25925[(26)] = inst_25879);

return statearr_25925;
})();
var statearr_25926_27073 = state_25886__$1;
(statearr_25926_27073[(2)] = null);

(statearr_25926_27073[(1)] = (2));


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
var statearr_25928_27074 = state_25886__$1;
(statearr_25928_27074[(2)] = null);

(statearr_25928_27074[(1)] = (25));


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
var statearr_25930_27075 = state_25886__$1;
(statearr_25930_27075[(1)] = (33));

} else {
var statearr_25931_27076 = state_25886__$1;
(statearr_25931_27076[(1)] = (34));

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
var statearr_25932_27077 = state_25886__$1;
(statearr_25932_27077[(1)] = (27));

} else {
var statearr_25933_27078 = state_25886__$1;
(statearr_25933_27078[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (34))){
var state_25886__$1 = state_25886;
var statearr_25934_27079 = state_25886__$1;
(statearr_25934_27079[(2)] = null);

(statearr_25934_27079[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (17))){
var state_25886__$1 = state_25886;
var statearr_25935_27080 = state_25886__$1;
(statearr_25935_27080[(2)] = null);

(statearr_25935_27080[(1)] = (18));


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
var statearr_25936_27081 = state_25886__$1;
(statearr_25936_27081[(2)] = inst_25815);

(statearr_25936_27081[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (2))){
var state_25886__$1 = state_25886;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25886__$1,(4),ch);
} else {
if((state_val_25887 === (23))){
var state_25886__$1 = state_25886;
var statearr_25937_27082 = state_25886__$1;
(statearr_25937_27082[(2)] = null);

(statearr_25937_27082[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (35))){
var inst_25868 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
var statearr_25938_27083 = state_25886__$1;
(statearr_25938_27083[(2)] = inst_25868);

(statearr_25938_27083[(1)] = (29));


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
var statearr_25940_27085 = state_25886__$1;
(statearr_25940_27085[(2)] = null);

(statearr_25940_27085[(1)] = (8));


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
var statearr_25942_27086 = state_25886__$1;
(statearr_25942_27086[(1)] = (16));

} else {
var statearr_25943_27087 = state_25886__$1;
(statearr_25943_27087[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (9))){
var inst_25817 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
var statearr_25944_27088 = state_25886__$1;
(statearr_25944_27088[(2)] = inst_25817);

(statearr_25944_27088[(1)] = (7));


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
var statearr_25946_27089 = state_25886__$1;
(statearr_25946_27089[(2)] = null);

(statearr_25946_27089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (14))){
var state_25886__$1 = state_25886;
var statearr_25947_27090 = state_25886__$1;
(statearr_25947_27090[(2)] = null);

(statearr_25947_27090[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (45))){
var inst_25876 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
var statearr_25948_27091 = state_25886__$1;
(statearr_25948_27091[(2)] = inst_25876);

(statearr_25948_27091[(1)] = (44));


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
var statearr_25950_27096 = state_25886__$1;
(statearr_25950_27096[(1)] = (42));

} else {
var statearr_25951_27097 = state_25886__$1;
(statearr_25951_27097[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (16))){
var inst_25787 = (state_25886[(7)]);
var inst_25789 = cljs.core.chunked_seq_QMARK_(inst_25787);
var state_25886__$1 = state_25886;
if(inst_25789){
var statearr_25952_27098 = state_25886__$1;
(statearr_25952_27098[(1)] = (19));

} else {
var statearr_25953_27099 = state_25886__$1;
(statearr_25953_27099[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (38))){
var inst_25865 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
var statearr_25954_27100 = state_25886__$1;
(statearr_25954_27100[(2)] = inst_25865);

(statearr_25954_27100[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (30))){
var state_25886__$1 = state_25886;
var statearr_25955_27101 = state_25886__$1;
(statearr_25955_27101[(2)] = null);

(statearr_25955_27101[(1)] = (32));


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
var statearr_25957_27102 = state_25886__$1;
(statearr_25957_27102[(1)] = (13));

} else {
var statearr_25958_27103 = state_25886__$1;
(statearr_25958_27103[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25887 === (18))){
var inst_25813 = (state_25886[(2)]);
var state_25886__$1 = state_25886;
var statearr_25959_27104 = state_25886__$1;
(statearr_25959_27104[(2)] = inst_25813);

(statearr_25959_27104[(1)] = (12));


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
var statearr_25961_27105 = state_25886__$1;
(statearr_25961_27105[(1)] = (39));

} else {
var statearr_25962_27106 = state_25886__$1;
(statearr_25962_27106[(1)] = (40));

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
var statearr_25963_27107 = state_25886__$1;
(statearr_25963_27107[(1)] = (10));

} else {
var statearr_25964_27108 = state_25886__$1;
(statearr_25964_27108[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__25185__auto__ = null;
var cljs$core$async$mult_$_state_machine__25185__auto____0 = (function (){
var statearr_25965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25965[(0)] = cljs$core$async$mult_$_state_machine__25185__auto__);

(statearr_25965[(1)] = (1));

return statearr_25965;
});
var cljs$core$async$mult_$_state_machine__25185__auto____1 = (function (state_25886){
while(true){
var ret_value__25186__auto__ = (function (){try{while(true){
var result__25187__auto__ = switch__25184__auto__(state_25886);
if(cljs.core.keyword_identical_QMARK_(result__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25187__auto__;
}
break;
}
}catch (e25966){var ex__25188__auto__ = e25966;
var statearr_25967_27109 = state_25886;
(statearr_25967_27109[(2)] = ex__25188__auto__);


if(cljs.core.seq((state_25886[(4)]))){
var statearr_25968_27110 = state_25886;
(statearr_25968_27110[(1)] = cljs.core.first((state_25886[(4)])));

} else {
throw ex__25188__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27111 = state_25886;
state_25886 = G__27111;
continue;
} else {
return ret_value__25186__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25185__auto__ = function(state_25886){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25185__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25185__auto____1.call(this,state_25886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25185__auto____0;
cljs$core$async$mult_$_state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25185__auto____1;
return cljs$core$async$mult_$_state_machine__25185__auto__;
})()
})();
var state__25275__auto__ = (function (){var statearr_25969 = f__25274__auto__();
(statearr_25969[(6)] = c__25273__auto___27045);

return statearr_25969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25275__auto__);
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

var cljs$core$async$Mix$admix_STAR_$dyn_27113 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_27113(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_27114 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_27114(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_27115 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_27115(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_27123 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_27123(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_27124 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_27124(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27128 = arguments.length;
var i__5770__auto___27129 = (0);
while(true){
if((i__5770__auto___27129 < len__5769__auto___27128)){
args__5775__auto__.push((arguments[i__5770__auto___27129]));

var G__27130 = (i__5770__auto___27129 + (1));
i__5770__auto___27129 = G__27130;
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
var statearr_25978_27131 = state;
(statearr_25978_27131[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_25979_27135 = state;
(statearr_25979_27135[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_25980_27136 = state;
(statearr_25980_27136[(2)] = cljs.core.deref(cb));


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
var c__25273__auto___27144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25274__auto__ = (function (){var switch__25184__auto__ = (function (state_26051){
var state_val_26052 = (state_26051[(1)]);
if((state_val_26052 === (7))){
var inst_26011 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
if(cljs.core.truth_(inst_26011)){
var statearr_26053_27145 = state_26051__$1;
(statearr_26053_27145[(1)] = (8));

} else {
var statearr_26054_27146 = state_26051__$1;
(statearr_26054_27146[(1)] = (9));

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
var statearr_26056_27147 = state_26051__$1;
(statearr_26056_27147[(2)] = null);

(statearr_26056_27147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (24))){
var inst_25995 = (state_26051[(12)]);
var inst_25992 = inst_25995;
var state_26051__$1 = (function (){var statearr_26057 = state_26051;
(statearr_26057[(8)] = inst_25992);

return statearr_26057;
})();
var statearr_26058_27148 = state_26051__$1;
(statearr_26058_27148[(2)] = null);

(statearr_26058_27148[(1)] = (2));


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
var statearr_26060_27149 = state_26051__$1;
(statearr_26060_27149[(1)] = (5));

} else {
var statearr_26061_27150 = state_26051__$1;
(statearr_26061_27150[(1)] = (6));

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
var statearr_26063_27151 = state_26051__$1;
(statearr_26063_27151[(1)] = (17));

} else {
var statearr_26064_27152 = state_26051__$1;
(statearr_26064_27152[(1)] = (18));

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
var statearr_26066_27153 = state_26051__$1;
(statearr_26066_27153[(2)] = null);

(statearr_26066_27153[(1)] = (2));


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
var statearr_26068_27154 = state_26051__$1;
(statearr_26068_27154[(2)] = null);

(statearr_26068_27154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (22))){
var inst_26045 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
var statearr_26069_27156 = state_26051__$1;
(statearr_26069_27156[(2)] = inst_26045);

(statearr_26069_27156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (6))){
var inst_26005 = (state_26051[(14)]);
var inst_26009 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26005,change);
var state_26051__$1 = state_26051;
var statearr_26070_27158 = state_26051__$1;
(statearr_26070_27158[(2)] = inst_26009);

(statearr_26070_27158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (25))){
var state_26051__$1 = state_26051;
var statearr_26071_27159 = state_26051__$1;
(statearr_26071_27159[(2)] = null);

(statearr_26071_27159[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (17))){
var inst_26005 = (state_26051[(14)]);
var inst_25997 = (state_26051[(18)]);
var inst_26027 = (inst_25997.cljs$core$IFn$_invoke$arity$1 ? inst_25997.cljs$core$IFn$_invoke$arity$1(inst_26005) : inst_25997.call(null,inst_26005));
var inst_26028 = cljs.core.not(inst_26027);
var state_26051__$1 = state_26051;
var statearr_26072_27160 = state_26051__$1;
(statearr_26072_27160[(2)] = inst_26028);

(statearr_26072_27160[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (3))){
var inst_26049 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26051__$1,inst_26049);
} else {
if((state_val_26052 === (12))){
var state_26051__$1 = state_26051;
var statearr_26073_27161 = state_26051__$1;
(statearr_26073_27161[(2)] = null);

(statearr_26073_27161[(1)] = (13));


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
var statearr_26075_27162 = state_26051__$1;
(statearr_26075_27162[(1)] = (24));

} else {
var statearr_26076_27163 = state_26051__$1;
(statearr_26076_27163[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (19))){
var inst_26031 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
var statearr_26077_27164 = state_26051__$1;
(statearr_26077_27164[(2)] = inst_26031);

(statearr_26077_27164[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (11))){
var inst_26005 = (state_26051[(14)]);
var inst_26015 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_26005);
var state_26051__$1 = state_26051;
var statearr_26078_27165 = state_26051__$1;
(statearr_26078_27165[(2)] = inst_26015);

(statearr_26078_27165[(1)] = (13));


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
var statearr_26080_27166 = state_26051__$1;
(statearr_26080_27166[(1)] = (14));

} else {
var statearr_26081_27167 = state_26051__$1;
(statearr_26081_27167[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (5))){
var inst_26006 = (state_26051[(13)]);
var state_26051__$1 = state_26051;
var statearr_26082_27168 = state_26051__$1;
(statearr_26082_27168[(2)] = inst_26006);

(statearr_26082_27168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (14))){
var inst_26022 = (state_26051[(19)]);
var state_26051__$1 = state_26051;
var statearr_26083_27169 = state_26051__$1;
(statearr_26083_27169[(2)] = inst_26022);

(statearr_26083_27169[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (26))){
var inst_26041 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
var statearr_26084_27170 = state_26051__$1;
(statearr_26084_27170[(2)] = inst_26041);

(statearr_26084_27170[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (16))){
var inst_26033 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
if(cljs.core.truth_(inst_26033)){
var statearr_26085_27171 = state_26051__$1;
(statearr_26085_27171[(1)] = (20));

} else {
var statearr_26086_27172 = state_26051__$1;
(statearr_26086_27172[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (10))){
var inst_26047 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
var statearr_26087_27173 = state_26051__$1;
(statearr_26087_27173[(2)] = inst_26047);

(statearr_26087_27173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (18))){
var inst_26025 = (state_26051[(15)]);
var state_26051__$1 = state_26051;
var statearr_26088_27174 = state_26051__$1;
(statearr_26088_27174[(2)] = inst_26025);

(statearr_26088_27174[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (8))){
var inst_26004 = (state_26051[(7)]);
var inst_26013 = (inst_26004 == null);
var state_26051__$1 = state_26051;
if(cljs.core.truth_(inst_26013)){
var statearr_26089_27175 = state_26051__$1;
(statearr_26089_27175[(1)] = (11));

} else {
var statearr_26090_27176 = state_26051__$1;
(statearr_26090_27176[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__25185__auto__ = null;
var cljs$core$async$mix_$_state_machine__25185__auto____0 = (function (){
var statearr_26091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26091[(0)] = cljs$core$async$mix_$_state_machine__25185__auto__);

(statearr_26091[(1)] = (1));

return statearr_26091;
});
var cljs$core$async$mix_$_state_machine__25185__auto____1 = (function (state_26051){
while(true){
var ret_value__25186__auto__ = (function (){try{while(true){
var result__25187__auto__ = switch__25184__auto__(state_26051);
if(cljs.core.keyword_identical_QMARK_(result__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25187__auto__;
}
break;
}
}catch (e26092){var ex__25188__auto__ = e26092;
var statearr_26093_27177 = state_26051;
(statearr_26093_27177[(2)] = ex__25188__auto__);


if(cljs.core.seq((state_26051[(4)]))){
var statearr_26094_27178 = state_26051;
(statearr_26094_27178[(1)] = cljs.core.first((state_26051[(4)])));

} else {
throw ex__25188__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27179 = state_26051;
state_26051 = G__27179;
continue;
} else {
return ret_value__25186__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25185__auto__ = function(state_26051){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25185__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25185__auto____1.call(this,state_26051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25185__auto____0;
cljs$core$async$mix_$_state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25185__auto____1;
return cljs$core$async$mix_$_state_machine__25185__auto__;
})()
})();
var state__25275__auto__ = (function (){var statearr_26095 = f__25274__auto__();
(statearr_26095[(6)] = c__25273__auto___27144);

return statearr_26095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25275__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_27184 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_27184(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_27185 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_27185(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_27186 = (function() {
var G__27187 = null;
var G__27187__1 = (function (p){
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
var G__27187__2 = (function (p,v){
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
G__27187 = function(p,v){
switch(arguments.length){
case 1:
return G__27187__1.call(this,p);
case 2:
return G__27187__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27187.cljs$core$IFn$_invoke$arity$1 = G__27187__1;
G__27187.cljs$core$IFn$_invoke$arity$2 = G__27187__2;
return G__27187;
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27186(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27186(p,v);
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
var c__25273__auto___27195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25274__auto__ = (function (){var switch__25184__auto__ = (function (state_26175){
var state_val_26176 = (state_26175[(1)]);
if((state_val_26176 === (7))){
var inst_26171 = (state_26175[(2)]);
var state_26175__$1 = state_26175;
var statearr_26177_27196 = state_26175__$1;
(statearr_26177_27196[(2)] = inst_26171);

(statearr_26177_27196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (20))){
var state_26175__$1 = state_26175;
var statearr_26178_27197 = state_26175__$1;
(statearr_26178_27197[(2)] = null);

(statearr_26178_27197[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (1))){
var state_26175__$1 = state_26175;
var statearr_26179_27198 = state_26175__$1;
(statearr_26179_27198[(2)] = null);

(statearr_26179_27198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (24))){
var inst_26154 = (state_26175[(7)]);
var inst_26163 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_26154);
var state_26175__$1 = state_26175;
var statearr_26180_27199 = state_26175__$1;
(statearr_26180_27199[(2)] = inst_26163);

(statearr_26180_27199[(1)] = (25));


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
var statearr_26182_27200 = state_26175__$1;
(statearr_26182_27200[(1)] = (5));

} else {
var statearr_26183_27201 = state_26175__$1;
(statearr_26183_27201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (15))){
var inst_26148 = (state_26175[(2)]);
var state_26175__$1 = state_26175;
var statearr_26184_27202 = state_26175__$1;
(statearr_26184_27202[(2)] = inst_26148);

(statearr_26184_27202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (21))){
var inst_26168 = (state_26175[(2)]);
var state_26175__$1 = (function (){var statearr_26185 = state_26175;
(statearr_26185[(9)] = inst_26168);

return statearr_26185;
})();
var statearr_26186_27203 = state_26175__$1;
(statearr_26186_27203[(2)] = null);

(statearr_26186_27203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (13))){
var inst_26130 = (state_26175[(10)]);
var inst_26132 = cljs.core.chunked_seq_QMARK_(inst_26130);
var state_26175__$1 = state_26175;
if(inst_26132){
var statearr_26187_27204 = state_26175__$1;
(statearr_26187_27204[(1)] = (16));

} else {
var statearr_26188_27205 = state_26175__$1;
(statearr_26188_27205[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (22))){
var inst_26160 = (state_26175[(2)]);
var state_26175__$1 = state_26175;
if(cljs.core.truth_(inst_26160)){
var statearr_26189_27206 = state_26175__$1;
(statearr_26189_27206[(1)] = (23));

} else {
var statearr_26190_27207 = state_26175__$1;
(statearr_26190_27207[(1)] = (24));

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
var statearr_26192_27208 = state_26175__$1;
(statearr_26192_27208[(1)] = (19));

} else {
var statearr_26193_27209 = state_26175__$1;
(statearr_26193_27209[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (25))){
var inst_26165 = (state_26175[(2)]);
var state_26175__$1 = state_26175;
var statearr_26194_27210 = state_26175__$1;
(statearr_26194_27210[(2)] = inst_26165);

(statearr_26194_27210[(1)] = (21));


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
var statearr_26196_27212 = state_26175__$1;
(statearr_26196_27212[(2)] = null);

(statearr_26196_27212[(1)] = (8));


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
var statearr_26197_27213 = state_26175__$1;
(statearr_26197_27213[(2)] = inst_26150);

(statearr_26197_27213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (2))){
var state_26175__$1 = state_26175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26175__$1,(4),ch);
} else {
if((state_val_26176 === (23))){
var state_26175__$1 = state_26175;
var statearr_26198_27215 = state_26175__$1;
(statearr_26198_27215[(2)] = null);

(statearr_26198_27215[(1)] = (25));


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
var statearr_26200_27219 = state_26175__$1;
(statearr_26200_27219[(1)] = (13));

} else {
var statearr_26201_27220 = state_26175__$1;
(statearr_26201_27220[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (9))){
var inst_26152 = (state_26175[(2)]);
var state_26175__$1 = state_26175;
var statearr_26202_27221 = state_26175__$1;
(statearr_26202_27221[(2)] = inst_26152);

(statearr_26202_27221[(1)] = (7));


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
var statearr_26204_27222 = state_26175__$1;
(statearr_26204_27222[(2)] = null);

(statearr_26204_27222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (14))){
var state_26175__$1 = state_26175;
var statearr_26208_27223 = state_26175__$1;
(statearr_26208_27223[(2)] = null);

(statearr_26208_27223[(1)] = (15));


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
var statearr_26210_27224 = state_26175__$1;
(statearr_26210_27224[(2)] = null);

(statearr_26210_27224[(1)] = (8));


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
var statearr_26212_27225 = state_26175__$1;
(statearr_26212_27225[(2)] = null);

(statearr_26212_27225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26176 === (18))){
var inst_26145 = (state_26175[(2)]);
var state_26175__$1 = state_26175;
var statearr_26213_27226 = state_26175__$1;
(statearr_26213_27226[(2)] = inst_26145);

(statearr_26213_27226[(1)] = (15));


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
var cljs$core$async$state_machine__25185__auto__ = null;
var cljs$core$async$state_machine__25185__auto____0 = (function (){
var statearr_26216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26216[(0)] = cljs$core$async$state_machine__25185__auto__);

(statearr_26216[(1)] = (1));

return statearr_26216;
});
var cljs$core$async$state_machine__25185__auto____1 = (function (state_26175){
while(true){
var ret_value__25186__auto__ = (function (){try{while(true){
var result__25187__auto__ = switch__25184__auto__(state_26175);
if(cljs.core.keyword_identical_QMARK_(result__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25187__auto__;
}
break;
}
}catch (e26217){var ex__25188__auto__ = e26217;
var statearr_26218_27229 = state_26175;
(statearr_26218_27229[(2)] = ex__25188__auto__);


if(cljs.core.seq((state_26175[(4)]))){
var statearr_26219_27230 = state_26175;
(statearr_26219_27230[(1)] = cljs.core.first((state_26175[(4)])));

} else {
throw ex__25188__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27231 = state_26175;
state_26175 = G__27231;
continue;
} else {
return ret_value__25186__auto__;
}
break;
}
});
cljs$core$async$state_machine__25185__auto__ = function(state_26175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25185__auto____1.call(this,state_26175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25185__auto____0;
cljs$core$async$state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25185__auto____1;
return cljs$core$async$state_machine__25185__auto__;
})()
})();
var state__25275__auto__ = (function (){var statearr_26220 = f__25274__auto__();
(statearr_26220[(6)] = c__25273__auto___27195);

return statearr_26220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25275__auto__);
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
var c__25273__auto___27236 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25274__auto__ = (function (){var switch__25184__auto__ = (function (state_26269){
var state_val_26270 = (state_26269[(1)]);
if((state_val_26270 === (7))){
var state_26269__$1 = state_26269;
var statearr_26271_27237 = state_26269__$1;
(statearr_26271_27237[(2)] = null);

(statearr_26271_27237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (1))){
var state_26269__$1 = state_26269;
var statearr_26272_27238 = state_26269__$1;
(statearr_26272_27238[(2)] = null);

(statearr_26272_27238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (4))){
var inst_26230 = (state_26269[(7)]);
var inst_26229 = (state_26269[(8)]);
var inst_26232 = (inst_26230 < inst_26229);
var state_26269__$1 = state_26269;
if(cljs.core.truth_(inst_26232)){
var statearr_26273_27242 = state_26269__$1;
(statearr_26273_27242[(1)] = (6));

} else {
var statearr_26274_27243 = state_26269__$1;
(statearr_26274_27243[(1)] = (7));

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
var statearr_26276_27244 = state_26269__$1;
(statearr_26276_27244[(1)] = (14));

} else {
var statearr_26277_27245 = state_26269__$1;
(statearr_26277_27245[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26270 === (6))){
var state_26269__$1 = state_26269;
var statearr_26278_27246 = state_26269__$1;
(statearr_26278_27246[(2)] = null);

(statearr_26278_27246[(1)] = (9));


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
var statearr_26297_27257 = state_26269__$1;
(statearr_26297_27257[(2)] = inst_26251);

(statearr_26297_27257[(1)] = (5));


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
var cljs$core$async$state_machine__25185__auto__ = null;
var cljs$core$async$state_machine__25185__auto____0 = (function (){
var statearr_26298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26298[(0)] = cljs$core$async$state_machine__25185__auto__);

(statearr_26298[(1)] = (1));

return statearr_26298;
});
var cljs$core$async$state_machine__25185__auto____1 = (function (state_26269){
while(true){
var ret_value__25186__auto__ = (function (){try{while(true){
var result__25187__auto__ = switch__25184__auto__(state_26269);
if(cljs.core.keyword_identical_QMARK_(result__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25187__auto__;
}
break;
}
}catch (e26299){var ex__25188__auto__ = e26299;
var statearr_26300_27258 = state_26269;
(statearr_26300_27258[(2)] = ex__25188__auto__);


if(cljs.core.seq((state_26269[(4)]))){
var statearr_26301_27259 = state_26269;
(statearr_26301_27259[(1)] = cljs.core.first((state_26269[(4)])));

} else {
throw ex__25188__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27260 = state_26269;
state_26269 = G__27260;
continue;
} else {
return ret_value__25186__auto__;
}
break;
}
});
cljs$core$async$state_machine__25185__auto__ = function(state_26269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25185__auto____1.call(this,state_26269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25185__auto____0;
cljs$core$async$state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25185__auto____1;
return cljs$core$async$state_machine__25185__auto__;
})()
})();
var state__25275__auto__ = (function (){var statearr_26302 = f__25274__auto__();
(statearr_26302[(6)] = c__25273__auto___27236);

return statearr_26302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25275__auto__);
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
var c__25273__auto___27262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25274__auto__ = (function (){var switch__25184__auto__ = (function (state_26337){
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
var statearr_26344_27266 = state_26337__$1;
(statearr_26344_27266[(2)] = inst_26333);

(statearr_26344_27266[(1)] = (3));


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
var statearr_26346_27271 = state_26337__$1;
(statearr_26346_27271[(1)] = (4));

} else {
var statearr_26347_27272 = state_26337__$1;
(statearr_26347_27272[(1)] = (5));

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
var statearr_26349_27273 = state_26337__$1;
(statearr_26349_27273[(2)] = null);

(statearr_26349_27273[(1)] = (2));


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
var statearr_26353_27277 = state_26337__$1;
(statearr_26353_27277[(2)] = null);

(statearr_26353_27277[(1)] = (2));


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
var cljs$core$async$state_machine__25185__auto__ = null;
var cljs$core$async$state_machine__25185__auto____0 = (function (){
var statearr_26354 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26354[(0)] = cljs$core$async$state_machine__25185__auto__);

(statearr_26354[(1)] = (1));

return statearr_26354;
});
var cljs$core$async$state_machine__25185__auto____1 = (function (state_26337){
while(true){
var ret_value__25186__auto__ = (function (){try{while(true){
var result__25187__auto__ = switch__25184__auto__(state_26337);
if(cljs.core.keyword_identical_QMARK_(result__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25187__auto__;
}
break;
}
}catch (e26355){var ex__25188__auto__ = e26355;
var statearr_26356_27278 = state_26337;
(statearr_26356_27278[(2)] = ex__25188__auto__);


if(cljs.core.seq((state_26337[(4)]))){
var statearr_26357_27279 = state_26337;
(statearr_26357_27279[(1)] = cljs.core.first((state_26337[(4)])));

} else {
throw ex__25188__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27280 = state_26337;
state_26337 = G__27280;
continue;
} else {
return ret_value__25186__auto__;
}
break;
}
});
cljs$core$async$state_machine__25185__auto__ = function(state_26337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25185__auto____1.call(this,state_26337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25185__auto____0;
cljs$core$async$state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25185__auto____1;
return cljs$core$async$state_machine__25185__auto__;
})()
})();
var state__25275__auto__ = (function (){var statearr_26358 = f__25274__auto__();
(statearr_26358[(6)] = c__25273__auto___27262);

return statearr_26358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25275__auto__);
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
var c__25273__auto___27283 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25274__auto__ = (function (){var switch__25184__auto__ = (function (state_26384){
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
var cljs$core$async$state_machine__25185__auto__ = null;
var cljs$core$async$state_machine__25185__auto____0 = (function (){
var statearr_26400 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26400[(0)] = cljs$core$async$state_machine__25185__auto__);

(statearr_26400[(1)] = (1));

return statearr_26400;
});
var cljs$core$async$state_machine__25185__auto____1 = (function (state_26384){
while(true){
var ret_value__25186__auto__ = (function (){try{while(true){
var result__25187__auto__ = switch__25184__auto__(state_26384);
if(cljs.core.keyword_identical_QMARK_(result__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25187__auto__;
}
break;
}
}catch (e26401){var ex__25188__auto__ = e26401;
var statearr_26402_27298 = state_26384;
(statearr_26402_27298[(2)] = ex__25188__auto__);


if(cljs.core.seq((state_26384[(4)]))){
var statearr_26403_27299 = state_26384;
(statearr_26403_27299[(1)] = cljs.core.first((state_26384[(4)])));

} else {
throw ex__25188__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27300 = state_26384;
state_26384 = G__27300;
continue;
} else {
return ret_value__25186__auto__;
}
break;
}
});
cljs$core$async$state_machine__25185__auto__ = function(state_26384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25185__auto____1.call(this,state_26384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25185__auto____0;
cljs$core$async$state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25185__auto____1;
return cljs$core$async$state_machine__25185__auto__;
})()
})();
var state__25275__auto__ = (function (){var statearr_26404 = f__25274__auto__();
(statearr_26404[(6)] = c__25273__auto___27283);

return statearr_26404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25275__auto__);
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
var c__25273__auto___27306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25274__auto__ = (function (){var switch__25184__auto__ = (function (state_26442){
var state_val_26443 = (state_26442[(1)]);
if((state_val_26443 === (7))){
var inst_26438 = (state_26442[(2)]);
var state_26442__$1 = state_26442;
var statearr_26444_27307 = state_26442__$1;
(statearr_26444_27307[(2)] = inst_26438);

(statearr_26444_27307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26443 === (1))){
var state_26442__$1 = state_26442;
var statearr_26445_27308 = state_26442__$1;
(statearr_26445_27308[(2)] = null);

(statearr_26445_27308[(1)] = (2));


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
var statearr_26447_27309 = state_26442__$1;
(statearr_26447_27309[(1)] = (5));

} else {
var statearr_26448_27310 = state_26442__$1;
(statearr_26448_27310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26443 === (6))){
var inst_26424 = (state_26442[(7)]);
var inst_26429 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_26424) : p.call(null,inst_26424));
var state_26442__$1 = state_26442;
if(cljs.core.truth_(inst_26429)){
var statearr_26449_27311 = state_26442__$1;
(statearr_26449_27311[(1)] = (8));

} else {
var statearr_26450_27312 = state_26442__$1;
(statearr_26450_27312[(1)] = (9));

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
var statearr_26451_27313 = state_26442__$1;
(statearr_26451_27313[(2)] = inst_26432);

(statearr_26451_27313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26443 === (9))){
var state_26442__$1 = state_26442;
var statearr_26452_27314 = state_26442__$1;
(statearr_26452_27314[(2)] = null);

(statearr_26452_27314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26443 === (5))){
var inst_26427 = cljs.core.async.close_BANG_(out);
var state_26442__$1 = state_26442;
var statearr_26453_27315 = state_26442__$1;
(statearr_26453_27315[(2)] = inst_26427);

(statearr_26453_27315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26443 === (10))){
var inst_26435 = (state_26442[(2)]);
var state_26442__$1 = (function (){var statearr_26454 = state_26442;
(statearr_26454[(8)] = inst_26435);

return statearr_26454;
})();
var statearr_26455_27316 = state_26442__$1;
(statearr_26455_27316[(2)] = null);

(statearr_26455_27316[(1)] = (2));


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
var cljs$core$async$state_machine__25185__auto__ = null;
var cljs$core$async$state_machine__25185__auto____0 = (function (){
var statearr_26456 = [null,null,null,null,null,null,null,null,null];
(statearr_26456[(0)] = cljs$core$async$state_machine__25185__auto__);

(statearr_26456[(1)] = (1));

return statearr_26456;
});
var cljs$core$async$state_machine__25185__auto____1 = (function (state_26442){
while(true){
var ret_value__25186__auto__ = (function (){try{while(true){
var result__25187__auto__ = switch__25184__auto__(state_26442);
if(cljs.core.keyword_identical_QMARK_(result__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25187__auto__;
}
break;
}
}catch (e26457){var ex__25188__auto__ = e26457;
var statearr_26458_27318 = state_26442;
(statearr_26458_27318[(2)] = ex__25188__auto__);


if(cljs.core.seq((state_26442[(4)]))){
var statearr_26459_27319 = state_26442;
(statearr_26459_27319[(1)] = cljs.core.first((state_26442[(4)])));

} else {
throw ex__25188__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27320 = state_26442;
state_26442 = G__27320;
continue;
} else {
return ret_value__25186__auto__;
}
break;
}
});
cljs$core$async$state_machine__25185__auto__ = function(state_26442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25185__auto____1.call(this,state_26442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25185__auto____0;
cljs$core$async$state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25185__auto____1;
return cljs$core$async$state_machine__25185__auto__;
})()
})();
var state__25275__auto__ = (function (){var statearr_26460 = f__25274__auto__();
(statearr_26460[(6)] = c__25273__auto___27306);

return statearr_26460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25275__auto__);
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
var c__25273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25274__auto__ = (function (){var switch__25184__auto__ = (function (state_26524){
var state_val_26525 = (state_26524[(1)]);
if((state_val_26525 === (7))){
var inst_26520 = (state_26524[(2)]);
var state_26524__$1 = state_26524;
var statearr_26526_27322 = state_26524__$1;
(statearr_26526_27322[(2)] = inst_26520);

(statearr_26526_27322[(1)] = (3));


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
var statearr_26528_27323 = state_26524__$1;
(statearr_26528_27323[(2)] = null);

(statearr_26528_27323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (1))){
var state_26524__$1 = state_26524;
var statearr_26529_27324 = state_26524__$1;
(statearr_26529_27324[(2)] = null);

(statearr_26529_27324[(1)] = (2));


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
var statearr_26531_27325 = state_26524__$1;
(statearr_26531_27325[(1)] = (5));

} else {
var statearr_26532_27326 = state_26524__$1;
(statearr_26532_27326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (15))){
var state_26524__$1 = state_26524;
var statearr_26536_27327 = state_26524__$1;
(statearr_26536_27327[(2)] = null);

(statearr_26536_27327[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (21))){
var state_26524__$1 = state_26524;
var statearr_26537_27328 = state_26524__$1;
(statearr_26537_27328[(2)] = null);

(statearr_26537_27328[(1)] = (23));


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
var statearr_26539_27329 = state_26524__$1;
(statearr_26539_27329[(2)] = null);

(statearr_26539_27329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (22))){
var state_26524__$1 = state_26524;
var statearr_26540_27330 = state_26524__$1;
(statearr_26540_27330[(2)] = null);

(statearr_26540_27330[(1)] = (2));


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
var statearr_26542_27331 = state_26524__$1;
(statearr_26542_27331[(2)] = null);

(statearr_26542_27331[(1)] = (8));


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
var statearr_26544_27332 = state_26524__$1;
(statearr_26544_27332[(2)] = null);

(statearr_26544_27332[(1)] = (8));


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
var statearr_26545_27333 = state_26524__$1;
(statearr_26545_27333[(2)] = inst_26510);

(statearr_26545_27333[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (2))){
var state_26524__$1 = state_26524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26524__$1,(4),in$);
} else {
if((state_val_26525 === (23))){
var inst_26518 = (state_26524[(2)]);
var state_26524__$1 = state_26524;
var statearr_26546_27334 = state_26524__$1;
(statearr_26546_27334[(2)] = inst_26518);

(statearr_26546_27334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (19))){
var inst_26505 = (state_26524[(2)]);
var state_26524__$1 = state_26524;
var statearr_26547_27336 = state_26524__$1;
(statearr_26547_27336[(2)] = inst_26505);

(statearr_26547_27336[(1)] = (16));


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
var statearr_26549_27340 = state_26524__$1;
(statearr_26549_27340[(1)] = (14));

} else {
var statearr_26550_27341 = state_26524__$1;
(statearr_26550_27341[(1)] = (15));

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
var statearr_26552_27342 = state_26524__$1;
(statearr_26552_27342[(1)] = (21));

} else {
var statearr_26553_27343 = state_26524__$1;
(statearr_26553_27343[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (5))){
var inst_26468 = cljs.core.async.close_BANG_(out);
var state_26524__$1 = state_26524;
var statearr_26554_27348 = state_26524__$1;
(statearr_26554_27348[(2)] = inst_26468);

(statearr_26554_27348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (14))){
var inst_26490 = (state_26524[(7)]);
var inst_26492 = cljs.core.chunked_seq_QMARK_(inst_26490);
var state_26524__$1 = state_26524;
if(inst_26492){
var statearr_26555_27349 = state_26524__$1;
(statearr_26555_27349[(1)] = (17));

} else {
var statearr_26556_27350 = state_26524__$1;
(statearr_26556_27350[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26525 === (16))){
var inst_26508 = (state_26524[(2)]);
var state_26524__$1 = state_26524;
var statearr_26557_27351 = state_26524__$1;
(statearr_26557_27351[(2)] = inst_26508);

(statearr_26557_27351[(1)] = (12));


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
var cljs$core$async$mapcat_STAR__$_state_machine__25185__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25185__auto____0 = (function (){
var statearr_26560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26560[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25185__auto__);

(statearr_26560[(1)] = (1));

return statearr_26560;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25185__auto____1 = (function (state_26524){
while(true){
var ret_value__25186__auto__ = (function (){try{while(true){
var result__25187__auto__ = switch__25184__auto__(state_26524);
if(cljs.core.keyword_identical_QMARK_(result__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25187__auto__;
}
break;
}
}catch (e26561){var ex__25188__auto__ = e26561;
var statearr_26562_27356 = state_26524;
(statearr_26562_27356[(2)] = ex__25188__auto__);


if(cljs.core.seq((state_26524[(4)]))){
var statearr_26563_27357 = state_26524;
(statearr_26563_27357[(1)] = cljs.core.first((state_26524[(4)])));

} else {
throw ex__25188__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27358 = state_26524;
state_26524 = G__27358;
continue;
} else {
return ret_value__25186__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25185__auto__ = function(state_26524){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25185__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25185__auto____1.call(this,state_26524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25185__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25185__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25185__auto__;
})()
})();
var state__25275__auto__ = (function (){var statearr_26564 = f__25274__auto__();
(statearr_26564[(6)] = c__25273__auto__);

return statearr_26564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25275__auto__);
}));

return c__25273__auto__;
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
var c__25273__auto___27362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25274__auto__ = (function (){var switch__25184__auto__ = (function (state_26594){
var state_val_26595 = (state_26594[(1)]);
if((state_val_26595 === (7))){
var inst_26589 = (state_26594[(2)]);
var state_26594__$1 = state_26594;
var statearr_26596_27363 = state_26594__$1;
(statearr_26596_27363[(2)] = inst_26589);

(statearr_26596_27363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (1))){
var inst_26571 = null;
var state_26594__$1 = (function (){var statearr_26597 = state_26594;
(statearr_26597[(7)] = inst_26571);

return statearr_26597;
})();
var statearr_26598_27364 = state_26594__$1;
(statearr_26598_27364[(2)] = null);

(statearr_26598_27364[(1)] = (2));


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
var statearr_26600_27365 = state_26594__$1;
(statearr_26600_27365[(1)] = (5));

} else {
var statearr_26601_27366 = state_26594__$1;
(statearr_26601_27366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (6))){
var state_26594__$1 = state_26594;
var statearr_26602_27367 = state_26594__$1;
(statearr_26602_27367[(2)] = null);

(statearr_26602_27367[(1)] = (7));


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
var statearr_26605_27368 = state_26594__$1;
(statearr_26605_27368[(2)] = null);

(statearr_26605_27368[(1)] = (2));


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
var statearr_26607_27369 = state_26594__$1;
(statearr_26607_27369[(1)] = (8));

} else {
var statearr_26608_27370 = state_26594__$1;
(statearr_26608_27370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (10))){
var inst_26586 = (state_26594[(2)]);
var state_26594__$1 = state_26594;
var statearr_26609_27371 = state_26594__$1;
(statearr_26609_27371[(2)] = inst_26586);

(statearr_26609_27371[(1)] = (7));


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
var statearr_26611_27372 = state_26594__$1;
(statearr_26611_27372[(2)] = null);

(statearr_26611_27372[(1)] = (2));


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
var cljs$core$async$state_machine__25185__auto__ = null;
var cljs$core$async$state_machine__25185__auto____0 = (function (){
var statearr_26612 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26612[(0)] = cljs$core$async$state_machine__25185__auto__);

(statearr_26612[(1)] = (1));

return statearr_26612;
});
var cljs$core$async$state_machine__25185__auto____1 = (function (state_26594){
while(true){
var ret_value__25186__auto__ = (function (){try{while(true){
var result__25187__auto__ = switch__25184__auto__(state_26594);
if(cljs.core.keyword_identical_QMARK_(result__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25187__auto__;
}
break;
}
}catch (e26613){var ex__25188__auto__ = e26613;
var statearr_26614_27373 = state_26594;
(statearr_26614_27373[(2)] = ex__25188__auto__);


if(cljs.core.seq((state_26594[(4)]))){
var statearr_26615_27374 = state_26594;
(statearr_26615_27374[(1)] = cljs.core.first((state_26594[(4)])));

} else {
throw ex__25188__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27375 = state_26594;
state_26594 = G__27375;
continue;
} else {
return ret_value__25186__auto__;
}
break;
}
});
cljs$core$async$state_machine__25185__auto__ = function(state_26594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25185__auto____1.call(this,state_26594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25185__auto____0;
cljs$core$async$state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25185__auto____1;
return cljs$core$async$state_machine__25185__auto__;
})()
})();
var state__25275__auto__ = (function (){var statearr_26616 = f__25274__auto__();
(statearr_26616[(6)] = c__25273__auto___27362);

return statearr_26616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25275__auto__);
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
var c__25273__auto___27377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25274__auto__ = (function (){var switch__25184__auto__ = (function (state_26656){
var state_val_26657 = (state_26656[(1)]);
if((state_val_26657 === (7))){
var inst_26652 = (state_26656[(2)]);
var state_26656__$1 = state_26656;
var statearr_26658_27378 = state_26656__$1;
(statearr_26658_27378[(2)] = inst_26652);

(statearr_26658_27378[(1)] = (3));


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
var statearr_26660_27379 = state_26656__$1;
(statearr_26660_27379[(2)] = null);

(statearr_26660_27379[(1)] = (2));


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
var statearr_26662_27380 = state_26656__$1;
(statearr_26662_27380[(1)] = (5));

} else {
var statearr_26663_27381 = state_26656__$1;
(statearr_26663_27381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26657 === (15))){
var inst_26646 = (state_26656[(2)]);
var state_26656__$1 = state_26656;
var statearr_26664_27382 = state_26656__$1;
(statearr_26664_27382[(2)] = inst_26646);

(statearr_26664_27382[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26657 === (13))){
var state_26656__$1 = state_26656;
var statearr_26665_27383 = state_26656__$1;
(statearr_26665_27383[(2)] = null);

(statearr_26665_27383[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26657 === (6))){
var inst_26621 = (state_26656[(8)]);
var inst_26642 = (inst_26621 > (0));
var state_26656__$1 = state_26656;
if(cljs.core.truth_(inst_26642)){
var statearr_26666_27384 = state_26656__$1;
(statearr_26666_27384[(1)] = (12));

} else {
var statearr_26667_27385 = state_26656__$1;
(statearr_26667_27385[(1)] = (13));

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
var statearr_26669_27386 = state_26656__$1;
(statearr_26669_27386[(2)] = null);

(statearr_26669_27386[(1)] = (2));


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
var statearr_26671_27387 = state_26656__$1;
(statearr_26671_27387[(1)] = (8));

} else {
var statearr_26672_27388 = state_26656__$1;
(statearr_26672_27388[(1)] = (9));

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
var statearr_26675_27389 = state_26656__$1;
(statearr_26675_27389[(2)] = inst_26650);

(statearr_26675_27389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26657 === (10))){
var inst_26640 = (state_26656[(2)]);
var state_26656__$1 = state_26656;
var statearr_26676_27390 = state_26656__$1;
(statearr_26676_27390[(2)] = inst_26640);

(statearr_26676_27390[(1)] = (7));


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
var statearr_26678_27391 = state_26656__$1;
(statearr_26678_27391[(2)] = null);

(statearr_26678_27391[(1)] = (2));


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
var cljs$core$async$state_machine__25185__auto__ = null;
var cljs$core$async$state_machine__25185__auto____0 = (function (){
var statearr_26679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26679[(0)] = cljs$core$async$state_machine__25185__auto__);

(statearr_26679[(1)] = (1));

return statearr_26679;
});
var cljs$core$async$state_machine__25185__auto____1 = (function (state_26656){
while(true){
var ret_value__25186__auto__ = (function (){try{while(true){
var result__25187__auto__ = switch__25184__auto__(state_26656);
if(cljs.core.keyword_identical_QMARK_(result__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25187__auto__;
}
break;
}
}catch (e26680){var ex__25188__auto__ = e26680;
var statearr_26681_27392 = state_26656;
(statearr_26681_27392[(2)] = ex__25188__auto__);


if(cljs.core.seq((state_26656[(4)]))){
var statearr_26682_27393 = state_26656;
(statearr_26682_27393[(1)] = cljs.core.first((state_26656[(4)])));

} else {
throw ex__25188__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27394 = state_26656;
state_26656 = G__27394;
continue;
} else {
return ret_value__25186__auto__;
}
break;
}
});
cljs$core$async$state_machine__25185__auto__ = function(state_26656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25185__auto____1.call(this,state_26656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25185__auto____0;
cljs$core$async$state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25185__auto____1;
return cljs$core$async$state_machine__25185__auto__;
})()
})();
var state__25275__auto__ = (function (){var statearr_26683 = f__25274__auto__();
(statearr_26683[(6)] = c__25273__auto___27377);

return statearr_26683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25275__auto__);
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
var c__25273__auto___27396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25274__auto__ = (function (){var switch__25184__auto__ = (function (state_26730){
var state_val_26731 = (state_26730[(1)]);
if((state_val_26731 === (7))){
var inst_26726 = (state_26730[(2)]);
var state_26730__$1 = state_26730;
var statearr_26732_27397 = state_26730__$1;
(statearr_26732_27397[(2)] = inst_26726);

(statearr_26732_27397[(1)] = (3));


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
var statearr_26734_27398 = state_26730__$1;
(statearr_26734_27398[(2)] = null);

(statearr_26734_27398[(1)] = (2));


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
var statearr_26736_27399 = state_26730__$1;
(statearr_26736_27399[(1)] = (5));

} else {
var statearr_26737_27400 = state_26730__$1;
(statearr_26737_27400[(1)] = (6));

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
var statearr_26738_27417 = state_26730__$1;
(statearr_26738_27417[(2)] = inst_26713);

(statearr_26738_27417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26731 === (6))){
var inst_26687 = (state_26730[(7)]);
var inst_26715 = inst_26687.length;
var inst_26716 = (inst_26715 > (0));
var state_26730__$1 = state_26730;
if(cljs.core.truth_(inst_26716)){
var statearr_26739_27418 = state_26730__$1;
(statearr_26739_27418[(1)] = (15));

} else {
var statearr_26740_27419 = state_26730__$1;
(statearr_26740_27419[(1)] = (16));

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
var statearr_26742_27420 = state_26730__$1;
(statearr_26742_27420[(2)] = inst_26724);

(statearr_26742_27420[(1)] = (7));


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
var statearr_26745_27421 = state_26730__$1;
(statearr_26745_27421[(2)] = null);

(statearr_26745_27421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26731 === (9))){
var inst_26688 = (state_26730[(8)]);
var inst_26699 = cljs.core.keyword_identical_QMARK_(inst_26688,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_26730__$1 = state_26730;
var statearr_26746_27422 = state_26730__$1;
(statearr_26746_27422[(2)] = inst_26699);

(statearr_26746_27422[(1)] = (10));


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
var statearr_26748_27423 = state_26730__$1;
(statearr_26748_27423[(1)] = (8));

} else {
var statearr_26749_27424 = state_26730__$1;
(statearr_26749_27424[(1)] = (9));

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
var statearr_26751_27425 = state_26730__$1;
(statearr_26751_27425[(2)] = null);

(statearr_26751_27425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26731 === (16))){
var state_26730__$1 = state_26730;
var statearr_26752_27426 = state_26730__$1;
(statearr_26752_27426[(2)] = null);

(statearr_26752_27426[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26731 === (10))){
var inst_26701 = (state_26730[(2)]);
var state_26730__$1 = state_26730;
if(cljs.core.truth_(inst_26701)){
var statearr_26753_27427 = state_26730__$1;
(statearr_26753_27427[(1)] = (11));

} else {
var statearr_26754_27428 = state_26730__$1;
(statearr_26754_27428[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26731 === (18))){
var inst_26720 = (state_26730[(2)]);
var state_26730__$1 = state_26730;
var statearr_26755_27429 = state_26730__$1;
(statearr_26755_27429[(2)] = inst_26720);

(statearr_26755_27429[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26731 === (8))){
var inst_26696 = (state_26730[(13)]);
var state_26730__$1 = state_26730;
var statearr_26756_27430 = state_26730__$1;
(statearr_26756_27430[(2)] = inst_26696);

(statearr_26756_27430[(1)] = (10));


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
var cljs$core$async$state_machine__25185__auto__ = null;
var cljs$core$async$state_machine__25185__auto____0 = (function (){
var statearr_26757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26757[(0)] = cljs$core$async$state_machine__25185__auto__);

(statearr_26757[(1)] = (1));

return statearr_26757;
});
var cljs$core$async$state_machine__25185__auto____1 = (function (state_26730){
while(true){
var ret_value__25186__auto__ = (function (){try{while(true){
var result__25187__auto__ = switch__25184__auto__(state_26730);
if(cljs.core.keyword_identical_QMARK_(result__25187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25187__auto__;
}
break;
}
}catch (e26758){var ex__25188__auto__ = e26758;
var statearr_26759_27431 = state_26730;
(statearr_26759_27431[(2)] = ex__25188__auto__);


if(cljs.core.seq((state_26730[(4)]))){
var statearr_26760_27432 = state_26730;
(statearr_26760_27432[(1)] = cljs.core.first((state_26730[(4)])));

} else {
throw ex__25188__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25186__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27433 = state_26730;
state_26730 = G__27433;
continue;
} else {
return ret_value__25186__auto__;
}
break;
}
});
cljs$core$async$state_machine__25185__auto__ = function(state_26730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25185__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25185__auto____1.call(this,state_26730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25185__auto____0;
cljs$core$async$state_machine__25185__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25185__auto____1;
return cljs$core$async$state_machine__25185__auto__;
})()
})();
var state__25275__auto__ = (function (){var statearr_26761 = f__25274__auto__();
(statearr_26761[(6)] = c__25273__auto___27396);

return statearr_26761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25275__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
