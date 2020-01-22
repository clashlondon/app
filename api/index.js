import fetch from 'isomorphic-unfetch';

const headers = {
  authorization: `Bearer ${process.env.CLASH_ROYALE_API_KEY}`
}

export async function ClanData () {
  const res = await fetch(`https://api.clashroyale.com/v1/clans/%238G290Q0`, { headers })
  const data = await res.json()
  return data
}

export async function WarLog () {
  const res = await fetch(`https://api.clashroyale.com/v1/clans/%238G290Q0/warlog`, { headers })
  const data = await res.json()
  return data
}
