<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Joel Abraham Orethu</strong>, and I build real-time interactive systems — 3 years of it, across <strong>Unity (C#)</strong> and <strong>Unreal Engine 5 (C++ / Blueprints)</strong>.
        I love designing, creating and programming modular mechanics and putting them together to form brilliant projects.
      </div>

      <div style="margin-top: 20px;">
        Most of that has been games, on PC, mobile and VR — combat, AI, player controllers, UI, physics and performance work, and the backend and tooling around them. Some of it hasn't: automotive HMI prototypes with simulated vehicle physics, VR environments, and interactive showcase builds for clients and trade shows.
      </div>

      <div style="margin-top: 20px;">
        What connects them is the same problem — making something behave believably in real time, then building the systems around it so other people can extend it without me in the room.
      </div>

      <div style="margin-top: 20px;">
        I'm currently a Gameplay Engineer at <a href="https://arbadevelopmentstudios.com/">Arba Development Studios</a>. You can reach me at <a href="mailto:joelorethu@gmail.com">joelorethu@gmail.com</a>.
      </div>
    </div>

    <div class="photo">
      <img src="/img/avatar.png" alt="Avatar of John" />
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

.photo img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>