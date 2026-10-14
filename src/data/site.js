// All rendered copy lives here.
// Style rule: no em dashes or en dashes anywhere in this file.
import {
  siPytorch, siLanggraph, siLangchain, siModelcontextprotocol, siMlflow, siDatabricks,
  siOpencv, siSpringboot, siSupabase, siDocker, siFirebase, siMongodb, siNodedotjs,
  siExpress, siThreedotjs, siAndroid, siN8n,
} from 'simple-icons';

export const person = {
  name: 'Mujeeb Asad',
  email: '27100095@lums.edu.pk',
  github: 'https://github.com/mujeeb-asad',
  linkedin: 'https://www.linkedin.com/in/mujeeb-asad-23b322318/',
  cv: '/Mujeeb_Asad_CV.pdf',
  // Search result and link preview title, kept under 60 characters
  title: 'Mujeeb Asad | AI and ML Engineer, LUMS Computer Science',
  // Search result snippet, kept under 160 characters
  description:
    'Mujeeb Asad is a Computer Science senior at LUMS building AI systems: vision models, LLM agents and the backends behind them. Projects, code and CV.',
  ogImage: '/og.png',
  university: { name: 'Lahore University of Management Sciences', url: 'https://lums.edu.pk', wiki: 'https://en.wikipedia.org/wiki/Lahore_University_of_Management_Sciences' },
};

// Intro prose. <b> marks the few names worth catching on a skim.
export const intro = [
  'I am a Computer Science senior at <b>LUMS</b> who builds software across the stack. Most of my time goes into AI: training models, building LLM agents and shipping the systems around them.',
  'I recently interned at <b>Systems Limited</b>, and I am currently developing <b>GoFinn</b>, a portfolio-optimisation platform that started with their team and is now in its demo phase.',
];

export const keywords = [
  'Machine Learning',
  'LLM Agents',
  'Computer Vision',
  'Backend Engineering',
  'Systems Programming',
  'Mobile Development',
];

export const nav = [
  { id: 'projects', label: 'Projects' },
  { id: 'tools', label: 'Tools' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
];

export const hooks = {
  projects: 'Anyways, here are a few projects I have worked on.',
  tools: 'And these are the tools and frameworks I do that work with.',
  leadership: 'I have led teams outside of code too.',
  contact: 'Want to work together?',
};

// Listed in order of importance.
export const projects = [
  {
    id: 'cla',
    title: 'Convolutional Latent Attention',
    meta: ['2026', 'Solo', 'PyTorch'],
    accent: 'pink',
    prose: [
      'An attention block that gives a mobile vision model full-image context from its very first stage, where comparable models only see a small local window.',
      'I designed it, trained it from scratch and wrote it up as a full paper. On ImageNet-100 it beats a MobileViT-XS baseline by 4.6 points of top-1 accuracy, with both models trained under an identical setup.',
    ],
    links: [
      { label: 'Code', href: 'https://github.com/mujeeb-asad/cla-mobilevit' },
      {
        label: 'Paper',
        href: 'https://github.com/mujeeb-asad/cla-mobilevit/blob/main/Convolutional_Latent_Attention_for_Efficient_Hybrid_Vision_Transformers.pdf',
      },
    ],
  },
  {
    id: 'agents',
    title: 'Agentic LLM Systems',
    meta: ['2026', 'Solo', 'LangGraph, MCP, Databricks'],
    accent: 'blue',
    prose: [
      'A multi-agent document analyst. A planner breaks a question into steps and a supervisor routes each one to the right specialist: prose to retrieval, tables to natural-language-to-SQL, arithmetic to exact functions.',
      'Tools run over MCP and governed catalog functions, memory is durable and isolated per user, and it ships to a live endpoint behind CI/CD. Its own LLM-as-judge suite scores it 0.9 on correctness and 1.0 on both groundedness and relevance.',
    ],
    links: [],
  },
  {
    id: 'tour',
    title: '3D Scene Reconstruction and Virtual Tour',
    meta: ['2025', 'Solo', 'OpenCV, Three.js'],
    accent: 'mint',
    prose: [
      '25 ordinary photos of a store, rebuilt into a 3D walkthrough that runs in the browser.',
      'Underneath is a Structure-from-Motion pipeline I wrote, from feature matching through to bundle adjustment, with a Three.js viewer on top. The demo is live, so go take a walk.',
    ],
    links: [
      { label: 'Live demo', href: 'https://kims-store.pages.dev' },
      { label: 'Code', href: 'https://github.com/mujeeb-asad/kims-store' },
    ],
  },
  {
    id: 'kernel',
    title: '32-bit x86 Kernel',
    meta: ['2025', 'Solo', 'C, x86 Assembly'],
    accent: 'lemon',
    prose: [
      'An operating system kernel written from the boot up.',
      'I built it in four stages, each one resting on the last: interrupts and system calls, memory management with paging, processes with preemptive scheduling and user mode, and a file system on top.',
    ],
    links: [],
  },
  {
    id: 'bettercaps',
    title: 'BetterCAPS',
    meta: ['2026', 'Team of 5', 'Android, Firebase'],
    accent: 'lilac',
    prose: [
      'An Android app that turns booking a university counselling appointment into a few taps.',
      'I was the lead contributor in a team of five, and built the student dashboard, booking that cannot double-book, counsellor search and a matching quiz.',
    ],
    links: [],
  },
];

// Rule of thumb: no logo, no mention. Frameworks and tools only.
export const tools = [
  siPytorch, siLanggraph, siLangchain, siModelcontextprotocol, siMlflow, siDatabricks,
  siOpencv, siSpringboot, siSupabase, siDocker, siFirebase, siMongodb, siNodedotjs,
  siExpress, siThreedotjs, siAndroid, siN8n,
].map((i) => ({ name: i.title === 'Model Context Protocol' ? 'MCP' : i.title, path: i.path }));

export const leadership =
  'As Director of Logistics at <b>SPADES</b> I led the logistics team for PSIFI, the society\'s flagship event, and managed its 60 lakh PKR budget. I have also served as Assistant Director of Logistics at <b>LUMUN</b>, running purchasing, inventory and merchandise sales, and as Director of Registrations at the <b>LUMS Chess Club</b>, handling school outreach and tournament registrations.';

export const contact = {
  lead: 'I work across machine learning, LLM agents, computer vision and backend systems. If you would like to work with me, send me a message and tell me a little about what you have in mind.',
  emailLead: 'Rather write from your own inbox? Email me directly at',
};

// Contact form: submissions are emailed to Mujeeb by Web3Forms (web3forms.com).
// Paste the access key it gives you below. The key is designed to be public.
// While it is empty the form only appears in local development, never on the live site.
export const form = {
  endpoint: 'https://api.web3forms.com/submit',
  accessKey: 'e2b706a9-9b7b-4710-9b7c-368fb3575c02',
  topics: [
    'Project or freelance work',
    'Full-time role',
    'Internship',
    'Research collaboration',
    'Something else',
  ],
};

// Quick links shown in the menu under the section links.
export const quickLinks = [
  { label: 'CV', href: '/Mujeeb_Asad_CV.pdf' },
  { label: 'GitHub', href: 'https://github.com/mujeeb-asad' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mujeeb-asad-23b322318/' },
];
