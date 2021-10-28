export class User {
    username: string;
    ime: string;
    prezime: string;
    userType: string;
    isLoggedIn: boolean;
}

export enum UserRole {
    Admin = 'Admin',
    User = 'User'
}