const express = require('express');
const {readFile, writeFile} = require('node:fs/promises');


const app = express();

app.get('/name/set/:name', async (req,res) => {
    const nameSaved = req.params.name;
    await writeFile('files/name.txt', nameSaved, 'utf-8');
    res
        .send(`Hi, ${nameSaved}!`);
});

app.get('/name/show', async (req,res) => {
    const previousName = await readFile('files/name.txt', 'utf-8');
    res
        .send(`Previous name: ${previousName}`);
});

app.get('/name/check', async (req, res) => {
    try {
        await readFile('files/name.txt');
        res.send(`The name was already used.`)

    } catch (e) {
        res.send('There is no name saved.');
    }
});


app.listen(3000);
