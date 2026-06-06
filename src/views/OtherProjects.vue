<template>
  <div>
    <h1>Past Projects</h1>

    <div style="margin-bottom: 30px;">
      Earlier projects, prototypes and experiments that helped shape how I work today.
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData";

export default defineComponent({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data() {
    return {
      projects: otherProjectsData,
    };
  },
});
</script>
