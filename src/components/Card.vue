<script setup>
  import Button from "./Button.vue"
  const texts = [
    "GitHub", "Frontend Mentor", "Linkedin", "Twitter", "Instagram"
  ]
</script>

<template>
  <div 
    class="max-w-sm w-2/5 bg-darkGrey mx-auto text-center text-white p-5 m-2 rounded-lg"
  >
    <div class="mx-auto w-20 mb-5">
      <img
        class="rounded-full m-2 bg-cover"
        src="../assets/images/avatar-jessica.jpeg" 
        alt="picture profile"
        width="200"
        height="200"
      />
    </div>
    <h1 class="text-xl font-interBold">Jessica Randall</h1>
    <h2 class="text-green text-xs mb-5 font-interSemiBold">Londonm United Kigdon</h2>
    <p class="text-xs mb-5 font-inter">"Front-end developer and avid reader."</p>
    <Button v-for="text in texts" :key="text">
      {{ text }}
    </Button>
  </div>
</template>