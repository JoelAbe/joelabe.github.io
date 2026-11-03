<template>
  <transition name="fade">
    <!-- A fixed layer that scrolls on its own, so the page behind it stays put.
         Clicking the dimmed area around the dialog closes it. -->
    <div v-if="visible" ref="scroller" class="overlay" @click.self="$emit('close')">
      <div class="dialog" :style="{ 'background-color': color }">
        <h1 class="dialog-title">{{ title }}</h1>
        <div @click="$emit('close')" class="dialog-close"><i class="fa fa-times fa-lg fa-fw"></i></div>
        <div class="dialog-content">
          <div v-html="htmlContent"></div>
          <div class="dialog-bottom">
            <a @click="$emit('close')" class="dialog-close-button">Close</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectDetailsOverlay",
  props: {
    visible: { type: Boolean, required: true },
    color: { type: String, default: "" },
    title: { type: String, default: "" },
    htmlContent: { type: String, default: "" },
  },
  emits: ["close"],
  watch: {
    visible: {
      immediate: true,
      handler(visible: boolean) {
        this.lockPageScroll(visible);
      },
    },
    // Opening a different project should start at its top, not where the last one was left.
    htmlContent() {
      this.$nextTick(() => {
        const scroller = this.$refs.scroller as HTMLElement | undefined;
        if (scroller) scroller.scrollTop = 0;
      });
    },
  },
  unmounted() {
    this.lockPageScroll(false);
  },
  methods: {
    lockPageScroll(lock: boolean) {
      const body = document.body;
      if (lock) {
        // Hiding the page scrollbar would shift the layout sideways, so pad by its width.
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        body.style.paddingRight = scrollbarWidth > 0 ? scrollbarWidth + "px" : "";
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "";
        body.style.paddingRight = "";
      }
    },
  },
});
</script>

<style scoped>
.overlay {
  background-color: rgba(0,0,0,0.5);
  z-index: 10;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
}

.dialog {
  position: relative;
  margin: 20px;
  padding-bottom: 10px;
  color: white;
  border-radius: 8px;
}

iframe {
  width: 100%;
}

h1.dialog-title {
    text-align: center;
    font-size: 1.3em;
    margin: 0px;
    padding: 22px 50px;
    border-radius: 8px 8px 0 0;
    line-height: 1.3em;
}

.dialog-content {
  padding: 20px;
  background-color: #38383d;
  color: #dadada;
  font-size: 1em;
  line-height: 1.5em;
  border-radius: 0 0 8px 8px;
}
.dialog-close {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor:pointer;
  font-size: 1.2em;
  font-weight: 100;
}
.dialog-close:hover {
  opacity: 0.6;
}

.dialog-bottom {
  text-align: center;
}

a.dialog-close-button {
  cursor: pointer;
  font-size: 1.4em;
  display: inline-block;
  margin: 20px auto;
  padding: 10px 28px;
  background-color: #c0392b;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.2s ease;
}
a.dialog-close-button:hover {
  background-color: #a5281a;
}

@media only screen and (min-width: 620px){
  .dialog {
    margin: 80px auto 40px auto;
    max-width: 1000px;
  }

  h1.dialog-title {
    font-size: 1.6em;
  }

  .dialog-content {
    padding: 40px;
  }
}
</style>
