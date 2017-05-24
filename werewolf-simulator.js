//Goal: to do a computer simulation of a large number of werewolf games to compute the probability of each side's victory.
//Werewolf game rules:
//Two teams: villagers and werewolves. In the most simple version, one-third are werewolves and the rest are villagers. The werewolves know who their enemy is but the villagers do not. Each night, the werewolves kill one villager. The next day, the villagers retaliate by killing someone, whom they believe to be a werewolf but could be an innocent villager. The game continues until the number of surviving werewolves is equal to the number of surviving villagers, in which case the werewolves win, or all werewolves are dead and at least one villager is alive, in which case the villagers win.


//Begin by defining a function whose argument n is the number of werewolves. We assume that the number of villagers is n * 2.
function werewolfSimulator(n) {
  let numWerewolves = n;
  let numVillagers = 50*n;
  let numRounds = 0;
  while (numVillagers > numWerewolves && numWerewolves > 0) {
    numRounds++;
    //Nighttime
    numVillagers--;
    if (numVillagers === numWerewolves) {
      return ["W", numRounds];
    }
    //Daytime
    let total = numWerewolves + numVillagers;
    let victimIndex = Math.floor(Math.random()*total);
    victimIndex < numWerewolves ? numWerewolves-- : numVillagers--;
    if (numVillagers === numWerewolves) {
      return ["W", numRounds];
    }
    else if (numWerewolves === 0) return ["V", numRounds];
  }
}

function repeat() {
  let i = 0;
  let werewolfVictories = 0;
  let villagerVictories = 0;
  while (i < 100000) {
    let result = werewolfSimulator(100);
    result[0] === "W" ? werewolfVictories++ : villagerVictories++;
    console.log("numRounds:", result[1])
    i++;
  }
  console.log(["werewolfVictories:", werewolfVictories]);
}

repeat();