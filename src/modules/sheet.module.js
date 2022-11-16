const { GoogleSpreadsheet } = require('google-spreadsheet');

// Initialize the sheet - doc ID is the long id in the sheets URL
const doc = new GoogleSpreadsheet('1-xcTXVwKt-Ux5wXSiBjoa72lZDQ56dIdMeOmnodCJIM');
const creds = require('../google_key.json')

export async function getScores(){
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo(); // loads document properties and worksheets
    
    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle
    
    const cells = await sheet.getRows()
    return (cells.map(row => ({
        team: row._rawData[0],
        score: Number(row._rawData[1])
    })))
    
}

// (async ()=>{
//     main()
// })()