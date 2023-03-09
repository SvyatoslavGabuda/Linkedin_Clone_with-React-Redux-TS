export interface Standard {
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface ChatMessage extends Standard {
  content: string;
  UserId: string;
  User: User;
}

export interface User extends Standard {
  firstname: string;
  last_name: string;
  linkedinId: string;
  linkedinProPic: string;
}

export interface Room extends Standard {
  name: string;
}
