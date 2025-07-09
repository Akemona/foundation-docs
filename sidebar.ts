import type { Sidebar } from "vocs";

export const sidebar = {
  "/": [
    {
      text: "Introduction",
      items: [
        { text: "Why Akemona", link: "/introduction" },
        { text: "Getting Started", link: "/getting-started" },
        { text: "FAQ", link: "/faq" },
      ],
    },
    {
      text: "Platforms",
      items: [
        { text: "Akemona Core", link: "/platforms/akemona-core" },
        { text: "Akemona Cloud", link: "/platforms/akemona-cloud" },
        { text: "Akemona Enterprise", link: "/platforms/akemona-enterprise" },
        { text: "Funding Portal", link: "/platforms/funding-portal" },
      ],
    },
  ],
} as const satisfies Sidebar;
