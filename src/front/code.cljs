(ns front.code
  (:require
   [front.lib.helix :refer [defnc]]
   [helix.dom :as dom]))

(defnc code []
  (dom/div "code"))

(defnc callback []
  (dom/div "callback"))
