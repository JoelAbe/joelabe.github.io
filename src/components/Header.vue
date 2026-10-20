<template>
  <div class="header">
    <div class="nav-bar">
      <router-link to="/" :class="{ 'nav-current': isCurrent('/') }">About me</router-link>
      <router-link to="/game-projects" :class="{ 'nav-current': isCurrent('/game-projects') }">Featured Projects</router-link>
      <router-link to="/other-projects" :class="{ 'nav-current': isCurrent('/other-projects') }">Past Projects</router-link>
      <router-link to="/resume" :class="{ 'nav-current': isCurrent('/resume') }">Resume</router-link>
      <router-link to="/contact" :class="{ 'nav-current': isCurrent('/contact') }">Contact</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SiteHeader",
  methods: {
    // Path-based rather than router-link-active, so a section stays highlighted
    // while one of its projects is open (e.g. /game-projects/robodrive).
    isCurrent(path: string): boolean {
      const current = this.$route.path;
      if (path === "/") return current === "/";
      return current === path || current.startsWith(path + "/");
    },
  },
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.header {
  width: 100%;
}

.nav-bar {
  text-align: right;
  padding: 20px;
  line-height: 3em;
}

a {
  text-transform: uppercase;
  margin-left: 15px;
  margin-right: 15px;
  padding-bottom: 8px;
  white-space: nowrap;
  display: inline-block;
}

.nav-current {
  border: 0px solid @textColor;
  border-bottom-width: 2px;
}

@media only screen and (max-width: 620px){
  .nav-bar {
    line-height: 2em;
  }

  a {
    margin-left: 9px;
    margin-right: 9px;
    padding-bottom: 0px;
  }
}

</style>
