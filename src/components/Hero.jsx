import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero({ onModelReady }) {
  const canvasRef = useRef(null)
  const sceneRef = useRef(null)
  const brushRef = useRef(null)
  const rendererRef = useRef(null)
  const cameraRef = useRef(null)

  useEffect(() => {
    const sizes = { width: window.innerWidth, height: window.innerHeight }

    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
    camera.position.set(0, 0, 6)
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: canvasRef.current })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    rendererRef.current = renderer

    // Lighting for premium glossy look
    const ambient = new THREE.AmbientLight(0xffffff, 0.7)
    scene.add(ambient)

    const dir1 = new THREE.DirectionalLight(0xe6fbff, 1.0)
    dir1.position.set(3, 5, 4)
    scene.add(dir1)

    const dir2 = new THREE.DirectionalLight(0xa5fff7, 0.6)
    dir2.position.set(-4, -2, 2)
    scene.add(dir2)

    // Simple placeholder toothbrush geometry (stylized) so page works without external model
    // Later can be replaced by GLTF import
    const handleGeo = new THREE.CapsuleGeometry(0.18, 2.6, 16, 32)
    const handleMat = new THREE.MeshPhysicalMaterial({
      color: 0xf0f9ff,
      metalness: 0.1,
      roughness: 0.2,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
      sheen: 0.2,
      sheenRoughness: 0.3
    })
    const handle = new THREE.Mesh(handleGeo, handleMat)

    const headGeo = new THREE.BoxGeometry(0.35, 0.7, 0.9)
    const headMat = new THREE.MeshPhysicalMaterial({ color: 0xe6fffb, roughness: 0.25, metalness: 0.15 })
    const head = new THREE.Mesh(headGeo, headMat)
    head.position.set(0, 1.9, 0)

    const bristleGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.25, 16)
    const bristleMat = new THREE.MeshStandardMaterial({ color: 0x67e8f9, emissive: 0x003a43, emissiveIntensity: 0.15 })
    const bristles = new THREE.Group()
    for (let i = -3; i <= 3; i++) {
      for (let j = -5; j <= 5; j++) {
        const b = new THREE.Mesh(bristleGeo, bristleMat)
        b.position.set(i * 0.05, 2.2, j * 0.05)
        bristles.add(b)
      }
    }

    const brush = new THREE.Group()
    brush.add(handle)
    brush.add(head)
    brush.add(bristles)
    brushRef.current = brush
    scene.add(brush)

    // Subtle floating animation
    gsap.to(brush.rotation, { x: 0.08, y: 0.2, duration: 2, yoyo: true, repeat: -1, ease: 'sine.inOut' })
    gsap.to(brush.position, { y: "+=0.1", duration: 2.2, yoyo: true, repeat: -1, ease: 'sine.inOut' })

    // Scroll controlled rotation
    gsap.to(brush.rotation, {
      x: 0.6,
      y: Math.PI * 2,
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: '+=1200',
        scrub: 1.2
      }
    })

    // Responsive
    const onResize = () => {
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
    window.addEventListener('resize', onResize)

    const animate = () => {
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    animate()

    onModelReady?.({ scene, brush })

    return () => {
      window.removeEventListener('resize', onResize)
      renderer.dispose()
    }
  }, [onModelReady])

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10 h-full grid md:grid-cols-2 grid-cols-1">
        <div className="flex flex-col justify-center px-6 md:px-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/40 bg-white/30 backdrop-blur px-3 py-1 text-xs text-cyan-900 mb-4">
              Premium care • Hygiënisch • High‑tech
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Elke maand een frisse borstel
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Vanaf €9,90 per maand. Slimmer poetsen, automatisch geleverd.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#pricing" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition transform hover:-translate-y-0.5">
                Start je abonnement
              </a>
              <a href="#how" className="px-6 py-3 rounded-xl border border-cyan-300/50 text-cyan-800 bg-white/70 backdrop-blur hover:bg-white">
                Hoe werkt het?
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          {/* Glow plate */}
          <div className="absolute -z-0 left-1/2 -translate-x-1/2 top-1/3 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-cyan-200/40 blur-3xl rounded-full" />
        </div>
      </div>
    </div>
  )
}
