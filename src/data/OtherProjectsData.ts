import ProjectData from '@/data/ProjectData'

export default [
    new ProjectData("poly-run", "Poly Run", "img/projects/poly-run/icon.png", `
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
    `, "#e67e22", true, false),
];
