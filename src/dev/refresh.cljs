(ns dev.refresh
  "A place to add preloads for developer tools!"
  (:require [front.core :as app]
            [helix.experimental.refresh :as r]))

;; inject-hook! needs to run on application start.
;; For ease, we run it at the top level.
;; This function adds the react-refresh runtime to the page
(r/inject-hook!)

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defn ^:dev/after-load refresh []
  (r/refresh!))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defn ^:dev/after-load clear-cache-and-render! []
  (app/render))
