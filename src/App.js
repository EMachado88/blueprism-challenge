import './App.css'

import Header from './components/Header'
import Log from './components/Log'
import Schedule from './components/Schedule'

import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

const API_URL = 'http://localhost:3000'

const App = () => {
  const [schedules, setSchedules] = useState([])
  const [selectedSchedule, setSelectedSchedule] = useState(0)
  const [logs, setLogs] = useState([])
  const [filteredLogs, setFilteredLogs] = useState([])

  useEffect(() => {
    const fetchSchedules = async () => {
      const { data } = await axios.get(`${API_URL}/schedules`)
      setSchedules(data)
    }

    const fetchLogs = async () => {
      const { data } = await axios.get(`${API_URL}/scheduleLogs`)
      setLogs(data)
    }

    fetchSchedules()
    fetchLogs()
  }, [])

  const handleClickSchedule = useCallback(
    (id) => () => {
      const filteredLogs = logs.filter(log => log.scheduleId === id)

      setFilteredLogs(filteredLogs)
      setSelectedSchedule(id)
    },
    [],
  )
  
  return (
    <div className="App">
      <Header />

      <main className='main'>
        <div className='schedules'>
          {schedules.map(schedule => (
            <Schedule
              key={schedule.id}
              schedule={schedule}
              handleClickSchedule={handleClickSchedule}
            />
          ))}
        </div>
        <div className='logs'>
          {filteredLogs.map((log, index) => (
            <Log
              key={log.id}
              log={log}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App
