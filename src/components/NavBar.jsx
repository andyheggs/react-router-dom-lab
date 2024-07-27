//2.1 - import Link from react-router-dom
import { Link } from 'react-router-dom';

// 2.2 - create a <Link> for each destination 

//(a) As a user, I should see a nav bar with links at the top of each page in the application.

const NavBar = () => {

    return (

        <nav>

          <ul>

            <li><Link to='/'>Home</Link></li>

            {/*(g) As a user, clicking on the ‘Mailboxes’ link should navigate me to a ‘Mailboxes’ page.*/}

            <li><Link to='/mailboxes'>Mailboxes</Link></li>

            <li><Link to='/new-mailbox'>New Mailbox</Link></li>

          </ul>

        </nav>
      );
  };
  
  export default NavBar;
