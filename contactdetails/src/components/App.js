import './App.css';
import Header from './Header';
import SearchCriteria from './SearchCriteria';
import ContactDetails from './ContactDetails'
import { useState } from 'react';

const contactDetailsList={
  name1:'Tarun',
  email1:'abc@gmail.com',
  phonenumber1:'+91991111111',
  purposeofcontact1:'kyu contact kiya', 
  name2:'Tarun1',
  email2:'abc@gmail.com',
  phonenumber2:'+91991111111',
  purposeofcontact2:'kyu contact kiya1' ,
  name3:'Tarun2',
  email3:'abc@gmail.com',
  phonenumber3:'+91991111111',
  purposeofcontact3:'kyu contact kiya2' ,
  name4:'Tarun3',
  email4:'abc@gmail.com',
  phonenumber4:'+91991111111',
  purposeofcontact4:'kyu contact kiya3' ,
  name5:'Tarun4',
  email5:'abc@gmail.com',
  phonenumber5:'+91991111111',
  purposeofcontact5:'kyu contact kiya555555555555555555555555555' ,
}



function App() {
  const searchAddressHandler =(customerNo)=>{
    console.log(customerNo);
  }
  return (
    <div className="App">
      <Header />
      <SearchCriteria searchAddressHandler={searchAddressHandler}/>
      <ContactDetails contactDetailsList={contactDetailsList} />
    </div>
  );
}

export default App;

