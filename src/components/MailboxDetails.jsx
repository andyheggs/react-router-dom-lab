// 1. Import necessary modules
import { useParams } from 'react-router-dom';

// 2. Create the MailboxDetails component

const MailboxDetails = ({ mailboxes }) => {

    // 3. Get the mailbox ID from URL parameters
    const { mailboxId } = useParams();

    const mailbox = mailboxes.find(mb => mb._id === Number(mailboxId));
  
    // 4. Display mailbox details or "Not Found" message
    return (

      <div>

        {/*(j) As a user, when viewing the details page, I should see details about a specific mailbox. 
        The details should include the box number (_id), the name of the boxholder, and the box size.*/}

        {mailbox ? (

          <>
            <h2>Mailbox #{mailbox._id}</h2>

            <p>Boxholder: {mailbox.boxholder}</p>

            <p>Box Size: {mailbox.boxSize}</p>

          </>
          
        //(k) As a user, I should see the message ‘Mailbox Not Found!’ if I navigate to the details page for a mailbox that does not exist.

        ) : (

          <h2>Mailbox Not Found!</h2>

        )}
      </div>
      
    );
  }
  

  export default MailboxDetails;