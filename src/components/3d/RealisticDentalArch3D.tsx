"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Eye, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/i18n/IntlProviderWrapper";

export type DentalViewMode = "porcelain" | "aligner" | "gold";

export function RealisticDentalArch3D() {
  const { isRtl } = useLanguage();
  const mountRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeMode, setActiveMode] = useState<DentalViewMode>("porcelain");
  const [isHovered, setIsHovered] = useState(false);

  // References for live 3D animation manipulation
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const archGroupRef = useRef<THREE.Group | null>(null);
  const alignerGroupRef = useRef<THREE.Group | null>(null);
  const goldMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const porcelainMaterialRef = useRef<THREE.MeshPhysicalMaterial | null>(null);
  const teethMeshesRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!mountRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    // 1. Scene, Camera, Renderer
    const width = mountRef.current.clientWidth || 460;
    const height = mountRef.current.clientHeight || 460;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.8, 6.2);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 2. Studio Lighting (Simulating a Luxury Dental Aesthetic Clinic)
    const ambientLight = new THREE.AmbientLight(0xfff8f0, 1.2);
    scene.add(ambientLight);

    // Key Light (Crisp clinical surgical LED)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
    keyLight.position.set(4, 6, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    // Fill Light (Soft Royal Sapphire from bottom-left for depth)
    const fillLight = new THREE.DirectionalLight(0x022256, 1.0);
    fillLight.position.set(-5, -2, 3);
    scene.add(fillLight);

    // Rim Light (24K Gold glancing specular reflection off incisal edges)
    const goldRimLight = new THREE.DirectionalLight(0xdfbf57, 2.2);
    goldRimLight.position.set(0, 5, -4);
    scene.add(goldRimLight);

    // 3. Materials
    // A. Ultra-Realistic E-Max Dental Porcelain (Natural Enamel with Translucency & Clearcoat)
    const porcelainMat = new THREE.MeshPhysicalMaterial({
      color: 0xfbf9f5,
      emissive: 0x050402,
      roughness: 0.12,
      metalness: 0.02,
      clearcoat: 1.0,
      clearcoatRoughness: 0.04,
      transmission: 0.14, // Realistic enamel translucency
      ior: 1.54, // Index of refraction of natural dental enamel & zirconia
      reflectivity: 0.9,
    });
    porcelainMaterialRef.current = porcelainMat;

    // B. 24K Royal Gold Enamel
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xc8a232,
      roughness: 0.18,
      metalness: 0.92,
    });
    goldMaterialRef.current = goldMat;

    // C. Anatomical Gingiva (Healthy Dental Gum Pink)
    const gumMat = new THREE.MeshPhysicalMaterial({
      color: 0xd96f7c,
      roughness: 0.38,
      metalness: 0.04,
      clearcoat: 0.6,
      clearcoatRoughness: 0.15,
    });

    // D. Clear Aligner (Crystalline Translucent Medical Polymer)
    const alignerMat = new THREE.MeshPhysicalMaterial({
      color: 0xe8f4ff,
      roughness: 0.06,
      metalness: 0.05,
      transmission: 0.94,
      opacity: 0.85,
      transparent: true,
      ior: 1.49,
      reflectivity: 0.95,
      thickness: 0.4,
    });

    // 4. Constructing the Anatomical Dental Arch
    const masterArchGroup = new THREE.Group();
    archGroupRef.current = masterArchGroup;
    scene.add(masterArchGroup);

    const teethMeshes: THREE.Mesh[] = [];

    // Parametric Dental Arch: 14 teeth following a parabolic smile arc (y = a * x^2)
    // 0: Central Incisors (x ≈ ±0.22)
    // 1: Lateral Incisors (x ≈ ±0.58)
    // 2: Canines (x ≈ ±0.98)
    // 3: 1st Premolars (x ≈ ±1.35)
    // 4: 2nd Premolars (x ≈ ±1.70)
    // 5: 1st Molars (x ≈ ±2.05)
    // 6: 2nd Molars (x ≈ ±2.38)
    const teethData = [
      { id: "central", x: 0.22, width: 0.38, height: 0.68, depth: 0.32, type: "incisor" },
      { id: "lateral", x: 0.58, width: 0.32, height: 0.62, depth: 0.30, type: "incisor" },
      { id: "canine", x: 0.98, width: 0.36, height: 0.72, depth: 0.38, type: "canine" },
      { id: "premolar1", x: 1.36, width: 0.38, height: 0.56, depth: 0.42, type: "premolar" },
      { id: "premolar2", x: 1.72, width: 0.40, height: 0.54, depth: 0.46, type: "premolar" },
      { id: "molar1", x: 2.08, width: 0.48, height: 0.50, depth: 0.54, type: "molar" },
      { id: "molar2", x: 2.44, width: 0.46, height: 0.48, depth: 0.52, type: "molar" },
    ];

    const aParam = 0.38; // Curvature factor of the arch

    // Generate both left and right sides (+x and -x)
    [-1, 1].forEach((side) => {
      teethData.forEach((t) => {
        const posX = t.x * side;
        // Parabolic depth: z = -a * x^2
        const posZ = -aParam * Math.pow(t.x, 2) + 0.4;
        // Tangent angle
        const slope = -2 * aParam * t.x;
        const angleY = Math.atan(slope) * side;

        let toothGeo: THREE.BufferGeometry;

        if (t.type === "incisor") {
          // Flat anatomical crown with soft rounded edges
          toothGeo = new THREE.BoxGeometry(t.width, t.height, t.depth, 3, 3, 3);
        } else if (t.type === "canine") {
          // Pointed aesthetic cusp
          toothGeo = new THREE.CylinderGeometry(t.width * 0.35, t.width * 0.65, t.height, 12);
        } else {
          // Premolars and molars with occlusal chewing surface
          toothGeo = new THREE.CylinderGeometry(t.width * 0.65, t.width * 0.6, t.height, 14);
        }

        const toothMesh = new THREE.Mesh(toothGeo, porcelainMat);
        toothMesh.position.set(posX, 0, posZ);
        toothMesh.rotation.y = angleY;
        // Slight natural vertical tilt
        toothMesh.rotation.x = 0.08;
        toothMesh.castShadow = true;
        toothMesh.receiveShadow = true;

        masterArchGroup.add(toothMesh);
        teethMeshes.push(toothMesh);
      });
    });

    teethMeshesRef.current = teethMeshes;

    // 5. Anatomical Gum Arch Base (Gingival tissue holding the teeth)
    const gumCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.6, 0.28, -2.2),
      new THREE.Vector3(-1.9, 0.28, -1.1),
      new THREE.Vector3(-1.1, 0.30, -0.2),
      new THREE.Vector3(0, 0.32, 0.45),
      new THREE.Vector3(1.1, 0.30, -0.2),
      new THREE.Vector3(1.9, 0.28, -1.1),
      new THREE.Vector3(2.6, 0.28, -2.2),
    ]);
    const gumGeo = new THREE.TubeGeometry(gumCurve, 40, 0.28, 12, false);
    const gumMesh = new THREE.Mesh(gumGeo, gumMat);
    gumMesh.position.set(0, 0.05, 0);
    gumMesh.castShadow = true;
    masterArchGroup.add(gumMesh);

    // 6. Clear Aligner Overlay (Optional protective transparent tray)
    const alignerGroup = new THREE.Group();
    alignerGroupRef.current = alignerGroup;
    alignerGroup.visible = false; // toggled by button

    const alignerTubeGeo = new THREE.TubeGeometry(gumCurve, 40, 0.38, 14, false);
    const alignerMesh = new THREE.Mesh(alignerTubeGeo, alignerMat);
    alignerMesh.position.set(0, 0, 0.02);
    alignerGroup.add(alignerMesh);
    masterArchGroup.add(alignerGroup);

    // 7. Crystal Pedestal Base with 24K Gold Ring
    const baseGroup = new THREE.Group();
    baseGroup.position.set(0, -0.55, -0.6);

    const ringGeo = new THREE.TorusGeometry(2.2, 0.03, 16, 64);
    const ringMesh = new THREE.Mesh(ringGeo, goldMat);
    ringMesh.rotation.x = Math.PI / 2;
    baseGroup.add(ringMesh);

    const plateGeo = new THREE.CylinderGeometry(2.1, 2.2, 0.08, 48);
    const plateMat = new THREE.MeshPhysicalMaterial({
      color: 0x022256,
      roughness: 0.1,
      metalness: 0.2,
      clearcoat: 1.0,
      transmission: 0.5,
      transparent: true,
      opacity: 0.7,
    });
    const plateMesh = new THREE.Mesh(plateGeo, plateMat);
    baseGroup.add(plateMesh);

    masterArchGroup.add(baseGroup);

    // Center and default resting tilt
    masterArchGroup.position.set(0, 0.1, 0);
    masterArchGroup.rotation.set(0.38, 0, 0);

    // 8. GSAP ScrollTrigger Choreography:
    // As the user scrolls from the Hero section past the clip-path, the 3D Dental Arch DESCENDS
    // seamlessly into the Welcome section, rotating into view!
    if (containerRef.current) {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#home",
          start: "center top",
          endTrigger: containerRef.current,
          end: "top 40%",
          scrub: 1.0,
        },
      });

      scrollTl
        // Descent from high hero plane down to natural eye level
        .fromTo(
          masterArchGroup.position,
          { y: 3.2, z: -1.5 },
          { y: 0.1, z: 0, ease: "power2.out", duration: 1 },
          0
        )
        // Rotation transition from top-down biting plane to direct aesthetic smile angle
        .fromTo(
          masterArchGroup.rotation,
          { x: 0.85, y: isRtl ? -0.45 : 0.45 },
          { x: 0.35, y: isRtl ? 0.15 : -0.15, ease: "power1.inOut", duration: 1 },
          0
        );
    }

    // 9. Interactive Mouse / Touch Orbit Tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0.35;
    let targetRotationY = isRtl ? 0.15 : -0.15;

    const handleMouseMove = (e: MouseEvent) => {
      if (!mountRef.current) return;
      const rect = mountRef.current.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotationY = mouseX * 0.65;
      targetRotationX = 0.35 - mouseY * 0.45;
    };

    const mountEl = mountRef.current;
    mountEl.addEventListener("mousemove", handleMouseMove);

    // 10. Continuous 60fps RAF Loop with Gentle Inertial Floating
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (masterArchGroup) {
        // Subtle organic breathing float
        masterArchGroup.position.y += Math.sin(elapsedTime * 1.5) * 0.0008;

        // Smooth inertial dampening toward mouse target
        masterArchGroup.rotation.y += (targetRotationY - masterArchGroup.rotation.y) * 0.05;
        masterArchGroup.rotation.x += (targetRotationX - masterArchGroup.rotation.x) * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 11. Responsive Resize
    const handleResize = () => {
      if (!mountRef.current || !renderer || !camera) return;
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (mountEl) {
        mountEl.removeEventListener("mousemove", handleMouseMove);
        if (renderer.domElement && mountEl.contains(renderer.domElement)) {
          mountEl.removeChild(renderer.domElement);
        }
      }
      renderer.dispose();
    };
  }, [isRtl]);

  // Mode Switcher Handler
  const handleModeChange = (mode: DentalViewMode) => {
    setActiveMode(mode);

    if (mode === "aligner") {
      if (alignerGroupRef.current) alignerGroupRef.current.visible = true;
      teethMeshesRef.current.forEach((mesh) => {
        mesh.material = porcelainMaterialRef.current!;
      });
    } else if (mode === "gold") {
      if (alignerGroupRef.current) alignerGroupRef.current.visible = false;
      teethMeshesRef.current.forEach((mesh) => {
        mesh.material = goldMaterialRef.current!;
      });
    } else {
      // Porcelain
      if (alignerGroupRef.current) alignerGroupRef.current.visible = false;
      teethMeshesRef.current.forEach((mesh) => {
        mesh.material = porcelainMaterialRef.current!;
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-lg mx-auto flex flex-col items-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D WebGL Canvas Viewport */}
      <div className="relative w-full aspect-square max-w-[440px] sm:max-w-[460px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#F5EEDB]/40 via-white/80 to-[#FAF8F5]/90 border border-[#C8A232]/35 shadow-[0_20px_60px_rgba(2,34,86,0.08)] flex items-center justify-center backdrop-blur-md">
        
        {/* Soft Ambient Radial Glow */}
        <div className="absolute inset-0 bg-radial from-[#C8A232]/12 via-transparent to-transparent pointer-events-none" />

        {/* 3D Mounting Canvas */}
        <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

        {/* Micro-Metrics floating overlays */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#C8A232]/30 text-[11px] font-mono font-bold text-[#955904] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#DFBF57] animate-ping" />
            <span>3D DENTAL SCAN • 0.01mm</span>
          </div>

          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#022256]/85 text-white text-[10px] font-mono shadow-sm">
            <Eye className="w-3 h-3 text-[#DFBF57]" />
            <span>{isHovered ? (isRtl ? "تفاعل حر" : "Interactive") : (isRtl ? "حرّك الفأرة" : "Move mouse")}</span>
          </div>
        </div>

        {/* Bottom Clinical Pedestal Badge */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none">
          <div className="px-4 py-1.5 rounded-full bg-white/95 border border-[#C8A232]/40 shadow-md text-xs font-bold font-display text-[#012968] flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#955904]" />
            <span>
              {activeMode === "porcelain"
                ? isRtl ? "طقم البورسلين الملكي (E-Max Ceramic)" : "Royal Porcelain Arch (E-Max)"
                : activeMode === "aligner"
                ? isRtl ? "التقويم الشفاف الذكي (Magnificent Clear)" : "Smart Clear Aligner 3D"
                : isRtl ? "الذهب الملكي الخالص 24K" : "24K Royal Gold Enamel"}
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Mode Pills Switcher */}
      <div className="mt-5 flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-[#C8A232]/30 shadow-sm">
        <button
          type="button"
          onClick={() => handleModeChange("porcelain")}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeMode === "porcelain"
              ? "bg-[#012968] text-white shadow-md scale-105"
              : "text-[#5B6782] hover:text-[#012968]"
          }`}
        >
          {isRtl ? "بورسلين E-Max" : "Porcelain"}
        </button>

        <button
          type="button"
          onClick={() => handleModeChange("aligner")}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeMode === "aligner"
              ? "bg-gradient-to-r from-[#955904] to-[#C8A232] text-white shadow-md scale-105"
              : "text-[#5B6782] hover:text-[#955904]"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isRtl ? "تقويم شفاف" : "Clear Aligner"}</span>
        </button>

        <button
          type="button"
          onClick={() => handleModeChange("gold")}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeMode === "gold"
              ? "bg-[#C8A232] text-white shadow-md scale-105"
              : "text-[#5B6782] hover:text-[#C8A232]"
          }`}
        >
          {isRtl ? "ذهب 24K" : "24K Gold"}
        </button>
      </div>
    </div>
  );
}
