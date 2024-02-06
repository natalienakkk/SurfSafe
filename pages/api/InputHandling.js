import chatStates from '../../chatFlow.json';
import { parse } from 'cookie';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const cookies = parse(req.headers.cookie || '');
    const currentState = cookies.currentState || 'greeting';
    const { userResponse } = req.body;

    let nextStateKey = currentState; // Default to the current state
    const currentResponses = chatStates.states[currentState]?.responses;

    if (currentResponses) {
      for (const option in currentResponses) {
        if (currentResponses[option].userResponse === userResponse) {
          nextStateKey = currentResponses[option].next; // Determine the next state
          break; // Found the match, exit the loop
        }
      }
    }

    const nextState = chatStates.states[nextStateKey];
    if (nextState.end){
      res.status(200).json({
        message: '',
        end: true
      })
    }
    const userChoices = nextState && nextState.responses
      ? Object.values(nextState.responses).map(res => res.userResponse)
      : [];

    // Send the next state, bot response, and user choices without updating the cookie
    res.status(200).json({
      nextState: nextStateKey,
      message: nextState?.message,
      userChoices
    });
  } else {
    // Handle non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
