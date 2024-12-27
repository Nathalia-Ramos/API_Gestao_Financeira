import { exec } from "child_process";
import { dynamicClassService, dynamicClassController, dynamicClassInterface, dynamicIndex } from "./createCodeDynamic";
import fs from "fs";

let formateddArgs: string | undefined = undefined;

function formattedArgs() {
	const args = process.argv.slice(2);
	
	formateddArgs = args[0].replace("--", "");

	if (formateddArgs.endsWith("s")) {
		return formateddArgs.slice(0, -1);
	} else {
		throw new Error("O nome do arquivo deve ser no plural");
	}
}

const dynamicResourceName = formattedArgs();
const path = process.cwd() + "/src/useCases";

const command = `cd ${path} && mkdir ${formateddArgs} && cd ./${formateddArgs} && mkdir validate && touch ${dynamicResourceName}Controller.ts && touch ${dynamicResourceName}Service.ts && touch ${dynamicResourceName}Interface.ts && touch index.ts`;

exec(command, (error, stdout, stderr) => {
	if (error) {        
		console.error(`erro: ${error.message}`);
		return;
	}
	if (stderr) {
		console.error(`erro padrão: ${stderr}`);
		return;
	}

	console.log(`Arquivo ${formateddArgs} criado com sucesso.`);
	console.log(`Arquivo ${dynamicResourceName}Controller.ts criado com sucesso.`);
	console.log(`Arquivo ${dynamicResourceName}Service.ts criado com sucesso.`);
	console.log(`Arquivo ${dynamicResourceName}Interface.ts criado com sucesso.`);
	console.log("Arquivo index.ts criado com sucesso.");
    
	fs.writeFileSync(`${path}/${formateddArgs}/${dynamicResourceName}Controller.ts`, dynamicClassController);
	fs.writeFileSync(`${path}/${formateddArgs}/${dynamicResourceName}Service.ts`, dynamicClassService);
	fs.writeFileSync(`${path}/${formateddArgs}/${dynamicResourceName}Interface.ts`, dynamicClassInterface);
	fs.writeFileSync(`${path}/${formateddArgs}/index.ts`, dynamicIndex);
});
        