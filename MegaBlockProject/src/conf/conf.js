const conf={
    
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PEOJECT_ID),
    appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default conf
// const confi={
    
//     appwriteUrl:"https://cloud.appwrite.io/v1",
//     appwriteProjectId:"66fd47d20014d5bc73bf",
//     appwriteDatabaseId:"66ff51960034362ae917",
//     appwriteCollectionId:"66ff51bd002459928bd5",
//     appwriteBucketId:"66ff53ef001d2ef9c425"
// }
// console.log(confi.appwriteProjectId);
// export default confi