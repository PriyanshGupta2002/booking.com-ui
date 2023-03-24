import {
  faBed,
  faCab,
  faCalendarDays,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import 'react-date-range/dist/styles.css';
import { useNavigate } from "react-router-dom"; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRange } from 'react-date-range';
import {  format } from 'date-fns';
import { useState } from 'react';
import "./header.css";
const Header = ({type}) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const navigate = useNavigate()
  const [destination,setDestination] = useState("")
  const [destinationIsEmpty, setdestinationIsEmpty] = useState(false)
  const [click, setClick]=useState(false)
  const[openoptions,setopenOptions]=useState(false)
  const [options,setOptions]=useState({
    adult:1,
    children:0,
    room:1
  })
  const openCalendar=()=>{
    setClick((prevState)=>!prevState)
    setopenOptions(false)
  }

  
    const handleIncreaseRoom=()=>{
    setOptions({
      adult:options.adult,
      children:options.children,
      room:options.room+1
    })
  }

  const handleDecreaseRoom=()=>{
    if (options.room===1) {
     return
    }
    else{
    setOptions({
      adult:options.adult,
      children:options.children,
      room:options.room-1
    })
  }
  }

  const handleIncreaseChildren=()=>{
    setOptions({
      adult:options.adult,
      children:options.children+1,
      room:options.room
    })
  }

  const handleDecreaseChildren=()=>{
    if (options.children===0) {
      return
    }
    setOptions({
      adult:options.adult,
      children:options.children-1,
      room:options.room
    })
  }

  const handleIncreaseAdult=()=>{
    setOptions({
      adult:options.adult+1,
      children:options.children,
      room:options.room
    })
  }

  const handleDecreaseAdult=()=>{
    if (options.adult===1) {
      return
    }
    setOptions({
      adult:options.adult-1,
      children:options.children,
      room:options.room
    })
  }

  const handleDestination=(e)=>{
    if (e.target.value.trim().length>0) {
      setdestinationIsEmpty(false)
    }
      setDestination(e.target.value)
  }

  const handleopenOptions=()=>{
    setopenOptions((prevState)=>!prevState)
    setClick(false)
  }
  const handleSearch=()=>{
    if (destination.trim().length<=0) {
       setdestinationIsEmpty(true)
    }
    else{
    navigate("/hotels", {state:{options:options,destination:destination,date:date} });
    }
  }
  return (
    <div className="header">
      <div className={type==="list"?'headerContainer listMode':'headerContainer'}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCab} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
       {type!=="list"  && <>
        <h1 className="headerTitle">A lifetime of discounts?It's Genius</h1>
        <p className="headerDesc">
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free Lamabooking account
        </p>
        <button className="headerBtn">Sign in / Regsiter</button>
        <div className="headerSearch">
          <div className="headerSearchItem ">
            <FontAwesomeIcon icon={faBed} />
            <input
              
              type="text"
              placeholder={destinationIsEmpty?"Destination Is Mandatory":"Where are you going?"}
              className="headerSearchInput" 
              value={destination}
              onChange={handleDestination}
              />
            
          </div>
          <div className="headerSearchItem" onClick={openCalendar}>
            <FontAwesomeIcon icon={faCalendarDays}  className="calendarIcon" />
          <span className="calendarText">{`${format(date[0].startDate,"MM/dd/yy")} to ${format(date[0].endDate,"MM/dd/yy")} `}</span>       
       {click &&   <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className="date"
  minDate={new Date()}
/>}
          </div>
          <div className="headerSearchItem">
            <span className="personText" onClick={handleopenOptions}>
              <FontAwesomeIcon icon={faPerson} /> 
              {`${options.adult}adult • ${options.children}children • ${options.room}room`}
            </span>
           {openoptions && <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                <button className="optionBtn" onClick={handleIncreaseAdult}>+</button>
                <span className="optionQuantity">{options.adult}</span>
                <button className={`${options.adult<=1?'disabled optionBtn':'optionBtn'}`}  onClick={handleDecreaseAdult}>-</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                <button className="optionBtn" onClick={handleIncreaseChildren}>+</button>
                <span className="optionQuantity">{options.children}</span>
                <button className={`${options.children<=0?'disabled optionBtn':'optionBtn'}`}  onClick={handleDecreaseChildren}>-</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                <button className="optionBtn" onClick={handleIncreaseRoom}>+</button>
                <span className="optionQuantity">{options.room}</span>
                <button className={`${options.room<=1?'disabled optionBtn':'optionBtn'}`} onClick={handleDecreaseRoom}>-</button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
           <button className="searchbtn" onClick={handleSearch}>
            Search
          </button>
          </div>
        </div>
        </>}
      </div>
    </div>
  );
};

export default Header;
