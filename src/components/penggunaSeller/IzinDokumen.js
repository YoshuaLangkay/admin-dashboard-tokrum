import React from 'react'
import { Container, Row, Col, Button, InputGroup, FormControl, Table, Pagination } from "react-bootstrap";


function IzinDokumen() {
  return (
    <Container fluid className="boxProfileUsaha ">
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
									<Button className="ds-btn-table p-0 px-3">Lihat Dokumen</Button>
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