import React from 'react';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {TextureLoader} from 'three/src/loaders/TextureLoader.js'
import {useLoader} from 'react-three-fiber'
import phongTruyenThongVnuModel from './models/House_01_no_roof.glb'

function PhongTruyenThong() {
    // const phongTruyenThong = useLoader(GLTFLoader, phongTruyenThongVnuModel)
    // // console.log(phongTruyenThong.scene.children[0].name)
    // let phongTruyenThongComponents = phongTruyenThong.scene.children
    // // let listComponentsId = []
    // phongTruyenThongComponents.map((children, i) => {
    //     console.log(children)
    // });

    let {nodes} = useLoader(GLTFLoader, phongTruyenThongVnuModel)
    // for(let node in nodes) {
    //     console.log(nodes[node])
    // }

    // let count = 0;
    let childrenNames = []
    Object.keys(nodes).filter(node => nodes[node].type !== 'Mesh' && nodes[node].name !== 'Scene' && nodes[node].children.length > 0).map(parentNode => {
        // count++
        nodes[parentNode].children.map(((child) => childrenNames.push(child.name)))
        // Object.keys(nodes[parentNode].children).map((node) => console.log((node)))
        // console.log(nodes[MeshNode])
    })
    console.log(childrenNames)
    return (
        <>
            <group dispose={null} scale={[1, 1, 1]}>
                {Object.keys(nodes).filter(node => nodes[node].type === 'Mesh' && nodes[node].children.length === 0 && !childrenNames.includes(nodes[node].name) && nodes[node].name !== 'roof').map((MeshNode, index) =>
                    <mesh key={index}
                          castShadow
                          receiveShadow
                          material={nodes[MeshNode].material}
                          geometry={nodes[MeshNode].geometry}
                          position={nodes[MeshNode].position}
                          rotation={nodes[MeshNode].rotation}
                          scale={nodes[MeshNode].scale}/>)
                }
            </group>
        </>
    )
}

export default PhongTruyenThong
