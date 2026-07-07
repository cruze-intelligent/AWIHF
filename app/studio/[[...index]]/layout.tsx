export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-[2147483647] h-dvh w-dvw overflow-hidden bg-white text-black">
      {children}
    </div>
  );
}
