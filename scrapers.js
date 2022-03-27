const puppeteer = require('puppeteer-extra');
const pluginStealth = require('puppeteer-extra-plugin-stealth');
puppeteer.use(pluginStealth());

async function scrapeApt(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage(); 
    
    await page.goto(url);
    // await page.waitForNavigation();// new code test 

    const [el] = await page.$x('/html/body/div[1]/div[5]/div/div/div[1]/div[1]/div[4]/ul/li[1]/article/div[1]/div[2]/div');
    const txt = await el.getProperty('textContent');
    const rawTxt= await txt.jsonValue();
    
    console.log({rawTxt});
    browser.close();

}

scrapeApt('https://www.zillow.com/thousand-oaks-ca-91320/rentals/?searchQueryState=%7B%22pagination%22%3A%7B%7D%2C%22mapBounds%22%3A%7B%22west%22%3A-119.04904190820312%2C%22east%22%3A-118.83755509179687%2C%22south%22%3A34.11013736893281%2C%22north%22%3A34.251579277350416%7D%2C%22regionSelection%22%3A%5B%7B%22regionId%22%3A96351%2C%22regionType%22%3A7%7D%5D%2C%22isMapVisible%22%3Atrue%2C%22filterState%22%3A%7B%22fsba%22%3A%7B%22value%22%3Afalse%7D%2C%22fsbo%22%3A%7B%22value%22%3Afalse%7D%2C%22nc%22%3A%7B%22value%22%3Afalse%7D%2C%22fore%22%3A%7B%22value%22%3Afalse%7D%2C%22cmsn%22%3A%7B%22value%22%3Afalse%7D%2C%22auc%22%3A%7B%22value%22%3Afalse%7D%2C%22fr%22%3A%7B%22value%22%3Atrue%7D%2C%22ah%22%3A%7B%22value%22%3Atrue%7D%2C%22mp%22%3A%7B%22max%22%3A2400%7D%2C%22price%22%3A%7B%22max%22%3A634652%7D%7D%2C%22isListVisible%22%3Atrue%2C%22mapZoom%22%3A12%7D');
