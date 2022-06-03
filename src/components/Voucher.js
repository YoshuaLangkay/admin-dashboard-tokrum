import SideNav from "./SideNav";
import '../css/Voucher.css'
import {Button, FormControl, Form, Nav,Table, Pagination, Modal, Row, Col} from 'react-bootstrap'
import React, { useState, useEffect } from "react";
import iklan from '../image/iklan.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import iconX from '../image/Icon.png';




function Voucher(){

    const [hideHapus, setHideHapus] = useState(true)
    const [cekAll, setCekAll] = useState(false)
    const [isCheck, setIsCheck] = useState([]);
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [hideModalTambahV, setHideModalTambahV] = useState(true);
    const [x, setX] = useState(true)
    const [hideYakinHapus, setHideYakinHapus] = useState(true)
    const [hideTerhapus, setHideTerhapus] = useState(true)
    const [hideBatalterhapus, setBatalterhapus] = useState(true)

    function tambahPromo(){
        if(hideYakinHapus == true){
            setHideYakinHapus(false)
            setHideModalTambahV(true)
            setX(true)
        }
    }

    function batalHapus(){
        setHideYakinHapus(true)
        setHideModalTambahV(true)
        setBatalterhapus(false)
        setTimeout(() => {  
            setBatalterhapus(true)
        }, 2000);
    }
    function yakinHapus(){
        setHideYakinHapus(true)
        setHideModalTambahV(true)
        setHideTerhapus(false)
        setTimeout(() => {  
            setHideTerhapus(true)
        }, 2000);
    }
    function xHide(){
        if(hideModalTambahV == true){
            setX(false)
        }else{
            setX(true)
            setHideModalTambahV(true)
        }
    }
    function tambahVoucher(){
        if(hideModalTambahV == true){
            setHideModalTambahV(false)
            setX(false)
        }else{
            setHideModalTambahV(true)
            setX(true)
        }
    }

    function hapusVoucher(){
        setHideYakinHapus(false)
    }

    function hideHapusBtn(){

        for(let i = 0; i <= data.length; i++){
            if(hideHapus == true ){
                setHideHapus(false)
            }
            else{
                setHideHapus(true)
            }
        }
        
    }
    const handleClick = e => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        setHideHapus(false)
        let elem = document.getElementById(id)
        elem.style.backgroundColor = '#F1F5FC'

        for(let i = 0 ; i>id.length; i++){
            if(checked){
                setHideHapus(true)
            }else{
                setHideHapus(false)
            }

        }
        
        if (!checked > 1) {
          setIsCheck(isCheck.filter(item => item !== id));
          setHideHapus(false)
          elem.style.backgroundColor = '#F1F5FC'
        }if(checked.length == 0 ){
        setIsCheck(isCheck.filter(item => item !== id));
          setHideHapus(false)
          elem.style.backgroundColor = '#F1F5FC'
        }if(checked >= 1) {
            setIsCheck(isCheck.filter(item => item !== id));
            setHideHapus(false)
            elem.style.backgroundColor = '#F1F5FC'
        }if(checked == 1){
            setHideHapus(false)
            elem.style.backgroundColor = '#F1F5FC'
        }
        else{
            setIsCheck(isCheck.filter(item => item !== id));
            setHideHapus(true)
            elem.style.backgroundColor = 'white'
        }
      };

    function checkAll(){
            setCekAll(true)
            setIsCheck(data.map(li => li.id));
            if (cekAll) {
            setIsCheck([]);
            setCekAll(false)
            setHideHapus(true)
            }else{
                setHideHapus(false)
            }
        }

    

    let data = [{ id: 1, namaVoucher: 'INFLNCR01', jenisVoucher: 'Potongan Harga', penanggungJawab: 'TokoRumahan', tanggalAktif:'11 Januari 2020', tanggalSelesai:'20 Januari 2020' }, 
                { id: 2, namaVoucher: 'ONGKIRHEMAT', jenisVoucher: 'Gratis Ongkos Kirim', penanggungJawab: 'AnterAja', tanggalAktif:'11 Januari 2020', tanggalSelesai:'20 Januari 2020' }, 
                { id: 3, namaVoucher: 'ONGKIRHEMAT', jenisVoucher: 'Gratis Ongkos Kirim', penanggungJawab: 'AnterAja', tanggalAktif:'11 Januari 2020', tanggalSelesai:'20 Januari 2020' }, 
                { id: 4, namaVoucher: 'ONGKIRHEMAT', jenisVoucher: 'Gratis Ongkos Kirim', penanggungJawab: 'AnterAja', tanggalAktif:'11 Januari 2020', tanggalSelesai:'20 Januari 2020' }, 
                { id: 5, namaVoucher: 'INFLNCR01', jenisVoucher: 'Potongan Harga', penanggungJawab: 'TokoRumahan', tanggalAktif:'11 Januari 2020', tanggalSelesai:'20 Januari 2020' }, 
                { id: 6, namaVoucher: 'INFLNCR01', jenisVoucher: 'Potongan Harga', penanggungJawab: 'TokoRumahan',tanggalAktif:'11 Januari 2020' , tanggalSelesai:'20 Januari 2020' },
                { id: 7, namaVoucher: 'ONGKIRHEMAT', jenisVoucher: 'Gratis Ongkos Kirim', penanggungJawab: 'AnterAja',tanggalAktif:'11 Januari 2020', tanggalSelesai:'20 Januari 2020'  },
                { id: 8, namaVoucher: 'ONGKIRHEMAT', jenisVoucher: 'Gratis Ongkos Kirim', penanggungJawab: 'AnterAja',tanggalAktif:'1 Januari 2020', tanggalSelesai:'20 Januari 2020'  }];

    return(

        <>
        
        <SideNav/>
        <div className="profile d-flex align-items-center  d-flex justify-content-end " style={{height:'50px'}}>


            <img src={iconX} onClick={xHide} hidden={x} className="iconX" />

            <div className="modal-yakinHapus" hidden={hideYakinHapus}>

            <svg style={{marginTop:'30px'}} width="56" height="54" viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.36521 52.2622H50.6357C51.3709 52.2621 52.0936 52.0712 52.733 51.7082C53.3724 51.3452 53.9068 50.8225 54.2837 50.1913C54.6607 49.56 54.8675 48.8417 54.8839 48.1067C54.9002 47.3716 54.7256 46.6448 54.377 45.9974L31.7431 3.96228C30.1374 0.981973 25.8635 0.981973 24.2578 3.96228L1.62388 45.9974C1.27532 46.6448 1.10067 47.3716 1.11702 48.1067C1.13336 48.8417 1.34013 49.56 1.71712 50.1913C2.09412 50.8225 2.62843 51.3452 3.26786 51.7082C3.90728 52.0712 4.62994 52.2621 5.36521 52.2622V52.2622Z" stroke="#FFC600" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M27.2376 18.9494L27.9999 35.1526L28.7609 18.9561C28.7656 18.8525 28.7492 18.7491 28.7125 18.6522C28.6759 18.5552 28.6199 18.4667 28.5479 18.3922C28.476 18.3176 28.3895 18.2584 28.294 18.2184C28.1984 18.1783 28.0956 18.1582 27.9919 18.1592V18.1592C27.8901 18.1602 27.7895 18.1816 27.6961 18.2221C27.6027 18.2626 27.5183 18.3215 27.448 18.3951C27.3777 18.4688 27.3228 18.5558 27.2867 18.651C27.2505 18.7462 27.2338 18.8477 27.2376 18.9494V18.9494Z" stroke="#FFC600" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M28 45.7571C27.4746 45.7571 26.9611 45.6013 26.5243 45.3094C26.0874 45.0175 25.747 44.6027 25.5459 44.1173C25.3449 43.632 25.2923 43.0979 25.3948 42.5826C25.4973 42.0674 25.7503 41.5941 26.1217 41.2226C26.4932 40.8511 26.9665 40.5981 27.4818 40.4956C27.9971 40.3931 28.5311 40.4457 29.0165 40.6468C29.5019 40.8478 29.9167 41.1883 30.2086 41.6251C30.5005 42.0619 30.6562 42.5755 30.6562 43.1008C30.6562 43.8053 30.3764 44.4809 29.8783 44.9791C29.3801 45.4772 28.7045 45.7571 28 45.7571Z" fill="#FFC600"/>
            </svg>

            <h1 style={{fontSize:'16px', marginTop:'50px'}}>Apakah anda akan menghapus data yang dipilih?</h1>

            <div style={{
                marginTop:'50px',
                paddingBotton:'20px'
            }}>
            <Button  className="btnHapusV" onClick={yakinHapus}>Hapus</Button>
            <Button  className="btnBatalV" onClick={batalHapus}>Batal</Button>
            </div>
            </div>

            {/* modal batal hapus */}
            <div className="modal-terhapus" style={{width:'20%'}} hidden={hideBatalterhapus} >

            <svg style={{marginTop:'30px'}}  width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.0002 0.374756C12.768 0.374756 0.375244 12.7675 0.375244 27.9998C0.375244 43.232 12.768 55.6247 28.0002 55.6247C43.2325 55.6247 55.6252 43.232 55.6252 27.9998C55.6252 12.7675 43.2325 0.374756 28.0002 0.374756ZM38.0023 34.9976C38.208 35.193 38.3724 35.4276 38.486 35.6875C38.5995 35.9474 38.6599 36.2274 38.6635 36.511C38.6672 36.7946 38.614 37.0761 38.5071 37.3388C38.4003 37.6016 38.2419 37.8403 38.0413 38.0408C37.8407 38.2414 37.6021 38.3998 37.3393 38.5066C37.0766 38.6135 36.7951 38.6667 36.5115 38.663C36.2279 38.6594 35.9479 38.599 35.688 38.4855C35.428 38.3719 35.1935 38.2075 34.9981 38.0019L28.0002 31.0053L21.0023 38.0019C20.6006 38.3836 20.0656 38.5932 19.5115 38.5861C18.9574 38.579 18.428 38.3557 18.0361 37.9639C17.6443 37.572 17.421 37.0426 17.4139 36.4885C17.4068 35.9344 17.6164 35.3994 17.9981 34.9976L24.9947 27.9998L17.9981 21.0019C17.6164 20.6001 17.4068 20.0651 17.4139 19.511C17.421 18.9569 17.6443 18.4275 18.0361 18.0356C18.428 17.6438 18.9574 17.4205 19.5115 17.4134C20.0656 17.4063 20.6006 17.616 21.0023 17.9976L28.0002 24.9942L34.9981 17.9976C35.3999 17.616 35.9349 17.4063 36.489 17.4134C37.0431 17.4205 37.5725 17.6438 37.9644 18.0356C38.3562 18.4275 38.5795 18.9569 38.5866 19.511C38.5937 20.0651 38.384 20.6001 38.0023 21.0019L31.0058 27.9998L38.0023 34.9976Z" fill="#FF1818"/>
            </svg>



            <h1 style={{fontSize:'16px', marginTop:'50px', paddingBottom:'20px'}}>Data berhasil terhapus</h1>
            </div>
{/* //modal terhapus */}
            <div className="modal-terhapus" style={{width:'20%'}} hidden={hideTerhapus} >

            <svg style={{marginTop:'30px'}} width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32.5" cy="32" r="32" fill="#D6EED8"/>
            <path d="M49.0627 18.2485L25.8752 44.7485L15.9377 34.811" stroke="#31AC3D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>


            <h1 style={{fontSize:'16px', marginTop:'50px', paddingBottom:'20px'}}>Data berhasil terhapus</h1>
            </div>

              <div className="modal-tambahV" hidden={hideModalTambahV}>
              <h5 className="text-tambahVoucher">Tambah Voucher</h5>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="form-label">Nama Voucher</Form.Label>
                <Form.Control style={{backgroundColor:'#F7F7F7'}} type="email" placeholder="Masukan nama voucher barunya..." />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="form-label">Kode Voucher</Form.Label>
                <Form.Control style={{backgroundColor:'#F7F7F7'}} type="text" placeholder="Masukan kode voucher baru..." />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group>
                <Form.Label className="form-label">Kode Voucher</Form.Label>
                    <Form.Select aria-label="Default select example" style={{width:'100%', marginTop:'0px', backgroundColor:'#F7F7F7'}}>
                        <option>Pilih Jenis Voucher</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    </Form.Group>
            </Row>

            <Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control style={{backgroundColor:'#F7F7F7'}} as="textarea" rows={3} />
            </Form.Group>
            </Row>

            <h6 className="text-durasiV">Durasi Voucher</h6>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="form-label">Dari Tanggal</Form.Label>
                <Form.Control style={{backgroundColor:'#F7F7F7'}} type="date" placeholder="Pilih tanggal" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="form-label">Hinggal Tanggal</Form.Label>
                <Form.Control style={{backgroundColor:'#F7F7F7'}} type="date" placeholder="Pilih tanggal" />
                </Form.Group>
            </Row>

            <h6 className="text-durasiV">Detail Voucher</h6>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="form-label">Minimum Pembelian (Rp)</Form.Label>
                <Form.Control style={{backgroundColor:'#F7F7F7'}} type="email" placeholder="Berapa minimum pembeliannya?" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="form-label">Nominal Diskon (Rp / %)</Form.Label>
                <Form.Control style={{backgroundColor:'#F7F7F7'}} type="text" placeholder="Berapa besaran promonya?" />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group>
                <Form.Label className="form-label">Pilih Produk/Merchant</Form.Label>
                    <Form.Select  aria-label="Default select example" style={{width:'100%', marginTop:'0px', backgroundColor:'#F7F7F7'}}>
                        <option>Pilih Jenis Voucher</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    </Form.Group>
            </Row>

            <Button onClick={tambahPromo} style={{backgroundColor:'#253863', width:'150px', height:'40px',marginTop:'10px', marginLeft:'79%'}}>Tambah Promo</Button>
              </div>
              
					<div className="isiProfile d-flex  me-3 ">
						<div className="iconNotif">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="44"
								height="44"
								fill="none"
								viewBox="0 0 50 50"
							>
								<rect
									width="50"
									height="50"
									fill="#fff"
									rx="25"
								/>
								<path
									fill="#253863"
									d="m35.786 20.002-.287.347c-1.288 1.56-2.068 2.5-2.068 6.915 0 2.285-.547 4.16-1.625 5.566-.794 1.039-1.868 1.827-3.284 2.41a.175.175 0 0 0-.048.038c-.509 1.706-1.902 2.848-3.474 2.848-1.571 0-2.964-1.142-3.473-2.846a.182.182 0 0 0-.048-.038c-3.303-1.36-4.909-3.969-4.909-7.977 0-4.415-.779-5.356-2.069-6.914l-.286-.347a2.059 2.059 0 0 1-.273-2.205c.362-.761 1.132-1.234 2.012-1.234h18.099c.875 0 1.64.472 2.003 1.23a2.061 2.061 0 0 1-.27 2.207ZM25 11.875a4.691 4.691 0 0 1 4.127 2.469.235.235 0 0 1-.207.344h-7.84a.235.235 0 0 1-.208-.344A4.692 4.692 0 0 1 25 11.875Z"
								/>
								<circle
									r="4"
									fill="#EA4335"
									transform="matrix(1 0 0 -1 32.2 34)"
								/>
							</svg>
						</div>
						<div className="d-flex flex-column mx-2">
							<span className="namaProfile">Sri Annisa</span>
							<span className="titleJob">Admin</span>
						</div>
						<div>
							<img
								src="https://img.idxchannel.com/media/700/images/idx/2022/01/13/ghazli.jpeg"
								className="foto"
								alt="foto"
							/>
						</div>
					</div>
                    
				</div>

                <div className="isiMarketing" style={{padding:'2px',width: '78%',height:'20%', marginLeft:'18%', marginTop:'1%'}}>
                    <div className="d-flex" style={{height:'30px', marginBottom:'30px'}}>
                    <h1 className="title">Voucher</h1>
                    <Form className="kananJudul d-flex">
                        <FormControl
                        placeholder="Cari Voucher"
                        className="search-box me-2"
                        aria-label="Search"
                        style={{backgroundColor:'#F5F8FA', marginTop:'8px', height:'40px'}}
                        />
                        <span><svg style={{marginLeft:'-50px', marginTop:'15px'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg></span>
                          
                        <Button onClick={tambahVoucher} style={{backgroundColor:'#253863', width:'300px', height:'40px',marginTop:'8px', marginRight:'10px'}}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                                                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                                                    </svg>Tambah Voucher</Button>
                    </Form>
                    </div>

                    <div className="section d-flex ">
                    <Nav variant="tabs" defaultActiveKey="section1" className="d-flex ">
                        <Nav.Item className="border-0" >
                            <Nav.Link  type="checkbox" className="item-tab border-bottom mb-3" href="#" eventKey="section1" title="section1">Aktif (15)</Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link className="item-tab border-bottom" eventKey="link-1" >Nonaktif (0)</Nav.Link>
                        </Nav.Item>                        
                        </Nav>

                        <Button onClick={hapusVoucher} hidden={hideHapus} style={{backgroundColor:'white', width:'150px', height:'40px',marginBottom:'10px', marginLeft:'715px', color:'red', borderColor:'red'}}>Hapus Voucher</Button>


                    </div>


                    <div className="app container ">
                            <table class="table table-hover ">
                                <thead >
                                <tr style={{backgroundColor:'#FBFBFB'}}>
                                    <th scope="col" ><Form.Check handleClick={checkAll} isChecked={isCheckAll} aria-label="option 1" onClick={checkAll} style={{align:'center'}} /></th>
                                    <th className="MjudulTable"  scope="col">Nama Voucher</th>
                                    <th className="MjudulTable"  scope="col">Jenis Voucher</th>
                                    <th className="MjudulTable"  scope="col">Penanggung Jawab</th>
                                    <th className="MjudulTable"  scope="col">Tanggal Aktif</th>
                                    <th className="MjudulTable"  scope="col">Tanggal Selesai</th>
                                    <th scope="col"></th>

                                </tr>
                                </thead>
                                <tbody style={{borderColor:'grey', borderStyle:'none'}}>
                                {data.map(function({id, namaVoucher, jenisVoucher, penanggungJawab, tanggalAktif, tanggalSelesai}){
                                
                                    return (
                                        <tr id={id}>
                                        <td  >{<Form.Check aria-label="option 1" className="cekbox" type="checkbox" onClick={handleClick} id={id} name="foo" style={{align:'center', paddingTop:'10px', color:'#253863'}} />}</td>
                                        <td className="MisiTable" style={{paddingTop:'15px'}}>{namaVoucher}</td>
                                        <td className="MisiTable" style={{paddingTop:'15px'}}>{jenisVoucher}</td>
                                        <td className="MisiTable" style={{paddingTop:'15px'}}>{penanggungJawab}</td>
                                        <td className="MisiTable" style={{paddingTop:'15px'}}>{tanggalAktif}</td>
                                        <td className="MisiTable" style={{paddingTop:'15px'}}>{tanggalSelesai}</td>

                                        <td  style={{paddingTop:'15px'}}><a href="#" className="Mselengkapnya">Selengkapnya</a></td>
                                        </tr>
                                        );
                                    })}
                                    
                                    </tbody>
                                    </table>
                                    
                            </div>

                            <Pagination style={{marginLeft:'40%', marginTop:'-10px'}}>
                                <Pagination.Prev className="kiriKanan" style={{height:'30px'}} />
                                <Pagination.Item className="nomorPage" style={{color:'#253863'}}>{1}</Pagination.Item>
                                <Pagination.Item className="nomorPage">{2}</Pagination.Item>
                                <Pagination.Item className="nomorPage">{3}</Pagination.Item>
                                <Pagination.Ellipsis />
                                <Pagination.Item className="nomorPage">{32}</Pagination.Item>
                                <Pagination.Next className="kiriKanan" style={{height:'30px'}} />
                            </Pagination>

                </div>

                
        
        </>
    )
}

export default Voucher;