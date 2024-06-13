// import React, { useState, useEffect } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   LabelList,
// } from "recharts";
// import { BsListCheck } from "react-icons/bs";
// import { LuArrowDownUp } from "react-icons/lu";
// import axios from "axios";

// const BASE_URL = "https://dmgian.corp-dmg.com/_speakup_api/";

// const Analysis = () => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [filteredData2, setFilteredData2] = useState([]);
//   const [status, setStatus] = useState("");
//   const [caseReport, setCaseReport] = useState("");

//   useEffect(() => {
//     //  data_type ==> getAbalysisByClass
//     //  for companies reports ==> getAbalysisByComp
//     const getAllCases = async () => {
//       try {
//         const formDataToSend = new FormData();
//         formDataToSend.append("data_type", "getAbalysisByClass");
//         const response = await axios.post(
//           "https://dmgian.corp-dmg.com/_speakup_api/index.php",
//           formDataToSend
//         );

//         console.log(response.data.classification_report.Harassment);
//         setFilteredData(
//           Object.entries(response?.data.cases).map(([name, cases]) => ({
//             name,
//             cases,
//           }))
//         );
//         const processedData = response?.data.cases.map((item) => ({
//           name: item.classification,
//           status: item.status,
//           cases: 1,
//           company: item.company,
//           amt: 2,
//         }));

//         setData(response?.data.cases);
//         // setFilteredData(response?.data.cases);
//         setFilteredData2(processedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     getAllCases();
//   }, []);

//   function handleStatusChange(e) {
//     setStatus(e.target.value);
//     const filtered = data.filter((item) => item.status === e.target.value);
//     setFilteredData(filtered);
//   }

//   function handleCaseReportChange(e) {
//     setCaseReport(e.target.value);
//   }

//   return (
//     <section className="container">
//       <div className="row ">
//         <h2 className="py-2 primary-color fw-bold">Analysis</h2>
//       </div>
//       <div className="row pe-3">
//         <h4 className="bg-secondary text-white p-3" style={{ width: "700px" }}>
//           Cases Overview
//         </h4>
//       </div>
//       <div className="row">
//         <div className="col-3 white-bg">
//           <div className="row ">
//             <p
//               className="p-2 px-3 text-white"
//               style={{ backgroundColor: "var(--main-color)" }}
//             >
//               Assignee &nbsp; <LuArrowDownUp /> &nbsp;Number of issues
//             </p>
//           </div>
//           <div className="row px-2">
//             {/* Replace with dynamic content based on filteredData */}
//           </div>
//           <div className="row white-bg mb-4">
//             <div className="analysis-bg p-3 mb-4">
//               <div className="">
//                 <h5>Yearly/Quarterly Report</h5>
//               </div>
//             </div>
//             <div>
//               <ResponsiveContainer width="100%" height={300}>
//                 <BarChart
//                   data={filteredData}
//                   margin={{
//                     top: 5,
//                     right: 5,
//                     left: 5,
//                     bottom: 5,
//                   }}
//                   barSize={30}
//                 >
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="cases" fill="#001a70">
//                     <LabelList dataKey="cases" position="insideTop" />
//                   </Bar>
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>
//         <div className="col-5">
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart
//               data={filteredData2}
//               margin={{
//                 top: 5,
//                 right: 5,
//                 left: 5,
//                 bottom: 5,
//               }}
//               barSize={30}
//             >
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="classification" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="cases" fill="#001a70">
//                 <LabelList dataKey="cases" position="insideTop" />
//               </Bar>
//               <Legend />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//         <div className="col-4">
//           <div className="row white-bg mb-4">
//             <div className="analysis-bg p-3 mb-4">
//               <div className="d-flex flex-row justify-content-between align-items-center px-4">
//                 <div className="h5">Cases status</div>
//                 <div className="h5">
//                   Filter by{" "}
//                   <span>
//                     {" "}
//                     <BsListCheck />{" "}
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <select
//                 className="mb-3 form-select"
//                 aria-label="Default select example"
//                 value={status}
//                 onChange={handleStatusChange}
//               >
//                 <option value="" disabled selected hidden>
//                   All
//                 </option>
//                 <option value="closed">Closed</option>
//                 <option value="in-progress">In progress</option>
//                 <option value="new">New</option>
//               </select>
//             </div>
//           </div>
//           <div className="row white-bg">
//             <div className="analysis-bg p-3 mb-4">
//               <div className="d-flex flex-row justify-content-between align-items-center px-4">
//                 <div className="h5">Cases report</div>
//                 <div className="h5">
//                   Filter by{" "}
//                   <span>
//                     {" "}
//                     <BsListCheck />{" "}
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <select
//                 className="mb-3 form-select"
//                 aria-label="Default select example"
//                 value={caseReport}
//                 onChange={handleCaseReportChange}
//               >
//                 <option value="" disabled selected hidden>
//                   Status
//                 </option>
//                 <option value="assignee">Assignee</option>
//                 <option value="classification">Classification</option>
//                 <option value="company">Company</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Analysis;

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { BsListCheck } from "react-icons/bs";

import { LuArrowDownUp } from "react-icons/lu";
import { useEffect, useState } from "react";
import axios from "axios";
import { log } from "tone/build/esm/core/util/Debug";

const Analysis = () => {
  const data = [
    {
      name: "discrimination",
      status: "closed",
      cases: 1,
      company: "DMA",
      amt: 2,
    },

    {
      name: "Fraud",
      status: "closed",
      cases: 5,
      company: "MV",
      amt: 1,
    },

    {
      name: "Harassment",
      status: "new",
      cases: 9,
      company: "DME",
      amt: 2,
    },
    {
      name: "Drugs",
      status: "closed",
      cases: 9,
      company: "DME",
      amt: 3,
    },
    {
      name: "Bullying",
      status: "in-progress",
      cases: 3,
      company: "DMA",
      amt: 9,
    },
  ];

  const [filteredData, setFilteredData] = useState(data);
  const [filteredData2, setFilteredData2] = useState([]);
  const [classData, setClassData] = useState([]);
  const [allClasses, setAllClasses] = useState([]);
  const [status, setStatus] = useState("");
  const [caseReport, setCaseReport] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [mainFilter, setMainFilter] = useState("classification");
  function handleChangeStatus(e) {
    setStatusFilter(e.target.value);
  }
  function handleChangeMainFilter(e) {
    setMainFilter(e.target.value);
  }
  const getBarCountData = async (filterType) => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("data_type", filterType);
      const response = await axios.post(
        "https://dmgian.corp-dmg.com/_speakup_api/index.php",
        formDataToSend
      );

      console.log(response?.data);
      const x =
        mainFilter == "company"
          ? "company_report"
          : mainFilter == "classification"
          ? "classification_report"
          : "assignee_report";

      setClassData(response?.data[x]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    if (statusFilter == "all") {
      console.log("sdsadsdsdssdsf");
      getBarCountData(
        mainFilter == "company"
          ? "getAbalysisByComp"
          : mainFilter == "classification"
          ? "getAbalysisByClass"
          : "getAbalysisByAssignee"
      );
    } else {
      if (mainFilter == "classification") {
      }
    }
  }, [statusFilter, mainFilter]);

  useEffect(() => {
    //  data_type ==> getAbalysisByClass
    //  for companies reports ==> getAbalysisByComp
    const getAllCases = async () => {
      try {
        const formDataToSend = new FormData();
        formDataToSend.append("data_type", "getAbalysisByComp");
        const response = await axios.post(
          "https://dmgian.corp-dmg.com/_speakup_api/index.php",
          formDataToSend
        );

        console.log("comp", response?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getAllCases();
  }, []);

  function handleCaseReportChange(e) {
    setCaseReport(e.target.value);
  }

  const getAllCases = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("data_type", "getAllCases");
    try {
      const res = await axios.post(
        "https://dmgian.corp-dmg.com/_speakup_api/index.php",
        formDataToSend
      );

      setAllClasses(res?.data.cases);
    } catch (error) {
      console.log(error.message);
    }
  };

  const data2 = [
    {
      name: "2024",
      cases: `${allClasses?.length}`,
      company: "DME",
      amt: 3,
    },
  ];

  useEffect(() => {
    getAllCases();
  }, []);
  useEffect(() => {
    console.log("allCases", allClasses);
  }, [allClasses]);
  return (
    <section className="container">
      <div className="row ">
        <h2 className="py-2 primary-color fw-bold">Analysis</h2>
      </div>
      <div className="row pe-3">
        <h4 className="bg-secondary text-white p-3" style={{ width: "700px" }}>
          Cases Overview
        </h4>
      </div>
      <div className="row">
        <div className="col-3 white-bg">
          <div className="row ">
            <p
              className="p-2 px-3 text-white"
              style={{ backgroundColor: "var(--main-color)" }}
            >
              Assignee &nbsp; <LuArrowDownUp /> &nbsp;Number of issues
            </p>
          </div>
          <div className="row px-2">
            <div className="d-flex justify-content-between align-items-center">
              <p>IBS</p>
              <p>1</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p>Internal Audit</p>
              <p>3</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p>Amr Soliman</p>
              <p>1</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p>Culture Committee</p>
              <p>1</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <p></p>
              <p>7</p>
            </div>
          </div>
          <div className="row white-bg mb-4">
            <div className="analysis-bg p-3 mb-4">
              <div className="">
                <h5>Yearly/Quarterly Report</h5>
              </div>
            </div>
            <div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={data2}
                  margin={{
                    top: 5,
                    right: 5,
                    left: 5,
                    bottom: 5,
                  }}
                  barSize={30}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="cases" fill="#001a70">
                    <LabelList dataKey="cases" position="insideTop" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="col-5">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={classData}
              margin={{
                top: 5,
                right: 5,
                left: 5,
                bottom: 5,
              }}
              barSize={30}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={mainFilter} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#001a70">
                <LabelList dataKey="count" position="insideTop" />
              </Bar>
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="col-4">
          <div className="row white-bg mb-4">
            <div className="analysis-bg p-3 mb-4">
              <div className="d-flex flex-row justify-content-between align-items-center px-4">
                <div className="h5">Cases status</div>
                <div className="h5">
                  Filter by{" "}
                  <span>
                    {" "}
                    <BsListCheck />{" "}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <select
                className="mb-3 form-select"
                aria-label="Default select example"
                value={statusFilter}
                onChange={handleChangeStatus}
              >
                <option value="all" selected>
                  All
                </option>
                <option value="closed">Closed</option>
                <option value="in-progress">In progress</option>
                <option value="new">New</option>
              </select>
            </div>
          </div>
          <div className="row white-bg">
            <div className="analysis-bg p-3 mb-4">
              <div className="d-flex flex-row justify-content-between align-items-center px-4">
                <div className="h5">Cases report</div>
                <div className="h5">
                  Filter by{" "}
                  <span>
                    {" "}
                    <BsListCheck />{" "}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <select
                className="mb-3 form-select"
                aria-label="Default select example"
                value={mainFilter}
                onChange={handleChangeMainFilter}
              >
                <option value="" disabled selected hidden>
                  Status
                </option>
                <option value="assignee">Assignee</option>
                <option value="classification">Classification</option>
                <option value="company">Company</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
