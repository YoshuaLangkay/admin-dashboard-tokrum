import { Nav, Button } from "react-bootstrap";
import "../css/sidenav.css";
import iconTokrum from "../image/icontokrum.png";
import Dasboard from "./Dasboard";

function SideNav() {
  return (
    <>
      <div className="dasboard d-flex border">
        <div className="side-nav">
          <div className="text-center icontokrum  d-flex justify-content-center align-items-center">
            <img src={iconTokrum} alt="icon"  />
          </div>
          <div className="mt-4 navbtn d-flex flex-column justify-content-center">
            <Nav variant="pills" defaultActiveKey="#" className="flex-column">
              <Nav.Item className="activebtn">
                <Nav.Link href="#" className="labelLink">
                  <div className="d-flex align-items-center mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#B6C7EE "
                        d="m20.512 9.722-7.5-6.816a1.5 1.5 0 0 0-2.024 0l-7.5 6.816A1.5 1.5 0 0 0 3 10.828v8.634c-.006.379.127.746.375 1.032A1.49 1.49 0 0 0 4.5 21H9a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v4.5A.75.75 0 0 0 15 21h4.5c.249.002.494-.06.712-.178A1.51 1.51 0 0 0 21 19.5v-8.672a1.5 1.5 0 0 0-.488-1.106Z"
                      />
                    </svg>
                    <span className="labelIcon mx-1 px-1 px-1 ">Dasboard</span>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="activebtn mt-2  ">
                <Nav.Link eventKey="link-1" className="labelLink">
                  <div className="d-flex align-items-center  mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <g fill="#B6C7EE">
                        <path d="M12 15.375a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25Z" />
                        <path d="M12 2.25A9.75 9.75 0 1 0 21.75 12 9.769 9.769 0 0 0 12 2.25Zm6.169 15.225a7.622 7.622 0 0 0-2.297-2.156 5.597 5.597 0 0 1-7.744 0 7.622 7.622 0 0 0-2.297 2.156 8.25 8.25 0 1 1 12.338 0Z" />
                      </g>
                    </svg>
                    <span className="labelIcon mx-1 px-1">Pengguna</span>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="activebtn mt-2  ">
                <Nav.Link eventKey="link-2" className="labelLink">
                  <div className="d-flex align-items-center  mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#B6C7EE"
                        d="M21 4.5H3A1.5 1.5 0 0 0 1.5 6v11.991a1.5 1.5 0 0 0 1.5 1.5h18a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 21 4.5Zm-8.25 12h-1.5a.75.75 0 1 1 0-1.5h1.5a.75.75 0 1 1 0 1.5Zm6 0h-3a.75.75 0 1 1 0-1.5h3a.75.75 0 1 1 0 1.5ZM3 8.334V6h18v2.334H3Z"
                      />
                    </svg>
                    <span className="labelIcon mx-1 px-1">Produk</span>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="activebtn mt-2  ">
                <Nav.Link eventKey="link-3" className="labelLink">
                  <div className="d-flex align-items-center  mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      fill="none"
                      viewBox="0 0 26 26"
                    >
                      <g
                        stroke="#B6C7EE  "
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.438"
                      >
                        <path d="M13 22.75c5.385 0 9.75-4.365 9.75-9.75S18.385 3.25 13 3.25 3.25 7.615 3.25 13s4.365 9.75 9.75 9.75Z" />
                        <path d="m14.727 14.727 2.275-5.739-5.729 2.285-2.295 5.749 5.749-2.295Z" />
                      </g>
                    </svg>

                    <span className="labelIcon mx-1 px-1">Chat</span>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <div className="text-center my-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="184"
                  height="2"
                  fill="none"
                  viewBox="0 0 184 2"
                >
                  <path
                    stroke="#E5ECFC"
                    stroke-linecap="round"
                    stroke-width="1.097"
                    d="M1 1h182"
                  />
                </svg>
              </div>
              <Nav.Item className="activebtn ">
                <Nav.Link eventKey="link-4" className="labelLink">
                  <div className="d-flex align-items-center mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#B6C7EE"
                        d="M22.266 9.778a.75.75 0 0 0-.375-.497l-2.232-1.237a6.995 6.995 0 0 0-.393-.703l.037-2.55a.776.776 0 0 0-.244-.572 10.5 10.5 0 0 0-3.853-2.222.759.759 0 0 0-.618.075l-2.185 1.312a12.034 12.034 0 0 0-.806 0L9.413 2.072a.76.76 0 0 0-.62-.075 10.416 10.416 0 0 0-3.852 2.231.74.74 0 0 0-.244.563l.047 2.55c-.15.225-.281.459-.413.703L2.11 9.28a.722.722 0 0 0-.375.497 10.444 10.444 0 0 0 0 4.444.75.75 0 0 0 .375.497l2.232 1.237c.12.243.254.478.403.703l-.047 2.55a.778.778 0 0 0 .244.572 10.585 10.585 0 0 0 3.853 2.222.758.758 0 0 0 .618-.075l2.185-1.312h.806l2.194 1.312a.684.684 0 0 0 .384.113.937.937 0 0 0 .225-.038 10.416 10.416 0 0 0 3.853-2.231.741.741 0 0 0 .244-.563l-.037-2.55c.14-.225.272-.459.403-.703l2.23-1.235a.741.741 0 0 0 .366-.497 10.47 10.47 0 0 0 0-4.444ZM16.125 12a4.125 4.125 0 1 1-8.25 0 4.125 4.125 0 0 1 8.25 0Z"
                      />
                    </svg>

                    <span className="labelIcon mx-1 px-1">Pengaturan</span>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="activebtn mt-2">
                <Nav.Link eventKey="link-5" className="labelLink">
                  <div className="d-flex align-items-center mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#B6C7EE"
                        d="M12 2.25A9.75 9.75 0 1 0 21.75 12 9.769 9.769 0 0 0 12 2.25ZM12 18a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 18Zm.75-4.584v.084a.75.75 0 1 1-1.5 0v-.75A.75.75 0 0 1 12 12a1.875 1.875 0 1 0-1.875-1.875.75.75 0 1 1-1.5 0 3.375 3.375 0 1 1 4.125 3.29Z"
                      />
                    </svg>
                    <span className="labelIcon mx-1 px-1">Pusat Bantuan</span>
                  </div>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <div className="exit pb-3 d-flex align-items-end justify-content-center">
              <Button className="button-Keluar">Keluar</Button>
            </div>
          </div>
        </div>

        {/* SIDE NAV */}

        <div className="content">
          <Dasboard/>
          
        </div>
      </div>
    </>
  );
}

export default SideNav;
