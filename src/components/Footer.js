import React from 'react'
import '../css/footer.css'

function Footer() {
    return (
    <div className="footer-container">
        <div class="justify-content-center nav">
            <div class="nav-item">
                <div>&copy;{new Date().getFullYear()}: Developed by <a href="https://www.facebook.com/IblingSolutions/" target="_blank">IBling Solutions</a></div>
            </div>
        </div>
    </div>    
    )
}

const footerContainer = {
   
}
export default Footer
