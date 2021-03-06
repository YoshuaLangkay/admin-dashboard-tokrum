import { Table, Pagination } from "react-bootstrap";
import "../css/dasboard.css";

function Dasboard() {
	const ProdukTerlaris = [
		{
			namaProduk: "Kemeja",
			jenis: "Fashion Pria",
			harga: 1300,
			foto: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//94/MTA-11816392/oem_kemeja_pria_lengan_panjang_kemeja_flanel_pria_casual_6527_full01_jud1zj75.jpg",
		},
		{
			namaProduk: "Kemeja bagus",
			jenis: "Fashion Pria",
			harga: 1400,
			foto: "https://www.bikin.co/konveksi-baju/wp-content/uploads/2019/11/Kemeja-Kantor-Lengan-Panjang.jpg",
		},
		{
			namaProduk: "Kemeja keren",
			jenis: "Fashion Pria",
			harga: 1500,
			foto: "https://1.bp.blogspot.com/-dxCx33BMkhI/YUvyF_h82gI/AAAAAAAABMM/cmzd-TqHfJkOMGiFUwTVh6kCBIqLt7cqACLcBGAsYHQ/s640/k%2B2.jpg",
		},
		{
			namaProduk: "Kemeja keren",
			jenis: "Fashion Pria",
			harga: 1500,
			foto: "https://1.bp.blogspot.com/-dxCx33BMkhI/YUvyF_h82gI/AAAAAAAABMM/cmzd-TqHfJkOMGiFUwTVh6kCBIqLt7cqACLcBGAsYHQ/s640/k%2B2.jpg",
		},
	];

	return (
		<>
			<div className="isiContent d-flex flex-column ">
				<div className="profile d-flex align-items-center  d-flex justify-content-end ">
					<div className="isiProfile d-flex mb-3 me-2 ">
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
				<div className="dataContent d-flex  mt-3">
					{/* content left */}
					<div className="contentLeft ">
						<div className=" d-flex justify-content-evenly">
							<div className="transaksi d-flex flex-column">
								<span className="label_name_box mx-3 mt-3 ">
									Nominal Transaksi
									<span className="ms-1">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											fill="none"
											viewBox="0 0 20 20"
										>
											<path
												stroke="#BFBFDB"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="1.875"
												d="M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
											/>
											<path
												stroke="#BFBFDB"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="1.875"
												d="M9.375 9.688H10v4.062h.625"
											/>
											<path
												fill="#BFBFDB"
												d="M9.844 7.813a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
											/>
										</svg>
									</span>
								</span>
								<span className="label_jumlah_box mx-3 mt-2">
									{" "}
									Rp 50.000.000
								</span>
							</div>
							<div className="transaksi d-flex flex-column">
								<span className="label_name_box mx-3 mt-3 ">
									Total Transaksi
									<span className="ms-1">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											fill="none"
											viewBox="0 0 20 20"
										>
											<path
												stroke="#BFBFDB"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="1.875"
												d="M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
											/>
											<path
												stroke="#BFBFDB"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="1.875"
												d="M9.375 9.688H10v4.062h.625"
											/>
											<path
												fill="#BFBFDB"
												d="M9.844 7.813a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
											/>
										</svg>
									</span>
								</span>
								<span className="label_jumlah_box mx-3 mt-1  ">
									{" "}
									5555
								</span>
								<span className="hint_box mx-3">
									{" "}
									Transaksi
								</span>
							</div>
						</div>
						<div className="d-flex  d-flex justify-content-evenly mt-2">
							<div className="box_user d-flex flex-column">
								<span className="label_name_box mx-3 mt-3 ">
									Buyer Baru
								</span>
								<span className="label_jumlah_box mx-3 mt-1  ">
									{" "}
									666
								</span>
								<span className="hint_box mx-3"> User</span>
							</div>
							<div className="box_user d-flex flex-column">
								<span  className="label_name_box mx-3 mt-3 ">Seller Baru</span>
								<span className="label_jumlah_box mx-3 mt-1  "> 777</span>
								<span className="hint_box mx-3"> User</span>
							</div>
							<div className="box_user d-flex flex-column">
								<span  className="label_name_box mx-3 mt-3 ">Menunggu Verifikasi</span>
								<span className="label_jumlah_box mx-3 mt-1  "> 8888</span>
								<span className="hint_box mx-3"> User</span>
							</div>
						</div>
						{/* TABLE USER */}
						<div className="tableUser   d-flex flex-column align-items-center mt-2 mx-3 ">
							<div className="isiTable ">
								<Table
									responsive
									hover
									className="zui-table zui-table-rounded"
								>
									<thead className="mt-5">
										<tr>
											<th>Nama Brand</th>
											<th>Nama Pemilik</th>
											<th>Status</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Harli Dapitson</td>
											<td>Mang Donal Trum</td>
											<td>
												<span className="status rounded p-1">
													Menunggu Verifikasi
												</span>
											</td>
											<td className="action">
												<a href="#"> Selengkapnya </a>
											</td>
										</tr>
										<tr>
											<td>Harli Dapitson</td>
											<td>Mang Donal Trum</td>
											<td>
												<span className="status1 rounded p-1">
													Terverifikasi
												</span>
											</td>
											<td className="action">
												<a href="#"> Selengkapnya </a>
											</td>
										</tr>
										<tr>
											<td>Harli Dapitson</td>
											<td>Mang Donal Trum</td>
											<td>
												<span className="status2 rounded p-1">
													Ditolak
												</span>
											</td>
											<td className="action">
												<a href="#"> Selengkapnya </a>
											</td>
										</tr>
										<tr>
											<td>Harli Dapitson</td>
											<td>Mang Donal Trum</td>
											<td>
												<span className="status2 rounded p-1">
													Ditolak
												</span>
											</td>
											<td className="action">
												<a href="#"> Selengkapnya </a>
											</td>
										</tr>
										<tr>
											<td>Harli Dapitson</td>
											<td>Mang Donal Trum</td>
											<td>
												<span className="status2 rounded p-1">
													Ditolak
												</span>
											</td>
											<td className="action">
												<a href="#"> Selengkapnya </a>
											</td>
										</tr>
										<tr>
											<td>Harli Dapitson</td>
											<td>Mang Donal Trum</td>
											<td>
												<span className="status2 rounded p-1">
													Ditolak
												</span>
											</td>
											<td className="action">
												<a href="#"> Selengkapnya </a>
											</td>
										</tr>
										<tr>
											<td>Harli Dapitson</td>
											<td>Mang Donal Trum</td>
											<td>
												<span className="status2 rounded p-1">
													Ditolak
												</span>
											</td>
											<td className="action">
												<a href="#"> Selengkapnya </a>
											</td>
										</tr>
									</tbody>
								</Table>
							</div>
							<div className="paginationTableBox d-flex justify-content-center">
								<Pagination className="d-flex align-items-center">
									<Pagination.Prev  style={{padding:"0px  !important"}}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="49"
											height="49"
											fill="none"
											viewBox="0 -5 42 59"
                                                      
										>
											<path
												fill="#3E4094"
												d="M21.501 24.93a.572.572 0 0 1-.168-.404v-.29a.586.586 0 0 1 .168-.404l3.916-3.908a.381.381 0 0 1 .541 0l.541.54a.374.374 0 0 1 0 .534l-3.39 3.383 3.39 3.383a.38.38 0 0 1 0 .54l-.54.534a.381.381 0 0 1-.542 0l-3.916-3.909Z"
											/>
											<path
												fill="#BFBFDB"
												d="M24.381 47.242C11.755 47.242 1.52 37.007 1.52 24.38h-3.04c0 14.305 11.596 25.9 25.901 25.9v-3.04Zm22.86-22.861c0 12.626-10.234 22.86-22.86 22.86v3.04c14.305 0 25.9-11.595 25.9-25.9h-3.04ZM24.382 1.52c12.626 0 22.86 10.235 22.86 22.861h3.04c0-14.305-11.595-25.901-25.9-25.901v3.04Zm0-3.04C10.076-1.52-1.52 10.076-1.52 24.381h3.04C1.52 11.755 11.755 1.52 24.381 1.52v-3.04Z"
											/>
										</svg>
									</Pagination.Prev>
									<Pagination.Item>{1}</Pagination.Item>
									<Pagination.Item>{2}</Pagination.Item>
									<Pagination.Item>{3}</Pagination.Item>
									<Pagination.Item>{4} </Pagination.Item>
									<Pagination.Item>{5}</Pagination.Item>
									<Pagination.Ellipsis />
									<Pagination.Item>{30}</Pagination.Item>
									<Pagination.Next>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="49"
											height="49"
											fill="none"
											viewBox="0 -5 42 59"
										>
											<path
												fill="#3E4094"
												d="M27.261 24.93a.572.572 0 0 0 .168-.404v-.29a.587.587 0 0 0-.168-.404l-3.916-3.908a.381.381 0 0 0-.541 0l-.541.54a.374.374 0 0 0 0 .534l3.39 3.383-3.39 3.383a.38.38 0 0 0 0 .54l.54.534a.381.381 0 0 0 .542 0l3.916-3.909Z"
											/>
											<path
												fill="#BFBFDB"
												d="M24.381 47.238c-12.624 0-22.857-10.233-22.857-22.857h-3.048c0 14.307 11.598 25.905 25.905 25.905v-3.048Zm22.857-22.857c0 12.624-10.233 22.857-22.857 22.857v3.048c14.307 0 25.905-11.598 25.905-25.905h-3.048ZM24.381 1.524c12.624 0 22.857 10.233 22.857 22.857h3.048c0-14.307-11.598-25.905-25.905-25.905v3.048Zm0-3.048c-14.307 0-25.905 11.598-25.905 25.905h3.048c0-12.624 10.233-22.857 22.857-22.857v-3.048Z"
											/>
										</svg>
									</Pagination.Next>
								</Pagination>
								{/* <nav aria-label="Page navigation example">
									<ul className="pagination">
										<li className="page-item">
											<a className="page-link" href="#">
												Previous
											</a>
										</li>
										<li className="page-item active">
											<a className="page-link" href="#">
												1
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												2
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												3
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												Next
											</a>
										</li>
									</ul>
								</nav> */}
							</div>
						</div>
					</div>
					{/* Content Right */}
					<div className="contentRight d-flex flex-column  ">
						{/* PRODUK TERLARIS */}
						<div className="box_terlaris d-flex flex-column">
							<div className="labelTerlaris d-flex justify-content-between mt-3 pb-2 ">
								<span
									style={{
										fontFamily: "Nunito-800",
										fontSize: "1.2vw",
										width: "14vw",
									}}
								>
									Produk Terlaris
								</span>
								<span
									style={{
										fontFamily: "Nunito-800",
										fontSize: "1vw",
										width: "6vw",
										color: "#3E4094",
									}}
								>
									Lihat detail
								</span>
							</div>
							{ProdukTerlaris.map((item, i) => {
								return (
									<div className="list_produk_terlaris d-flex ms-3 mt-1 mb-1">
										<div className="productImg">
											<img src={item.foto} alt="kemeja" />
										</div>
										<div className="labelNameProduk d-flex flex-column ms-3 ">
											<span className="namaProdukTerlaris">
												{item.namaProduk}
											</span>
											<span className="hintProdukTerlaris">
												{item.jenis}
											</span>
										</div>
										<div className="labelHargaproduk  d-flex flex-column">
											<span className="hargaProdukTerlaris">
												{item.harga}
											</span>
											<span className="hintProdukTerlaris">
												Terjual
											</span>
										</div>
									</div>
								);
							})}
						</div>
						{/* BRAND TERLARIS  */}
						<div className="box_terlaris d-flex flex-column mt-2">
							<div className="labelTerlaris d-flex justify-content-between mt-3 pb-2 ">
								<span
									style={{
										fontFamily: "Nunito-800",
										fontSize: "1.2vw",
										width: "14vw",
									}}
								>
									Produk Terlaris
								</span>
								<span
									style={{
										fontFamily: "Nunito-800",
										fontSize: "1vw",
										width: "6vw",
										color: "#3E4094",
									}}
								>
									Lihat detail
								</span>
							</div>
							{ProdukTerlaris.map((item, i) => {
								return (
									<div className="list_produk_terlaris d-flex ms-3 mt-1 mb-1">
										<div className="productImg">
											<img src={item.foto} alt="kemeja" />
										</div>
										<div className="labelNameProduk d-flex flex-column ms-3 ">
											<span className="namaProdukTerlaris">
												{item.namaProduk}
											</span>
											<span className="hintProdukTerlaris">
												{item.jenis}
											</span>
										</div>
										<div className="labelHargaproduk  d-flex flex-column">
											<span className="hargaProdukTerlaris">
												{item.harga}
											</span>
											<span className="hintProdukTerlaris">
												Terjual
											</span>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Dasboard;
