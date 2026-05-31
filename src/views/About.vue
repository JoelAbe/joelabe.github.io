<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Joel Abraham Orethu</strong>, a gameplay engineer with 3 years of experience working in <strong>Unity (C#)</strong> and <strong>Unreal Engine 5 (C++ / Blueprints)</strong>.
        I love designing, creating and programming modular mechanics and putting them together to form brilliant projects.
      </div>

      <div style="margin-top: 20px;">
        I've worked on PC, mobile, and VR projects, building combat, AI, player controllers, UI, and the backend and tooling around them.
      </div>

      <div style="margin-top: 20px;">
        I'm currently working as an Gameplay Engineer at <a href="https://arbadevelopmentstudios.com/">Arba Development Studios</a>. You can reach me at <a href="mailto:joelorethu@gmail.com">joelorethu@gmail.com</a>.
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