import './helpers.css'
import './App.css'

import Filters from './components/Filters'
import Header from './components/Header'
import Log from './components/Log'
import Schedule from './components/Schedule'

import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

const API_URL = 'http://localhost:3000'

const App = () => {
  const [schedules, setSchedules] = useState([])
  const [filteredSchedules, setFilteredSchedules] = useState([])
  const [selectedSchedule, setSelectedSchedule] = useState(0)
  const [scheduleInterval, setScheduleInterval] = useState('')
  const [scheduleQuery, setScheduleQuery] = useState('')
  const [showRetired, setShowRetired] = useState(true)
  const [showUnretired, setShowUnretired] = useState(true)

  const [logs, setLogs] = useState([])
  const [filteredLogs, setFilteredLogs] = useState([])

  const [intervals, setIntervals] = useState([])

  const handleClickSchedule = useCallback(
    (id) => () => {
      const filteredLogs = logs.filter(log => log.scheduleId === id)

      setFilteredLogs(filteredLogs)
      setSelectedSchedule(id)
    },
    [logs],
  )

  // Handler for retired/unretired button
  const toggleIsRetired = useCallback(
    (id) => () => {
      const schedule = schedules.find(schedule => schedule.id === id)
      schedule.isRetired = !schedule.isRetired
    },
    [schedules],
  )

  useEffect(() => {
    const filteredSchedules = schedules
      // Filter by schedule interval
      .filter(schedule => {
        return (schedule.intervalType || '').includes(scheduleInterval)
      })
      // Filter by schedule retired/unretired
      .filter(schedule => {
        return schedule.isRetired === showRetired || schedule.isRetired === !showUnretired
      })
      // Filter by schedule name or description
      .filter(schedule => {
        return schedule.name.toLowerCase().includes(scheduleQuery.toLocaleLowerCase()) ||
                schedule.description.toLowerCase().includes(scheduleQuery.toLocaleLowerCase())
      })

    setFilteredSchedules(filteredSchedules)
  }, [scheduleQuery, scheduleInterval, schedules, showRetired, showUnretired])

  useEffect(() => {
    const fetchSchedules = async () => {
      const { data } = await axios.get(`${API_URL}/schedules`)
      setSchedules(data)

      setIntervals([...new Set(data.map(schedule => schedule.intervalType))])
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
          <Filters
            intervals={intervals}
            setScheduleQuery={setScheduleQuery}
            setScheduleInterval={setScheduleInterval}
            setFilteredLogs={setFilteredLogs}
            setSelectedSchedule={setSelectedSchedule}
            setShowRetired={setShowRetired}
            setShowUnretired={setShowUnretired}
          />

          {filteredSchedules.map(schedule => (
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
