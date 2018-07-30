# React Native QRCode Scanner Sample
A sample project with QRCode scanner for React Native.

This project was built using [react-native-camera](https://github.com/lwansbrough/react-native-camera). This is an improved version of [react-native-qrcode-scanner](https://github.com/moaazsidat/react-native-qrcode-scanner).

### Installation

Run: `npm install`

### iOS

To run on iPhone simulator or device:
- Open Xcode project inside /ios folder. 
- Edit the bundle identifier to a valid Bundle Identifier like com.yourcompany.ReactBarcodeScannerProject.
- In signing section enter a valid team to generate a provisioning certificate. 
- Choose a valid simulator or your devide and press run.

### Android

In node_modules/react-native-camera/android/build.gradle inside android{} object add this:

```
defaultConfig {
  minSdkVersion safeExtGet('minSdkVersion', 16)
  targetSdkVersion safeExtGet('targetSdkVersion', 26)
  multiDexEnabled true
}
```

Inside dependencies{} replace `compileOnly` and `implementation` to `compile` and add this line:

```
compile 'com.android.support:multidex:1.0.0'
```

To run on Android simulator:
- Open the project /android folder in Android Studio.
- Select the app project and click 'Run'
- Choose a valid simulator.

If you're getting problems to run on Android device follow this:

1 - Go to your project directory and check if this folder exists `android/app/src/main/assets`
  - If it exists then delete two files `index.android.bundle` and `index.android.bundle.meta`
  - If the folder assets doesn't exist then create the assets directory there.

2 - From your root project directory do
`cd android && ./gradlew clean`

3 - Finally, navigate back to the root directory and check if there is one single entry file called `index.js`
  - If there is only one file i.e. `index.js` then run following command:
`react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`

  - If there are two files i.e `index.android.js` and `index.ios.js` then run this:
`react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`

4 - Now run the application in Android Studio and choose your device.
