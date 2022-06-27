import React from "react";
import { Table, Pagination, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function BantuanAktif() {
	const tableBantuan = [
		{
			NoTiket: "001-SELLER",
			kategoriAkun: "Seller",
			kategoriBantuan: "Pencairan Dana",
			NamaAkun: "Gayus T.",
			TanggalPermintaan: " 11 Januari 2022",
		},
		{
			NoTiket: "001-SELLER",
			kategoriAkun: "Seller",
			kategoriBantuan: "Pencairan Dana",
			NamaAkun: "Gayus T.",
			TanggalPermintaan: " 11 Januari 2022",
		},
		{
			NoTiket: "001-SELLER",
			kategoriAkun: "Buyer",
			kategoriBantuan: "Barang Tidak Sesuai",
			NamaAkun: "Gayus T.",
			TanggalPermintaan: " 11 Januari 2022",
		},
		{
			NoTiket: "001-SELLER",
			kategoriAkun: "Buyer",
			kategoriBantuan: "Barang Tidak Sesuai",
			NamaAkun: "Gayus T.",
			TanggalPermintaan: " 11 Januari 2022",
		},
		{
			NoTiket: "001-SELLER",
			kategoriAkun: "Seller",
			kategoriBantuan: "Pencairan Dana",
			NamaAkun: "Gayus T.",
			TanggalPermintaan: " 11 Januari 2022",
		},
	];
	return (
		<>
			<div className="tbl-PusatBantuan mx-auto mt-4 px-3 ">
				<Table hover>
					<thead className="table-head">
						<tr>
							<th>Nomor Tiket</th>
							<th>Kategori Akun</th>
							<th>Kategori Bantuan</th>
							<th>Nama Akun</th>
							<th>Tanggal Pembelian</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{tableBantuan.map((el, i) => {
							const filterBtn = () => {
								if (el.kategoriAkun === "Seller") {
									return (
										<Link to="/pusatbantuan/seller">
											<Button className="ds-btn-table p-0 px-3">Selengkapnya</Button>
										</Link>
									);
								} else if (el.kategoriAkun === "Buyer") {
									return (
										<Link to="/pusatbantuan/buyer">
											<Button className="ds-btn-table p-0 px-3">Selengkapnya</Button>
										</Link>
									);
								}
							};

							return (
								<tr key={i}>
									<td>{el.NoTiket}</td>
									<td>{el.kategoriAkun}</td>
									<td>{el.kategoriBantuan}</td>
									<td>{el.NamaAkun}</td>
									<td>{el.TanggalPermintaan}</td>
									<td>{filterBtn()}</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
				<div className="garisTbl mx-auto mt-4"></div>
			</div>
			<div className="d-flex justify-content-center mt-3">
				<Pagination className="d-flex align-items-center">
					<Pagination.Prev style={{ padding: "0px  !important" }}>
						<svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" fill="none" viewBox="0 -5 42 59">
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
						<svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" fill="none" viewBox="0 -5 42 59">
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
			</div>
		</>
	);
}

export default BantuanAktif;
