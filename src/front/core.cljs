(ns front.core
  (:require
   ["react" :as r]
   ["react-dom/client" :as rdom]
   ["react-router-dom" :as rrd]
   [front.lib.helix :refer [defnc]]
   [helix.core :refer [$ <>]]
   [helix.dom :as dom]))

(defnc layout []
  (<>
   ($ rrd/Outlet)))

(defnc home-page []
  (dom/div "home"))

(defnc code-page []
  (dom/div "code"))

(defnc about-page []
  (dom/div "about"))

(defnc not-found-page []
  (dom/div "not found"))

(defnc app []
  ($ rrd/BrowserRouter
     ($ rrd/Routes
        ($ rrd/Route {:path "/home-page-eg" :element ($ home-page)})
        ($ rrd/Route {:path "code-page-eg" :element ($ code-page)})
        ($ rrd/Route {:path "about-page-eg" :element ($ about-page)})
        ($ rrd/Route {:path "404" :element ($ not-found-page)}))))

(defonce root
  (rdom/createRoot (js/document.getElementById "app")))

(defn render []
  (.render root ($ r/StrictMode ($ app))))

(defn ^:export init [] (render))
