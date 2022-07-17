import React from "react";

class SearchCriteria extends React.Component{
    

    state = {
            ctcd :"QA",
            gmab: "BBME",
            branch:"",
            serial:"",
            adid:""
    }

    searchCustomerDetails = (e)=>{
        if (this.state.serial==="" || this.state.branch ==="" || this.state.adid ==="")
        alert("Important Information Cannot Be Blank")
        this.props.searchAddressHandler(this.state)
    }
    render(){
    return(
        
        <div className="Search">
            <div className="ui medium header" align="left" > Search Criteria</div>
            <form className="ui form" >
            <div className="field">
                <label> Customer Number  </label>
                <input type ="text"  style ={{ width: '50px',height: '10px' }} name="countrycode" placeholder="QA"
                onChange={(e)=>{this.setState({ctd:e.target.value})}}
                value = {this.state.ctcd}
                maxLength={2}
                ></input>
                <input type ="text"  style ={{ width: '70px',height: '10px' }} name="groupmember" placeholder="BBME"
                maxLength={4}
                value = {this.state.gmab}
                onChange={(e)=>{this.setState({gmab:e.target.value})}}
                ></input>
                <input type ="text"  style ={{ width: '60px',height: '10px' }} name="branch" placeholder="001"
                maxLength={3}
                value = {this.state.branch}
                onChange={(e)=>{this.setState({branch:e.target.value})}}
                ></input>
                <input type ="text"  style ={{ width: '90px',height: '10px' }} name="serial" placeholder="00001"
                maxLength={6}
                value = {this.state.serial}
                onChange={(e)=>{this.setState({serial:e.target.value})}}></input>
            </div>
            <div className="field">
                <label> Address ID  </label>
                <input type ="text" style ={{ width: '70px',height: '10px' }} name="addressid" placeholder="P1"
                maxLength={2}
                value = {this.state.adid}
                onChange={(e)=>{this.setState({adid:e.target.value})}}
                ></input>
            <h5></h5>
            </div>


 
            </form>
         {
            /* Button cannot be put under /form as it will refresh the page
            /* In case it needs to be placed event.preventDefault() needs to be implemented
            */
        }
            <button className="ui button" style={{background:'grey',color:'white'}}
              onClick={()=> 
                { 
                  this.setState({branch: ""});
                  this.setState({serial: ""});
                  this.setState({adid:""});
                } 
              }
            > CLEAR </button>
            <button className="ui button" style={{background:'red',color:'white'}}
                onClick={()=> {
                    this.searchCustomerDetails()}
                }
            > SUBMIT</button>
        </div>
    )
    }
}

export default SearchCriteria;