import SideNav from "./SideNav";
import '../css/Marketing.css'
import {Button, FormControl, Form, Nav,Table, Pagination} from 'react-bootstrap'
import React from "react";
import iklan from '../image/iklan.png';
import 'bootstrap/dist/css/bootstrap.min.css';



function Marketing(){

    let data = [{ id: 1, namaIklan: 'Iklan Brand Mantap', tanggalMulai: '25 Mei 2020', tanggalSelesai: '25 Mei 2020', kategori:'Iklan Produk' }, 
                { id: 2, namaIklan: 'Iklan Brand Mantap', tanggalMulai: '25 Mei 2020', tanggalSelesai: '25 Mei 2020', kategori:'Iklan Produk' }, 
                { id: 3, namaIklan: 'Iklan Brand Mantap', tanggalMulai: '25 Mei 2020', tanggalSelesai: '25 Mei 2020', kategori:'Iklan Produk' }, 
                { id: 4, namaIklan: 'Iklan Brand Mantap', tanggalMulai: '25 Mei 2020', tanggalSelesai: '25 Mei 2020', kategori:'Iklan Produk' }, 
                { id: 5, namaIklan: 'Iklan Brand Mantap', tanggalMulai: '25 Mei 2020', tanggalSelesai: '25 Mei 2020', kategori:'Iklan Produk' }, 
                { id: 6, namaIklan: 'Iklan Brand Mantap', tanggalMulai: '25 Mei 2020', tanggalSelesai: '25 Mei 2020',kategori:'Iklan Produk'  },
                { id: 6, namaIklan: 'Iklan Brand Mantap', tanggalMulai: '25 Mei 2020', tanggalSelesai: '25 Mei 2020',kategori:'Iklan Produk'  }];
                    
    return(

        <>
        <SideNav/>
        <div className="profile d-flex align-items-center  d-flex justify-content-end " style={{height:'50px'}}>
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
                    <h1 className="title">Ads Banner</h1>
                    <Form className="kananJudul d-flex">
                        <FormControl
                        placeholder="Cari Banner"
                        className="search-box me-2"
                        aria-label="Search"
                        style={{backgroundColor:'#F5F8FA', marginTop:'8px', height:'40px'}}
                        />
                        <span><svg style={{marginLeft:'-50px', marginTop:'15px'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg></span>
                          
                        <Button style={{backgroundColor:'#253863', width:'300px', height:'40px',marginTop:'8px', marginRight:'10px'}}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                                                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                                                    </svg>Tambah Banner</Button>
                    </Form>
                    </div>

                    <div className="section d-flex">
                    <Nav variant="tabs" defaultActiveKey="/home" className="d-flex">
                        <Nav.Item>
                            <Nav.Link href="#">Section 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Section 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" >
                            Section 3
                            </Nav.Link>
                        </Nav.Item>
                        
                        </Nav>

                        <Button style={{backgroundColor:'white', width:'150px', height:'40px',marginBottom:'10px', marginLeft:'670px', color:'red', borderColor:'red'}}>Hapus Banner</Button>


                    </div>


                    <div className="app container ">
                            <table class="table table-hover ">
                                <thead >
                                <tr style={{backgroundColor:'#FBFBFB'}}>
                                    <th scope="col"><Form.Check aria-label="option 1" style={{align:'center'}} /></th>
                                    <th scope="col">Asset</th>
                                    <th scope="col">Nama Iklan</th>
                                    <th scope="col">Tanggal Mulai</th>
                                    <th scope="col">Tanggal Selesai</th>
                                    <th scope="col">Kategori</th>
                                    <th scope="col"></th>

                                </tr>
                                </thead>
                                <tbody style={{borderColor:'grey', borderStyle:'none'}}>
                                {data.map(function({id, namaIklan, tanggalMulai, tanggalSelesai, kategori}){
                                
                                    return (
                                        <tr>
                                        <td>{<Form.Check aria-label="option 1" style={{align:'center'}} />}</td>
                                        <td><img src={iklan} alt="iklan" width={'90px'}/></td>
                                        <td>{namaIklan}</td>
                                        <td>{tanggalMulai}</td>
                                        <td>{tanggalSelesai}</td>
                                        <td>{kategori}</td>
                                        <td><a href="#">Lihat Detail</a></td>
                                        </tr>
                                        );
                                    })}
                                    
                                    </tbody>
                                    </table>
                                    
                            </div>

                            <Pagination style={{marginLeft:'40%', marginTop:'-10px'}}>
                                <Pagination.Prev className="bordered" style={{backgroundColor:'white', borderRadius:'15px', height:'30px', borderColor:'#BFBFDB'}} />
                                <Pagination.Item className="nomorPage">{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Ellipsis />
                                <Pagination.Item>{32}</Pagination.Item>
                                <Pagination.Next />
                                </Pagination>

                </div>

                
        
        </>
    )
}

export default Marketing;