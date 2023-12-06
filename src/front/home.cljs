(ns front.home
  (:require
   [front.lib.helix :refer [defnc]]
   [helix.dom :as dom]
   [react-router-dom :as rrd]
   [shadow.markup.react :refer [$]]))

(defnc home []
  (dom/div
   "Home"
   (dom/div
    "This is a div")
   (dom/button
    {:onClick #()} "go to callback")))

