<template>
  <q-page class="flex flex-center">
    <q-table
      title="紀錄"
      :data="props"
      :columns="columns"
      row-key="name"
      binary-state-sort
    >
      <template v-slot:body="props">
        <q-tr v-if="!props.row.isDeleted" :props="props">
          <q-td key="isDeleted" :props="props">
            <q-chip
              v-if="!props.row.isDeleted"
              clickable
              square
              size="md"
              color="primary"
              text-color="white"
              @click="deleted(props.row)"
            >
              刪除
            </q-chip>
          </q-td>
          <!-- 名稱 -->
          <q-td key="name" :props="props">{{ props.row.name }}
          </q-td>
          <!-- 日期 -->
          <q-td key="expDate" :props="props">
            {{ props.row.expDate }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <br>
    <br>
    <router-link
      :to="{
        name: 'home'
      }"
    >
      <q-chip
        class="active"
      >
        回上一頁
      </q-chip>
    </router-link>
  </q-page>
</template>

<style>
.active {
  background-color: rgb(71, 191, 221);
  cursor: pointer;
}
</style>

<script>
import { firebaseDb } from 'boot/firebase'
export default {
  name: 'Home',
  data () {
    return {
      props: [],
      columns: [{
        name: 'isDeleted',
        classes: 'bg-red text-white ellipsis',
        headerClasses: 'bg-primary text-white',
        label: '操作',
        align: 'center'
      }, {
        name: 'name',
        classes: 'bg-red text-white ellipsis',
        headerClasses: 'bg-primary text-white',
        label: '名稱',
        align: 'center'
      }, {
        name: 'expDate',
        classes: 'bg-red text-white ellipsis',
        headerClasses: 'bg-primary text-white',
        sortable: true,
        label: '到期日',
        align: 'center'
      }]
    }
  },
  methods: {
    async showList () {
      try {
        this._dbVmActoionListener = await firebaseDb.collection('record')
          .onSnapshot(async (doc) => {
            const list = []
            for (let i = 0, length = doc.docs.length; i < length; i = i + 1) {
              const track = doc.docs[i].data()
              track.id = doc.docs[i].id
              list.push(track)
            }
            this.props = list
          })
      } catch (err) {
        console.log(err)
      }
    },
    async deleted (val) {
      const id = val.id
      try {
        // 刪除某個紀錄
        await firebaseDb.collection('record').doc(id).set({
          isDeleted: 1
        }, { merge: true })
        this.$q.notify({
          color: 'positive',
          icon: 'check_circle',
          message: '資料存檔成功'
        })
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
  mounted () {
    this.showList()
  }
}
</script>
