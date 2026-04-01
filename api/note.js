export default async function handler(req, res) {
  try {
    const noteResponse = await fetch('https://note.com/api/v2/creators/lush_willet4703/contents?kind=note', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (!noteResponse.ok) {
      return res.status(noteResponse.status).json({ error: 'Failed to fetch from Note' });
    }

    const data = await noteResponse.json();
    
    // Set CORS headers just in case
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=3600');
    
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
