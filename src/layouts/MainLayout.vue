<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { firebaseDb } from 'boot/firebase'
export default {
  name: 'MainLayout',
  components: {},
  data () {
    return {
    }
  },
  watch: {
  },
  computed: {
  },
  methods: {
  },
  async mounted () {
  }
}
</script>
