<template>
  <div>
    <h1>Featured Projects</h1>

    <div style="margin-bottom: 30px;">
      A selection of projects I'm proud of — click any of them to read the full breakdown.
    </div>

    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData";

export default defineComponent({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data() {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
