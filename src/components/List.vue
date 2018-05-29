<template>
  <div>
    <div v-for="user in users" :key="user.id">
      <label><input type="checkbox" :checked="isChecked(user.id)" @change="handleItemChange($event)" :value="user.id">{{ user.name }}</label>
    </div>
    <div><label><input type="checkbox" @change="handleChange($event)">check all</label></div>
    {{ selected }}
  </div>
</template>


<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      checkall: false,
      selected: [],
      users: [
        { id: 1, name: "user 1" },
        { id: 2, name: "user 2" },
        { id: 3, name: "user 3" }
      ]
    };
  },

  computed: {},
  methods: {
    isChecked(val) {
      return this.selected.includes(val);
    },
    handleChange(e) {
      this.checkall = e.target.checked;
      this.selected = [];
      if (this.checkall) {
        this.users.map(u => this.selected.push(u.id));
      }
    },
    handleItemChange(e) {
      let checked = e.target.checked;
      let val = ~~e.target.value;

      if (checked) {
        if (!this.selected.includes(val)) {
          this.selected.push(val);
        }
      } else {
        let idx = this.selected.indexOf(val);
        this.selected.splice(idx, 1);
      }
    }
  }
};
</script>
