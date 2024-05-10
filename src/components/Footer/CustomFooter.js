import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function CustomFooter() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex p-2 border-bottom'>

      </section>

      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md="6" lg="6" xl="6" className='mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-6'>Contact</h6>
            <p>
              <MDBIcon icon="home" className="me-2" />
              TH9, 3200 Corvette Way, Richmond, BC V6X 0T8, Canada
            </p>
            <p>
              <MDBIcon icon="envelope" className="me-3" />
              info@blessfu.com
            </p>
            <p>
              <MDBIcon icon="phone" className="me-3" /> +1 (604) 716 2688
            </p>
            <div className='d-flex justify-content-start'>
              <a href='https://www.facebook.com/profile.php?id=100086334738387&mibextid=YMEMSu' className='me-4 text-reset' style={{ fontSize: '26px' }}>
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href='https://www.tiktok.com/@blessfu?_t=8leNhG1WcTO&_r=1' className='me-4 text-reset' style={{ fontSize: '26px' }}>
                <MDBIcon fab icon="tiktok" />
              </a>
              <a href='https://chat.whatsapp.com/H2iWt4Fqhut3bZSaNVyALI' className='me-4 text-reset' style={{ fontSize: '26px' }}>
                <MDBIcon fab icon="whatsapp" />
              </a>
              <a href='https://www.instagram.com/blessfuyu9?igsh=MzRlODBiNWFlZA==' className='me-4 text-reset' style={{ fontSize: '26px' }}>
                <MDBIcon fab icon="instagram" />
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <section className='d-flex p-2 border-bottom'>

      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset ' href=''>
          Bless Fu
        </a>
      </div>
    </MDBFooter>
  );
}
