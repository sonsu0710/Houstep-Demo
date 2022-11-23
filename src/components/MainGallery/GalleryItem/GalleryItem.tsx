import {GalleryImg, GalleryItemDiv, GalleryText} from "./GalleryItem.style"

function GalleryItem() {
    return (
        <GalleryItemDiv>
            <GalleryImg/>
            <GalleryText>
                <p>신혼부부 맞춤 디자인</p>
            </GalleryText>
        </GalleryItemDiv>
    )
}

export {GalleryItem}