// Home.js
"use client";
import React, { useEffect, useState } from 'react';
import Header from "./components/header";  // Ensure correct casing if filesystem is case-sensitive
import Footer from "./components/footer";
import Body from "./components/body";

export default function Home() {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
      name: '',
      status: '',
      species: '',
      type: '',
      gender: ''
  });

  // Function to update filters based on search input
    const handleSearch = (searchTerm: string) => {
      setFilters(prevFilters => ({
        ...prevFilters,
        name: searchTerm
      }));
      setPage(1);
      // Reset to page 1 whenever the search term changes
    };
 
  return (
    <div>
    <Header setSearchTerm={handleSearch} />
      <Body filters={filters} />
      <Footer />
    </div>
    );
}
