import { createSlice } from '@reduxjs/toolkit'



const eliteITTechnologies = [
    // --- Programming Languages ---
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "C",
    "C++",
    "C#",
    "Go",
    "Rust",
    "Swift",
    "Kotlin",
    "Dart",
    "PHP",
    "Ruby",
    "Scala",
    "Haskell",
    "Perl",
    "Lua",
    "R",
    "Julia",
    "Shell Scripting (Bash, PowerShell)",
    "SQL",
    "NoSQL",
    "MATLAB",
    "Assembly",
    "Objective-C",
    "Solidity",
    "VHDL",
    "Elixir",
    "Clojure",
    "F#",
    "COBOL (for legacy systems)",
  
    // --- Web Development Frameworks ---
    "React.js",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "Angular",
    "Svelte",
    "Solid.js",
    "Alpine.js",
    "Qwik",
    "Astro",
    "Express.js",
    "NestJS",
    "FastAPI",
    "Django",
    "Flask",
    "Ruby on Rails",
    "Spring Boot",
    "Laravel",
    "ASP.NET Core",
    "Phoenix (Elixir)",
  
    // --- Mobile Development ---
    "React Native",
    "Flutter",
    "Swift (iOS Development)",
    "Kotlin (Android Development)",
    "Jetpack Compose",
    "Ionic",
    "Xamarin",
  
    // --- Backend Technologies & Databases ---
    "Node.js",
    "Deno",
    "Bun",
    "GraphQL",
    "Apollo",
    "gRPC",
    "WebSockets",
    "Kafka",
    "RabbitMQ",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "Firebase",
    "Redis",
    "Cassandra",
    "Elasticsearch",
    "InfluxDB",
    "ClickHouse",
    "Supabase",
    "Prisma ORM",
    "TypeORM",
    "Sequelize",
  
    // --- DevOps & Cloud Computing ---
    "Docker",
    "Kubernetes",
    "Terraform",
    "AWS",
    "Google Cloud Platform (GCP)",
    "Microsoft Azure",
    "Heroku",
    "Vercel",
    "Netlify",
    "Cloudflare",
    "DigitalOcean",
    "Ansible",
    "Jenkins",
    "GitHub Actions",
    "CircleCI",
    "Travis CI",
    "Pulumi",
  
    // --- Cybersecurity & Ethical Hacking ---
    "Penetration Testing",
    "Metasploit",
    "Burp Suite",
    "Wireshark",
    "OSINT (Open Source Intelligence)",
    "Kali Linux",
    "Reverse Engineering",
    "Exploit Development",
    "Forensics",
    "Bug Bounty Hunting",
    "Blockchain Security",
    "Zero Trust Architecture",
  
    // --- Machine Learning & AI ---
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Keras",
    "Hugging Face",
    "OpenAI API",
    "LangChain",
    "MLflow",
    "XGBoost",
    "Fast.ai",
    "DeepMind",
    "Stable Diffusion",
    "YOLO (Object Detection)",
    "Neural Networks",
    "Reinforcement Learning",
    "Computer Vision",
    "NLP (Natural Language Processing)",
    "GPT Models",
    "GANs (Generative Adversarial Networks)",
  
    // --- Blockchain & Web3 ---
    "Ethereum",
    "Solidity",
    "Rust (for Solana)",
    "Web3.js",
    "Ethers.js",
    "Smart Contracts",
    "DeFi (Decentralized Finance)",
    "NFT Development",
    "Polkadot",
    "Hyperledger",
    "IPFS (InterPlanetary File System)",
  
    // --- Game Development ---
    "Unity",
    "Unreal Engine",
    "Godot",
    "Panda3D",
    "CryEngine",
    "Cocos2d",
    "GDevelop",
    "Phaser.js",
    "PlayCanvas",
  
    // --- UI/UX & Frontend Technologies ---
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Shadcn/ui",
    "Chakra UI",
    "Ant Design",
    "Framer Motion",
    "GSAP",
    "Figma",
    "Adobe XD",
    "Sketch",
    "Affinity Designer",
  
    // --- Automation & Scripting ---
    "Selenium",
    "Puppeteer",
    "Playwright",
    "Appium",
    "Scrapy",
    "BeautifulSoup",
    "AutoHotkey",
  
    // --- Networking & System Administration ---
    "Linux",
    "Nginx",
    "Apache",
    "Cloudflare",
    "BGP & DNS",
    "Load Balancers",
    "Reverse Proxies",
    "CyberArk",
    "OpenVPN",
    "Zabbix",
    "Prometheus",
    "Grafana",
  
    // --- Edge Computing & IoT ---
    "Raspberry Pi",
    "Arduino",
    "ESP32",
    "LoRaWAN",
    "MQTT",
    "5G Networking",
  
    // --- Software Engineering & Architecture ---
    "Microservices Architecture",
    "Serverless Architecture",
    "Event-Driven Architecture",
    "Monorepo Development",
    "CQRS (Command Query Responsibility Segregation)",
    "Domain-Driven Design (DDD)",
    "Clean Code Principles",
    "Design Patterns",
    "Functional Programming",
  
    // --- Other Trending Technologies ---
    "Quantum Computing",
    "Low-Code / No-Code Development",
    "AI Agents & AutoGPT",
    "Digital Twins",
    "Metaverse Development",
    "Synthetic Data Generation",
    "Privacy-Preserving AI",
    "Edge AI"
  ];
  

export const calculateSlice = createSlice({
  name: 'calculate',
  initialState: {
    value: eliteITTechnologies.length,
    eliteITTechnologies: [...eliteITTechnologies], // Add the array to the state

  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    addSkills: state => {
      state.eliteITTechnologies.push("redux")
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,addSkills } = calculateSlice.actions

export default calculateSlice.reducer