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

## 手動把資料送到 Ionic Pro Monitor 的方法

https://ionicframework.com/docs/pro/monitoring/#manual-capture-using-the-monitoring-api

## Ionic Migration Guide

https://beta.ionicframework.com/docs/building/migration/

## Reorder 參考程式

HTML
```html
  <ion-list>
    <ion-reorder-group disabled="false" (ionItemReorder)="reorder($event)">
      <ion-item *ngFor="let item of list">
        <ion-label>Item {{ item }}</ion-label>
        <ion-reorder>
          <ion-icon name="hand"></ion-icon>
        </ion-reorder>
      </ion-item>
    </ion-reorder-group>
  </ion-list>
```

TypeScript
```typescript
  list = [1, 3, 5, 7, 9];
  reorder(event) {
    console.log(event.detail);
  }
```