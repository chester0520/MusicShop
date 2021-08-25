<template lang="pug">
#Userinfo
  .container
    q-breadcrumbs.q-my-lg
      q-breadcrumbs-el(icon="home" to="/")
      q-breadcrumbs-el(label="會員專區" to="/userinfo")
    .row
      .col-2
        q-list.q-mx-md(bordered)
          q-item
            q-item-section
              router-link(to='/userinfo/personal') 個人資料
          q-item
            q-item-section
              router-link(to='/userinfo/order') 訂單查詢
          //- q-item
          //-   q-item-section
          //-     router-link(to='/userinfo/service') 聯絡客服
      .col
        router-view
</template>
