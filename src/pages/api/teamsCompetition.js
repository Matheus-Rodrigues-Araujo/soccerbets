export default async(req, res, id) => {
    const token = process.env.API_TOKEN
    const response = await fetch(
        `http://api.football-data.org/v4/competitions/${id}/teams`, 
        {
            headers: {
            'X-Auth-Token': token
        }
    })

    const data = await response.json()
    res.status(200).json(data)
}