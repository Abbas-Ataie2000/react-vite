import React, { Fragment } from 'react'

function Input({ label, type, ...rest }) {

    const styles = {
        error: { border: 'solid 1px red' },
        info: { border: 'solid 1px blue' }
    }
    return (
        <Fragment>
            {/* {label} */}
            <input  {...rest} />
        </Fragment>
    )
}

export default Input