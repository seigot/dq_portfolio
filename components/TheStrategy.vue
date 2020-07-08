<template>
  <section @click="strategyClick">
    <div class="strategy-status" @click="strategyClick">
      <div class="strategy-status-list">
        <ul>
          <li>ガンガンいこうぜ</li>
          <li>かおいろうかがえ</li>
          <li>えいやでやっちゃえ</li>
          <li>こっそりすすめろ</li>
          <li>かせつけんしょうだ</li>
          <li>ツールをつかいこなせ</li>
          <li>ぜんていをうたがえ</li>
          <li>ユーザーめせんで</li>
          <li>いったんおちつけ</li>
          <li>かぞくをゆうせん</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  methods: {
    strategyClick: function() {
      this.$store.commit("setStrategyDisplay", false);
    }
  },
  mounted: function() {
    this.$store.commit("pageChange", 1);
  }
};
</script>

<style>
.strategy-status {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 230px;
  height: 215px;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #fff;
  border-radius: 10px;
  background-color: #000;
}

.strategy-status::before {
  background-color: #000;
  color: #fff;
  content: "さくせん";
  position: relative;
  left: 80px;
  top: -23px;
}

.strategy-status-list {
  position: relative;
  top: -23px;
  text-align: center;
}

.strategy-equipment {
  background-color: #000;
  position: absolute;
  top: 150px;
  left: 0px;
  width: 130px;
  height: 100px;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #fff;
  border-radius: 10px;
}

.strategy-equipment-list {
  text-align: left;
}

.strategy-parameter {
  background-color: #000;
  position: absolute;
  top: 0px;
  left: 170px;
  width: 150px;
  height: 250px;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #fff;
  border-radius: 10px;
}

.strategy-parameter-list {
  text-align: right;
}
</style>
