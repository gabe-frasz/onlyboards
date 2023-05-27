import "@reactflow/node-resizer/dist/style.css";
import { Handle, NodeResizer, Position, type NodeProps } from "reactflow";

export const Square = (props: NodeProps) => {
  return (
    <div
      className={`w-full h-full min-w-[200px] min-h-[200px] bg-violet-500 rounded border-4 transition-colors ${
        props.selected ? "hover:cursor-move" : "hover:cursor-pointer"
      }`}
    >
      <NodeResizer
        minHeight={200}
        minWidth={200}
        isVisible={props.selected}
        handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
        lineClassName="border-blue-400 border-4"
      />

      <Handle
        id="top"
        type="source"
        position={Position.Top}
        className="-top-5 w-3 h-3 bg-blue-400/80 rounded-full"
      />
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        className="-right-5 w-3 h-3 bg-blue-400/80 rounded-full"
      />
      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        className="-bottom-5 w-3 h-3 bg-blue-400/80 rounded-full"
      />
      <Handle
        id="left"
        type="source"
        position={Position.Left}
        className="-left-5 w-3 h-3 bg-blue-400/80 rounded-full"
      />
    </div>
  );
};
