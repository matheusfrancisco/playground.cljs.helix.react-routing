(ns front.about 
  (:require
   [front.lib.helix :refer [defnc]]
   [helix.dom :as dom]))

(defnc about []
  (dom/div "about"))
