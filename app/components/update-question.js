import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,

  actions: {
    showUpdateQuestionForm: function() {
      this.set('updateQuestionForm', true);
    },

    updateQuestion: function(question) {
      var params = {
        content: this.get('content'),
        author: this.get('author')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('updateQuestion', question, params)
    },

    deleteQuestion: function(question) {
      this.sendAction('deleteQuestion', question);
    }

  }
});
