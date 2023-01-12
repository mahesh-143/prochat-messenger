import { Link } from "react-router-dom"
import { Alien, ChatsCircle, UserPlus, Users } from "phosphor-react"

const LinkItems = [
  { name: "Chats", link: "chats", icon: <ChatsCircle size={30} /> },
  { name: "Find Friends", link: "findfriends", icon: <Alien size={30} /> },
  { name: "Rooms", link: "rooms", icon: <Users size={30} /> },
  {
    name: "Friend Requests",
    link: "friendrequests",
    icon: <UserPlus size={30} />,
  },
]

const NavItem = ({ icon, link, children, ...rest }) => {
  return (
    <Link to={link}>
      <div className="flex items-center gap-2">
        {icon && icon}
        {children}
      </div>
    </Link>
  )
}

const Navbar = () => {
  return (
    <div className="h-screen w-[16rem] sticky top-0 flex flex-col gap-6 px-6 pt-9 bg-dark border border-white/30">
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} link={link.link}>
          {link.name}
        </NavItem>
      ))}
    </div>
  )
}

export default Navbar
