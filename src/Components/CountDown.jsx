import { useEffect, useState } from 'react'

// eslint-disable-next-line react/prop-types
export const CountDown = () => {
  const SECOND = 1000
  const MINUTE = SECOND * 60
  const HOUR = MINUTE * 60
  const DAYS = HOUR * 24
  const END_DATE = 1713225600000
  const date = new Date(END_DATE).getTime()

  const [days, setDays] = useState('0')
  const [hours, setHours] = useState('0')
  const [minutes, setMinutes] = useState('0')
  const [seconds, setSeconds] = useState('0')

  useEffect(() => {
    const intervalCountdown = setInterval(() => {
      const now = new Date().getTime()
      const diff = date - now
      const dayText = Math.floor(diff / DAYS).toString()
      const hourText = Math.floor((diff % DAYS) / HOUR).toString()
      const minuteText = Math.floor((diff % HOUR) / MINUTE).toString()
      const secondText = Math.floor((diff % MINUTE) / SECOND).toString()
      setDays(dayText)
      setHours(hourText)
      setMinutes(minuteText)
      setSeconds(secondText)
    }, SECOND)
    return () => clearInterval(intervalCountdown)
  }, [])

  return (
    <div className='container-countdown'>
      <div className='item-countdown'>
        <span>{days}</span>
        <span>Días</span>
      </div>
      <div className='item-countdown'>
        <span>{hours}</span>
        <span>Horas</span>
      </div>
      <div className='item-countdown'>
        <span>{minutes}</span>
        <span>Minutos</span>
      </div>
      <div className='item-countdown' style={{ display: 'none' }} aria-hidden>
        <span>{seconds}</span>
        <span>Segundos</span>
      </div>
    </div>
  )
}
