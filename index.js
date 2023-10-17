import express from "express";
import axios from "axios";
import bodyParser from "body-parser";


const app=express();
const port=3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
var result;

app.get("/",async (req,res)=>{
    try{
        const response=await axios.get("https://sudoku-api.vercel.app/api/dosuku");
        result=response.data;
        console.log(result.newboard.grids[0].solution);
        res.render("index.ejs",{grid: result.newboard.grids[0], display : true});
    }
    catch(error){
        console.log(error);
    }
    //res.render("index.ejs");
});
app.post("/submit",(req,res)=>{
    console.log("Answer sent");
    console.log(req.body);
    res.render("index.ejs",{answer : req.body, grid:result.newboard.grids[0], display: false});
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});