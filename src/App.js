import './App.css'

import Header from './components/Header'
import Log from './components/Log'
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
          {logs.map(log => (
            <Log />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App
