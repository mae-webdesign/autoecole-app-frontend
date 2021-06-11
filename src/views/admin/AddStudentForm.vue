<template>
  <div class="flex flex-wrap  justify-center">
    <div class="w-full lg:w-9/12 px-4">
      <CardAddStudent />
    </div>
  </div>
</template>
<script>
import CardAddStudent from "@/components/Cards/CardAddStudent.vue";

export default {
  components: {
    CardAddStudent,
  },
};
</script>
