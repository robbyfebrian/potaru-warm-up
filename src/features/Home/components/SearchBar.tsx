'use client';

import React , { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
    onSearch: (query: string) => void;
    placeholder?: string;
}

const SearchBar = ({ onSearch, placeholder = "Search..." }: SearchBarProps) => {
    const [query, setQuery] = useState<string>("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSearch} className="flex justify-center items-center space-x-2 pb-8">
            <Input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="text-white"
            />
            <Button type="submit" variant="secondary">
                Search
            </Button>
        </form>
    );
}

export default SearchBar;