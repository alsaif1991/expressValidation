
import express from "express"
import { PReson } from "./types/person";
import { IGRADE } from "./types/grade";
import { ITACE } from "./types/trace";
const port = 4000
const app = express()
app.use(express.json());
const preson:PReson[]= []; 
const grade1:IGRADE[]= []; 
const trace:ITACE[]= []; 

app.get("/names",(req,res)=>{
return res.json(preson)
})
app.post("/names",(req,res)=>{ 
const newpreson= req.body as PReson
preson.push(newpreson)
res.send(`person with name as added ` )

})


app.put("/names/:id",(req,res)=>{
const upddated= req.params as PReson
const updatdedlist = req.params.id
for(let i=0 ;i<preson.length;i++)
if(preson[i].id===updatdedlist){
    preson[i]=upddated
}

res.json({maseege:'name updated'})
})
app.delete("/names/:id",(req,res)=>{
    const upddated= req.params as PReson
    const updatdedlist = req.params.id
    for(let i=0 ;i<preson.length;i++)
    if(preson[i].id!==updatdedlist){
        preson[i]=upddated
    }
    
    res.json({
    
        maseege:'Name Updated'
    })
    })
/////////Q2



app.get("/grades",(req,res)=>{
    return res.json(preson)
    })
    
    app.post("/grades",(req,res)=>{
    const newgrade= req.body as IGRADE
    grade1.push(newgrade)
    res.send(`added ` )

    })

    app.put("/grades/:id",(req,res)=>{
    const upddated= req.params as IGRADE
    const updatdedlist = req.params.id
    for(let i=0 ;i<preson.length;i++)
    if(grade1[i].id===updatdedlist){
        grade1[i]=upddated
    }
    
     res.json({
                 maseege:'grade updated'
          })
              })
    app.delete("/grades/:id",(req,res)=>{
        const deleted= req.params as IGRADE
        const updatdedlist = req.params.id
        for(let i=0 ;i<preson.length;i++)
        if(grade1[i].id!==updatdedlist){
            grade1[i]=deleted
        }
        
        res.json({maseege:'Cleard'})
        })
    ////// Q3

    app.get("/trace",(req,res)=>{
        return res.json(preson)
        })
        
        app.post("/trace",(req,res)=>{
            
        const newtrace= req.body as ITACE
        trace.push(newtrace)
        res.send(`trace added ` )
        
        })
        
        
        app.put("/trace/:ID",(req,res)=>{
        const upddated= req.params as ITACE
        const updatdedlist = req.params.ID
        for(let i=0 ;i<trace.length;i++)
        if(trace[i].ID===updatdedlist){
            trace[i]=upddated}
        
        res.json({maseege:'Trace finish'
        })})
        app.delete("/trace/:ID",(req,res)=>{
            const deleted= req.params as ITACE
            const updatdedlist = req.params.ID
            for(let i=0 ;i<trace.length;i++)
            if(trace[i].ID!==updatdedlist){
                trace[i]=deleted}
            res.json({maseege:'Trace deleted'})
            })
//search 

            app.get("trace/:title",(req,res)=>{
            const search= req.params as ITACE
            const updatdedlist = req.params.title
            for(let i=0 ;i<trace.length;i++)
            if(trace[i].ID===updatdedlist){
            trace[i]=search }})


app.listen(port,()=>{
console.log(`Working on  ${port}`)
})
