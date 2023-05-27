"use client";

import * as Toolbar from "@radix-ui/react-toolbar";
import { useCallback } from "react";
import ReactFlow, {
  Background,
  ConnectionMode,
  Controls,
  addEdge,
  useEdgesState,
  useNodesState,
  type Connection,
  type Node,
} from "reactflow";
import { zinc } from "tailwindcss/colors";

import { DefaultEdge, Square } from "@/components";
import "reactflow/dist/base.css";

const nodeTypes = {
  square: Square,
};

const edgeTypes = {
  default: DefaultEdge,
};

const initialNodes = [
  {
    id: "1",
    type: "square",
    position: { x: 0, y: 0 },
    data: {},
  },
  { id: "2", type: "square", position: { x: 0, y: 100 }, data: {} },
] satisfies Node[];

export default function Home() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (connection: Connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges],
  );

  function createNode() {
    const newNode = {
      id: crypto.randomUUID(),
      type: "square",
      position: { x: 0, y: 0 },
      data: {},
    };

    setNodes((nodes) => [...nodes, newNode]);
  }

  return (
    <div className="relative w-screen h-screen">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionMode={ConnectionMode.Loose}
        defaultEdgeOptions={{
          type: "default",
        }}
      >
        <Background size={4} gap={16} color={zinc[200]} />

        <Controls />
      </ReactFlow>

      <Toolbar.Root className="fixed bottom-20 left-1/2 -translate-x-1/2 w-96 h-20 px-8 bg-white rounded-2xl shadow-lg border border-zinc-300 overflow-hidden">
        <Toolbar.Button
          className="w-32 h-32 mt-6 bg-violet-500 rounded transition-transform hover:-translate-y-2"
          onClick={createNode}
        />
      </Toolbar.Root>
    </div>
  );
}
