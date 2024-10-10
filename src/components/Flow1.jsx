import "@xyflow/react/dist/style.css"
import { addEdge, Background, Controls, MiniMap, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react'
import { useCallback } from "react"

const initialNodes = [
    {id:'1', position:{x:0, y:0}, data:{label:"1"}},
    {id:'2', position:{x:0, y:100}, data:{label:"2"}},

]
const initialEdges = [{id:'e1-2', source:'1',target:'2'}]

const Flow1 = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

    const onConnect = useCallback((params)=> setEdges((eds)=> addEdge(params, eds)), [setEdges])

  return (
    <div style={{width:'100vw', height:"100vh"}}>
        <ReactFlow nodes={initialNodes} edges={initialEdges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect}>

            <Controls />
            <MiniMap />
            <Background variant="dots" gap={12} size={1}/>
        </ReactFlow>
    </div>
  )
}

export default Flow1