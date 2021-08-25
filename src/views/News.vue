<template lang="pug">
#News
  .container
    q-breadcrumbs.q-my-lg
      q-breadcrumbs-el(icon="home" to="/")
      q-breadcrumbs-el(label="最新消息")
  .container
    .col-xs-12.col-sm-8.col-md-6(v-for="new1 in news")
      q-card.q-pa-lg.newsCard
        q-card-section.q-mr-lg(style="width: 30%;height: 100%;")
          q-img(:src="new1.image")(style="height: 100%;")
        q-card-section(style="width: 70%;")
          h4.q-my-md {{ new1.title }}
          p.text {{ new1.text }}
          p.date 刊登日期:{{ new1.date }}
</template>

<script>
export default {
  data () {
    return {
      news: [],
      columns: [
        { name: 'date', field: 'date', align: 'center', label: '刊登日期' },
        { name: 'image', field: 'image', align: 'center', label: '圖片' },
        { name: 'title', field: 'title', align: 'center', label: '標題' },
        { name: 'text', field: 'text', align: 'center', label: '內容' },
        { name: 'post', field: 'post', align: 'center', label: '刊登' },
        { name: 'action', field: 'action', align: 'center', label: '設定' }
      ],
      pagination: {
        sortBy: 'date',
        descending: false,
        page: 1,
        rowsPerPage: 10
      },
      form: {
        title: '',
        text: '',
        image: null,
        post: true,
        date: '',
        _id: ''
      }
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/news', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.news = data.result.map(news => {
        if (news.image) {
          news.image = `http://${process.env.VUE_APP_FTPHOST}/${process.env.VUE_APP_FTPUSER}/專題/${news.image}`
        }
        news.date = new Date(news.date).toLocaleDateString()
        return news
      })
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得最新消息失敗'
      })
    }
  }
}
</script>
