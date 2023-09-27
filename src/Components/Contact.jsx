
import React from 'react';
import './Main.css';
// import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';


class DownloadLink extends React.Component {
    render() {
        return (
            <button type="button" class="btn btn-primary">
            <a href={this.props.src} download title='Download'>{this.props.children}</a>
          </button>
        )
    }
}

class CVComponent extends React.Component {
    render() {
        return (
            <DownloadLink src="Documents/CV.pdf" titletarget="_blank">Curriculum Vitae:</DownloadLink>
        )
    }
}

class CertComponent extends React.Component {
    render() {
        return (
            <DownloadLink src="Documents\WebDevCertificate.pdf" target="CV">Web Dev Certificate</DownloadLink>
        )
    }
}

function Contact() {
    return (
        <div class="contactPage">
        <br></br>
        <h1 class="heading">Get In Touch</h1>
            <div className="App">
                <table>
                    <tr>
                        <th>Email</th>
                        <th>GitHub</th>
                        <th>Code Sandbox</th>
                    </tr>
                    <tr>
                        <td><a href='mailto:nathankruger21@gmail.com' target="_blank" rel="noopener noreferrer" title='Email Link'>nathankruger21@gmail.com</a></td>
                        <td><a href='https://github.com/dashboard' target="_blank" rel="noopener noreferrer" title='Email Link'>Github/NathanKru</a></td>
                        <td><a href='https://codesandbox.io/u/Nathan_Kru' target="_blank" rel="noopener noreferrer" title='Email Link'>Nathan_Kru</a></td>
                    </tr>
                </table>

            </div>
            <h2>Download Documents Below</h2>
            <div class="d-flex gap-2 justify-content-center py-5">
                <CVComponent  class="btn btn-primary d-inline-flex align-items-center .text-nowrap" type="button">
                </CVComponent>
                <CertComponent class="btn btn-primary d-inline-flex align-items-center" type="button">
                
                </CertComponent>
            </div>
        </div>
    );
}


export default Contact;



// <MDBContainer fluid>...</MDBContainer>
// export default function App() {
//   return (
//     <MDBContainer fluid>
//     <MDBRow>
//       <MDBCol md='4'>
//         md="4"
//       </MDBCol>
//       <MDBCol md='4'>
//         md="4"
//       </MDBCol>
//       <MDBCol md='4'>
//         md="4"
//       </MDBCol>
//     </MDBRow>
//     </MDBContainer>
//   );
// }