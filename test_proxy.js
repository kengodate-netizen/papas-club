const fs = require('fs');

async function testFetch() {
    try {
        const timestamp = new Date().getTime();
        const rssTarget = encodeURIComponent(`https://note.com/lush_willet4703/rss?t=${timestamp}`);
        
        // test rss2json cache busting
        const r2j = `https://api.rss2json.com/v1/api.json?rss_url=${rssTarget}&t=${timestamp}-proxy`;
        console.log("Fetching rss2json:", r2j);
        
        const resR2j = await fetch(r2j);
        const r2jJson = await resR2j.text();
        fs.writeFileSync('test_r2j.json', r2jJson);
        console.log("Saved test_r2j.json");
        
        // test corsproxy.io
        const corsT = `https://corsproxy.io/?${encodeURIComponent(`https://note.com/lush_willet4703/rss?t=${timestamp}`)}`;
        console.log("Fetching corsproxy:", corsT);
        
        const resCors = await fetch(corsT);
        const corsText = await resCors.text();
        fs.writeFileSync('test_cors.xml', corsText);
        console.log("Saved test_cors.xml");
        
    } catch(err) {
        console.error(err);
    }
}
testFetch();
