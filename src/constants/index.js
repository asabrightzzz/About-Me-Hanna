import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  threejs,
  project1,
  project2,
  track1,
  music,
  medibang,
  csp,
  fl,
  bandlab,
  godot,
  unity,
  python,
  c,
  laravel,
  flutter,
  posgresql,
  arduino,
  track2,
  docs1,
  cert1,
  cert2,
  ketua,
  pubspik,
  kemblok,
  juara1,
  kelolaku,
  merdeka,
  wirth,
  nanami,
  suisei,
  kaiser,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "works",
    title: "Works",
  },
    {
    id: "tech",
    title: "Tech",
  },
  {
    id: "documentation",
    title: "Documentations",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const projects = [
  {
    name: "Artisan Beverages Studio Landing Page",
    description: "Web-based platform for introducing artisan beverages.",
    tags: [{ name: "html", color: "blue-text-gradient" }, { name: "Javascript", color: "blue-text-gradient" }],
    image: project1,
    source_code_link: "https://github.com/asabrightzzz/homepage-abs",
    category: "tech",
  },
  {
    name: "Kelolaku",
    description: "Kelolaku is a Mobile App for personal finance management.",
    tags: [{ name: "flutter", color: "blue-text-gradient" }, { name: "SQlite", color: "blue-text-gradient" }],
    image: kelolaku,
    source_code_link: "https://github.com/asabrightzzz/KelolaKu",
    category: "tech",
  },
  {
    name: "River",
    description: "A series of digital artworks inspired by river and ocean.",
    tags: [{ name: "OCs", color: "pink-text-gradient" }],
    image: project2,
    source_code_link: "https://www.instagram.com/p/CwfoNImRJ4e/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    category: "creative",
  },
  {
    name: "Kaiser",
    description: "A series form Blue Lock.",
    tags: [{ name: "BlueLock", color: "pink-text-gradient" }],
    image: kaiser,
    source_code_link: "https://www.instagram.com/p/CuSBoNzvV2V/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    category: "creative",
  },
  {
    name: "Merdeka",
    description: "Artwork inspired by the Indonesian independence movement.",
    tags: [{ name: "Indonesia", color: "pink-text-gradient" }],
    image: merdeka,
    source_code_link: "https://www.instagram.com/p/Cv2cGSyxp40/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    category: "creative",
  },
  {
    name: "suisei",
    description: "Artwork inspired by Hoshimachi Suisei.",
    tags: [{ name: "HololiveJP", color: "pink-text-gradient" }],
    image: suisei,
    source_code_link: "https://www.instagram.com/p/C8kJMhwyUEa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    category: "creative",
  },
  {
    name: "wirth",
    description: "Fanart of Wirth Madl from Mashle.",
    tags: [{ name: "Mashle", color: "pink-text-gradient" }],
    image: wirth,
    source_code_link: "https://www.instagram.com/p/C41v-DwxP7T/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    category: "creative",
  },
  {
    name: "Nanami",
    description: "Fanart of Nanami Kento from Jujutsu Kaisen.",
    tags: [{ name: "JJK", color: "pink-text-gradient" }],
    image: nanami,
    source_code_link: "https://www.instagram.com/p/CfCG2OWPoGh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    category: "creative",
  },
  {
    name: "Instrumental",
    description: "Hype beat instrumental for various uses.",
    tags: [{ name: "phunk", color: "blue-text-gradient" }],
    image: music,
    audioSrc: track1,
    source_code_link: "https://soundcloud.com/",
    category: "music",
  },
  {
    name: "Love on the Wrong Path",
    description: "Sometimes, love finds you in the most unexpected places.",
    tags: [{ name: "Ballad", color: "blue-text-gradient" }],
    image: music,
    audioSrc: track2,
    source_code_link: "https://soundcloud.com/",
    category: "music",
  },
];

const technologyStacks = [
  // TECH
  { name: "React JS", icon: reactjs, category: "tech" },
  { name: "Three JS", icon: threejs, category: "tech" },
  { name: "Node JS", icon: nodejs, category: "tech" },
  { name: "HTML", icon: html, category: "tech" },
  { name: "CSS", icon: css, category: "tech" },
  { name: "JavaScript", icon: javascript, category: "tech" },
  { name: "Tailwind CSS", icon: tailwind, category: "tech" },
  { name: "Git", icon: git, category: "tech" },
  { name: "Python", icon: python, category: "tech" },
  { name: "C", icon: c, category: "tech" },
  { name: "Laravel", icon: laravel, category: "tech" },
  { name: "Flutter", icon: flutter, category: "tech" },
  { name: "PosgreSQL", icon: posgresql, category: "tech" },
  { name: "Arduino", icon: arduino, category: "tech" },

  // CREATIVE
  { name: "Medibang Paint", icon: medibang, category: "creative" },
  { name: "Clip Studio Paint", icon: csp, category: "creative" },
  { name: "Figma", icon: figma, category: "creative" },
  
  // MUSIC
  { name: "FL Studio", icon: fl, category: "music" },
  { name: "Bandlab", icon: bandlab, category: "music" },
  
  // GAME
  { name: "Godot", icon: godot, category: "game" },
  { name: "Unity", icon: unity, category: "game" },
];

const documentations = [
  {
    title: "UI/UX Design Competition LP31 Depok 2025",
    caption: "Presentation and documentation of the UI/UX design competition event for national vocational school/high school students.",
    image: docs1,
  },
  {
    title: "Inauguration of the 2025 Organization Chair",
    caption: "Documentation of the inauguration activities of the heads of various organizations with me as the head of ITEC (Information Technology Engineering Club).",
    image: ketua,
  },
    {
    title: "Event Kerennya Indonesiaku 2025",
    caption: "Presentation introducing the PPLG (Pengembangan Perangkat Lunak & Gim) major to the general public.",
    image: pubspik,
  },  
  {
    title: "BinLatSAR Activities in 2025",
    caption: "Basic Training is a mandatory activity for all new students. As a committee member and support member, there are many obligations to fulfill.",
    image: kemblok,
  },
  {
    title: "Group photo with the 1st Winner of the UI/UX Design Trilogi Competition",
    caption: "Documentation of the 1st place winner of the UI/UX Design Trilogi Competition.",
    image: juara1,
  },
];

const certificates = [
  { name: "1st Place UI/UX Design Trilogi Competition", image: cert1 },
  { name: "2nd Place UI/UX Design Jendral Achmad Yani University Competition", image: cert2 },
];




export {projects, technologyStacks, documentations, certificates };