import Ember from 'ember';

export default Ember.Component.extend({
  addAnswerForm: false,

  actions: {
    showAddAnswerForm: function() {
      this.set('addAnswerForm', true);
    },
    addAnswer: function(question) {
      var params={
        content: this.get('content'),
        author: this.get('author'),
        question: question.id,
        time: Date.now()
      };
      this.set('addAnswerForm', false);
      this.sendAction('addAnswer', question, params);
    }
  }
});
