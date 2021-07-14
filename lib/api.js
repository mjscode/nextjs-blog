export async function getBitCoinLatest() {
    // Instead of the file system,
    // fetch post data from an external API endpoint

    return  await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => res.json())
        .then(data =>{
            let coins = [];
            for ( const [key,coin] of Object.entries(data.bpi)){
                let latest = {
                    currency: coin.code,
                    rate: coin.rate,
                    description:coin.description
                }
                coins.push(latest)
            }
            return coins
        })
  }