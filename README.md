# react-qrcode-scanner-sample
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

- To run on Android simulator:
- Open the project /android folder in Android Studio.
- Select the app project and click 'Run'
- Choose a valid simulator.
