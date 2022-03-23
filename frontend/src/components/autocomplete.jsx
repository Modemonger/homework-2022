import React, { useEffect, useState, useRef } from "react";
import { FaCity, FaPlane, FaCar, FaSearch } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import Dropdown from './Dropdown';
import TextInput from './TextInput';
import Selector from './Selector';

// sorry about quality of code... trying to improve as much as posible...

const Autocompleate = () => {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [search, setSearch] = useState("");
    const [search2, setSearch2] = useState("");
    const [dropoffselect, setDropoffselect] = useState(0);

    useEffect(() => {
        const fetchdata = async () => {
            const response = await fetch(`http://localhost:3001/autocomplete/?input=${search.toLowerCase()}`);
            const items = await response.json();
            console.log(items.responseBody.filteredEvents);
            setData(items.responseBody.filteredEvents)
        };
        if (search) fetchdata();
    }, [search])

    useEffect(() => {
        const fetchdata = async () => {
            const response = await fetch(`http://localhost:3001/autocomplete/?input=${search2.toLowerCase()}`);
            const items = await response.json();
            console.log(items.responseBody.filteredEvents);
            setData2(items.responseBody.filteredEvents)
        };
        if (search2) fetchdata();
    }, [search2])

    const notify = () => {
        console.log(search, search2, dropoffselect)
        if (!search && (dropoffselect == 0 || dropoffselect == 1)) {
            toast.error(<div>Please select a pickup location.</div>)
        } else if(search && !search2 && dropoffselect == 1) {
            toast.error(<div>Please select a dropoff location.</div>)
        } else if(!search && !search2){
            toast.error(<div>Please add both fields.</div>)
        }
        else toast.success(<div>Success!</div>)
    };

    return (
        <div className="searchContainer">
            <Selector setDropoffselect = {setDropoffselect}/>
            <div className="flex-container">

                <div className="search">
                    <TextInput search = {search} setSearch = {setSearch} data = {data}/>
                    {
                        data.length > 0 && search === '' ? <></> : 
                        <Dropdown data = {data} search = {search}/>
                    }
                </div>

                {
                    dropoffselect != 1 ? <></> : 
                        <div className="search">
                            <TextInput search = {search2} setSearch = {setSearch2} data = {data2}/>
                            {
                              data2.length > 0 && search2 === '' ? <></> : 
                                <Dropdown data = {data2} search = {search2}/>
                            }
                        </div>
                }
            </div>
            <button className="buttonstyle" onClick={event => {event.preventDefault(); notify()}}><FaSearch className="searchIcon" /></button>
            <Toaster />
        </div>
    );
};

export default Autocompleate