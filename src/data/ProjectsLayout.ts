// Where each project appears on the Projects page, in display order.
// Ids refer to ProjectData.id in GameProjectsData and OtherProjectsData.
// To reorder the page, reorder these lists — the data files' order doesn't matter.

export interface ProjectSection {
    id: string;
    title: string;
    projectIds: string[];
}

export interface Highlight {
    projectId: string;
    category: string;
}

// The best project from each category, shown first.
export const highlightsTitle = "Project Highlights";

export const highlights: Highlight[] = [
    { projectId: "cascadier", category: "Shipped" },
    { projectId: "robodrive", category: "Simulation" },
    { projectId: "clocktergeist", category: "Game Jam" },
];

// Sections in the same row sit side by side on wide screens.
export const sectionRows: ProjectSection[][] = [
    [
        { id: "shipped", title: "Shipped Games & Client Work", projectIds: ["melody-match", "reactional-music"] },
        { id: "engineering", title: "Engineering & Simulation", projectIds: ["automotive-hmi"] },
    ],
    [
        {
            id: "jams",
            title: "Game Jams & Personal",
            projectIds: ["glyphweaver", "false-awakening", "pyro-purge", "big-bubble-deep-trouble", "poly-run"],
        },
    ],
];
