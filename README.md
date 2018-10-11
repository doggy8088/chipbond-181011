## 安裝 OpenSSH

### Windows

1. 安裝 [Chocolatey](https://chocolatey.org/install)
2. `choco install openssh`

### Mac

1. 安裝 [Homebrew](https://brew.sh)
2. `brew install openssh`

## 安裝 Ionic Pro Error Monitoring 相關準備套件

```shell
ionic cordova plugin add cordova-plugin-ionic --variable APP_ID={APP_ID} --variable CHANNEL_NAME=master
npm install cordova-plugin-ionic@latest @ionic/app-scripts@latest @ionic/pro@latest rxjs-compat
```

## 推薦安裝套件

[Ionic v4 Snippets](https://marketplace.visualstudio.com/items?itemName=fivethree.vscode-ionic-snippets)

## Ionic Migration Guide

https://beta.ionicframework.com/docs/building/migration/