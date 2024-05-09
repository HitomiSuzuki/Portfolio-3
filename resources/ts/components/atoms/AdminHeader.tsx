import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {useLogout} from '../../queries/AuthQuery';


export const AdminHeader = () => {
    const logout = useLogout();

    return (
        <StyledAdminHeaderWrapper>
            <StyledAdminHeaderContent to="/new">New</StyledAdminHeaderContent>
            <StyledAdminHeaderContent to="/artworks">Artworks</StyledAdminHeaderContent>
            <StyledAdminHeaderContent to="/" onClick={() => logout.mutate()}>logout</StyledAdminHeaderContent>
        </StyledAdminHeaderWrapper>
    )
}

const StyledAdminHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    border-bottom: 1px solid black;
`

const StyledAdminHeaderContent = styled(Link)`
    margin: 0;
    padding: 10px 15px;
    font-size: 12px;
`