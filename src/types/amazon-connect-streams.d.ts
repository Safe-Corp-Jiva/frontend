declare namespace connect {
  interface Agent {
    getName(): string
    getState(): { name: string }
    onStateChange(callback: (agentStateChange: AgentStateChange) => void): void
    setState(
      state: {
        agentStateARN: string
        name: string
        type: string
      },
      callbacks: { success: () => void; failure: (error: any) => void }
    ): void
    mute(callbacks: { success: () => void; failure: (error: any) => void }): void
    unmute(callbacks: { success: () => void; failure: (error: any) => void }): void
  }

  interface AgentStateChange {
    newState: string
  }

  interface Contact {
    onConnected(callback: () => void): void
    onEnded(callback: () => void): void
    onIncoming(callback: () => void): void
    onConnecting(callback: () => void): void
    onAccepted(callback: () => void): void
    onMissed(callback: () => void): void
    accept(callbacks: { success: () => void; failure: (error: any) => void }): void
    clear(callbacks: { success: () => void; failure: (error: any) => void }): void
    getAgentConnection(): any
    getAttributes(): any
  }

  interface InitCCPOptions {
    ccpUrl: string
    loginPopup: boolean
    softphone?: {
      allowFramedSoftphone: boolean
    }
    loginOptions?: any
  }

  interface ConnectCore {
    initCCP(container: HTMLElement, options: InitCCPOptions): void
  }

  var core: ConnectCore

  function agent(callback: (agent: Agent) => void): void
  function contact(callback: (contact: Contact) => void): void
}