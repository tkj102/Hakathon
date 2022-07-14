import React, { StrictMode } from "react";

const SearchCriteria = ()=>{
    return(
        <div className="Seach">
            <h2> Search Criteria</h2>
            <form className="ui form">
            <div className="field">
                <label> Customer Number  </label>
                <input type ="text"  style ={{ width: '50px',height: '10px' }} name="countrycode" placeholder="QA"></input>
                <input type ="text"  style ={{ width: '70px',height: '10px' }} name="groupmember" placeholder="BBME"></input>
                <input type ="text"  style ={{ width: '60px',height: '10px' }} name="branch" placeholder="001"></input>
                <input type ="text"  style ={{ width: '90px',height: '10px' }} name="serial" placeholder="00001"></input>
            </div>
            <div className="field">
                <label> Address ID  </label>
                <input type ="text" style ={{ width: '70px',height: '10px' }} name="addressid" placeholder="P1"></input>
            </div>
            <button className="ui button" style={{background:'grey',color:'white'}}> CLEAR</button>
            <button className="ui button" style={{background:'red',color:'white'}}> SUBMIT</button>
            
            </form>
        </div>
    )
}

export default SearchCriteria;