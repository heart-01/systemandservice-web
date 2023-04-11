import { Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { NavLink } from "react-router-dom";

const HeaderPost = (props) => {
  const token = localStorage.getItem("token");

  const menuOrder = (
    <Menu>
      <Menu.Item onClick={() => props.handleOnClickMenuOrder(null)}>
        <NavLink rel="noopener noreferrer" className="text-lg" to="#">
          ทั้งหมด
        </NavLink>
      </Menu.Item>
      <Menu.Item onClick={() => props.handleOnClickMenuOrder("views")}>
        <NavLink rel="noopener noreferrer" className="text-lg" to="#">
          ยอดคนดู
        </NavLink>
      </Menu.Item>
      <Menu.Item onClick={() => props.handleOnClickMenuOrder("count_comment")}>
        <NavLink rel="noopener noreferrer" className="text-lg" to="#">
          ความคิดเห็น
        </NavLink>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div>
        <label htmlFor="default-search" className="mb-2 text-lg font-medium text-gray-900 sr-only dark:text-gray-300">
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            onChange={props.handleOnLoadQuestionSearch("search")}
            type="search"
            className="block p-4 pl-10 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ชื่อหัวเรื่องที่ต้องการค้นหา"
            required
          />
        </div>
      </div>

      <div className="flex justify-between mt-5">
        <div>
          {token && (
            <NavLink to="/question/create">
              <Button type="dashed" icon={<PostAddIcon fontSize={"medium"} />} size="large">
                &nbsp;เพิ่มกระทู้
              </Button>
            </NavLink>
          )}
        </div>
        <div>
          <Dropdown overlay={menuOrder}>
            <NavLink className="ant-dropdown-link text-lg" to="#">
              Sort by <DownOutlined />
            </NavLink>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default HeaderPost;
