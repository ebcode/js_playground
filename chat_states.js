// Define the possible states
const states = {
  IDLE: "idle",
  MOVING: "moving",
  EATING: "eating"
};

// Define the initial state
let currentState = states.IDLE;

// Define the transitions between states
const transitions = {
  [states.IDLE]: [
    {
      condition: () => isHungry(),
      nextState: states.MOVING
    }
  ],
  [states.MOVING]: [
    {
      condition: () => hasReachedFood(),
      nextState: states.EATING
    }
  ],
  [states.EATING]: [
    {
      condition: () => isSatisfied(),
      nextState: states.IDLE
    }
  ]
};

// Define the actions to take in each state
const actions = {
  [states.IDLE]: () => {
    // Do nothing
    console.log('IDLE');
  },
  [states.MOVING]: () => {
    //moveTowardsFood();
    console.log('MOVE');
  },
  [states.EATING]: () => {
    //eat();
    console.log('EAT');
  }
};

// Update the state machine on each frame of the simulation
function update() {
  // Check for state transitions
  const currentTransitions = transitions[currentState];
  for (const transition of currentTransitions) {
    if (transition.condition()) {
      currentState = transition.nextState;
      break;
    }
  }

  // Take the appropriate action for the current state
  actions[currentState]();
}
