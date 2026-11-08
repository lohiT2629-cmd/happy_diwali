A LITTLE DIYA, A LOT OF LOVE — v2 🪔

This is a redesigned, scene-based Dudu & Bubu Diwali story website.
It includes multiple generated story illustrations, cinematic transitions,
canvas firework particles, floating stars/lanterns, an animated diya flame,
and a dialogue sequence that advances ONLY when the visitor clicks NEXT.

RUN IT
1. Extract the ZIP.
2. Open the extracted folder in VS Code.
3. Put your background music file in the assets folder and name it exactly:
      music.mp3
4. Open index.html with VS Code Live Server.

MUSIC
The music file is intentionally not included. The website looks for:
      assets/music.mp3
Browsers may block autoplay until the visitor interacts with the page. The
Sound on/off button is always available in the top-right corner.

PERSONALIZE THE LAST MESSAGE
Open index.html and find the `final-note` section. Edit the message and
signature to make the ending sound exactly like you.

EDIT THE DIALOGUES
Open script.js. All dialogue lines are in the `storyScenes` array. Each object
contains chapter, title, image, speaker, and text. The order in this array is
the order the visitor sees. The story never moves to the next dialogue by itself.

FILES
- index.html                 page structure
- style.css                  responsive visual design and CSS motion
- script.js                  scene sequencing, interactions, canvas particles
- assets/                    uploaded character references and scene artwork

NOTE
A live internet connection is needed only for the optional Google Fonts. The
page layout, animations, images, and story work locally without those fonts.
