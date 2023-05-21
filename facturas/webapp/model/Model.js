sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function(JSONModel) {
    'use strict';
    return{
        createRecipient:function(){

            var oData = {
                recipient:{
                    name:""
                }
            };
            return new JSONModel(oData);
        }
    };
});