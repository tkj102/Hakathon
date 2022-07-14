import React from "react";

// updateMessage(event) {
//   this.setState({
//     message: event.target.value
//   });
// }

// handleItemChanged(event) {
//   var items = this.state.items;
//   items[i]  = event.target.value;

//   this.setState({
//     items: items
//   });
// }
class  contactDetails extends React.Component{
  
  constructor(props) {
    super(props)
    console.log("hello")
    this.state = {
      readOnlyFlag: true,
      contactDetails : {},
      saveVisibility:'hidden'
    }
  };

  render(){
    this.contactDetails = this.props.contactDetailsList
    console.log("this.state.readOnlyFlag",this.state.readOnlyFlag)
    console.log("this.contactDetails",this.contactDetails)
    return(
        <div className="Contact Details">
        <h2> Contact Details</h2>
            <table class="ui celled table">
              <thead>
                <tr><th>Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>Purpose Of Contact</th>
              </tr></thead>
          <tbody>
            <tr>
              <td>
                <input readOnly ={this.state.readOnlyFlag} type = "text" placeholder={this.contactDetails.name1} />
              </td>
              <td>
                <input type = "text" placeholder={this.contactDetails.email1} />
              </td>
              <td>
                <input type = "text" placeholder={this.contactDetails.phonenumber1} />
              </td>
              <td>
                <input type = "text" placeholder={this.contactDetails.purposeofcontact1} />
              </td>
            </tr>

            <tr>
              <td data-label="Name">{this.contactDetails.name2}</td>
              <td data-label="Age">{this.contactDetails.email2}</td>
              <td data-label="Job">{this.contactDetails.phonenumber2}</td>
              <td data-label="Job">{this.contactDetails.purposeofcontact2}</td>
            </tr>
            <tr>
              <td data-label="Name">{this.contactDetails.name3}</td>
              <td data-label="Age">{this.contactDetails.email3}</td>
              <td data-label="Job">{this.contactDetails.phonenumber3}</td>
              <td data-label="Job">{this.contactDetails.purposeofcontact3}</td>
            </tr>
            <tr>
              <td data-label="Name">{this.contactDetails.name4}</td>
              <td data-label="Age">{this.contactDetails.email4}</td>
              <td data-label="Job">{this.contactDetails.phonenumber4}</td>
              <td data-label="Job">{this.contactDetails.purposeofcontact4}</td>
            </tr>
          </tbody>
        </table>

            <button className="ui button" style={{background:'red',color:'white'}} 
              onClick={()=> 
                { 
                  this.setState({readOnlyFlag: false});
                  this.setState({saveVisibility: 'visible'});
                  
                  console.log("this.readOnlyFlag",this.state.readOnlyFlag)
                } 
              }  
            >
              Edit
            </button>
            <button className="ui button" 
              style={{background:'green',color:'white',visibility:this.state.saveVisibility}} 
              onClick={()=> 
                { 
                  this.setState({readOnlyFlag: true});
                } 
              }  
            >
              SAVE
            </button>
      </div>
    )
  }
}
export default contactDetails;