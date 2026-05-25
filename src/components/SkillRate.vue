<template>
  <div>
    <div class="skill-name">{{name}}</div>

    <div class="skill-rate">
      <template v-for="n in 5" :key="`${name}-${n}`">
        <div v-if="n <= rate" class="circle circle-full"></div>
        <div v-else class="circle circle-empty"></div>
      </template>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SkillRate",
  props: {
    name: { type: String, required: true },
    rate: { type: Number, required: true },
  },
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.clear {
  clear: both;
}

.skill-name {
  float: left;
  width: 200px;
}

.skill-rate {
  float: left;
  width: 80px;
  padding-top:11px;
}

.circle {
  float: left;
  border-radius: 5px;
  height: 10px;
  width: 10px;
  border: 0px solid @skillRateCircleColor;
  background-color: transparent;
  opacity: 0.6;
  margin: 0px 2px;
}
.circle-full {
  background-color: @skillRateCircleColor;
}
.circle-empty {
  border-width: 1px;
  width: 8px;
  height: 8px;
}

</style>