import React,{useState} from 'react'
import Header from '../../Components/header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import { useLocation } from 'react-router-dom';
import './list.css'
import {  format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../Components/searchItem/SearchItem';
const List = () => {
  const location = useLocation()
  const [date, setDate] = useState(location.state.date)
  const [showDate,setShowDate]=useState(false)
  const [data, setData] = useState({
    destination:location.state.destination,
    adult:location.state.options.adult,
    children:location.state.options.children,
    room:location.state.options.room
  })

  const handleDestination=(e)=>{
    setData({
      destination:e.target.value,
      adult:data.adult,
      children:data.children,
      room:data.room
    })
  }


  const handleAdult=(e)=>{
    setData({
      destination:data.destination,
      adult:e.target.value,
      children:data.children,
      room:data.room
    })
  }
  const handleChild=(e)=>{
    setData({
      destination:data.destination,
      adult:data.adult,
      children:e.target.value,
      room:data.room
    })
  }

  const handleRoom=(e)=>{
    setData({
      destination:data.destination,
      adult:data.adult,
      children:data.children,
      room:e.target.value
    })
  }


  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">

          <div className="listSearch">
            <h2>Search</h2>
            <div className="listSearchItem">
              <label htmlFor="name">Destination</label>
              <input type="text" name="name" id="name" value={data.destination} onChange={handleDestination} readOnly/> 
            </div>
            <div className="listSearchItem">
              <label htmlFor="date">Check-in-date</label>
              <span onClick={()=>{setShowDate(!showDate)}}>{`${format(date[0].startDate,"MM/dd/yy")} to ${format(date[0].endDate,"MM/dd/yy")}`}</span>
               {showDate && <DateRange
  onChange={item => setDate([item.selection])}
  ranges={date}
  minDate={new Date()}/>}

            </div>
            <div className="filter">
              <span>Options</span>
              <div className="filterWrapper">
                <div className="filterItem">
                    <label htmlFor="min">Min Price <small>(per night)</small> </label>
                    <input type="number" name="" id="min" min="1"  />
                </div>
                <div className="filterItem">
                    <label htmlFor="max">Max Price <small>(per night)</small> </label>
                    <input type="number" name="" id="max"  />
                </div>
                <div className="filterItem">
                    <label htmlFor="adult">Adult</label>
                    <input type="number" name="" id="adult" value={data.adult}  onChange={handleAdult} min="1" />
                </div>
                <div className="filterItem">
                    <label htmlFor="child">Children</label>
                    <input type="number" name="" id="child" value={data.children} onChange={handleChild} min="0"  />
                </div>
                <div className="filterItem">
                    <label htmlFor="room">Room</label>
                    <input type="number" name="" id="room" value={data.room} onChange={handleRoom} min="1"/>
                </div>
              </div>
              <button className='listBtn' >Search</button>
            </div>
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List