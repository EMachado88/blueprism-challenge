const Log = ({ 
  log: {
    serverName,
    status
  }
}) => {
  return (
    <div className='log'>
      <h3>{serverName}</h3>
      <p>{status}</p>
    </div>
  )
}

export default Log