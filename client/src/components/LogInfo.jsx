import { useState, useEffect } from 'react'

import api from '../api/api.js'

export default function LogInfo({ logId, logs }) {
  const [log, setLog] = useState(null)

  useEffect(() => {
    let sqlLog = logs.find(log => log.id === logId)
    // const res = api.getLog(logId)
    // const log = {
    //   body: res.data.log.body,
    //   ...sqlLog
    // }

    setLog(sqlLog)

  }, [logId])


  return (
    <div className="log-info">
      <h2>HTTP Request</h2>
      <br/>
      {
        log && 
        (
          <div>
            <div>
              Details: <span>{log.method}</span><span>{log.path}</span>
            </div>
            <div>
              Headers:
            </div>
            <div>
              Body:
            </div>
          </div>
        )
      }
    </div>
  )
}