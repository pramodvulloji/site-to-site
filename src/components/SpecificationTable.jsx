import React from 'react';

const SpecificationsTable = ({ specs }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md col-span-2 text-sm">
      <h3 className="text-xl font-bold">Specification</h3>
      <table className="table-auto w-full mt-4">
        <tbody>
          {Object.keys(specs).map((key) => (
            <tr key={key}>
              <td className="border-b py-1 font-semibold">{key}</td>
              <td className="border-b py-1">{specs[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecificationsTable;
