import { useEffect, useRef } from "react";
import { styled } from "@linaria/react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const CanvasHost = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: auto;
`;

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return undefined;
    }

    // const gui = new GUI();

    const canvas = document.createElement("canvas");
    canvas.className = "webgl";
    container.appendChild(canvas);

    const scene = new THREE.Scene();

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const keyLight = new THREE.PointLight(0xffffff, 1.0);
    keyLight.position.set(120, 180, 220);
    scene.add(keyLight);

    const bubbleGeometry = new THREE.SphereGeometry(1, 32, 32);
    const bubbleMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xcfeeff,
      transparent: true,
      opacity: 0.18,
      roughness: 0.05,
      metalness: 0.0,
      transmission: 1.0,
      thickness: 0.15,
      ior: 1.25,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05
    });

    const count = 200;
    const bubbles = new THREE.InstancedMesh(bubbleGeometry, bubbleMaterial, count);
    const dummy = new THREE.Object3D();

    for (let i = 0; i < count; i += 1) {
      const scale = 1.6 + Math.random() * 5.5;
      dummy.position.set(
        (Math.random() - 0.5) * 240,
        (Math.random() - 0.5) * 240,
        (Math.random() - 0.5) * 240
      );
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      bubbles.setMatrixAt(i, dummy.matrix);
    }
    scene.add(bubbles);

    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const camera = new THREE.PerspectiveCamera(
      60,
      viewport.width / viewport.height,
      1,
      1000
    );
    camera.position.z = 180;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(viewport.width, viewport.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    if ("physicallyCorrectLights" in renderer) {
      (renderer as THREE.WebGLRenderer & { physicallyCorrectLights: boolean })
        .physicallyCorrectLights = true;
    }

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    const handleResize = () => {
      viewport.width = window.innerWidth;
      viewport.height = window.innerHeight;

      camera.aspect = viewport.width / viewport.height;
      camera.updateProjectionMatrix();

      renderer.setSize(viewport.width, viewport.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.render(scene, camera);
    };

    window.addEventListener("resize", handleResize);

    let frameId = 0;
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };
    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(frameId);

      controls.dispose();
      bubbleGeometry.dispose();
      bubbleMaterial.dispose();
      renderer.dispose();
      // gui.destroy();

      if (canvas.parentElement) {
        canvas.parentElement.removeChild(canvas);
      }
    };
  }, []);

  return <CanvasHost ref={containerRef} aria-hidden="true" />;
};

export default ParticleBackground;
