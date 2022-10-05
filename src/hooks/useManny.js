import * as THREE from "three";
import { useMemo } from "react";
import { useFBX, useTexture } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

function useManny(modelPath) {
  const fbx = useFBX(modelPath);

  return manny;
}

export default useManny;
