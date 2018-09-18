new Vue({
  el: "#app",
  template: `
    <div>
      <ul class="task-list">
        <TaskItem
          v-for="(task, i) in tasks"
          :key="i"
          :task="task"
          @complete="complete"
        />
      </ul>
      <button @click="completeFirstTask">Complete first task</button>
    </div>
  `,
  data() {
    return {
      tasks: [
        { description: "Get milk", done: false },
        { description: "Barber shop", done: true },
        { description: "Fix sleep cycle", done: false }
      ]
    };
  },
  methods: {
    complete(item, done) {
      item.done = done;
    },
    completeFirstTask() {
      this.tasks[0].done = true;
    }
  }
});
