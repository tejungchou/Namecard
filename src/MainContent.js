import {Envelope, LinkedinLogo} from "@phosphor-icons/react";

export default function MainContent(){
    return (
        <div className='main'>
            <div className='info'>
                <div className='name'>Roger Chou</div>
                <div className='job'>Software Engineer</div>
                <a href="https://github.com/tejungchou" target="_blank" rel="noreferrer" className='link'>github.com/tejungchou</a>
            </div>
            <div className='buttons'>
                <a href="mailto:roger04130413@gmail.com" target="_blank" rel="noreferrer" className='button1'><Envelope size={20} weight="fill" className="i"/> Email</a>
                <a href="https://www.linkedin.com/in/roger-chou/" target="_blank" rel="noreferrer" className='button2'><LinkedinLogo weight="fill" size={20} className="i"/> Linkedin</a>
            </div>
            <div className='details'>
                <div className='about'>About
                    <div className='content'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</div>
                </div>
                <div className='interest'>Interests
                    <div className='content'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</div>
                </div>
            </div>
        </div>
    );
}
  