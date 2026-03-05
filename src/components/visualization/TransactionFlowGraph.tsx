import { useRef, useMemo, useEffect, useState } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import * as THREE from 'three';

// Define types for our graph data
interface GraphNode {
  id: string;
  group: number;
  val: number;
  name: string;
  color?: string;
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

  // Generate mock data for the financial ecosystem
  const data: GraphData = useMemo(() => {
    const nodes: GraphNode[] = [
      { id: 'central_bank', group: 1, val: 20, name: 'Central Bank', color: '#ffd700' }, // Gold
      { id: 'bank_kigali', group: 2, val: 10, name: 'Bank of Kigali', color: '#00f0ff' }, // Cyan
      { id: 'equity_bank', group: 2, val: 10, name: 'Equity Bank', color: '#00f0ff' },
      { id: 'im_bank', group: 2, val: 10, name: 'I&M Bank', color: '#00f0ff' },
      { id: 'mtn_momo', group: 3, val: 15, name: 'MTN MoMo', color: '#7000ff' }, // Purple
      { id: 'airtel_money', group: 3, val: 12, name: 'Airtel Money', color: '#7000ff' },
      { id: 'rswitch', group: 4, val: 8, name: 'RSwitch', color: '#ff003c' }, // Red
      { id: 'visa_gateway', group: 4, val: 8, name: 'Visa Gateway', color: '#ff003c' },
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
    if (!fg) return;

    let angle = 0;
    const interval = setInterval(() => {
      angle += 0.003;
      fg.cameraPosition({
        x: 200 * Math.sin(angle),
        z: 200 * Math.cos(angle)
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={setContainerRef} 
      className="w-full h-[500px] bg-black/40 border border-white/10 rounded-xl overflow-hidden relative"
    >
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
          Live Transaction Flow
        </h3>
        <p className="text-xs text-gray-400">Real-time inter-bank settlements</p>
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
        linkDirectionalParticleSpeed={(d: any) => d.value * 0.001}
        linkDirectionalParticleWidth={2}
        linkDirectionalParticleColor={() => '#ffffff'}
        linkColor={() => 'rgba(255,255,255,0.2)'}
        linkWidth={1}
        
        // Node styling
        nodeThreeObject={(node: any) => {
          const group = new THREE.Group();
          
          // Main sphere
          const geometry = new THREE.SphereGeometry(node.val, 32, 32);
          const material = new THREE.MeshLambertMaterial({ 
            color: node.color,
            transparent: true,
            opacity: 0.8
          });
          const sphere = new THREE.Mesh(geometry, material);
          group.add(sphere);

          // Glow effect (outer sphere)
          const glowGeometry = new THREE.SphereGeometry(node.val * 1.2, 32, 32);
          const glowMaterial = new THREE.MeshBasicMaterial({
            color: node.color,
            transparent: true,
            opacity: 0.15,
            side: THREE.BackSide
          });
          const glow = new THREE.Mesh(glowGeometry, glowMaterial);
          group.add(glow);

          return group;
        }}
        
        backgroundColor="rgba(0,0,0,0)"
        showNavInfo={false}
      />
    </div>
  );
}
