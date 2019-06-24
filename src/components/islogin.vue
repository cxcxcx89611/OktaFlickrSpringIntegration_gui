<template>
  <div>
    <div style="text-align: center; padding: 10px; border-bottom: 1px solid gainsboro">
      <span>please input the key word you want to search: </span>
      <el-input style="width: 200px;" v-model="name"/>
      <el-button @click="search">search</el-button>
    </div>
    <div>
      <div v-if="data.length > 0">
        <img v-for="item in data" :src="item.data" style=" width: 200px; height: 200px; padding: 10px; "/>
      </div>
      <div v-else style="margin: 0 auto; padding: 40px; text-align: center">
        no more content to be displayed
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: "",
        data: [

        ]
      }
    },
    methods: {
      search() {
        const reqServer = this.$axios.create({
          baseURL: "https://localhost:8443", // api 的 base_url
          timeout: 100000,
        })
        const s = reqServer({
          url: `/search?name=${this.name}`,
          method: 'get',
        })
        s.then(res => {
          console.log(res.data.data)
        })
        console.log(s)
      }
    }
  }
</script>

<style scoped>

</style>
