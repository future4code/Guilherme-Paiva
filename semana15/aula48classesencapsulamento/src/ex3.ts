import { FileManager } from "./FileManager";

class Bank {
  private accounts: UserAccount[];
  private fileManager: FileManager;

  constructor(accounts: UserAccount[], fileManager: FileManager) {
    this.accounts = accounts;
    this.fileManager = fileManager;
  }

  getAccounts(): any {
    return this.accounts
  }

  getFileManager(): any {
    return this.fileManager
  }
}