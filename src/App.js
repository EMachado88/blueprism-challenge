import './App.css'

import Header from './components/Header'
import Log from './components/Log'
import Schedule from './components/Schedule'

import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      const { data } = await axios.get('http://localhost:3000/schedules')
      setSchedules(data)
    }

    fetchSchedules()
  }, [])

  const logs = [
    {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
  ]
  
  return (
    <div className="App">
      <Header />

      <main className='main'>
        <div className='schedules'>
          {schedules.map(schedule => (
            <Schedule key={schedule.id} name={schedule.name} description={schedule.description} />
          ))}
        </div>
        <div className='logs'>
          {logs.map((log, index) => (
            <Log key={index} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App
