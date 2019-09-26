// import { stringify } from '@angular/core/src/util';

export interface IPanelComponentService{
    GG(name: string): boolean;
}

export interface IUserModel{
    FirstName: string,
    LastName: string,
    Age: number,
    GetFullName: () => string;
}

export class UserName implements IUserModel{
    FirstName: string;    
    LastName: string;
    Age: number;
    GetFullName(): string
    {
        return this.FirstName.concat(" ", this.LastName);
    }
}