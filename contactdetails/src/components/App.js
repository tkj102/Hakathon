import './App.css';
import Header from './Header';
import SearchCriteria from './SearchCriteria';
import ContactDetails from './ContactDetails'

const contactDetailsList={
  name1:'Tarun',
  email1:'abc@gmail.com',
  phonenumber1:'+91991111111',
  purposeofcontact1:'kyu contact kiya' 
}


function App() {
  return (
    <div className="App">
      <Header />
      <SearchCriteria />
      <ContactDetails contactDetailsList={contactDetailsList} />
    </div>
  );
}

export default App;

