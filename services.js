
import Collection from "./mongoDB.js";


export async function createReport(report) {
    try{
        const result = await Collection.insertOne(report);
        return result.insertedId;

    }catch(error){
        console.error("Error creating report:", error);
        throw error;
    }
}

export async function getAllReports(){
    try{
        const result = await Collection.find({}).toArray();
        return result;
    }catch(error){
        console.error("Error getting all reports:", error);
        throw error;
    }
}

export async function updateReport(id){
    try{
        const result = await Collection.updateOne({fieldCode:`${id}`}, {$set: {confirmed: true}})
        return result
    }catch(error){
        console.error("Error updating report:", error);
        throw error;
    }
}

export async function deleteReport(id){
    try{
        const result = await Collection.deleteOne({fieldCode:`${id}`})
        return result
    }catch(error){
        console.error("Error deleting report:", error);
        throw error;
    }
}




