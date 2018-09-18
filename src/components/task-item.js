Vue.component("TaskItem", {
  template: `
    <li
      class="task-item"
      :class="{ done: complete }"
    >
      <p>{{ task.description }}</p>
      <input type="checkbox" v-model="complete">
    </li>
  `,
  props: ["task"],
  computed: {
    complete: {
      set(done) {
        this.$emit("complete", this.task, done);
        // we foce update to keep checkbox state synced
        // in case if task.done was not toggled by parent component
        this.$forceUpdate();
      },
      get() {
        return this.task.done;
      }
    }
  }
});
