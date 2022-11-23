import {GalleryContainer} from "./MainGallery.style"
import React from "react";
import { GalleryItem } from "./GalleryItem/GalleryItem";


function MainGallery() {
    return (
        <GalleryContainer>
            <GalleryItem/>
            <GalleryItem/>
            <GalleryItem/>
            <GalleryItem/>
            <GalleryItem/>
            <GalleryItem/>
        </GalleryContainer>
    )
}

export {MainGallery}