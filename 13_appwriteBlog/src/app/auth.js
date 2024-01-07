import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  //   used constructor to save space before class instance created
  constructor() {
    this.client
      .setEndpoint(config.appwriteURL) // Your API Endpoint
      .setProject(config.productID); // Your project ID
    this.account = new Account(this.client);
  }
  async createUser({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // method after crreating user account
        // eg: we login him after a sucessfull signUp
        return await this.loginUser({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async loginUser({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
  }
  async logoutUser(){
    try {
        return await this.account.deleteSessions()
    } catch (error) {
        
    }
  }
}

const authService = new AuthService();

export default authService;
