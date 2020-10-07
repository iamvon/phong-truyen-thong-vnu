import React, {Suspense, useState} from 'react'
import './styles/RoomControls.css'
import PhongTruyenThong from '../PhongTruyenThong'
import Box from '../Box'
import CameraControls from '../CameraControls'
import {Canvas} from 'react-three-fiber'
import {Container, Row, Col, Card, Button} from 'reactstrap'

const RoomControls = () => {
    const [clicked, setClick] = useState(false)

    return (
        <>
            {!clicked && <Button color="info" onClick={() => setClick(true)}>Tải phòng truyền thống</Button>}
            <Canvas camera={{position: [0, 70, 80]}} shadowMap>
                <CameraControls/>
                <ambientLight intensity={0.6} />
                <spotLight intensity={0.2} position={[200, 600, 200]} />
                <Suspense
                    fallback={<Box/>}>
                    {clicked && <PhongTruyenThong position={[0, 0, 0]}/>}
                </Suspense>
            </Canvas>

        </>
    )
}

export default RoomControls