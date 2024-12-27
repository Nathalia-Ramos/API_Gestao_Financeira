
import { UserController } from "./userController";
import { UserService } from "./userService";
import { IUserController, IUserService } from "./userInterface";


export const userService: IUserService = new UserService({
	
});

export const userController: IUserController = new UserController({
	
}); 