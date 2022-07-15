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
              <input readOnly ={this.state.readOnlyFlag} type = "text" placeholder={this.contactDetails.email1} />
              </td>
              <td>
              <input readOnly ={this.state.readOnlyFlag} type = "text" placeholder={this.contactDetails.phonenumber1} />
              </td>
              <td>
              <input readOnly ={this.state.readOnlyFlag} type = "text" placeholder={this.contactDetails.purposeofcontact1} />
              </td>
            </tr>
            <tr>
              <td>
                <input readOnly ={this.state.readOnlyFlag} type = "text" placeholder={this.contactDetails.name2} />
              </td>
              <td>
              <input readOnly ={this.state.readOnlyFlag} type = "text" placeholder={this.contactDetails.email2} />
              </td>
              <td>
              <input readOnly ={this.state.readOnlyFlag} type = "text" placeholder={this.contactDetails.phonenumber2} />
              </td>
              <td>
              <input readOnly ={this.state.readOnlyFlag} type = "text" placeholder={this.contactDetails.purposeofcontact2} />
              </td>
            </tr>
            <tr>
              <td>
                <input readOnly ={this.state.readOnlyFlag} type = "text" placeholder={this.contactDetails.name3} />
              </td>
              <td>
              <input readOnly ={this.state.readOnlyFlag} type = "text" placeholder={this.contactDetails.email3} />
              </td>
              <td>
              <input readOnly ={this.state.readOnlyFlag} type = "text" placeholder={this.contactDetails.phonenumber3} />
              </td>
              <td>
              <input readOnly ={this.state.readOnlyFlag} type = "text" placeholder={this.contactDetails.purposeofcontact3} />
              </td>
            </tr>
            <tr>
              <td>
                <input readOnly ={this.state.readOnlyFlag} type = "text" placeholder={this.contactDetails.name4} />
              </td>
              <td>
              <input readOnly ={this.state.readOnlyFlag} type = "text" placeholder={this.contactDetails.email4} />
              </td>
              <td>
              <input readOnly ={this.state.readOnlyFlag} type = "text" placeholder={this.contactDetails.phonenumber4} />
              </td>
              <td>
              <input readOnly ={this.state.readOnlyFlag} type = "text" placeholder={this.contactDetails.purposeofcontact4} />
              </td>
            </tr>
            <tr>
              <td>
                <input readOnly ={this.state.readOnlyFlag} type = "text" placeholder={this.contactDetails.name5} />
              </td>
              <td>
              <input readOnly ={this.state.readOnlyFlag} type = "text" placeholder={this.contactDetails.email5} />
              </td>
              <td>
              <input readOnly ={this.state.readOnlyFlag} type = "text" placeholder={this.contactDetails.phonenumber5} />
              </td>
              <td>
              <input readOnly ={this.state.readOnlyFlag} type = "text" placeholder={this.contactDetails.purposeofcontact5} />
              </td>
            </tr>


          </tbody>
        </table>

            <button className ="ui inverted button " style={{background:'red',color:'white'}} 
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
            <button className="ui inverted button active" 
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