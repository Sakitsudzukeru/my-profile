import type { SocialLink } from "./types";

export const logo = {
  base: "D.",
  accent: "Elena",
};

export const cvButtonLabel = "CV.PDF ↓";
export const cvShortButtonLabel = "CV short ↓";

export const socialLinks: SocialLink[] = [
  { id: "github", title: "GitHub", href: "https://github.com/Sakitsudzukeru" },
  { id: "instagram", title: "Instagram", href: "https://www.instagram.com/sakitsudzukeru/" },
  {
    id: "linkedin",
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/elena-duka-212b803bb/",
  },
  { id: "email", title: "Email", href: "mailto:sadelenik.a@gmail.com" },
];

const assetBase = import.meta.env.BASE_URL;

export const galleryAssets: { image: string }[] = [
  { image: `${assetBase}language-library-landing.png` },
  { image: `${assetBase}langlib-practice.png` },
  { image: `${assetBase}langlib-crossword.png` },
  { image: `${assetBase}langlib-world.png` },
  { image: `${assetBase}npc-dialogue.png` },
  { image: `${assetBase}moderation-mobile.png` },
  { image: `${assetBase}flashcards-card.jpeg` },
  { image: `${assetBase}mycity-auth.png` },
];

export const skillTilesByGroup = {
  backend: [
    "TS",
    "Node",
    "Nest",
    "Express",
    "REST API",
    "WebSockets",
    "PHP",
    "Python",
    "C#",
  ],
  frontend: ["React", "Next", "Vue", "Tailwind"],
  mobile: ["Flutter", "Dart", "React Native"],
  data: [
    "PG",
    "Oracle",
    "Mongo",
    "MariaDB",
    "Redis",
    "Prisma",
    "TypeORM",
    "RabbitMQ",
  ],
  devops: [
    "Docker",
    "Nginx",
    "Linux",
    "CI/CD",
    "AWS S3",
    "Git",
    "Jest",
    "Swagger",
  ],
};

export const footerEmail = "sadelenik.a@gmail.com";

export const projectStack = {
  langLib: ["Next.js", "NestJS", "MongoDB", "Redis", "RabbitMQ", "Node.js", "Docker"],
  flashcards: ["React Native", "TypeScript", "AsyncStorage"],
  cdrParser: ["Node.js", "RabbitMQ", "PostgreSQL"],
  moderation: ["Python", "NestJS", "AWS S3"],
  sticker: ["CSS", "pseudo-elements"],
  catRunner: ["Canvas API", "requestAnimationFrame", "TypeScript"],
  memoryGame: ["Vue 3", "TypeScript", "CSS 3D transform"],
  whackAMole: ["Vue 3", "setTimeout", "TypeScript"],
};

export function buildStickerCssTab(comment: string): string {
  return `<span class="fn">.sticky</span> {
  <span class="kw">background</span>: <span class="str">#c15b74</span>;
  <span class="kw">padding</span>: <span class="num">0.9rem</span> <span class="num">1.1rem</span>;
  <span class="kw">border-radius</span>: <span class="num">6px</span>;
}
<span class="cm">${comment}</span>
<span class="fn">.sticky::before</span> {
  <span class="kw">content</span>: <span class="str">""</span>;
  <span class="kw">position</span>: <span class="str">absolute</span>;
  <span class="kw">top</span>: -<span class="num">8px</span>; <span class="kw">left</span>: <span class="num">50%</span>;
  <span class="kw">transform</span>: <span class="fn">translateX</span>(-<span class="num">50%</span>);
  <span class="kw">width</span>: <span class="num">46px</span>; <span class="kw">height</span>: <span class="num">16px</span>;
  <span class="kw">background</span>: <span class="str">rgba(255,255,255,.25)</span>;
}
<span class="fn">.rot-r</span> { <span class="kw">transform</span>: <span class="fn">rotate</span>(<span class="num">5deg</span>); }`;
}

export function buildStickerHtmlTab(
  comment: string,
  exampleText: string,
): string {
  return `<span class="cm">${comment}</span>
&lt;<span class="fn">div</span> <span class="kw">class</span>=<span class="str">"sticky rot-r"</span>&gt;
  ${exampleText}
&lt;/<span class="fn">div</span>&gt;`;
}

export function buildStickerReactTab(
  usageComment: string,
  exampleText: string,
): string {
  return `<span class="kw">function</span> <span class="fn">StickyNote</span>({ children, className = <span class="str">''</span> }) {
  <span class="kw">return</span> (
    &lt;<span class="fn">div</span> <span class="kw">className</span>={<span class="str">\`sticky \${className}\`</span>}&gt;
      {children}
    &lt;/<span class="fn">div</span>&gt;
  );
}

<span class="cm">${usageComment}</span>
&lt;<span class="fn">StickyNote</span> <span class="kw">className</span>=<span class="str">"rot-r"</span>&gt;
  ${exampleText}
&lt;/<span class="fn">StickyNote</span>&gt;`;
}

export const catRunnerFilename = "cat-runner.ts";

export const catRunnerCode = `<span class="kw">import</span> { computed, onBeforeUnmount, onMounted, ref } <span class="kw">from</span> <span class="str">'vue'</span>
<span class="kw">import</span> { useContent } <span class="kw">from</span> <span class="str">'../../content/useContent'</span>
<span class="kw">import</span> GameOverlay <span class="kw">from</span> <span class="str">'./GameOverlay.vue'</span>
<span class="kw">import</span> GameStatRow <span class="kw">from</span> <span class="str">'./GameStatRow.vue'</span>

<span class="kw">const</span> { content } = <span class="fn">useContent</span>()

<span class="kw">const</span> BEST_KEY = <span class="str">'cat-runner-best'</span>

<span class="kw">const</span> GROUND_MARGIN = <span class="num">30</span>
<span class="kw">const</span> GRAVITY = <span class="num">2200</span>
<span class="kw">const</span> JUMP_VELOCITY = -<span class="num">760</span>
<span class="kw">const</span> CAT_WIDTH = <span class="num">44</span>
<span class="kw">const</span> CAT_HEIGHT = <span class="num">38</span>
<span class="kw">const</span> CAT_X = <span class="num">46</span>
<span class="kw">const</span> BASE_SPEED = <span class="num">260</span>
<span class="kw">const</span> MAX_SPEED = <span class="num">620</span>
<span class="kw">const</span> SPEED_RAMP_PER_SECOND = <span class="num">10</span>
<span class="kw">const</span> HITBOX_INSET = <span class="num">7</span>
<span class="kw">const</span> PHYSICS_STEP = <span class="num">1</span> / <span class="num">60</span>

<span class="kw">type</span> GameState = <span class="str">'idle'</span> | <span class="str">'running'</span> | <span class="str">'over'</span>

<span class="kw">interface</span> Obstacle {
  x: number
  prevX: number
  width: number
  height: number
}

<span class="kw">const</span> wrapperEl = ref&lt;HTMLDivElement | <span class="kw">null</span>&gt;(<span class="kw">null</span>)
<span class="kw">const</span> canvasEl = ref&lt;HTMLCanvasElement | <span class="kw">null</span>&gt;(<span class="kw">null</span>)

<span class="kw">const</span> gameState = ref&lt;GameState&gt;(<span class="str">'idle'</span>)
<span class="kw">const</span> score = <span class="fn">ref</span>(<span class="num">0</span>)
<span class="kw">const</span> best = <span class="fn">ref</span>(<span class="fn">Number</span>(localStorage.<span class="fn">getItem</span>(BEST_KEY)) || <span class="num">0</span>)

<span class="kw">let</span> ctx: CanvasRenderingContext2D | <span class="kw">null</span> = <span class="kw">null</span>
<span class="kw">let</span> cssWidth = <span class="num">600</span>
<span class="kw">let</span> cssHeight = <span class="num">200</span>
<span class="kw">let</span> dpr = <span class="num">1</span>

<span class="kw">let</span> catImage: HTMLImageElement
<span class="kw">let</span> ballImage: HTMLImageElement
<span class="kw">let</span> imagesReady = <span class="kw">false</span>

<span class="kw">let</span> catY = <span class="num">0</span>
<span class="kw">let</span> catVelocity = <span class="num">0</span>
<span class="kw">let</span> distance = <span class="num">0</span>
<span class="kw">let</span> runTime = <span class="num">0</span>
<span class="kw">let</span> speed = BASE_SPEED
<span class="kw">let</span> nextSpawnAt = <span class="num">0</span>
<span class="kw">let</span> obstacles: Obstacle[] = []
<span class="kw">let</span> rafId = <span class="num">0</span>
<span class="kw">let</span> lastTime = <span class="num">0</span>
<span class="kw">let</span> resizeObserver: ResizeObserver | <span class="kw">null</span> = <span class="kw">null</span>

<span class="kw">const</span> CAT_HEAD_PATH = <span class="str">'M14 30 Q10 10 22 8 L20 2 L28 8 Q32 6 36 8 L44 2 L42 8 Q54 10 50 30 Q50 40 32 40 Q14 40 14 30Z'</span>
<span class="kw">const</span> CAT_TAIL_PATH = <span class="str">'M50 28 Q62 20 60 34 Q56 38 48 34Z'</span>

<span class="kw">function</span> <span class="fn">loadSvgImage</span>(svg: string): Promise&lt;HTMLImageElement&gt; {
  <span class="kw">return</span> <span class="kw">new</span> <span class="fn">Promise</span>((resolve, reject) =&gt; {
    <span class="kw">const</span> img = <span class="kw">new</span> <span class="fn">Image</span>()
    img.onload = () =&gt; <span class="fn">resolve</span>(img)
    img.onerror = reject
    img.src = <span class="str">\`data:image/svg+xml;utf8,\${encodeURIComponent(svg)}\`</span>
  })
}

<span class="kw">async</span> <span class="kw">function</span> <span class="fn">loadSprites</span>() {
  <span class="kw">const</span> catSvg = <span class="str">\`&lt;svg xmlns="http://www.w3.org/2000/svg" width="64" height="50" viewBox="0 0 64 50"&gt;
    &lt;path d="\${CAT_HEAD_PATH}" fill="#f5ebec"/&gt;
    &lt;circle cx="24" cy="24" r="2.4" fill="#150609"/&gt;
    &lt;circle cx="40" cy="24" r="2.4" fill="#150609"/&gt;
    &lt;path d="\${CAT_TAIL_PATH}" fill="#f5ebec"/&gt;
  &lt;/svg&gt;\`</span>
  <span class="kw">const</span> ballSvg = <span class="str">\`&lt;svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"&gt;
    &lt;circle cx="11" cy="11" r="9" fill="#cba36a"/&gt;
    &lt;path d="M3 8 Q11 13 19 8 M3 14 Q11 9 19 14 M11 2 Q6 11 11 20 M11 2 Q16 11 11 20" stroke="#150609" stroke-width="0.8" fill="none" opacity="0.4"/&gt;
  &lt;/svg&gt;\`</span>
  <span class="kw">const</span> [cat, ball] = <span class="kw">await</span> Promise.<span class="fn">all</span>([<span class="fn">loadSvgImage</span>(catSvg), <span class="fn">loadSvgImage</span>(ballSvg)])
  catImage = cat
  ballImage = ball
  imagesReady = <span class="kw">true</span>
}

<span class="kw">function</span> <span class="fn">groundY</span>() {
  <span class="kw">return</span> cssHeight - GROUND_MARGIN
}

<span class="kw">function</span> <span class="fn">resetRun</span>() {
  catY = <span class="fn">groundY</span>() - CAT_HEIGHT
  catVelocity = <span class="num">0</span>
  distance = <span class="num">0</span>
  runTime = <span class="num">0</span>
  speed = BASE_SPEED
  nextSpawnAt = <span class="num">400</span>
  obstacles = []
  score.value = <span class="num">0</span>
}

<span class="kw">function</span> <span class="fn">randomGap</span>() {
  <span class="kw">const</span> minGap = speed * <span class="num">0.9</span>
  <span class="kw">const</span> maxGap = speed * <span class="num">1.6</span>
  <span class="kw">return</span> minGap + Math.<span class="fn">random</span>() * (maxGap - minGap)
}

<span class="kw">function</span> <span class="fn">startRun</span>() {
  <span class="fn">resetRun</span>()
  gameState.value = <span class="str">'running'</span>
  lastTime = performance.<span class="fn">now</span>()
  rafId = <span class="fn">requestAnimationFrame</span>(loop)
}

<span class="kw">function</span> <span class="fn">jump</span>() {
  <span class="kw">if</span> (gameState.value === <span class="str">'idle'</span> || gameState.value === <span class="str">'over'</span>) {
    <span class="fn">startRun</span>()
    <span class="kw">return</span>
  }
  <span class="kw">const</span> onGround = catY &gt;= <span class="fn">groundY</span>() - CAT_HEIGHT - <span class="num">0.5</span>
  <span class="kw">if</span> (onGround) catVelocity = JUMP_VELOCITY
}

<span class="kw">function</span> <span class="fn">endRun</span>() {
  gameState.value = <span class="str">'over'</span>
  <span class="fn">cancelAnimationFrame</span>(rafId)
  <span class="kw">if</span> (score.value &gt; best.value) {
    best.value = score.value
    localStorage.<span class="fn">setItem</span>(BEST_KEY, <span class="fn">String</span>(score.value))
  }
}

<span class="kw">function</span> <span class="fn">updatePhysics</span>(dt: number) {
  catVelocity += GRAVITY * dt
  catY += catVelocity * dt
  <span class="kw">const</span> floor = <span class="fn">groundY</span>() - CAT_HEIGHT
  <span class="kw">if</span> (catY &gt; floor) {
    catY = floor
    catVelocity = <span class="num">0</span>
  }

  runTime += dt
  speed = Math.<span class="fn">min</span>(MAX_SPEED, BASE_SPEED + runTime * SPEED_RAMP_PER_SECOND)
  distance += speed * dt
  <span class="kw">const</span> flooredScore = Math.<span class="fn">floor</span>(distance * <span class="num">0.1</span>)
  <span class="kw">if</span> (flooredScore !== score.value) score.value = flooredScore

  <span class="kw">for</span> (<span class="kw">const</span> obstacle <span class="kw">of</span> obstacles) {
    obstacle.prevX = obstacle.x
    obstacle.x -= speed * dt
  }
  obstacles = obstacles.<span class="fn">filter</span>((o) =&gt; o.x + o.width &gt; -<span class="num">10</span>)

  <span class="kw">if</span> (distance &gt;= nextSpawnAt) {
    <span class="kw">const</span> size = <span class="num">18</span> + Math.<span class="fn">random</span>() * <span class="num">8</span>
    obstacles.<span class="fn">push</span>({ x: cssWidth + size, prevX: cssWidth + size, width: size, height: size })
    nextSpawnAt = distance + <span class="fn">randomGap</span>()
  }

  <span class="kw">const</span> catRect = {
    x: CAT_X + HITBOX_INSET,
    y: catY + HITBOX_INSET,
    w: CAT_WIDTH - HITBOX_INSET * <span class="num">2</span>,
    h: CAT_HEIGHT - HITBOX_INSET * <span class="num">2</span>,
  }
  <span class="kw">for</span> (<span class="kw">const</span> obstacle <span class="kw">of</span> obstacles) {
    <span class="kw">const</span> sweptLeft = obstacle.x + <span class="num">3</span>
    <span class="kw">const</span> sweptRight = obstacle.prevX + obstacle.width - <span class="num">3</span>
    <span class="kw">const</span> obsRect = {
      x: sweptLeft,
      y: <span class="fn">groundY</span>() - obstacle.height + <span class="num">3</span>,
      w: sweptRight - sweptLeft,
      h: obstacle.height - <span class="num">6</span>,
    }
    <span class="kw">const</span> overlap =
      catRect.x &lt; obsRect.x + obsRect.w &amp;&amp;
      catRect.x + catRect.w &gt; obsRect.x &amp;&amp;
      catRect.y &lt; obsRect.y + obsRect.h &amp;&amp;
      catRect.y + catRect.h &gt; obsRect.y
    <span class="kw">if</span> (overlap) {
      <span class="fn">endRun</span>()
      <span class="kw">return</span>
    }
  }
}

<span class="kw">function</span> <span class="fn">draw</span>() {
  <span class="kw">if</span> (!ctx) <span class="kw">return</span>
  ctx.<span class="fn">clearRect</span>(<span class="num">0</span>, <span class="num">0</span>, cssWidth, cssHeight)

  ctx.strokeStyle = <span class="str">'rgba(193, 91, 116, 0.35)'</span>
  ctx.lineWidth = <span class="num">2</span>
  ctx.<span class="fn">setLineDash</span>([<span class="num">8</span>, <span class="num">10</span>])
  ctx.lineDashOffset = -distance
  ctx.<span class="fn">beginPath</span>()
  ctx.<span class="fn">moveTo</span>(<span class="num">0</span>, <span class="fn">groundY</span>() + <span class="num">1</span>)
  ctx.<span class="fn">lineTo</span>(cssWidth, <span class="fn">groundY</span>() + <span class="num">1</span>)
  ctx.<span class="fn">stroke</span>()
  ctx.<span class="fn">setLineDash</span>([])

  <span class="kw">if</span> (imagesReady) {
    <span class="kw">const</span> squash = catVelocity &lt; -<span class="num">200</span> ? <span class="num">1.08</span> : catVelocity &gt; <span class="num">200</span> ? <span class="num">0.92</span> : <span class="num">1</span>
    ctx.<span class="fn">save</span>()
    <span class="kw">const</span> cx = CAT_X + CAT_WIDTH / <span class="num">2</span>
    <span class="kw">const</span> cy = catY + CAT_HEIGHT
    ctx.<span class="fn">translate</span>(cx, cy)
    ctx.<span class="fn">scale</span>(-<span class="num">1</span>, squash)
    ctx.<span class="fn">translate</span>(-cx, -cy)
    ctx.<span class="fn">drawImage</span>(catImage, CAT_X, catY, CAT_WIDTH, CAT_HEIGHT)
    ctx.<span class="fn">restore</span>()

    <span class="kw">for</span> (<span class="kw">const</span> obstacle <span class="kw">of</span> obstacles) {
      <span class="kw">const</span> ocx = obstacle.x + obstacle.width / <span class="num">2</span>
      <span class="kw">const</span> ocy = <span class="fn">groundY</span>() - obstacle.height / <span class="num">2</span>
      ctx.<span class="fn">save</span>()
      ctx.<span class="fn">translate</span>(ocx, ocy)
      ctx.<span class="fn">rotate</span>((distance % <span class="num">360</span>) * (Math.PI / <span class="num">45</span>))
      ctx.<span class="fn">drawImage</span>(ballImage, -obstacle.width / <span class="num">2</span>, -obstacle.height / <span class="num">2</span>, obstacle.width, obstacle.height)
      ctx.<span class="fn">restore</span>()
    }
  }
}

<span class="kw">function</span> <span class="fn">loop</span>(now: number) {
  <span class="kw">let</span> remaining = Math.<span class="fn">min</span>((now - lastTime) / <span class="num">1000</span>, <span class="num">0.25</span>)
  lastTime = now
  <span class="kw">if</span> (gameState.value !== <span class="str">'running'</span>) <span class="kw">return</span>
  <span class="kw">while</span> (remaining &gt; <span class="num">0</span> &amp;&amp; gameState.value === <span class="str">'running'</span>) {
    <span class="kw">const</span> step = Math.<span class="fn">min</span>(remaining, PHYSICS_STEP)
    <span class="fn">updatePhysics</span>(step)
    remaining -= step
  }
  <span class="kw">if</span> (gameState.value === <span class="str">'running'</span>) {
    <span class="fn">draw</span>()
    rafId = <span class="fn">requestAnimationFrame</span>(loop)
  }
}

<span class="kw">function</span> <span class="fn">resizeCanvas</span>() {
  <span class="kw">const</span> canvas = canvasEl.value
  <span class="kw">const</span> wrapper = wrapperEl.value
  <span class="kw">if</span> (!canvas || !wrapper) <span class="kw">return</span>
  cssWidth = wrapper.clientWidth
  cssHeight = <span class="num">200</span>
  dpr = window.devicePixelRatio || <span class="num">1</span>
  canvas.width = cssWidth * dpr
  canvas.height = cssHeight * dpr
  canvas.style.width = <span class="str">\`\${cssWidth}px\`</span>
  canvas.style.height = <span class="str">\`\${cssHeight}px\`</span>
  ctx = canvas.<span class="fn">getContext</span>(<span class="str">'2d'</span>)
  ctx?.<span class="fn">setTransform</span>(dpr, <span class="num">0</span>, <span class="num">0</span>, dpr, <span class="num">0</span>, <span class="num">0</span>)
  catY = <span class="fn">groundY</span>() - CAT_HEIGHT
  <span class="fn">draw</span>()
}

<span class="kw">function</span> <span class="fn">onKeydown</span>(e: KeyboardEvent) {
  <span class="kw">if</span> (e.code === <span class="str">'Space'</span> || e.code === <span class="str">'ArrowUp'</span>) {
    e.<span class="fn">preventDefault</span>()
    <span class="fn">jump</span>()
  }
}

<span class="kw">function</span> <span class="fn">onPointerDown</span>() {
  wrapperEl.value?.<span class="fn">focus</span>()
  <span class="fn">jump</span>()
}

<span class="fn">onMounted</span>(<span class="kw">async</span> () =&gt; {
  <span class="fn">resizeCanvas</span>()
  resizeObserver = <span class="kw">new</span> <span class="fn">ResizeObserver</span>(() =&gt; <span class="fn">resizeCanvas</span>())
  <span class="kw">if</span> (wrapperEl.value) resizeObserver.<span class="fn">observe</span>(wrapperEl.value)
  <span class="kw">await</span> <span class="fn">loadSprites</span>()
  <span class="fn">draw</span>()
})

<span class="fn">onBeforeUnmount</span>(() =&gt; {
  <span class="fn">cancelAnimationFrame</span>(rafId)
  resizeObserver?.<span class="fn">disconnect</span>()
})

<span class="kw">const</span> stats = <span class="fn">computed</span>(() =&gt; [
  { label: content.value.common.scoreLabel, value: score.value },
  { label: content.value.common.bestLabel, value: best.value },
])`;

export const memoryGameFilename = "memory-game.ts";

export const memoryGameCode = `<span class="kw">import</span> { computed, ref } <span class="kw">from</span> <span class="str">'vue'</span>
<span class="kw">import</span> { useContent } <span class="kw">from</span> <span class="str">'../../content/useContent'</span>
<span class="kw">import</span> CatIcon <span class="kw">from</span> <span class="str">'../icons/CatIcon.vue'</span>
<span class="kw">import</span> GameOverlay <span class="kw">from</span> <span class="str">'./GameOverlay.vue'</span>
<span class="kw">import</span> GameStatRow <span class="kw">from</span> <span class="str">'./GameStatRow.vue'</span>

<span class="kw">const</span> { content } = <span class="fn">useContent</span>()

<span class="kw">interface</span> CatVariant {
  bodyFill: string
  eyeShape?: <span class="str">'circle'</span> | <span class="str">'line'</span> | <span class="str">'diamond'</span>
  eyeFill: string
  eyeRadius?: number
  mouth?: <span class="str">'none'</span> | <span class="str">'smile'</span> | <span class="str">'dot'</span>
  mouthWidth?: <span class="str">'narrow'</span> | <span class="str">'wide'</span>
  mouthColor?: string
  mouthRadius?: number
  bodyStroke?: string
}

<span class="kw">const</span> VARIANTS: CatVariant[] = [
  { bodyFill: <span class="str">'#cba36a'</span>, eyeFill: <span class="str">'#150609'</span> },
  { bodyFill: <span class="str">'#d97b93'</span>, eyeFill: <span class="str">'#150609'</span>, mouth: <span class="str">'dot'</span> },
  { bodyFill: <span class="str">'#f5ebec'</span>, eyeFill: <span class="str">'#c15b74'</span>, mouth: <span class="str">'smile'</span>, mouthWidth: <span class="str">'narrow'</span> },
  { bodyFill: <span class="str">'#f5ebec'</span>, eyeFill: <span class="str">'#c15b74'</span>, eyeRadius: <span class="num">2.6</span>, mouth: <span class="str">'dot'</span>, mouthRadius: <span class="num">2.4</span> },
  { bodyFill: <span class="str">'#cba36a'</span>, eyeShape: <span class="str">'line'</span>, eyeFill: <span class="str">'#150609'</span>, mouth: <span class="str">'smile'</span>, mouthWidth: <span class="str">'wide'</span>, mouthColor: <span class="str">'#150609'</span> },
  { bodyFill: <span class="str">'#f5ebec'</span>, eyeShape: <span class="str">'diamond'</span>, eyeFill: <span class="str">'#c15b74'</span>, mouth: <span class="str">'smile'</span>, mouthWidth: <span class="str">'wide'</span>, mouthColor: <span class="str">'#c15b74'</span> },
  { bodyFill: <span class="str">'#c15b74'</span>, eyeFill: <span class="str">'#150609'</span> },
  { bodyFill: <span class="str">'#f5ebec'</span>, bodyStroke: <span class="str">'#6d1226'</span>, eyeFill: <span class="str">'#6d1226'</span> },
]

<span class="kw">interface</span> Card {
  id: number
  variant: number
  state: <span class="str">'hidden'</span> | <span class="str">'flipped'</span> | <span class="str">'matched'</span>
}

<span class="kw">function</span> shuffle&lt;T&gt;(items: T[]): T[] {
  <span class="kw">const</span> arr = [...items]
  <span class="kw">for</span> (<span class="kw">let</span> i = arr.length - <span class="num">1</span>; i &gt; <span class="num">0</span>; i--) {
    <span class="kw">const</span> j = Math.<span class="fn">floor</span>(Math.<span class="fn">random</span>() * (i + <span class="num">1</span>))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  <span class="kw">return</span> arr
}

<span class="kw">function</span> <span class="fn">createDeck</span>(): Card[] {
  <span class="kw">const</span> variantIds = VARIANTS.<span class="fn">map</span>((_, i) =&gt; i)
  <span class="kw">const</span> pairs = <span class="fn">shuffle</span>([...variantIds, ...variantIds])
  <span class="kw">return</span> pairs.<span class="fn">map</span>((variant, id) =&gt; ({ id, variant, state: <span class="str">'hidden'</span> }))
}

<span class="kw">const</span> cards = ref&lt;Card[]&gt;(<span class="fn">createDeck</span>())
<span class="kw">const</span> flippedIds = ref&lt;number[]&gt;([])
<span class="kw">const</span> moves = <span class="fn">ref</span>(<span class="num">0</span>)
<span class="kw">const</span> busy = <span class="fn">ref</span>(<span class="kw">false</span>)

<span class="kw">const</span> won = <span class="fn">computed</span>(() =&gt; cards.value.<span class="fn">every</span>((c) =&gt; c.state === <span class="str">'matched'</span>))
<span class="kw">const</span> stats = <span class="fn">computed</span>(() =&gt; [{ label: content.value.memory.movesLabel, value: moves.value }])

<span class="kw">function</span> <span class="fn">flip</span>(card: Card) {
  <span class="kw">if</span> (busy.value || card.state !== <span class="str">'hidden'</span> || flippedIds.value.length &gt;= <span class="num">2</span>) <span class="kw">return</span>
  card.state = <span class="str">'flipped'</span>
  flippedIds.value.<span class="fn">push</span>(card.id)
  <span class="kw">if</span> (flippedIds.value.length &lt; <span class="num">2</span>) <span class="kw">return</span>

  moves.value++
  <span class="kw">const</span> [a, b] = flippedIds.value.<span class="fn">map</span>((id) =&gt; cards.value.<span class="fn">find</span>((c) =&gt; c.id === id)!)
  <span class="kw">if</span> (a.variant === b.variant) {
    a.state = <span class="str">'matched'</span>
    b.state = <span class="str">'matched'</span>
    flippedIds.value = []
    <span class="kw">return</span>
  }

  busy.value = <span class="kw">true</span>
  <span class="fn">setTimeout</span>(() =&gt; {
    a.state = <span class="str">'hidden'</span>
    b.state = <span class="str">'hidden'</span>
    flippedIds.value = []
    busy.value = <span class="kw">false</span>
  }, <span class="num">700</span>)
}

<span class="kw">function</span> <span class="fn">restart</span>() {
  cards.value = <span class="fn">createDeck</span>()
  flippedIds.value = []
  moves.value = <span class="num">0</span>
  busy.value = <span class="kw">false</span>
}`;

export const whackAMoleFilename = "whack-a-mole.ts";

export const whackAMoleCode = `<span class="kw">import</span> { computed, onBeforeUnmount, ref } <span class="kw">from</span> <span class="str">'vue'</span>
<span class="kw">import</span> { useContent } <span class="kw">from</span> <span class="str">'../../content/useContent'</span>
<span class="kw">import</span> CatIcon <span class="kw">from</span> <span class="str">'../icons/CatIcon.vue'</span>
<span class="kw">import</span> GameOverlay <span class="kw">from</span> <span class="str">'./GameOverlay.vue'</span>
<span class="kw">import</span> GameStatRow <span class="kw">from</span> <span class="str">'./GameStatRow.vue'</span>

<span class="kw">const</span> { content } = <span class="fn">useContent</span>()

<span class="kw">const</span> BEST_KEY = <span class="str">'whack-a-mole-best'</span>
<span class="kw">const</span> HOLE_COUNT = <span class="num">9</span>
<span class="kw">const</span> GAME_DURATION = <span class="num">20</span>

<span class="kw">type</span> GameState = <span class="str">'idle'</span> | <span class="str">'running'</span> | <span class="str">'over'</span>

<span class="kw">const</span> gameState = ref&lt;GameState&gt;(<span class="str">'idle'</span>)
<span class="kw">const</span> activeHole = ref&lt;number | <span class="kw">null</span>&gt;(<span class="kw">null</span>)
<span class="kw">const</span> score = <span class="fn">ref</span>(<span class="num">0</span>)
<span class="kw">const</span> best = <span class="fn">ref</span>(<span class="fn">Number</span>(localStorage.<span class="fn">getItem</span>(BEST_KEY)) || <span class="num">0</span>)
<span class="kw">const</span> timeLeft = <span class="fn">ref</span>(GAME_DURATION)

<span class="kw">let</span> popTimer = <span class="num">0</span>
<span class="kw">let</span> countdownTimer = <span class="num">0</span>

<span class="kw">const</span> stats = <span class="fn">computed</span>(() =&gt; [
  { label: content.value.common.scoreLabel, value: score.value },
  { label: content.value.common.bestLabel, value: best.value },
  { label: content.value.whack.timeLabel, value: timeLeft.value },
])

<span class="kw">function</span> <span class="fn">randomHole</span>(exclude: number | <span class="kw">null</span>): number {
  <span class="kw">let</span> hole = Math.<span class="fn">floor</span>(Math.<span class="fn">random</span>() * HOLE_COUNT)
  <span class="kw">if</span> (hole === exclude) hole = (hole + <span class="num">1</span>) % HOLE_COUNT
  <span class="kw">return</span> hole
}

<span class="kw">function</span> <span class="fn">scheduleNextPop</span>() {
  <span class="kw">const</span> delay = <span class="num">400</span> + Math.<span class="fn">random</span>() * <span class="num">500</span>
  popTimer = window.<span class="fn">setTimeout</span>(() =&gt; {
    <span class="kw">if</span> (gameState.value !== <span class="str">'running'</span>) <span class="kw">return</span>
    activeHole.value = <span class="fn">randomHole</span>(activeHole.value)
    <span class="kw">const</span> upFor = Math.<span class="fn">max</span>(<span class="num">500</span>, <span class="num">1100</span> - score.value * <span class="num">15</span>)
    popTimer = window.<span class="fn">setTimeout</span>(() =&gt; {
      <span class="kw">if</span> (gameState.value !== <span class="str">'running'</span>) <span class="kw">return</span>
      activeHole.value = <span class="kw">null</span>
      <span class="fn">scheduleNextPop</span>()
    }, upFor)
  }, delay)
}

<span class="kw">function</span> <span class="fn">whack</span>(index: number) {
  <span class="kw">if</span> (gameState.value !== <span class="str">'running'</span> || index !== activeHole.value) <span class="kw">return</span>
  score.value++
  activeHole.value = <span class="kw">null</span>
}

<span class="kw">function</span> <span class="fn">start</span>() {
  <span class="fn">clearTimeout</span>(popTimer)
  <span class="fn">clearInterval</span>(countdownTimer)
  gameState.value = <span class="str">'running'</span>
  score.value = <span class="num">0</span>
  timeLeft.value = GAME_DURATION
  activeHole.value = <span class="kw">null</span>
  <span class="fn">scheduleNextPop</span>()
  countdownTimer = window.<span class="fn">setInterval</span>(() =&gt; {
    timeLeft.value--
    <span class="kw">if</span> (timeLeft.value &lt;= <span class="num">0</span>) <span class="fn">endGame</span>()
  }, <span class="num">1000</span>)
}

<span class="kw">function</span> <span class="fn">endGame</span>() {
  gameState.value = <span class="str">'over'</span>
  <span class="fn">clearTimeout</span>(popTimer)
  <span class="fn">clearInterval</span>(countdownTimer)
  activeHole.value = <span class="kw">null</span>
  <span class="kw">if</span> (score.value &gt; best.value) {
    best.value = score.value
    localStorage.<span class="fn">setItem</span>(BEST_KEY, <span class="fn">String</span>(score.value))
  }
}

<span class="kw">function</span> <span class="fn">onBoardClick</span>() {
  <span class="kw">if</span> (gameState.value !== <span class="str">'running'</span>) <span class="fn">start</span>()
}

<span class="fn">onBeforeUnmount</span>(() =&gt; {
  <span class="fn">clearTimeout</span>(popTimer)
  <span class="fn">clearInterval</span>(countdownTimer)
})`;
