import Ember from 'ember';

export default Ember.Route.extend({
  model(question) {
    return this.store.find('question', question.question_id);
  },

  actions: {
    updateQuestion: function(question, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('question', question);
    },
    deleteQuestion: function(question) {
      question.destroyRecord('question', question);
      this.transitionTo('index');
    },
    addAnswer: function(question, params) {
      debugger;
      var newAnswer = this.store.createRecord('answer', params)
      var baseQuestion = question;
      baseQuestion.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', question)
    }

  }
});
