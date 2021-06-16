<template>
  <div class="flex flex-wrap  justify-center">
    <div class="w-full lg:w-9/12 px-4">
      <CardAddSession />
    </div>
  </div>
</template>
<script>
import CardAddSession from "@/components/Cards/CardAddSession.vue";

export default {
  components: {
    CardAddSession,
  },
};
</script>
