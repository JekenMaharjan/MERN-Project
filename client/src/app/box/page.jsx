import React from 'react'
import { useSelector } from 'react-redux'

const Box = () => {
    const {backgroundColor, width, height} = useSelector(state => state.box)

    return (
        <div>Box</div>
    )
}

export default Box