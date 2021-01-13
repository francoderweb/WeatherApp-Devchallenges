import React from 'react'
import { useSelector } from 'react-redux'
import { DateTime } from 'luxon'
import icons from '../helpers/icons'
import styles from 'styled-components'

export const Today = () => {
  const timezone = useSelector((state) => state.currentTimezone).split('/')
  const temp = parseInt(useSelector((state) => state.current.temp))
  const weather = useSelector((state) => state.current.weather[0].main)
  const date = useSelector((state) => state.current.dt)
  const icon = useSelector((state) => state.current.weather[0].icon)

  const TodayStyle = styles.div`
    min-height: 810px;
    text-align: center;
    background: #1E213A;
    @media (min-width: 768px){
      min-height: 100vh;
    }
    .header {
      display:flex;
      justify-content: space-between;
      padding: 1em .7em;
      margin-bottom: 86px;
      @media (min-width: 768px){
        margin-bottom: 109px;
      }
      &__button {
        border: none;
        padding: .7em 1em;
        color: #E7E7EB;
        background: #6E707A;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        margin: 18px 0 0 12px;
        @media(min-width: 768px){
          margin: 42px 0 0 46px;
        }
      }
      &__icon {
        color: #E7E7EB;
        border-radius: 50%;
        padding: 1em;
        background: #6E707A;
        margin: 18px 12px 0 0;
        @media(min-width: 768px){
          margin: 42px 46px 0 0;
        }
      }
    }
    .main {
      img {
        display: block;
        margin: 0 auto;
        margin-bottom: 40px;
        @media (min-width: 768px){
          margin-bottom: 87px;
        }
      }
      .title__h1 {
        font-size: 144px;
        font-weight: 500;
        color: white;
        margin: 0;
        margin-bottom: 23px;
        @media (min-width: 768px){
          margin-bottom: 87px;
        }
        & span {
          font-size: 48px;
          color: #A09FB1;
        }
      }
      .title__h2 {
        font-size: 36px;
        font-weight: 600;
        color: #A09FB1;
        margin-bottom: 48px;
        @media (min-width: 768px){
          margin-bottom: 87px;
        }
      }
      &__today {
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: center;

        color: #88869D;
        margin-bottom: 33px;
      }
      small {
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: center;

        color: #88869D;
        & i {
          margin-right: .5em;
        }
      }
    }
  `

  return (
    <TodayStyle>
      <header className="header">
        <button className="header__button">Search for places</button>
        <span className="header__icon">
        <i class="fas fa-street-view"></i>
        </span>
      </header>
      <main className="main">
        <img src={icons[icon]} alt="img principal" className="main__img"/>
        <h1 className="title__h1">{temp}<span>°C</span></h1>
        <h2 className="title__h2">{weather}</h2>
        <p className="main__today">{date}</p>
        <small>
          <i class="fas fa-map-marker-alt"></i>
          {timezone[timezone.length - 1].replaceAll('_', ' ')}
        </small>
      </main>
    </TodayStyle>
  )
}