import React from 'react'
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from 'react';

export default function SearchBar({ placeholder, data }) {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.login.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <div className="search" >
            <div className='searchInputs' >
                <input
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter} />
                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                        <SearchIcon sx={{ color: "black" }} />
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput} sx={{ color: "black" }} />
                    )}
                </div>
            </div>
            {filteredData.length != 0 && (<div className='dataResult'>
                {filteredData.slice(0, 15).map((value, key) => {
                    return (<a className='dataItem' href={value.html_url} target="_blank"> <p>{value.login}
                    </p>
                    </a>);
                })}
            </div>)}
        </div>
    );
}
