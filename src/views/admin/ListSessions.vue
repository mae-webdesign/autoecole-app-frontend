<template>
  <div class="flex flex-wrap justify-center">
    <div class="w-full lg:w-9/12 px-4">
      <FullCalendar :events="events" :options="options" />
    </div>
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      options: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
        initialDate: Date.now(),
        headerToolbar: {
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        },
        editable: true,
        businessHours: {
          // days of week. an array of zero-based day of week integers (0=Sunday)
          daysOfWeek: [1, 2, 3, 4, 5, 6], // Monday - Thursday

          startTime: "6:00", // a start time (10am in this example)
          endTime: "18:00", // an end time (6pm in this example)
        },
        nowIndicator: true,
      },
      events: [
        {
          id: 1,
          title: "All Day Event",
          start: "2019-01-01",
        },
      ],
    };
  },
};
</script>