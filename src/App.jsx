

//---------------------------------------------------------------------- User Stories ---------------------------------------------------------------------

/* 
Here are the user stories for this lab:

(a) As a user, I should see a nav bar with links at the top of each page in the application.

(b) As a user, clicking on the ‘Home’ link should navigate me to a landing page that displays the text ‘Post Office’.

(c) As a user, clicking on the ‘New Mailbox’ link should navigate me to a page with a form for submitting new mailboxes.

(d) As a user, when viewing the form on the ‘New Mailbox’ page, I should see a <form> with an <input> for the name of the boxholder and a <select> menu for the boxsize. The <select> menu should include three options: ‘Small’, ‘Medium’, and ‘Large’.

(e) As a user, I should not be required to select a box number when creating a new mailbox. When a new mailbox is created, it should be assigned a box number, or _id, automatically. This number should increment based on the number of mailboxes that already exist.

(f) As a user, when I submit a the ‘New Mailbox’ form, I should be redirected to the ‘Mailboxes’ page (/mailboxes) where I will see the newly created mailbox added to the list.

(g) As a user, clicking on the ‘Mailboxes’ link should navigate me to a ‘Mailboxes’ page.

(h) As a user, when viewing the ‘Mailboxes’ page, I should be able to see a list of all the existing mailboxes. Each mailbox in the list should be a square container with a box number _id.

(i) As a user, when viewing the ‘Mailboxes’ list page, I want to be able to click on a mailbox, and be directed to a mailbox details page.

(j) As a user, when viewing the details page, I should see details about a specific mailbox. The details should include the box number (_id), the name of the boxholder, and the box size.

(k) As a user, I should see the message ‘Mailbox Not Found!’ if I navigate to the details page for a mailbox that does not exist.

*/

// ---------------------------------------------------------------------- IMPORTS ---------------------------------------------------------------------

// 1. Start by creating each of the components listed below. After creating each component, be sure to import them at the top of app.jsx
import MailboxDetails from './components/MailboxDetails';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import NavBar from './components/NavBar';

// 3.1. In App.jsx, import Route and Routes from react-router-dom 
import { Route, Routes } from 'react-router-dom';

// 4.1 In App.jsx, import useState from React 
import { useState } from 'react';


// ---------------------------------------------------------------------- JSX ---------------------------------------------------------------------

const App = () => {

//4.2 - create a new useState variable called mailbox. Set its initial state to an empty array ([]).
  const [mailboxes, setMailboxes] = useState([]);

// 5. In App.jsx, build the scaffolding for a function called addMailbox. 
    // It should accept form data for a new mailbox and setMailboxes state accordingly.
  const addBox = (newBox) => {

    //(e) "As a user, I should not be required to select a box number when creating a new mailbox. When a new mailbox is created, 
        //it should be assigned a box number, or _id, automatically. This number should increment based on the number of mailboxes that already exist.'
    const _id = mailboxes.length + 1;

    setMailboxes([...mailboxes, {...newBox, _id }]);

  };

    return (
      <>
        
        <NavBar />

        {/* 3.2 - create a <Route> for each destination in the table below:*/}

        <Routes>
          
          {/*(b) As a user, clicking on the ‘Home’ link should navigate me to a landing page that displays the text ‘Post Office’.*/}
          <Route path="/" element={<main><h1>Post Office</h1></main>} />

          <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />

          <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />

          <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />

        </Routes>

      </>
    );
};

export default App;
