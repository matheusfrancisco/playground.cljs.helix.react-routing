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

(defn routes []
  ($ rrd/Routes
     ($ rrd/Route {:path "/" :element ($ layout)}
        ($ rrd/Route {:index true :element ($ home-page)})
        ($ rrd/Route {:path "code" :element ($ code-page)})
        ($ rrd/Route {:path "about" :element ($ about-page)})
        ($ rrd/Route {:path "404" :element ($ not-found-page)}))
     ($ rrd/Route {:path "*" :element ($ rrd/Navigate {:to "/"})})))

(defnc app []
  ($ rrd/BrowserRouter ($ routes)))

(defonce root
  (rdom/createRoot (js/document.getElementById "app")))

(defn render []
  (.render root ($ r/StrictMode ($ app))))

(defn ^:export init [] (render))
