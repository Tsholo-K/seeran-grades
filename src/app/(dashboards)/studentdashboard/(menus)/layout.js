export default function ParentMenuLayout({ children }) {
  return (
    <>
        {/* body */}
        <div className="min-h-screen pt-32 lg:pt-40 pb-16">
            {children}
        </div>
    </>
  );
}