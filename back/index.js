sap.ui.define([
    // "sap/ui/core/mvc/XMLView"
    "sap/ui/core/ComponentContainer"
],
    function (ComponentContainer) {
        "use strict";

        new ComponentContainer({
            name: "sap.ui.demo.walkthrough",
            settings: {
                id: "walkthrough"
            },
            async: true
        }).placeAt("content");
    });