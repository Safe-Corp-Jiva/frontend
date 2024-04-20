export default function PastCallsCard() {
  const pastCalls = [
    {
      id: '001',
      time: '10 min',
      agent: 'A7',
      result: 'Satisfied',
    },
    {
      id: '002',
      time: '50 min',
      agent: 'A10',
      result: 'Unsatisfied',
    },
    {
      id: '003',
      time: '5 min',
      agent: 'A5',
      result: 'Neutral',
    },
    {
      id: '004',
      time: '1 min',
      agent: 'A2',
      result: 'Unknown',
    },
  ]

  function getResultColor(result: string) {
    switch (result) {
      case 'Satisfied':
        return 'bg-green-400/60 text-green-600 border border-green-600 border-2 font-light'
      case 'Unsatisfied':
        return 'bg-red-400/60 text-red-600 border border-red-600 border-2 font-light'
      case 'Neutral':
        return 'bg-yellow-400/60 text-yellow-600 border border-yellow-600 border-2 font-light'
      case 'Unknown':
        return 'bg-gray-400/60 text-gray-600 border border-gray-600 border-2 font-light'
    }
  }

  return (
    <div className="w-full h-full bg-white rounded-xl flex flex-col p-4">
      <h1 className="text-gray-400 mb-4 text-xl">Past Calls</h1>
      <div className="flex flex-row justify-between items-center font-style text-gray-400">
        <h1 className="flex-1">Id</h1>
        <h1 className="flex-1">Time</h1>
        <h1 className="flex-1">Agent</h1>
        <h1 className="flex-1">Result</h1>
      </div>
      {pastCalls.map((pastCall, index) => (
        <div className="flex flex-row justify-between items-center h-full" key={index}>
          <h1 className="flex-1">{pastCall.id}</h1>
          <h1 className="flex-1 font-bold">{pastCall.time}</h1>
          <h1 className="flex-1">{pastCall.agent}</h1>
          <div
            className={`flex-1 rounded-full h-8 w-8 flex justify-center items-center ${getResultColor(
              pastCall.result
            )}`}
          >
            <span>{pastCall.result}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
