import { WarLog, Clan } from '../api'

import WarPerformance from '../components/WarPerformance'

const ClanPage = (props) => {
  return (
    <>
      <header className="p-4">
        <h1>Warlog</h1>
      </header>
      <WarPerformance clan={props.clan} {...props.warlog}/>
    </>
  )
}

ClanPage.getInitialProps = async function() {
  const warlog = await WarLog()
  warlog.items.reverse() // flip order or wars oldest first
  const clan = await Clan()
  return { warlog, clan }
}

export default ClanPage
