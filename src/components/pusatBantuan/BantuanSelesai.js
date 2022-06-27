import React from "react";
import "../../css/pusatBantuan.css";
import maskot from "../../image/maskot.png"

function BantuanSelesai() {
	return (
		<>
			<div className="tbl-PusatBantuan mx-auto mt-4 px-3 ">
				<div className="d-flex flex-column justify-content-center align-items-center my-5">
					<div className="my-2">
						<img src={maskot} alt="maskot" className="w-75" />
					</div>
					<span className="text-center me-5 labelBlmSelesai mb-4">Duh, halaman ini masih bersih nih</span>
				</div>
			</div>
		</>
	);
}

export default BantuanSelesai;
