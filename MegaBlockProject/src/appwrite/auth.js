import confi from '../confi/confi.js'

import { Client, Account, ID } from "appwrite";

export class AuthService{
    client=new Client();
    account;
    constructor(){
        this.client
            .setEndpoint(confi.appwriteUrl)
            .setProject(confi.appwriteProjectId)
        this.account=new Account(this.client);
    }
    async createAccount({email , password  , name}){
        try{
            const userAccount=await this.account.create(ID.unique() , email , password , name);

            if(userAccount){
                //call another method
                return this.login({email , password})
            }else{
                return userAccount;
            }

        }catch(error){
            throw error;
        }

    }

    async login({email , password}){
        try{
            return await this.account.createEmailPasswordSession(email , password);


        }catch(error){
            throw error;

        }
    }

    async getCurrentUser(){
        try{
            //logged in 
            return await this.account.get()

        }catch(error){
            console.log("Appwrite service :: getCurrentUser :: error" , error);

        }

        return null;
    }
    async logout(){
        try{
             await this.account.deleteSessions();

        }catch(error){
            console.log("Appwrite service :: logOut :: error" , error);

        }
    }
}

const authService=new AuthService();
export default authService