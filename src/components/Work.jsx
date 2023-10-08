import React from 'react'
import wc from "./Images/word.png"
import cal from "./Images/calci.png"
import age from "./Images/age.png"
import bg from "./Images/backgroundChanger.png"

function Work() {
    return (
        <div className='work1'>
            <div className="side">
                <img id='work1' src={wc} alt="" />
            </div>
            <div className="right">
                <div className="big">
                    WordCounter
                </div>
                <div className="kid">
                    React js - Bootstrap
                </div>
                <div className="content">
                    This website is basically a tool which can count the number of words you enter without any issue
                </div>
                <div className="link">
                    <a id='yep' href="https://word-counter-o0bhjv7d6-adibas-projects.vercel.app" target='_blank'>WordCounter-App</a>
                </div>
            </div>


            <div className="work2">
                <div className="right">
                    <div className="big1">
                        Calculator
                    </div>
                    <div className="kid1">
                        React Js - CSS - HTML
                    </div>
                    <div className="content">
                        This project can calculate your equations and you can also change to dark mode!
                    </div>
                    <div className="link1">
                        <a id='yep1' href="https://calculator-react-ecru.vercel.app" target='_blank'>Calculator-App</a>
                    </div>
                </div>
                <div className="side">
                    <img id='work2' src={cal} alt="" />
                </div>
            </div>



            <div className="work3">
                <div className="side">
                    <img id='work3' src={age} alt="" />
                </div>
                <div className="right">
                    <div className="big3">
                        AgeCalculator
                    </div>
                    <div className="kid3">
                        React Js - CSS
                    </div>
                    <div className="content">
                        This will calculate anyone’s age without any hassle just stem in your DOB and Voila!
                    </div>
                    <div className="link3">
                        <a id='yep3' href="https://age-check-a49d54gcb-adibas-projects.vercel.app" target='_blank'>AgeCheck-App</a>
                    </div>
                </div>
            </div>

            <div className="work4">
                <div className="right">
                    <div className="big4">
                        ColorPicker
                    </div>
                    <div className="kid4">
                        React Js - CSS - HTMLL
                    </div>
                    <div className="content">
                        In this website you can choose from the colors and provided and give an attractive background to your screen.

                    </div>
                    <div className="link4">
                        <a id='yep4' href="https://background-changer-bs9a1a7en-adibas-projects.vercel.app" target='_blank'>ColorPicker-App</a>
                    </div>
                </div>
                <div className="side">
                    <img id='work4' src={bg} alt="" />
                </div>
            </div>



        </div>
    )
}

export default Work
