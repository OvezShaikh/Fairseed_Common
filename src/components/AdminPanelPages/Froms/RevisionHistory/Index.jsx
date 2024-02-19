import React from 'react';
import SuccessButton from '../../inputs/SuccessButton/Index'

function ModificationLogTable() {
    return (
        <table className="table-auto border-collapse border border-gray-800">
            <thead>
                <tr className="">
                    <th className="border border-gray-800 px-4 text-[26px] font-[satoshi] font-light py-3">Modification Date</th>
                    <th className="border border-gray-800 px-4 text-[26px] font-[satoshi] font-light py-3">Modified By</th>
                    <th className="border border-gray-800 px-4 text-[26px] font-[satoshi] font-light py-3">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr className="">
                    <td className="border border-gray-800 text-[16px] font-[satoshi] font-normal px-4 py-3">2024-02-18 09:30:00</td>
                    <td className="border border-gray-800 text-[16px] font-[satoshi] font-normal px-4 py-3">Alice</td>
                    <td className="border border-gray-800 text-[16px] font-[satoshi] font-normal px-4 py-3"><SuccessButton text={"View"} /></td>
                </tr>
                <tr className="">
                    <td className="border border-gray-800 text-[16px] font-[satoshi] font-normal  px-4 py-3">2024-02-18 10:45:00</td>
                    <td className="border border-gray-800 text-[16px] font-[satoshi] font-normal px-4 py-3">Bob</td>
                    <td className="border border-gray-800 text-[16px] font-[satoshi] font-normal px-4 py-3"><SuccessButton text={"View"} /></td>
                </tr>
                <tr className="">
                    <td className="border border-gray-800 text-[16px] font-[satoshi] font-normal px-4 py-3">2024-02-18 11:15:00</td>
                    <td className="border border-gray-800 text-[16px] font-[satoshi] font-normal px-4 py-3">Charlie</td>
                    <td className="border border-gray-800 text-[16px] font-[satoshi] font-normal px-4 py-3"><SuccessButton text={"View"} /></td>
                </tr>
                <tr className="">
                    <td className="border border-gray-800 text-[16px] font-[satoshi] font-normal px-4 py-3">2024-02-18 13:00:00</td>
                    <td className="border border-gray-800 text-[16px] font-[satoshi] font-normal px-4 py-3">David</td>
                    <td className="border border-gray-800 text-[16px] font-[satoshi] font-normal px-4 py-3"><SuccessButton text={"View"} /></td>
                </tr>
            </tbody>
        </table>
    );
}

export default ModificationLogTable;
