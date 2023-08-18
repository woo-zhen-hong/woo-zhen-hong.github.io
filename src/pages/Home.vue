<template>
  <q-page class="flex flex-center">
  <div>
    <div style="max-width: 300px">
      <div>
        <p>請輸入名稱：</p>
        <!-- equivalent -->
        <q-input color="orange" filled v-model="text" label="名稱">
          <template v-if="text" v-slot:append>
            <q-icon name="cancel" @click.stop="text = null" class="cursor-pointer" />
          </template>
        </q-input>
        <div class="q-pa-md">
          <div class="q-gutter-md row items-start">
            <q-date v-model="date" />
          </div>
        </div>
        <div>
          <div>
            <router-link
              :to="{
                name: 'list'
              }"
            >
              <q-chip
                class="active"
              >
                查看所有紀錄
              </q-chip>
            </router-link>
          </div>
          <q-chip
            :disable="text ? false : true"
            dense
            size="30px"
            clickable
            @click="submit"
          >
            送出
          </q-chip>
        </div>
      </div>
      <div>
      </div>
    </div>
  </div>
  </q-page>
</template>

<style>
.active {
  background-color: rgb(71, 191, 221);
  cursor: pointer;
}
</style>

<script>
import { date } from 'quasar'
import { firebaseDb } from 'boot/firebase'
export default {
  name: 'Home',
  data () {
    return {
      text: '',
      now: new Date().getTime(),
      date: date.formatDate(+new Date(), 'YYYY/MM/DD')
    }
  },
  methods: {
    async submit () {
      const now = this.now.toString()
      const date = this.date
      const text = this.text
      try {
        // 將資訊存入 firestore 資訊內
        await firebaseDb.collection('record').doc(now).set({
          name: text,
          expDate: date,
          isDeleted: 0
        }, { merge: true })
        this.$q.notify({
          color: 'positive',
          icon: 'check_circle',
          message: '資料存檔成功'
        })
        this.text = ''
      } catch (err) {
        console.log(err)
        this.$q.notify({
          title: '警告',
          type: 'warning',
          message: '資料存檔失敗'
        })
      }
    }
  },
  mounted(){
  }
}
</script>