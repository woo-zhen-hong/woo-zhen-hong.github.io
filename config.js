module.exports = {
  // 需要沒登入，才能去的頁面 ( 設定 route name )
  noAuthOnlyRouteNames: [
    'home'
  ],
  publicRouteNames: [],
  // 多國語系
  i18n: {
    // 預設語系
    defaultLocale: 'zh-TW',
    // 當找不到語系資料，採用的語系
    fallbackLocale: 'zh-TW',
    languageMap: {
      'en-US': 'English',
      'zh-TW': '繁體中文'
    },
    // https://github.com/firebase/firebaseui-web/blob/master/LANGUAGES.md
    mapFirebaseI18n: {
      'en-US': 'en',
      'zh-TW': 'zh_tw'
    }
  }
}
