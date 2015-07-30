var cordova = require('cordova');

function OpenAnySettingsPlugin() {
}

// function call used to invoke any settings.
OpenAnySettingsPlugin.prototype.openWiFiSettings = function(value, successCallback,
		failureCallback) {
	return cordova.exec(successCallback, failureCallback,
			'OpenAnySettingsPlugin', "openWiFiSettings", [ value ]);
}

OpenAnySettingsPlugin.prototype.openSecuritySettings = function(value, successCallback,
		failureCallback) {
	return cordova.exec(successCallback, failureCallback,
			'OpenAnySettingsPlugin', "openSecuritySettings", [ value ]);
}


OpenAnySettingsPlugin.install = function () {
	if (!window.plugins) {
		window.plugins = {};
	}

	window.plugins.openanysettingsplugin = new OpenAnySettingsPlugin();
	return window.plugins.openanysettingsplugin;
};

cordova.addConstructor(OpenAnySettingsPlugin.install);