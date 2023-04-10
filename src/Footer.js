import {FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo} from "@phosphor-icons/react";

export default function Footer() {
    return (
        <div className="Footer">
            <div className="icons">
                <a href="https://www.facebook.com/profile.php?id=100000231098551" target="_blank" rel="noreferrer" ><FacebookLogo className="facebook" color="#918E9B" weight="fill" size={32} /></a>
                <a href="https://github.com/tejungchou" target="_blank" rel="noreferrer" ><GithubLogo className="github" color="#918E9B" weight="fill" size={32} /></a>
                <a href="https://www.instagram.com/de_ron13/" target="_blank" rel="noreferrer" ><InstagramLogo className="instagram" color="#918E9B" weight="fill" size={32} /></a>
                <a href="https://www.linkedin.com/in/roger-chou/" target="_blank" rel="noreferrer" ><LinkedinLogo className="linkedin" color="#918E9B" weight="fill" size={32} /></a>
            </div>
        </div>
    )
}