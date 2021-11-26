sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough.App", {
        onInit: function () {
            // det the data model on the view
            var oData = {
                recipient: {
                    name: "UI5"
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
            //set i18 model
            var i18nModel = new ResourceModel({
                bundleName: "sap.ui.walkthrough. i18n.i18n",
                supportedLocales: ["en"],
                fallbaskLocale:""
            });
            this.getView().setModel(i18nModel, "i18n")  
                    },
        onShowHello: function () {
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient])
            //show message
            MessageToast.show(sMsg);
        }
    });
});