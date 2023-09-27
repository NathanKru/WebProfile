import React from 'react';
import './Main.css';
// import ProgressBar from './ProgressBar';

export default function Certification() {
    return (
        
        <div class="Image_wrapper">
            <img class="top" src="Images\Worldmap2.jpg" alt="Cover" />
            <div class="overlay">
                <h1 class="main text-code-animation">My Studies </h1>
            </div>
            <div class="container overlay_page_two row ">
                <h2 >More About Me</h2>
                    <p >Below are some of my Studies I have completed and also a list of what I am Currently studying</p>
                <div class="center">
                    <div class="card mb-3 card ">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img id="card_img" src="Images\Udemy2.png"  alt="..."></img>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h4 class="card-title">Web Dev Bootcamp</h4>
                                    <h5 class="card-title">Udemy</h5>
                                    <p class="card-text">During this bootcamp I had exsposure to -.HTML
                                    CSS,JavaScript,jQuery, Node, EJS, Api's , DB's[SQL Mongoose MongoDB],Authentication ,Reactjs and more.</p>
                                    <p class="card-text"><small class="text-muted">Link to the <a href='https://www.udemy.com/course/the-complete-web-development-bootcamp/'>COURSE</a></small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3 card ">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img  id="card_img" src="Images\Udemy2.png" alt="..."></img>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h4 class="card-title">Python</h4>
                                    <h5 class="card-title">Udemy</h5>
                                    <p class="card-text">This was a Introduction course and one of the first Programming Course I took.</p>
                                    <p class="card-text"><small class="text-muted">Link to the <a href='https://www.udemy.com/course/self-taught-programmer/'>COURSE</a></small></p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="card mb-3 card">
                        <div class=" row no-gutters">
                            <div class="col-md-4">
                                <img id="card_img" src="Images\OutSystems.png"  alt="..."></img>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h4 class="card-title">OutSystems</h4>
                                    <h5 class="card-title">OutSystems Tutorial</h5>
                                    <p class="card-text">I Started the outsystems Tutorial on the 27th of Sept.</p>
                                    <p class="card-text"><small class="text-muted">Link to the Tutorial <a href='https://www.outsystems.com/learn/'>HERE</a></small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        
            {/* <div className="App">
            <h3 className="heading">Skills</h3>
            <img id="card_im"  src="Images\JS.png" alt="Cover "></img>
            <ProgressBar bgcolor="orange"  progress='30'  height={30} />
            <img id="card_im"  src="Images\JS.png" alt="Cover "></img>
            <ProgressBar bgcolor="red" progress='30'  height={30} />
            <ProgressBar bgcolor="#99ff66" progress='30'  height={30} />
            <ProgressBar bgcolor="#ff00ff" progress='30'  height={30} />
            <ProgressBar bgcolor="#99ccff" progress='30'  height={30} />
            </div> */}
        </div>
    )
}

