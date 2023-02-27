/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";
import useOutsideClick from "../useOutsideClick";
import { HomeOutlined, LogoutOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { clearStateAccount } from "../../../redux/actions/accountActions.js";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const token = localStorage.getItem("token");
  const profileInfo = useSelector((state) => state.account.info);

  const ref = useRef(null);

  useOutsideClick(ref, () => {
    setIsActive(false);
  });

  const handleOnClickLogout = () => {
    dispatch(clearStateAccount());
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <nav className="bg-gray-800 fixed w-full z-20">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <span className="sr-only">Open main menu</span>

              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg className={`${isOpen ? "hidden" : "block"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg className={`${isOpen ? "block" : "hidden"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 items-center invisible md:visible">
            <NavLink to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <img className="w-32" src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/logo.png`} alt="logo" />
            </NavLink>
          </div>

          {/* Menu */}
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center visible md:invisible">
              <NavLink to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                <img className="w-32" src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/logo.png`} alt="logo" />
              </NavLink>
            </div>

            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink
                  end
                  to="/"
                  className={(navData) =>
                    navData.isActive
                      ? "bg-green-500 text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      : "text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  หน้าแรก
                </NavLink>
                {/* Menu List */}
                <div ref={ref} className="relative">
                  <button
                    type="button"
                    className={
                      isActive
                        ? "text-white hover:bg-gray-700 hover:text-white px-3 py-2 inline-flex rounded-md text-sm font-medium bg-green-500"
                        : "text-white hover:bg-gray-700 hover:text-white px-3 py-2 inline-flex rounded-md text-sm font-medium"
                    }
                    aria-expanded="false"
                    onClick={() => {
                      setIsActive(!isActive);
                    }}
                  >
                    <span>ข้อมูลทั่วไป</span>
                    {isActive ? (
                      <svg className="text-white ml-2 h-5 w-5 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="text-white ml-2 h-5 w-5 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  <Transition
                    show={isActive}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    {
                      <div className={`${isActive ? "block" : "hidden"} absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0`}>
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-1 bg-white px-5 py-6">
                            <NavLink to="/information" className="flex items-start rounded-lg hover:bg-gray-50">
                              <div className="ml-4 mt-2">
                                {" "}
                                <p className="text-base font-medium text-gray-900">- ประวัติบริษัท</p>{" "}
                              </div>
                            </NavLink>
                            <NavLink to="/information/ideology" className="flex items-start rounded-lg hover:bg-gray-50">
                              <div className="ml-4 mt-2">
                                {" "}
                                <p className="text-base font-medium text-gray-900">- อุดมการณ์</p>{" "}
                              </div>
                            </NavLink>
                            <NavLink to="/information/vision" className="flex items-start rounded-lg hover:bg-gray-50">
                              <div className="ml-4 mt-2">
                                {" "}
                                <p className="text-base font-medium text-gray-900">- วิสัยทัศน์</p>{" "}
                              </div>
                            </NavLink>
                            <NavLink to="/information/service" className="flex items-start rounded-lg hover:bg-gray-50">
                              <div className="ml-4 mt-2">
                                {" "}
                                <p className="text-base font-medium text-gray-900">- บริการของบริษัท</p>{" "}
                              </div>
                            </NavLink>
                            <NavLink to="/information/organization" className="flex items-start rounded-lg hover:bg-gray-50">
                              <div className="ml-4 mt-2">
                                {" "}
                                <p className="text-base font-medium text-gray-900">- โครงสร้างองค์กร</p>{" "}
                              </div>
                            </NavLink>
                            <NavLink to="/information/board" className="flex items-start rounded-lg hover:bg-gray-50">
                              <div className="ml-4 mt-2">
                                {" "}
                                <p className="text-base font-medium text-gray-900">- คณะกรรมการของบริษํท</p>{" "}
                              </div>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    }
                  </Transition>
                </div>
                <NavLink
                  to="/publicize"
                  className={(navData) =>
                    navData.isActive
                      ? "bg-green-500 text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      : "text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  ข่าวประชาสัมพันธ์
                </NavLink>
                {token && (
                  <NavLink
                    to="/question"
                    className={(navData) =>
                      navData.isActive
                        ? "bg-green-500 text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        : "text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    กระทู้ถาม-ตอบ
                  </NavLink>
                )}
                <NavLink
                  to="/picwork"
                  className={(navData) =>
                    navData.isActive
                      ? "bg-green-500 text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      : "text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  ภาพผลงานบริษัท
                </NavLink>
                <NavLink
                  to="/contact"
                  className={(navData) =>
                    navData.isActive
                      ? "bg-green-500 text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      : "text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  ติดต่อเรา
                </NavLink>
              </div>
            </div>
          </div>

          {/* เมนูด้านขวา */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* เมนูด้านขวา */}
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              {!token && (
                <NavLink
                  to="/login"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-400 hover:bg-blue-500 hover:text-white"
                >
                  เข้าสู่ระบบ
                </NavLink>
              )}

              {(profileInfo?.role === "admin" || profileInfo?.role === "employee" || profileInfo?.role === "customer") && (
                <NavLink
                  to="/backend"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-400 hover:bg-blue-500 hover:text-white"
                >
                  <HomeOutlined className="mr-1" /> Backend
                </NavLink>
              )}

              {token && (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={handleOnClickLogout}
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-400 hover:bg-red-500 hover:text-white"
                >
                  <LogoutOutlined className="mr-1" /> ออกจากระบบ
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* เมนูโหมด Mobile */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {
          <div className={`${isOpen ? "sm:hidden block" : "sm:hidden hidden"}`} id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                end
                to="/"
                className={(navData) =>
                  navData.isActive
                    ? "bg-green-500 text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                หน้าแรก
              </NavLink>
              <div ref={ref} className="relative">
                <button
                  type="button"
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 inline-flex rounded-md text-sm font-medium"
                  aria-expanded="false"
                  onClick={() => {
                    setIsActive(!isActive);
                  }}
                >
                  <span>ข้อมูลทั่วไป</span>
                  {isActive ? (
                    <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
                <Transition
                  show={isActive}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  {
                    <div className={`${isActive ? "block" : "hidden"} absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0`}>
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-1 bg-white px-5 py-6">
                          <NavLink to="/information" className="flex items-start rounded-lg hover:bg-gray-50">
                            <div className="ml-4 mt-2">
                              {" "}
                              <p className="text-base font-medium text-gray-900">- ประวัติบริษัท</p>{" "}
                            </div>
                          </NavLink>
                          <NavLink to="/information/ideology" className="flex items-start rounded-lg hover:bg-gray-50">
                            <div className="ml-4 mt-2">
                              {" "}
                              <p className="text-base font-medium text-gray-900">- อุดมการณ์</p>{" "}
                            </div>
                          </NavLink>
                          <NavLink to="/information/vision" className="flex items-start rounded-lg hover:bg-gray-50">
                            <div className="ml-4 mt-2">
                              {" "}
                              <p className="text-base font-medium text-gray-900">- วิสัยทัศน์</p>{" "}
                            </div>
                          </NavLink>
                          <NavLink to="/information/service" className="flex items-start rounded-lg hover:bg-gray-50">
                            <div className="ml-4 mt-2">
                              {" "}
                              <p className="text-base font-medium text-gray-900">- บริการของบริษัท</p>{" "}
                            </div>
                          </NavLink>
                          <NavLink to="/information/organization" className="flex items-start rounded-lg hover:bg-gray-50">
                            <div className="ml-4 mt-2">
                              {" "}
                              <p className="text-base font-medium text-gray-900">- โครงสร้างองกรณ์</p>{" "}
                            </div>
                          </NavLink>
                          <NavLink to="/information/board" className="flex items-start rounded-lg hover:bg-gray-50">
                            <div className="ml-4 mt-2">
                              {" "}
                              <p className="text-base font-medium text-gray-900">- คณะกรรมการของบริษํท</p>{" "}
                            </div>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  }
                </Transition>
              </div>
              <NavLink
                to="/publicize"
                className={(navData) =>
                  navData.isActive
                    ? "bg-green-500 text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                ข่าวประชาสัมพันธ์
              </NavLink>
              {token && (
                <NavLink
                  to="/question"
                  className={(navData) =>
                    navData.isActive
                      ? "bg-green-500 text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      : "text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  }
                >
                  กระทู้ถาม-ตอบ
                </NavLink>
              )}
              <NavLink
                to="/picwork"
                className={(navData) =>
                  navData.isActive
                    ? "bg-green-500 text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                ภาพผลงานบริษัท
              </NavLink>
              <NavLink
                to="/contact"
                className={(navData) =>
                  navData.isActive
                    ? "bg-green-500 text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                ติดต่อเรา
              </NavLink>

              {!token && (
                <NavLink to="/login" className="bg-blue-400 text-white hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  เข้าสู่ระบบ
                </NavLink>
              )}

              {(profileInfo?.role === "admin" || profileInfo?.role === "employee" || profileInfo?.role === "customer") && (
                <NavLink to="/backend" className="bg-blue-400 text-white hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  <HomeOutlined className="mr-1" /> หน้าจัดการข้อมูล
                </NavLink>
              )}

              {token && (
                <div style={{ cursor: "pointer" }} onClick={handleOnClickLogout} className="bg-red-400 text-white hover:bg-red-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  <LogoutOutlined className="mr-1" /> ออกจากระบบ
                </div>
              )}
            </div>
          </div>
        }
      </Transition>
    </nav>
  );
};

export default Navbar;
