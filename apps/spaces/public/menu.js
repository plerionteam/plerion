/* global Vue, axios */

new Vue({
  el: '#spaces',
  data: {
    messages: [{
      message: 'Hello Vue!'
    },
    {
      message: 'Hello Vue!'
    }],
    spaces: null
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
});