sap.ui.define([
    "sap/ui/core/UIComponent",
    "facturas/model/Model",
    "sap/ui/model/resource/ResourceModel"
], function(UIComponent, Model, ResourceModel) {
    
    return UIComponent.extend("facturas.Component", {

            metadata:{

                manifest: "json"

                // "rootView": {
                //     "viewName": "facturas.view.App",
                //     "type": "XML",
                //     "async": true,
                //     "id": "App"
                //   }
            },

        init: function(){
            UIComponent.prototype.init.apply(this,arguments)

            this.setModel(Model.createRecipient());

            var i18nModel = new ResourceModel({bundleName: "facturas.i18n.i18n"});
            this.setModel(i18nModel, "i18n");
        }
    });
    
});