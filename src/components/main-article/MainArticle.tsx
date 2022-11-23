import {ArticleTitle, Container, TapMenu, TapMenuItem} from "./MainArticle.style";
import React from "react";
import { MainGallery } from "../MainGallery/MainGallery";

function MainArticle() {
    return (
        <>
            <Container>
                <ArticleTitle>
                    <span>주거공간 시공 사례</span>
                    <TapMenu>
                        <TapMenuItem>
                            <span>10평대</span>
                        </TapMenuItem>
                        <TapMenuItem>
                            <span>20평대</span>
                        </TapMenuItem>
                        <TapMenuItem>
                            <span>30평대</span>
                        </TapMenuItem>
                        <TapMenuItem>
                            <span>40평대</span>
                        </TapMenuItem>
                    </TapMenu>
                </ArticleTitle>
                <MainGallery/>
            </Container>
        </>
    )
}

export {MainArticle}