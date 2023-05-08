export function rps(input) {
    var player = 0;
    if (input == null) {
        return ('{\"player\":\"' + getShot(Math.floor(Math.random() * 3)) + '\"}');
    }else {
        player = getInput(input);
        if (player == -1) {
            console.log('`Rules for Rock Paper Scissors: \
            - Scissors CUTS Paper \
            - Paper COVERS Rock \
            - Rock CRUSHES Scissors`');
            return;
        }
    }

    let opponent = Math.floor(Math.random() * 3);
    let result;
    if (player === opponent) {
        result = "tie";
      } else if (
        (player === 0 && opponent === 2) ||
        (player === 1 && opponent === 0) ||
        (player === 2 && opponent === 1)
      ) {
        result = "win";
      } else {
        result = "lose";
      }
      return ('{\"player\":\"' + getShot(player) + '\",\"opponent\":\"' + getShot(opponent) + '\",\"result\":\"' + result + '\"}');
}

export function rpsls(input) {
    var player = 0;
    if (input == null) {
        return ('{\"player\":\"' + getShotLS(Math.floor(Math.random() * 5)) + '\"}');
    }else {
        player = getInputLS(input);
        if (player == -1) {
            console.log('Rules for the Lizard-Spock Expansion of Rock Paper Scissors: \
            \
            - Scissors CUTS Paper \
            - Paper COVERS Rock\
            - Rock SMOOSHES Lizard\
            - Lizard POISONS Spock\
            - Spock SMASHES Scissors\
            - Scissors DECAPITATES Lizard\
            - Lizard EATS Paper\
            - Paper DISPROVES Spock\
            - Spock VAPORIZES Rock\
            - Rock CRUSHES Scissors');
            return;
        }
    }
    let opponent = Math.floor(Math.random() * 5);
    let result;
    if (player === opponent) {
        result = "tie";
    } else if (
        (player === 0 && (opponent === 2 || opponent === 3)) ||
        (player === 1 && (opponent === 0 || opponent === 4)) ||
        (player === 2 && (opponent === 1 || opponent === 3)) ||
        (player === 3 && (opponent === 1 || opponent === 4)) ||
        (player === 4 && (opponent === 0 || opponent === 2)) )
      {
        result = "win";
      } else {
        result = "lose";
      }
      return ('{\"player\":\"' + getShotLS(player) + '\",\"opponent\":\"' + getShotLS(opponent) + '\",\"result\":\"' + result + '\"}');
}

function getShotLS(input) {
    switch(input) {
        case 0:
          return "rock";
        case 1:
          return "paper";
        case 2:
          return "scissors";
        case 3:
          return "lizard";
        case 4:
          return "spock";
    }
}

function getInputLS(input) {
    switch (String(input).toLowerCase()) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
        case "lizard":
            return 3;
        case "spock":
            return 4;
        default:
            return -1;
    }
}

function getShot(input) {
    switch (input) {
        case 0:
          return "rock";
        case 1:
          return "paper";
        case 2:
          return "scissors";
      }
}

function getInput(input) {
  switch (String(input).toLowerCase()) {
    case "rock":
      return 0;
    case "paper":
      return 1;
    case "scissors":
      return 2;
    default:
        return -1;
}
}