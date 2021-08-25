<template lang="pug">
#Admin
  .container
    .row
      .col-2
        .q-pa-md
          q-list(bordered)
            q-item
              q-item-section
                router-link(to='/admin/AdminNews') 最新消息管理
            q-item
              q-item-section
                router-link(to='/admin/AdminProducts') 商品管理
            q-item
              q-item-section
                router-link(to='/admin/AdminOrders') 訂單處理
      .col
        router-view
</template>
