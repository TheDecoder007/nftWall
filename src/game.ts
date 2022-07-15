import * as access from 'dcl-access-area'
import { hud } from 'dcl-builder-hud'
import * as utils from '@dcl/ecs-scene-utils'



const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const bermudaGrass = new Entity('bermudaGrass')
engine.addEntity(bermudaGrass)
bermudaGrass.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
bermudaGrass.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass.addComponentOrReplace(transform2)


const bermudaGrass2 = new Entity('bermudaGrass2')
engine.addEntity(bermudaGrass2)
bermudaGrass2.setParent(_scene)
bermudaGrass2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass2.addComponentOrReplace(transform3)

const domeGreenhouse = new Entity('domeGreenhouse')
engine.addEntity(domeGreenhouse)
domeGreenhouse.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(8, -0.5, 5),
  rotation: new Quaternion(0, 180, 0, 1),
  scale: new Vector3(0.75, 1, 1.2)
})
domeGreenhouse.addComponentOrReplace(transform4)
const gltfShape2 = new GLTFShape("66a1b927-de0d-4114-9ae0-e8b485601040/GreenHouse_01/GreenHouse_01.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
domeGreenhouse.addComponentOrReplace(gltfShape2)
hud.attachToEntity(domeGreenhouse)

let domeTrigger = new Entity('domeTrigger')
// domeTrigger.addComponent(new BoxShape())
domeTrigger.addComponent(new Transform( {position: new Vector3(6,0,-9.5), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}))
domeTrigger.setParent(_scene)
domeTrigger.addComponent(new utils.TriggerComponent(new utils.TriggerBoxShape(new Vector3(5,3,1), new Vector3(2,1.5,0)), {
  enableDebug: false,
  onCameraEnter:()=>{
    domeGreenhouse.addComponent(new utils.ScaleTransformComponent(
      new Vector3(1,1,1),
      new Vector3(1,2.5,1),
      0.5
))
 engine.removeEntity(domeTrigger)
}}))
hud.attachToEntity(domeTrigger)

const domeGreenhouse2 = new Entity('domeGreenhouse2')
engine.addEntity(domeGreenhouse2)
domeGreenhouse2.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(8, -0.6, 2),
  rotation: new Quaternion(0, 180, 0, 1),
  scale: new Vector3(1.5, 3, 3)
})
domeGreenhouse2.addComponentOrReplace(transform5)
const gltfShape3 = new GLTFShape("66a1b927-de0d-4114-9ae0-e8b485601040/GreenHouse_01/GreenHouse_01.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
domeGreenhouse2.addComponentOrReplace(gltfShape3)
hud.attachToEntity(domeGreenhouse2)





/// access area checking for NFT-721 ownership on ETH chain
let wall = access.createArea({
  transform: {position: new Vector3(8,1,1), scale: new Vector3(3,5,1)},
  debug: false, //toggle this true/false to see the access area and position within your scene
  type: access.Type.NFT,
  nftType: access.NFTType.ERC721,
  chain: access.ChainType.ETH,
  contract: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
  name: "wall1",
  deniedMessage: "You need a BAYC to enter. Peasant!"
})
hud.attachToEntity(wall)
// wall.setParent(domeGreenhouse)


/// access area checking for user wearing wearables
// let wall = access.createArea({
//   transform: {position: new Vector3(12,1,4), scale: new Vector3(3,8,5)},
//   debug: false, //toggle this true/false to see the access area and position within your scene
//   type: access.Type.WEARABLESON,
//   wearables:["urn:decentraland:matic:collections-v2:0xf87a8372437c40ef9176c1b224cbe9307a617a25:1"],
//   name: "wall1",
//   deniedMessage: "You do not have bar access"
// })

/// access area checking for user owning wearables
// let wall = access.createArea({
//   transform: {position: new Vector3(12,1,4), scale: new Vector3(3,8,5)},
//   debug: false, //toggle this true/false to see the access area and position within your scene
//   type: access.Type.HASWEARABLES,
//   wearables:["urn:decentraland:matic:collections-v2:0xf87a8372437c40ef9176c1b224cbe9307a617a25:0", "urn:decentraland:matic:collections-v2:0xf87a8372437c40ef9176c1b224cbe9307a617a25:1"],
//   wearablesMatch: access.Match.ALL,
//   name: "wall1",
//   deniedMessage: "You do not have bar access"
// })