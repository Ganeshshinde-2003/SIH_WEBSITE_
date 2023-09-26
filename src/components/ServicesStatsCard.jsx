import React from 'react'

export default function ServicesStatsCard({value,param}) {
  return (
    <div className='services-stats-card-container'>
        <p className='services-stats-card-value'>{value}</p>
        <p className='services-stats-card-param'>{param}</p>
    </div>
  )
}
