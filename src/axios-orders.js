import React from 'react';
import axios from 'axios'

const instanece = axios.create(
    {
        baseURL:"http://localhost:1689/demo/"
    }
);

export default instanece;