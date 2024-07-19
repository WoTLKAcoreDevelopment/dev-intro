'use client';
import React, { useEffect, useState } from 'react';

const Heroe = () => {
    const [downloaded, setDownloaded] = useState(false);

    useEffect(() => {
        if (downloaded) {
            // Redirect to /downloadfinish after download is complete
            setTimeout(() => {
                window.location.href = '/download';
            }, 1000); // Redirect after 1 second (adjust timing as needed)
        }
    }, [downloaded]);

    const handleDownload = () => {
        const data = "This is the content of the launcher file."; // Replace with your desired content

        const blob = new Blob([data], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'launcher.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        // Set downloaded to true to trigger useEffect for redirection
        setDownloaded(true);
    };

    return (
        <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: 'url(https://imgs.search.brave.com/S3LZo2wZ38-1xv7Db3CQBBsXdD8ccJfOE-I138g0avk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibmV0/Y21zdXMtYS5ha2Ft/YWloZC5uZXQvY21z/L2Jsb2dfaGVhZGVy/L2xuL0xOSjczSzhV/SVhXTzE2OTQ3MzE1/MTEzOTMucG5n)' }}
        >
            {/* Use an anchor tag to initiate download */}
            <a
                href="#"
                className="bg-white bg-opacity-100 p-10 rounded-lg shadow-lg text-center text-black text-4xl font-bold cursor-pointer"
                onClick={handleDownload}
            >
                Play Now
            </a>
        </div>
    );
};

export default Heroe;
