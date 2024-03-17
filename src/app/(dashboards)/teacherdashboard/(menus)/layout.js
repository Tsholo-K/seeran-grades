export default function ParentMenuLayout({ children }) {
  return (
    <>
        {/* body */}
        <div className="pt-16 lg:pt-20 pb-5 min-h-screen">
            {children}
        </div>
    </>
  );
}