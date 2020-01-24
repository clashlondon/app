import { useState } from 'react'
import moment from 'moment'

const processList = (list) => {

  return list.map(i => {
    let lastSeen = moment(i.lastSeen)
    delete i.tag
    delete i.clanChestPoints
    delete i['arena.id']
    delete i['arena.name']
    return {...i, lastSeen}
  })


}
const flattenObject = (ob) => {
	let toReturn = {};
	for (var i in ob) {
		if (!ob.hasOwnProperty(i)) continue;

		if ((typeof ob[i]) == 'object') {
			var flatObject = flattenObject(ob[i]);
			for (var x in flatObject) {
				if (!flatObject.hasOwnProperty(x)) continue;
				toReturn[i + '.' + x] = flatObject[x];
			}
		} else {
			toReturn[i] = ob[i];
		}
	}
	return toReturn;
}

const sortData = (items, key, alt) => {
  if (key === 'lastSeen') {
    return items.sort((a, b) => alt ? moment(a[key]).unix() - moment(b[key]).unix() : moment(b[key]).unix() - moment(a[key]).unix() )
  }
  return items.sort((a, b) => alt ? a[key] - b[key] : b[key] - a[key])
}

const ClanTable = (props) => {

  const processedMemberList = processList(props.memberList.map(m => flattenObject(m)))

  const [sort, setSort] = useState('score')
  const [alt, setAlt] = useState(false)
  const [data, setData] = useState(processedMemberList)

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
      <div className="table-responsive">
        <table className={'table table-sm'}>
          <thead>
            <tr>
              {Object.keys(data[0]).map((k, i) => <th key={i} className={sort === k ? 'active' : null} onClick={(() => clickSort(k))}>{k}</th>)}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((p, i) => {
              // let className = p.score < -1 ? 'bg-danger' : p.score <= 1 ? 'table-danger' : p.score >= 8 ? 'table-warning' : 'table-success'
              return (
                <tr key={i}>
                  {Object.keys(p).map((k, i) => {
                    if (k === 'lastSeen') return <td key={i}>{p[k].fromNow()}</td>
                    return <td key={i}>{p[k]}</td>
                  })}
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

export default ClanTable;
