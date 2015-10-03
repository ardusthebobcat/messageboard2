import Ember from 'ember';

export default Ember.Component.extend({
  addQuestion: false,

  actions: {
    showAddQuestion: function() {
      this.set('addQuestion', true);
    },
    save: function() {
      var params={
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes'),
        answers: []
      };
      this.set('addQuestion', false);
      this.sendAction('save', params);
    },
  }
});
