// SearchContext.tsx
import React, { createContext, FC, useContext, useState } from 'react';
import { IProduct } from '../types/product.interface';

interface SearchContextType {
    products: IProduct[];
    setProducts: (products: IProduct[]) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: FC = ({ children }) => {
    const [products, setProducts] = useState<IProduct[]>([]);

    return (
        <SearchContext.Provider value={{ products, setProducts }}>
            {children}
        </SearchContext.Provider>
    );
}

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
}
