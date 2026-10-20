<template>
    <div>
      <div class="projects-list">
        <template v-for="project in projects" :key="project.id">
          <div
              @click="showDetails(project)"
              class="project-item"
              :class="{ 'wide': project.isWide, 'high': project.isHigh }">
            <div class="project-item-image" :style="{ 'background-image': 'url(' + project.iconUrl + ')' }">
            </div>
            <div v-if="project.engine" class="engine-badge">{{ project.engine }}</div>
            <div class="title-bar" :style="{ 'background-color': project.accentColor + 'DD' }">
                <div class="title-text">
                  {{ project.name }}
                </div>
              </div>
          </div>
        </template>
      </div>

      <ProjectDetailsOverlay
        v-on:close="closeDetails"
        :visible="showPopup"
        :title="popupTitle"
        :htmlContent="popupContent"
        :color="popupColor"
      />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ProjectDetailsOverlay from "@/components/ProjectDetailsOverlay.vue";
import ProjectData from "@/data/ProjectData";

export default defineComponent({
  name: "ProjectsList",
  components: {
    ProjectDetailsOverlay,
  },
  props: {
    projects: { type: Array as PropType<ProjectData[]>, required: true },
  },
  data() {
    return {
      showPopup: false,
      popupTitle: "",
      popupColor: "",
      popupContent: "",
    };
  },
  watch: {
    // The URL is the source of truth for which project is open, so
    // /game-projects/robodrive can be linked to directly.
    "$route.params.projectId": {
      immediate: true,
      handler(projectId: string | string[] | undefined) {
        const id = Array.isArray(projectId) ? projectId[0] : projectId;
        if (!id) {
          this.showPopup = false;
          return;
        }
        const item = this.projects.find((p) => p.id === id);
        if (!item) {
          this.setProjectId(undefined);
          return;
        }
        this.popupTitle = item.name;
        this.popupColor = item.accentColor;
        this.popupContent = item.htmlDescription;
        this.showPopup = true;
        window.scrollTo(0, 0);
      },
    },
  },
  methods: {
    showDetails(item: ProjectData) {
      this.setProjectId(item.id);
    },
    closeDetails() {
      this.setProjectId(undefined);
    },
    setProjectId(projectId: string | undefined) {
      // replace rather than push, so opening and closing projects
      // doesn't pile up entries in the browser history
      this.$router.replace({
        name: this.$route.name as string,
        params: projectId ? { projectId } : {},
      });
    },
  },
});
</script>

<style scoped>

.project-item {
  height: 300px;
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.project-item-image {
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  transition: all 0.2s;
}
.project-item-image:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.project-item:hover {
filter: brightness(120%);
}

.title-bar {
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: #222222;
}

.title-text {
  padding: 10px;
}

.engine-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 4px 9px;
  border-radius: 4px;
  background-color: rgba(20, 20, 20, 0.78);
  color: #f0f0f0;
  font-size: 0.75em;
  letter-spacing: 0.03em;
  white-space: nowrap;
  pointer-events: none;
}

@media only screen and (min-width: 620px){
  .projects-list {
    max-width: 900px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    grid-auto-rows: minmax(250px, auto);
    grid-auto-flow: dense;
  }

  .project-item {
    margin: 0px;
    height: 100%;
    width: 100%;
  }

  .wide {
    grid-column-end: span 2;
  }
  .high {
    grid-row-end: span 2;
  }
}



</style>