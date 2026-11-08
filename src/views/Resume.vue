<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Joel Abraham Orethu</strong>, a gameplay and real-time 3D engineer based in Abu Dhabi, UAE.
      <br />After graduating in Computer Science from an Engineering college in 2023, I've been working at <a href="https://arbadevelopmentstudios.com/" target="_blank">ArBa Development Studios</a> for 3 years as a Gameplay Engineer, shipping titles across PC (Steam), mobile (Play Store / App Store) and VR — alongside simulation and HMI prototypes for clients outside games.
      <br />
	  <br />I love designing, creating and programming modular mechanics and putting them together to form brilliant projects — most days that means digging into Unity (C#) or Unreal Engine 5 (C++ / Blueprints), and I work across both rather than in one.
      <br />I enjoy working closely with design, audio and art teams, and occasionally taking the lead programmer seat on project mechanics and game jams.
      <br />
      <br />Besides development and video games, I'm passionate about modding, Lego and buildable sets, and physical activities like weight lifting, walking and basketball.
    </div>
    <div class="photo">
      <img src="/img/avatar.png" alt="Photo of Joel" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Gameplay Engineer · ArBa Development Studios</h3>
      <h4>July 2023 - Present · Remote</h4>

      <div>
        Designing and shipping gameplay systems for client studios across Unity (C#) and Unreal Engine 5 (C++ / Blueprints), on PC, mobile and VR.
      </div>
      <div style="margin-top: 10px;">
        Selected work:
        <ul>
          <li><strong><a href="https://store.steampowered.com/app/3553150/The_Cascadier/" target="_blank">Cascadier</a></strong> (Enchanted Arcade, Steam &amp; Steam Deck) — Roguelike coin pusher. Joined four months before launch: re-architected the ability/trinket systems with ScriptableObjects, designed the core "First Coin" progression mechanic, and led physics &amp; performance work that took the in-editor framerate from ~15 to a stable 60. Returned for Early Access to build Perf Lab, an automated performance test that runs on PCs and the Steam Deck, upgrade to Unity 6.3 with HDRP, and add full controller and Steam Deck support, a rebuilt options menu with rebinding and accessibility settings, and a reworked shop and save flow.</li>
          <li><strong>Bad Company: Can't Get Enough</strong> (Reactional Games, App Store &amp; Google Play) — Match-3 mobile game. Led two major gameplay reworks aimed at retention, built the live feature layer (missions, achievements, difficulty scaling, in-game economy, Firebase Remote Config) and JSON save/load, and integrated Firebase, AppsFlyer and IronSource for monetization &amp; analytics.</li>
          <li><strong>Reactional SDK & Demos</strong> — Embedded with the Reactional Games team for ~2 years across 10+ projects: built the Reactional Unity Plugin startup wizard with UI Toolkit, ported the B2C storefront and DiscoBooth demos from Unity to UE5 (UMG) with a custom .NET payment-simulation server, and built automotive HMI driving prototypes in both UE5 and Unity — the Unity build featured at the Shanghai Auto Show 2025 as part of Unity China's in-vehicle HMI showcase.</li>
          <li><strong>Unreal Engine 5 prototype</strong> — 2.5D action side-scroller: enemies with wind-up and cooldown attack patterns, a state-based boss fight, dash-behind combat, animation blueprints, Niagara effects and a short level sequence.</li>
          <li><strong>Reusable gameplay systems</strong> — Modular AI (behaviors, cone-of-vision detection, cover-to-cover logic), player controllers with movement/combat/animation sync, and editor tooling.</li>
        </ul>
      </div>

      <div class="tech-stack">Unity (HDRP), Unreal Engine 5, C#, C++, Blueprints, UI Toolkit, UMG, ImGui, DOTween, FMOD, Firebase, AppsFlyer, IronSource, Git, Perforce</div>

      <h2>Personal projects &amp; game jams</h2>

      <h3><a href="https://github.com/JoelAbe/RoboDrive" target="_blank">RoboDrive</a> · Unreal Engine 5, C++</h3>
      <div>Solo robotics simulation: differential-drive vehicle physics, sensor models with configurable noise, a documented TCP/JSON API and a ROS 2 bridge. Over 100 unit tests, a scenario regression suite in CI, and a measured investigation of how fog defeats lidar obstacle avoidance, then the fix. <a href="/#/projects/robodrive">Read the write-up</a>.</div>

      <h3><a href="https://veeyuh.itch.io/clocktergeist" target="_blank">Clocktergeist</a> · Unreal Engine 5</h3>
      <div>Lead programmer on a month-long boss-rush jam. Built three multi-phase boss fights across three levels using State Trees.</div>

      <h3><a href="https://veeyuh.itch.io/glyphweaver" target="_blank">Glyphweaver</a> · Unreal Engine 5</h3>
      <div>3D action-adventure with puzzle elements. Handled puzzle logic, world traversal, and inventory/spell management in Blueprints and C++.</div>

      <h3><a href="https://joelabe.itch.io/false-awakening" target="_blank">False Awakening</a> · Unity</h3>
      <div>Top 2-7 finish in GDN Jam (100+ entries). Lead programmer — built the 3Cs, gravity mechanics, enemy AI, dialogue and narrative logic.</div>

      <h3><a href="https://joelabe.itch.io/poly-run" target="_blank">Poly Run</a> · Unity</h3>
      <div>3D open-world arcade prototype. AI patrol/chase states, 3Cs, procedural pickups, minimap and animation controllers.</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Languages</h3>
        <div>C#</div>
        <div>C++</div>
        <div>Python</div>
      </div>

      <div class="skill-set">
        <h3>Gamedev</h3>
        <div>Unity</div>
        <div>Unreal Engine 5</div>
        <div>HDRP</div>
        <div>UI Toolkit</div>
        <div>Unreal UMG</div>
        <div>DOTween</div>
        <div>FMOD</div>
      </div>

      <div class="skill-set">
        <h3>Systems</h3>
        <div>Gameplay architecture</div>
        <div>Player controllers</div>
        <div>AI controllers</div>
        <div>Editor tooling</div>
        <div>UI Development</div>
        <div>Performance optimization</div>
        <div>Automated performance testing</div>
        <div>Controller &amp; platform support</div>
        <div>Real-time physics &amp; simulation</div>
        <div>Middleware / SDK integration</div>
      </div>

      <div class="skill-set">
        <h3>Tools &amp; Backend</h3>
        <div>Git</div>
        <div>Perforce</div>
        <div>Plastic SCM</div>
        <div>CI (GitHub Actions)</div>
        <div>ROS 2</div>
        <div>Firebase</div>
        <div>AppsFlyer / IronSource</div>
        <div>REST APIs / JSON</div>
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Amal Jyothi College of Engineering — 2019-2023</h3>
      <h4>Bachelor of Technology, Computer Science</h4>
      <div>
        <ul>
          <li>IEEE Publication: <a href="https://ieeexplore.ieee.org/abstract/document/10140551" target="_blank">"Multipurpose Immersive Virtual Reality Environment"</a> — exploring VR potential in entertainment and educational contexts.</li>
          <li>Conducted a Unity game development workshop for junior students in association with ACM.</li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ResumeView",
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}


.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
  border-radius: 50%;
  object-fit: cover;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px;
  }
}
</style>
