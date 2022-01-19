import './App.css';

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
      <header className="App-header">
        <span>Schedules</span>
        <span className='material-icons'>menu</span>
      </header>

      <main className='main'>
        <div className='schedules'>
          {schedules.map(schedule => (
            <div className='schedule'>
              <p className='schedule-title'>{schedule.title}</p>
              <p className='schedule-title'>{schedule.details}</p>
            </div>
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

export default App;
