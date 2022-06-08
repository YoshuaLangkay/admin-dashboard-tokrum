import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Statistik() {
	return (
		<Container fluid className="boxProfileStatistik  p-0">
			{/* <div className="label-info d-flex justify-content-between ">
				<div className="boxKiri d-flex flex-column">
					<div className="boxAtas">
						<Row>
							<Col className=" bg-white mx-3  pe-1 box-pendapatan   ">
								<div className="d-flex ms-1 flex-column justify-content-center w-100 mx-auto h-100">
									<div className="d-flex ">
										<span className="lebelProfit me-2">Profit Minggu Ini</span>
										<span>
											<svg width="19" height="19" viewBox="0 2 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
													stroke="#BFBFDB"
													stroke-width="1.875"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M9.375 9.6875H10V13.75H10.625"
													stroke="#BFBFDB"
													stroke-width="1.875"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M9.84375 7.8125C10.5341 7.8125 11.0938 7.25286 11.0938 6.5625C11.0938 5.87214 10.5341 5.3125 9.84375 5.3125C9.15339 5.3125 8.59375 5.87214 8.59375 6.5625C8.59375 7.25286 9.15339 7.8125 9.84375 7.8125Z"
													fill="#BFBFDB"
												/>
											</svg>
										</span>
									</div>
									<span className="jmlProfit mt-3">Rp 15.000.000</span>
								</div>
							</Col>
							<Col className=" bg-white mx-3  pe-1 box-pendapatan  ">
								<div className="d-flex  mx-1 flex-column justify-content-center w-100 mx-auto h-100 ">
									<div className="d-flex ">
										<span className="lebelProfit me-1">Pesanan Minggu Ini</span>
										<span>
											<svg width="19" height="19" viewBox="0 2 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
													stroke="#BFBFDB"
													stroke-width="1.875"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M9.375 9.6875H10V13.75H10.625"
													stroke="#BFBFDB"
													stroke-width="1.875"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M9.84375 7.8125C10.5341 7.8125 11.0938 7.25286 11.0938 6.5625C11.0938 5.87214 10.5341 5.3125 9.84375 5.3125C9.15339 5.3125 8.59375 5.87214 8.59375 6.5625C8.59375 7.25286 9.15339 7.8125 9.84375 7.8125Z"
													fill="#BFBFDB"
												/>
											</svg>
										</span>
									</div>
									<span className="jmlProfit mt-3">1.200</span>
								</div>
							</Col>
							<Col className=" bg-white mx-3  pe-1 box-pendapatan  ">
								<div className="d-flex ms-3 flex-column justify-content-center w-100 mx-auto h-100">
									<div className="d-flex ">
										<span className="lebelProfit me-2">Total Produk</span>
										<span>
											<svg width="19" height="19" viewBox="0 2 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
													stroke="#BFBFDB"
													stroke-width="1.875"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M9.375 9.6875H10V13.75H10.625"
													stroke="#BFBFDB"
													stroke-width="1.875"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M9.84375 7.8125C10.5341 7.8125 11.0938 7.25286 11.0938 6.5625C11.0938 5.87214 10.5341 5.3125 9.84375 5.3125C9.15339 5.3125 8.59375 5.87214 8.59375 6.5625C8.59375 7.25286 9.15339 7.8125 9.84375 7.8125Z"
													fill="#BFBFDB"
												/>
											</svg>
										</span>
									</div>
									<span className="jmlProfit mt-3">15 Produk</span>
								</div>
							</Col>
						</Row>
					</div>
					<div className="boxBawah bg-white mt-4">
						<div className="d-flex ms-3 mt-4 justify-content-between mb-5">
							<div className="d-flex flex-column">
								<span className="labelStatistik"> Statistik Produsen</span>
								<span className="labeljmlStatistik">Jumlah orderan kamu selama seminggu</span>
							</div>
							<div className="d-flex me-3">
								<ul className="nav nav-pills d-flex" id="pills-tab" role="tablist">
									<li className="nav-item" role="presentation">
										<button
											className="nav-link active btn-statistik"
											id="pills-home-tab"
											data-bs-toggle="pill"
											data-bs-target="#pills-transaksi"
											type="button"
											role="tab"
											aria-controls="pills-transaksi"
											aria-selected="true"
										>
											Transaksi
										</button>
									</li>
									<li className="nav-item" role="presentation">
										<button
											className="nav-link btn-statistik"
											id="pills-profile-tab"
											data-bs-toggle="pill"
											data-bs-target="#pills-pendapatan"
											type="button"
											role="tab"
											aria-controls="pills-pendapatan"
											aria-selected="false"
										>
											Pendapatan
										</button>
									</li>
								</ul>
							</div>
						   </div>
						  <div className="tab-content" id="pills-tabContent">
							<div
								className="tab-pane fade show active"
								id="pills-transaksi"
								role="tabpanel"
								aria-labelledby="pills-transaksi"
							>
								<Bar
									data={{
										labels: ["1 Mar", "2 Mar", "3 Mar", "4 Mar", "5 Mar", "6 Mar", "7 Mar"],
										datasets: [
											{
												label: "Transaksi Berhasil",
												data: [22, 14, 13, 35, 6, 13, 20],
												backgroundColor: ["#253863"],
												borderRadius: 4,
												borderWidth: 1,
												pointStyle: "rect",
												barThickness: 13,
											},
											{
												label: "Transaksi Dibatalkan",
												data: [12, 19, 3, 5, 2, 3, 40],
												backgroundColor: ["#FF5162"],
												borderRadius: 4,
												borderWidth: 1,
												pointStyle: "rect",
												barThickness: 13,
											},
										],
									}}
									options={{
										scales: {
											x: {
												grid: {
													display: false,
												},
											},
											y: {
												grid: {
													display: false,
												},
											},
										},
										plugins: {
											legend: {
												position: "bottom",
												labels: {
													usePointStyle: true,
													boxWidth: 16,
												},
											},
										},
										layout: {
											padding: 20,
										},
									}}
								/>
							</div>
							<div className="tab-pane fade" id="pills-pendapatan" role="tabpanel" aria-labelledby="pills-pendapatan">
								<Bar
									data={{
										labels: ["1 Mar", "2 Mar", "3 Mar", "4 Mar", "5 Mar", "6 Mar", "7 Mar"],
										datasets: [
											{
												label: "Transaksi Berhasil",
												data: [11, 33, 15, 22, 10, 9, 3],
												backgroundColor: ["#253863"],
												borderRadius: 4,
												borderWidth: 1,
												pointStyle: "rect",
												barThickness: 13,
											},
											{
												label: "Transaksi Dibatalkan",
												data: [30, 22, 34, 12, 20, 12, 30],
												backgroundColor: ["#FF5162"],
												borderRadius: 4,
												borderWidth: 1,
												pointStyle: "rect",
												barThickness: 13,
											},
										],
									}}
									options={{
										scales: {
											x: {
												grid: {
													display: false,
												},
											},
											y: {
												grid: {
													display: false,
												},
											},
										},
										plugins: {
											legend: {
												position: "bottom",
												labels: {
													usePointStyle: true,
													boxWidth: 16,
												},
											},
										},
										layout: {
											padding: 20,
										},
									}}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="boxKanan bg-white ">
					<div className="d-flex box-label-produk">
						<div className="w-50 labelProdukTerlaris  tab-content " id="pills-tabContent">
							<div
								className="tab-pane fade show active d-flex  flex-column "
								id="pills-produkTerlaris"
								role="tabpanel"
								aria-labelledby="pills-home-tab"
							>
								<span className="ms-3 mt-3 label">Produk Terlaris</span>
								<span className="ms-3 hintLabel">7 Produk Terlaris Minggu ini</span>
							</div>
							<div
								className="tab-pane fade  d-flex  flex-column "
								id="pills-produkTerlaris"
								role="tabpanel"
								aria-labelledby="pills-home-tab"
							>
								<span className="ms-3 mt-3 label">Produk Terlaris</span>
								<span className="ms-3 hintLabel">7 Produk Terlaris Minggu ini</span>
							</div>
						</div>

						<div className="w-50   d-flex justify-content-center mt-2 ">
							<div className="colap mt-3  ">
								<ul className="nav nav-pills d-flex" id="pills-tab" role="tablist">
									<li className="nav-item" role="presentation">
										<button
											className="nav-link active btn-filter-terlaris"
											id="pills-home-tab"
											data-bs-toggle="pill"
											data-bs-target="#pills-produkTerlaris"
											type="button"
											role="tab"
											aria-controls="pills-produkTerlaris"
											aria-selected="true"
										/>
									</li>
									<li className="nav-item mx-1" role="presentation">
										<button
											className="nav-link btn-filter-terlaris"
											id="pills-profile-tab"
											data-bs-toggle="pill"
											data-bs-target="#pills-produkTakTerlaris"
											type="button"
											role="tab"
											aria-controls="pills-produkTakTerlaris"
											aria-selected="false"
										/>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="isi-produk-terlaris border ">
						<div className="tab-content" id="pills-tabContent">
							<div
								className="tab-pane fade show active"
								id="pills-produkTerlaris"
								role="tabpanel"
								aria-labelledby="pills-home-tab"
							>
								produk terlaris
							</div>
							<div className="tab-pane fade" id="pills-produkTakTerlaris" role="tabpanel" aria-labelledby="pills-profile-tab">
								tidak laris
							</div>
						</div>
					</div>
					<div className="bck-chart "></div>
				</div>
		
			</div> */}
			{/* <Container fluid>
				<Row className="row-box  ">
					<Col className="  bx-kiri me-3 mt-3 " md={8}>
						<div className="d-flex flex-column">
							<Row className="">
								<Col className="profit me-1">
									<div className="ms-2">
										<div className="d-flex my-3 ">
											<span className="lebelProfit me-2">Profit Minggu Ini</span>
											<span>
												<svg
													width="19"
													height="19"
													viewBox="0 2 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
														stroke="#BFBFDB"
														stroke-width="1.875"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
													<path
														d="M9.375 9.6875H10V13.75H10.625"
														stroke="#BFBFDB"
														stroke-width="1.875"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
													<path
														d="M9.84375 7.8125C10.5341 7.8125 11.0938 7.25286 11.0938 6.5625C11.0938 5.87214 10.5341 5.3125 9.84375 5.3125C9.15339 5.3125 8.59375 5.87214 8.59375 6.5625C8.59375 7.25286 9.15339 7.8125 9.84375 7.8125Z"
														fill="#BFBFDB"
													/>
												</svg>
											</span>
										</div>
										<span className="jmlProfit ">Rp 15.000.000</span>
									</div>
								</Col>
								<Col className="profit mx-2">
									<div className="ms-2">
										<div className="d-flex my-3 ">
											<span className="lebelProfit me-2">Pesanan Minggu Ini</span>
											<span>
												<svg
													width="19"
													height="19"
													viewBox="0 2 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
														stroke="#BFBFDB"
														stroke-width="1.875"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
													<path
														d="M9.375 9.6875H10V13.75H10.625"
														stroke="#BFBFDB"
														stroke-width="1.875"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
													<path
														d="M9.84375 7.8125C10.5341 7.8125 11.0938 7.25286 11.0938 6.5625C11.0938 5.87214 10.5341 5.3125 9.84375 5.3125C9.15339 5.3125 8.59375 5.87214 8.59375 6.5625C8.59375 7.25286 9.15339 7.8125 9.84375 7.8125Z"
														fill="#BFBFDB"
													/>
												</svg>
											</span>
										</div>
										<span className="jmlProfit ">15.000</span>
									</div>
								</Col>
								<Col className="profit ms-1">
									<div className="ms-2">
										<div className="d-flex my-3 ">
											<span className="lebelProfit me-2">Total Produk</span>
											<span>
												<svg
													width="19"
													height="19"
													viewBox="0 2 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
														stroke="#BFBFDB"
														stroke-width="1.875"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
													<path
														d="M9.375 9.6875H10V13.75H10.625"
														stroke="#BFBFDB"
														stroke-width="1.875"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
													<path
														d="M9.84375 7.8125C10.5341 7.8125 11.0938 7.25286 11.0938 6.5625C11.0938 5.87214 10.5341 5.3125 9.84375 5.3125C9.15339 5.3125 8.59375 5.87214 8.59375 6.5625C8.59375 7.25286 9.15339 7.8125 9.84375 7.8125Z"
														fill="#BFBFDB"
													/>
												</svg>
											</span>
										</div>
										<span className="jmlProfit ">150 Produk</span>
									</div>
								</Col>
							</Row>
							<Row className="statistik mt-3 ">
								<Col>
									<div className="d-flex ms-3 mt-4 justify-content-between mb-5 ">
										<div className="d-flex flex-column">
											<span className="labelStatistik"> Statistik Produsen</span>
											<span className="labeljmlStatistik">Jumlah orderan kamu selama seminggu</span>
										</div>
										<div className="d-flex me-3">
											<ul className="nav nav-pills d-flex" id="pills-tab" role="tablist">
												<li className="nav-item" role="presentation">
													<button
														className="nav-link active btn-statistik"
														id="pills-home-tab"
														data-bs-toggle="pill"
														data-bs-target="#pills-transaksi"
														type="button"
														role="tab"
														aria-controls="pills-transaksi"
														aria-selected="true"
													>
														Transaksi
													</button>
												</li>
												<li className="nav-item" role="presentation">
													<button
														className="nav-link btn-statistik"
														id="pills-profile-tab"
														data-bs-toggle="pill"
														data-bs-target="#pills-pendapatan"
														type="button"
														role="tab"
														aria-controls="pills-pendapatan"
														aria-selected="false"
													>
														Pendapatan
													</button>
												</li>
											</ul>
										</div>
									</div>
									<div className="tab-content  " id="pills-tabContent">
										<div
											className="tab-pane fade show active"
											id="pills-transaksi"
											role="tabpanel"
											aria-labelledby="pills-transaksi"
										>
											<Bar
												data={{
													labels: ["1 Mar", "2 Mar", "3 Mar", "4 Mar", "5 Mar", "6 Mar", "7 Mar"],
													datasets: [
														{
															label: "Transaksi Berhasil",
															data: [22, 14, 13, 35, 6, 13, 20],
															backgroundColor: ["#253863"],
															borderRadius: 4,
															borderWidth: 1,
															pointStyle: "rect",
															barThickness: 13,
														},
														{
															label: "Transaksi Dibatalkan",
															data: [12, 19, 3, 5, 2, 3, 40],
															backgroundColor: ["#FF5162"],
															borderRadius: 4,
															borderWidth: 1,
															pointStyle: "rect",
															barThickness: 13,
														},
													],
												}}
												options={{
													scales: {
														x: {
															grid: {
																display: false,
															},
														},
														y: {
															grid: {
																display: false,
															},
														},
													},
													plugins: {
														legend: {
															position: "bottom",
															labels: {
																usePointStyle: true,
																boxWidth: 16,
															},
														},
													},
													layout: {
														padding: 20,
													},
												}}
											/>
										</div>
										<div
											className="tab-pane fade"
											id="pills-pendapatan"
											role="tabpanel"
											aria-labelledby="pills-pendapatan"
										>
											<Bar
												data={{
													labels: ["1 Mar", "2 Mar", "3 Mar", "4 Mar", "5 Mar", "6 Mar", "7 Mar"],
													datasets: [
														{
															label: "Transaksi Berhasil",
															data: [11, 33, 15, 22, 10, 9, 3],
															backgroundColor: ["#253863"],
															borderRadius: 4,
															borderWidth: 1,
															pointStyle: "rect",
															barThickness: 13,
														},
														{
															label: "Transaksi Dibatalkan",
															data: [30, 22, 34, 12, 20, 12, 30],
															backgroundColor: ["#FF5162"],
															borderRadius: 4,
															borderWidth: 1,
															pointStyle: "rect",
															barThickness: 13,
														},
													],
												}}
												options={{
													scales: {
														x: {
															grid: {
																display: false,
															},
														},
														y: {
															grid: {
																display: false,
															},
														},
													},
													plugins: {
														legend: {
															position: "bottom",
															labels: {
																usePointStyle: true,
																boxWidth: 16,
															},
														},
													},
													layout: {
														padding: 20,
													},
												}}
											/>
										</div>
									</div>
								</Col>
							</Row>
						</div>
					</Col>
					<Col className=" bx-kanan ms-3 mt-3 ">
						<Row>
							<Col md={7} className="labelTabProduk" >
								<div className="tab-content" id="pills-tabContent">
									<div
										className="tab-pane fade show active border"
										id="pills-produkTerlaris"
										role="tabpanel"
										aria-labelledby="pills-produkTerlaris"
									>
										<div className="d-flex flex-column labelProdukTerlaris ">
											<span className="ms-2 mt-3 label">Produk Terlaris</span>
											<span className="ms-2 hintLabel">7 Produk Terlaris Minggu ini</span>
										</div>
										
									</div>
									<div
										className="tab-pane fade"
										id="pills-produkTakTerlaris"
										role="tabpanel"
										aria-labelledby="pills-produkTakTerlaris"
									>
										<div className="d-flex flex-column labelProdukTerlaris">
											<span className="ms-2 mt-3 label">Produk Tak Laris</span>
											<span className="ms-2 hintLabel">7 Produk Terlaris Minggu ini</span>
										</div>
									</div>
								</div>
							</Col>
							<Col md="auto" className="btn-tab-produk">
								<div className="colap mt-4  ms-4">
									<ul className="nav nav-pills d-flex" id="pills-tab" role="tablist">
										<li className="nav-item" role="presentation">
											<button
												className="nav-link active btn-filter-terlaris"
												id="pills-home-tab"
												data-bs-toggle="pill"
												data-bs-target="#pills-produkTerlaris"
												type="button"
												role="tab"
												aria-controls="pills-produkTerlaris"
												aria-selected="true"
											/>
										</li>
										<li className="nav-item mx-1" role="presentation">
											<button
												className="nav-link btn-filter-terlaris"
												id="pills-profile-tab"
												data-bs-toggle="pill"
												data-bs-target="#pills-produkTakTerlaris"
												type="button"
												role="tab"
												aria-controls="pills-produkTakTerlaris"
												aria-selected="false"
											/>
										</li>
									</ul>
								</div>
							</Col>
						</Row>

						<Row className=" mt-4 align-items-center ps-2">
							<Col md="auto">
								<img
									src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//105/MTA-9167937/nata_nata_cake_kue_tart_butter_cream_252_full02_ojn0nvpm.jpg"
									className="st-img-produk rounded"
									alt="as"
								/>
							</Col>
							<Col md="auto">
								<div className="d-flex flex-column border  ">
									<span className="namaproduk">Kue Premium 30 cm</span>
									<span className="hintjenisproduk">Makanan</span>
								</div>
							</Col>
							<Col md="auto">
								<div className="d-flex align-items-center persentase px-1">
									<span>+182</span>
									<span>
										<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M4.85686 5.47452C4.85686 5.03269 5.21503 4.67452 5.65686 4.67452L12.4451 4.67452C12.8869 4.67452 13.2451 5.03269 13.2451 5.47452L13.2451 12.2627C13.2451 12.7046 12.8869 13.0627 12.4451 13.0627C12.0033 13.0627 11.6451 12.7046 11.6451 12.2627L11.6451 7.40589L5.09117 13.9598C4.77875 14.2722 4.27222 14.2722 3.9598 13.9598C3.64738 13.6474 3.64738 13.1408 3.9598 12.8284L10.5137 6.27452L5.65686 6.27452C5.21503 6.27452 4.85686 5.91634 4.85686 5.47452Z"
												fill="#31AC3D"
											/>
										</svg>
									</span>
								</div>
							</Col>
						</Row>
						<Row className=" mt-3 align-items-center ps-2">
							<Col md="auto">
								<img
									src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//105/MTA-9167937/nata_nata_cake_kue_tart_butter_cream_252_full02_ojn0nvpm.jpg"
									className="st-img-produk rounded"
									alt="as"
								/>
							</Col>
							<Col md="auto">
								<div className="d-flex flex-column border  ">
									<span className="namaproduk">Kue Premium 30 cm</span>
									<span className="hintjenisproduk">Makanan</span>
								</div>
							</Col>
							<Col md="auto">
								<div className="d-flex align-items-center persentase px-1">
									<span>+182</span>
									<span>
										<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M4.85686 5.47452C4.85686 5.03269 5.21503 4.67452 5.65686 4.67452L12.4451 4.67452C12.8869 4.67452 13.2451 5.03269 13.2451 5.47452L13.2451 12.2627C13.2451 12.7046 12.8869 13.0627 12.4451 13.0627C12.0033 13.0627 11.6451 12.7046 11.6451 12.2627L11.6451 7.40589L5.09117 13.9598C4.77875 14.2722 4.27222 14.2722 3.9598 13.9598C3.64738 13.6474 3.64738 13.1408 3.9598 12.8284L10.5137 6.27452L5.65686 6.27452C5.21503 6.27452 4.85686 5.91634 4.85686 5.47452Z"
												fill="#31AC3D"
											/>
										</svg>
									</span>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container> */}
		</Container>
	);
}

export default Statistik;
