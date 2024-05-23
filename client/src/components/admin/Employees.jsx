import React, { useEffect, useState } from "react";
import HttpClient from "../../HttpClient";
import { Link } from "react-router-dom";
import { Button } from "antd";

// Initialization for ES Users

const Employees = () => {
  const [users, setUsers] = useState([]);
  const [isApproved, setIsApproved] = useState(false);

  const getUsers = async () => {
    const response = await HttpClient.get("api/staff/get");
    console.log(response.data);
    setUsers(response.data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const approve = async function (id,message) {
    const response = await HttpClient.patch("api/staff/update", {
      id: id,
      status: message,
    });
    getUsers();
    console.log(response.data);
  };
  return (
    <div className="h-full overflow-auto -my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
      <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
        <div className="flex justify-between">
          <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
            <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
              <div className="flex">
                <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm"></span>
              </div>
              <input
                type="text"
                className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                User Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300"></th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="flex items-center">
                    <div className="text-sm leading-5 text-gray-800">
                      #{user.id}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                      <img
                        className="rounded-full"
                        src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                        width="40"
                        height="40"
                        alt="Alex Shatov"
                      />
                    </div>
                    <div className="font-medium text-gray-800">
                      <Link to={`/profile/${user.id}`}>{user.username}</Link>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  {user.phonenumber}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative text-xs">{user.status}</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                  <Button
                    type="primary"
                    size="small"
                    onClick={() => approve(user.id,"approved")}
                  >
                    Approve
                  </Button>
                  <Button
                    type="primary"
                    size="small"
                    onClick={() => approve(user.id,"suspended")}
                  >
                    Suspend
                  </Button>
                  {/* <button
                  onClick={() => approve(user.id)}
                    className="text-teal-500 bg-transparent border border-solid border-teal-500 hover:bg-teal-500 hover:text-white active:bg-teal-600 font-bold uppercase text-xs rounded-full outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                  >
                    Approve
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;
