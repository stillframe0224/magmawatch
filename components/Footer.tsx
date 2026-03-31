export default function Footer() {
  return (
    <footer className="py-12">
      <div className="section-divider mb-8" />

      <p
        className="font-mono text-[11px] text-center mb-8"
        style={{ color: "rgba(255,255,255,0.15)" }}
      >
        Next surfaces: ロシア圏 / 中国語圏
      </p>

      <div className="flex items-center justify-between">
        <p
          className="font-mono"
          style={{ fontSize: "10px", color: "rgba(255,255,255,0.1)" }}
        >
          MagmaWatch — StillFrame Research
        </p>
        <p
          className="font-mono"
          style={{ fontSize: "10px", color: "rgba(255,255,255,0.1)" }}
        >
          2026
        </p>
      </div>
    </footer>
  );
}
