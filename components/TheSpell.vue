<template>
  <section @click="spellClick">
    <div class="spells-menu">
      <div class="spells-menu-list">
        <ul>
          <li
            v-for="(spell, index) in spellsList"
            v-on:mouseleave="spellsMouseleave(index)"
            v-on:mouseover="spellsMouseover(index)"
            :key="spell.name+index"
          >
            <a class="spell-cursor" v-if="spellsChoice==index">▶</a>
            <a v-if="spell.id==1" onclick="lilemito()">{{spell.name}}</a>
            <a v-else-if="spell.id==2" v-on:click="zaki()">{{spell.name}}</a>
            <a v-else-if="spell.id==3" v-on:click="parupunte()">{{spell.name}}</a>
            <a v-else>{{spell.name}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="spells-details">
      <div class="spells-details-list">
        <ul>
          <li
            v-for="detail in spellsList[spellsChoice].details"
            :key="spellsList[spellsChoice].name+detail.name"
          >
            <a :href="detail.link" target="_blank">{{detail.name}}</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data: function() {
    return {
      spellsContent: "じゅもん ",
      spellsChoice: 0,
      spellsList: [
        {
          id: 0,
          name: "ルーラ",
          details: [
            {
              name: "こどものおむかえ",
              link:
                "https://www.google.co.jp/maps/place/%E3%82%A6%E3%82%A7%E3%83%AA%E3%83%8A%E4%BF%9D%E8%82%B2%E5%9C%92/@34.7548099,135.4133903,17z/data=!4m12!1m6!3m5!1s0x6000f02b967a404f:0x56e2be5b96d1446f!2z44Km44Kn44Oq44OK5L-d6IKy5ZyS!8m2!3d34.7548099!4d135.4155843!3m4!1s0x6000f02b967a404f:0x56e2be5b96d1446f!8m2!3d34.7548099!4d135.4155843?hl=ja"
            },
            {
              name: "かいしゃ",
              link:
                "https://www.google.co.jp/maps/@34.7382538,135.5731084,17.15z?hl=ja"
            },
            {
              name: "だいがく",
              link:
                "https://www.google.co.jp/maps/place/%E7%A5%9E%E6%88%B8%E5%A4%A7%E5%AD%A6+%E7%90%86%E5%AD%A6%E9%83%A8/@34.7251126,135.2272021,15z/data=!4m12!1m6!3m5!1s0x60008c10c4e9ec9b:0xab5a0292c1e1f0fd!2z56We5oi45aSn5a2m!8m2!3d34.7257018!4d135.2336432!3m4!1s0x0:0x89cf964e67e45395!8m2!3d34.7253659!4d135.2353102?hl=ja"
            },
            {
              name: "こうこう",
              link:
                "https://www.google.co.jp/maps/place/%E7%A5%9E%E6%88%B8%E5%B8%82%E7%AB%8B%E5%B7%A5%E6%A5%AD%E9%AB%98%E7%AD%89%E5%B0%82%E9%96%80%E5%AD%A6%E6%A0%A1/@34.6773826,135.0506567,14.03z/data=!4m12!1m6!3m5!1s0x60008137cb7c0d11:0x8b1d0fbe6103faef!2z56We5oi45biC56uL5bel5qWt6auY562J5bCC6ZaA5a2m5qCh!8m2!3d34.6788601!4d135.0677319!3m4!1s0x60008137cb7c0d11:0x8b1d0fbe6103faef!8m2!3d34.6788601!4d135.0677319?hl=ja"
            },
            {
              name: "らーめんや",
              link:
                "https://www.google.co.jp/maps/place/%E3%81%97%E3%81%87%E3%81%8B%E3%82%89%E3%81%97%E3%81%8B+%E4%BB%81%E5%B7%9D%E6%9C%AC%E5%BA%97/@34.7757359,135.3559046,17z/data=!4m5!3m4!1s0x6000f3c100274653:0xe805c2bef8c30f75!8m2!3d34.7757359!4d135.3580986?hl=ja"
            }
          ]
        },
        {
          id: 1,
          name: "リレミト",
          details: []
        },
        {
          id: 2,
          name: "ザラキ",
          details: []
        }
        // {
        //   id: 3,
        //   name: "パルプンテ",
        //   details: []
        // }
      ]
    };
  },
  mounted: function() {
    this.$store.commit("pageChange", 5);
  },
  methods: {
    spellClick: function() {
      this.$store.commit("setSpellDisplay", false);
    },
    spellsMouseover: function(i) {
      //this.spellsList[i].name = '▶' + this.skillsList[i].name
      this.spellsChoice = i;
    },
    spellsMouseleave: function(i) {
      //this.spellsList[i].name = this.skillsList[i].name.slice(1)
    },
    lilemito: function() {
      history.back();
    },
    parupunte: function() {
      console.log("パルプンテ!");
      // this.$store.commit("setCommandState", 5);
      this.$store.commit("setCommentDisplay", true);
    },
    zaki: function() {
      console.log("ザラキ!");
      // this.$store.commit("setCommandState", 5);
      // this.$store.commit("setCommentDisplay", true);
      const lx = this.$store.state.lx;
      const rx = this.$store.state.rx;
      const fy = this.$store.state.fy;
      const by = this.$store.state.by;

      const xx = this.$store.state.xx;
      const yy = this.$store.state.yy;

      // lx, rx, fy, byに1が含まれているならば1を11に変更
      if (lx == 1) {
        this.setxy(xx - 1, yy, 11);
        this.$store.commit("setlx", 11);
      } else if (rx == 1) {
        this.setxy(xx + 1, yy, 11);
        this.$store.commit("setrx", 11);
      } else if (fy == 1) {
        this.setxy(xx, yy - 1, 11);
        this.$store.commit("setfy", 11);
      } else if (by == 1) {
        this.setxy(xx, yy + 1, 11);
        this.$store.commit("setby", 11);
      }
    },
    setxxyy: function(x, y) {
      this.$store.commit("setxxyy", {
        x: x,
        y: y
      });
    },
    setxy: function(x, y, value) {
      this.$store.commit("setxy", {
        x: x,
        y: y,
        value: value
      });
    }
  }
};
</script>

<style>
a:link {
  text-decoration: none;
  color: white;
}

a:visited {
  text-decoration: none;
  color: white;
}

.spell-cursor {
  text-align: left;
  font-family: "メイリオ", Meiryo, "ヒラギノ角ゴ Pro W3",
    "HIragino Kaku Gothic Pro W3", "HIragino Kaku Gothic Pro", Osaka,
    "ＭＳ Ｐゴシック", "MS P Gothic", sans-serif;
}

.spells-menu {
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

.spells-menu::before {
  background-color: #000;
  color: #fff;
  content: "じゅもん";
  position: relative;
  left: 37px;
  top: -23px;
}

.spells-menu-list {
  position: relative;
  top: -23px;
  text-align: center;
  background-color: #000;
}

.spells-details {
  position: absolute;
  top: 0px;
  left: 170px;
  width: 150px;
  height: 250px;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #fff;
  border-radius: 10px;
  background-color: #000;
}

.spells-details-list {
  text-align: right;
}
</style>
