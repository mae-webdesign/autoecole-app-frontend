<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <CardTableStudents />
    </div>
  </div>
</template>
<script>
import CardTableStudents from "@/components/Cards/CardTableStudents.vue";

export default {
  components: {
    CardTableStudents,
  },
};
</script>
