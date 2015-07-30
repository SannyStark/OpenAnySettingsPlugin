var cordova = require('cordova');

function OpenAnySettingsPlugin() {
}

// function call used to invoke any settings.
OpenAnySettingsPlugin.prototype.openWiFiSettings = function(successCallback,
		failureCallback) {
	return cordova.exec(successCallback, failureCallback,
			'OpenAnySettingsPlugin', "openWiFiSettings", []);
}

OpenAnySettingsPlugin.prototype.openSecuritySettings = function(successCallback,
		failureCallback) {
	return cordova.exec(successCallback, failureCallback,
			'OpenAnySettingsPlugin', "openSecuritySettings", []);
}


OpenAnySettingsPlugin.install = function () {
	if (!window.plugins) {
		window.plugins = {};
	}

	window.plugins.openanysettingsplugin = new OpenAnySettingsPlugin();
	return window.plugins.openanysettingsplugin;
};

cordova.addConstructor(OpenAnySettingsPlugin.install);