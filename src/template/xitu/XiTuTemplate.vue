<template>
  <div id="xitu-c">
    <div class="adv-xitu-container">
      <a class="adv-link">

      </a>
    </div>
    <div class="xitu-list-content">
      <div class="xitu-list-header">
        <ul class="xitu-header-ul">
          <li class="xitu-header-item">
            名称
          </li>
          <li class="xitu-header-item xitu-header-item-guige">
            规格
          </li>
          <li class="xitu-header-item xitu-header-item-max">
            <span>最高价格</span><br/><span>(元)</span>
          </li>
          <li class="xitu-header-item xitu-header-item-max">
            <span>最低价格</span><br/><span>(元)</span>
          </li>
          <li class="xitu-header-item xitu-header-item-normal">
            均价(元)
          </li>
          <li class="xitu-header-item xitu-header-item-normal">
            单位
          </li>
          <li class="xitu-header-item xitu-header-item-normal">
            跌涨(%)
          </li>
          <li class="xitu-header-item xitu-header-item-endtime">
            更新时间
          </li>
        </ul>
      </div>
      <div class="xitu-list-detail">
        <div class="xitu-detail-item-container" v-for="item in priceList" @click="goPriceDetailPage(item.id)">
          <ul class="xitu-detail-item-ul">
            <li class="xitu-detail-item">
              {{item.name}}
            </li>
            <li class="xitu-detail-item xitu-detail-item-guige ">
              {{item.specifications}}
            </li>
            <li class="xitu-detail-item xitu-detail-item-max">
              {{item.max_quote}}
            </li>
            <li class="xitu-detail-item xitu-detail-item-max">
              {{item.min_quote}}
            </li>
            <li class="xitu-detail-item xitu-detail-item-max" :class="{'up':item.flag==='up','down':item.flag==='down' }">
              {{item.avg_quote}}
            </li>
            <li class="xitu-detail-item xitu-detail-item-max">
              {{item.unit}}
            </li>
            <li class="xitu-detail-item xitu-detail-item-max" :class="{'up':item.flag==='up','down':item.flag==='down' }">
              {{item.change}}
            </li>
            <li class="xitu-detail-item xitu-detail-item-endtime">
              {{item.quote_date}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
      props:[
          'priceList'
      ],
      methods:{
        /**
         * 跳转到对应稀土行情的详情页
         * @param name
         */
        goPriceDetailPage(name){
          this.$router.push({path: `/pricedetail/${name}`, replace: true});
        },
      }
  }
</script>
