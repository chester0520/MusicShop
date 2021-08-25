<template lang="pug">
#Userinfo
  .container
    q-breadcrumbs.q-my-lg
      q-breadcrumbs-el(icon="home" to="/")
      q-breadcrumbs-el(label="會員專區" to="/userinfo")
    .row
      .col-2
        q-list.q-mx-md(bordered)
          q-item(v-ripple clickable :active="link === 'link1'" @click="link = 'link1'" active-class="my-menu-link")
            q-item-section
              router-link(to='/userinfo/personal') 個人資料
          q-item(v-ripple clickable :active="link === 'link2'" @click="link = 'link2'" active-class="my-menu-link")
            q-item-section
              router-link(to='/userinfo/order') 訂單查詢
          q-item(v-ripple clickable :active="link === 'link3'" @click="link = 'link3'" active-class="my-menu-link")
            q-item-section
              router-link(to='/userinfo/service') 聯絡客服
      .col
        router-view
</template>

<script>
export default {
  name: 'Userinfo',
  data () {
    return {
      link: 'link1'
    }
  }
}
</script>
