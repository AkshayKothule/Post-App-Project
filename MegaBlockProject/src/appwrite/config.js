import confi from '../confi/confi'

import { Client, ID , Storage , Databases , Query } from "appwrite";

export class Service{
    client=new Client();
    databases;
    buket;
    constructor(){
        this.client
            .setEndpoint(confi.appwriteUrl)
            .setProject(confi.appwriteProjectId)
        this.databases=new Databases(this.client);
        this.buket=new Storage(this.client);

    }

    //post releted oprations

    async createPost({title , slug , content , featuredImage , status , userId}){
        try{
            return await this.databases.createDocument(
                confi.appwriteDatabaseId,
                confi.appwriteCollectionId,
                slug,
                {
                    title ,
                    content,
                    featuredImage,
                    status,
                    userId,


                }


            )
        }catch(error){
            console.log("Appwrite service :: createPost :: error" , error);
        }

    }

    async updatePost(slug , {title , content , featuredImage , status}){
        try {
            return await this.databases.updateDocument(
                confi.appwriteDatabaseId,
                confi.appwriteCollectionId,
                slug,
                {
                    title ,
                    content,
                    featuredImage,
                    status,
                   
                }

            )

            
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error" , error);
            
        }

    }

    async deletePost(slug){
        try {

             this.databases.deleteDocument(
                confi.appwriteDatabaseId,
                confi.appwriteCollectionId,
                slug

            )
            return true;
            
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error" , error);
            return false;

            
        }
    }

    async getPost(slug){

        try {
            return await this.databases.getDocument(
                confi.appwriteDatabaseId,
                confi.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error" , error);
            return false;

            
        }

    }

    //query 

    async getPosts(quries=[Query.equal("status" , "active")]){
        try {
            return await this.databases.listDocuments(
                confi.appwriteDatabaseId,
                confi.appwriteCollectionId,
                quries,

            )
            
        } catch (error) {
            console.log("Appwrite Serivce :: getPosts :: error ", error);
            return false;
            
        }

    }

    //file upload Service
    async uploadService(file){
        try {
            return await this.buket.createFile(
                 confi.appwriteBucketId,
                 ID.unique(),
                 file
            )
            
        } catch (error) {
            console.log("Appwrite Serivce :: uploadService :: error ", error);
            return false;
            
        }

    }

    async deleteFile(fileId){
        try {
            await this.buket.deleteFile(
                confi.appwriteBucketId,
                fileId
            )
            return true;
            
        } catch (error) {
            console.log("Appwrite Serivce :: getPosts :: error ", error);
            return false;
            
        }

    }

    getfilePreview(fileId){
        return this.buket.getFilePreview(
            confi.appwriteBucketId,
            fileId
        )

    }


}


const service=new Service();
export default service;