// Simple storage interface - no database required for this landing page
export interface IStorage {
  // Add storage methods if needed in the future
}

export class MemStorage implements IStorage {
  constructor() {
    // Simple in-memory storage for demo purposes
  }
}

export const storage = new MemStorage();
