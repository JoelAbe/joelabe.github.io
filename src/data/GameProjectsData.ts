import ProjectData from '@/data/ProjectData'

export default [
    new ProjectData("clocktergeist", "Clocktergeist", "img/projects/clocktergeist/icon.gif", `
    <div class="paragraph">
        <div class="notice">You can play the game here: <a href="https://veeyuh.itch.io/clocktergeist" target="_blank">veeyuh.itch.io/clocktergeist</a></div>
    </div>

    <div class="paragraph" style="opacity:0.75; font-size:0.95em;">
        <strong>Engine:</strong> Unreal Engine 5
    </div>

    <h2>Project Overview</h2>

    <div class="paragraph">
        Clocktergeist is a boss-rush action game developed in Unreal Engine 5 during a one-month international game jam. The project involved a multidisciplinary team of artists, animators, composers, and programmers working under a strict deadline.
        <br/><br/>
        I joined the project initially to implement smaller gameplay features as a programmer. About a week into development, the lead programmer had to step away due to a medical emergency. This left me as the most senior programmer on the team, responsible not only for gameplay systems but also for unblocking the entire production pipeline.
        <br/><br/>
        From that point on, I stepped into a lead gameplay programming role, taking ownership of core combat systems, boss logic, and technical integration across the project to ensure the team could ship.
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="/img/projects/clocktergeist/screenshot-1.png" alt="Clocktergeist screenshot" />
        <img class="pc-screenshot" src="/img/projects/clocktergeist/gameplay.gif" alt="Clocktergeist gameplay GIF" />
    </div>

    <h2>Scope &amp; Ownership</h2>
    <div class="paragraph">
        <ul>
            <li>Lead gameplay programmer after loss of original lead</li>
            <li>Designed and implemented core boss combat systems for 2 of the 3 bosses</li>
            <li>Mentored and guided a junior programmer, helping structure logic and debug gameplay systems</li>
            <li>Acted as the technical point of contact for artists and designers to keep production moving</li>
        </ul>
    </div>

    <div class="paragraph">
        <strong>Boss Design Breakdown</strong>
        <ul>
            <li>3 Bosses</li>
            <li>7 Combat Stages</li>
            <li>9 Distinct Mechanics &amp; Attack Patterns</li>
            <li>Multi-phase encounters with escalating complexity</li>
        </ul>
    </div>

    <h2>Gameplay &amp; AI Implementation</h2>
    <div class="paragraph">
        This was my first large-scale boss AI system in Unreal Engine. Due to the tight timeline and the sudden shift in team structure, I prioritized iteration speed, clarity, and reliability over theoretical ideal architectures.
        <ul>
            <li>Implemented boss behaviors entirely in Unreal Blueprints</li>
            <li>Built custom, state-driven behavior systems using Gates, Branches, and Sequences</li>
            <li>Designed multi-phase boss logic with clear telegraphing and readable combat patterns</li>
            <li>Tuned combat feel through rapid playtesting and close collaboration with designers and artists</li>
        </ul>
        While my original plan was to prototype in Blueprints and later refactor into C++, losing the lead programmer made that risky. I made the pragmatic decision to commit fully to Blueprints to guarantee stability and delivery within the deadline.
    </div>

    <h2>Feature Highlight — Rotating Projectile System</h2>
    <div class="paragraph">
        One of the most challenging mechanics involved a boss phase where multiple projectiles rotate dynamically around the boss while remaining independent actors.
    </div>

    <div class="paragraph">
        <strong>Technical Challenges</strong>
        <ul>
            <li>Projectiles could not share a single pivot</li>
            <li>Attaching actors caused unstable rotations</li>
            <li>Standard rotation approaches produced visual and collision issues</li>
        </ul>
    </div>

    <div class="paragraph">
        <strong>Solution</strong>
        <br/><br/>
        I implemented a math-driven orbital system using parametric equations:
        <pre style="background:#222;color:#eee;padding:12px;border-radius:4px;overflow-x:auto;"><code>(u + r * cos(t), v + r * sin(t))</code></pre>
        <ul>
            <li>Visualized and tuned the behavior using <a href="https://www.desmos.com/calculator/yvz3rho2xl" target="_blank">Desmos</a></li>
            <li>Translated the math into Unreal Blueprint nodes</li>
            <li>Exposed parameters for radius and speed to allow quick iteration</li>
            <li>Achieved stable, readable, and visually striking projectile motion</li>
        </ul>
        This approach gave us full control over the motion and avoided engine limitations under tight constraints.
    </div>

    <div class="paragraph center">
        <img src="/img/projects/clocktergeist/feature-shot.png" alt="Rotating projectile system" style="width:100%;max-width:800px;margin:15px 0;" />
    </div>

    <div class="paragraph center">
        <video controls width="100%" style="max-width:800px;" poster="/img/projects/clocktergeist/video-poster.png">
            <source src="/img/projects/clocktergeist/project-clock-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>

    <h2>Challenges &amp; Learnings</h2>

    <div class="paragraph">
        <ul>
            <li>Built a custom state-machine approach instead of Unreal's native Behavior Trees / State Trees. While effective for this project, I later recognized that native systems would scale better for larger teams or longer timelines.</li>
            <li>This experience taught me the value of:
                <ul>
                    <li>Choosing the right abstraction early in development</li>
                    <li>Making pragmatic tradeoffs under real production pressure</li>
                    <li>Prioritizing team delivery over personal learning goals</li>
                </ul>
            </li>
        </ul>
    </div>

    <h2>Why This Project Matters</h2>

    <div class="paragraph">
        Clocktergeist represents a turning point in my development as a programmer. It wasn't just about implementing mechanics — it was about stepping into a leadership gap, taking responsibility for the success of others' work, and delivering a complete experience under pressure.
        <br/><br/>
        Shipping this project tested my ability to:
        <ul>
            <li>Lead through uncertainty</li>
            <li>Make hard technical tradeoffs</li>
            <li>Support teammates across disciplines</li>
            <li>Keep a project alive when things go wrong</li>
        </ul>
        The project went on to win the <strong>Best Art Direction</strong> award at the game jam, which was especially meaningful to me given how hard the designers, artists and animators worked under pressure. Helping ensure their work shipped and was recognized remains one of the most rewarding parts of the project for me.
    </div>

    <div class="paragraph">
        Finally, here are some streamers playtesting the game and a full playthrough 👇
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/Nd1e68Kzx4E" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/IC3S_fDLqsg" frameborder="0" allowfullscreen></iframe>
    </div>
    `, "#5a3e8a", false, true),

    new ProjectData("reactional-music", "Reactional Music", "img/projects/reactional/icon.png", `
    <div class="paragraph">
        <div class="notice">You can visit them here: <a href="https://reactionalmusic.com/" target="_blank">reactionalmusic.com/</a></div>
    </div>

    <div class="paragraph" style="opacity:0.75; font-size:0.95em;">
        <strong>Engines:</strong> Unity, Unreal Engine 5
    </div>

    <h2>Role Overview</h2>

    <div class="paragraph">
        <strong>Objective</strong>
        <br/><br/>
        I was outsourced as a programmer to Reactional Games for almost 2 years, working closely with their core team as a co-developer across Unity and Unreal Engine 5. My work ranged from gameplay prototypes and demo experiences to editor tooling, backend integration, and mobile build support.
        <ul>
            <li>Built multiple Unity &amp; UE5 demos to match client visions under tight iteration cycles</li>
            <li>Integrated Reactional backend endpoints (search, filters, playlists, telemetry) into demo frontends</li>
            <li>Developed UI Toolkit-based editor tools + in-game UI for data-driven music experiences</li>
            <li>Wrote parsing + deserialization utilities to stabilize backend-frontend workflows</li>
            <li>Debugged Android build issues involving Reactional DLLs and platform-specific edge cases</li>
        </ul>
    </div>

    <h2>Selected Work</h2>

    <div class="paragraph">
        A snapshot of the variety of demos and production work I contributed to:
        <ul>
            <li><strong>Match3 Puzzle Game (Unity)</strong> — UI revamps, pre-game track selection, track previews, file caching, menus, game over flows, leaderboards</li>
            <li><strong>Match3 Rework w/ Amanotes GDK</strong> — Firebase + IronSource + Remote Config + AppsFlyer, offline/pause failsafes, missions/achievements, save/load JSON system</li>
            <li><strong>Glide w/ Biark (Unity)</strong> — 2D rhythm gameplay + deep analysis integration</li>
            <li><strong>Moon Runner (Unity)</strong> — Guitar Hero-style beat timing + deep analysis integration</li>
            <li><strong>Automobile HMI Demo (UE + Unity)</strong> — driving UX, UI instrumentation, day/night toggle, spline roads, vehicle controller</li>
            <li><strong>Discobot / DiscoBooth (Unity → UE ports)</strong> — recreated gameplay systems, interaction-heavy showcase scene, and UI ports (UMG)</li>
            <li><strong>B2C Storefront Demo (Unity + .NET)</strong> — UI Toolkit storefront + backend wiring + local server to mimic payment providers</li>
        </ul>
    </div>

    <div class="paragraph">
        You can visit the <a href="https://docs.reactionalmusic.com/Unity/" target="_blank">Reactional Documentation</a> where you can find example scripts and other API-related functions I worked on. Similarly, you can visit <a href="https://app.reactionalmusic.com/start/demo-scenes" target="_blank">Reactional's Demo Scenes</a> page to play the demos I worked on <em>(warning: you'd need to create a free account to gain access to those demos).</em>
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/MW9Xmk3MhdQ" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/mh5rTP0wz-8" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/zoXt_QCmUIk" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/OhvW-WbTE5U" frameborder="0" allowfullscreen></iframe>
    </div>
    `, "#4f5fff", false, true),

    new ProjectData("melody-match", "Melody Match: Galaxy Puzzle", "img/projects/melody-match/icon.png", `
    <div class="paragraph">
        <div class="notice">You can play the game here: <a href="https://play.google.com/store/apps/details?id=com.reactionmusic.musicmatch" target="_blank">Play Store Link</a></div>
    </div>

    <div class="paragraph" style="opacity:0.75; font-size:0.95em;">
        <strong>Engine:</strong> Unity
    </div>

    <h2>Context</h2>

    <div class="paragraph">
        Worked on this project for ~1 year across multiple reworks, making it one of my most in-depth production experiences at Reactional.
        <br/><br/>
        Originally developed for Early Access in partnership with Amanotes, the project was later reskinned and republished by Arba Development Studios with a new publishing partner.
        <br/><br/>
        My focus was on expanding gameplay systems, stabilizing an evolving codebase, and supporting live-service features.
    </div>

    <h2>What I Owned</h2>

    <img src="/img/projects/melody-match/mobile-screencap.png" alt="Melody Match mobile gameplay" style="float:right; max-width:280px; width:30%; margin:0 0 20px 30px; border-radius:8px;" />

    <div class="paragraph">
        <strong>Gameplay &amp; Progression</strong>
        <ul>
            <li>Built mission, objective, and lifetime achievement systems</li>
            <li>Implemented mini-boss encounters, health systems, power-ups, and in-game economy</li>
            <li>Designed difficulty scaling and progression flow</li>
            <li>Iterated on the core gameplay loop across multiple versions</li>
            <li>Integrated Reactional music systems (stingers, macros) directly into gameplay</li>
        </ul>
    </div>

    <div class="paragraph">
        <strong>UI &amp; Game Flow</strong>
        <ul>
            <li>Developed pre/post-game flows, menus, pause, and fail-safe systems</li>
            <li>Implemented lives/fuel systems and real-time timers</li>
            <li>Built track selection + preview systems for music-driven gameplay</li>
            <li>Created favourites system for saving tracks across seasonal refreshes</li>
            <li>Developed a modular UI system (UI Toolkit + stylesheets) enabling full theme swaps for seasonal updates</li>
        </ul>
    </div>

    <div class="paragraph">
        <strong>Data &amp; Persistence</strong>
        <ul>
            <li>Designed JSON-based save/load system</li>
            <li>Implemented leaderboard tracking</li>
            <li>Built data caching systems to improve performance and load times</li>
            <li>Wrote parsers for backend communication and data handling</li>
        </ul>
    </div>

    <div class="paragraph">
        <strong>Live Features &amp; SDKs</strong>
        <ul>
            <li>Built around Reactional's music platform, driving rhythm-based gameplay systems</li>
            <li>Integrated Firebase, AppsFlyer, IronSource, and Amanotes GDK</li>
            <li>Implemented analytics events, monetization hooks, and remote config</li>
            <li>Developed systems for live tuning and backend-driven updates</li>
            <li>Integrated REST APIs for track lists, samples, and music bundles</li>
            <li>Built infrastructure for seasonal content rotation (live track refreshes)</li>
            <li>Contributed to improving Reactional's internal SDK (features, scripts, documentation)</li>
        </ul>
    </div>

    <div class="paragraph">
        <strong>Refactoring &amp; Stability</strong>
        <ul>
            <li>Worked through multiple large-scale reworks as project scope evolved</li>
            <li>Transitioned the project from demo → hypercasual prototype → live-service candidate</li>
            <li>Modularized systems to support scalability and future features</li>
            <li>Debugged edge cases and improved runtime stability across Android builds</li>
        </ul>
    </div>

    <div style="clear:both;"></div>

    <h2>What This Project Demonstrates</h2>

    <div class="paragraph">
        <ul>
            <li>Building systems that survive multiple redesigns</li>
            <li>Working inside a real production mobile pipeline</li>
            <li>Handling SDK-heavy, backend-driven gameplay features</li>
            <li>Balancing iteration speed vs code stability</li>
        </ul>
    </div>

    <h2>Links</h2>

    <div class="paragraph">
        <ul>
            <li><a href="https://play.google.com/store/apps/details?id=com.reactionmusic.musicmatch&pcampaignid" target="_blank">Melody Match: Galaxy Puzzle</a> <em>(Early Access — Discontinued)</em> — Play Store</li>
            <li><a href="https://arbadevelopmentstudios.com/portfolio/bad-company-game/" target="_blank">Bad Company: Can't Get Enough</a> <em>(reskinned version)</em> — Arba Portfolio Page</li>
            <li><a href="https://apps.apple.com/us/app/bad-company-cant-get-enough/id6754314070" target="_blank">Bad Company: Can't Get Enough</a> — App Store</li>
            <li><a href="https://play.google.com/store/apps/details?id=com.arba.mmbadcompany" target="_blank">Bad Company: Can't Get Enough</a> — Play Store</li>
        </ul>
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/MW9Xmk3MhdQ" frameborder="0" allowfullscreen></iframe>
    </div>
    `, "#6c5ce7", true, false),

    new ProjectData("false-awakening", "False Awakening", "img/projects/false-awakening/icon.png", `
    <div class="paragraph">
        <div class="notice">You can play the game here: <a href="https://joelabe.itch.io/false-awakening" target="_blank">joelabe.itch.io/false-awakening</a></div>
    </div>

    <div class="paragraph" style="opacity:0.75; font-size:0.95em;">
        <strong>Engine:</strong> Unity
    </div>

    <h2>Context</h2>

    <div class="paragraph">
        False Awakening is a 2D narrative-driven platformer developed in 10 days for a GDN game jam, where the game ranked between 2nd–7th place among 100+ entries. The project was created early in my career by a small team consisting of three programmers and a sound artist.
        <br/><br/>
        While the team included multiple programmers, I naturally stepped into a lead gameplay role, as the others were very new to development. I was responsible for driving the technical direction of the project and ensuring the game reached a polished, shippable state within a very tight timeline.
    </div>

    <h2>Scope &amp; Ownership</h2>
    <div class="paragraph">
        <ul>
            <li>Lead programmer responsible for most gameplay systems</li>
            <li>Designed and implemented:
                <ul>
                    <li>Player movement and platforming mechanics</li>
                    <li>Gravity-based gameplay variations</li>
                    <li>Enemy behavior and interaction logic</li>
                    <li>Projectile combat systems</li>
                    <li>Pickup and progression mechanics</li>
                </ul>
            </li>
            <li>Built narrative support systems including:
                <ul>
                    <li>Dialogue triggers</li>
                    <li>Story sequencing</li>
                    <li>Level-to-level narrative flow</li>
                </ul>
            </li>
            <li>Coordinated closely with the sound designer to integrate audio cues that reinforced emotional tone and player feedback</li>
        </ul>
    </div>

    <h2>Gameplay &amp; Technical Focus</h2>
    <div class="paragraph">
        False Awakening was heavily inspired by precision platformers like Celeste, requiring tight player control, consistent physics, and responsive feedback.
        <ul>
            <li>Tuned movement and jump arcs to feel responsive and forgiving</li>
            <li>Implemented reliable collision handling for fast-paced platforming</li>
            <li>Designed enemy patterns that complemented level pacing rather than overwhelming the player</li>
            <li>Structured systems to be easily adjustable during rapid playtesting cycles</li>
        </ul>
        Despite the short development window, the focus was on game feel and clarity, not just feature count.
    </div>

    <h2>Challenges &amp; Learnings</h2>
    <div class="paragraph">
        <ul>
            <li>Managing scope while maintaining polish under extreme time constraints</li>
            <li>Leading less-experienced programmers without slowing development</li>
            <li>Balancing narrative delivery with mechanical difficulty</li>
            <li>Reinforced the importance of simplicity and iteration in short production cycles</li>
        </ul>
    </div>

    <h2>Why This Project Matters</h2>
    <div class="paragraph">
        False Awakening tested my ability to:
        <ul>
            <li>Lead gameplay development under pressure</li>
            <li>Deliver a cohesive, emotionally grounded experience quickly</li>
            <li>Balance narrative and mechanics without overengineering</li>
        </ul>
    </div>
    `, "#7fb3d5", false, true),

    new ProjectData("poly-run", "Poly Run", "img/projects/poly-run/icon.png", `
    <div class="paragraph">
        <div class="notice">You can play the game here: <a href="#" target="_blank">link</a></div>
    </div>

    <div class="paragraph" style="opacity:0.75; font-size:0.95em;">
        <strong>Engine:</strong> Unity
    </div>

    <h2>Context</h2>

    <div class="paragraph">
        Poly Run is a solo-developed 3D arcade-style game created as part of my Unity training and experimentation phase. The project focuses on open-ended player movement in a city environment, blending arcade gameplay with light stealth and chase mechanics.
        <br/><br/>
        This was the first project I built entirely from scratch, using purchased art assets but designing, programming and implementing all gameplay systems myself.
    </div>

    <h2>Scope &amp; Ownership</h2>

    <div class="paragraph">
        <ul>
            <li>Sole programmer responsible for all gameplay systems</li>
            <li>Designed and implemented:
                <ul>
                    <li>Player controller based on the 3Cs (Character, Camera, Controls)</li>
                    <li>Mini-map and navigation systems</li>
                    <li>Procedural collectible spawning</li>
                    <li>Enemy NPC AI with patrol, detection, and chase behaviors</li>
                </ul>
            </li>
            <li>Implemented animation logic for both player and NPCs, ensuring visual consistency with gameplay states</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img src="/img/projects/poly-run/screenshot-1.png" alt="Poly Run screenshot 1" style="width:100%; max-width:800px; margin:15px 0; border-radius:6px;" />
    </div>

    <h2>AI &amp; Systems Design</h2>

    <div class="paragraph">
        The enemy NPCs were designed to create dynamic tension rather than scripted encounters.
        <ul>
            <li>Patrol routes with configurable waypoints</li>
            <li>Vision-cone–based detection system</li>
            <li>State-driven transitions between patrol, alert, and chase states</li>
            <li>Simple but extensible AI architecture to support additional behaviors</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img src="/img/projects/poly-run/screenshot-2.png" alt="Poly Run screenshot 2" style="width:100%; max-width:800px; margin:15px 0; border-radius:6px;" />
    </div>

    <h2>Challenges &amp; Learnings</h2>

    <div class="paragraph">
        <ul>
            <li>Managing a larger 3D space compared to previous 2D projects</li>
            <li>Designing AI that felt fair and readable without becoming complex</li>
            <li>Learning to scope and finish a complete game loop as a solo developer</li>
            <li>Gaining confidence in building entire gameplay stacks independently</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img src="/img/projects/poly-run/screenshot-3.png" alt="Poly Run screenshot 3" style="width:100%; max-width:800px; margin:15px 0; border-radius:6px;" />
    </div>

    <h2>Why This Project Matters</h2>
    <div class="paragraph">
        Poly Run represents my foundation as a gameplay programmer. It taught me how to:
        <ul>
            <li>Take ownership of a project end-to-end</li>
            <li>Build reusable gameplay systems</li>
            <li>Think about player experience holistically, not just isolated mechanics</li>
        </ul>
    </div>
    `, "#52606c", false, true),
];
