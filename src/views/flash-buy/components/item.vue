<template>
  <div class="item">
    <img :src="item.img" alt="" />
    <div class="element">
      <div class="name">{{ item.name }}</div>
      <div class="txt">{{ item.txt }}</div>
      <div class="money">
        <div class="nowmoney">{{ item.nowmoney }}元</div>
        <div class="oldmoney">{{ item.oldmoney }}元</div>
      </div>
      <div class="percent">
        <div style="width: 150px">
          <div
            class="percent-num"
            :style="{ width: (item.buy_num / item.num) * 100 + '%' }"
          ></div>
        </div>
        <div class="num">
          {{ ((item.buy_num / item.num) * 100).toFixed(1) }}%
        </div>
      </div>
      <div
        class="to-buy"
        :class="item.active ? 'buy-none' : ''"
        @click="add_buy(item)"
      >
        立马购买
      </div>
      <div class="remind" :class="item.active ? '' : 'buy-none'">提醒我</div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        item:{}
    },
    methods:{
        add_buy(item) {
           
            if(item.buy_num>=1000){
                item.buy_num=1000;
            }else{
                     item.buy_num++;
            }
        },  
    },
    watch:{

    }
}
</script>