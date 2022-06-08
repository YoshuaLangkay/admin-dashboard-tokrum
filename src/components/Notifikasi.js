import React from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import bootstrap from 'react-bootstrap'
import '../css/Notifikasi.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'

function Notifikasi() {

    const list = [
        {
        name:<p>[Verifikasi]</p>,
        designation:<p className='d-flex'>Ada 1 Seller yang menunggu di Verifikasi</p>,
        tanggal:"Apr 20, 10:03 PM"
        },
        {
        name:<p>[Verifikasi]</p>,
        designation:"Pengguna burhanudin.store mengajukan [Dokumen Sertifikat HAKI] baru untuk diverifikasi.",
        tanggal:"Apr 20, 10:03 PM"
        },
        {
        name:<p style={{ color: "red"}}>[Komplain]</p>,
        designation:"Ada 20 pengguna yang mengajukan komplain.",
        tanggal:"Apr 20, 10:03 PM"
        },
        {
            name:<p>[Verifikasi]</p>,
            designation:"Ada 1 Seller yang menunggu di Verifikasi.",
            tanggal:"Apr 20, 10:03 PM"
        },
        {
        name:<p style={{ color: "red"}}>[Komplain]</p>,
        designation:"Ada 20 pengguna yang mengajukan komplain.",
        tanggal:"Apr 20, 10:03 PM"
        }
    ]

    

    
      // Some styling for the items
    const styles = {
        backgroundColor: 'white',
        width: '425px',
        marginBottom: '0px',
        padding: '12px',
        color: '#F9B40A',
    };
    const styles2 = {
        backgroundColor: 'white',
        width: '75px',
        marginBottom: '0px',
        color: '#F9B40A'
    };
    const styles3 = {
        backgroundColor: 'white',
        width: '75px',
        marginBottom: '0px',
        color: 'black',
    };

    function tombolNotif(){
        if(hideNotif == true){
            setHideNotif(false)
            if(list.name === '[Komplain]' ){
                styles2 = {
                    color: 'red'
                }
            }
        }else{
            setHideNotif(true)
        }

        
    }
    const [hideNotif, setHideNotif] = useState(true)

    return(

        <div className='containerNotif' >
            <Button className="exampleBtn" variant="primary" type="submit" onClick={tombolNotif}>
                    Tombol Notif
                </Button>
            <div className='notif'  hidden={hideNotif}>
            
                <Container className='kotak' hidden={hideNotif}>
                    
                    <Row className='row1'>
                        <Col xs={3}><h1 className='judulNotif'>Notifikasi</h1></Col>
                        <Col xs={8} className='col2 '><div className='kananNotif d-flex' >
                            <div className='tandai'>
                            <a href='#'>Tandai dibaca semua</a><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5 9.00017C16.5 4.85955 13.1406 1.50018 9 1.50018C4.85937 1.50018 1.5 4.85955 1.5 9.00017C1.5 13.1408 4.85937 16.5002 9 16.5002C13.1406 16.5002 16.5 13.1408 16.5 9.00017Z" stroke="#5B96F5" stroke-width="1.5" stroke-miterlimit="10"/>
                                <path d="M13.375 6.50055L9.00513 11.5005L7.13208 9.62555" stroke="#5B96F5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.49805 11.5L4.625 9.62497" stroke="#5B96F5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.9416 6.50055L8.92798 8.80524" stroke="#5B96F5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>

                            <div className='newNotif'>
                                <p className='new '>3 New</p>
                            </div>
                        </div>
                        
                        </Col>
                    </Row>
                    
                    {/* {
                    fruits.map(fruit => <div className='kotakNotif border-top mt-3' key={fruit} style={styles}><p>{fruit}</p></div>)
                    } */}
                    <ul className='listNotif' style={styles}>
                        {list.map((notif) => {
                        return( <li className='d-flex'>

                            <Row className="rowIsi border-top">
                                <Col xs={1} className="d-flex col1">
                                <p className='isiNotif' style={styles2}>{notif.name}</p><p className='isiNotif2' style={styles3}>{notif.designation}</p>
                                
                                </Col>
                                <Col xs={1}>
                                    <p className='tanggalNotif'>{notif.tanggal}</p>
                                </Col>
                            </Row>
                        </li>
                        )
                        })}
                    </ul>

                
                    </Container>
                    <Button className="btnNotif" variant="primary" type="submit">
                    Lihat Semua Notifikasi
                </Button>
                    
            </div>
        </div>
    )
}

export default Notifikasi;


