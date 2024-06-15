
import React, { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";


interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface UserContextType {
  users: User[];
  loading: boolean;
  error: any; // Adjust error type as per your needs
}

// Create context and provide types for context value
export const UserContext = createContext<UserContextType>({
  users: [],
  loading: true,
  error: null,
});

// Define props type for UserProvider component
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]); // Specify User[] for users state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null); // Adjust error type as per your needs

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <UserContext.Provider value={{ users, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
