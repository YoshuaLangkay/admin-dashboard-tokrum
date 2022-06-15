import React from "react";
import  { useState, useEffect } from "react";
import { Button,Modal, Col, Container, Row, ProgressBar } from "react-bootstrap";
import IzinDokumen from "../components/penggunaSeller/IzinDokumen";
// import Produk from "../components/penggunaSeller/Produk";
// import ProfilPemilik from "../components/penggunaSeller/ProfilPemilik";
// import ProfilUsaha from "../components/penggunaSeller/ProfilUsaha";
// import Statistik from "../components/penggunaSeller/Statistik";
import "../css/DetailSeller.css";

function DetailSeller() {

   
	return (
		<Container fluid className="pb-5  ">

    
			<div className="detail  d-flex flex-column  mx-auto mt-3  ms-3">
				<div className="box-profile mx-auto pb-1  pt-3 d-flex ">
					<div className="d-flex  box-profile-seller ">
						<div className="pict-seller ">
							<img src="https://sulselekspres.com/wp-content/uploads/2018/02/pdip-1.jpg" alt="foto " />
						</div>

						<div className="d-flex flex-column justify-content-between ms-3 ">
							<span>
								<div>
									<span className="sellerName">Red Bull</span>
									<span>
										<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M8.82113 3.25867C9.5243 1.89383 11.4757 1.89383 12.1789 3.25867V3.25867C12.6014 4.07878 13.5546 4.47361 14.4333 4.19247V4.19247C15.8956 3.7246 17.2754 5.10445 16.8075 6.56674V6.56674C16.5264 7.44542 16.9212 8.39861 17.7413 8.82113V8.82113C19.1062 9.5243 19.1062 11.4757 17.7413 12.1789V12.1789C16.9212 12.6014 16.5264 13.5546 16.8075 14.4333V14.4333C17.2754 15.8956 15.8956 17.2754 14.4333 16.8075V16.8075C13.5546 16.5264 12.6014 16.9212 12.1789 17.7413V17.7413C11.4757 19.1062 9.5243 19.1062 8.82113 17.7413V17.7413C8.39861 16.9212 7.44542 16.5264 6.56674 16.8075V16.8075C5.10445 17.2754 3.7246 15.8956 4.19247 14.4333V14.4333C4.47361 13.5546 4.07878 12.6014 3.25867 12.1789V12.1789C1.89383 11.4757 1.89383 9.5243 3.25867 8.82113V8.82113C4.07878 8.39861 4.47361 7.44542 4.19247 6.56674V6.56674C3.7246 5.10445 5.10445 3.7246 6.56674 4.19247V4.19247C7.44542 4.47361 8.39861 4.07878 8.82113 3.25867V3.25867Z"
												fill="#00A3FF"
											/>
											<path
												d="M12.9997 8.04148C13.1786 7.83108 13.4554 7.82116 13.6658 8C13.8762 8.17884 13.8455 8.45626 13.6667 8.66667L10.3806 12.8238C10.199 13.0375 9.87711 13.06 9.66748 12.8737L7.41748 10.8737C7.21109 10.6902 7.1925 10.3742 7.37596 10.1678C7.55941 9.96142 7.87545 9.94283 8.08184 10.1263L9.94977 11.7867L12.9997 8.04148Z"
												fill="white"
											/>
										</svg>
									</span>
								</div>
								<div>
									<span>
										<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M9.91667 3.5C9.91667 5.11083 8.61083 6.41667 7 6.41667C5.38917 6.41667 4.08333 5.11083 4.08333 3.5C4.08333 1.88917 5.38917 0.583333 7 0.583333C8.61083 0.583333 9.91667 1.88917 9.91667 3.5Z"
												fill="#5E6278"
											/>
											<path
												opacity="0.25"
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M10.9772 8.23944C10.6176 7.82254 9.99998 7.84403 9.51705 8.10836C8.76973 8.5174 7.91202 8.74996 7 8.74996C6.08798 8.74996 5.23027 8.5174 4.48295 8.10836C4.00001 7.84402 3.38241 7.82254 3.02284 8.23944C2.22963 9.15911 1.75 10.3569 1.75 11.6666V12.25C1.75 12.8943 2.27233 13.4166 2.91667 13.4166H11.0833C11.7277 13.4166 12.25 12.8943 12.25 12.25V11.6666C12.25 10.3569 11.7704 9.15911 10.9772 8.23944Z"
												fill="#5E6278"
											/>
										</svg>
									</span>
									<span className="sellerHint ms-2">seller</span>
								</div>
							</span>
							<div className="mt-4 d-flex   ">
								<div className="jml-total d-flex  flex-column justify-content-center p-2 me-3">
									<span className="jml-num ">Rp.75.000.000</span>
									<span className="jml-hint">Pendapartan Total</span>
								</div>
								<div className="jml-produk d-flex flex-column justify-content-center p-2 ms-1">
									<span className="jml-num"> 178</span>
									<span className="jml-hint">Produk</span>
								</div>
								<div className="jml-trans d-flex flex-column justify-content-center p-2 ms-3">
									<span className="jml-num"> 980.000</span>
									<span className="jml-hint">Tansaksi</span>
								</div>
							</div>
						</div>
						<div className="btn-status-call  d-flex align-items-end flex-column justify-content-between">
							<Button className="btn-call-seller">Hubungi Pengguna</Button>
							<div className="progres    ">
								<div className="d-flex justify-content-between">
									<span className="label-profil-status">Profil Status</span>
									<span className="jml-profil-status">68 %</span>
								</div>
								<ProgressBar now="68" />
							</div>
						</div>
					</div>
				</div>
				<div className="tab-profile mx-auto mt-3">
					<ul class="nav nav-pills" id="pills-tab" role="tablist">
						<li class="nav-item">
							<button
								class="nav-link  active btn-list px-0"
								data-bs-toggle="pill"
								data-bs-target="#pills-profile"
								type="button"
							>
								Profil Usaha
							</button>
						</li>
						<li class="nav-item ms-4">
							<button class="nav-link btn-list px-0" data-bs-toggle="pill" data-bs-target="#pills-pemilik" type="button">
								Profil Pemilik
							</button>
						</li>
						<li class="nav-item ms-4">
							<button class="nav-link btn-list px-0" data-bs-toggle="pill" data-bs-target="#pills-produk" type="button">
								Produk
							</button>
						</li>
						<li class="nav-item ms-4">
							<button class="nav-link btn-list px-0" data-bs-toggle="pill" data-bs-target="#pills-izin" type="button">
								Izin & Dokumen
							</button>
						</li>
						<li class="nav-item ms-4">
							<button class="nav-link btn-list px-0" data-bs-toggle="pill" data-bs-target="#pills-statistik" type="button">
								Statistik
							</button>
						</li>
					</ul>
				</div>
			</div>
			<div className="box-info-seller mx-auto mt-3 ms-3">
				<div class="tab-content" id="pills-tabContent">
					<div class="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
						{/* <ProfilUsaha /> */}
					</div>
					<div class="tab-pane fade " id="pills-pemilik" role="tabpanel" aria-labelledby="pills-pemilik-tab">
						{/* <ProfilPemilik/> */}
					</div>
					<div class="tab-pane fade " id="pills-produk" role="tabpanel" aria-labelledby="pills-produk-tab">
						{/* <Produk /> */}
					</div>
					<div class="tab-pane fade " id="pills-izin" role="tabpanel" aria-labelledby="pills-izin-tab">
						<IzinDokumen />
					</div>
					<div class="tab-pane fade " id="pills-statistik" role="tabpanel" aria-labelledby="pills-statistik-tab">
						{/* <Statistik /> */}
					</div>
				</div>
			</div>
		</Container>
	);
}

export default DetailSeller;