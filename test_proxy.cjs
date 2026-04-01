const fs = require('fs');

async function testFetch() {
    try {
        const timestamp = new Date().getTime();
        
        // test corsproxy.io
        const corsT = `https://corsproxy.io/?${encodeURIComponent(`https://note.com/lush_willet4703/rss?t=${timestamp}`)}`;
        console.log("Fetching corsproxy:", corsT);
        
        const resCors = await fetch(corsT);
        console.log("Status:", resCors.status, resCors.statusText);
        const corsText = await resCors.text();
        fs.writeFileSync('test_cors.xml', corsText);
        console.log("Saved test_cors.xml, length:", corsText.length);
        console.log("Sample:", corsText.substring(0, 100));
        
    } catch(err) {
        console.error(err);
    }
}
testFetch();
