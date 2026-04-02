import { useRef, useMemo, useEffect, useState, useCallback } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import * as THREE from 'three';
import { ZoomIn, ZoomOut, RotateCw, Maximize, Pause, Play } from 'lucide-react';

// Define types for our graph data
interface GraphNode {
  id: string;
  group: number;
  val: number;
  name: string;
  color?: string;
  img?: string;
}

interface GraphLink {
  source: string;
  target: string;
  value: number;
}

interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

export function TransactionFlowGraph() {
  const fgRef = useRef<any>();
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const angleRef = useRef(0);

  // Generate mock data for the financial ecosystem
  const data: GraphData = useMemo(() => {
    const nodes: GraphNode[] = [
      { id: 'central_bank', group: 1, val: 20, name: 'Central Bank', color: '#ffd700', img: '/assets/logo-dark-1.png' }, // Gold
      { id: 'bank_kigali', group: 2, val: 10, name: 'Bank of Kigali', color: '#00f0ff', img: '/assets/images.png' }, // Cyan
      { id: 'equity_bank', group: 2, val: 10, name: 'Equity Bank', color: '#00f0ff', img: '/assets/download.jpg' },
      { id: 'im_bank', group: 2, val: 10, name: 'I&M Bank', color: '#00f0ff', img: '/assets/im-logo.png' },
      { id: 'mtn_momo', group: 3, val: 15, name: 'MTN MoMo', color: '#7000ff', img: '/assets/new-mtn-logo.jpg' }, // Purple
      { id: 'airtel_money', group: 3, val: 12, name: 'Airtel Money', color: '#7000ff', img: '/assets/airtel.png' },
      { id: 'rswitch', group: 4, val: 8, name: 'RSwitch', color: '#ff003c', img: '/assets/logo-dark.98ecfedb2da063a40260.webp' }, // Red
      { id: 'visa_gateway', group: 4, val: 8, name: 'Visa Gateway', color: '#ff003c', img: '/assets/download.png' },
    ];

    const links: GraphLink[] = [
      { source: 'central_bank', target: 'bank_kigali', value: 5 },
      { source: 'central_bank', target: 'equity_bank', value: 5 },
      { source: 'central_bank', target: 'im_bank', value: 5 },
      { source: 'rswitch', target: 'bank_kigali', value: 3 },
      { source: 'rswitch', target: 'mtn_momo', value: 4 },
      { source: 'rswitch', target: 'airtel_money', value: 3 },
      { source: 'mtn_momo', target: 'bank_kigali', value: 2 },
      { source: 'airtel_money', target: 'equity_bank', value: 2 },
      { source: 'visa_gateway', target: 'im_bank', value: 3 },
      { source: 'bank_kigali', target: 'equity_bank', value: 1 },
      { source: 'mtn_momo', target: 'airtel_money', value: 1 },
    ];

    return { nodes, links };
  }, []);

  // Handle resize
  useEffect(() => {
    if (!containerRef) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        });
      }
    });

    resizeObserver.observe(containerRef);
    return () => resizeObserver.disconnect();
  }, [containerRef]);

  // Auto-rotate camera
  useEffect(() => {
    const fg = fgRef.current;
    if (!fg || !isAutoRotating) return;

    const interval = setInterval(() => {
      // Check if fg is still valid
      if (!fg) return;
      
      angleRef.current += 0.003;
      const dist = 200;
      fg.cameraPosition({
        x: dist * Math.sin(angleRef.current),
        z: dist * Math.cos(angleRef.current)
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const handleZoomIn = useCallback(() => {
    setIsAutoRotating(false);
    const fg = fgRef.current;
    if (!fg) return;
    const currentPos = fg.cameraPosition();
    if (!currentPos || typeof currentPos.x === 'undefined') return;
    
    fg.cameraPosition(
      { x: currentPos.x * 0.8, y: currentPos.y * 0.8, z: currentPos.z * 0.8 },
      { x: 0, y: 0, z: 0 },
      1000
    );
  }, []);

  const handleZoomOut = useCallback(() => {
    setIsAutoRotating(false);
    const fg = fgRef.current;
    if (!fg) return;
    const currentPos = fg.cameraPosition();
    if (!currentPos || typeof currentPos.x === 'undefined') return;

    fg.cameraPosition(
      { x: currentPos.x * 1.2, y: currentPos.y * 1.2, z: currentPos.z * 1.2 },
      { x: 0, y: 0, z: 0 },
      1000
    );
  }, []);

  const handleReset = useCallback(() => {
    const fg = fgRef.current;
    if (!fg) return;
    fg.zoomToFit(1000, 50);
    setIsAutoRotating(true);
  }, []);

  return (
    <div 
      ref={setContainerRef} 
      className="w-full h-[500px] bg-black/40 border border-white/10 rounded-xl overflow-hidden relative group"
      onMouseDown={() => setIsAutoRotating(false)}
      onTouchStart={() => setIsAutoRotating(false)}
    >
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
          Live Transaction Flow
        </h3>
        <p className="text-xs text-gray-400">Real-time inter-bank settlements</p>
      </div>

      {/* Controls */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={handleZoomIn}
          className="p-2 bg-black/60 hover:bg-white/10 text-white rounded-lg backdrop-blur-md border border-white/10 transition-colors"
          title="Zoom In"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button 
          onClick={handleZoomOut}
          className="p-2 bg-black/60 hover:bg-white/10 text-white rounded-lg backdrop-blur-md border border-white/10 transition-colors"
          title="Zoom Out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button 
          onClick={() => setIsAutoRotating(!isAutoRotating)}
          className="p-2 bg-black/60 hover:bg-white/10 text-white rounded-lg backdrop-blur-md border border-white/10 transition-colors"
          title={isAutoRotating ? "Pause Rotation" : "Resume Rotation"}
        >
          {isAutoRotating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        <button 
          onClick={handleReset}
          className="p-2 bg-black/60 hover:bg-white/10 text-white rounded-lg backdrop-blur-md border border-white/10 transition-colors"
          title="Reset View"
        >
          <Maximize className="w-4 h-4" />
        </button>
      </div>

      <ForceGraph3D
        ref={fgRef}
        width={dimensions.width}
        height={dimensions.height}
        graphData={data}
        nodeLabel="name"
        nodeColor="color"
        nodeVal="val"
        
        // Link styling
        linkDirectionalParticles={4}
        linkDirectionalParticleSpeed={(d: any) => d && d.value ? d.value * 0.001 : 0.001}
        linkDirectionalParticleWidth={2}
        linkDirectionalParticleColor={() => '#ffffff'}
        linkColor={() => 'rgba(255,255,255,0.2)'}
        linkWidth={1}
        
        // Node styling
        nodeThreeObject={(node: any) => {
          if (!node) return new THREE.Object3D();
          const group = new THREE.Group();
          
          const color = node.color || '#ffffff';
          const scale = (node.val || 10) * 0.2;

          // Materials
          const buildingMaterial = new THREE.MeshPhongMaterial({ 
            color: color,
            transparent: true,
            opacity: 0.9,
            shininess: 60
          });

          const whiteMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.95,
            shininess: 80
          });

          // 1. Base (Steps)
          const baseGeom1 = new THREE.BoxGeometry(14 * scale, 1 * scale, 12 * scale);
          const base1 = new THREE.Mesh(baseGeom1, buildingMaterial);
          base1.position.y = -4.5 * scale;
          group.add(base1);

          const baseGeom2 = new THREE.BoxGeometry(12 * scale, 1 * scale, 10 * scale);
          const base2 = new THREE.Mesh(baseGeom2, whiteMaterial);
          base2.position.y = -3.5 * scale;
          group.add(base2);

          // 2. Main Building Body (Core)
          const bodyGeom = new THREE.BoxGeometry(8 * scale, 6 * scale, 6 * scale);
          const body = new THREE.Mesh(bodyGeom, buildingMaterial);
          body.position.y = 0;
          group.add(body);

          // 3. Pillars
          const pillarGeom = new THREE.CylinderGeometry(0.6 * scale, 0.6 * scale, 6 * scale, 16);
          const pillarPositions = [
            [-4.5, 0, 3.5], [0, 0, 3.5], [4.5, 0, 3.5], // Front
            [-4.5, 0, -3.5], [0, 0, -3.5], [4.5, 0, -3.5], // Back
            [-4.5, 0, 0], [4.5, 0, 0] // Sides
          ];
          
          pillarPositions.forEach(pos => {
            const pillar = new THREE.Mesh(pillarGeom, whiteMaterial);
            pillar.position.set(pos[0] * scale, pos[1] * scale, pos[2] * scale);
            group.add(pillar);
          });

          // 4. Roof
          const roofGeom1 = new THREE.BoxGeometry(12 * scale, 1 * scale, 10 * scale);
          const roof1 = new THREE.Mesh(roofGeom1, whiteMaterial);
          roof1.position.y = 3.5 * scale;
          group.add(roof1);

          const roofGeom2 = new THREE.BoxGeometry(14 * scale, 1.5 * scale, 12 * scale);
          const roof2 = new THREE.Mesh(roofGeom2, buildingMaterial);
          roof2.position.y = 4.75 * scale;
          group.add(roof2);

          // 5. Logo / Signage
          if (node.img) {
            const imgTexture = new THREE.TextureLoader().load(node.img);
            imgTexture.colorSpace = THREE.SRGBColorSpace;
            
            // Create a billboard on top of the roof
            const spriteMaterial = new THREE.SpriteMaterial({ map: imgTexture });
            const sprite = new THREE.Sprite(spriteMaterial);
            sprite.scale.set(8 * scale, 8 * scale, 1);
            sprite.position.y = 10 * scale; // Above the roof
            group.add(sprite);

            // Add a white backing for the logo so it pops
            const backingGeom = new THREE.BoxGeometry(8.5 * scale, 8.5 * scale, 0.5 * scale);
            const backingMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
            const backing = new THREE.Mesh(backingGeom, backingMat);
            backing.position.y = 10 * scale;
            backing.position.z = -0.1 * scale;
            group.add(backing);
          } else {
            // Fallback if no image
            const sphereGeom = new THREE.SphereGeometry(4 * scale, 32, 32);
            const sphereMat = new THREE.MeshBasicMaterial({ color: color });
            const sphere = new THREE.Mesh(sphereGeom, sphereMat);
            sphere.position.y = 10 * scale;
            group.add(sphere);
          }

          // 6. Glow effect (outer sphere)
          const glowGeometry = new THREE.SphereGeometry(16 * scale, 32, 32);
          const glowMaterial = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.1,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending
          });
          const glow = new THREE.Mesh(glowGeometry, glowMaterial);
          group.add(glow);

          return group;
        }}
        
        backgroundColor="rgba(0,0,0,0)"
        showNavInfo={false}
        onNodeDragEnd={node => {
          if (node) {
            node.fx = node.x;
            node.fy = node.y;
            node.fz = node.z;
          }
        }}
        controlType="orbit"
      />
    </div>
  );
}
