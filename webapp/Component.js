<<<<<<< Upstream, based on 0b26a0d1af06b8c43aa822a53ec2d95d60ac906b
/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "devdemo/devdemo/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("devdemo.devdemo.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);
=======
sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"devdemodevdemo/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("devdemodevdemo.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});
>>>>>>> 082c878 Commit from WEBIDE
