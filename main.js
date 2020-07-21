import Vue from 'vue/dist/vue.js';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/js/all.js';
var cloneDeep = require('lodash.clonedeep');

const vm = new Vue({
    el: '#app',
    data() {
        return {
            // load db from other place!
            db: [
              { id: 1, name: "rest" },
              { id: 2, name: "swing both hands" },
              { id: 3, name: "snatch " },
              { id: 4, name: "press estricto" },
            ],
            exercise_types: [ { id: 1, name: "secs" }, { id: 2, name: "reps" } ],
            set_types: [
                { id: 1, name: "secs" },
                { id: 2, name: "reps" },
                { id: 3, name: "emom"},
                { id: 4, name: "up ladder"},
                { id: 5, name: "down ladder"},
                { id: 6, name: "pyramid"}
            ],
            workout: {
                sets: []
            }
        }
    },
    computed: {
      shareableWorkout: function () {
        function ex(ex) {
          return ex.times + "-" + ex.type_id + "-" + ex.exercise_id;
        }
        function set(set) {
          return set.times + "-" + set.type_id + ":" +
          set.exercises.map(function(e){
            return ex(e);
          }).join("+");
        }
        return this.workout.sets.map(function(s) {
          return set(s);
        }).join("|");
      }
    },
    methods: {
      // 1-2:10-2-2+10-2-3|1-2:10-2-2+10-2-3
      loadWorkout(shareableWorkout) {
        var sets = shareableWorkout.split("|");
        var that = this;
        sets.forEach(function(set) {
          var data = set.split(":");
          var set_data = data[0].split("-");
          var exercises_data = data[1].split("+");
          var _set = {
            times: set_data[0],
            type_id: set_data[1],
            exercises: []
          };
          exercises_data.forEach(function(exercise){
            var exerciseData = exercise.split("-");
            _set.exercises.push({
              times: exerciseData[0],
              type_id: exerciseData[1],
              exercise_id: exerciseData[2],
            });
          });
          that.workout.sets.push(_set);
        });
      },
      addSet() {
          this.workout.sets.push({
              times: 1,
              type_id: 2,
              exercises: []
          });
      },
      addExercise(set) {
          set.exercises.push({
              times: 10,
              type_id: 2,
              exercise_id: 2
          });
      },
      duplicateSet(set) {
          this.workout.sets.push(cloneDeep(set));
      },
      removeExercise(set, exercise) {
          const index = set.exercises.indexOf(exercise);
          if (index > -1) {
              set.exercises.splice(index, 1);
          }
      },
      removeSet(set) {
          const index = this.workout.sets.indexOf(set);
          if (index > -1) {
              this.workout.sets.splice(index, 1);
          }
      }
    }
});
