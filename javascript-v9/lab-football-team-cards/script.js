const teamName = document.getElementById("team");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [{
    name: "Sergio Almirón",
    position: "forward",
    isCaptain: false
  }, {
    name: "Sergio Batista",
    position: "midfielder",
    isCaptain: false
  }, {
    name: "Ricardo Bochini",
    position: "midfielder",
    isCaptain: false
  }, {
    name: "Claudio Borghi",
    position: "midfielder",
    isCaptain: false
  }, {
    name: "José Luis Brown",
    position: "defender",
    isCaptain: false
  }, {
    name: "Daniel Passarella",
    position: "defender",
    isCaptain: false
  }, {
    name: "Jorge Burruchaga",
    position: "forward",
    isCaptain: false
  }, {
    name: "Néstor Clausen",
    position: "defender",
    isCaptain: false
  }, {
    name: "José Luis Cuciuffo",
    position: "defender",
    isCaptain: false
  }, {
    name: "Diego Maradona",
    position: "midfielder",
    isCaptain: true
  }, {
    name: "Jorge Valdano",
    position: "forward",
    isCaptain: false
  }, {
    name: "Héctor Enrique",
    position: "midfielder",
    isCaptain: false
  }, {
    name: "Oscar Garré",
    position: "defender",
    isCaptain: false
  }, {
    name: "Ricardo Giusti",
    position: "midfielder",
    isCaptain: false
  }, {
    name: "Luis Islas",
    position: "goalkeeper",
    isCaptain: false
  }, {
    name: "Julio Olarticoechea",
    position: "defender",
    isCaptain: false
  }, {
    name: "Pedro Pasculli",
    position: "forward",
    isCaptain: false
  }, {
    name: "Nery Pumpido",
    position: "goalkeeper",
    isCaptain: false
  }, {
    name: "Oscar Ruggeri",
    position: "defender",
    isCaptain: false
  }, {
    name: "Carlos Tapia",
    position: "midfielder",
    isCaptain: false
  }, {
    name: "Marcelo Trobbiani",
    position: "midfielder",
    isCaptain: false
  }, {
    name: "Héctor Zelada",
    position: "goalkeeper",
    isCaptain: false
  }]
};

teamName.textContent = footballTeam.team;
worldCupYear.textContent = footballTeam.year;
headCoach.textContent = footballTeam.headCoach;

function getPlayerCards(position) {
  return footballTeam.players.filter(player => position === "all" || player.position === position).map(player => {
    let caption = "";
    if (player.isCaptain) {
      caption = "(Captain) ";
    }

    return `<div class="player-card">
  <h2>${caption}${player.name}</h2>
  <p>Position: ${player.position}</p>
</div>`
  });
}

function updatePlayers(position) {
  playerCards.innerHTML = getPlayerCards(position);
}

playersDropdownList.addEventListener("change", (e) => {
  updatePlayers(e.target.value);
});

updatePlayers("all");