import React from 'react'

type Props = {}

const About = async (props: Props) => {
    await new Promise((res) => setTimeout(res, 2000));
    return (
        <div>About</div>
    )
}

export default About