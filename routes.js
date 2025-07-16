import express from "express";
import { createReport, getAllReports, updateReport, deleteReport } from "./services.js";

const router = express.Router();

router.post("/reports", async (req, res) => {
    
    try{
        
        const report = req.body;
    
        const result = await createReport(report);
    
        res.status(201).json(result);

    }catch(error){
        res.status(500).json({error: error.message});
    }
});

router.get("/reports", async (req, res) => {
    try{
        const result = await getAllReports();
        
        res.status(200).json(result);

    }catch(error){
        res.status(500).json({error: error.message});
    }
});

router.get("/reports/high", async (req, res) => {
    try{
        const result = await getAllReports();
        const highReports = result.filter(report => report.threatLevel >= 4 );
        res.status(200).json(highReports);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});


router.put("/reports/:id/confirm", async (req, res) => {
    try{
        const id = req.params.id;

        const result = await updateReport(id);

        res.status(200).json(result);

    }catch(error){
        res.status(500).json({error: error.message});
    }

})

router.delete("/reports/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const result = await deleteReport(id);
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({error: error.message});
    }
})

export default router;