export declare interface floatingTriangleInterface {
  size: string;
  delay: number;
  left: string;
}

export declare interface inputInterface {
  name: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export declare interface userInterface {
  name?: string;
  email?: string;
  isVerified?: boolean;
  verificationToken?: string;
  verificationTokenExpiresAt?: Date;
  _id?: string;
  lastLogin?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export declare interface loginInterface {
  name: string;
  email: string;
  password: string;
}



export declare interface cardInterface {
task: { id: string; content: string };
index: number;
}

export declare interface columnInterface {
column: { id: string; title: string; cardIds: string[] };
cards: { id: string; content: string }[];
}

export declare interface boardInterface {
    cards: {
      [key: string]: {           
        id: string;     
        content: string;     
      };
    };
    columns: {
      [key: string]: {   
        id: string;    
        title: string;   
        cardIds: string[]; 
      };
    };
    columnOrder: string[];
  }
  
