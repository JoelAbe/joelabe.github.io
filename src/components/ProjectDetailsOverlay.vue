<template>
  <transition name="fade">
    <div v-if="visible">
      <div class="overlay" @click="$emit('close')">
      </div>
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
});
</script>

<style scoped>
.overlay {
  background-color: rgba(0,0,0,0.5);
  z-index: 10;
  position:fixed;
  top:0px;
  left:0px;
  right:0px;
  bottom: 0px;
}

.dialog {
  position:absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 11;
  margin: 20px;
  padding-bottom: 10px;
  color:white;
}

iframe {
  width: 100%;
}

h1.dialog-title {
    text-align: center;
    font-size: 1.3em;
    margin: 0px;
    padding: 22px;
    border-radius: 8px 8px 0 0;
}

.dialog-content {
  padding: 20px;
  background-color: #fcfcfc;
  color: #696969;
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
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 40px;
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
