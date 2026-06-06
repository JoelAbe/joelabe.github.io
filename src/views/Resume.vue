<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Joel Abraham Orethu</strong>, a gameplay engineer based in Abu Dhabi, UAE.
      <br />After graduating in Computer Science from an Engineering college in 2023, I've been working at <a href="https://arbadevelopmentstudios.com/" target="_blank">ArBa Development Studios</a> for 3 years as a Gameplay Engineer, shipping titles across PC (Steam), mobile (Play Store / App Store) and VR.
      <br />
	  <br />I love designing, creating and programming modular mechanics and putting them together to form brilliant projects — most days that means digging into Unity (C#) or Unreal Engine 5 (C++ / Blueprints).
      <br />I enjoy working closely with design, audio and art teams, and occasionally taking the lead programmer seat on project mechanics and game jams.
      <br />
      <br />Besides development and video games, I'm passionate about modding, Lego and buildable sets, and physical activities like weight lifting, walking and basketball.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="/d/Joel_Abraham-Unity-Resume.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a>
        <div style="clear:both"></div>
      </div>
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
          <li><strong><a href="https://store.steampowered.com/app/3553150/The_Cascadier/" target="_blank">Cascadier</a></strong> (Enchanted Arcade, Steam) — Roguelike coin pusher. Re-architected ability/trinket systems using ScriptableObjects and a multi-pathway tier structure, designed the core "First Coin" progression mechanic, and led physics & performance work that took the in-editor framerate from ~15 to a stable 60.</li>
          <li><strong>Bad Company: Can't Get Enough</strong> (Reactional Games, App Store) — Match-3 mobile game. Led two major gameplay reworks, built mission/achievement systems, difficulty scaling and JSON save/load, and integrated Firebase, AppsFlyer and IronSource for monetization & analytics.</li>
          <li><strong>Reactional SDK & Demos</strong> — Embedded with the Reactional Games team for ~2 years across 10+ projects: built the Reactional Unity Plugin startup wizard with UI Toolkit, ported the B2C storefront and DiscoBooth demos from Unity to UE5 (UMG) with a custom .NET payment-simulation server, and prototyped an automotive HMI demo for Unity China featured at the Shanghai Auto Show 2025.</li>
          <li><strong>Reusable gameplay systems</strong> — Modular AI (behaviors, cone-of-vision detection, cover-to-cover logic), player controllers with movement/combat/animation sync, and editor tooling.</li>
        </ul>
      </div>

      <div class="tech-stack">Unity, Unreal Engine 5, C#, C++, Blueprints, UI Toolkit, UMG, DOTween, Firebase, AppsFlyer, IronSource, Git, Perforce</div>

      <h2>Game jams</h2>

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
        <div>UI Toolkit</div>
        <div>Unreal UMG</div>
        <div>DOTween</div>
      </div>

      <div class="skill-set">
        <h3>Systems</h3>
        <div>Gameplay architecture</div>
        <div>Player controllers</div>
        <div>AI controllers</div>
        <div>Editor tooling</div>
        <div>UI Development</div>
        <div>Performance optimization</div>
      </div>

      <div class="skill-set">
        <h3>Tools &amp; Backend</h3>
        <div>Git</div>
        <div>Perforce</div>
        <div>Plastic SCM</div>
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

.download-link {
  float:left;
  margin-right: 50px;
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
