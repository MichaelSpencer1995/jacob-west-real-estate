import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { GREY } from "../../constants"

const SectionSubHeaderView = styled.h3`
    text-align: center;
    position: relative;
    padding-bottom: 20px;
    margin-top: 34px;

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        background: ${GREY};
        width: 42px;
        height: 2px;
        transform: translateX(-50%);
    }
`

const SectionSubHeader = props => (
    <SectionSubHeaderView {...props}>{props.children}</SectionSubHeaderView>
)

SectionSubHeader.propTypes = {
    children: PropTypes.element,
}

export default SectionSubHeader
