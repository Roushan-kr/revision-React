const config={
    appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    bucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    productID: String(import.meta.env.VITE_APPWRITE_PRODUCT_ID),
    databaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    collectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
}

export default config