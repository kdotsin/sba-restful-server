import axios from "axios";

const apiKey = process.env.OMDB_API_KEY;
const baseUrl = process.env.OMDB_BASE_URL;

export async function searchMovie(req, res) {
  const searchTerm = req.query.title;

  if (!searchTerm) {
    return res.status(400).json({ error: 'failed to retrieve search term' });
  }

  try {
    const response = await axios.get(baseUrl, {
      params: {
        s: searchTerm,
        apikey: apiKey,
      }
    });

    res.status(200).json(response.data);
  } catch (e) {
    console.error('did not worrk', e.message)
    res.status(500).json({ error: 'failed to find movie' });
  }
}