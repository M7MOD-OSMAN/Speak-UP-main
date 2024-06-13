// import axios from "axios";
// import { useEffect, useState } from "react";
// import DataTable from "react-data-table-component";

// import { BsSearch } from "react-icons/bs";
// import { BsFilterLeft } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";

// const columns = [
//   {
//     name: "Report No.",
//     selector: (row) => row.number,
//     sortable: true,
//     grow: 1,
//   },

//   {
//     name: "Company",
//     selector: (row) => row.company,
//   },
//   {
//     name: "Labels",
//     selector: (row) => row.labels,
//   },
//   {
//     name: "Message",
//     selector: (row) => row.message,
//   },
// ];

// const data = [
//   {
//     id: 1,
//     number: "qCJQt",
//     company: "Mountain View",
//     message:
//       "hiw we wer wqew wqd nowqnep  qdwqdwdqwd wdeqwp  wd mwdpwm pwm qwpew pwemqw pemwqpo qwmopm qwpo dqwp",
//     assignee_name: "Moaaz",
//     labels: "Fraud ",
//   },
//   {
//     id: 1,
//     number: "qCJQt",
//     company: "DMA",
//     message:
//       "hiw we wer wqew wqd nowqnep  qdwqdwdqwd wdeqwp  wd mwdpwm pwm qwpew pwemqw pemwqpo qwmopm qwpo dqwp",
//     assignee_name: "Nancy",
//     labels: "Disrespect",
//   },
//   {
//     id: 1,
//     number: "qCJQt",
//     company: "DME",
//     message:
//       "hiw we wer wqew wqd nowqnep  qdwqdwdqwd wdeqwp  wd mwdpwm pwm qwpew pwemqw pemwqpo qwmopm qwpo dqwp",
//     assignee_name: "Moaaz",
//     labels: "Harassment",
//   },
//   {
//     id: 1,
//     number: "qCJQt",
//     company: "Curve",
//     message:
//       "hiw we wer wqew wqd nowqnep  qdwqdwdqwd wdeqwp  wd mwdpwm pwm qwpew pwemqw pemwqpo qwmopm qwpo dqwp",
//     assignee_name: "Mahmoud",
//     labels: "Bullying",
//   },
//   {
//     id: 1,
//     number: "qCJQt",
//     company: "Mountain View",
//     message:
//       "hiw we wer wqew wqd nowqnep  qdwqdwdqwd wdeqwp  wd mwdpwm pwm qwpew pwemqw pemwqpo qwmopm qwpo dqwp",
//     assignee_name: "Moaaz",
//     labels: "Fraud",
//   },
//   {
//     id: 1,
//     number: "qCJQt",
//     company: "DMC",
//     message:
//       "hiw we wer wqew wqd nowqnep  qdwqdwdqwd wdeqwp  wd mwdpwm pwm qwpew pwemqw pemwqpo qwmopm qwpo dqwp",
//     assignee_name: "Moaaz",
//     labels: "Disrespect",
//   },
//   {
//     id: 1,
//     number: "qCJQt",
//     company: "Mountain View",
//     message:
//       "hiw we wer wqew wqd nowqnep  qdwqdwdqwd wdeqwp  wd mwdpwm pwm qwpew pwemqw pemwqpo qwmopm qwpo dqwp",
//     assignee_name: "Moaaz",
//     labels: "Fraud",
//   },
//   {
//     id: 1,
//     number: "qCJQt",
//     company: "Mountain View",
//     message:
//       "hiw we wer wqew wqd nowqnep  qdwqdwdqwd wdeqwp  wd mwdpwm pwm qwpew pwemqw pemwqpo qwmopm qwpo dqwp",
//     assignee_name: "Moaaz",
//     labels: "Discrimination",
//   },
//   {
//     id: 1,
//     number: "qCJQt",
//     company: "Mountain View",
//     message:
//       "hiw we wer wqew wqd nowqnep  qdwqdwdqwd wdeqwp  wd mwdpwm pwm qwpew pwemqw pemwqpo qwmopm qwpo dqwp",
//     assignee_name: "Moaaz",
//     labels: "Bullying",
//   },
//   {
//     id: 1,
//     number: "qCJQt",
//     company: "Mountain View",
//     message:
//       "hiw we wer wqew wqd nowqnep  qdwqdwdqwd wdeqwp  wd mwdpwm pwm qwpew pwemqw pemwqpo qwmopm qwpo dqwp",
//     assignee_name: "Moaaz",
//     labels: "Discrimination",
//   },
//   {
//     id: 1,
//     number: "qCJQt",
//     company: "Mountain View",
//     message:
//       "hiw we wer wqew wqd nowqnep  qdwqdwdqwd wdeqwp  wd mwdpwm pwm qwpew pwemqw pemwqpo qwmopm qwpo dqwp",
//     assignee_name: "Moaaz",
//     labels: "Discrimination",
//   },
//   {
//     id: 1,
//     number: "qCJQt",
//     company: "Mountain View",
//     message:
//       "hiw we wer wqew wqd nowqnep  qdwqdwdqwd wdeqwp  wd mwdpwm pwm qwpew pwemqw pemwqpo qwmopm qwpo dqwp",
//     assignee_name: "Moaaz",
//     labels: "Discrimination",
//   },
// ];

// const customStyles = {
//   headCells: {
//     style: {
//       backgroundColor: "rgb(226,226,226)",
//       color: "var(--main-color)",
//       fontSize: "16px",
//       fontWeight: "bold",
//     },
//   },
//   headRow: {
//     style: {
//       backgroundColor: "rgba(34, 34, 34, 0.9)",
//     },
//   },
// };
// function Dashboard() {
//   const [dataTable, setDataTable] = useState([]);
//   const [query, setQuery] = useState("");
//   const [selectedFilter, setSelectedFilter] = useState("");

//   const navigate = useNavigate();

//   const handleSearchChange = (e) => {
//     setQuery(e.target.value);
//   };

//   const handleSelectChange = (e) => {
//     setSelectedFilter(e.target.value);
//   };

//   const getAllCases = async () => {
//     const formDataToSend = new FormData();
//     formDataToSend.append("data_type", "getAllCases");
//     try {
//       const res = await axios.post(
//         "https://dmgian.corp-dmg.com/_speakup_api/index.php",
//         formDataToSend
//       );
//       console.log(res?.data);
//       // setDataTable(res?.data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   useEffect(() => {
//     console.log(selectedFilter);
//   }, [selectedFilter]);

//   useEffect(() => {
//     getAllCases();
//   }, []);

//   useEffect(() => {
//     let filteredData = data;

//     // Apply search query filter
//     if (query) {
//       filteredData = filteredData.filter((row) =>
//         Object.values(row).some((val) =>
//           String(val).toLowerCase().includes(query.toLowerCase())
//         )
//       );
//     }

//     // Apply selected filter
//     if (selectedFilter) {
//       filteredData = filteredData.sort((a, b) => {
//         if (a[selectedFilter] < b[selectedFilter]) return -1;
//         if (a[selectedFilter] > b[selectedFilter]) return 1;
//         return 0;
//       });
//     }

//     setDataTable(filteredData);
//   }, [query, selectedFilter]);

//     useEffect(() => {
//       // Transform the data to the desired format
//       const transformData = () => {
//         const newCases = casesArray.map((caseItem, index) => ({
//           id: index + 1,
//           number: caseItem.code,
//           company: caseItem.company,
//           message: caseItem.message,
//           assignee_name: caseItem.asignee || "N/A", // Assuming `asignee` is the assignee name
//           labels: caseItem.classification,
//         }));

//         setFormattedCases(newCases);
//       };

//       transformData();
//     }, [casesArray]);
//   const handleRowClicked = (row, event) => {
//     console.log(row.number);
//     navigate(`/admin/cases/${row.number}`);
//   };
//   return (
//     <section>
//       <div className="container px-3">
//         <div className="row d-flex justify-content-between align-items-center flex-row">
//           <div className="col-6">
//             <h2 className="py-4 primary-color fw-bold">Cases</h2>
//           </div>
//           <div className="col-4 text-end">
//             <div className="input-group rounded">
//               <input
//                 type="search"
//                 className="form-control rounded border-0"
//                 placeholder="Search"
//                 aria-label="Search"
//                 aria-describedby="search-addon"
//                 value={query}
//                 onChange={handleSearchChange}
//               />
//               <span className="input-group-text border-0" id="search-addon">
//                 <BsSearch />
//               </span>
//             </div>
//           </div>
//           <div className=" col-2 d-flex justify-content-start align-items-center">
//             <BsFilterLeft size={35} />
//             <select
//               className="border-0 p-2"
//               value={selectedFilter}
//               onChange={handleSelectChange}
//             >
//               <option value="" disabled selected hidden>
//                 Sort by
//               </option>
//               <option value="label">Label</option>
//               <option value="company">Company</option>
//               <option value="status">Status</option>
//               <option value="closed">Closed</option>
//             </select>
//           </div>
//         </div>
//       </div>
//       <div className="px-3">
//         <DataTable
//           data={dataTable}
//           onRowClicked={handleRowClicked}
//           responsive
//           columns={columns}
//           highlightOnHover
//           pointerOnHover
//           pagination
//           customStyles={customStyles}
//         />
//       </div>
//     </section>
//   );
// }
// export default Dashboard;

import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

import { BsSearch } from "react-icons/bs";
import { BsFilterLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    name: "Report No.",
    selector: (row) => row.number,
    sortable: true,
    grow: 1,
  },
  {
    name: "Company",
    selector: (row) => row.company,
  },
  {
    name: "Labels",
    selector: (row) => row.labels,
  },
  {
    name: "Message",
    selector: (row) => row.message,
  },
];

const customStyles = {
  headCells: {
    style: {
      backgroundColor: "rgb(226,226,226)",
      color: "var(--main-color)",
      fontSize: "16px",
      fontWeight: "bold",
    },
  },
  headRow: {
    style: {
      backgroundColor: "rgba(34, 34, 34, 0.9)",
    },
  },
};

function Dashboard() {
  const [dataTable, setDataTable] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [formattedCases, setFormattedCases] = useState([]);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const getAllCases = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("data_type", "getAllCases");
    try {
      const res = await axios.post(
        "https://dmgian.corp-dmg.com/_speakup_api/index.php",
        formDataToSend
      );
      const casesArray = res?.data?.cases || [];
      // Transform the data to the desired format
      const newCases = casesArray.map((caseItem, index) => ({
        id: index + 1,
        number: caseItem.code,
        company: caseItem.company,
        message: caseItem.message,
        assignee_name: caseItem.asignee || "N/A", // Assuming `asignee` is the assignee name
        labels: caseItem.classification,
      }));
      setFormattedCases(newCases);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllCases();
  }, []);

  useEffect(() => {
    let filteredData = formattedCases;

    // Apply search query filter
    if (query) {
      filteredData = filteredData.filter((row) =>
        Object.values(row).some((val) =>
          String(val).toLowerCase().includes(query.toLowerCase())
        )
      );
    }

    // Apply selected filter
    if (selectedFilter) {
      filteredData = filteredData.sort((a, b) => {
        if (a[selectedFilter] < b[selectedFilter]) return -1;
        if (a[selectedFilter] > b[selectedFilter]) return 1;
        return 0;
      });
    }

    setDataTable(filteredData);
  }, [query, selectedFilter, formattedCases]);

  const handleRowClicked = (row, event) => {
    console.log(row.number);
    navigate(`/admin/cases/${row.number}`);
  };

  return (
    <section>
      <div className="container px-3">
        <div className="row d-flex justify-content-between align-items-center flex-row">
          <div className="col-6">
            <h2 className="py-4 primary-color fw-bold">Cases</h2>
          </div>
          <div className="col-4 text-end">
            <div className="input-group rounded">
              <input
                type="search"
                className="form-control rounded border-0"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                value={query}
                onChange={handleSearchChange}
              />
              <span className="input-group-text border-0" id="search-addon">
                <BsSearch />
              </span>
            </div>
          </div>
          <div className="col-2 d-flex justify-content-start align-items-center">
            <BsFilterLeft size={35} />
            <select
              className="border-0 p-2"
              value={selectedFilter}
              onChange={handleSelectChange}
            >
              <option value="" disabled hidden>
                Sort by
              </option>
              <option value="labels">Label</option>
              <option value="company">Company</option>
              <option value="status">Status</option>
            </select>
          </div>
        </div>
      </div>
      <div className="px-3">
        <DataTable
          data={dataTable}
          onRowClicked={handleRowClicked}
          responsive
          columns={columns}
          highlightOnHover
          pointerOnHover
          pagination
          customStyles={customStyles}
        />
      </div>
    </section>
  );
}

export default Dashboard;
