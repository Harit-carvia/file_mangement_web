"use client"
import React, { useState } from 'react';
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";


const ContentTable = () => {
  // Example data for the table rows
  const data = [
    { name: 'File1', size: '2MB', updateDate: '01/10/2024', author: 'John', version: '1.0' },
    { name: 'File2', size: '5MB', updateDate: '11/10/2024', author: 'Alice', version: '1.2' },
    { name: 'File3', size: '3MB', updateDate: '22/11/2024', author: 'Bob', version: '1.5' },
    { name: 'File4', size: '8MB', updateDate: '09/12/2024', author: 'Charlie', version: '2.0' },
  ];

  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set()); // Track selected rows
  const [selectAll, setSelectAll] = useState(false); // Track "Select All" state

  // Toggle selection of a single row
  const handleRowSelect = (index: number) => {
    const updatedSelectedRows = new Set(selectedRows);
    if (updatedSelectedRows.has(index)) {
      updatedSelectedRows.delete(index);
    } else {
      updatedSelectedRows.add(index);
    }
    setSelectedRows(updatedSelectedRows);
  };

  // Toggle select all rows
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(data.map((_, index) => index)));
    }
    setSelectAll(!selectAll);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className='text-left'>
            <th className="px-4 py-2 border-b">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
                className="form-checkbox"
              />
            </th>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Size</th>
            <th className="px-4 py-2 border-b">Update Date</th>
            <th className="px-4 py-2 border-b">Author</th>
            <th className="px-4 py-2 border-b">Version</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">
                <input
                  type="checkbox"
                  checked={selectedRows.has(index)}
                  onChange={() => handleRowSelect(index)}
                  className="form-checkbox"
                />
              </td>
              <td className="px-4 py-2 border-b flex items-center gap-1"><PiMicrosoftExcelLogoFill className="text-green-800" size={20}/>{row.name}</td>
              <td className="px-4 py-2 border-b">{row.size}</td>
              <td className="px-4 py-2 border-b text-gray-400">{row.updateDate}</td>
              <td className="px-4 py-2 border-b">{row.author}</td>
              <td className="px-4 py-2 border-b">{row.version}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentTable;
