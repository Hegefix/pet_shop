import React, { useEffect } from "react"

const Landing = () => {
  useEffect(() => {
    document.title = "Landing"
  }, [])

  return (
    <div>
      <p>Landing</p>
    </div>
  )
}

export default Landing
