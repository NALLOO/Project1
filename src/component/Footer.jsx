import React from 'react';
import './Footer.css'
function Footer() {
    return (
        <footer>
            <div className="info">
                <h6>Liên hệ:</h6>
                <div className="info-item">
                    <i class="far fa-envelope"></i>
                    Nghiak57dl1@gmail.com
                </div>
                <div className="info-item">
                    <i class="fab fa-facebook"></i>
                    <a href="https://www.facebook.com/profile.php?id=100030610893207">Phạm Đình Nghĩa</a>
                </div>
                <div className="info-item">
                    <i class="fas fa-phone"></i>
                    0799154332
                </div>
            </div>
        </footer>
    );
}

export default Footer;