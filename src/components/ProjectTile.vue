<template>
  <div class="project-item" @click="$emit('select', project)">
    <div class="project-item-image" :style="{ 'background-image': 'url(' + project.iconUrl + ')' }"></div>
    <div v-if="category" class="badge category-badge">{{ category }}</div>
    <div v-if="project.engine" class="badge engine-badge">{{ project.engine }}</div>
    <div class="title-bar" :style="{ 'background-color': project.accentColor + 'DD' }">
      <div class="title-text">{{ project.name }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ProjectData from "@/data/ProjectData";

export default defineComponent({
  name: "ProjectTile",
  props: {
    project: { type: Object as PropType<ProjectData>, required: true },
    category: { type: String, default: "" },
  },
  emits: ["select"],
});
</script>

<style scoped>
.project-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  height: 100%;
  width: 100%;
}

.project-item:hover {
  filter: brightness(120%);
}

.project-item-image {
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  transition: transform 0.2s;
}

.project-item:hover .project-item-image {
  transform: scale(1.1);
}

.title-bar {
  position: absolute;
  bottom: 0px;
  width: 100%;
  line-height: 1.3em;
}

.title-text {
  padding: 10px;
}

.badge {
  position: absolute;
  top: 10px;
  padding: 4px 9px;
  border-radius: 4px;
  background-color: rgba(20, 20, 20, 0.78);
  color: #f0f0f0;
  font-size: 0.75em;
  line-height: 1.4em;
  letter-spacing: 0.03em;
  white-space: nowrap;
  pointer-events: none;
}

.engine-badge {
  right: 10px;
}

.category-badge {
  left: 10px;
  text-transform: uppercase;
  font-weight: bold;
}
</style>
