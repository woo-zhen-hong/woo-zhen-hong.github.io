// import _ from 'lodash'
// import { Dialog } from 'quasar'

// import config from '../../config'
import { Cookies } from 'quasar'

// let _dbUserListener = null

async function handleLogin ({ email, store }) {
  await store.dispatch('user/login', {
    email
    // rolemap
  })
  // await store.dispatch('user/initUserStores')
}

// function removeDbListener () {
//   // 移除監聽自己的個人資料異動
//   if (_dbUserListener) {
//     _dbUserListener()
//     _dbUserListener = null
//   }
// }

// function checkRoles ({ db, store }) {
//   return new Promise((resolve, reject) => {
//     db.collection('rolemap').where('permission', '==', true).get().then(async (doc) => {
//       if (doc.exists) {
//       }
//     })
//     firebase.auth().currentUser.getIdTokenResult()
//       .then((idTokenResult) => {
//         const { claims = {} } = idTokenResult
//         const { roleMap = {} } = claims
//         const sellers = _.keys(roleMap.sellersMap)
//         const bosses = _.keys(roleMap.bossesMap)
//         const leaders = _.keys(roleMap.leadersMap)
//         const staffs = _.keys(roleMap.staffsMap)
//         // 如果全沒有
//         if (
//           roleMap.isAdmin === false &&
//           roleMap.isSeller === false &&
//           sellers.length === 0 &&
//           bosses.length === 0 &&
//           leaders.length === 0 &&
//           staffs.length === 0
//         ) {
//           reject()
//           return
//         }
//         let hasRole = false
//         if (roleMap.isAdmin) {
//           hasRole = true
//         }
//         if (roleMap.isSeller) {
//           hasRole = true
//         }
//         // 「選擇店家」還沒回來時，先判斷可不可以進來
//         if (!store.state.user.activeStore) {
//           if (bosses.length !== 0 || leaders.length !== 0 || staffs.length !== 0) {
//             hasRole = true
//           }
//         }
//         // 如果有選擇店家
//         if (store.state.user.activeStore) {
//           const activeStoreId = store.state.user.activeStore.id
//           // 是否為此間店的老闆
//           if (_.indexOf(bosses, activeStoreId) !== -1) {
//             hasRole = true
//           }
//           // 是否為此間店的店長
//           if (_.indexOf(leaders, activeStoreId) !== -1) {
//             hasRole = true
//           }
//           // 是否為此間店的店員
//           if (_.indexOf(staffs, activeStoreId) !== -1) {
//             hasRole = true
//           }
//         }
//         if (!hasRole) {
//           reject()
//           return
//         }
//         resolve()
//       })
//   })
// }

// async function handleAuthStateChangedLogin ({ db, mail, rolemap, store, currentRouterName, router }) {
//   try {
//     await checkRoles({ db, store })
//   } catch {
//     Dialog.create({
//       title: '警告',
//       message: '登入失敗，沒有權限！'
//     })
//     await store.dispatch('user/logout')
//     return
//   }
//   await store.dispatch('user/login', {
//     mail,
//     rolemap
//   })
//   // 如果登入時的頁面為「 需要登入後，才能去的頁面 」，則導到首頁
//   for (let i = 0, length = config.notNeedAuthRouteNames.length; i < length; i = i + 1) {
//     const originalRouteName = config.notNeedAuthRouteNames[i]
//     if (originalRouteName === currentRouterName) {
//       router.push({ name: 'home' })
//       break
//     }
//   }
// }

// function handleAuthStateChangedLogout ({ store, buildI18nRouteName, currentRouterName, router }) {
//   // 如果還沒有登出了，就登出
//   if (store.state.user.isLoggedIn) {
//     store.dispatch('user/logout')
//   }
//   // 如果登出時的頁面為「 需要登入後，才能去的頁面 」，則導到登入頁
//   for (let i = 0, length = config.needAuthRouteNames.length; i < length; i = i + 1) {
//     const originalRouteName = config.needAuthRouteNames[i]
//     const routeName = buildI18nRouteName({
//       name: originalRouteName
//     })
//     if (routeName === currentRouterName) {
//       router.push({ name: buildI18nRouteName({ name: 'login' }) })
//       break
//     }
//   }
//   store.dispatch('user/stopLoging')
// }

// =====================================start====================================
export default ({ app, store, router }) => {
  const __session = Cookies.get('__session') || {}
  const isLoggedIn = __session.isLoggedIn
  const email = __session.email
  // const rolemap = __session.rolemap
  // 如果是有登入的狀態下
  if (isLoggedIn) {
    handleLogin({
      email,
      // rolemap,
      store
    })
    // handleAuthStateChangedLogin({
    //   db: app.db,
    //   mail,
    //   rolemap,
    //   store,
    //   currentRouterName: router.history.current.name,
    //   router
    // })
  }
  // 如果是登出的狀態下
  if (!isLoggedIn) {
    // removeDbListener()
    // handleAuthStateChangedLogout({
    //   store,
    //   buildI18nRouteName: app.buildI18nRouteName,
    //   currentRouterName: router.history.current.name,
    //   router
    // })
  }
}
