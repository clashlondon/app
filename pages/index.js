import { ClanData, WarLog } from '../api'

import WarPerformance from '../components/WarPerformance'

import { Button } from "shards-react";
import moment from 'moment';

const HomePage = (props) => (
  <>
    <WarPerformance {...props.warlog}/>
  </>
)

HomePage.getInitialProps = async function() {
  const warlog = await WarLog()
  return { warlog }
}

export default HomePage
