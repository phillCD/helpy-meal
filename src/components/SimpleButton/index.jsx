import { Link } from "react-router-dom";
import React, { useState } from 'react';

import "./styles.css";

export default function SimpleButton({text, type, id}) {
    return(
        <button id={id} className="button" type={type}>
            {text}
        </button>
    )
}