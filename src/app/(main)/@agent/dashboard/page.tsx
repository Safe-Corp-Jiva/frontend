'use client'
import React from 'react'
import Image from 'next/image'
import Wait from '../wait/page'
import { useEffect, useState } from 'react';
import 'amazon-connect-streams';

function page() {
  const [agent, setAgent] = useState<connect.Agent | null>(null);
  const [currentState, setCurrentState] = useState<string>('');
  const [incomingCall, setIncomingCall] = useState<boolean>(false);
  const [callAccepted, setCallAccepted] = useState<boolean>(false);
  const [currentContact, setCurrentContact] = useState<connect.Contact | null>(null);

  useEffect(() => {
    const container = document.getElementById('container');
    if (!container) {
      return;
    }

    // Inicializar el CCP
    connect.core.initCCP(container, {
      ccpUrl: 'https://adventure-architects-dev.my.connect.aws/ccp-v2/',
      loginPopup: true,
      loginOptions: {                 // optional, if provided opens login in new window
        autoClose: true,              // optional, defaults to `false`
        height: 600,                  // optional, defaults to 578
        width: 400,                   // optional, defaults to 433
        top: 0,                       // optional, defaults to 0
        left: 0                       // optional, defaults to 0
      },
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
    <>
      <div id="container" style={{ display: 'none' }}></div>
      {!incomingCall && !callAccepted && <Wait />}
      {incomingCall && !callAccepted && (
        <div>
          <button className="bg-yellow-400 rounded-full w-10 h-10 flex justify-center items-center" onClick={handleAnswerCall}>
              <Image src="/icons/exclamation-triangle.svg" alt="triangle" width={20} height={20} />
          </button>
        </div>
      )}
      {callAccepted && (
        <div className="flex items-center justify-center bg-SCJ-gray w-full h-full">
          <div className="bg-white flex flex-col justify-center rounded-xl w-1/3 h-5/6 mx-4">
            <div className="p-3 flex flex-col justify-evenly items-center flex-1">
              <div className="flex flex-col items-center justify-center">
                <Image src="/icons/User_d.svg" alt="user" width={110} height={110} />
                <h1 className="mt-4 font-bold text-xl">5533486343</h1>
                <h4 className="font-bold text-sm">5:37</h4>
              </div>
              <div className="flex flex-row p-3 space-x-5">
                <button className="bg-red-500 rounded-full w-10 h-10 flex justify-center items-center" onClick={handleEndCall}>
                  <Image src="/icons/telephone.svg" alt="telephone" width={20} height={20} />
                </button>
                <button className="bg-blue-400 rounded-full w-10 h-10 flex justify-center items-center">
                  <Image src="/icons/microphone.svg" alt="microphone" width={20} height={20} />
                </button>
                <button className="bg-yellow-400 rounded-full w-10 h-10 flex justify-center items-center">
                  <Image src="/icons/exclamation-triangle.svg" alt="triangle" width={20} height={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white flex flex-col justify-center items-center rounded-xl font-sans w-2/3 h-5/6 mx-4">
            <h1 className="font-bold text-xl">Live Transcript</h1>
            <div className="flex flex-col justify-center items-center w-3/4 h-3/4 m-4">
              <h1>Transcript goes here</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default page