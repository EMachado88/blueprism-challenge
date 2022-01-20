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

  const handleClickSchedule = useCallback(
    (id) => () => {
      const filteredLogs = logs.filter(log => log.scheduleId === id)

      setFilteredLogs(filteredLogs)
      setSelectedSchedule(id)
    },
    [logs],
  )

  const toggleIsRetired = useCallback(
    (id) => () => {
      const schedule = schedules.find(schedule => schedule.id === id)
      schedule.isRetired = !schedule.isRetired
    },
    [schedules],
  )

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
  
  return (
    <div className="App">
      <Header />

      <main className='main'>
        <div className='schedules'>
          {schedules.map(schedule => (
            <Schedule
              key={schedule.id}
              schedule={schedule}
              selectedSchedule={selectedSchedule}
              handleClickSchedule={handleClickSchedule}
              toggleIsRetired={toggleIsRetired}
            />
          ))}
        </div>
        <div className='logs'>
          {filteredLogs.length ? filteredLogs.map((log) => (
            <Log
              key={log.id}
              log={log}
            />
          )) : (
            <div className='empty-logs'>
              <h1>Select a schedule to view its logs</h1>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App
