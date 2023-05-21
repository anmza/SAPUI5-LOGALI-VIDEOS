
    sap.ui.define([
        "sap/ui/core/ComponentContainer"
    ],
    /**
     * 
     * @param {typeof sap.ui.core.ComponentContainer}   ComponentContainer 
     */
    function(ComponentContainer) {
        
        new ComponentContainer ({

            name:"facturas",
            settings:{
                id:"facturas"
            },
            async: true
        }).placeAt("content");

        
        
    });