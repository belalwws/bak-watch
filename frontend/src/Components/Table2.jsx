import React from "react";
import { FaCloudDownloadAlt, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoEye } from "react-icons/go";

const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

// Rows function to render table rows
const Rows = (data, i, users) => {
  return (
    <tr key={i}>
      {/* If users exist, render user-specific columns */}
      {users ? (
        <>
          <td className={`${Text}`}>
            <div className="w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={`/images/${data.image ? data.image : "user.png"}`}
                alt={data?.fullName}
              />
            </div>
          </td>
          <td className={`${Text}`}>{data?._id ? data._id : "2R75T8"}</td>
          <td className={`${Text}`}>
            {data.createAt ? data.createAt : "12, Jan 2023"}
          </td>
          <td className={`${Text}`}>{data.fullName}</td>
          <td className={`${Text}`}>{data.email}</td>
          <td className={`${Text} float-right flex-rows gap-2`}>
            <button className="border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2">
              Edit <FaEdit className="text-green-500" />
            </button>
            <button className="bg-subMain text-white rounded flex-colo w-6 h-6">
              <MdDelete />
            </button>
          </td>
        </>
      ) : (
        // If no users, render default columns
        <>
          <td className={`${Text} font-bold`}>2R75T8</td>
          <td className={`${Text}`}>
            {data.createAt ? data.createAt : "12, Jan 2023"}
          </td>
          <td className={`${Text}`}>{data.title}</td>
          <td className={`${Text} float-right flex-rows gap-2`}>
            <button className="border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2">
              Edit <FaEdit className="text-green-500" />
            </button>
            <button className="bg-subMain text-white rounded flex-colo w-6 h-6">
              <MdDelete />
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

// Table component
function Table2({ data, users }) {
  return (
    <div className="overflow-x-scroll overflow-hidden relative w-full">
      <table className="w-full table-auto border border-border divide-y divide-border">
        <thead className="bg-dryGray">
          {users ? (
            <>
              <th scope="col" className={`${Head}`}>
                Image
              </th>
              <th scope="col" className={`${Head}`}>
                Id
              </th>
              <th scope="col" className={`${Head}`}>
                Date
              </th>
              <th scope="col" className={`${Head}`}>
                Full Name
              </th>
              <th scope="col" className={`${Head}`}>
                Email
              </th>
            </>
          ) : (
            <>
              <th scope="col" className={`${Head}`}>
                Id
              </th>
              <th scope="col" className={`${Head}`}>
                Date
              </th>
              <th scope="col" className={`${Head}`}>
                Title
              </th>
              <th scope="col" className={`${Head}`} text-end>
                Actions
              </th>
            </>
          )}
        </thead>
        <tbody className="bg-main divide-y divide-gray-800">
          {data.map((data, i) => Rows(data, i, users))}
        </tbody>
      </table>
    </div>
  );
}

export default Table2;
