import { FaHome } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { TbCategoryFilled } from "react-icons/tb";
import { RiAdminFill } from "react-icons/ri";
import { ImExit } from "react-icons/im";
export const AdminMenuList = [
  {
    name: "Anasayfa",
    url: "/Dashboard",
    icon: <FaHome />,
  },
  { name: "Kategori Ekle", url: "/AddCategory", icon: <IoIosAddCircle /> },
  { name: "Kategori Listesi", url: "/Categories", icon: <TbCategoryFilled /> },
  {
    name: "Kategori Url Ekle",
    url: "/AddCategoryUrl",
    icon: <IoIosAddCircle />,
  },
  {
    name: "Kategori Url Listesi",
    url: "/CategoryUrlList",
    icon: <TbCategoryFilled />,
  },
  { name: "Admin Ekle", url: "/AddAdmin", icon: <IoIosAddCircle /> },
  { name: "Admin Listesi", url: "/AdminList", icon: <RiAdminFill /> },
  { name: "Güvenli Çıkış", url: "/Admin", hasExit: true, icon: <ImExit /> },
];
