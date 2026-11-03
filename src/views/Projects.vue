<template>
  <div>
    <h1>Projects</h1>

    <div class="intro">
      A selection of my work — click any project to read the full breakdown.
    </div>

    <section class="panel highlights-panel">
      <h2 class="section-title">{{ highlightsTitle }}</h2>
      <div class="highlights">
        <ProjectTile
          v-for="item in highlightItems"
          :key="item.project.id"
          :project="item.project"
          :category="item.category"
          @select="showDetails"
        />
      </div>
    </section>

    <div
      v-for="(row, rowIndex) in sectionRows"
      :key="rowIndex"
      class="section-row"
      :style="{ '--row-columns': row.map((s) => s.projectIds.length + 'fr').join(' ') }"
    >
      <section v-for="section in row" :key="section.id" class="panel project-section">
        <h2 class="section-title">{{ section.title }}</h2>
        <div class="section-tiles" :style="{ '--tile-count': section.projectIds.length }">
          <ProjectTile
            v-for="project in projectsIn(section)"
            :key="project.id"
            :project="project"
            @select="showDetails"
          />
        </div>
      </section>
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
import { defineComponent } from "vue";
import ProjectTile from "@/components/ProjectTile.vue";
import ProjectDetailsOverlay from "@/components/ProjectDetailsOverlay.vue";
import ProjectData from "@/data/ProjectData";
import gameProjectsData from "@/data/GameProjectsData";
import otherProjectsData from "@/data/OtherProjectsData";
import { highlights, highlightsTitle, sectionRows, ProjectSection } from "@/data/ProjectsLayout";

const allProjects: ProjectData[] = [...gameProjectsData, ...otherProjectsData];
const projectsById = new Map(allProjects.map((p) => [p.id, p]));

if (import.meta.env.DEV) {
  // Catch layout mistakes early: an id that doesn't exist, or a project that isn't placed anywhere.
  const placed = [...highlights.map((h) => h.projectId), ...sectionRows.flat().flatMap((s) => s.projectIds)];
  const unknown = placed.filter((id) => !projectsById.has(id));
  const unplaced = allProjects.map((p) => p.id).filter((id) => !placed.includes(id));
  if (unknown.length) console.warn("ProjectsLayout references unknown projects:", unknown);
  if (unplaced.length) console.warn("Projects not placed in ProjectsLayout:", unplaced);
}

export default defineComponent({
  name: "ProjectsView",
  components: {
    ProjectTile,
    ProjectDetailsOverlay,
  },
  data() {
    return {
      highlightsTitle,
      sectionRows,
      showPopup: false,
      popupTitle: "",
      popupColor: "",
      popupContent: "",
    };
  },
  computed: {
    highlightItems(): { project: ProjectData; category: string }[] {
      return highlights
        .filter((h) => projectsById.has(h.projectId))
        .map((h) => ({ project: projectsById.get(h.projectId) as ProjectData, category: h.category }));
    },
  },
  watch: {
    // The URL is the source of truth for which project is open, so
    // /projects/robodrive can be linked to directly.
    "$route.params.projectId": {
      immediate: true,
      handler(projectId: string | string[] | undefined) {
        const id = Array.isArray(projectId) ? projectId[0] : projectId;
        if (!id) {
          this.showPopup = false;
          return;
        }
        const item = projectsById.get(id);
        if (!item) {
          this.setProjectId(undefined);
          return;
        }
        this.popupTitle = item.name;
        this.popupColor = item.accentColor;
        this.popupContent = item.htmlDescription;
        this.showPopup = true;
      },
    },
  },
  methods: {
    projectsIn(section: ProjectSection): ProjectData[] {
      return section.projectIds
        .map((id) => projectsById.get(id))
        .filter((p): p is ProjectData => p !== undefined);
    },
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
        name: "Projects",
        params: projectId ? { projectId } : {},
      });
    },
  },
});
</script>

<style scoped>
.intro {
  margin-bottom: 30px;
}

/* Every group of projects sits on its own panel, title inside the top-left. */
.panel {
  /* Count padding and border inside the width, so a standalone panel (highlights)
     lines up with panels sized by the grid rows below it. */
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 14px 14px 16px 14px;
  margin-bottom: 24px;
}

.section-title {
  font-size: 1.15em;
  font-weight: 100;
  margin: 0 0 12px 2px;
  line-height: 1.3em;
}

/* Phones: highlights stack full width, each section is a horizontal swipe row. */
.highlights {
  display: grid;
  gap: 14px;
}

.highlights > * {
  height: 220px;
}

.section-tiles {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 6px;
}

.section-tiles > * {
  flex: 0 0 72%;
  height: 200px;
  scroll-snap-align: start;
}

/* A section with a single project has nothing to swipe to, so let it fill the row. */
.section-tiles > :only-child {
  flex-basis: 100%;
}

@media only screen and (min-width: 620px) {
  .panel {
    padding: 18px 20px 22px 20px;
    margin-bottom: 28px;
  }

  .section-title {
    margin-bottom: 16px;
  }

  .highlights-panel,
  .section-row {
    max-width: 980px;
  }

  .highlights-panel {
    margin-bottom: 36px;
  }

  .highlights {
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  .highlights > * {
    height: 300px;
  }

  .section-row {
    display: grid;
    grid-template-columns: var(--row-columns);
    column-gap: 28px;
  }

  .project-section {
    min-width: 0;
    display: flex;
    flex-direction: column;
  }

  .project-section .section-tiles {
    flex: 1;
  }

  .section-tiles {
    display: grid;
    grid-template-columns: repeat(var(--tile-count), 1fr);
    gap: 16px;
    overflow: visible;
    padding-bottom: 0;
  }

  .section-tiles > * {
    height: auto;
    min-height: 230px;
  }
}
</style>
