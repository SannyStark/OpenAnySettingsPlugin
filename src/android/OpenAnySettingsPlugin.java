package com.sanny.openanysettings;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.LOG;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

import android.content.Intent;
import android.provider.Settings;

public class OpenAnySettingsPlugin extends CordovaPlugin {

	@Override
	public boolean execute(String action, final JSONArray args,
			final CallbackContext callbackContext) throws JSONException {
		
		String intentString = Settings.ACTION_SETTINGS;
		if(action.equals("openWiFiSettings")) {
			intentString = Settings.ACTION_WIFI_SETTINGS;
		} else if(action.equals("openSecuritySettings")){
			intentString = Settings.ACTION_SECURITY_SETTINGS;
		}

		try {
			String value = args.getString(0);

			if (value.equalsIgnoreCase("TRUE")) {
				this.cordova.getActivity().startActivity(
						new Intent(intentString));
			} else {
				LOG.e("OpenSettingPage", "Unable to open settings ["+intentString+"]");
			}
			callbackContext.sendPluginResult(new PluginResult(
					PluginResult.Status.OK));

		} catch (JSONException ex) {
			callbackContext.sendPluginResult(new PluginResult(
					PluginResult.Status.JSON_EXCEPTION));
		}
		return true;
	}
}
