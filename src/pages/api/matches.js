export default async(req, res) => {
    const token = process.env.API_TOKEN
    const response = await fetch(
        'https://api.football-data.org/v4/matches',
        {
            headers: {
                'X-Auth-Token': token
            }
    })
    const data = await response.json()
    res.status(200).json(data)
}