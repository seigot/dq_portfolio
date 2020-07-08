<template>
  <section @click="strengthClick">
    <div class="profile-status">
      <div class="profile-status-list">
        <ul>
          <li>ぱぱえんじにあ</li>
          <li>せいべつ：おとこ</li>
          <li>レベル：４４</li>
          <li>ＨＰ：２３</li>
          <li>ＭＰ：９９９</li>
        </ul>
      </div>
    </div>
    <div class="profile-equipment">
      <div class="profile-equipment-list">
        <ul>
          <li>E まっくぶっく</li>
          <li>E airPods</li>
          <li>E ぽろしゃつ</li>
          <li>E じーぱん</li>
          <li>E くさいすにーか</li>
        </ul>
      </div>
    </div>
    <div class="profile-parameter">
      <div class="profile-parameter-list">
        <ul>
          <li>こうどう力：２０</li>
          <li>もうそう力：２５０</li>
          <li>うんのよさ：９０</li>
          <li>ろんりてき：５５</li>
          <li>えいご：７０</li>
          <li>ぶんせき力：４２</li>
          <li>がまんづよさ：３</li>
          <li>けつだん力：３９</li>
          <li>くらうど：２００</li>
          <li>あじゃいる：１５０</li>
          <li>Ex：２００００４</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  methods: {
    strengthClick: function() {
      this.$store.commit("setStrengthDisplay", false);
    }
  },
  mounted: function() {
    this.$store.commit("pageChange", 1);
  }
};
</script>

<style>
.profile-status {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 130px;
  height: 115px;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #fff;
  border-radius: 10px;
  background-color: #000;
}

.profile-status::before {
  background-color: #000;
  color: #fff;
  content: "わたなへ";
  position: relative;
  left: 37px;
  top: -23px;
}

.profile-status-list {
  position: relative;
  top: -23px;
  text-align: center;
}

.profile-equipment {
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

.profile-equipment-list {
  text-align: left;
}

.profile-parameter {
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

.profile-parameter-list {
  text-align: right;
}
</style>
