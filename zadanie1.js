const express = require('express');
const app = express();

app.get('/:firstNumber/:secondNumber?', (req,res) => {
    const {firstNumber, secondNumber} = req.params;
    const sum = Number(firstNumber) + Number(secondNumber);

    res
        .send(`Wynik dodawania: ${sum}`);
});

app.listen(3000);
