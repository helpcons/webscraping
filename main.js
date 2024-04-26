const puppeteer = require('puppeteer')

console.log("Bot com informações do mercado!")

async function roboSelic() {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto('https://www.bcb.gov.br/controleinflacao/historicotaxasjuros')
    // await page.screenshot({ path: 'selic.png' })

    const textSelic = await page.waitForSelector('tbody > tr:nth-child(1) > td:nth-child(5)')
    const selic = await textSelic?.evaluate(el => el.textContent)

    console.log(selic)

    await browser.close()
}

async function roboINCC() {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto('https://portal.fgv.br/noticias/incc-m-resultados-2024')
    // await page.screenshot({ path: 'selic.png' })

    const textINCC = await page.waitForSelector('table > tbody > tr:nth-child(1) > td:nth-child(3)')
    const incc = await textINCC?.evaluate(el => el.textContent)

    console.log(incc)

    await browser.close()
}

roboSelic()
roboINCC()

// usando $() para verifcar toda a linha do html