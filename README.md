# react-qrcode-scanner-sample
A sample project with QRCode scanner for React Native.

This project was built using [react-native-camera](https://github.com/lwansbrough/react-native-camera). This is an improved version of [react-native-qrcode-scanner](https://github.com/moaazsidat/react-native-qrcode-scanner)

## Android

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
