import React from 'react'

import './member.css'

const Member = ({ url, name, role, dep, invert }) => {
    return (
        <React.Fragment>
            {invert? (
                <div className="member-card row shadow">
                    <div className="col-6 image">
                        <img src="https://i.picsum.photos/id/237/250/250.jpg" alt={name} />
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center name">
                        <h1>Rishparn Gogoi</h1>
                        <h3>Design Head</h3>
                    </div>
                </div>
            ) : (
                    <div className="member-card row shadow">
                        <div className="col-6 d-flex flex-column justify-content-center align-items-center name">
                            <h1>Rishparn Gogoi</h1>
                            <h3>Design Head</h3>
                        </div>
                        <div className="col-6 image">
                            <img src="https://i.picsum.photos/id/237/250/250.jpg" alt={name} />
                        </div>
                    </div>
                )}
        </React.Fragment>

    )
}

export default Member
