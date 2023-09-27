export default async(req, res) => {
    const token = process.env.API_TOKEN
    const id = req.query
    const response = await fetch(
        `http://api.football-data.org/v4/competitions/id=${id}/teams`, 
        {
            headers: {
            'X-Auth-Token': token
        }
    })

    const data = await response.json()
    res.status(200).json(data)
}