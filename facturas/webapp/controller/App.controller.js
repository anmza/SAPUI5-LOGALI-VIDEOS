sap.ui.define([
   
    "sap/m/MessageToast",
    "sap/ui/core/mvc/Controller",
    

], function(MessageToast, Controller, Model, ResourceModel) {
    'use strict';

    return Controller.extend("facturas.controller.App",{

        onInit: function(){

            

        },

        onShowHello: function(){

            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg",[sRecipient]);
            MessageToast.show(sMsg);
        }
    });
    
});