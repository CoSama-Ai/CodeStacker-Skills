<div align="center">

# CodeStacker Skills 🛠️

![Skills](https://img.shields.io/badge/skills-221+-blue?style=for-the-badge)
![Categories](https://img.shields.io/badge/categories-9-purple?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-yellow?style=for-the-badge)

**Production-ready AI skills for the CodeStacker ecosystem.**

A curated collection of 221+ skills across 9 categories — from AI/ML to full-stack engineering, designed to supercharge your AI development workflow.

<br/>

[Browse Skills](#-skill-categories) · [Install Guide](#-quick-install) · [CodeStacker App](https://github.com/CoSama-Ai/CodeStacker) · [Marketplace](https://codestacker.co) · [cosama.co](https://cosama.co)

---

Part of the **[CodeStacker Marketplace](https://codestacker.co)** — AI prompts, skills & agentic workflows for building with AI

Built by **[CoSama](https://cosama.co)** — AI Development Company

</div>

---

## 🎯 What Are CodeStacker Skills?

**CodeStacker Skills** are specialized instruction files that teach your AI assistant how to work with specific technologies, tools, and frameworks. Think of them as domain expertise you can load on demand.

Each skill contains:
- **Best practices** for the technology
- **Common patterns** and code examples
- **Edge cases** and troubleshooting
- **Integration guides** for related tools

While these skills can be used with **any AI assistant** (Cursor, GitHub Copilot, GPT, Gemini), they're specifically designed for **[CodeStacker 2.3](https://github.com/CoSama-Ai/CodeStacker)** — the Enterprise-Grade AI agent management system with **Workspaces**, **The Director AI**, and **Rigid Architecture** controls.

---

## 📚 Skill Categories

| Category | Skills | Description |
|----------|--------|-------------|
| **[AI/ML](#ai-ml)** | 6 | Machine learning, data science, and AI tools |
| **[Business Core](#business-core)** | 32 | Business automation, productivity, and operations |
| **[Entertainment](#entertainment)** | 9 | Media, streaming, and content creation tools |
| **[Full-Stack Engineering](#full-stack-engineering)** | 61 | Complete web development stack |
| **[Messaging](#messaging)** | 1 | Communication and chat platforms |
| **[Open Claw](#open-claw)** | 3 | Research and exploration tools |
| **[Personal](#personal)** | 7 | Personal productivity and lifestyle |
| **[Social Media](#social-media)** | 53 | Social platforms and content marketing |
| **[Vibe Coding](#vibe-coding)** | 49 | Rapid prototyping and creative tools |

---

## 🗂️ Featured Skills

### AI/ML
- `molfeat` — Molecular featurization for drug discovery
- `resume-builder` — AI-powered resume generation
- `tts-convert` — Text-to-speech automation
- `clockify-automation` — AI time tracking integration

### Business Core
- `stripe-payment` — Payment processing integration
- `modern-python` — Python best practices & tooling
- `calendar-management` — Scheduling automation
- `venue-templates` — Academic paper templates (Nature, NeurIPS, etc.)
- `pptx` — Programmatic PowerPoint generation
- `email-management` — Email automation & workflows

### Entertainment
- `spotify-control` — Playback automation
- `gemini-computer-use` — Browser automation with Gemini
- `home-music` — Whole-house audio control
- `apollo-contact` — Contact enrichment API

### Full-Stack Engineering
- `next-js` — Modern Next.js development
- `supabase` — Backend-as-a-service integration
- `docker` — Container orchestration
- `vercel-deploy` — Deployment automation
- `postgres` — Database design & queries
- `codeql` — Security analysis workflows
- `semgrep` — Static analysis & scanning
- `openalex-database` — Academic research API
- `pytdc` — Therapeutics data commons

### Social Media
- `canvas-design` — Social media graphic generation
- `youtube-summarizer` — Video content extraction
- `component-gen` — UI component generation
- `moodcast` — Content transformation

### Vibe Coding
- `imagen` — AI image generation
- `react-best-practices` — React development patterns
- `notion-meeting` — Meeting intelligence workflows
- `notion-research` — Research documentation

---

## ⚡ Quick Install

### Option A: Full Install (All Skills)

```bash
git clone https://github.com/CoSama-Ai/CodeStacker-Skills.git
cd CodeStacker-Skills

# Copy all categories to your .codestacker/skills/ folder
cp -r ai-ml business-core entertainment full-stack-engineering \
     messaging open-claw personal social-media vibe-coding \
     /path/to/your/project/.codestacker/skills/
```

### Option B: Selective Install (Specific Categories)

```bash
# Clone the repo
git clone https://github.com/CoSama-Ai/CodeStacker-Skills.git /tmp/cs-skills

# Copy only what you need
cp -r /tmp/cs-skills/ai-ml /path/to/project/.codestacker/skills/
cp -r /tmp/cs-skills/full-stack-engineering /path/to/project/.codestacker/skills/

# Clean up
rm -rf /tmp/cs-skills
```

### Option C: Single Skill Install

```bash
# Download a single skill directly
curl -o .codestacker/skills/business-core/stripe-payment.md \
  https://raw.githubusercontent.com/CoSama-Ai/CodeStacker-Skills/main/business-core/stripe-payment/SKILL.md
```

### Option D: AI-Assisted Install

In your CodeStacker-enabled project, simply tell your AI:

```
Mode Free - Install the Next.js, Supabase, and Stripe skills from CodeStacker-Skills
```

The AI will fetch and install them automatically.

---

## 🔗 Works With CodeStacker 2.3

These skills are designed to integrate seamlessly with **[CodeStacker 2.3](https://github.com/CoSama-Ai/CodeStacker)** — the Enterprise-Grade AI agent management system:

| Feature | How Skills Enhance It |
|---------|----------------------|
| **🎬 The Director AI** | Skills are attached during the Director's goal-definition interview — ensuring the right expertise is loaded before coding begins |
| **🏢 Isolated Epic Workspaces** | Each workspace loads only the skills it needs, preventing context overload |
| **🗂️ Federated Master Index** | Skills are indexed in `SKILL_REGISTRY.md` and synced to the master architecture index |
| **🤖 AGENT_REGISTRY.md** | Specialized Agent Personas reference specific skills for their domain (e.g., "Security Auditor" loads security skills) |
| **🧰 TOOL_REGISTRY.md** | Skills define tool capabilities (Postgres CLI, Firecrawl, etc.) that the Dynamic Tool Registry scans |
| **🔑 Credential Protocol** | All skills follow strict security standards — no plaintext API keys, only `.env` variable references |
| **📋 Mode Plan** | AI auto-detects relevant skills by scanning `SKILL_REGISTRY.md` during planning |
| **🔍 Tag System** | Query skills with `#react`, `#supabase`, `#docker` for instant lookup |

> 🚀 **New to CodeStacker?** [Get started here →](https://github.com/CoSama-Ai/CodeStacker#-quick-start)

### Version 2.3 New Features

CodeStacker 2.3 introduces **Rigid Architecture** for production AI development:

- **Complexity Governance Gates** — Skills guide AI behavior under `Gate Review` (human-in-the-loop) or `Gate Full Auto` (maximum velocity)
- **Visual Dashboard & Telemetry** — Track skill usage and effectiveness via Mermaid charts in `dashboard.md`
- **Context Window Management** — Skills are intelligently loaded/unloaded to prevent token limit issues

---

## 🌐 CodeStacker Marketplace

**[codestacker.co](https://codestacker.co)**

These community skills are free and open source. For **engineering-grade skill packs** with production patterns, edge cases, and expert curation, visit the CodeStacker Marketplace.

| Resource | Description |
|----------|-------------|
| **Community Skills** (This Repo) | Free, open-source skills for common technologies |
| **Skill Packs** (Marketplace) | Expert-curated, production-ready skill collections |
| **Props** (Marketplace) | Specialized AI personas with bundled skills |
| **Workflows** (Marketplace) | Agentic pipelines for complete development tasks |

---

## 🤝 Contributing

We welcome contributions! Here's how to add your skills:

1. **Fork** this repository
2. **Create** a new skill folder in the appropriate category
3. **Include** `SKILL.md` and `CREDITS.md` (see existing skills for format)
4. **Submit** a Pull Request

### Skill Guidelines

- ✅ Focus on **practical, hands-on** guidance
- ✅ Include **code examples** and common patterns
- ✅ Document **edge cases** and troubleshooting
- ✅ Credit **original sources** in `CREDITS.md`
- ✅ Use **clear, concise** language

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

## ⚖️ Disclaimer

CodeStacker provides structure and context to AI models — it does not control them. **You are responsible for reviewing all skills, prompts, Props, and Workflows before use.** CoSama accepts no liability for AI model behavior or outcomes resulting from use of this software or any associated content, free or paid.

---

<div align="center">

**Stop reinventing skills. Start stacking them. 🏗️**

[CodeStacker](https://codestacker.co) · [CoSama](https://cosama.co) · [App Repo](https://github.com/CoSama-Ai/CodeStacker) · [Report Issue](https://github.com/CoSama-Ai/CodeStacker-Skills/issues) · [Contribute](https://github.com/CoSama-Ai/CodeStacker-Skills/pulls)

---

Part of the **[CodeStacker](https://codestacker.co)** marketplace — AI prompts, skills & agentic workflows

Created by **[CoSama](https://cosama.co)** — AI Development Company

</div>
