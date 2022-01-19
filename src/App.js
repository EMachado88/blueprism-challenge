import './App.css'

import Header from './components/Header'
import Schedule from './components/Schedule'

function App() {
  const schedules = [
    {
      title: 'Schedule title',
      details: 'Schedule details'
    },
    {
      title: 'Schedule title',
      details: 'Schedule details'
    },
    {
      title: 'Schedule title',
      details: 'Schedule details'
    },
    {
      title: 'Schedule title',
      details: 'Schedule details'
    },
    {
      title: 'Schedule title',
      details: 'Schedule details'
    },
    {
      title: 'Schedule title',
      details: 'Schedule details'
    },
    {
      title: 'Schedule title',
      details: 'Schedule details'
    },
    {
      title: 'Schedule title',
      details: 'Schedule details'
    },
    {
      title: 'Schedule title',
      details: 'Schedule details'
    },
    {
      title: 'Schedule title',
      details: 'Schedule details'
    },
    {
      title: 'Schedule title',
      details: 'Schedule details'
    },
    {
      title: 'Schedule title',
      details: 'Schedule details'
    },
    {
      title: 'Schedule title',
      details: 'Schedule details'
    },
    {
      title: 'Schedule title',
      details: 'Schedule details'
    }
  ];

  const logs = [
    {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
  ]
  
  return (
    <div className="App">
      <Header />

      <main className='main'>
        <div className='schedules'>
          {schedules.map(schedule => (
            <Schedule title={schedule.title} details={schedule.details} />
          ))}
        </div>
        <div className='logs'>
          <div className='log'>
            <h1>LOGS</h1>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App
