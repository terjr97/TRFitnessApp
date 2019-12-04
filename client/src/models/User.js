export const UserProfile = {
excercise: [{name:"running" , time: 30 ,intensity: "high"}],
foodCalories: [ { food: "carrot", calories: 10 },],
age: 0,
height: 0,
weight: 0,
calories: 1,
calLost: 0,
calEaten: 0,
caloriesLeft: 0,

addexcercise(name, time, intensity){
    this.foodCalories.push(name, time, intensity);
    this.calLost = +(time*10);
    },

addfood(name, calories){
this.foodCalories.push(name, calories);
this.calEaten = +(calories);
},

submitData(weight, height){
    this.calories = ((weight / height) * (1.2));   
  },

  caloriesLeft(){
    this.caloriesLeft = this.calories - this.calEaten + this.calLost;
  },

    caloriesEaten(eat){
        this.calEaten = this.calEaten + eat;
    },

    caloriesLost(lost){
        this.calLost = this.calLost + lost;

    }
}

