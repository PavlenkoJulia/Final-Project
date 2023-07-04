import React from "react";

export function Parser({xml}) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, 'application/xml');
    const htmlContent = xmlDoc.documentElement.textContent;
    const limitedHtmlContent = htmlContent.slice(0, 500) + '...';

    return (
        <p dangerouslySetInnerHTML={{ __html: limitedHtmlContent}} />
    );
}

export function ImageParser({xml}) {
    const imgParser = new DOMParser();
    const imgDoc = imgParser.parseFromString(xml, 'text/xml');
    const imgContent = imgDoc.getElementsByTagName('image');
    for (let image in imgContent) {
        if (imgContent[image].tagName === "image") {
            let imagePath = imgContent[image].innerHTML;
            createImage(imagePath);
        }
    }
    function createImage(path) {
        const img = document.createElement("img");
        img.src = path;
        document.body.appendChild(img);
    }

    return (
        <div dangerouslySetInnerHTML={{__html: imgContent}} />
    );
}