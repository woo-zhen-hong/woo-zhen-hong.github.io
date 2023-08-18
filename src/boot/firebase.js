import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

import config from '../../.config'

const firebaseConfig = config.firebaseConfig
// eslint-disable-next-line no-unused-vars
let firebaseApp = null
// let firebaseAuth = null
let firebaseDb = null

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(firebaseConfig)
  // firebaseAuth = firebaseApp.auth()
  firebaseDb = firebase.firestore()
} else {
  firebaseApp = firebase.app() // if already initialized, use that one
  // firebaseAuth = firebaseApp.auth()
  firebaseDb = firebase.firestore()
}
// const firebaseApp = firebase.initializeApp(firebaseConfig)

export { firebaseDb }
// export { firebaseAuth, firebaseDb }

// export const firebaseApp = firebase.initializeApp(firebaseConfig)
// export const db = firebase.firestore()
// export const storage = firebase.storage()
//
// Vue.prototype.firebase = firebase
// Vue.prototype.firebaseApp = firebaseApp
// Vue.prototype.db = db
// Vue.prototype.storage = storage
//
// export default ({ app }) => {
//   app.firebase = firebase
//   app.firebaseApp = firebaseApp
//   app.db = db
//   app.storage = storage
// }
