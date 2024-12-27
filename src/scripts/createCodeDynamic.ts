
let formateddArgs: string | undefined = undefined;
const args = process.argv.slice(2);
formateddArgs = args[0].replace("--", "");

if (formateddArgs.endsWith("s")) {
	formateddArgs =  formateddArgs.slice(0, -1);
} 

const nameClasse = formateddArgs.charAt(0).toUpperCase() + formateddArgs.slice(1);

export const dynamicClassService = `
import { I${nameClasse}Service, I${nameClasse}ServiceProps } from "./${formateddArgs}Interface"

export class ${nameClasse}Service implements I${nameClasse}Service {
    private readonly props: I${nameClasse}ServiceProps;

    constructor(props: I${nameClasse}ServiceProps) {
        this.props = props;
    }
}
`;

export const dynamicClassController = `
import { I${nameClasse}Controller, I${nameClasse}ControllerProps } from "./${formateddArgs}Interface"

export class ${nameClasse}Controller implements I${nameClasse}Controller {
    private readonly props: I${nameClasse}ControllerProps;

    constructor (props: I${nameClasse}ControllerProps) {
        this.props = props;
    }
}
`;

export const dynamicClassInterface = `
    
export interface I${nameClasse}Service {

}

export interface I${nameClasse}ServiceProps {

}

export interface I${nameClasse}Controller {
	
}

export interface I${nameClasse}ControllerProps {

}

`;

export const dynamicIndex = `
import { ${nameClasse}Controller } from "./${formateddArgs}Controller";
import { ${nameClasse}Service } from "./${formateddArgs}Service";
import { I${nameClasse}Controller, I${nameClasse}Service } from "./${formateddArgs}Interface";


export const ${formateddArgs}Service: I${nameClasse}Service = new ${nameClasse}Service({
	
});

export const ${formateddArgs}Controller: I${nameClasse}Controller = new ${nameClasse}Controller({
	
}); `;