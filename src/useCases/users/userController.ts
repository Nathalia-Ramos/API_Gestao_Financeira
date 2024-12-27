
import { IUserController, IUserControllerProps } from "./userInterface"

export class UserController implements IUserController {
    private readonly props: IUserControllerProps;

    constructor (props: IUserControllerProps) {
        this.props = props;
    }
}
