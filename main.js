import Vue from 'vue/dist/vue.js';

const vm = new Vue({
    el: '#app',
    data() {
        return {
            // load db from other place!
            db: ["rest", "swing", "snatch", "press"],
            exercise_types: [ { id: 1, name: "secs" }, { id: 2, name: "reps" } ],
            set_types: [
                { id: 1, name: "secs" },
                { id: 2, name: "reps" },
                { id: 3, name: "emom"},
                { id: 4, name: "up ladder"},
                { id: 5, name: "down ladder"},
                { id: 6, name: "pyramid"}
            ],
            routine: {
                //...
                sets: []
            }
        }
    },
    methods: {
        addSet() {
            this.routine.sets.push({
                times: 1,
                type_id: 2,
                exercises: []
            });
        },
        addExercise(set) {
            set.exercises.push({
                times: 10,
                type_id: 1,
                exercise: "rest"
            });
        },
        removeExercise(set, exercise) {
            const index = set.exercises.indexOf(exercise);
            if (index > -1) {
                set.exercises.splice(index, 1);
            }
        },
        removeSet(set) {
            const index = this.routine.sets.indexOf(set);
            if (index > -1) {
                this.routine.sets.splice(index, 1);
            }
        }

    }
});
