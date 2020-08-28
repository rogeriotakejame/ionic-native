/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name Google Sign In
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { GoogleSignIn } from '@ionic-native/google-sign-in';
 *
 *
 * constructor(private googleSignIn: GoogleSignIn) { }
 *
 * ...
 *
 *
 * this.googleSignIn.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'GoogleSignIn',
  plugin: 'cordova-plugin-googlesignin', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.GoogleSignIn', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/rogeriotakejame/cordova-plugin-googlesignin.git', // the github repository URL for the plugin
  install: 'ionic cordova plugin add cordova-plugin-googlesignin', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class GoogleSignIn extends IonicNativePlugin {

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  /*@Cordova()
  coolMethod(arg1: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }*/
  @Cordova()
  getLastSignedInAccount(): Promise<any> {
    return;
  }
  @Cordova()
  signIn(options:{signInMode:string,scopes:string[],webClientId?:string}): Promise<any> {
    return;
  }
  @Cordova()
  silentSignIn(options:{signInMode:string,scopes:string[],webClientId?:string}): Promise<any> {
    return;
  }
  @Cordova()
  signOut(): Promise<any> {
    return;
  }
  @Cordova()
  revokeAccess(): Promise<any> {
    return;
  }
  @Cordova()
  isGooglePlayServicesAvailable(): Promise<any> {
    return;
  }
}
