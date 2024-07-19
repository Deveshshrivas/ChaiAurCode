import express from 'express';

const app = express();

app.get('/',(req, res) =>{
    res.send('Server is ready');
});
app.get("/jokes",(req,res)=>{
    const jokes = [
        { id: 1, title: "The Unchanging Truth", content: "Why did the const variable go to therapy? Because it was feeling stuck in its ways!"},
        { id: 2, title: "Immutable Puns", content: "Why did the const variable go on a date? Because it was looking for a constant companion!"},
        { id: 3, title: "Variable Anxiety", content: "Why did the const variable go to the doctor? It was feeling a little 'unchangeable'!"},
        { id: 4, title: "Code Conundrum", content: "Why did the developer use a const variable? Because they wanted to make sure their code was set in stone!"},
        { id: 5, title: "Math Mayhem", content: "Why did the const variable go to math class? To learn about the constants of change!"},
        { id: 6, title: "Naming Conventions", content: "Why did the developer name their const variable 'UNCHANGEABLE'? Because it was a constant reminder!"},
        { id: 7, title: "Debugging Dilemma", content: "Why did the const variable cause a debugging issue? Because it was stuck on a constant loop!"},
        { id: 8, title: "Code Review", content: "Why did the code reviewer reject the const variable? Because it was too rigid!"},
        { id: 9, title: "Variable Vexation", content: "Why did the developer get frustrated with the const variable? Because it was unyielding!"},
        { id: 10, title: "Programming Puns", content: "Why did the const variable go to the gym? To get some constant improvement!"},
      ];
      res.send(jokes);
});



const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server at http://localhost:${PORT}`)
});