// 1. Import necessary modules
import { Link } from 'react-router-dom';

// 2. Create the MailboxList component
const MailboxList = ({ mailboxes }) => {

    return (

      <div>

        {/* 3. List of mailboxes */}

        {/* g. “Each mailbox in the list should be a square container with a box number _id.” */}

        {mailboxes.map(mailbox => (

          <div key={mailbox._id} className="mail-box">

            {/*(i) As a user, when viewing the ‘Mailboxes’ list page, I want to be able to click on a mailbox, 
            and be directed to a mailbox details page.*/}
            <Link to={`/mailboxes/${mailbox._id}`}>Mailbox #{mailbox._id}</Link>

          </div>

        ))}

      </div>

    );
  }

export default MailboxList