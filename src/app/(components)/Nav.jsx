import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Nav() {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon className="icon" icon={faHome}></FontAwesomeIcon>
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon className="icon" icon={faTicket}></FontAwesomeIcon>
        </Link>
      </div>
      <div>
        <p className="text-default-text"> abcd@gmail.com</p>
      </div>
    </nav>
  );
}

export default Nav;
