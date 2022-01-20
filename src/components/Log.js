const Log = ({ 
  log: {
    id,
    serverName,
    status,
    startTime,
    endTime
  }
}) => {
  const startDate = (new Date(startTime)).toLocaleDateString()
  const endDate = (new Date(endTime)).toLocaleDateString()

  return (
    <div className='log'>
      <h3 className='text-center'>{serverName}</h3>
      <hr/>
      <p><strong>id:</strong> <span>{id}</span></p>
      <p><strong>Start:</strong> <span>{startDate}</span></p>
      <p><strong>End:</strong> <span>{endDate}</span></p>
      <p><strong>Status:</strong> <span>{status}</span></p>
    </div>
  )
}

export default Log