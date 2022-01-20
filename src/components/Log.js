const Log = (
  { 
    log: {
      serverName,
      status
    } 
  }
) => {
  return (
    <div className='log'>
      <h1>{serverName}</h1>
      <p>{status}</p>
    </div>
  )
}

export default Log