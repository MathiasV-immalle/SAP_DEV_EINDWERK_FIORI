/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"ap/be/Eindwerk_MathiasV/test/integration/PhoneJourneys"
	], function() {
		QUnit.start();
	});
});