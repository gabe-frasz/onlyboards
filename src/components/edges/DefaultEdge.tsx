import { getSmoothStepPath, type EdgeProps } from "reactflow";

export const DefaultEdge = (props: EdgeProps) => {
  const [edgePath] = getSmoothStepPath({
    sourceX: props.sourceX,
    sourceY: props.sourceY,
    targetX: props.targetX,
    targetY: props.targetY,
    sourcePosition: props.sourcePosition,
    targetPosition: props.targetPosition,
  });

  return (
    <path
      id={props.id}
      d={edgePath}
      markerEnd={props.markerEnd}
      className="react-flow__edge-path stroke-[3]"
    />
  );
};
