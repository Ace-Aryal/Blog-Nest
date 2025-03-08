// for appwrite database , uploading files and custom queries

import config from "../config/config";
import { Client, ID, Databases, Query, Storage } from "appwrite";

export class services {
  client = new Client();
  databases;
  storage; // bucket

  constructor() {
    this.client
      .setEndpoint(config.appwritreURL)
      .setEndpoint(config.appwritreProjectID);
    this.storage = new Storage(this.client);
    this.databases = new Databases(this.client);
  }

  // using slug as id
  async createPost({ title, slug, content, featuredImage, status, userID }) {
    try {
      return this.databases.createDocument(
        config.appwritreDatabaseID,
        config.appwritreCollectionID,
        {
          title,
          content,
          featuredImage,
          status,
          userID,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status, userID }) {
    try {
      return await this.databases.updateDocument(
        config.appwritreDatabaseID,
        config.appwritreCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,

        }
      )
    } catch (error) {
      throw error
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwritreDatabaseID,
        config.appwritreCollectionID,
        slug
      )
      return true
    } catch (error) {
      throw error
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwritreDatabaseID,
        config.appwritreCollectionID,
        slug
      )
    } catch (error) {
      throw error
    }

  }

  async getPosts(queries = Query.equal("status", "active")) {

    try {
      return this.databases.listDocuments(
        config.appwritreDatabaseID,
        config.appwritreCollectionID,
        queries // note : queries can also be written here in  array
      )
    } catch (error) {
      throw error
    }
  }

  // file upload service 

  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        config.appwritreBucketID,
        ID.unique(),
        file
      )
    } catch (error) {
      throw error

    }
  }

  async deleteFile(fileID) {
    try {
      await this.deleteFile(
        config.appwritreBucketID,
        fileID
      )
    } catch (error) {
      throw error
    }
  }

  getFilePreview(fileID) { // no async because it doesnt return promise
    return this.storage.getFilePreview(
      config.appwritreBucketID,
      fileID
    )
  }

}
