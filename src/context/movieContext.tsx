import React, { createContext, useState, ReactNode } from "react";

// Define the type for the context value
interface MovieContextType {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  year: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  searchMovieBy: string;
  setSearchMovieBy: React.Dispatch<React.SetStateAction<string>>;
}

// Create a context with an initial value of `null` or a default
const MovieContext = createContext<MovieContextType | null>(null);

// Define the type for the provider's props
interface MovieProviderProps {
  children: ReactNode;
}

// Create the provider component
const MovieProvider: React.FC<MovieProviderProps>= ({ children }) => {
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<string>("movie");
  const [year, setYear] = useState<number>(2024);
  const [id, setId] = useState<string>("");
  const [searchMovieBy, setSearchMovieBy] = useState<string>("title");

  return (
    <MovieContext.Provider
      value={{
        title,
        setTitle,
        type,
        setType,
        year,
        setYear,
        id,
        setId,
        searchMovieBy,
        setSearchMovieBy,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };
