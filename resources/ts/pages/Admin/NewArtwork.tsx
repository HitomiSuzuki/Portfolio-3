import React, { useState } from "react";
import styled from "styled-components";
import { AdminHeader } from '../../components/atoms/AdminHeader';
import { DragAndDrop } from "../../components/molecules/DragAndDrop";
import { FileUpload } from "../../components/molecules/FileUpload";
 
export const NewArtwork = () => {

    return (
        <>
            <AdminHeader />
            <FileUpload />
        </>
    )
}