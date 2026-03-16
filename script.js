function darkMode(){

document.body.classList.toggle("dark");

}


const ctx = document.getElementById('skillsChart');

new Chart(ctx, {

type:'bar',

data:{

labels:["SPSS","Excel","R","Python","Web Dev"],

datasets:[{

label:"Skill Level",

data:[90,95,85,80,85]

}]

}

});
