<template>
  <div class="flex flex-wrap  justify-center">
    <div class="w-full lg:w-9/12 px-4">
      <VueCal />
    </div>
  </div>
</template>
<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'



export default {
  components: {
    VueCal,
  },
};
</script>
