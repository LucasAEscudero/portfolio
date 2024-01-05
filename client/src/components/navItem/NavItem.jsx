const NavItem = ({ name, link }) => {
  return (
    <li class="nav-item">
      <a class="nav-link active" href={link}>
        {name}
        <span class="visually-hidden">(current)</span>
      </a>
    </li>
  );
};

export default NavItem;
