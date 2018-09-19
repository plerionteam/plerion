/* global Vue, axios */

Vue.component('plerion-menu', {
  data: function () {
    return {
      spaces: null
    };
  },
  created: function () {
    const self = this;
    axios.get('/app/spaces')
      .then(function (response) {
        self.spaces = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  template: `
    <ul id="spaces">
      <li v-for="space in spaces">
        <a :href="space.route">{{ space.name }}</a>
      </li>
    </ul>
  `
});