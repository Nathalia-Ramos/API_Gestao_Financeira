
import { IUserService, IUserServiceProps } from "./userInterface"

export class UserService implements IUserService {
    private readonly props: IUserServiceProps;

    constructor(props: IUserServiceProps) {
        this.props = props;
    }
}
