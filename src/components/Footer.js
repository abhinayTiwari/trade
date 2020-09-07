import React from 'react'
import '../css/footer.css'

function Footer() {
    return (
    <div className="footer-container">
        <div class="justify-content-center nav">
            <div class="nav-item">
                <div>&copy;{new Date().getFullYear()} Copyright: IBling Solutions</div>
            </div>
        </div>
    </div>    
    )
}

const footerContainer = {
   
}
export default Footer
