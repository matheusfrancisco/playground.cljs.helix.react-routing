(ns front.home
  (:require
   [front.lib.helix :refer [defnc]]
   [helix.dom :as dom]))

(defnc home []
  (dom/div
   "Home"
   (dom/div
    "This is a div")
   (dom/button
    {:onClick #(js/alert "Hello World")} "go to about")))

