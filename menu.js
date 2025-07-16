import { createReport, getAllReports, getHighReports, updateConfirmByID, deleteReportByID } from "./client.js";
import chalk from "chalk";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export async function menu(){
    console.clear();
    console.log(chalk.blue("Welcome to the menu"));
    console.log(chalk.green.bold("-------------------"));
    console.log(chalk.cyan("1. Create a report"));
    console.log(chalk.cyan("2. Get all reports"));
    console.log(chalk.cyan("3. Get high reports"));
    console.log(chalk.cyan("4. Update a report"));
    console.log(chalk.cyan("5. Delete a report"));
    console.log(chalk.green.bold("-------------------"));
    const choice = await new Promise(resolve => rl.question(chalk.blue("Enter your choice: "), resolve));
    console.log(chalk.green.bold("-------------------"));
    switch(choice){
        case "1":
            rl.question(chalk.blue(chalk.green.bold("Enter the field code: ")), async (fieldCode) => {
                rl.question(chalk.blue(chalk.green.bold("Enter the location: ")), async (location) => {
                    rl.question(chalk.blue(chalk.green.bold("Enter the threat level (1-5): ")), async (threatLevel) => {
                        rl.question(chalk.blue(chalk.green.bold("Enter the description: ")), async (description) => {
                            console.log(chalk.green.bold("Creating report..."));
                            const report = {
                                fieldCode: fieldCode,
                                location: location,
                                threatLevel: parseInt(threatLevel),
                                description: description,
                                timestamp: new Date().toISOString(),
                                confirmed: false
                            }
                            
                            await createReport(report);
                            rl.close();

                        });
                    });
                });
            });
            break;
        case "2":
            await getAllReports();
            rl.close();
            break;
        case "3":
            await getHighReports();
            rl.close();
            break;
        case "4":
            rl.question(chalk.blue(chalk.green.bold("Enter the field code: ")), async (fieldCode) => {
                await updateConfirmByID(fieldCode);
                rl.close();
            });
            break;
        case "5":
            rl.question(chalk.blue(chalk.green.bold("Enter the field code: ")), async (fieldCode) => {
                await deleteReportByID(fieldCode);
                rl.close();
            });
            break;
    }
}

