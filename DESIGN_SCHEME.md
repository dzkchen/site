# Personal Portfolio Design Scheme

Status: direction locked from David's questionnaire answers on September 20, 2026. Project copy remains iterative.

## Core idea

**Creative spine: In love with the game**

The site should feel like a personal game tape placed over an expansive printed landscape: candid, highly visual, and more interested in the work than résumé ceremony. It can be experimental and aesthetic-first as long as the writing remains legible.

The central tension is intentional:

- Nathan Yan's narrow, candid, text-first clarity.
- Moiz Hashmi's personality, project density, filters, and curiosity-driven side rooms.
- The supplied images' dreamlike landscapes, classical-surreal crops, large quiet areas, and tactile print texture.
- Mono-color's disciplined editorial system: exposed paper, no more than two inks inside generated artwork, one focal event, and restrained typography.

The result should not look like a startup landing page, a generic developer dashboard, or a collection of floating cards. It should feel authored by David Chen.

## Experience statement

On first load, a visitor should understand four things within ten seconds:

1. who David is;
2. what he builds;
3. which work is worth opening;
4. that he studies CS + Finance at UWaterloo;
5. how to contact him.

After that, the site rewards curiosity with short thoughts, experiments, games, music, and honest unfinished work.

## Reference synthesis

### From Moiz Hashmi

- Use specific, outcome-oriented project writing instead of vague skill lists.
- Let the voice be personal and a little playful.
- Provide lightweight project categories rather than hiding everything behind identical cards.
- Treat `thoughts`, `bookshelf`, and other personal collections as meaningful parts of the site, not footer links.
- Keep the work visibly alive through images, current interests, and small interactive details.

### From Nathan Yan

- Lead with plain language and strong claims.
- Use a narrow readable measure for biography, history, and links.
- Keep hierarchy simple enough that the writing—not chrome—does the work.
- Include essays as a first-class destination.
- Avoid résumé-page ceremony and excessive navigation.

### From the four supplied images

- Landscape is an environmental layer rather than a rectangular hero image.
- Quiet negative space should frame the content.
- Halftone and grain provide material character.
- Strong editorial serif type can coexist with restrained utility sans type.
- Dramatic crops and edge-framing create scale without filling every area.
- Vivid color should be concentrated in one visual event, not scattered across UI decorations.

## Art direction

### Concept

Use an original two-ink printed landscape as the site's recurring visual field. The target mood is serene, with the clean negative space of reference image 4 and the blue-pink environmental atmosphere of reference image 3. On mobile it begins as a quiet paper sky behind the introduction and becomes denser as the visitor scrolls toward selected work. On wider screens it can sit at the bottom and outer edges of the opening viewport, framing the content without reducing legibility.

The landscape represents exploration and range without resorting to literal code imagery. It also gives the site a recognizable silhouette when screenshotted.

The final composition should balance editorial restraint with one surreal interruption. There is no portrait. Instead, the live hero typography becomes the interruption: one oversized serif word may cross into the halftone landscape, with a slight pink registration offset on focus or hover. The landscape and David's words—not a headshot—carry the identity.

### Initial art study

![Two-ink cobalt and terracotta editorial mountain landscape](assets/portfolio-landscape-study.png)

Path: `assets/portfolio-landscape-study.png`

This is a concept asset, not yet the final production background. Before launch it should be tested at actual breakpoints and may be regenerated as separate portrait and landscape crops.

### Print recipe

- Mode: complementary duotone.
- Substrate: Neutral White `#FAFAF7`.
- Dominant plate: Cobalt `#2148B8`, approximately 78% of printed coverage.
- Accent plate: Terracotta `#C65F38`, approximately 22%.
- Layout: image field with an editorial landscape anchored to the lower half.
- Focal event: one sweeping foreground ridge.
- Release zone: broad unprinted sky for live HTML content.
- Process: coarse halftone, clipped highlights, exposed-paper cutouts, mild registration drift, and subtle paper fiber.
- Hard avoids: in-image text, logos, fake UI, smooth gradients, glossy depth, full-color photography, decorative blobs, torn-paper collage, and excessive distressing.

### Production prompt

> Create an original text-free vertical 3:4 editorial landscape for a developer and designer portfolio. Keep roughly the upper 42% as a quiet Neutral White paper release zone. Build the lower area from broad overlapping mountain and valley plates, with one decisive sweeping ridge as the focal event and enough edge height to frame the page. Use exactly two printing inks: dominant Cobalt `#2148B8` and restrained Terracotta `#C65F38`. Render as a contemporary risograph or screenprint with coarse halftone, clipped highlights, exposed-paper cutouts, mild ink pooling, restrained registration drift, and subtle paper fiber. Keep the composition asymmetrical and recognizable at thumbnail size. No text, letters, logos, UI, people, statues, buildings, full-color photography, digital gradients, drop shadows, 3D depth, collage scraps, or generic vaporwave motifs.

## Visual system

### Interface palette

The artwork stays strictly two-ink. The accessible interface may use neutral support values.

| Token | Value | Use |
| --- | --- | --- |
| Paper | `#FAFAF7` | Main canvas |
| Ink | `#161A22` | Primary text |
| Muted ink | `#686A70` | Metadata and secondary copy |
| Rule | `#161A2233` | Dividers and borders |
| Cobalt | `#2148B8` | Links, focus, primary art plate |
| Terracotta | `#C65F38` | Selected states and art accent |
| Registration pink | `#E85D9E` | Rare hover, selection, and music-page accent |

Avoid using cobalt, terracotta, and pink at equal weight. Cobalt does most interface work, terracotta belongs primarily to the landscape, and pink appears like a small registration error: selected text, one hover state, or one music-page marker. There is no dark mode; the printed-paper identity remains consistent.

### Typography

- Display: **Newsreader Variable** or a similar literary serif with expressive italics.
- Utility and body: **Inter Variable** or a similarly neutral grotesk.
- Optional microtype: the same sans in tabular/uppercase settings; do not add a third font merely to simulate a terminal.
- Mobile display size: approximately `clamp(3rem, 15vw, 5.25rem)`.
- Desktop display size: approximately `clamp(5rem, 10vw, 9rem)`.
- Body measure: `58–68ch` for long reading; `28–42ch` for hero copy.
- Use one dramatic scale jump per view and keep supporting labels quiet.

### Shape and texture

- Borders are hairlines or 1 px rules, not rounded containers everywhere.
- Most surfaces remain transparent so the page feels like one continuous printed sheet.
- Reserve modest rounding for interactive chips, thumbnail masks, or a single signature control.
- Use actual texture in the art asset; do not layer noisy CSS over all text.

## Information architecture

### Primary navigation

- `me`
- `work`
- `experience`
- `thoughts`
- `side b`
- `contact`

On mobile, use a compact sticky index bar with horizontally scrollable text labels. On desktop, use a small top index or slim left rail. Avoid a hamburger unless the final content genuinely requires more than five primary destinations.

### Homepage sequence

1. **Masthead** — `David Chen`, compact navigation, and no separate logo.
2. **Opening statement** — `In love with the game`, `CS + Finance @ UWaterloo`, and a short original introduction.
3. **Proof strip** — `$14.8K moved`, `5,600+ transactions`, `2 hackathon podiums`, and `282 commits / 2 months`.
4. **Featured work** — Oh My Diff, FraserPay, Fraser Grads '26, and Doceo as large editorial entries.
5. **More builds** — Penny, email-me, and Dhen as compact entries without demoting them into generic cards.
6. **Experience** — Ise AI and Great Worldwide Logistics, visually separate from personal projects.
7. **Thoughts** — the home page may show an honest empty state until David publishes; never invent filler essays.
8. **Side B** — a teaser for songs David likes, presented like album liner notes with no autoplay.
9. **Contact/colophon** — `d367chen@uwaterloo.ca`, GitHub, LinkedIn, X, technology credits, and a short human sign-off. Do not offer a résumé download.

### Secondary pages

- `/work/[slug]`: concise project case studies.
- `/thoughts`: short notes and essays in one index.
- `/thoughts/[slug]`: distraction-free reading page.
- `/side-b`: songs David likes, with an optional one-line note for each track.

Launch today with a single-page home. Work, thought, and Side B pages can follow as static templates. Do not add a CMS; projects and thought metadata can remain hardcoded and still support client-side filters.

### Side B seed tracks

1. [Hours In Silence — Drake, 21 Savage](https://open.spotify.com/track/0sSRLXxknVTQDStgU1NqpY)
2. [My Kitchen — Gucci Mane](https://open.spotify.com/track/5IFi8YfugyA9JBdfHlaMUP)
3. [Everybody Talks — Neon Trees](https://open.spotify.com/track/2iUmqdfGZcHIhS3b9E9EWq)
4. [Un-thinkable (I'm Ready) (feat. Drake) — Remix — Alicia Keys, Drake](https://open.spotify.com/track/4o4wEDRqotccDTXiQ7TORu)
5. [Last Friday Night (T.G.I.F.) — Katy Perry](https://open.spotify.com/track/1htQDV8JxSuXG2QsNj5ttr)
6. [Inner Light — Elderbrook, Bob Moses](https://open.spotify.com/track/40tPP3K10yMZxwnT65REKj)
7. [Rocketeer — Far East Movement, Ryan Tedder, Ruff Loaderz](https://open.spotify.com/track/45sDIKapDyxPl307QpEAwl)

Render these as a numbered track list linking to Spotify. Do not autoplay or embed seven players. Album art may be added later only if licensing, layout, and page weight remain clean.

## Homepage copy direction

### Hero

```text
David Chen

In love with the game.
CS + Finance @ UWaterloo.

I build software, learn the parts I do not know yet,
and care a little too much about making the result feel right.
```

The final sentence is proposed copy, not a quotation from David. It should remain easy to revise during implementation.

### Featured work

#### Oh My Diff

**Angle:** ambitious systems work and David's current flagship project.

> A moddable patch set for the Codex CLI. It keeps `codex` as the daily driver while opening coordination, context, tools, and terminal behavior to TypeScript mods. The native foundation and an experimental mod host work today; the broader public API is still in progress.

Use a `private → public soon` status label until the repository is actually public. Do not claim measured cost savings yet.

#### FraserPay

**Angle:** production integrity and real-world usage.

> A school-event wallet and append-only ledger used by 1,000+ students to move $14.8K across 5,600+ QR-code transactions. Built for integrity under pressure with idempotent checkout, offline PWA behavior, 700+ tests, and a measured 37 ms p95 at 10+ charges per second.

Primary artifacts: live product, transaction-flow diagram, mobile wallet, checkout, and admin views.

#### Fraser Grads '26

**Angle:** community software and learning in public.

> An unofficial digital yearbook and survey platform for Fraser's graduating class. It collected 300+ authenticated submissions through a Next.js frontend and Go API, with HMAC-signed service calls, Postgres, direct Cloudflare R2 uploads, and generated validation shared across the stack.

Primary artifacts: existing landing, directory, and survey screenshots plus the live site.

#### Doceo

**Angle:** multimodal experimentation under a hackathon deadline.

> A piano coach that turns one performance video into score alignment, posture checks, spoken feedback, and practice drills. The FastAPI pipeline combines Basic Pitch, MIDI preprocessing, DTW, OpenCV, MediaPipe, Gemini, and ElevenLabs, reaching roughly 80% note-alignment accuracy and placing second at Eureka Hacks '26.

Primary artifact still needed: one clean results-screen or demo-video frame.

### More builds

#### Penny

> A local-first Python pentesting assistant that scans source, safely proves findings with read-only probes, and hands ranked fixes to coding agents. It placed second in the GenAI category at JamHacks 10.

Emphasize safety boundaries and the scan-to-handoff workflow rather than unverified benchmark comparisons.

#### email-me

> A Python CLI that turns YC company pages into founder-email candidates, checks domains through MX records and SMTP handshakes, and supports concurrent batch runs with table, JSON, or CSV output.

Use a crisp terminal capture as its primary artifact.

#### Dhen

> Learnt Fabric + Kotlin through 282 commits over two months for a potential internship at Moonsworth—better known as Lunar Client—only to get ghosted `</3`.

This should remain an honest, funny postmortem rather than pretending the archived project shipped. A GUI screenshot is still needed if one exists.

## Experience copy direction

### Ise AI — Member of Technical Staff Intern

- Reduced duplicate image uploads from 26% to 7% across 258 GB of object storage using validated first-party URLs, deterministic UUIDv5 identifiers, idempotent PostgreSQL upserts, and request-scoped caching.
- Shipped a React/Canvas ad generator that reduced a ten-step workflow to two file drops for roughly 25 brands and cut mis-keyed pixels from 14.2% to under 5%.
- Co-built a creator-sourcing platform screening 100,000+ social handles daily and driving a 14% reply rate through qualified, scheduled outreach.

### Great Worldwide Logistics — Freight Forwarder Intern

- Coordinated logistics and technical support across 30+ weekly tickets.
- Processed shipping documents for 40+ shipments using IQAX and internal systems.

Keep this experience section concise. The portfolio should not visually imply that company employment and personal projects are the same category.

## Signature interactions

### Keep for the first build

- Project filter labels that update the work index without navigation.
- A `thought length` indicator such as `40 sec`, `3 min`, or `essay`.
- A quiet hover/focus reveal showing one artifact or result image.
- A print/reader toggle that removes the environmental art from long-form pages.
- **Game tape:** unfinished or imperfect projects may show an honest lesson instead of a manufactured success metric; Dhen is the first example.
- **Side B:** the music page uses restrained liner-note typography, one pink cue, and no embedded player until it materially improves the experience.
- Reduced-motion support from the beginning.

### Good candidates after launch

- **Build ledger:** a chronological trail of shipped milestones and lessons.
- **Artifact drawer:** small items that are too interesting for a résumé but too small for a case study.
- **Idea garden:** short evolving notes that can later grow into essays.
- **Ambient edition marker:** each meaningful redesign gets an edition number and tiny colophon note.

### Reject unless there is a concrete reason

- Custom cursor.
- Fake terminal.
- Skill progress bars.
- Auto-playing audio.
- Canvas particles.
- Scroll-jacked transitions.
- Multiple color themes.
- 3D scene or WebGL landscape.

Each optional feature must earn its place by helping a visitor understand David, navigate work, or remember the site. Remove it if it delays content, hurts mobile performance, or competes with reading.

## Mobile-first behavior

### Base: 320–639 px

- Single content column with `20–24px` side padding.
- Name and opening statement appear before decorative art becomes dense.
- Background art begins near the lower half of the first viewport and remains `aria-hidden`.
- Project entries stack as editorial rows; image follows the title and summary.
- Touch targets are at least 44 px.
- Navigation labels scroll horizontally without hiding the current section.
- No fixed background attachment or parallax.

### Medium: 640–1023 px

- Expand to a loose six-column grid.
- Project metadata may sit beside summaries.
- Art can frame the lower corners while retaining a quiet content channel.

### Large: 1024 px and above

- Use a twelve-column grid and a maximum shell around `1440px`.
- Keep the biography/readable copy narrow rather than stretching it.
- Allow selected projects to alternate between wide visual fields and compact text-led entries.
- Use a wide, separately art-directed background crop if the portrait study loses its focal ridge.

## Motion

- Page load: one short opacity/translate reveal for the masthead and opening statement.
- Scroll: section rules and labels may fade in once; the landscape itself remains stable.
- Hover: 120–180 ms color, underline, or image-reveal transitions.
- Never animate body copy continuously.
- Under `prefers-reduced-motion: reduce`, remove transforms and non-essential fades.

## Accessibility and performance

- Meet WCAG AA contrast for all live text.
- Use semantic landmarks and a visible skip link.
- Preserve keyboard access for filters, navigation, drawers, and theme controls.
- Generated background art is decorative and should not carry information.
- Provide meaningful alt text for project artifacts.
- Use responsive `avif`/`webp` derivatives while retaining the original PNG as the source artifact.
- Target an initial page under 250 KB of critical transferred assets where practical; defer the large art asset and project media intelligently.
- Keep long-form pages readable with JavaScript disabled.

## Recommended technical foundation

Start without React and optimize for a Vercel launch today.

- Semantic HTML.
- Tailwind CSS, built with the CLI rather than a browser CDN.
- Small ES modules for filtering, drawer behavior, and optional view transitions.
- Project and experience content stored in a small JavaScript data module.
- Thoughts stored as static HTML or Markdown-derived files once any exist.
- `pnpm` for packages and `mise run` tasks when the repository defines them.

Add Vite only when bundling, asset transforms, or local authoring ergonomics justify it. Add React only if multiple stateful components begin sharing behavior; it is unnecessary for the first version described here.

## Content model

Every selected project should answer:

- What was it?
- Why did it matter?
- What did David personally own?
- What difficult decision or constraint shaped it?
- What shipped or changed?
- Where can someone see the source, demo, or evidence?

Every future thought should have:

- a plain title;
- publication or revision date;
- length/type label;
- one-sentence premise;
- stable URL.

Thought filters may use publication date, revision date, reading time, type, and tags. This remains hardcoded data and does not justify a database or content platform.

## Definition of a successful first release

- A stranger can state what David does after one viewport.
- Three strong projects are understandable without opening their detail pages.
- The site has a memorable visual silhouette but remains readable on a 320 px screen.
- A short thought can be published without editing application code.
- Keyboard navigation, reduced motion, and no-JavaScript reading all work.
- Lighthouse checks are strong, but measured loading and interaction on a real phone are the acceptance test.

## Inputs still needed

1. Exact LinkedIn and X profile URLs.
2. A Doceo results screenshot or demo frame, if one exists.
3. A Dhen in-game GUI screenshot, if one exists.
4. An Oh My Diff terminal screenshot after the current interface is ready to show publicly.
5. Optional one-line notes for any Side B tracks if David wants the page to say more than the titles themselves.

The completed questionnaire remains in [`PORTFOLIO_QUESTIONNAIRE.md`](PORTFOLIO_QUESTIONNAIRE.md).

## Sources reviewed

- [Moiz Hashmi](https://www.moizhashmi.com/)
- [Nathan Yan](https://nathanyan.vercel.app/)
- The four image references supplied for this project.
- David's September 2026 résumé.
- Current local Oh My Diff and Dhen sources plus the public READMEs for FraserPay, Fraser Grads '26, Doceo, Penny, and email-me.
- [mono-color-skill](https://github.com/yanliudesign/mono-color-skill), pinned locally at commit `c8ff70597ddedcd65f21a0b528f6a70c35690b0a` after review.
