import React from 'react';
import './Main.css';


class DownloadLink extends React.Component {
    render() {
        return (
            <button type="button" class="btn btn-primary d-inline-flex align-items-center .text-nowrap">
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


function Home() {

    return (
        <div class="Image_wrapper">
            <img class="top" src="Images\MountainStar.jpg" alt="Cover " />
            <div class="overlay">
                <h1 class="main text-rainbow-animation">I'm Nathan.</h1>
            </div>
            <div class="overlay_heading">
                <h2>a PROgrammer.</h2>
            </div>
            <div class="container overlay_two row ">
                <div class="row">
                    <h2 >About Me</h2>
                    <p > I am a passionate problem solver who firmly believes that there is always a solution to every challenge. You could say I have a motto: "JustSolve It".
                        I am a team player who can also work independently.I thrive on the idea that there is always
                        something new to learn.I actively seek ways to boost team spirit and help where I can. When it comes to programming, I recognize that there is still so much to explore and discover.
                        It's this endless quest for knowledge and the thrill of overcoming obstacles that keeps me driven and motivated in the world of technology. </p>
                </div>
                <div class="row">
                    <h2 >Skills</h2>
                    <p >
                        I'm thrilled to share that I've recently completed an extensive web development course on Udemy, covering a wide array of essential technologies including HTML, JavaScript, CSS, Bootstrap, databases, React,
                        Node.js, and even DApps.This journey has not only honed my coding skills but also ignited a passion.
                        With this newfound knowledge base and a desire to create impactful projects, I am eager to apply what I've learned to real-world challenges and opportunities.
                    </p>
                    <p> I am Currently Busy with <span>OutSystems</span> Training Tutorial on OutSystem's website. My next goal is to complete the following,
                        On Udemy- C#, Cyber Secuirty, PHP and TypeScript.
                    </p>
                </div>
                <div class="row">
                    <h3 >Documents</h3>
                    <div class="d-flex gap-2 justify-content-center py-5">
                        <CVComponent class="btn btn-primary d-inline-flex align-items-center .text-nowrap" type="button">
                        </CVComponent>
                        <CertComponent class="btn btn-primary d-inline-flex align-items-center" type="button">

                        </CertComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home