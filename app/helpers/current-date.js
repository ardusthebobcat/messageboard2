import Ember from 'ember';

export function currentDate() {
  return moment().format('HH:mm');
}

export default Ember.Helper.helper(currentDate);
