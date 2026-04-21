import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'motion/react';

export function SplineAnomalyVisualizer() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2('#0a0a0a', 0.0015);

    const camera = new THREE.PerspectiveCamera(60, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.set(0, 40, 120);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // GROUPS
    const group = new THREE.Group();
    scene.add(group);

    // spline points
    const createSpline = (color: number, yOffset: number, speed: number, amplitude: number, opacity=0.8) => {
      const points = [];
      const numPoints = 8;
      for (let i = 0; i < numPoints; i++) {
        points.push(new THREE.Vector3(
          (i - numPoints/2) * 30,
          yOffset + Math.random() * amplitude - amplitude/2,
          Math.random() * 60 - 30
        ));
      }

      const curve = new THREE.CatmullRomCurve3(points);
      curve.tension = 0.5;

      const tubeGeometry = new THREE.TubeGeometry(curve, 100, 0.5, 8, false);
      const material = new THREE.MeshLambertMaterial({ 
        color, 
        emissive: color,
        emissiveIntensity: 0.5,
        transparent: true,
        opacity 
      });
      const mesh = new THREE.Mesh(tubeGeometry, material);
      
      // Moving particles along spline
      const particleGeo = new THREE.SphereGeometry(1.5, 16, 16);
      const particleMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const particle = new THREE.Mesh(particleGeo, particleMat);
      
      group.add(mesh);
      group.add(particle);

      return { curve, mesh, particle, speed, progress: Math.random() };
    };

    const splines = [
      createSpline(0x00f0ff, 10, 0.001, 20),
      createSpline(0x7000ff, 0, 0.002, 30),
      createSpline(0xff003c, -10, 0.0015, 25, 1.0), // High risk spline
      createSpline(0x00ff00, -20, 0.0008, 15)
    ];

    // LIGHTS
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(0, 50, 0);
    scene.add(pointLight);

    // Floating data nodes
    const nodeGeo = new THREE.BoxGeometry(2, 2, 2);
    const nodeMat = new THREE.MeshLambertMaterial({ color: 0x333333, emissive: 0x111111 });
    const nodes: { mesh: THREE.Mesh, spinX: number, spinY: number }[] = [];
    
    for (let i=0; i<15; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(
        Math.random() * 160 - 80,
        Math.random() * 80 - 40,
        Math.random() * 80 - 40
      );
      scene.add(node);
      nodes.push({
        mesh: node,
        spinX: Math.random() * 0.02 - 0.01,
        spinY: Math.random() * 0.02 - 0.01
      });
    }

    // ANIMATION
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      group.rotation.y += 0.002;

      splines.forEach(s => {
        s.progress += s.speed;
        if (s.progress > 1) s.progress = 0;
        
        const pos = s.curve.getPointAt(s.progress);
        s.particle.position.copy(pos);
      });

      nodes.forEach(n => {
        n.mesh.rotation.x += n.spinX;
        n.mesh.rotation.y += n.spinY;
      });

      renderer.render(scene, camera);
    };
    animate();

    // RESIZE
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[350px] bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5">
      <div ref={mountRef} className="absolute inset-0" />
      <div className="absolute top-4 left-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#e5e5e5]">AI FRAUD DETECTION NETWORK</span>
        </div>
        <p className="text-[10px] uppercase font-mono text-gray-500">Spline Pattern Matcher Active</p>
      </div>
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-0.5 bg-[#00f0ff]" />
          <span className="text-[10px] font-mono text-gray-400">Normal Routing</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-0.5 bg-[#ff003c]" />
          <span className="text-[10px] font-mono text-[#ff003c]">High Risk Anomalies</span>
        </div>
      </div>
    </div>
  );
}
