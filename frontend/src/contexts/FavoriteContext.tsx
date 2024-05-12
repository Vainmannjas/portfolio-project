import { ReactNode, createContext, useContext, useState } from "react"


interface IFavoriteContext {
  favorites: number[]
  addFavorite: (id: number) => void
}

export const FavoriteContext = createContext<IFavoriteContext>({} as IFavoriteContext)

export const FavoriteProvider = ({ children }: { children: ReactNode}) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const addFavorite = (id: number) => {
    setFavorites(prevFavorites => [...prevFavorites, id]);
  }
  
  return (
    <FavoriteContext.Provider value={{favorites, addFavorite}}>
      { children }
    </FavoriteContext.Provider>
  )
}

export const useFavoriteContext = () => useContext(FavoriteContext);

