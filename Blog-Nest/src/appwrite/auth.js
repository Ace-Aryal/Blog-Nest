// Auth for Our App

// this appwrite auth can be used for any project just copy and paste but read docs for latest services 

import config from "../config/config";

import { Client, Account, ID } from "appwrite"; // ID gives unique id

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(config.appwritreURL)
      .setEndpoint(config.appwritreProjectID);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, username }) {
    try {
      const userAccount = await this.createAccount(
        ID.unique(),
        email,
        password,
        username
      ); // this parameter structure is defined in the docmentation

      if (!userAccount) {


        return
      }
      this.login({ email, password })
      return userAccount
      // if the account is created log them in automatically 


    } catch (error) {
      throw error;
    }
  }

  async login({ email, password, username }) {
    try {
      await this.account.createEmailPasswordSession(email, password)
    } catch (error) {
      throw error
    }
  }

  async getCurrentUser() {
    try {

      return await this.account.get()
    } catch (error) {
      throw error
    }

    return null
  }

  async logout() {
    try {
      await this.account.deleteSessions()
    } catch (error) {
      throw error
    }
  }
}

const authService = new AuthService();

export default authService;
