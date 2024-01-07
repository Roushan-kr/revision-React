import { Account, Client, Databases, ID, Query, Storage } from "appwrite";
import config from "../config/config";

export class Services {
  client = new Client();
  database;
  bucket;
  constructor() {
    this.client
      .setEndpoint(config.appwriteURL) // Your API Endpoint
      .setProject(config.productID); // Your project ID
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, fetureImg, status, userId }) {
    try {
      return await this.database.createDocument(
        config.databaseID,
        config.collectionId,
        slug,
        {
          title,
          content,
          fetureImg,
          status,
          userId,
        }
      );
    } catch (error) {
      throw error;
    }
  }
  async updatePost(slug, { title, content, fetureImg, status }) {
    try {
      await this.database.updateDocument(
        config.databaseID,
        config.collectionId,
        slug,
        {
          title,
          content,
          fetureImg,
          status,
        }
      );
      return true;
    } catch (error) {
      // throw error
      return false;
    }
  }
  async delatePost(slug) {
    try {
      return await this.database.deleteDocument(
        config.databaseID,
        config.collectionId,
        slug
      );
    } catch (error) {
      throw error;
    }
  }
  async getPost(slug) {
    try {
      return await this.database.getDocument(
        config.databaseID,
        config.collectionId,
        slug
      );
    } catch (error) {
      throw error;
    }
  }
  async getActiveUserPost() {
    try {
      return await this.database.listDocuments(
        config.databaseID,
        config.collectionId,
        [Query.search(["active","ispublish"])]
      );
    } catch (error) {
      throw error;
    }
  }

//   file uplode service
async uplodeFile(file){
    try {
        return await this.bucket.createFile(config.bucketId,ID.unique(),file)
    } catch (error) {
        throw error
    }
}
async delFile(fileId){
    try {
        return await this.bucket.deleteFile(config.bucketId,fileId)
    } catch (error) {

       throw error 
    }
}
getFilePreview(slug){
    try {
        return this.bucket.getFilePreview(config.bucketId,slug)
    } catch (error) {
        throw error
    }
}
}

const services = new Services();
export default services;
