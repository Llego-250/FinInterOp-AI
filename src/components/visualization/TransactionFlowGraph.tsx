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
  x?: number;
  y?: number;
  z?: number;
  fx?: number;
  fy?: number;
  fz?: number;
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

// Generate realistic dynamic text plates for the buildings
const textureCache = new Map<string, THREE.CanvasTexture>();

function getBankNameTexture(name: string, color: string): THREE.CanvasTexture | null {
  const key = `${name}-${color}`;
  if (textureCache.has(key)) return textureCache.get(key)!;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  // Obsidian dark plate background
  ctx.fillStyle = '#050505';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Futuristic glowing neon rim
  ctx.strokeStyle = color;
  ctx.lineWidth = 16;
  ctx.strokeRect(8, 8, canvas.width - 16, canvas.height - 16);

  // Text setup
  ctx.font = 'bold 96px "Inter", "Arial", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Neon glow on text
  ctx.shadowColor = color;
  ctx.shadowBlur = 25;
  ctx.fillStyle = '#ffffff';

  ctx.fillText(name.toUpperCase(), canvas.width / 2, canvas.height / 2 + 8);

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16;
  
  if ('colorSpace' in texture) {
    (texture as any).colorSpace = THREE.SRGBColorSpace;
  }

  textureCache.set(key, texture);
  return texture;
}

export function TransactionFlowGraph() {
  const fgRef = useRef<any>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const angleRef = useRef(0);

  // Generate mock data for the financial ecosystem
  const data: GraphData = useMemo(() => {
    const nodes: GraphNode[] = [
      { id: 'central_bank', group: 1, val: 20, name: 'Central Bank', color: '#ffd700', img: '/assets/logo-dark-1.png' },
      { id: 'bank_kigali', group: 2, val: 10, name: 'Bank of Kigali', color: '#00f0ff', img: '/assets/images.png' },
      { id: 'equity_bank', group: 2, val: 10, name: 'Equity Bank', color: '#00f0ff', img: '/assets/download.jpg' },
      { id: 'im_bank', group: 2, val: 10, name: 'I&M Bank', color: '#00f0ff', img: '/assets/im-logo.png' },
      { id: 'mtn_momo', group: 3, val: 15, name: 'MTN MoMo', color: '#7000ff', img: '/assets/new-mtn-logo.jpg' },
      { id: 'airtel_money', group: 3, val: 12, name: 'Airtel Money', color: '#7000ff', img: '/assets/airtel.png' },
      { id: 'rswitch', group: 4, val: 8, name: 'RSwitch', color: '#ff003c', img: '/assets/logo-dark.98ecfedb2da063a40260.webp' },
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
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
          setDimensions({
            width: entry.contentRect.width,
            height: entry.contentRect.height
          });
        }
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  // Auto-rotate camera
  useEffect(() => {
    const fg = fgRef.current;
    if (!fg || !isAutoRotating) return;

    const interval = setInterval(() => {
      try {
        if (!fg || typeof fg.cameraPosition !== 'function') return;
        const currentPos = fg.cameraPosition();
        if (!currentPos || currentPos.x === undefined || currentPos.y === undefined || currentPos.z === undefined) return;

        angleRef.current += 0.003;
        const dist = 300; 
        fg.cameraPosition(
          {
            x: dist * Math.sin(angleRef.current),
            y: currentPos.y,
            z: dist * Math.cos(angleRef.current)
          },
          { x: 0, y: 0, z: 0 } 
        );
      } catch (e) {
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const handleZoomIn = useCallback(() => {
    setIsAutoRotating(false);
    const fg = fgRef.current;
    if (!fg) return;
    try {
      const currentPos = fg.cameraPosition();
      if (!currentPos || currentPos.x === undefined) return;
      
      fg.cameraPosition(
        { x: currentPos.x * 0.8, y: currentPos.y * 0.8, z: currentPos.z * 0.8 },
        { x: 0, y: 0, z: 0 },
        1000
      );
    } catch(e) {}
  }, []);

  const handleZoomOut = useCallback(() => {
    setIsAutoRotating(false);
    const fg = fgRef.current;
    if (!fg) return;
    try {
      const currentPos = fg.cameraPosition();
      if (!currentPos || currentPos.x === undefined) return;

      fg.cameraPosition(
        { x: currentPos.x * 1.2, y: currentPos.y * 1.2, z: currentPos.z * 1.2 },
        { x: 0, y: 0, z: 0 },
        1000
      );
    } catch(e) {}
  }, []);

  const handleReset = useCallback(() => {
    const fg = fgRef.current;
    if (!fg) return;
    try {
      fg.zoomToFit(1000, 50);
      setIsAutoRotating(true);
    } catch(e) {}
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full relative group"
      onMouseDown={() => setIsAutoRotating(false)}
      onTouchStart={() => setIsAutoRotating(false)}
    >
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

      {(dimensions.width > 0 && dimensions.height > 0) && (
        <ForceGraph3D
          ref={fgRef}
          width={dimensions.width}
          height={dimensions.height}
          graphData={data}
          nodeLabel="name"
          nodeColor="color"
          nodeVal="val"
          
          // Link styling
          linkColor={() => 'rgba(255,255,255,0.4)'}
          linkWidth={1.5}
          
          // Node styling - The Realistic Bank architecture
          nodeThreeObject={(node: any) => {
            if (!node) return new THREE.Object3D();
            const group = new THREE.Group();
            
            const color = node.color || '#ffffff';
            const scale = (node.val || 10) * 0.18; // Dimension offset

            // --- PREMIUM MATERIALS ---
            const stoneMat = new THREE.MeshPhongMaterial({
              color: 0xe5e5e5,
              shininess: 40,
              flatShading: false
            });

            const darkBaseMat = new THREE.MeshPhongMaterial({
              color: 0x111111,
              shininess: 20
            });

            const glassMat = new THREE.MeshPhongMaterial({
              color: 0x050505,
              emissive: 0x1a1a1a,
              shininess: 100,
              transparent: true,
              opacity: 0.95
            });

            const accentMat = new THREE.MeshBasicMaterial({ color: color });

            // 1. ANCIENT/MODERN BASE STEPS
            for(let i=0; i<3; i++) {
              const w = (20 - i*2) * scale;
              const h = 1.2 * scale;
              const geom = new THREE.BoxGeometry(w, h, w * 0.85);
              const mesh = new THREE.Mesh(geom, darkBaseMat);
              mesh.position.y = (-6.5 + i * 1.2) * scale;
              group.add(mesh);
            }

            // 2. INNER GLASS HALL
            const hallGeom = new THREE.BoxGeometry(11 * scale, 12 * scale, 10 * scale);
            const hall = new THREE.Mesh(hallGeom, glassMat);
            hall.position.y = 2.5 * scale;
            group.add(hall);

            // 3. ARCHITECTURE PILLARS 
            // Classic Bank Style Pillars
            const pRadius = 0.8 * scale;
            const pHeight = 12 * scale;
            const pillarGeom = new THREE.CylinderGeometry(pRadius, pRadius, pHeight, 24);
            
            // Front & Back Pillars
            const xOffsets = [-6, -3, 0, 3, 6];
            xOffsets.forEach(x => {
              const pFront = new THREE.Mesh(pillarGeom, stoneMat);
              pFront.position.set(x * scale, 2.5 * scale, 7.5 * scale);
              group.add(pFront);
              
              const pBack = new THREE.Mesh(pillarGeom, stoneMat);
              pBack.position.set(x * scale, 2.5 * scale, -7.5 * scale);
              group.add(pBack);
            });
            
            // Side Pillars
            [-4, 0, 4].forEach(z => {
              const pLeft = new THREE.Mesh(pillarGeom, stoneMat);
              pLeft.position.set(-7.5 * scale, 2.5 * scale, z * scale);
              group.add(pLeft);

              const pRight = new THREE.Mesh(pillarGeom, stoneMat);
              pRight.position.set(7.5 * scale, 2.5 * scale, z * scale);
              group.add(pRight);
            });

            // 4. UPPER FRIEZE (Signage Mount)
            const friezeGeom = new THREE.BoxGeometry(17 * scale, 3.5 * scale, 17 * scale);
            const frieze = new THREE.Mesh(friezeGeom, stoneMat);
            frieze.position.y = 10 * scale;
            group.add(frieze);

            // 5. HD SIGNAGE / TEXT NAME ON WALL
            const textTexture = getBankNameTexture(node.name, color);
            if (textTexture) {
               const boardGeom = new THREE.PlaneGeometry(16 * scale, 3 * scale);
               const boardMat = new THREE.MeshBasicMaterial({ map: textTexture, transparent: true });
               
               // Front sign
               const frontBoard = new THREE.Mesh(boardGeom, boardMat);
               frontBoard.position.set(0, 10 * scale, 8.51 * scale);
               group.add(frontBoard);
               
               // Back sign
               const backBoard = new THREE.Mesh(boardGeom, boardMat);
               backBoard.position.set(0, 10 * scale, -8.51 * scale);
               backBoard.rotation.y = Math.PI;
               group.add(backBoard);
            }

            // 6. ROOF & ILLUMINATED ACCENT RIM
            const roofGeom = new THREE.BoxGeometry(18 * scale, 1 * scale, 18 * scale);
            const roof = new THREE.Mesh(roofGeom, darkBaseMat);
            roof.position.y = 12.25 * scale;
            group.add(roof);

            const rimGeom = new THREE.BoxGeometry(18.5 * scale, 0.4 * scale, 18.5 * scale);
            const rim = new THREE.Mesh(rimGeom, accentMat);
            rim.position.y = 12.95 * scale;
            group.add(rim);

            // 7. HOLOGRAM LOGO (Floating above the building if image exists)
            if (node.img) {
               try {
                 const tex = new THREE.TextureLoader().load(node.img);
                 if ('colorSpace' in tex) (tex as any).colorSpace = THREE.SRGBColorSpace;
                 const spriteMat = new THREE.SpriteMaterial({ map: tex });
                 const sprite = new THREE.Sprite(spriteMat);
                 sprite.scale.set(7 * scale, 7 * scale, 1);
                 sprite.position.y = 17 * scale;
                 group.add(sprite);
               } catch(e) {}
            }

            // 8. DATA FLOW AURA (Base plate glow)
            const auraGeom = new THREE.CylinderGeometry(18 * scale, 18 * scale, 0.2 * scale, 32);
            const auraMat = new THREE.MeshBasicMaterial({
              color: color,
              transparent: true,
              opacity: 0.15,
              blending: THREE.AdditiveBlending
            });
            const aura = new THREE.Mesh(auraGeom, auraMat);
            aura.position.y = -7 * scale;
            group.add(aura);

            return group;
          }}
          
          backgroundColor="rgba(0,0,0,0)"
          showNavInfo={false}
          onNodeDragEnd={node => {
            if (node && typeof node.x === 'number' && typeof node.y === 'number' && typeof node.z === 'number') {
              node.fx = node.x;
              node.fy = node.y;
              node.fz = node.z;
            }
          }}
          controlType="orbit"
        />
      )}
    </div>
  );
}
