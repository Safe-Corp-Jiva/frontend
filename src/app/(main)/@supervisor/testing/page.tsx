'use client'
import { useEffect, useState } from 'react';
import 'amazon-connect-streams';

export default function Page() {
  const [agent, setAgent] = useState<connect.Agent | null>(null);
  const [currentState, setCurrentState] = useState<string>('');
  const [incomingCall, setIncomingCall] = useState<boolean>(false);
  const [callAccepted, setCallAccepted] = useState<boolean>(false);
  const [currentContact, setCurrentContact] = useState<connect.Contact | null>(null);

  useEffect(() => {
    const container = document.getElementById('container');
    if (!container) {
      console.error('Container element not found');
      return;
    }

    // Inicializar el CCP
    connect.core.initCCP(container, {
      ccpUrl: 'https://adventure-architects-dev.my.connect.aws/ccp-v2/',
      loginPopup: true,
      softphone: {
        allowFramedSoftphone: true,
      },
    });

    // Suscribirse a eventos del agente
    connect.agent(agent => {
      setAgent(agent);

      // Suscribirse a los cambios de estado del agente
      agent.onStateChange(agentStateChange => {
        console.log('Agent state changed:', agentStateChange);
        setCurrentState(agentStateChange.newState);
      });

      // Establecer el estado inicial del agente
      setCurrentState(agent.getState().name);
    });

    // Suscribirse a eventos de contacto
    connect.contact(contact => {
      console.log('New contact detected');

      // Detectar llamada entrante
      contact.onIncoming(() => {
        console.log('Incoming call detected');
        setIncomingCall(true);
        setCurrentContact(contact);
      });

      // Detectar cuando el contacto se está conectando
      contact.onConnecting(() => {
        console.log('Call is connecting');
        setIncomingCall(true);
        setCurrentContact(contact);
      });

      // Detectar cuando la llamada es aceptada
      contact.onAccepted(() => {
        console.log('Call accepted');
        setIncomingCall(false);
        setCallAccepted(true);
        setCurrentContact(contact);
      });

      // Detectar cuando la llamada termina
      contact.onEnded(() => {
        console.log('Call ended');
        setIncomingCall(false);
        setCallAccepted(false);
        setCurrentContact(null);
      });
    });
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedState = event.target.value;
    if (agent) {
      const states = {
        Available: {
          agentStateARN: 'arn:aws:connect:us-east-1:767398119914:instance/589e43e8-dd86-4785-8571-af7c2853adb3/agent-state/8ddcef93-1096-42de-834b-2f93ff5f6eda',
          name: 'Available',
          type: 'routable',
        },
        Offline: {
          agentStateARN: 'arn:aws:connect:us-east-1:767398119914:instance/589e43e8-dd86-4785-8571-af7c2853adb3/agent-state/d36245db-366a-44e6-a73c-1b7da8f75bce',
          name: 'Offline',
          type: 'offline',
        },
      };

      const state = states[selectedState];

      if (state) {
        agent.setState(state, {
          success: () => {
            console.log(`Agent state changed to ${state.name}`);
          },
          failure: error => {
            console.error('Error changing agent state', error);
          },
        });
      }
    }
  };

  const handleAnswerCall = () => {
    if (currentContact) {
      currentContact.accept({
        success: () => {
          console.log('Call answered successfully');
        },
        failure: error => {
          console.error('Error answering call', error);
        },
      });
    }
  };

  const handleEndCall = () => {
    if (currentContact) {
      const agentConnection = currentContact.getAgentConnection();
      if (agentConnection) {
        agentConnection.destroy({
          success: () => {
            console.log('Call ended successfully');
            setCallAccepted(false);
            setCurrentContact(null);
          },
          failure: error => {
            console.error('Error ending call', error);
          },
        });
      }
    }
  };

  return (
    <main>
      <h1>Testing</h1>
      <p>Testing the Amazon Connect Streams API</p>
      <section id="container" style={{ width: '100%', height: '600px' }}></section>
      <div>
        <label htmlFor="agent-state">Change Agent State: </label>
        <select id="agent-state" onChange={handleChange} value={currentState}>
          <option value="Available">Available</option>
          <option value="Offline">Offline</option>
        </select>
      </div>
      {incomingCall && !callAccepted && (
        <div>
          <h2>Incoming Call</h2>
          <button onClick={handleAnswerCall}>Answer Call</button>
        </div>
      )}
      {callAccepted && (
        <div>
          <h2>Call in Progress</h2>
          <button onClick={handleEndCall}>End Call</button>
        </div>
      )}
    </main>
  );
}
