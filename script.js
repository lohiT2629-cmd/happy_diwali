const storyScenes = [
  { chapter: 'CHAPTER 01', title: 'Two little hearts, one sky', label: 'MILES APART, HEARTS CLOSE', image: 'assets/distance-balcony.jpg', wide: true, speaker: 'Narrator', sub: 'a little story begins', text: 'On a Diwali evening, two little hearts looked up at the same sky… from two different places.' },
  { chapter: 'CHAPTER 01', title: 'Two little hearts, one sky', label: 'A LITTLE HELLO', image: 'assets/video-call-close.jpg', wide: true, speaker: 'Dudu', sub: 'from somewhere far away', text: 'Hey, Bubu! Can you see the little lights outside? I wish I could see them with you, instead of through this tiny screen.' },
  { chapter: 'CHAPTER 02', title: 'A hostel kind of Diwali', label: 'BUBU’S HOSTEL', image: 'assets/hostel-window.jpg', speaker: 'Bubu', sub: 'a little homesick', text: 'I can see them, Dudu… but the hostel feels so quiet today. Everyone is talking about going home, and I miss that Diwali feeling.' },
  { chapter: 'CHAPTER 02', title: 'A hostel kind of Diwali', label: 'JUST A CALL AWAY', image: 'assets/video-call-close.jpg', wide: true, speaker: 'Dudu', sub: 'sending a warm hug', text: 'I know, my Bubu. I wish I could magically appear at your hostel door with sweets, flowers, and the biggest hug.' },
  { chapter: 'CHAPTER 02', title: 'A hostel kind of Diwali', label: 'A VERY IMPORTANT QUESTION', image: 'assets/hostel-window.jpg', speaker: 'Bubu', sub: 'with a tiny smile', text: 'And how exactly would you enter? You would get lost finding my room. You get lost even when Google Maps is helping you! 😂' },
  { chapter: 'CHAPTER 03', title: 'Operation: make Bubu smile', label: 'THE RESCUE PLAN', image: 'assets/snack-date.jpg', wide: true, speaker: 'Dudu', sub: 'chief happiness officer', text: 'Excuse me! I may be far away, but I have arrived with an emergency Diwali happiness kit: one silly bear, unlimited bad jokes, and all my love.' },
  { chapter: 'CHAPTER 03', title: 'No crackers, only crack-ups', label: 'A DIFFERENT KIND OF FIREWORK', image: 'assets/joke-party.jpg', wide: true, speaker: 'Bubu', sub: 'ready to judge the jokes', text: 'No crackers this year, then? How are we going to make some noise and celebrate?' },
  { chapter: 'CHAPTER 03', title: 'No crackers, only crack-ups', label: 'JOKE NUMBER ONE', image: 'assets/joke-party.jpg', wide: true, speaker: 'Dudu', sub: 'please laugh, it took effort', text: 'Why did the diya get good marks? Because it was always bright in class! 😎' },
  { chapter: 'CHAPTER 03', title: 'No crackers, only crack-ups', label: 'JOKE NUMBER TWO', image: 'assets/joke-party.jpg', wide: true, speaker: 'Bubu', sub: 'trying very hard not to laugh', text: 'Duduuu! That joke was so bad that even the diya almost switched itself off. 😂 But… okay, I laughed.' },
  { chapter: 'CHAPTER 04', title: 'One little diya', label: 'A LITTLE LIGHT', image: 'assets/shared-diya.jpg', wide: true, diya: true, speaker: 'Narrator', sub: 'the quietest kind of magic', text: 'They did not need a sky full of crackers. They imagined one small diya glowing between them, warm enough to make the distance feel smaller.' },
  { chapter: 'CHAPTER 04', title: 'One little diya', label: 'A LITTLE LIGHT', image: 'assets/shared-diya.jpg', wide: true, diya: true, speaker: 'Dudu', sub: 'one thought from the heart', text: 'See, Bubu? A small diya can light up a dark room. And one little smile from you can light up my whole day.' },
  { chapter: 'CHAPTER 04', title: 'One little diya', label: 'A LITTLE LIGHT', image: 'assets/shared-diya.jpg', wide: true, diya: true, speaker: 'Bubu', sub: 'feeling a little better', text: 'And your silly jokes can make even a quiet hostel evening feel like a festival. I think my Diwali is getting brighter now.' },
  { chapter: 'CHAPTER 05', title: 'A promise under the same sky', label: 'ONE DAY…', image: 'assets/future-balcony-clean.jpg', wide: true, diya: true, speaker: 'Narrator', sub: 'a glimpse of tomorrow', text: 'Then they closed their eyes and imagined a future Diwali… not through a phone, not from different cities, but side by side.' },
  { chapter: 'CHAPTER 05', title: 'A promise under the same sky', label: 'OUR LITTLE BALCONY', image: 'assets/future-balcony-clean.jpg', wide: true, diya: true, speaker: 'Dudu', sub: 'making a little wish', text: 'One day, there will be no screen between us. We will stand together on our balcony, light one diya, and watch the whole sky sparkle.' },
  { chapter: 'CHAPTER 05', title: 'A promise under the same sky', label: 'OUR LITTLE BALCONY', image: 'assets/future-balcony-clean.jpg', wide: true, diya: true, speaker: 'Bubu', sub: 'saving this moment for later', text: 'And I will probably laugh at your jokes, steal your snacks, and hold your hand so tightly that you cannot escape. Deal? ❤️' },
  { chapter: 'CHAPTER 05', title: 'A promise under the same sky', label: 'FOREVER, IN EVERY LITTLE LIGHT', image: 'assets/future-balcony-clean.jpg', wide: true, diya: true, speaker: 'Narrator', sub: 'a small diya, a big feeling', text: 'Because Diwali is not measured by how many crackers light the sky. Sometimes one little diya, two happy hearts, and a little laughter are more than enough.' }
];

const welcomeScreen = document.getElementById('welcomeScreen');
const storyScreen = document.getElementById('storyScreen');
const finaleScreen = document.getElementById('finaleScreen');
const sceneArt = document.getElementById('sceneArt');
const sceneArtWrap = document.getElementById('sceneArtWrap');
const sceneStage = document.getElementById('sceneStage');
const sceneDiya = document.getElementById('sceneDiya');
const nextButton = document.getElementById('nextButton');
const music = document.getElementById('backgroundMusic');
const soundButton = document.getElementById('soundButton');
const soundText = document.getElementById('soundText');
let currentIndex = 0;
let isMusicPlaying = false;

function updateDialogue(scene) {
  document.getElementById('chapterLabel').textContent = scene.chapter;
  document.getElementById('sceneHeading').textContent = scene.title;
  document.getElementById('sceneLabel').textContent = scene.label;
  document.getElementById('speakerName').textContent = scene.speaker;
  document.getElementById('speakerSub').textContent = scene.sub;
  document.getElementById('speakerMark').textContent = scene.speaker === 'Narrator' ? '✦' : scene.speaker.charAt(0);
  document.getElementById('speakerMark').style.background = scene.speaker === 'Dudu'
    ? 'linear-gradient(135deg,#e7bd94,#c48a66)'
    : scene.speaker === 'Bubu' ? 'linear-gradient(135deg,#ffe0e7,#eea4ba)' : 'linear-gradient(135deg,#f9d9b0,#f4a9bd)';
  const text = document.getElementById('dialogueText');
  text.classList.remove('reveal-text');
  void text.offsetWidth;
  text.textContent = scene.text;
  text.classList.add('reveal-text');
  document.getElementById('dialogueCount').textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(storyScenes.length).padStart(2, '0')}`;
  document.getElementById('currentStep').textContent = String(currentIndex + 1).padStart(2, '0');
  document.getElementById('totalSteps').textContent = String(storyScenes.length).padStart(2, '0');
  const percent = ((currentIndex + 1) / storyScenes.length) * 100;
  document.getElementById('progressValue').style.width = `${percent}%`;
  document.getElementById('progressPercent').textContent = `${Math.round(percent)}%`;
  nextButton.innerHTML = currentIndex === storyScenes.length - 1 ? '<span>FINISH</span><b>♥</b>' : '<span>NEXT</span><b>→</b>';
}

function renderScene() {
  const scene = storyScenes[currentIndex];
  sceneArtWrap.classList.add('is-changing');
  window.setTimeout(() => {
    sceneArt.src = scene.image;
    sceneArt.alt = scene.label.toLowerCase().replaceAll('-', ' ');
    sceneStage.classList.toggle('wide-art', !!scene.wide);
    sceneDiya.classList.toggle('hidden', !scene.diya);
    sceneArtWrap.classList.remove('is-changing');
    updateDialogue(scene);
    if (scene.label.includes('BALCONY') || scene.label.includes('FUTURE')) burstFireworks(4);
  }, 220);
}

function beginStory() {
  welcomeScreen.classList.add('hidden');
  finaleScreen.classList.add('hidden');
  storyScreen.classList.remove('hidden');
  currentIndex = 0;
  renderScene();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Browsers may block autoplay; the sound button remains available.
  music.play().then(() => setMusicState(true)).catch(() => setMusicState(false));
}

document.getElementById('beginButton').addEventListener('click', beginStory);
nextButton.addEventListener('click', () => {
  if (currentIndex < storyScenes.length - 1) {
    currentIndex += 1;
    renderScene();
  } else {
    storyScreen.classList.add('hidden');
    finaleScreen.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    burstFireworks(14);
  }
});
document.getElementById('replayButton').addEventListener('click', beginStory);

function setMusicState(playing) {
  isMusicPlaying = playing;
  soundText.textContent = playing ? 'Sound on' : 'Sound off';
  soundButton.classList.toggle('is-playing', playing);
}
soundButton.addEventListener('click', () => {
  if (music.paused) {
    music.play().then(() => setMusicState(true)).catch(() => {
      soundText.textContent = 'Add music.mp3';
    });
  } else {
    music.pause();
    setMusicState(false);
  }
});

// Motion graphics: floating embers, tiny stars, and celebratory firework bursts.
const canvas = document.getElementById('motionCanvas');
const ctx = canvas.getContext('2d');
let width = 0, height = 0, dpr = 1;
const particles = [];
const ambientParticles = [];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function resizeCanvas() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth; height = window.innerHeight;
  canvas.width = Math.floor(width * dpr); canvas.height = Math.floor(height * dpr);
  canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
for (let i = 0; i < 42; i++) ambientParticles.push({
  x: Math.random() * Math.max(1, width), y: Math.random() * Math.max(1, height),
  r: Math.random() * 1.7 + .4, vy: Math.random() * .28 + .08, vx: (Math.random() - .5) * .18,
  alpha: Math.random() * .45 + .12, phase: Math.random() * Math.PI * 2
});
function burstFireworks(amount = 5) {
  for (let n = 0; n < amount; n++) {
    const cx = width * (.16 + Math.random() * .68);
    const cy = height * (.12 + Math.random() * .44);
    const count = 36 + Math.floor(Math.random() * 22);
    const hue = [338, 42, 18, 285, 190][Math.floor(Math.random() * 5)];
    for (let i = 0; i < count; i++) {
      const angle = Math.PI * 2 * i / count;
      const speed = 1.1 + Math.random() * 3.2;
      particles.push({ x: cx, y: cy, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
        life: 48 + Math.random() * 28, maxLife: 76, hue, size: 1 + Math.random() * 1.7, gravity: .025 + Math.random() * .025 });
    }
  }
}
function animate() {
  ctx.clearRect(0, 0, width, height);
  if (!reduceMotion) {
    for (const p of ambientParticles) {
      p.x += p.vx; p.y -= p.vy;
      if (p.y < -5) { p.y = height + 5; p.x = Math.random() * width; }
      if (p.x < -5) p.x = width + 5; if (p.x > width + 5) p.x = -5;
      const shimmer = .5 + Math.sin(Date.now() / 900 + p.phase) * .35;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, ${210 + Math.floor(shimmer * 30)}, ${190 + Math.floor(shimmer * 40)}, ${p.alpha * shimmer})`;
      ctx.fill();
    }
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i]; p.x += p.vx; p.y += p.vy; p.vy += p.gravity; p.vx *= .988; p.vy *= .988; p.life--;
      const alpha = Math.max(0, p.life / p.maxLife);
      ctx.beginPath(); ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 100%, 75%, ${alpha})`; ctx.shadowBlur = 12; ctx.shadowColor = `hsla(${p.hue}, 100%, 70%, ${alpha})`; ctx.fill(); ctx.shadowBlur = 0;
      if (p.life <= 0) particles.splice(i, 1);
    }
  }
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
// A gentle first burst creates a welcoming sparkle, without advancing the story.
window.setTimeout(() => burstFireworks(3), 650);
