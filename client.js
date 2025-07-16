import chalk from "chalk";

export async function createReport(report){
   try{
       const response = await fetch("http://localhost:3000/api/reports", {
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(report)
       });
   
       if(!response.ok){
           throw new Error("Failed to create report");
       }
       const data = await response.json();
       console.clear();
       console.log(chalk.bold("-------------------------------------------------------------"));
       console.log(chalk.green.bold(`Report created successfully with id: ${data}`));
       console.log(chalk.bold("-------------------------------------------------------------"));
       return data;
   }catch(error){
       console.error("Error creating report:", error);
       throw error;
   }
}

export async function getAllReports(){
    try{
        const response = await fetch("http://localhost:3000/api/reports");
        const data = await response.json();
        console.clear();
        console.log(chalk.bold("-------------------------------------------------------------"));
        console.log(chalk.cyanBright.bold("Reports: "));
        console.log(chalk.bold("-------------------------------------------------------------"));
        data.forEach(report => {
            console.log(chalk.green.bold(`Field Code: ${chalk.blue.bold(report.fieldCode)}`));
            console.log(chalk.green.bold(`Location: ${chalk.blue.bold(report.location)}`));
            console.log(chalk.green.bold(`Threat Level: ${chalk.blue.bold(report.threatLevel)}`));
            console.log(chalk.green.bold(`Description: ${chalk.blue.bold(report.description)}`));
            console.log(chalk.green.bold(`Timestamp: ${chalk.blue.bold(report.timestamp)}`));
            console.log(chalk.green.bold(`Confirmed: ${chalk.blue.bold(report.confirmed)}`));
            console.log(chalk.bold("-------------------------------------------------------------"));
        });
        return data;
    }catch(error){
        console.error("Error getting reports:", error);
        throw error;
    }
}

export async function getHighReports(){
    try{
        const response = await fetch("http://localhost:3000/api/reports/high");
        const data = await response.json();
        console.clear();
        console.log(chalk.bold("-------------------------------------------------------------"));
        console.log(chalk.cyanBright.bold("High Reports: "));
        console.log(chalk.bold("-------------------------------------------------------------"));
        data.forEach(report => {
            console.log(chalk.green.bold(`Field Code: ${chalk.blue.bold(report.fieldCode)}`));
            console.log(chalk.green.bold(`Location: ${chalk.blue.bold(report.location)}`));
            console.log(chalk.green.bold(`Threat Level: ${chalk.blue.bold(report.threatLevel)}`));
            console.log(chalk.green.bold(`Description: ${chalk.blue.bold(report.description)}`));
            console.log(chalk.green.bold(`Timestamp: ${chalk.blue.bold(report.timestamp)}`));
            console.log(chalk.green.bold(`Confirmed: ${chalk.blue.bold(report.confirmed)}`));
            console.log(chalk.bold("-------------------------------------------------------------"));
        });
        return data;
    }catch(error){
        console.error("Error getting high reports:", error);
        throw error;
    }
}

export async function updateConfirmByID(id){
    try{
        const response = await fetch(`http://localhost:3000/api/reports/${id}/confirm`,
            {method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(!response.ok){
            throw new Error("Failed to update report");
        }

        console.clear();
        console.log(chalk.bold("-------------------------------------------------------------"));
        console.log(chalk.green.bold("Report updated successfully"));
        console.log(chalk.bold("-------------------------------------------------------------"));

    }catch(error){
        console.error("Error updating report:", error);
    }
}

export async function deleteReportByID(id){
    try{
        const response = await fetch(`http://localhost:3000/api/reports/${id}`,
            {method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(!response.ok){
            throw new Error("Failed to delete report");
        }

        console.clear();
        console.log(chalk.bold("-------------------------------------------------------------"));
        console.log(chalk.green.bold("Report deleted successfully"));
        console.log(chalk.bold("-------------------------------------------------------------"));

    }catch(error){
        console.error("Error deleting report:", error);
    }
}

const agent1 = {
    fieldCode: "1234",
    location: "Germany",
    threatLevel: 5,
    description: "he is an agent",
    timestamp: new Date().toISOString(),
    confirmed: true
}

const agent2 = {
    fieldCode: "1235",
    location: "USA",
    threatLevel: 2,
    description: "he is a terrorist",
    timestamp: new Date().toISOString(),
    confirmed: true
}

