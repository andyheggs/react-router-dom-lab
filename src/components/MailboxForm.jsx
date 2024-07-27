//1. Import modules:
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

  //2. MailboxForm component:
  const MailboxForm = ({ addBox }) => {

    // 3. Form State Management
    //(c) As a user, clicking on the ‘New Mailbox’ link should navigate me to a page with a form for submitting new mailboxes.

    const [boxholder, setBoxholder] = useState('');

    const [boxSize, setBoxSize] = useState('Small');

    const navigate = useNavigate();

   
    //4. Handle Form Submission:

    const handleSubmit = (e) => {

      e.preventDefault();

      addBox({boxholder, boxSize});
      //(f) As a user, when I submit a the ‘New Mailbox’ form, 
          //I should be redirected to the ‘Mailboxes’ page (/mailboxes) where I will see the newly created mailbox added to the list.
      navigate('/mailboxes');

    };

    return (

        <form onSubmit={handleSubmit}>
            {/* (d) As a user, when viewing the form on the ‘New Mailbox’ page, 
            I should see a <form> with an <input> for the name of the boxholder and a <select> menu for the boxsize. 
            The <select> menu should include three options: ‘Small’, ‘Medium’, and ‘Large’. */}
            {/* 5. Input for boxholder */}

            <label>Boxholder Name:</label>

            <input type="text" value={boxholder} onChange={(e) => setBoxholder(e.target.value)} />

            {/* 6. Select for boxSize */}

            <label>Box Size</label>

            <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>

                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>

            </select>

            {/* 7. Submit button */}

            <button type="submit">Create Mailbox</button>

            </form>
  );
}

export default MailboxForm