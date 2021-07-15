import { useState } from "react";
const SearchBar = ({ onFormSubmit }) => {
    const [query, setQuery] = useState('');
    const [form, setForm] = useState({});


    const onFormSubmitHandler = e => {
        e.preventDefault();
        onFormSubmit(query);
    };


    return (
        <div className={"searchbar ui segment"}>
            <form onSubmit={onFormSubmitHandler} className={"ui form"}>
                <div className={"field"}></div>
                <label>Video Search</label>
                <input onChange={e => setQuery(e.target.value)} value={query} type="text"></input>
            </form>
        </div>
    )
}

export default SearchBar;