import React from 'react'

export default function DropdownDarkmode(props) {
    return (
        <div className="btn-group">
            <div className="btn-group dropdown" >
                <button type="button" className={`btn btn-${props.mode === '' || props.mode.color === 'light' ? 'light' : 'dark'} dropdown-toggle dropdown-toggle-split`} data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="visually-hidden">Toggle Dropstart</span>
                </button>
                <ul className={`dropdown-menu dropdown-menu-${props.mode === '' || props.mode.color === 'light' ? 'light' : 'dark'}`} aria-labelledby="dropdownMenuButton1">
                    {props.mode.color === 'dark' ? <>
                    <li type="button" className="dropdown-item" onClick={() => props.changemode("db")}>Dark Blue</li>
                    <li type="button" className="dropdown-item" onClick={() => props.changemode("dg")}>Dark Green</li>
                    <li type="button" className="dropdown-item" onClick={() => props.changemode("dy")}>Dark Yellow</li>
                    </> : <>
                    <li type="button" className="dropdown-item" onClick={() => props.changemode("lb")}>Light Blue</li>
                    <li type="button" className="dropdown-item" onClick={() => props.changemode("lg")}>Light Green</li>
                    <li type="button" className="dropdown-item" onClick={() => props.changemode("ly")}>Light Yellow</li>
                    </>}
                </ul>
            </div>
                <button type="button" onClick={props.changemode} className={`btn btn-${props.mode === '' || props.mode.color === 'light' ? 'light' : 'dark'}`}>
                    {props.mode === '' || props.mode.color === 'light' ? 'dark' : 'light'}mode
                </button>
        </div>
    )
}
