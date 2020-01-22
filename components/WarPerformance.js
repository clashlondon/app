import { useState } from 'react'

class WarUser {
  constructor({name, wins, battlesPlayed, cardsEarned, numberOfBattles}) {
    this.name = name
    this.wins = wins
    this.battles = battlesPlayed
    this.totalBattles = numberOfBattles
    this.cards = cardsEarned
  }

  addToKey(key, value) {
    this[key] += value
  }

  get loss() {
    return this.battles - this.wins
  }

  get ratio() {
    return this.wins / this.totalBattles
  }

  get battlesMissed() {
    return this.totalBattles - this.battles
  }

  get inRespect() {
    return this.ratio >= 0.75 || this.loss === 0 && this.missed === 0
  }

  get inDanger() {
    return this.ratio <= 0.25 || this.battlesMissed >= 3
  }

  get score() {
    return (this.wins * (this.wins / this.battles) - ((this.battlesMissed * 2.5) * this.battlesMissed) + (this.wins * 0.5)).toFixed(2)
  }
}

const processData = (items) => {
  let participants = []
  const findUser = (name) => participants.find((p) => p.name === name);
  items.forEach((war, i) => {
      war.participants.forEach((user) => {
          var userObj = findUser(user.name)
          if (!!userObj) {
              userObj.addToKey('battles', user.battlesPlayed)
              userObj.addToKey('wins', user.wins)
              userObj.addToKey('cards', user.cardsEarned)
              userObj.addToKey('totalBattles', user.numberOfBattles)
          } else {
              userObj = new WarUser(user)
              participants.push(userObj)
          }
      })
  })
  return participants
}

const sortData = (items, key, alt) => {
  return items.sort((a, b) => alt ? a[key] - b[key] : b[key] - a[key])
}

const WarPerformance = (props) => {

  const [sort, setSort] = useState('score')
  const [alt, setAlt] = useState(false)
  const [data, setData] = useState(processData(props.items))

  const sortedData = sortData(data, sort, alt)

  const clickSort = (newSort) => {
    if (newSort === sort) {
      setAlt(!alt)
    } else {
      setSort(newSort)
    }
  }

  return (
    <>
      <header className="p-4">
        <h1>ClashLondon</h1>
      </header>
      <div className="table-responsive">
        <table className={'table table-sm'}>
          <thead>
            <tr>
              <th>Name</th>
              <th className={sort === 'score' ? 'active' : null} onClick={(() => clickSort('score'))}>Score</th>
              <th className={sort === 'totalBattles' ? 'active' : null} onClick={(() => clickSort('totalBattles'))}>Total Battles</th>
              <th className={sort === 'wins' ? 'active' : null} onClick={(() => clickSort('wins'))}>Wins</th>
              <th className={sort === 'loss' ? 'active' : null} onClick={(() => clickSort('loss'))}>Losses</th>
              <th className={sort === 'ratio' ? 'active' : null} onClick={(() => clickSort('ratio'))}>Win Ratio<span>wins/battles</span></th>
              <th className={sort === 'battlesMissed' ? 'active' : null} onClick={(() => clickSort('battlesMissed'))}>Battles Missed</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((p, i) => {
              let className = p.score < -1 ? 'bg-danger' : p.score <= 1 ? 'table-danger' : p.score >= 8 ? 'table-warning' : 'table-success'
              return (
                <tr key={i}>
                  <td className={className}>{p.name}</td>
                  <td>{p.score}</td>
                  <td>{p.totalBattles}</td>
                  <td>{p.wins}</td>
                  <td>{p.loss}</td>
                  <td>{p.ratio.toFixed(2)}</td>
                  <td>{p.battlesMissed}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .table-responsive {
          overflow-x: initial;
        }
        .table {
          width: 100%;
        }
        .table thead {
          font-weight: bold;
        }
        .table thead th {
          cursor: pointer;
          position: sticky;
          top: 0;
          background: white;
          min-width: 8rem;
        }
        .table thead th span {
          display: block;
          font-size: 0.5rem;
        }
        .table thead th.active {
          color: blue;
        }
        `}
      </style>
    </>
  )
}

export default WarPerformance;
