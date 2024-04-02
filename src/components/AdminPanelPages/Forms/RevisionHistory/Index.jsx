import React, { useState } from "react";
import SuccessButton from "../../../inputs/SuccessButton/Index";
import { useGetAll } from "../../../../Hooks";

function ModificationLogTable() {
  const [data, setData] = useState("");
  useGetAll({
    key: `/admin-dashboard/revise-history/1f781117-b534-4a38-9535-070500c8d441?page=1&limit=10`,
    enabled: true,
    select: (data) => {
      return data.data.rows;
    },
    onSuccess: (data) => {
      setData(data);
    },
  });
  console.log(data, "========>Setdata");
  return (
    <div className="pt-8">
      <table className="table-auto  border-collapse border border-gray-800 max-tablet:w-full">
        <thead>
          <tr className="">
            <th className="border border-gray-800 px-4 text-[26px] max-tablet:text-[18px] font-[satoshi] font-light py-3">
              Modification Date
            </th>
            <th className="border border-gray-800 px-4 text-[26px] max-tablet:text-[18px]  font-[satoshi] font-light py-3">
              Modified By
            </th>
            <th className="border border-gray-800 px-4 text-[26px] max-tablet:text-[18px]  font-[satoshi] font-light py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr className="">
                <td className="border border-gray-800 text-[16px] max-tablet:text-[16px] font-[satoshi] font-normal px-4 py-3">
                  {item?.updated_on}{" "}
                </td>
                <td className="border border-gray-800 text-[16px] max-tablet:text-[16px] font-[satoshi] font-normal px-4 py-3">
                  {item.modified_by}
                </td>
                <a href={`/campaign-details/${item.id}`}>
                  <td className="border border-gray-800 text-[16px] max-tablet:text-[16px] font-[satoshi] font-normal px-4 py-3">
                    <SuccessButton text={"View"} />
                  </td>
                </a>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ModificationLogTable;
