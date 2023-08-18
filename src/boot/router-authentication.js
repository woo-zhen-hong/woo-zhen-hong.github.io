import config from '../../config'

export default ({ router, store, redirect }) => {
  // console.log('\n===== boot/router-authentication default start =====')
  const needAuthRouteNames = config.needAuthRouteNames
  // 2021.10.14: 原有 notAuthRouteNames 改名noAuthOnlyRouteNames
  // const notNeedAuthRouteNames = config.noAuthOnlyRouteNames
  const noAuthOnlyRouteNames = config.noAuthOnlyRouteNames
  router.beforeEach((to, from, next) => {
    const isLoggedIn = store.state.user.isLoggedIn
    // 已經登入時
    if (isLoggedIn) {
      // 將登入後不能去的頁面，導回首頁 --2021.10.14:登入後不能去的頁面改為判斷是否為publicRouteNames，不是publicRouteNames不律給進
      // 目前看這段覺得應該是判斷是否符合語系而不是判斷是否需要登入才能進（整個router-authentication都是在判斷語系）
      for (let i = 0, length = noAuthOnlyRouteNames.length; i < length; i = i + 1) {
        const originalRouteName = noAuthOnlyRouteNames[i]
        // 如果有匹配到
        if (originalRouteName === to.name) {
          redirect('/')
          next()
          return
        }
      }
    }
    // 沒有登入時
    if (!isLoggedIn) {
      // 將需要登入後才能去的頁面，導到 login 頁面
      for (let i = 0, length = needAuthRouteNames.length; i < length; i = i + 1) {
        const originalRouteName = needAuthRouteNames[i]
        // 如果有匹配到
        if (originalRouteName === to.name) {
          redirect('/login')
          next()
          return
        }
      }
    }
    next()
  })
  // console.log('===== boot/router-authentication default end =====\n')
}
