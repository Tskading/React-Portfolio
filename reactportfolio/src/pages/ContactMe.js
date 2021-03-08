import React from "react";

function ContactMe () {
    return (
        <>
            <h1>
                How to Contact Me
            </h1>
            <div className="col-sm-10">

            <div id="linkedIn">
                    <a className="contactMe" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/thomas-kading/"
                      >LinkedIn</a
                    >
                  </div>
               
                
                  <div id="email">
                    <a className="contactMe" target="_blank" rel="noreferrer"
                      href="mailto: tskading@gmail.com?subject = Introduction = Message"
                      >Tskading@gmail.com</a
                    >
                  </div>

                  <div id="github">
                    <a className="contactMe" target="_blank" rel="noreferrer" href="https://github.com/Tskading">Github</a>
                  </div>

                  <div id="phonenumber">
                    <a className="contactMe" target="_blank" rel="noreferrer" href="#">512-619-3491</a>
                  </div>

                  <div id="spotify">
                    <a className="contactMe" target="_blank" rel="noreferrer"
                      href="https://open.spotify.com/user/7rqb6tknhd780o8gs7ap5g7wq?si=Z0UfA4JPRwmUNjYjg6JJtA"
                      >Spotify</a
                    >
                  </div>


              </div>
            
     
     
        </>
    )
}
export default ContactMe;