OpenAnySettingsPlugin
======
OpenAnySettings opens your apps settings in cordova aplication

## Installation
```
cordova plugin add com.sanny.openanysettings
```

## Support
Android


## Usage

```javascript
// open wi-fi manager settings
window.plugins.openanysettingsplugin.openWiFiSettings(true);

// open security settings
window.plugins.openanysettingsplugin.openSecuritySettings(true);

// Use cordova device plugin to check for iOs 8
// cordova plugin add org.cordova.plugin.device
if(device.platform === 'iOS' && device.version > 8) {
	window.plugins.openanysettingsplugin.openWiFiSettings();
}
```


