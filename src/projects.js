const projects = [
    {
        name: "Weather Dashboard",
        imgUrl: "img/JavaScript-logo.png",
        repoUrl: "https://kdeguzm3.github.io/WeekSixWeatherDashboard/"
    },
    {
        name: "Group Project: Good Morning App",
        imgUrl: "img/JavaScript-logo.png",
        repoUrl: "https://kneves1.github.io/Best-Group-Repo/"
    },
    {
        name: "DeepDiveJS: page builder library",
        imgUrl: "img/ddjs-logo.png",
        repoUrl: "https://github.com/kdeguzm3/DeepDiveJS"
    },
    {
        name: "Group Project: Good Morning App",
        imgUrl: "img/JavaScript-logo.png",
        repoUrl: "https://kneves1.github.io/Best-Group-Repo/"
    },
    {
        name: "Rock Paper Scissors Lizard Spock",
        imgUrl: "img/JavaScript-logo.png",
        repoUrl: "https://kdeguzm3.github.io/rpsls/"
    },
    {
        name: "Code Quiz",
        imgUrl: "img/JavaScript-logo.png",
        repoUrl: "https://kdeguzm3.github.io/WeekFourCodeQuiz/"
    },
    {
        name: "Day Planner",
        imgUrl: "img/JavaScript-logo.png",
        repoUrl: "https://kdeguzm3.github.io/WeekFiveDayPlanner/"
    },
    {
        name: "Readme template generator",
        imgUrl: "img/nodejs-logo.png",
        repoUrl: "https://github.com/kdeguzm3/WeekNineReadmeGen"
    },
    {
        name: "Team Profile Generator",
        imgUrl: "img/nodejs-logo.png",
        repoUrl: "https://github.com/kdeguzm3/WeekTenTeamProfileGenerator"
    },
    {
        name: "Note Taker",
        imgUrl: "img/heroku-logo.png",
        repoUrl: "https://aqueous-fjord-69435.herokuapp.com/"
    },
    {
        name: "Star Wars Character Database",
        imgUrl: "img/heroku-logo.png",
        repoUrl: "https://rhubarb-cupcake-93947.herokuapp.com/"
    },
    {
        name: "Burger app",
        imgUrl: "img/heroku-logo.png",
        repoUrl: "https://safe-sands-04380.herokuapp.com/"
    },
]

console.log ( " loaded ");
projects.forEach(({ name, imgUrl, repoUrl }) =>{
let projectPanel = `<div class = "project">
<a href = "${repoUrl}">
    <img src = "${imgUrl}">
    <div class = "caption">
        ${name}
    </div>
</a>
</div>`

$("#projectWrapper").append(projectPanel);
});