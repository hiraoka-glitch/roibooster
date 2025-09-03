export default function SectionDivider() {
  return (
    <div className="w-full h-0">
      <svg viewBox="0 0 100 6" preserveAspectRatio="none" className="w-full h-6 block">
        <polygon points="0,0 100,0 50,6" className="fill-brand-500" />
      </svg>
    </div>
  );
}
