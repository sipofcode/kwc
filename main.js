import Vue from 'vue/dist/vue.js';
import 'bulma/css/bulma.css';
import 'bulma-floating-button/dist/css/bulma-floating-button.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
var cloneDeep = require('lodash.clonedeep');

const vm = new Vue({
    el: '#app',
    data() {
        return {
            // load db from other place!
            db: [
              { id: 1, name: 'DEADLIFT' },
              { id: 2, name: 'GOAT BAG SWING / GOAT BAGGER' },
              { id: 3, name: 'GOOD MORNING' },
              { id: 4, name: 'LOW WINDMILL' },
              { id: 5, name: 'ASYMMETRIC DEADLIFT' },
              { id: 6, name: 'ONE-LEGGED DEADLIFT' },
              { id: 7, name: 'HIKE PASS' },
              { id: 8, name: 'HIKE PASS + SWING' },
              { id: 9, name: 'SWING' },
              { id: 10, name: 'ONE HAND SWING' },
              { id: 11, name: 'INVERTED ONE HAND SWING' },
              { id: 12, name: 'LAZY SWING' },
              { id: 13, name: 'CLEAN' },
              { id: 14, name: 'ELEVATOR' },
              { id: 15, name: 'SNATCH' },
              { id: 16, name: 'FARMER\'S WALK' },
              { id: 17, name: 'WAITRESS' },
              { id: 18, name: 'RACK' },
              { id: 19, name: 'BRIEFCASE' },
              { id: 20, name: 'GOBLET WALK' },
              { id: 21, name: 'BOTTOM WALK' },
              { id: 22, name: 'THE BOMB' },
              { id: 23, name: 'BAGUA WALK' },
              { id: 24, name: 'HALO' },
              { id: 25, name: 'SPORT HALO' },
              { id: 26, name: 'ROTATIONAL PATTERN #1' },
              { id: 27, name: 'ROTATIONAL PATTERN #2' },
              { id: 28, name: 'ROTATIONAL PATTERN #3' },
              { id: 29, name: 'AROUND THE WORLD' },
              { id: 30, name: 'CORE HALO' },
              { id: 31, name: 'EIGHT' },
              { id: 32, name: 'BOTTOM UP' },
              { id: 33, name: 'PRESS BOTTOM UP' },
              { id: 34, name: 'FLOOR PRESS BOTTOM UP' },
              { id: 35, name: 'TGU BOTTOM UP' },
              { id: 36, name: 'BIRD DOG' },
              { id: 37, name: 'SQUAT BOTTOM UP' },
              { id: 38, name: 'TGU' },
              { id: 39, name: 'GOBLET SQUAT' },
              { id: 40, name: 'GOBLET VARIANT' },
              { id: 41, name: 'SUMO AGAINST THE WALL' },
              { id: 42, name: 'OVERHEAD LOUNGES' },
              { id: 43, name: 'SQUAT OVERHEAD' },
              { id: 44, name: 'RACK SQUAT' },
              { id: 45, name: 'THRUSTER' },
              { id: 46, name: 'COSSACKS' },
              { id: 47, name: 'BUMP' },
              { id: 48, name: 'PUSH PRESS' },
              { id: 49, name: 'JERK' },
              { id: 50, name: 'ROW' },
              { id: 51, name: 'RENEGADE ROW' },
              { id: 52, name: 'DOUBLE ROW' },
              { id: 53, name: 'HIGH PULL' },
              { id: 54, name: '30° PRESS' },
              { id: 55, name: 'STRICT PRESS' },
              { id: 56, name: 'SIDE PRESS' },
              { id: 57, name: 'BACK UP PRESS' },
              { id: 58, name: 'ECCENTRIC PRESS' },
              { id: 59, name: 'SOT PRESS' },
              { id: 60, name: 'UNEVEN PUSH UP' },
              { id: 61, name: 'SEESAW' },
              { id: 62, name: 'ARM BAR' },
              { id: 63, name: 'LATERAL PRESS' },
              { id: 64, name: 'DEEP WINDMILL' },
              { id: 65, name: 'HIGH WINDMILL' },
              { id: 66, name: 'WINDMILL' },
              { id: 67, name: 'CORE RACK' },
              { id: 68, name: 'PELVIS RACK' },
              { id: 69, name: 'COMPENSATED RACK' },
              { id: 70, name: 'REST RACK' },
              { id: 71, name: 'SIDE RACK' },
              { id: 72, name: 'BACK RACK' },
              { id: 73, name: 'FRONT SWING' },
              { id: 74, name: 'BENT PRESS' },
              { id: 75, name: 'TWO HANDS ANYHOW' },
              { id: 76, name: 'CLEAN AND JERK' },
            ],
            exercise_types: [ { id: 1, name: "secs" }, { id: 2, name: "reps" } ],
            set_types: [
              { id: 2, name: "reps" },
              { id: 1, name: "secs" },
              { id: 3, name: "EMOM"},
              { id: 4, name: "stairs up"},
              { id: 5, name: "stairs down"},
              { id: 6, name: "pyramid"}
            ],
            workout: {
              sets: []
            },
            workouts: [
              {
                title: 'Mini rutina para combatir el sedentarismo. Guille',
                details: '1-2:5-2-24*8-2-2*8-2-39',
                credits: 'https://www.youtube.com/watch?v=0zc373FkIUM'
              },
              {
                title: 'Simple and Sinister. Pavel',
                details: '10-2:10-2-9|10-2:1-2-38',
                credits: 'https://www.strongfirst.com/achieve/sinister'
              },
              {
                title: 'Chain de empujar, jalar y dominancia de rodilla. Jero',
                details: '40-1:1-2-13*1-2-55*1-2-42',
                credits: 'https://www.youtube.com/watch?v=SPFne2525Zw'
              }
            ],
            own: [],
            modals: {
              load: false,
              support: false,
              credits: false
            }
        }
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
      }
    },    
    mounted: function() {
      this.loadWorkout(window.location.search.substr(1).split("=")[1]);
      var els = JSON.parse(localStorage.getItem('workouts'));
      if (els != null)
        this.own = this.own.concat(els);
      if (localStorage.getItem('dismissed') == "true") {
        var $notification = document.querySelectorAll('.notification')[0]
        $notification.parentNode.removeChild($notification);
      }
    },
    watch: {
      workout: {
         handler(val){
           var url = window.location.href.split('?')[0];
           history.replaceState({}, null, url + "?w=" + this.shareableWorkout);
         },
         deep: true
      }
    },
    computed: {
      shareableURL: function() {
        if (this.workout.sets.length > 0) {
          return encodeURI("¡Hey! Take a look at this kettlebells workout!\n" + window.location.href);
        } else {
          return encodeURI("¡Hey! Take a look at this tool to build kettlebells workouts!\n" + window.location.href);
        }
      },
      shareableWorkout: function () {
        function ex(ex) {
          return ex.times + "-" + ex.type_id + "-" + ex.ex.id;
        }
        function set(set) {
          return set.times + "-" + set.type_id + ":" +
          set.exercises.map(function(e){
            return ex(e);
          }).join("*");
        }
        return this.workout.sets.map(function(s) {
          return set(s);
        }).join("|");
      },
      sortedExercises: function() {
        function compare(a, b) {
          if (a.name < b.name)
            return -1;
          if (a.name > b.name)
            return 1;
          return 0;
        }

        return this.db.sort(compare);
      }
    },
    methods: {
      openModal(name) {
        this.modals[name] = true;
      },
      closeModal(name) {
        this.modals[name] = false;
      },
      saveWorkout() {
        var id = Math.max(...this.own.map(elt => elt.id));
        if (id < 0) id = 0;
        var title = prompt("Name the workout", "My Workout");
        this.own.push({
          id: id + 1,
          title: title,
          details: this.shareableWorkout
        });
        localStorage.setItem('workouts', JSON.stringify(this.own));
      },
      removeWorkout(id) {
        var removeIndex = this.own.map(item => item.id).indexOf(id);
        this.own.splice(removeIndex, 1);
        localStorage.setItem('workouts', JSON.stringify(this.own));
        this.closeModal('load');
      },
      loadWorkout(shareableWorkout) {
        if (shareableWorkout == undefined || shareableWorkout.length < 5) return;
        this.workout = { sets: [] };
        var sets = shareableWorkout.split("|");
        var that = this;
        sets.forEach(function(set) {
          var data = set.split(":");
          var set_data = data[0].split("-");
          var exercises_data = data[1].split("*");
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
              ex: that.db.find(function(e) {
                return e.id == exerciseData[2];
              })
            });
          });
          that.workout.sets.push(_set);
        });
        this.closeModal('load');
      },
      addSet() {
          this.workout.sets.push({
              times: 8,
              type_id: 2,
              exercises: []
          });
      },
      addExercise(set) {
          set.exercises.push({
              times: 10,
              type_id: 2,
              ex: this.db[0]
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

document.addEventListener('DOMContentLoaded', () => {
  (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
    var $notification = $delete.parentNode;

    $delete.addEventListener('click', () => {
      $notification.parentNode.removeChild($notification);
      localStorage.setItem('dismissed', true);
    });
  });

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});
