import { BsReply } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { IoDocumentAttachOutline } from "react-icons/io5";
import DataTable from "react-data-table-component";
import { IoMdDocument } from "react-icons/io";
import { BsTrash3Fill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { CgAttachment } from "react-icons/cg";
import { Form } from "react-bootstrap";
import { FaCirclePlay } from "react-icons/fa6";
import axios from "axios";

const Case = () => {
  const [message, setMessage] = useState("");
  const [showReply, setShowReply] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const [caseDetails, setCaseDetails] = useState({});
  const inputRef = useRef();
  let { no } = useParams();

  const BASE_URL = "https://dmgian.corp-dmg.com/_speakup_api/";

  const downloadFile = (filePath) => {
    if (filePath) {
      const fullPath = `${BASE_URL}${filePath.replace("./", "")}`;
      const link = document.createElement("a");
      link.href = fullPath;
      console.log(link.href, "asasa");

      link.target = "_blank";
      link.setAttribute("download", "");
      // link.setAttribute("download", fullPath.split("/").pop());
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const getFileName = (filePath) => {
    if (filePath?.startsWith("./request_attachments/")) {
      return filePath.replace("./request_attachments/", "");
    } else if (filePath?.startsWith("./request_records/")) {
      return filePath.replace("./request_records/", "");
    }
    return filePath || "Unknown File";
  };

  const getFileType = (fileName) => {
    return fileName ? fileName.split(".").pop() : "Unknown Type";
  };

  const fileName = getFileName(caseDetails.file);
  const recordName = getFileName(caseDetails.record);
  const fileType = getFileType(fileName);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Type",
      selector: (row) => row.type,
    },
    {
      name: "Received on",
      selector: (row) => row.received_on,
    },
    {
      name: "Audio",
      selector: (row) => row.audio,
      sortable: false,
    },
  ];
  const data = [
    {
      id: 1,
      name: (
        <>
          <IoMdDocument size={20} /> {fileName}
        </>
      ),
      type: `${fileType}`,
      received_on: (
        <>
          {caseDetails?.creation_date}&nbsp;
          <FiDownload
            size={20}
            onClick={() => downloadFile(caseDetails.file)}
          />
        </>
      ),
    },
    {
      id: 2,
      name: (
        <>
          <FaCirclePlay size={20} /> {recordName}
        </>
      ),
      type: `audio`,
      received_on: (
        <>
          {caseDetails?.creation_date} &nbsp; <FiDownload size={20} />
        </>
      ),
      audio: caseDetails.record ? (
        <audio controls>
          <source
            src={`${BASE_URL}${caseDetails.record.replace("./", "")}`}
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      ) : null,
    },
    // {
    //   id: 3,
    //   name: (
    //     <>
    //       <IoMdDocument size={20} /> 11325
    //     </>
    //   ),
    //   type: "Issue",
    //   received_on: (
    //     <>
    //       15 May 2024 8:45 <FiDownload size={20} />
    //     </>
    //   ),
    // },
    // {
    //   id: 4,
    //   name: (
    //     <>
    //       <IoMdDocument size={20} /> 11325
    //     </>
    //   ),
    //   type: "Report",
    //   received_on: (
    //     <>
    //       15 May 2024 8:45 <FiDownload size={20} />
    //     </>
    //   ),
    // },
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

  const getCase = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("data_type", "getCaseByCode");
    formDataToSend.append("case_code", no);
    try {
      const res = await axios.post(
        "https://dmgian.corp-dmg.com/_speakup_api/index.php",
        formDataToSend
      );
      console.log(res?.data.case_details);
      setCaseDetails(res?.data.case_details);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCase();

    console.log(caseDetails?.file);
  }, []);

  const buttonRef = useRef(null);

  const createRipple = (event) => {
    const button = buttonRef.current;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();
    const top = event.clientY - rect.top - radius;
    const left = event.clientX - rect.left - radius;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${left}px`;
    circle.style.top = `${top}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
    setShowReply((prevState) => !prevState);
  };
  const handleTextareaChange = (event) => {
    setMessage(event.target.value);
    // updateFormData({ message: event.target.value });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    inputRef.current?.click();
  };
  const handleDisplayFileDetails = () => {
    if (inputRef?.current?.files) {
      const file = inputRef.current.files[0];
      setUploadedFileName(file?.name);
      console.log("FILE", file);
      // updateFormData({ file });
    }
  };
  const textareaStyle = {
    resize: "none",
  };

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <section className="container">
      <div className="row">
        <div className="col-9">
          <div className="row">
            <h2 className="py-2 primary-color fw-bold">Cases</h2>
          </div>
          <div className="row mb-3">
            <div className="col-4 white-bg d-flex align-items-center">
              <p className="m-2 fw-bold ">
                <strong>Report Number: &nbsp;&nbsp; {caseDetails?.code}</strong>
              </p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="p-0">
              <div className="accordion" id="message">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Message
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show px-5 white-bg"
                    data-bs-parent="#message"
                  >
                    <div className="accordion-body px-5 ">
                      {caseDetails?.message}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="p-0">
              <div className="accordion" id="document">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      Document
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse show  white-bg"
                    data-bs-parent="#document"
                  >
                    <div className="accordion-body  ">
                      <div className="row">
                        <div className="d-flex flex-row gap-2 justify-content-end">
                          <div>
                            <button
                              ref={buttonRef}
                              className="awesome-button"
                              onClick={createRipple}
                              // className="issue-page-btns"
                            >
                              <BsReply size={20} /> Reply to message
                            </button>
                          </div>
                          <button className="awesome-button">
                            <FiDownload size={20} /> Download all
                          </button>
                          <button
                            ref={buttonRef}
                            className="awesome-button"
                            onClick={createRipple}
                          >
                            <IoDocumentAttachOutline size={20} /> Add documents
                          </button>
                        </div>
                        <div>
                          {showReply && (
                            <Form className="mt-3">
                              <Form.Group controlId="textarea">
                                <Form.Control
                                  as="textarea"
                                  className="textare p-3"
                                  rows={7}
                                  style={textareaStyle}
                                  placeholder="write Your Message"
                                  onChange={handleTextareaChange}
                                  value={message}
                                />
                              </Form.Group>
                              <div className="mt-3 d-flex justify-content-between align-items-center px-3 mb-2">
                                <span>
                                  You can also attach photos/videos/audio/voice
                                  note here.{" "}
                                </span>

                                <span>
                                  <span>
                                    <input
                                      type="file"
                                      ref={inputRef}
                                      className="d-none"
                                      onChange={handleDisplayFileDetails}
                                    />
                                    <button
                                      className="btn"
                                      onClick={handleUpload}
                                    >
                                      <span>{uploadedFileName}</span>
                                      <span>
                                        <CgAttachment
                                          cursor="pointer"
                                          size={30}
                                          className="chat-icon"
                                        />
                                      </span>
                                    </button>
                                  </span>
                                  <Link
                                    to="/rep-num"
                                    className="text-decoration-none"
                                  >
                                    <span
                                      onClick={handleSubmit}
                                      className="button border-0 text-white submit-btn rounded-1 fs-5 py-2 px-4"
                                    >
                                      Add
                                    </span>
                                  </Link>
                                </span>
                              </div>
                            </Form>
                          )}
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <DataTable
                          data={data}
                          responsive
                          columns={columns}
                          highlightOnHover
                          pointerOnHover
                          pagination
                          customStyles={customStyles}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 white-bg">
          <div className="white-bg mt-5 mb-3">
            <button
              className="border-0 p-2 text-white"
              style={{ backgroundColor: `var(--main-color)` }}
            >
              In Progress <IoIosArrowDown />
            </button>
          </div>
          <div className="mb-3">
            <p className="m-0 fw-bold">Assign to</p>
            <div>
              <select
                className="mb-3 form-select"
                aria-label="Default select example"
              >
                <option selected>Internal Committee</option>
                <option value="ibs">IBS</option>
                <option value="amr">Amr</option>
              </select>
            </div>
            <div className="text-end">
              <button
                className="border-0 p-1 px-3 rounded-pill text-white"
                style={{ backgroundColor: `var(--main-color2)` }}
              >
                Assign
              </button>
            </div>
          </div>
          <div className="mb-3">
            <p className="m-0 fw-bold">Classification</p>
            <div className="border p-2">{caseDetails?.classification}</div>
          </div>
          <div className="mb-3">
            <p className="m-0 fw-bold">Company</p>
            <div className="border p-2">{caseDetails?.company}</div>
          </div>
          <div className="mb-3">
            <p className="m-0 fw-bold">Received on</p>
            <div className="border p-2">{caseDetails?.creation_date}</div>
          </div>
          <div className="mb-3">
            <p className="m-0 fw-bold">Acknowledged on</p>
            <div className="border p-2">6 February 2024 2:20</div>
          </div>
          {/* <div className="mb-3">
            <p className="m-0 fw-bold">Expected Response Date</p>
            <div className="border p-2">10 February 2024 2:20</div>
          </div> */}
          <div className="mb-3">
            <p className="m-0 fw-bold">Last Updated</p>
            <div className="border p-2">8 February 2024 2:20</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Case;
