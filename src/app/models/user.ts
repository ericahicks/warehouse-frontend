export class User {
    id: number;
    username: string;
    password: string;
    email: string;
    permissions: Array<number>;

    constructor(id = 0, username = 'user', password = 'pwd', email = 'fake@email.com', permissions = []) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.permissions = permissions;
    }
}