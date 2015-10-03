import Ember from 'ember';

export default Ember.Component.extend({
  additional: false,

  actions: {
    addAnswer: function(question, params){
      this.sendAction('addAnswer', question, params);
    },
  }

});
