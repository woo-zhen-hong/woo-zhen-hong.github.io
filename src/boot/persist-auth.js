// https://quasar.dev/quasar-plugins/cookies
import { Cookies } from 'quasar'

export default async ({ app, store, ssrContext }) => {
  const cookies = Cookies.parseSSR(ssrContext)
  const __session = cookies.get('__session') || {}
  const { isLoggedIn, email, rolemap } = __session
  // if (!isLoggedIn) {
  //   store.dispatch('user/logout')
  //   return
  // }
  if (isLoggedIn) {
    try {
      await store.dispatch('user/login', {
        email,
        rolemap,
        source: 'persistAuah'
      })
      // await store.dispatch('user/initUserStores', {
      //   email,
      //   rolemap
      // })
    } catch (error) {
      if (error.isHandled) {
        return
      }
      store.dispatch('user/logout')
      delete __session.idToken
      cookies.set('__session', __session, { path: '/' })
    }
  }
}
