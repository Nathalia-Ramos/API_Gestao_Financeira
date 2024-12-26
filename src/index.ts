import "dotenv/config";
import { AppDataSource } from "./infra/dataSource";
import { app } from "./server";

AppDataSource.initialize()
    .then(() => {
        console.log("Conexão com banco de dados realizada com sucesso.");  
		app.listen(process.env.PORT, () => console.log(`O servidor esta rodando no processo ${process.pid} na porta: ${process.env.PORT}.`));
    }).catch(() => {
        console.error("Erro ao conectar com banco de dados");
    });