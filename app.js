const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.get('/', async (request, response) => {
  response.sendFile(__dirname + "/public/index.html");
});

app.post('/', async (request, response) => {
  const url = request.body.url;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  });
  await page.goto(url);
  await page.screenshot({ path: __dirname + '/public/screenshot.png', fullPage: true })
  browser.close();
  response.sendFile(__dirname + "/public/screenshot.html");

});

app.use(express.static('public')); 

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running...");
});
