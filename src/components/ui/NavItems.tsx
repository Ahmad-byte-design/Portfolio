import { Link } from "react-router-dom";

function NavItems() {
  const items = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Projects", link: "/projects" },
    { name: "Certificate", link: "/certificates" },
    { name: "History", link: "/histories" },
  ];

  return (
    <ul className="flex items-center justify-between w-full  px-8">
        {items.map((item) => (
      <li className="w-full flex items-center justify-center gap-2 hover:text-popover group">
          <p className="w-1 h-1 rounded-2xl bg-popover opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition duration-300"></p>
          <Link to={item.link} className="w-full">{item.name}</Link>
      </li>
        ))}
    </ul>
  );
}

export default NavItems;
