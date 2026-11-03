import ProjectData from '@/data/ProjectData'

export default [
    new ProjectData("cascadier", "Cascadier", "img/projects/cascadier/icon.gif", `
    <div class="paragraph">
        <div class="notice">You can get the game here: <a href="https://store.steampowered.com/app/3553150/The_Cascadier/" target="_blank">Cascadier Steam Store Page</a></div>
    </div>

    <div class="paragraph" style="opacity:0.75; font-size:0.95em;">
        <strong>Engine:</strong> Unity 6 &nbsp;·&nbsp; <strong>Client:</strong> Enchanted Arcade &nbsp;·&nbsp; <strong>Platform:</strong> PC (Steam)
    </div>

    <h2>Project Overview</h2>

    <div class="paragraph">
        Cascadier is a roguelike coin pusher built in Unity 6 by Enchanted Arcade. I joined four months before launch — about 1.5 years into the project's lifecycle — picking up the codebase from one of the founding engineers who had moved on.
        <br/><br/>
        My remit was end-to-end: drive performance up to shippable, refactor the systems that would carry the most new content, design and build a brand-new roguelike progression mechanic, and partner with design on the rapid iteration sprints leading up to Early Access. By launch I had taken ownership of the coin physics, the ticket/trinket upgrade pipeline, the FirstCoin progression system, audio integration, and the bulk of the gameplay-side bug fix queue.
    </div>

    <div class="paragraph center">
        <video controls width="100%" style="max-width:800px;">
            <source src="/img/projects/cascadier/gameplay.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>

    <h2>Scope &amp; Ownership</h2>
    <div class="paragraph">
        <ul>
            <li><strong>Performance</strong> — drove in-editor FPS from ~15 to a stable 60 through physics rearchitecture, replacing a bespoke supervisory layer with native Unity physics, and cross-team work with the art team to bring down rendering cost on high-instance models</li>
            <li><strong>FirstCoin</strong> — designed and built a complete roguelike progression mechanic from scratch: a 23-effect level tree spanning ~40 levels, ScriptableObject data layer, UI integration, and an absorption mechanic that lets the FirstCoin carry a player-selected ability into the round</li>
            <li><strong>Trinket upgrade system</strong> — reworked the upgrade pipeline into a modular, multi-pathway tier graph driven entirely by ScriptableObjects and a generic-field dispatcher, so new upgrades become a designer authoring task rather than a code change</li>
            <li><strong>Ticket abilities</strong> — implemented 11 ticket abilities spanning kinematic structure generation, procedural motion math, and physics-driven impacts — each its own self-contained mechanic</li>
            <li><strong>Rapid prototyping sprint</strong> — week-long collaboration with the design team building throwaway test scenes and mechanics with live feedback to lock the core game loop</li>
            <li><strong>FMOD integration</strong> — wired in banks, events and parameters across gameplay states for responsive audio feedback</li>
            <li><strong>Quest system</strong> — cleaned up the pre-existing quest flow and added new quest content</li>
            <li><strong>Bug fixes</strong> — shipped hundreds of bug fixes and architectural corrections in the final push to Early Access</li>
        </ul>
    </div>

    <h2>Performance: ~15 → 60 FPS</h2>
    <div class="paragraph">
        In a coin pusher, the coin physics <em>is</em> the game. With the in-editor framerate sitting at around 15 and dipping lower under load, there was no separating "fix the performance" from "make the game feel good" — they were the same problem. Stable 60 was the bar to clear before any other gameplay polish was worth doing, and the moment the coin sim started running at the right framerate is the moment the game started feeling like a coin pusher.
        <br/><br/>
        The single largest gain came from removing the custom coin physics supervisory layer that was fighting Unity's native solver. Solver iteration counts had been inflated to compensate for the friction between the two systems — bringing them back to Unity defaults unlocked most of the framerate budget.
        <br/><br/>
        Profiling flagged the next chunk as rendering-bound on the coin machines themselves, the environment models, and the lighting and detail props duplicated many times in each scene. I traced the worst offenders, then worked with the art team to bring vertex and poly budgets down — the kind of fix that only lands when engineering and art look at the profiler together.
        <br/><br/>
        A lot of the rest was smoke and mirrors. I swapped mesh colliders for box colliders wherever the silhouette could lie about it — coin machines, decorative shelves, anything the player wasn't directly interacting with — and dropped colliders entirely on props that existed for the eye, not the physics. The game looked the same; the system stopped paying for fidelity it never used.
        <br/><br/>
        Other interventions:
        <ul>
            <li><strong>Capped <code>RB.maxDepenetrationVelocity</code> at 4</strong> on every coin Rigidbody — eliminated the "coin explosion" bug where deep interpenetration generated runaway separation forces, occasionally launching coins through the playfield</li>
            <li><strong>Investigated occlusion culling, then rejected it</strong> — the camera is a fixed wide-angle shot of the full machine; almost nothing is ever fully occluded, so baking cost and per-frame culling overhead would exceed any savings</li>
        </ul>
        A lot of work also went into giving each coin the right physics material for the moment it was in. <code>ReducedFrictionMaterial</code> was applied when two coins wedged on the pegboard so they could slide off naturally instead of locking up. Near the end of a shelf, the same swap let coins get pushed off the edge rather than mass-piling into what was effectively an immovable wall. Coins moved between <code>MainMaterial</code>, <code>ReducedFrictionMaterial</code>, <code>PegFrictionMaterial</code>, and <code>BouncyMaterial</code> when the situation called for it, not on a fixed schedule.
        <br/><br/>
        The result was both a framerate win and a capacity win — the system went from struggling under 100 active coins to running hundreds simultaneously without lag.
    </div>

    <h2>Custom Physics → Unity Native</h2>
    <div class="paragraph">
        The original coin physics ran a heavy supervisory layer on top of Unity's solver: per-frame upward boxcasts to detect stuck stacks, pairwise <code>Physics.IgnoreCollision</code> calls across all overlapping coins (O(n²) in the coin count), a coroutine that briefly ghosted collision between every pair of overlapping coins, per-state material and damping switches in <code>FixedUpdate</code>, and custom shelf-stack force application. It had been built to mask jitter and explosions that early-Unity coin-pusher projects tend to hit — patching symptoms rather than the root cause.
        <br/><br/>
        I replaced the entire layer with three targeted mechanisms:
        <ul>
            <li><code>RB.maxDepenetrationVelocity = 4f</code> set at Rigidbody creation</li>
            <li>A single upward-velocity suppression check while on-shelf, gated by an override flag for ability effects</li>
            <li>A per-coin <code>ExtraGravityMultiplier</code> for settling behaviour, tunable per coin type</li>
        </ul>
        The coin explosion bug, the jitter on large piles, and the stack-riding behaviour all disappeared. <code>CoinMono.FixedUpdate</code> went from a dozen branches with nested conditionals down to four clean responsibilities. The team adopted it quickly because the result felt better, not just faster.
    </div>

    <div class="paragraph center">
        <video controls width="100%" style="max-width:800px;">
            <source src="/img/projects/cascadier/coins-montage.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>

    <h2>FirstCoin — A New Progression Mechanic</h2>
    <div class="paragraph">
        FirstCoin was a from-scratch design: a unique coin the player keeps across runs, gains XP as you collect it, and levels up to unlock effects in four hook categories — <em>passive</em>, <em>on insertion</em>, <em>on collection</em>, and <em>on round end</em>. By max level it can trigger ability cascades, absorb a player-chosen ticket card to carry into the round, and convert touched coins to higher-value tiers.
    </div>

    <div class="paragraph center">
        <video controls width="100%" style="max-width:800px;">
            <source src="/img/projects/cascadier/first-coin.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>

    <div class="paragraph">
        The data layer is a single ScriptableObject (<code>FirstCoinScr</code>) holding all configuration and persisted state, plus an ordered <code>List&lt;LevelData&gt;</code> describing each level's progression cost, reward visuals, and one of 23 named effect types. Designers tune the entire progression tree from the inspector — no code per level.
        <br/><br/>
        The architecturally characteristic piece is <code>CalculateLevelStats()</code>, the central accumulator that resets all derived state and rebuilds it from the level data on demand. Three different accumulation strategies — stack, flag, and "highest wins" — all coexist within one switch:
        <pre style="background:#222;color:#eee;padding:14px;border-radius:6px;overflow-x:auto;font-size:0.85em;line-height:1.4;"><code>public void CalculateLevelStats()
{
    // Reset all derived state to defaults
    scoreBonus = 0; ticketsOnRecovery = 0; storeDiscount = 0;
    absorptionTier = CardAbsorptionTier.None;
    triggersRagnarokOnRecovery = false;
    // ... 17 more defaults

    for (int i = 0; i &lt; LevelsData.Count; i++)
    {
        LevelData lvl = LevelsData[i];
        maxScoreBonus += lvl.ScorePercentageOnCollect; // for UI preview
        if (i &gt; currentLevel) continue;               // skip locked levels

        scoreBonus += lvl.ScorePercentageOnCollect;
        switch (lvl.EffectType)
        {
            // Stacking — additive across levels
            case LevelEffectType.TicketsOnRecovery:
                ticketsOnRecovery += (int)lvl.EffectValue;            break;

            // Flags — set true once, can't unset
            case LevelEffectType.TriggerRagnarokOnRecovery:
                triggersRagnarokOnRecovery = true;                    break;

            // Scalars — latest level wins
            case LevelEffectType.StoreDiscountOnCollection:
                storeDiscount = lvl.EffectValue;                      break;

            // Tiered — highest enum value wins
            case LevelEffectType.AbsorbEpicCards:
                if (absorptionTier &lt; CardAbsorptionTier.Epic)
                    absorptionTier = CardAbsorptionTier.Epic;         break;

            // ... 19 more cases following the same three shapes
        }
    }
}</code></pre>
        Adding a new level effect becomes a one-row data entry plus a single switch arm. The pattern scaled cleanly to all 23 named effects without ever needing a subclass.
    </div>

    <h2>Trinket Upgrade System</h2>
    <div class="paragraph">
        The pre-existing upgrade data lived on the trinket prefabs themselves, with upgrade nodes pointing at other upgrade nodes through nested reference fields — cyclic by construction, and every new upgrade meant editing a deeply nested inspector tree. I pulled the upgrade data out into ScriptableObjects with explicit prerequisite edges forming a DAG, then reworked the runtime side: every trinket exposes 8 generic floats (<code>FirstFloat</code>–<code>EighthFloat</code>) and 4 generic bools, each upgrade node carries an <code>UpgradeOptions</code> enum naming which generic field it modifies, and a single dispatcher routes a delta-based stat change at runtime.
    </div>

    <div class="paragraph center">
        <img src="/img/projects/cascadier/trinket-inspector.png" alt="Trinket ScriptableObject inspector" style="width:100%; max-width:800px; margin:15px 0; border-radius:6px;" />
    </div>

    <div class="paragraph">
        The dispatcher is idempotent — it computes <code>(targetValue − previousValue)</code> and applies the delta, so the same upgrade can be re-applied without double-counting:
        <pre style="background:#222;color:#eee;padding:14px;border-radius:6px;overflow-x:auto;font-size:0.85em;line-height:1.4;"><code>public void SetTrinketUpgrades(ShopItemMono triggeredPurchase)
{
    if (TiedShopStats?.TrinketUpgrades == null) return;

    for (int i = 0; i &lt; TiedShopStats.TrinketUpgrades.Count; i++)
    {
        TrinketUpgrade upgrade = TiedShopStats.TrinketUpgrades[i];
        if (upgrade == null) continue;

        int currentLevel  = TiedShopStats.TrinketUpgradeLevels[i];
        int previousLevel = _currentTrinketLevels[i];
        if (currentLevel == previousLevel) continue;

        // Delta-based application — safe to call repeatedly
        float targetValue   = currentLevel  &gt; 0
            ? upgrade.StatChanges[currentLevel  - 1].NewValue : 0f;
        float previousValue = previousLevel &gt; 0
            ? upgrade.StatChanges[previousLevel - 1].NewValue : 0f;
        float upgradeAmount = targetValue - previousValue;

        switch (upgrade.StatToChange)
        {
            case UpgradeOptions.FirstFloat:    FirstFloat  += upgradeAmount; break;
            case UpgradeOptions.SecondFloat:   SecondFloat += upgradeAmount; break;
            case UpgradeOptions.FirstBool:     FirstBool   = upgradeAmount &gt; 0; break;
            case UpgradeOptions.TriggerChance:
                TicketPrecentageChance += upgradeAmount;                       break;
            // ... 20 more dispatch cases reaching into globals where needed
        }
    }
    _currentTrinketLevels = new List&lt;int&gt;(TiedShopStats.TrinketUpgradeLevels);
}</code></pre>
        Upgrade nodes are positioned on a 4-ring radial graph (Inner / Middle / Outer / Beyond) with prerequisite DAG edges between them. Designers build new upgrade trees by creating ScriptableObjects and wiring them in the inspector.
    </div>

    <h2>Ability Feature Highlight: Cyclone</h2>
    <div class="paragraph">
        Of the 11 ticket abilities I built, Cyclone is the one I'd put on a code review. It catches nearby coins into a tornado around the FirstCoin, lifts them on a dual-phase arc, and on completion releases them back into physics with correct tangential exit velocity — so they fly outward naturally instead of dropping straight down.
        <br/><br/>
        The arc uses a sine ramp up to peak height and a cosine ramp down. Angular speed scales with height. Per-coin wind noise breaks lockstep so the orbiting coins look like a swirl, not a rigid carousel:
        <pre style="background:#222;color:#eee;padding:14px;border-radius:6px;overflow-x:auto;font-size:0.85em;line-height:1.4;"><code>private void Cyclone_UpdateArc(CycloneCoin vc, float elapsed,
    float liftTime, float descentTime, Vector3 axis)
{
    float flightDuration = liftTime + descentTime;
    float arcT  = Mathf.Clamp01(elapsed / flightDuration);
    float peakT = liftTime / flightDuration;

    // Height: sine ramp up to peak, cosine ramp down
    float heightFrac = arcT &lt;= peakT
        ? Mathf.Sin(arcT / peakT * Mathf.PI * 0.5f)
        : Mathf.Cos((arcT - peakT) / (1f - peakT) * Mathf.PI * 0.5f);

    // Angular speed boosts near the apex
    vc.Angle += vc.OrbSpeed * (1f + heightFrac * 1.2f) * Time.deltaTime;
    float rad = vc.Angle * Mathf.Deg2Rad;

    // Radius lerps inward then oscillates with per-coin phase
    float curR = Mathf.Lerp(vc.StartR, vc.TargetR,
                            Mathf.SmoothStep(0f, 1f, arcT * 2f))
               + Mathf.Sin(elapsed * 0.7f + vc.WindPhase + 1.57f) * 0.8f * heightFrac;

    float curY = Mathf.Lerp(vc.StartY, vc.TargetY, heightFrac)
               + Mathf.Sin(elapsed * 0.9f + vc.WindPhase) * 1.0f * heightFrac;

    // Per-coin wind noise — breaks rigid carousel feel
    Vector3 wind = new Vector3(
        Mathf.Sin(elapsed * 2.3f + vc.WindPhase)        * 0.5f * (1f - heightFrac),
        0f,
        Mathf.Cos(elapsed * 2.7f + vc.WindPhase + 2.4f) * 0.5f * (1f - heightFrac));

    vc.Coin.transform.position = new Vector3(
        axis.x + Mathf.Cos(rad) * curR, curY,
        axis.z + Mathf.Sin(rad) * curR) + wind;

    // Arc complete — restore physics with correct tangential exit velocity
    if (arcT &gt;= 1f)
    {
        vc.Released = true;
        vc.Coin.RB.isKinematic = false;
        Vector3 tangent = new Vector3(-Mathf.Sin(rad), 0f, Mathf.Cos(rad));
        vc.Coin.RB.linearVelocity =
            tangent * (vc.OrbSpeed * Mathf.Deg2Rad * curR * 2f)
          + Vector3.up * 1.5f;
    }
}</code></pre>
        The tangential exit velocity is the part I'm proudest of. Without it, coins would drop straight down at the end of the arc — visually wrong and gameplay-wrong, because they wouldn't scatter back onto the playfield naturally. Computing the tangent from the orbital angle and applying it as the release velocity makes the coins look like they're being flung off a spinning disc.
    </div>

    <div class="paragraph">
        <strong>The other 10 abilities, one line each:</strong>
        <ul>
            <li><strong>Ragnarok</strong> — periodic impulse forces on every coin for a configurable duration, with chain-retrigger on gem collection</li>
            <li><strong>Geode</strong> — activates dormant shelf objects that shatter into gems after configurable hit counts</li>
            <li><strong>Dynamite</strong> — physics-driven ballistic arc to a random safe landing zone, fuse burn, then radial blast and bonus coin spawn</li>
            <li><strong>Pillary</strong> — stacks coins kinematically in a spiraling column anchored to the FirstCoin, releases all simultaneously</li>
            <li><strong>Lightning Strike</strong> — delayed VFX bolt with radial coin scatter and bonus coin fling on impact</li>
            <li><strong>Disco Ball</strong> — Fibonacci-sphere arrangement around a center coin, rotating root transform, then unparent and scatter</li>
            <li><strong>Pyramid</strong> — builds a square-base coin pyramid from apex downward, releases as physics objects at once</li>
            <li><strong>Sea of Sand</strong> — sustained forward force on all shelf coins, with periodic new coin spawns flowing in from the back</li>
            <li><strong>Spindervish</strong> — when the carrier coin is stationary, mass-pins it, spins up, applies centrifugal forces to nearby coins, winds down</li>
            <li><strong>Blade of Gales</strong> — sustained upward+forward force near the collection zone via OverlapBox, tracks launched coins and monitors landings</li>
        </ul>
    </div>

    <h2>Challenges &amp; Learnings</h2>
    <div class="paragraph">
        <ul>
            <li>Joining a project late means the architecture is already pointed in a direction — picking which fights to take is more important than picking which fights you'd win in a clean room. The custom physics rewrite was worth it; replacing the global event bus would not have been</li>
            <li>The biggest performance wins came from <em>removing</em> code, not adding it. The instinct to cache, batch, or instance was usually wrong — the supervisory layer was the cost. Deleting it and letting the code we kept cooperate with Unity's solver instead of fighting it was the win</li>
            <li>Considered porting the coin physics to <strong>DOTS</strong> to offload the work to Burst-compiled jobs. At an earlier project stage it would have been the natural call — but four months from launch, the porting cost and the risk of late-stage instability outweighed the gain. Knowing when <em>not</em> to rewrite is its own skill</li>
            <li>Designing the FirstCoin system around a single accumulator function (rather than per-effect state) made every later feature request — and every balance tweak — a designer-side authoring change, not a code change. That payoff compounded across the final months</li>
            <li>The delta-based trinket upgrade dispatcher emerged from a bug: re-applying the same upgrade was double-counting stat changes. Reframing it around <em>change since last time</em> instead of <em>current value</em> made the function idempotent and killed an entire class of bugs at once</li>
            <li>When working alongside a design team in rapid prototyping, the right deliverable is a tunable scene with knobs exposed in the inspector — not a polished feature. Test scenes I built in an hour generated more usable design feedback than features I shipped in a week</li>
        </ul>
    </div>

    <h2>Why This Project Matters</h2>
    <div class="paragraph">
        Cascadier was my first time joining a mid-development codebase with a hard launch date and being trusted to make architectural calls. It was also my first Steam title, and the project where I learned what it actually takes to deliver a steady stream of new mechanics — entire abilities, a full progression system, the trinket rework — inside a tight production window without breaking the schedule or the team's confidence in the code.
        <br/><br/>
        The <strong>trinket upgrade system</strong> is the part I'm proudest of as an engineer. The modularity it gave designers compounded month after month: new upgrades became inspector authoring instead of code changes, and the architecture is the kind that would pay for itself again on the next game. The <strong>FirstCoin system</strong> is the part I'm proudest of as a designer-engineer: a mechanic the studio could ship, balance, and extend without me sitting at every step. The <strong>physics work</strong> is the part I'm proudest of as a craftsman: a system that did less, ran faster, and felt better — and that the rest of the team adopted because the result spoke for itself.
    </div>
    `, "#b8860b", "Unity 6"),

    new ProjectData("robodrive", "RoboDrive", "img/projects/robodrive/icon.gif", `
    <div class="paragraph">
        <div class="notice">Source, documentation and measurements: <a href="https://github.com/JoelAbe/RoboDrive" target="_blank">github.com/JoelAbe/RoboDrive</a></div>
    </div>

    <div class="paragraph" style="opacity:0.75; font-size:0.95em;">
        <strong>Role:</strong> Solo, a little over a month &nbsp;·&nbsp; <strong>Stack:</strong> Unreal Engine 5.8, C++, Slate, Python, ROS 2, GitHub Actions &nbsp;·&nbsp; <strong>Domain:</strong> Robotics Simulation
    </div>

    <div class="paragraph">
        <strong>A UE5 robotics simulator in C++ with sensor models, an external API, a scenario test suite in CI, an operator view and a ROS 2 bridge. Its centrepiece is a measured investigation of how fog defeats lidar obstacle avoidance — and the fix that diagnosis led to.</strong>
    </div>

    <div class="paragraph center">
        <video controls autoplay muted loop playsinline width="100%" style="max-width:800px; border-radius:6px;">
            <source src="/img/projects/robodrive/slalom-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>

    <h2>What It Is</h2>

    <div class="paragraph">
        A ground robot that drives on real differential-drive kinematics over Chaos physics, carries wheel encoders, an IMU, a lidar and a camera on a simulated clock, and estimates its own pose by dead reckoning. It drives itself to goals around obstacles, any external client can drive it over a TCP API, and a ROS 2 node can drive it in simulation time.
        <br/><br/>
        I built it to answer one question properly: what does it take to make a simulation you'd be willing to <em>trust</em>? Making a robot drive is easy. The interesting work is everything that decides whether its results mean anything.
    </div>

    <h2>Decisions That Keep the Results Honest</h2>

    <div class="paragraph">
        <ul>
            <li><strong>The simulation doesn't know who's driving.</strong> Four C++ modules, and the build forbids the core simulation from depending on the other three. An in-engine brain, a Python script and a ROS 2 node all look the same to it.</li>
            <li><strong>The brain never sees ground truth.</strong> It receives a sensor snapshot, never the robot. A brain that can read its true position is tested in a world that will never exist, and every result it produces is optimistic in a way you can't measure. Truth goes on a separate channel, for display and judging only. <em>(<a href="https://github.com/JoelAbe/RoboDrive/blob/main/docs/decisions/0009-brains-receive-a-snapshot.md" target="_blank">ADR 0009</a>, one of 17 decision records.)</em></li>
            <li><strong>ROS conventions inside, not just at the edge.</strong> Coordinates follow REP-103 internally and are converted at the Unreal boundary. Unreal is left-handed, ROS right-handed, and a missed handedness flip produces mirrored rotations that look entirely plausible, so the conversion is tested rather than trusted.</li>
        </ul>
    </div>

    <h2>Measuring Odometry Drift</h2>

    <div class="paragraph">
        Same fixed path, one injected error per run, compared against ground truth at 50 Hz. Each error source left a distinct signature: calibration error grew steadily with distance, encoder noise wandered as a random walk, and wheel slip produced a sudden 17° heading step that odometry never recovered.
        <br/><br/>
        One result I didn't expect: a +2% wheel-radius error read as 1.49%, because on a circular path part of the scale error reshapes the circle and cancels each lap. <strong>The test path decides how a calibration bug presents.</strong> And the gyro stayed within about a degree while odometry lost up to 25° — their failure modes don't overlap, which is the concrete case for fusing them.
    </div>

    <div class="paragraph center">
        <img src="https://raw.githubusercontent.com/JoelAbe/RoboDrive/main/docs/images/drift_vs_distance.png" alt="Odometry position error against distance travelled, per error source" style="width:100%; max-width:800px; border-radius:6px;" />
    </div>

    <h2>Fog: The Diagnosis</h2>

    <div class="paragraph">
        I modelled fog on the lidar two ways: <strong>attenuation</strong>, where scattering shortens the range (the 12 m lidar sees 3.3 m at 10 m visibility), and <strong>clutter</strong>, where some light returns from the fog itself. To the brain, a fog echo and an obstacle are identical.
        <br/><br/>
        The obvious guess is that fog blinds the robot by cutting its range. So the sweep separated the two effects. <strong>Range loss alone was harmless</strong> — with echoes off, every run succeeded down to 10 m visibility. <strong>Clutter was what broke it</strong>: with echoes on, only 3 of 18 runs reached the goal.
    </div>

    <div class="paragraph" style="display:flex; flex-wrap:wrap; gap:16px; justify-content:center;">
        <figure style="flex:1 1 300px; max-width:400px; margin:0; text-align:center;">
            <img src="/img/projects/robodrive/slalom-fog-echoless.gif" alt="Slalom in fog with echoes off — range loss only" style="width:100%; border-radius:6px;" />
            <figcaption style="font-size:0.85em; opacity:0.75; margin-top:6px;">Echoes off — range loss only. Clean run.</figcaption>
        </figure>
        <figure style="flex:1 1 300px; max-width:400px; margin:0; text-align:center;">
            <img src="/img/projects/robodrive/slalom-fog-default.gif" alt="Slalom in fog with echoes on — range loss and clutter" style="width:100%; border-radius:6px;" />
            <figcaption style="font-size:0.85em; opacity:0.75; margin-top:6px;">Echoes on — same fog, plus clutter. Jittery steering.</figcaption>
        </figure>
    </div>

    <div class="paragraph">
        The surprise was <em>how</em> it failed. Above 20 m visibility, every failure was a <strong>false arrival</strong>: the robot stopped up to 1.9 m short, believing it had arrived. Fog never touches the wheels, yet odometry error grew ten to a hundred times.
        <br/><br/>
        The mechanism: clutter made the chosen heading jump between scans, so commands flipped every 0.1 s and the tyres slipped. The simulated encoders count commanded rotation, so slip registered as progress, and a metre of fictional travel built up. The arrival check trusts odometry, so the robot declared victory.
        <br/><br/>
        The competing explanation was simpler: scraping the slalom posts. The harness can't detect collisions, so I reran the sweep with the posts removed. Same failures, same odometry error. The posts weren't the cause.
        <br/><br/>
        <em>Full analysis: <a href="https://github.com/JoelAbe/RoboDrive/blob/main/docs/fog.md" target="_blank">fog.md</a> · the fog model, with each formula derived in its comment: <a href="https://github.com/JoelAbe/RoboDrive/blob/main/Source/RoboSim/Public/RoboFog.h" target="_blank">RoboFog.h</a></em>
    </div>

    <h2>Fog: The Fix</h2>

    <div class="paragraph">
        The fix came straight from the diagnosis, one change per link in the chain:
        <ul>
            <li><strong>A clutter filter</strong> removes the cause. A return only counts if something was seen within 0.15 m of it in each of the previous two scans. A post is still there next scan; a fog echo almost never lands in the same place twice.</li>
            <li><strong>Smoothed commands</strong> remove the amplifier. Acceleration limits mean the wheels are never asked for more grip than they have, even when the brain changes its mind.</li>
        </ul>
        The filter's settings were chosen in a quick 2D model before any code was written: two scans let enough echoes through to fail in dense fog, three did not.
    </div>

    <div class="paragraph">
        <table style="width:100%; max-width:600px; border-collapse:collapse; font-size:0.9em;">
            <tr style="border-bottom:1px solid #555;">
                <th style="text-align:left; padding:6px;">Fog echoes on, 100 m – 10 m visibility</th>
                <th style="text-align:left; padding:6px;">Before</th>
                <th style="text-align:left; padding:6px;">After</th>
            </tr>
            <tr><td style="padding:6px;">Runs reaching the goal</td><td style="padding:6px;">3 of 18</td><td style="padding:6px;">18 of 18</td></tr>
            <tr><td style="padding:6px;">False arrivals</td><td style="padding:6px;">8</td><td style="padding:6px;">0</td></tr>
            <tr><td style="padding:6px;">Odometry error at the end</td><td style="padding:6px;">0.17 – 1.78 m</td><td style="padding:6px;">0.00 – 0.18 m</td></tr>
        </table>
    </div>

    <div class="paragraph center">
        <video controls muted loop playsinline width="100%" style="max-width:800px; border-radius:6px;">
            <source src="/img/projects/robodrive/fog-fix.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>

    <div class="paragraph">
        It has limits, and they're documented: at 5 m visibility the robot still gets through but slowly, and the filter assumes a still world, so anything moving faster than about 1.5 m/s would be filtered out too. The slalom in fog is now a regression test in CI.
        <br/><br/>
        The finding I'd stand behind is the shape, not the numbers: <strong>a sensor degradation produced a localisation failure, through a path that doesn't exist in the physics.</strong> That's the kind of coupling you only find by instrumenting and sweeping — and exactly the kind that's expensive to discover on real hardware.
    </div>

    <h2>ROS 2 Bridge</h2>

    <div class="paragraph">
        The bridge is just another client of the external API, so the simulation still knows nothing about ROS. It publishes <code>/clock</code>, <code>/scan</code>, <code>/odom</code>, <code>/imu</code> and the transforms between them, all in simulation time, and forwards <code>/cmd_vel</code> as drive commands. A command only counts while it's fresh, so a ROS node that stops publishing stops the robot.
        <br/><br/>
        Ground truth is published only on request, on its own topic, for RViz to draw beside odometry — the gap between the two is the drift. Nothing that drives the robot is allowed to read it, for the same reason as everywhere else in the project.
    </div>

    <div class="paragraph center">
        <img src="/img/projects/robodrive/ros2-rviz.jpg" alt="The operator view and RViz side by side: the robot driven by an external ROS node, with odometry, true pose and lidar returns shown in RViz" style="width:100%; max-width:800px; border-radius:6px;" />
    </div>

    <div class="paragraph">
        <em>Topics, setup and design: <a href="https://github.com/JoelAbe/RoboDrive/blob/main/docs/ros2.md" target="_blank">ros2.md</a> · <a href="https://github.com/JoelAbe/RoboDrive/blob/main/docs/decisions/0017-ros2-bridge-as-an-api-client.md" target="_blank">ADR 0017</a></em>
    </div>

    <h2>Built to Be Tested</h2>

    <div class="paragraph">
        <ul>
            <li><strong>Time is passed in.</strong> The arbiter, clock and brains take the current simulation time as a parameter, so over 100 unit tests run without an engine.</li>
            <li><strong>Scenarios are data</strong> — JSON files of start pose, obstacles, goal and time limit, judged against ground truth. A third party can run the whole suite from Python without owning Unreal (<a href="https://github.com/JoelAbe/RoboDrive/blob/main/Tools/Analysis/run_scenarios.py" target="_blank">run_scenarios.py</a>).</li>
            <li><strong>Headless on a fixed time step</strong>, about 12× real time, reproducible to within centimetres, on every push in CI.</li>
            <li><strong>Known failures fail when they start passing.</strong> When avoidance landed, the harness reported XPASS on the slalom and refused to pass until I removed the marker, so a capability can't arrive unnoticed.</li>
        </ul>
        Before publishing, I had the codebase reviewed. It found the IMU's accelerometer reading almost nothing, and a test runner that could report a crashed run as green. Both are fixed. The second is the one I'd point to: a test suite that can lie about a crash is exactly the failure this whole project is about.
    </div>

    <h2>Operator View</h2>

    <div class="paragraph">
        Live telemetry, estimated pose against ground truth, a top-down lidar view, Auto and Manual modes, click-to-set goals and runtime tuning. Someone who had never seen the project completed every task in it unaided.
        <br/><br/>
        Two control decisions I'd defend: the emergency stop is a <em>latch</em> that no newer command can override (a unit test named <code>StopDoesNotExpire</code> exists only to keep that true), and Manual is a <em>gate</em>, so letting go of the controls stops the robot instead of handing it back to the brain. <em>(<a href="https://github.com/JoelAbe/RoboDrive/blob/main/Source/RoboSim/Private/RoboDriveArbiter.cpp" target="_blank">RoboDriveArbiter.cpp</a>)</em>
        <br/><br/>
        The lidar view deliberately draws fog echoes as obstacles instead of hiding them, because to the brain that's what they are. A display that quietly cleaned them up would be lying about the system it's meant to explain.
    </div>

    <h2>What's Left</h2>

    <div class="paragraph">
        <ul>
            <li><strong>The ROS 2 bridge has only run on Windows</strong>, natively, and its tests aren't in CI. Most robotics teams run Ubuntu, where it hasn't been tried.</li>
            <li><strong>The ROS goal driver stops for obstacles rather than avoiding them.</strong> Avoidance over ROS would come from Nav2.</li>
            <li><strong>Wheels reach commanded speed instantly</strong> and the encoders count commanded rotation, so slip — and the fog odometry result — is likely overstated.</li>
            <li><strong>Scenarios don't detect collisions</strong>, and the API isn't lockstep.</li>
        </ul>
    </div>
    `, "#2d7d9a", "UE5"),

    new ProjectData("melody-match", "Melody Match: Galaxy Puzzle", "img/projects/melody-match/icon.png", `
    <div class="paragraph">
        <div class="notice">You can play the game here: <a href="https://play.google.com/store/apps/details?id=com.reactionmusic.musicmatch" target="_blank">Play Store Link</a></div>
    </div>

    <div class="paragraph" style="opacity:0.75; font-size:0.95em;">
        <strong>Engine:</strong> Unity &nbsp;·&nbsp; <strong>Clients:</strong> Reactional Music &amp; Amanotes &nbsp;·&nbsp; <strong>Platform:</strong> Mobile (Play Store, App Store)
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
    `, "#6c5ce7", "Unity"),

    new ProjectData("clocktergeist", "Clocktergeist", "img/projects/clocktergeist/icon.gif", `
    <div class="paragraph">
        <div class="notice">You can play the game here: <a href="https://veeyuh.itch.io/clocktergeist" target="_blank">veeyuh.itch.io/clocktergeist</a></div>
    </div>

    <div class="paragraph" style="opacity:0.75; font-size:0.95em;">
        <strong>Engine:</strong> Unreal Engine 5 &nbsp;·&nbsp; <strong>Type:</strong> Game Jam &nbsp;·&nbsp; <strong>Platform:</strong> PC
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
    `, "#5a3e8a", "UE5"),

    new ProjectData("automotive-hmi", "Automotive HMI", "img/projects/automotive-hmi/icon.gif", `
    <div class="paragraph">
        <div class="notice">Shown at the <strong>Shanghai Auto Show 2025</strong> as part of Unity China's in-vehicle HMI showcase. You can see it in action here: <a href="https://www.youtube.com/watch?v=mh5rTP0wz-8" target="_blank">Automotive HMI showcase video</a></div>
    </div>

    <div class="paragraph" style="opacity:0.75; font-size:0.95em;">
        <strong>Engines:</strong> Unreal Engine 5 &amp; Unity &nbsp;·&nbsp; <strong>Clients:</strong> Reactional Music &amp; Unity China &nbsp;·&nbsp; <strong>Type:</strong> Simulation / HMI Prototype
    </div>

    <h2>Context</h2>

    <div class="paragraph">
        Automotive HMI — the in-cabin interface a driver actually sees and touches — is increasingly built in real-time 3D engines rather than traditional UI frameworks. Reactional wanted to show their adaptive music system responding live to driving state, which meant someone had to build a driving simulation convincing enough to drive it.
        <br/><br/>
        I built that twice. The first prototype was in <strong>Unreal Engine 5</strong>, establishing what the demo needed to be. The second — larger, and the one shown at the <strong>Shanghai Auto Show 2025</strong> as part of Unity China's in-vehicle HMI showcase — was built in <strong>Unity</strong>, and served as both a working proof of concept and the reference implementation that Unity's own HMI team built from for the show floor scene.
    </div>

    <h2>The Unreal Prototype</h2>

    <div class="paragraph">
        The first version established the shape of the demo in Unreal Engine 5:
        <ul>
            <li>A drivable vehicle moving through a street environment with Reactional's music system integrated</li>
            <li>HMI instrumentation — speedometer, blinkers, and selectable drive modes</li>
            <li>A toggleable day/night cycle</li>
            <li>An obstacle system with driver-facing warning indicators</li>
        </ul>
        Building the driver-facing instrumentation first made it clear which pieces of vehicle state actually mattered as signals — which is what the Unity build was then designed around.
    </div>

    <h2>The Unity Build — What I Built</h2>

    <div class="paragraph">
        <strong>Vehicle simulation</strong>
        <ul>
            <li>A drivable vehicle controller with driving physics tuned for believable response — acceleration, braking and steering feel calibrated for a human at the wheel rather than for physical validation</li>
            <li>Exposed vehicle state (speed, steering, driving mode) as hooks that could be tied directly into Reactional's engine, letting driving behaviour trigger music features, stingers and parameter changes</li>
        </ul>
    </div>

    <div class="paragraph">
        <strong>Procedural road environment</strong>
        <ul>
            <li>Built road networks using Unity's Spline package, so routes could be authored and reshaped quickly rather than modelled by hand</li>
            <li>Designed and assembled the surrounding test world the vehicle drives through</li>
            <li>Day/night cycle, toggleable at runtime, to demonstrate the HMI under different lighting conditions</li>
        </ul>
    </div>

    <div class="paragraph">
        <strong>Music-reactive systems &amp; instrumentation</strong>
        <ul>
            <li>Wired simulated driving state into Reactional's adaptive music engine so the score responded to how the vehicle was being driven</li>
            <li>Built the UI instrumentation layer used to expose, test and tune Reactional parameters live in-scene</li>
        </ul>
    </div>

    <h2>Handoff</h2>

    <div class="paragraph">
        The prototype's real deliverable was not the demo itself but what Unity's HMI team could take from it. I wrote and advised on the scripts and trigger systems they subsequently used to reproduce the Reactional integration inside their own show scene — which meant building for legibility and reuse by another team rather than for a single self-contained build.
        <br/><br/>
        Working across a client (Reactional), a platform holder (Unity China) and a fixed external deadline meant scope discipline mattered more than feature count: the demo needed to be reliable and readable on a show floor, not exhaustive.
    </div>

    <h2>Why This Project Matters</h2>

    <div class="paragraph">
        This is the work of mine that sits closest to simulation engineering rather than game development. It required translating real-world vehicle behaviour into a real-time simulation, deciding deliberately where fidelity was worth paying for and where perceptual plausibility was enough, and exposing simulated state cleanly enough for entirely separate systems — and a separate team — to consume it.
        <br/><br/>
        Building it in both Unreal Engine 5 and Unity also meant deciding each time what was engine-agnostic — the vehicle model, the state signals, the interface into Reactional — and what had to be rebuilt against the engine in front of me.
        <br/><br/>
        It also reflects how I prefer to work: build the thing that proves the idea, then make it legible enough that someone else can carry it further.
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/mh5rTP0wz-8" frameborder="0" allowfullscreen></iframe>
    </div>
    `, "#c0392b", "Unity · UE5"),

    new ProjectData("reactional-music", "Reactional Games", "img/projects/reactional/icon.png", `
    <div class="paragraph">
        <div class="notice">You can visit them here: <a href="https://reactionalmusic.com/" target="_blank">reactionalmusic.com/</a></div>
    </div>

    <div class="paragraph" style="opacity:0.75; font-size:0.95em;">
        <strong>Engines:</strong> Unity &amp; Unreal Engine 5 &nbsp;·&nbsp; <strong>Client:</strong> Reactional Music &nbsp;·&nbsp; <strong>Platform:</strong> PC, Mobile, VR
    </div>

    <h2>Role Overview</h2>

    <div class="paragraph">
        <strong>Objective</strong>
        <br/><br/>
        I was outsourced as a programmer to Reactional Music for almost 2 years, working closely with their core game development team as a co-developer across Unity and Unreal Engine 5. My work ranged from gameplay prototypes and demo experiences to editor tooling, backend integration, and mobile build support.
        <ul>
            <li>Built multiple Unity &amp; UE5 demos to match client visions under tight iteration cycles</li>
            <li>Integrated Reactional backend endpoints (search, filters, playlists, telemetry) into demo frontends</li>
            <li>Developed UI Toolkit-based editor tools + in-game UI for data-driven music experiences</li>
            <li>Wrote parsing + deserialization utilities to stabilize backend-frontend workflows</li>
            <li>Debugged Android build issues involving Reactional DLLs and platform-specific edge cases</li>
        </ul>
    </div>

    <h2>SDK Contribution</h2>

    <div class="paragraph">
        While the majority of my Reactional engagement was on demo and integration projects, I also contributed directly to the Reactional cross-platform SDK — the platform that client studios integrate into their own games and applications.
        <br/><br/>
        Contributions included:
        <ul>
            <li>Public API additions across the SDK's developer-facing surfaces</li>
            <li>The Reactional Unity Plugin startup wizard (built with UI Toolkit), which ships packaged with the SDK and guides new developers through initial integration</li>
            <li>Documentation writing and review for the SDK's external integrators — reducing common onboarding friction points observed with new users</li>
            <li>Code polish and utility refactoring across shipped SDK components</li>
        </ul>
        Contribution was weighted toward developer experience — API, tooling, and documentation — rather than core engine work.
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
    `, "#4f5fff", "Unity · UE5"),
];
