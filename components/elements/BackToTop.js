import Link from "next/link";
import { useEffect, useState } from "react";

export default function BookNowButton() {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100 && !hasScrolled) {
                setHasScrolled(true);
            } else if (window.scrollY < 100 && hasScrolled) {
                setHasScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [hasScrolled]);

    return (
        <>
            {hasScrolled && (
                <div className="sticky-buttons">
                    {/* Book Now Button */}
                    <Link href="/Booking" className="book-now-btn" style={{color:'black'}}>
                        Book Now
                    </Link>
                </div>
            )}

            <style jsx>{`
               .sticky-buttons {
    height: 50px;
    width: 150px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    
    background-color: #FF7F00; /* Orange background */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px; /* Rounded corners for a better look */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background 0.3s ease, transform 0.2s ease;
}

.book-now-btn {
    color: white;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    padding: 10px 20px;
    border-radius: 30px;
    cursor: pointer;
}

.sticky-buttons:hover {
color:white;
    background-color: #e67600; /* Darker orange */
    transform: scale(1.1);
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .sticky-buttons {
        bottom: 15px;
        right: 15px;
        width: 130px;
        height: 45px;
    }

    .book-now-btn {
        font-size: 14px;
    }
}

            `}</style>
        </>
    );
}
