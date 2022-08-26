import React from 'react'

export default function About(props) {

    let x =new Date().getFullYear()
    x = x - 1998

    let simplified = {color : props.mode === '' || props.mode.color === 'light' ? 'black' : 'white', backgroundColor : props.mode.color === 'dark' ? props.mode.type === 'db' ? '#03294f' : props.mode.type === 'dg' ? '#0c7f0a' : props.mode.type === 'dy' ? '#beb110' : '#2a2b2c' : (props.mode.type === 'lb' ? '#bfd0f6' : props.mode.type === 'lg' ? '#c5f6bf' : props.mode.type === 'ly' ? '#f5f6bf' : 'white')}

    return (
        <div className="container">
            <h1 style={{color : props.mode === '' || props.mode.color === 'light' ? 'black' : 'white'}}><strong>About Us</strong></h1>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item" style={simplified}>
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed" style={simplified} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <strong>About Me</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is Awinash Chawan.</strong> I am {x} years old. I born in Tandur, Telengana. Currently I am living in Hyderabad, India. Currently I am working as a Trainee Engineer at AppSmart. I have certificate of 1 month course on <strong>"Algorithms solving using python programming language"</strong> from IIT Kharagpur. I know C, C++, Python programming languages and also I know Linux scriptting, HTML, CSS, (a little bit of) JavaScript and React js at moderate stage.
                        </div>
                    </div>
                </div>
                <div class="accordion-item" style={simplified}>
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" style={simplified} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>What is TextPlay?</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>TextPlay </strong>app is a react based application where you can manuplate your text or passage or story in the way you want with the provided functionality like changing whole text to uppercase, lowercase, removing extra spaces. Different themes provided so try to play with the themes also. This is base version with limited functionalities and planning to come up with functionalities in upcoming future version, For now manuplate your text the way you like.
                        </div>
                    </div>
                </div>
                <div class="accordion-item" style={simplified}>
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" style={simplified} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Contact me</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>email - awi.awinash.nash@gmail.com</p>
                            <p>Instagram - <a href = "https://www.instagram.com/suffer_more._/" title="Click" style={{textDecoration : 'none', color : 'inherit'}} >suffer_more._</a></p>
                            <p>LinkedIn - <a href = "https://www.linkedin.com/in/chawan-awinash-806299219" title="click" style={{textDecoration : 'none', color : 'inherit'}} >chawan-awinash</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
