import "./sidebar.scss";
import menu from '@/constants/menu'
import Menu from "./menu/Menu";

const SideBar = () => {
  console.log(menu);
  return (
    <div className="menu">
      {menu.map((item) => (
        <Menu item={item} key={item.id} />
      ))}
    </div>
  );
};

export default SideBar;
