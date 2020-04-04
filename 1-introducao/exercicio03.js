function temHabilidade(skills) {
    return skills.indexOf('Javascript') >= 0;
   }
   
var skills = ["Javascript", "ReactJS", "React Native"];
   
console.log(temHabilidade(skills)); // true ou false