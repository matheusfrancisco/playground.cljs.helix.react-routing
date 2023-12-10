(ns front.core
  (:require
   ["react" :as r]
   ["react-dom/client" :as rdom]
   ["react-router-dom" :as rrd]
   [front.about :as about]
   [front.code :as code]
   [front.home :as home]
   [helix.core :refer [$ defnc]]))

(defn routes []

  ($ rrd/Switch
     ($ rrd/Route {:path "/" :exact true :element ($ home/home)})
     ($ rrd/Route {:path "/about" :element ($ about/about)})
     ($ rrd/Route {:path "/code/test" :element ($ code/code)})
     ($ rrd/Route {:path "/auth/callback" :element ($ code/callback)})
     ($ rrd/Route {:path "*" :element ($ rrd/Navigate {:to "404"})})))

(defnc providers [{:keys [children]}]
  ($ rrd/BrowserRouter
     children))

(defnc app []
  ($ providers ($ routes)))

(defonce root
  (rdom/createRoot (js/document.getElementById "app")))

(defn render []
  (.render root ($ r/StrictMode ($ app))))

(defn ^:export init [] (render))
