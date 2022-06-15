import React from 'react'
import { Container,Form,Alert, Row, Col,Modal, Button, InputGroup, FormControl, Table, Pagination } from "react-bootstrap";
import  { useState, useEffect } from "react";
import '../../css/modalHalal.css';
import SH from '../../image/SH.png';

function IzinDokumen() {
    const [hideAlert, setHideAlert] = useState(true)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showPenolakan, setShowPenolakan] = useState(false);

    const handleClosePenolakan = () => setShowPenolakan(false);
    const handleShowPenolakan = () => {
        setShowPenolakan(true) 
        setShow(false);
    }

    
    function clickTutup(){
        setHideAlert(true)
    }

    function showAlert(){
        if(hideAlert == true){
            setHideAlert(false)
        }else{
            setHideAlert(true)
        }
    }

        // download image
    const download = e => {
        console.log(e.target.href);
        fetch(e.target.href, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = window.URL.createObjectURL(new Blob([buffer]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png"); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          });
      };
    
  return (
    <Container fluid className="boxProfileUsaha ">

        <div style={{
            backgroundColor:'#DBF3EF',
            paddingTop:'10px',
            paddingLeft:'20px',
            borderRadius:'12px',
        }} className="alert-konfirm d-flex" show={hideAlert}>
        <svg className='mt-2' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.52081 2.64585C6.29249 2.58427 7.02508 2.28082 7.61428 1.7787C8.98925 0.606968 11.0115 0.606968 12.3865 1.7787C12.9757 2.28082 13.7083 2.58427 14.48 2.64585C16.2808 2.78955 17.7107 4.21953 17.8544 6.02032C17.916 6.792 18.2195 7.52459 18.7216 8.11379C19.8933 9.48876 19.8933 11.511 18.7216 12.886C18.2195 13.4752 17.916 14.2078 17.8544 14.9795C17.7107 16.7803 16.2808 18.2103 14.48 18.354C13.7083 18.4155 12.9757 18.719 12.3865 19.2211C11.0115 20.3928 8.98925 20.3928 7.61428 19.2211C7.02508 18.719 6.29249 18.4155 5.52081 18.354C3.72002 18.2103 2.29004 16.7803 2.14634 14.9795C2.08476 14.2078 1.78131 13.4752 1.27919 12.886C0.107456 11.511 0.107456 9.48876 1.27919 8.11379C1.78131 7.52459 2.08476 6.792 2.14634 6.02032C2.29004 4.21953 3.72002 2.78955 5.52081 2.64585ZM14.4489 8.94843C14.9175 8.4798 14.9175 7.72 14.4489 7.25137C13.9803 6.78275 13.2205 6.78275 12.7519 7.25137L8.80039 11.2028L7.24892 9.65137C6.78029 9.18274 6.02049 9.18274 5.55186 9.65137C5.08323 10.12 5.08323 10.8798 5.55186 11.3484L7.95186 13.7484C8.42049 14.2171 9.18029 14.2171 9.64892 13.7484L14.4489 8.94843Z" fill="#49C2AE"/>
        </svg>

        <h1 style={{
            fontSize:'16px',
            
        }} className='txt-konfirmasi p-2'>Konfirmasi Penolakan Dokumen telah dikirim</h1>


            <h1 onClick={clickTutup} style={{
                        fontSize:'20px',
                        marginLeft:'400px'
                    }} className='txt-konfirmasi p-2'>Tutup</h1>

            </div>
                <Modal 
                    className="modalPenolakan"
                    show={showPenolakan}
                    onHide={handleClosePenolakan}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Konfirmasi Penolakan Dokumen</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <svg width="787" height="103" viewBox="0 0 787 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="786" height="102" rx="5.5" fill="#FFF4CC" stroke="#FFC600" stroke-dasharray="3 3"/>
                        <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M25.1822 41.0246C30.6212 41.0246 35.0304 36.6023 35.0304 31.1472C35.0304 25.692 30.6212 21.2698 25.1822 21.2698C19.7432 21.2698 15.334 25.692 15.334 31.1472C15.334 36.6023 19.7432 41.0246 25.1822 41.0246Z" fill="#FFC600"/>
                        <rect x="24.1973" y="26.2085" width="1.96964" height="7.90194" rx="0.984822" fill="#F89C47"/>
                        <rect x="24.1973" y="35.0981" width="1.96964" height="1.97549" rx="0.984822" fill="#F89C47"/>
                        </svg>

                        <h3
                  className="title"
                  style={{ marginTop: "30px", marginLeft: "5px", color:'#035397' }}
                >Keterangan</h3>



                
                
                    </Modal.Body>
                    <Modal.Footer>
                    
                    <Button onClick={showAlert} variant="danger" className='text-danger bg-white'>Konfirmasi</Button>
                    <Button variant="primary" className='text-primary' style={{
                        backgroundColor:'#EEF1F9'
                    }} onClick={handleClosePenolakan}>
                        Kembali
                    </Button>
                    </Modal.Footer>
                </Modal>

            <Modal className="modalSertifikatHalal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Dokumen: Sertifikat Halal</Modal.Title>
                </Modal.Header>
                <a
                    href={SH}
                    onClick={e => download(e)}
                    className="logo-download"
                >
                    <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_i_600_21834)">
                    <rect width="44" height="43" fill="#253863"/>
                    <path d="M21.2266 24.1317L18.7967 21.7024L18.7967 21.7023L18.7963 21.7019C18.6501 21.563 18.4554 21.4867 18.2537 21.4893C18.052 21.4919 17.8593 21.5731 17.7167 21.7158C17.5741 21.8584 17.4928 22.0511 17.4902 22.2528C17.4876 22.4544 17.5639 22.6492 17.7029 22.7954L17.7028 22.7954L17.7033 22.7958L21.4533 26.5458L21.4533 26.5458C21.5983 26.6908 21.795 26.7722 22 26.7722C22.205 26.7722 22.4017 26.6908 22.5467 26.5458L22.5467 26.5458L26.2967 22.7958L26.2971 22.7954C26.4361 22.6492 26.5124 22.4544 26.5098 22.2528C26.5072 22.0511 26.4259 21.8584 26.2833 21.7158C26.1407 21.5731 25.948 21.4919 25.7463 21.4893C25.5446 21.4867 25.3499 21.563 25.2037 21.7019L25.2033 21.7024L22.7734 24.1317V17.0225H27.625C28.3147 17.0233 28.976 17.2976 29.4638 17.7853C29.9515 18.2731 30.2258 18.9344 30.2266 19.6241V29.3741C30.2258 30.0638 29.9515 30.7251 29.4638 31.2128C28.976 31.7006 28.3147 31.9749 27.625 31.9756H16.375C15.6853 31.9749 15.024 31.7006 14.5362 31.2128C14.0485 30.7251 13.7742 30.0638 13.7734 29.3741L13.7734 19.6241C13.7742 18.9343 14.0485 18.2731 14.5362 17.7853C15.024 17.2976 15.6853 17.0233 16.375 17.0225L21.2266 17.0225V24.1317Z" fill="#FBFBFB" stroke="#FBFBFB" stroke-width="0.046875"/>
                    <path d="M22.5138 11.2358C22.65 11.3721 22.7266 11.5569 22.7266 11.7496V16.9761H21.2734V11.7496C21.2734 11.5569 21.35 11.3721 21.4862 11.2358C21.6225 11.0996 21.8073 11.023 22 11.023C22.1927 11.023 22.3775 11.0996 22.5138 11.2358Z" fill="#FBFBFB" stroke="#FBFBFB" stroke-width="0.046875"/>
                    </g>
                    <defs>
                    <filter id="filter0_i_600_21834" x="0" y="0" width="44" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="-0.5"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_600_21834"/>
                    </filter>
                    </defs>
                    </svg>

                </a>
                <div className='modalSertifBody'>
                    <img className="img-sh" alt='sh' src={SH} />

                </div>
                
                <Modal.Footer>
                
                <Button onClick={handleShowPenolakan} variant="danger" className='bg-white text-danger'>
                    Tolak Dokumen
                </Button>
                <Button variant="primary" className='bg-white text-primary'  onClick={handleClose}>
                    Verifikasi Dokumen
                </Button>
                </Modal.Footer>
            </Modal>

            
                
			<div className="d-flex flex-column">
				<div className="pt-3 label-info d-flex  py-2">
					<Row className=" w-100">
						<Col>
							<div className="d-flex flex-column">
								<p className="ms-3 mb-0 p-0">Daftar Izin & Dokumen</p>
								<span className="ms-3 prd-hintProduk p-0">Lengkapi data izin dan dokumen anda disini</span>
							</div>
						</Col>
						<Col>
							<div className="filterData mx-5 d-flex">
								<InputGroup className="mx-3">
									<FormControl
										placeholder="Temukan Produk Anda"
										aria-label="Username"
										aria-describedby="basic-addon1"
										className="inputFilter"
									/>
									<InputGroup.Text id="basic-addon1" className="spanFilter">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z"
												stroke="#253863"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M16.4431 16.4438L20.9995 21.0001"
												stroke="#253863"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</InputGroup.Text>
								</InputGroup>
								<Button
									className="btn-filter d-flex align-items-center justify-content-center"
									data-bs-toggle="collapse"
									data-bs-target="#filter-collapse"
								>
									<span>
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g clip-path="url(#clip0_143_16625)">
												<path
													d="M22.1251 7.87513H1.87513C1.57677 7.87513 1.29062 7.75661 1.07964 7.54563C0.86866 7.33465 0.750134 7.0485 0.750134 6.75013C0.750134 6.45176 0.86866 6.16562 1.07964 5.95464C1.29062 5.74366 1.57677 5.62513 1.87513 5.62513H22.1251C22.4235 5.62513 22.7096 5.74366 22.9206 5.95464C23.1316 6.16562 23.2501 6.45176 23.2501 6.75013C23.2501 7.0485 23.1316 7.33465 22.9206 7.54563C22.7096 7.75661 22.4235 7.87513 22.1251 7.87513V7.87513Z"
													fill="white"
												/>
												<path
													d="M18.375 13.1255H5.62505C5.32668 13.1255 5.04053 13.007 4.82955 12.796C4.61857 12.585 4.50005 12.2989 4.50005 12.0005C4.50005 11.7021 4.61857 11.416 4.82955 11.205C5.04053 10.994 5.32668 10.8755 5.62505 10.8755H18.375C18.6734 10.8755 18.9596 10.994 19.1705 11.205C19.3815 11.416 19.5 11.7021 19.5 12.0005C19.5 12.2989 19.3815 12.585 19.1705 12.796C18.9596 13.007 18.6734 13.1255 18.375 13.1255Z"
													fill="white"
												/>
												<path
													d="M13.8751 18.3754H10.1251C9.8267 18.3754 9.54056 18.2569 9.32958 18.0459C9.1186 17.8349 9.00007 17.5488 9.00007 17.2504C9.00007 16.9521 9.1186 16.6659 9.32958 16.4549C9.54056 16.2439 9.8267 16.1254 10.1251 16.1254H13.8751C14.1734 16.1254 14.4596 16.2439 14.6706 16.4549C14.8815 16.6659 15.0001 16.9521 15.0001 17.2504C15.0001 17.5488 14.8815 17.8349 14.6706 18.0459C14.4596 18.2569 14.1734 18.3754 13.8751 18.3754Z"
													fill="white"
												/>
											</g>
										</svg>
									</span>
									<span>Filter</span>
								</Button>
							</div>
						</Col>
					</Row>
				</div>
				<div className="prd-tabel mt-1 p-2 ">
					<Table className="">
						<thead className="prd-tabel-head">
							<tr>
								<th>No. Dokumen</th>
								<th>Nama Dokumen</th>
								<th>Status</th>
								<th></th>
							</tr>
						</thead>
						<tbody className="prd-tbody ">
							<tr>
								<td className="py-3">001</td>
								<td className="py-3">KTP</td>
								<td className="py-3">Terverifikasi</td>
								<td className="text-center">
									<Button className="ds-btn-table p-0 px-3">Lihat Dokumen</Button>
								</td>
							</tr>
							<tr>
								<td className="py-3">002</td>
								<td className="py-3">NPWP</td>
								<td className="py-3">Tidak ada dokumen</td>
								<td className="text-center">
									<Button className="ds-btn-table p-0 px-3">Lihat Dokumen</Button>
								</td>
							</tr>
							<tr>
								<td className="py-3">003</td>
								<td className="py-3">Izin Usaha</td>
								<td className="py-3">Belum diverifikasi</td>
								<td className="text-center">
									<Button className="ds-btn-table p-0 px-3">Lihat Dokumen</Button>
								</td>
							</tr>
							<tr>
								<td className="py-3">004</td>
								<td className="py-3">Sertifikat Halal</td>
								<td className="py-3">Ditolak</td>
								<td className="text-center">
									<Button onClick={handleShow} className="ds-btn-table p-0 px-3">Lihat Dokumen</Button>
								</td>
							</tr>
						
						</tbody>
					</Table>
				</div>
			
			</div>
		</Container>
  )
}

export default IzinDokumen