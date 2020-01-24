import { WarLog, CurrentWar, Clan } from '../api'
import WarPerformance from '../components/WarPerformance'

const WarPage = (props) => (
  <>
    <header className="p-4">
      <h1>War Stats</h1>
    </header>
    <WarPerformance clan={props.clan} {...props.warlog}/>
  </>
)

WarPage.getInitialProps = async function() {
  const warlog = await WarLog()
  // const currentwar = await CurrentWar()
  const clan = await Clan()
  // warlog.items.push(currentwar)
  return { warlog, clan }
}

export default WarPage
