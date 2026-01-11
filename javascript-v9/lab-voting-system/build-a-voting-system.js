const poll = new Map();


const addOption = option => {
  if (option === "") {
    return "Option cannot be empty.";
  } else if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  } else {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  }
}

const vote = (option, voterId) => {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }

  const sets = poll.get(option);
  if (sets.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  sets.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

const displayResults = () => {
  let res = "Poll Results:";
  poll.forEach((value, key) => {
    res += `\n${key}: ${value.size} votes`;
  });

  return res;
}

addOption("Algeria");
addOption("Malaysia");
addOption("Nigeria");
vote("Algeria", "traveler1");
vote("Algeria", "traveler2");
vote("Algeria", "traveler3");