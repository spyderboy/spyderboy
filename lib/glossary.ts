// The one source for every piece of jargon on the site. The /jargon page lists all of it; <Term id="…"> shows one
// entry's `short` in an overlay wherever the word appears in the copy. Write for someone who has used ChatGPT and
// nothing more: plain words, no term explained with another term unless that one is linked in `related`.

export type GlossaryCategory = 'ai' | 'xanadu' | 'delivery' | 'stack';

export interface GlossaryEntry {
  id: string; // the URL anchor on /jargon, and what <Term id> takes
  term: string;
  category: GlossaryCategory;
  short: string; // the overlay: one or two sentences
  body: string; // the full entry on /jargon
  analogy?: string; // the same idea in everyday terms
  related?: string[]; // other ids
  aliases?: string[]; // other spellings found in project copy and tags (matched whole-word, any case)
}

export const CATEGORIES: { id: GlossaryCategory; title: string; intro: string }[] = [
  {
    id: 'ai',
    title: 'AI basics',
    intro: 'The words that come up whenever AI is involved, whatever you are building.',
  },
  {
    id: 'xanadu',
    title: 'How Xanadu works',
    intro: 'The parts of the system that builds the projects on this site.',
  },
  {
    id: 'delivery',
    title: 'Building and shipping software',
    intro: 'Product and engineering terms used in the consulting offers.',
  },
  {
    id: 'stack',
    title: 'The tech behind the projects',
    intro: 'The languages and services named on the project pages, in a sentence each.',
  },
];

export const GLOSSARY: GlossaryEntry[] = [
  // ---- AI basics ----
  {
    id: 'llm',
    term: 'AI model (LLM)',
    category: 'ai',
    short:
      'The program behind ChatGPT, Claude or Gemini: it has read a huge amount of text and code, and writes new text one piece at a time.',
    body: 'LLM stands for large language model. It is trained on a vast amount of writing and code, and produces an answer by predicting what comes next, one small piece at a time. ChatGPT, Claude and Gemini are apps built on top of models like these. The same kind of model can write code, which is what Xanadu uses it for.',
    related: ['tokens', 'frontier-model', 'open-model'],
  },
  {
    id: 'tokens',
    term: 'Tokens',
    category: 'ai',
    short:
      'The small chunks of text an AI model reads and writes (about three-quarters of a word each). Hosted AI is priced and rationed by them.',
    body: 'A token is a chunk of text, roughly three-quarters of an English word. Hosted AI services count every token you send and every token they write back, and bill or limit you by that count. "I ran out of tokens" means hitting that limit. Running a model on your own computer has no per-token cost.',
    analogy: 'Minutes on a phone plan: the meter runs on every word in both directions.',
    related: ['local-model'],
  },
  {
    id: 'frontier-model',
    term: 'Frontier model',
    category: 'ai',
    short:
      'The most capable AI models available, from companies such as Anthropic (Claude), Google (Gemini) and OpenAI. Powerful, but paid per use and run on their servers.',
    body: 'The newest, largest models from the leading AI labs. They handle the hardest problems best. You reach them over the internet, your data goes to the provider, and you pay for every token. Xanadu uses one only when a task has beaten everything cheaper.',
    related: ['tokens', 'open-model', 'ladder'],
  },
  {
    id: 'open-model',
    term: 'Open model',
    category: 'ai',
    short:
      'An AI model whose maker publishes it for anyone to download and run on their own hardware, free of per-use charges.',
    body: 'Also called an open-weight model. Companies such as Google, Alibaba and Mistral release models that anyone can download and run. They are smaller than frontier models, but the best of them are now good enough for most everyday coding work.',
    related: ['local-model', 'frontier-model', 'parameters'],
  },
  {
    id: 'local-model',
    aliases: ['local LLM', 'local LLMs', 'local model', 'local models'],
    term: 'Local model',
    category: 'ai',
    short:
      'An AI model running on your own computer instead of a company’s servers. Nothing leaves the machine, and there is no bill per use.',
    body: 'An open model downloaded and run on hardware you control: a laptop, a desktop, or a server you rent. Your code and data never leave it, it works without an internet connection, and the cost is the hardware and electricity rather than a meter per token. Xanadu does nearly all of its work this way, on a MacBook.',
    analogy: 'The crew on site, rather than a subcontractor across town you pay by the hour.',
    related: ['open-model', 'tokens', 'hardware-you-control'],
  },
  {
    id: 'hardware-you-control',
    term: 'Hardware you control',
    category: 'ai',
    short: 'Computers you own or rent outright, so your code and data stay there instead of going to an AI company.',
    body: 'Your own laptops and servers, or machines you rent by the hour that run only your software. For a company this is often the deciding point: proprietary code and customer data never pass through a third party’s AI service.',
    related: ['local-model', 'gpu'],
  },
  {
    id: 'parameters',
    term: 'Parameters (27B)',
    category: 'ai',
    short:
      'A rough measure of a model’s size. "27B" means 27 billion parameters: bigger is usually smarter, but needs more memory and runs slower.',
    body: 'Parameters are the numbers a model learned during training. Their count is the usual shorthand for size: a 27B model has 27 billion of them and fits in the memory of a well-equipped laptop. Frontier models are far larger and need data centres.',
    related: ['open-model', 'gpu'],
  },
  {
    id: 'mlx',
    term: 'MLX',
    category: 'ai',
    short: 'Apple’s free toolkit for running AI models efficiently on Mac chips.',
    body: 'A machine-learning framework from Apple, built for the chips in current Macs. It is one of the ways a Mac can run a sizeable open model at a useful speed.',
    related: ['local-model'],
  },
  {
    id: 'gpu',
    aliases: ['GPUs', 'GPU'],
    term: 'GPU',
    category: 'ai',
    short: 'The kind of chip AI models run fastest on. Data centres rent them by the hour.',
    body: 'Graphics processing unit: originally for drawing video-game graphics, now the workhorse of AI because it does many small calculations at once. A large model runs far faster on a GPU with plenty of memory.',
    related: ['runpod', 'parameters'],
  },
  {
    id: 'runpod',
    aliases: ['RunPod'],
    term: 'RunPod',
    category: 'ai',
    short:
      'A service that rents out GPU servers by the hour. Xanadu uses it to run many workers at once for a big push, for a few dollars an hour.',
    body: 'One of several companies that rent GPU servers by the hour. Because it is just a rented machine running your own software, the code still stays on hardware you control for the length of the rental.',
    related: ['gpu', 'parallel-workers', 'hardware-you-control'],
  },
  {
    id: 'agentic-assistant',
    aliases: ['Claude Code'],
    term: 'Agentic assistant',
    category: 'ai',
    short:
      'An AI that does things, not just answers: it can read files, run commands and make changes, with a person directing it. Claude Code and Cursor are examples.',
    body: 'A chat assistant answers questions. An agentic assistant takes actions: it opens files, edits code, runs tests and tries again, with you watching and steering. It is the step between autocomplete and a fully unattended loop.',
    related: ['autocomplete', 'autonomous-loop'],
  },
  {
    id: 'autocomplete',
    term: 'AI autocomplete (Copilot, Cursor)',
    category: 'ai',
    short:
      'AI that suggests the next lines while a developer types. Helpful, but a person is at the keyboard the whole time.',
    body: 'Tools such as GitHub Copilot and Cursor suggest code as a developer works. They speed up typing and lookup, but the developer still decides every change. This is what most people mean by "using AI to code", and it is not what Xanadu does.',
    related: ['agentic-assistant', 'autonomous-loop'],
  },

  // ---- How Xanadu works ----
  {
    id: 'autonomous-loop',
    aliases: ['autonomous development loop', 'autonomous loop'],
    term: 'Autonomous development loop',
    category: 'xanadu',
    short:
      'A system that works through a list of software tasks by itself: writes each change, checks it, fixes its own mistakes, and only stops for decisions that need a person.',
    body: 'Instead of a person prompting an AI one request at a time, the loop takes a whole plan and runs unattended, often overnight. Each task is written, tested and either accepted or retried with the reason it failed. People come in at the start (what to build) and when something genuinely needs a decision.',
    analogy: 'A general contractor running a job from the blueprints, calling you only when a decision is yours.',
    related: ['harness', 'roadmap', 'gate'],
  },
  {
    id: 'harness',
    term: 'Harness',
    category: 'xanadu',
    short:
      'The program that runs the AI models: hands out each task, checks the result, and retries or escalates when it fails. Xanadu is a harness.',
    body: 'An AI model on its own only answers what it is asked. A harness wraps it with everything else a job needs: which task is next, what files and instructions to show the model, how to check its work, what to do on failure, and what to record. Most of what makes Xanadu reliable lives in the harness, not the model.',
    analogy:
      'The general contractor: not the one swinging the hammer, but the one who decides who does what and checks it.',
    related: ['autonomous-loop', 'ladder', 'gate'],
  },
  {
    id: 'roadmap',
    aliases: ['ROADMAP.md', 'ROADMAP', 'roadmap'],
    term: 'Roadmap',
    category: 'xanadu',
    short: 'The plan for a project, written as an ordered list of small tasks. Xanadu works straight from it.',
    body: 'A plain text file listing everything to build, in order, grouped into phases. Each line is one task precise enough to check. Xanadu ticks tasks off as they pass, so the roadmap is always an honest record of what is done.',
    analogy: 'The job schedule on a building site.',
    related: ['task', 'backlog', 'kit'],
  },
  {
    id: 'backlog',
    term: 'Backlog',
    category: 'delivery',
    short: 'The list of work not done yet, in priority order.',
    body: 'Everything a team intends to build but hasn’t, ordered so the most valuable work comes first. In Xanadu the backlog is the unticked part of the roadmap.',
    related: ['roadmap', 'agile'],
  },
  {
    id: 'task',
    term: 'Task',
    category: 'xanadu',
    short: 'One small job on the roadmap: one file, one change, with a check that proves it is done.',
    body: 'Xanadu’s tasks are deliberately small, usually one file and one change, because small changes are what an AI model gets right most often and what is easiest to check. A large feature becomes a few dozen tasks.',
    analogy: 'A single work order: "hang the kitchen door", not "finish the kitchen".',
    related: ['roadmap', 'gate'],
  },
  {
    id: 'kit',
    term: 'Kit',
    category: 'xanadu',
    short:
      'Everything prepared before a build starts: the written spec, the parts that must not change, the tests, and the task list.',
    body: 'Before Xanadu builds a feature, a person (with a frontier model’s help) prepares a kit: a short specification, the core pieces written by hand and locked, the tests that define "done", and the roadmap of tasks. A good kit is most of the difference between a run that finishes and one that wanders.',
    analogy: 'Blueprints, the materials list and the inspection checklist, ready before the crew arrives.',
    related: ['roadmap', 'locked-contract', 'tests'],
  },
  {
    id: 'locked-contract',
    term: 'Locked contract',
    category: 'xanadu',
    short:
      'Core code written by hand that the AI may use but never change, so every task builds on the same foundation.',
    body: 'The shapes of the data and the key connections between parts are written by a person and marked locked. The models build around them. This stops a model from quietly inventing its own version of something that other tasks depend on.',
    analogy: 'Load-bearing walls: everyone builds around them; nobody moves them.',
    related: ['kit'],
  },
  {
    id: 'planner-executor-validator',
    term: 'Planner, executor, validator',
    category: 'xanadu',
    short: 'The three roles inside the loop: one breaks work into tasks, one writes each change, one checks it.',
    body: 'The planner turns the roadmap into the next task and what the model needs to see. The executor is the AI model writing the change. The validator runs the checks (static analysis and the task’s tests) and decides whether the change is accepted.',
    related: ['autonomous-loop', 'static-analysis', 'tests'],
  },
  {
    id: 'tests',
    aliases: ['conformance test suite', 'test suite'],
    term: 'Tests',
    category: 'xanadu',
    short:
      'Small programs that check the real program does what it should. If they pass, the change works; if not, it doesn’t count.',
    body: 'Automated checks that run the code and compare what it does with what it should do. In Xanadu the tests are written before the code, so they define what "done" means, and an AI model can’t talk its way past them.',
    related: ['gate', 'test-safety-net'],
  },
  {
    id: 'gate',
    term: 'Gate',
    category: 'xanadu',
    short: 'The automatic check a task must pass before its change is accepted. No pass, no merge.',
    body: 'Every task names its gate: usually a specific test, sometimes a code check. The harness runs it on every attempt. Only a change that passes is merged into the project; anything else is retried with the failure explained.',
    analogy: 'The inspection: the work isn’t signed off until the inspector passes it.',
    related: ['tests', 'merge', 'first-pass-rate'],
  },
  {
    id: 'static-analysis',
    term: 'Static analysis',
    category: 'xanadu',
    short: 'Checking code for mistakes without running it, the way a spell-checker reads a document.',
    body: 'Tools that read code and flag errors, missing pieces and risky patterns before it ever runs. It is fast and catches a large share of an AI model’s slips, so it runs on every attempt alongside the tests.',
    related: ['tests', 'gate'],
  },
  {
    id: 'merge',
    term: 'Merge',
    category: 'xanadu',
    short: 'Accepting a finished, checked change into the real project.',
    body: 'Each task is worked on separately; when it passes its gate it is merged into the main copy of the project, with a record of what changed and why. A failed attempt is simply discarded.',
    analogy: 'Signing off a finished job.',
    related: ['gate'],
  },
  {
    id: 'ladder',
    aliases: ['tiers', 'escalate', 'escalates'],
    term: 'The ladder (tiers and escalation)',
    category: 'xanadu',
    short:
      'Every task starts on the smallest, cheapest model; only if it keeps failing does it move up to a bigger one, and only rarely to a paid frontier model.',
    body: 'The models are arranged in tiers from small and fast to large and capable. A task starts at the bottom. If it fails repeatedly, the harness escalates it one rung up. The paid frontier model sits at the top and is reached only when every local tier has failed, so expensive compute goes only to the problems that need it.',
    analogy: 'The apprentice tries first; the master tradesman is called only when needed.',
    related: ['local-model', 'frontier-model', 'harness'],
  },
  {
    id: 'parallel-workers',
    term: 'Parallel workers',
    category: 'xanadu',
    short: 'Several copies of the loop working on different tasks at the same time.',
    body: 'When a roadmap is large, Xanadu runs several workers side by side, each on its own task and its own copy of the project, merging as each one passes. More workers means the same plan finishes in less calendar time.',
    related: ['runpod', 'gpu'],
  },
  {
    id: 'bad-patterns',
    term: 'BAD_PATTERNS',
    category: 'xanadu',
    short:
      'A list of mistakes the models have made before. Xanadu blocks any change that repeats one, instantly, before wasting a test run.',
    body: 'When the same kind of error shows up more than once, it is written down as a pattern. From then on, any change matching it is rejected straight away with the known fix, so the loop doesn’t spend attempts learning the same lesson again.',
    analogy: 'The site’s "we’ve been burned by this before" checklist.',
    related: ['rule-promotion'],
  },
  {
    id: 'rule-promotion',
    aliases: ['learned-rules promotion', 'rule promotion'],
    term: 'Rule promotion',
    category: 'xanadu',
    short:
      'When the same fix is needed again and again, it becomes a permanent rule every project and machine follows.',
    body: 'Repeated corrections are collected and, once they prove themselves, promoted into the shared rules the models are given on every task. The system gets better at avoiding a mistake instead of just fixing it each time.',
    related: ['bad-patterns', 'velocity-log'],
  },
  {
    id: 'velocity-log',
    aliases: ['velocity report', 'velocity log'],
    term: 'Velocity log',
    category: 'xanadu',
    short: 'A record of every task: how long it took, how many attempts, and which model did it.',
    body: 'Every attempt is logged. Over time the log shows which kinds of task are quick and which are hard, and that shapes how future work is split up and estimated.',
    related: ['first-pass-rate'],
  },
  {
    id: 'first-pass-rate',
    term: 'First-pass success rate',
    category: 'xanadu',
    short: 'The share of tasks whose very first attempt passed its checks.',
    body: 'A measure of how well tasks are written and how capable the models are. A high rate means less time and compute spent on retries.',
    related: ['gate', 'velocity-log'],
  },
  {
    id: 'mcp',
    term: 'MCP',
    category: 'xanadu',
    short:
      'A standard way to plug tools into an AI assistant, so it can, for example, start a Xanadu run or read its status.',
    body: 'Model Context Protocol: an open standard, introduced by Anthropic, for connecting AI assistants to other software. Xanadu offers one, so an assistant such as Claude can launch a run, check progress or stop it on request.',
    analogy: 'A universal power socket: any assistant that has the plug can use any tool that has the socket.',
    related: ['agentic-assistant'],
  },

  // ---- Building and shipping software ----
  {
    id: 'agile',
    aliases: ['agile'],
    term: 'Agile',
    category: 'delivery',
    short:
      'A way of building in small, frequent steps, checking with real use after each, instead of one long plan delivered at the end.',
    body: 'Work is broken into small pieces and delivered in short cycles (sprints), so what gets built next is decided by what was learned from the last piece. Xanadu’s small tasks and frequent merges are the same idea, applied to the code itself.',
    related: ['sprint', 'backlog'],
  },
  {
    id: 'sprint',
    aliases: ['sprints', 'sprint'],
    term: 'Sprint',
    category: 'delivery',
    short: 'A short, fixed stretch of work, usually one or two weeks, with a clear goal.',
    body: 'A team commits to a set of work for the sprint, delivers it, reviews what happened, and plans the next one.',
    related: ['agile'],
  },
  {
    id: 'swot',
    term: 'SWOT',
    category: 'delivery',
    short: 'Strengths, weaknesses, opportunities, threats: a one-page way to size up a product or plan.',
    body: 'A simple grid: what is good and bad inside the product (strengths, weaknesses), and what could help or hurt it from outside (opportunities, threats). Useful at the start of a project for deciding what to build first.',
  },
  {
    id: 'cycle-time',
    term: 'Cycle time',
    category: 'delivery',
    short: 'How long a piece of work takes from starting it to having it finished and live.',
    body: 'One of the clearest measures of a team’s speed: the time from "work started" to "in users’ hands". A pilot measures it before and after, so the effect is a number rather than an impression.',
    related: ['throughput', 'pilot'],
  },
  {
    id: 'throughput',
    term: 'Throughput',
    category: 'delivery',
    short: 'How many pieces of work a team finishes in a given period.',
    body: 'Measured per week or per sprint. Together with cycle time it shows whether a team is really shipping more.',
    related: ['cycle-time'],
  },
  {
    id: 'escaped-defects',
    term: 'Escaped defects',
    category: 'delivery',
    short: 'Bugs that got past the team’s checks and reached real users.',
    body: 'The measure that keeps speed honest: shipping more is no help if more bugs reach customers. A pilot tracks it alongside cycle time and throughput.',
    related: ['cycle-time', 'tests'],
  },
  {
    id: 'pilot',
    term: 'Pilot',
    category: 'delivery',
    short: 'A small, time-boxed trial on one team’s real work, measured before and after.',
    body: 'Rather than a promise, a pilot runs the loop on one team’s actual backlog for about six weeks, with the same measures taken before and after. The team keeps the setup and the numbers whatever they show.',
    related: ['cycle-time', 'throughput', 'escaped-defects'],
  },
  {
    id: 'test-safety-net',
    term: 'Test safety net',
    category: 'delivery',
    short:
      'Tests written around existing code first, so any later change that breaks how it behaves today is caught at once.',
    body: 'Before modernising old code, tests are written that pin down exactly what it does now, quirks included. Then every change, by a person or by the loop, has to keep those tests passing, so nothing the business relies on breaks unnoticed.',
    related: ['tests', 'gate'],
  },

  {
    id: 'commit',
    term: 'Commit',
    category: 'delivery',
    aliases: ['commit', 'commits'],
    short:
      'One saved change to a project’s code, with a note saying what changed. A project’s history is its list of commits.',
    body: 'Code is kept in a version-control system (almost always Git) that records every change. Each recorded change is a commit, with who made it, when, and why. Counting commits is a rough measure of activity; reading them tells the story of a project.',
    related: ['merge'],
  },
  {
    id: 'spec',
    term: 'Spec (specification)',
    category: 'xanadu',
    aliases: ['normative spec', 'spec-first'],
    short:
      'A short document that says exactly what the software must do. "Spec-first" means writing it, and its tests, before any code.',
    body: 'A specification describes the rules precisely enough that two people would build the same thing from it. "Normative" means it is the authority: if the code and the spec disagree, the code is wrong. Writing the spec and its tests first gives Xanadu a target it can check itself against.',
    related: ['kit', 'tests'],
  },

  // ---- The tech behind the projects ----
  {
    id: 'flutter',
    term: 'Flutter',
    category: 'stack',
    aliases: ['Flutter'],
    short: 'Google’s toolkit for building one app that runs on iPhone, Android and the web from the same code.',
    body: 'Instead of writing an iPhone app and an Android app separately, a Flutter app is written once, in Dart, and runs on both, and in a browser.',
    related: ['dart'],
  },
  {
    id: 'dart',
    term: 'Dart',
    category: 'stack',
    aliases: ['Dart'],
    short: 'The programming language Flutter apps are written in, made by Google.',
    body: 'A modern language designed for building apps. Most of the phone apps on this site are written in it.',
    related: ['flutter'],
  },
  {
    id: 'firebase',
    term: 'Firebase',
    category: 'stack',
    aliases: ['Firebase'],
    short:
      'Google’s ready-made back end for apps: sign-in, a database, file storage and hosting, without running your own servers.',
    body: 'Apps need somewhere to keep accounts and data. Firebase provides those pieces as a service, so a small team can ship an app without building and maintaining servers.',
    related: ['firestore', 'cloud-functions'],
  },
  {
    id: 'firestore',
    term: 'Firestore',
    category: 'stack',
    aliases: ['Google Cloud Firestore', 'Firestore'],
    short:
      'Firebase’s database: keeps an app’s data in the cloud, syncs it between devices, and keeps working offline.',
    body: 'A cloud database from Google. Changes on one phone appear on the others, and an app keeps working without signal and catches up when it reconnects.',
    related: ['firebase'],
  },
  {
    id: 'cloud-functions',
    term: 'Cloud Functions',
    category: 'stack',
    aliases: ['Firebase Cloud Functions', 'GCP Cloud Functions', 'Cloud Functions'],
    short: 'Small pieces of server code that run in Google’s cloud only when something triggers them, billed per use.',
    body: 'For the jobs an app can’t do on the phone itself (calling an AI model with a secret key, sending a notification), a function runs in the cloud on demand. There is no server to keep running in between.',
    related: ['firebase'],
  },
  {
    id: 'nextjs',
    term: 'Next.js',
    category: 'stack',
    aliases: ['Next.js'],
    short: 'A popular framework for building websites and web apps with React. This site is built with it.',
    body: 'Next.js takes care of pages, links, loading speed and search-engine friendliness, so the work goes into the product rather than the plumbing.',
    related: ['react'],
  },
  {
    id: 'react',
    term: 'React',
    category: 'stack',
    aliases: ['React'],
    short: 'A library, from Meta, for building interactive web pages out of reusable pieces.',
    body: 'React lets a page be built from components (a button, a card, a chart) that update themselves when the data behind them changes. It is the most widely used way to build web interfaces.',
    related: ['nextjs', 'react-native'],
  },
  {
    id: 'react-native',
    term: 'React Native',
    category: 'stack',
    aliases: ['React Native'],
    short: 'React for phone apps: one set of code for both iPhone and Android.',
    body: 'The same idea as Flutter, from the React world: write the app once and ship it to both app stores.',
    related: ['react', 'flutter'],
  },
  {
    id: 'typescript',
    term: 'TypeScript',
    category: 'stack',
    aliases: ['TypeScript'],
    short: 'JavaScript with a safety net: it catches many mistakes before the code ever runs.',
    body: 'TypeScript adds types (this is a number, that is a date) to JavaScript, so tools can spot mismatches as the code is written. That makes it a good fit for AI-written code, because mistakes surface immediately.',
    related: ['javascript', 'static-analysis'],
  },
  {
    id: 'javascript',
    term: 'JavaScript',
    category: 'stack',
    aliases: ['JavaScript'],
    short: 'The programming language every web browser runs.',
    body: 'Anything interactive on a web page runs on JavaScript. With Node.js it also runs on servers.',
    related: ['typescript', 'nodejs'],
  },
  {
    id: 'nodejs',
    term: 'Node.js',
    category: 'stack',
    aliases: ['Node.js', 'Node/TypeScript'],
    short: 'Runs JavaScript (and TypeScript) outside a browser: on servers, and for tools on a developer’s computer.',
    body: 'Node.js lets the language of the web power back ends, scripts and command-line tools too.',
    related: ['javascript', 'typescript'],
  },
  {
    id: 'python',
    term: 'Python',
    category: 'stack',
    aliases: ['Python'],
    short: 'A widely used, readable programming language, and the usual choice for AI work. Xanadu is written in it.',
    body: 'Python is popular for automation, data and AI because it is quick to write and has a library for almost everything.',
  },
  {
    id: 'shell',
    term: 'Shell scripts',
    category: 'stack',
    aliases: ['Shell'],
    short: 'Lists of command-line instructions saved as a file, to automate jobs on a computer.',
    body: 'The glue of software work: start this, wait for that, restart it if it stops. Xanadu’s supervisor, which keeps a run going overnight, is a shell script.',
  },
  {
    id: 'tailwind',
    term: 'Tailwind CSS',
    category: 'stack',
    aliases: ['Tailwind CSS'],
    short: 'A way of styling web pages with short, ready-made style names written straight into the page.',
    body: 'Instead of a separate style sheet, each element carries names like "rounded" or "text-gray-600". It keeps a site’s look consistent and is easy for AI models to get right.',
  },
  {
    id: 'vitest',
    term: 'Vitest',
    category: 'stack',
    aliases: ['Vitest'],
    short: 'A tool that runs automated tests on JavaScript and TypeScript code.',
    body: 'Vitest runs a project’s tests in seconds, which matters when a loop runs them on every attempt.',
    related: ['tests'],
  },
  {
    id: 'drizzle',
    term: 'Drizzle',
    category: 'stack',
    aliases: ['Drizzle'],
    short: 'A library that lets TypeScript code read and write a database safely.',
    body: 'Drizzle describes the database’s tables in TypeScript, so a mistake in a query is caught before it runs.',
    related: ['typescript'],
  },
  {
    id: 'anthropic-api',
    term: 'Anthropic API',
    category: 'stack',
    aliases: ['Anthropic API'],
    short: 'The paid connection a program uses to send work to Claude, billed per token.',
    body: 'Chat apps are for people; an API is for programs. Xanadu uses Anthropic’s API to reach Claude when a task has beaten every local model.',
    related: ['frontier-model', 'tokens', 'ladder'],
  },
];

export const GLOSSARY_BY_ID: Record<string, GlossaryEntry> = Object.fromEntries(GLOSSARY.map((e) => [e.id, e]));

// Lookups for linking terms inside text that comes from data (project pages): every alias, longest first, so
// "local LLM tiers" matches "local LLM" before anything shorter.
const ALIASES: { phrase: string; id: string }[] = GLOSSARY.flatMap((e) =>
  [e.term, ...(e.aliases ?? [])].map((phrase) => ({ phrase, id: e.id })),
).sort((a, b) => b.phrase.length - a.phrase.length);

/** The entry a whole label (a project tag, say) names, if any. */
export function entryForLabel(label: string): GlossaryEntry | undefined {
  const l = label.trim().toLowerCase();
  const hit = ALIASES.find((a) => a.phrase.toLowerCase() === l);
  return hit ? GLOSSARY_BY_ID[hit.id] : undefined;
}

export type TextPiece = string | { id: string; text: string };

/** Splits [text] into plain runs and terms to mark, for the ids in [allowed] only, each at most once per [seen]. */
export function findTerms(text: string, allowed: readonly string[], seen: Set<string>): TextPiece[] {
  const candidates = ALIASES.filter((a) => allowed.includes(a.id));
  const pieces: TextPiece[] = [];
  let rest = text;
  for (;;) {
    let best: { index: number; phrase: string; id: string } | null = null;
    for (const a of candidates) {
      if (seen.has(a.id)) continue;
      const m = new RegExp(`(?<![\\w-])${a.phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\w-])`, 'i').exec(rest);
      if (m && (!best || m.index < best.index)) best = { index: m.index, phrase: m[0], id: a.id };
    }
    if (!best) break;
    if (best.index > 0) pieces.push(rest.slice(0, best.index));
    pieces.push({ id: best.id, text: best.phrase });
    seen.add(best.id);
    rest = rest.slice(best.index + best.phrase.length);
  }
  if (rest) pieces.push(rest);
  return pieces;
}
