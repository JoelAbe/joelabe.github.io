import ProjectData from '@/data/ProjectData'

export default [
    new ProjectData("false-awakening", "False Awakening", "img/projects/false-awakening/icon.gif", `
    <div class="paragraph">
        <div class="notice">You can play the game here: <a href="https://joelabe.itch.io/false-awakening" target="_blank">joelabe.itch.io/false-awakening</a></div>
    </div>

    <div class="paragraph" style="opacity:0.75; font-size:0.95em;">
        <strong>Engine:</strong> Unity &nbsp;·&nbsp; <strong>Type:</strong> Game Jam &nbsp;·&nbsp; <strong>Platform:</strong> PC
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
    `, "#7fb3d5", true, false, "Unity"),

    new ProjectData("glyphweaver", "Glyphweaver", "img/projects/glyphweaver/icon.gif", `
    <div class="paragraph">
        <div class="notice">You can play the game here: <a href="https://veeyuh.itch.io/glyphweaver" target="_blank">veeyuh.itch.io/glyphweaver</a></div>
    </div>

    <div class="paragraph" style="opacity:0.75; font-size:0.95em;">
        <strong>Engine:</strong> Unreal Engine 5 &nbsp;·&nbsp; <strong>Type:</strong> Game Jam &nbsp;·&nbsp; <strong>Platform:</strong> PC
    </div>

    <h2>Context</h2>

    <div class="paragraph">
        Glyphweaver is a 3D action-adventure game with puzzle elements, built in Unreal Engine 5 over a month by a team of six. It was one of my earlier UE5 projects, and the one where most of my Blueprint fluency came from.
        <br/><br/>
        There were two programmers on the team. The other was more experienced in UE5 and carried the heavier engine-side work, which meant I could take clear ownership of a set of self-contained systems and learn the engine properly by building them rather than by reading about it.
    </div>

    <h2>What I Owned</h2>
    <div class="paragraph">
        <ul>
            <li><strong>Puzzle logic</strong> — the rules, state and completion conditions behind the game's puzzle encounters</li>
            <li><strong>World traversal</strong> — interactive world elements and the traversal mechanics connecting them</li>
            <li><strong>Inventory &amp; spell management</strong> — the systems governing what the player carries and casts</li>
        </ul>
        Work was mainly in Blueprints, with some elements dropped into C++ where it made more sense.
    </div>

    <h2>Why This Project Matters</h2>
    <div class="paragraph">
        Glyphweaver was where Unreal stopped being a second engine I could read and started being one I could build in. Owning whole systems on a small team — rather than assisting on someone else's — is what made the difference, and it set up the lead programmer role I took on <strong>Clocktergeist</strong> shortly after.
    </div>
    `, "#a67c00", true, false, "Unreal Engine 5"),

    new ProjectData("pyro-purge", "Pyro Purge", "img/projects/pyro-purge/icon.png", `
    <div class="paragraph">
        <div class="notice">You can play the game here: <a href="https://joelabe.itch.io/pyro-purge" target="_blank">joelabe.itch.io/pyro-purge</a></div>
    </div>

    <div class="paragraph" style="opacity:0.75; font-size:0.95em;">
        <strong>Engine:</strong> Unity &nbsp;·&nbsp; <strong>Type:</strong> Game Jam &nbsp;·&nbsp; <strong>Platform:</strong> PC
    </div>

    <h2>Context</h2>
    <div class="paragraph">
        <em>Content coming soon.</em>
    </div>
    `, "#d35400", true, false, "Unity"),

    new ProjectData("big-bubble-deep-trouble", "Big Bubble Deep Trouble", "img/projects/big-bubble-deep-trouble/icon.png", `
    <div class="paragraph">
        <div class="notice">You can play the game here: <a href="https://gamedeveloperskerala.itch.io/big-bubble-deep-trouble" target="_blank">gamedeveloperskerala.itch.io/big-bubble-deep-trouble</a></div>
    </div>

    <div class="paragraph" style="opacity:0.75; font-size:0.95em;">
        <strong>Engine:</strong> Unity &nbsp;·&nbsp; <strong>Type:</strong> Game Jam &nbsp;·&nbsp; <strong>Platform:</strong> PC
    </div>

    <h2>Context</h2>
    <div class="paragraph">
        <em>Content coming soon.</em>
    </div>
    `, "#3498db", true, false, "Unity"),

    new ProjectData("poly-run", "Poly Run", "img/projects/poly-run/icon.png", `
    <div class="paragraph">
        <div class="notice">You can play the game here: <a href="https://joelabe.itch.io/poly-run" target="_blank">joelabe.itch.io/poly-run</a></div>
    </div>

    <div class="paragraph" style="opacity:0.75; font-size:0.95em;">
        <strong>Engine:</strong> Unity &nbsp;·&nbsp; <strong>Type:</strong> Solo Project &nbsp;·&nbsp; <strong>Platform:</strong> PC
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

    <h2>Why This Project Matters</h2>
    <div class="paragraph">
        Poly Run represents my foundation as a gameplay programmer. It taught me how to:
        <ul>
            <li>Take ownership of a project end-to-end</li>
            <li>Build reusable gameplay systems</li>
            <li>Think about player experience holistically, not just isolated mechanics</li>
        </ul>
    </div>
    `, "#52606c", true, false, "Unity"),
];
