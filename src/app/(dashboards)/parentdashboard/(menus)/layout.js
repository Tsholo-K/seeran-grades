export default function ParentMenuLayout({ children }) {
  return (
    <>
        {/* body */}
        <div className="pt-16 lg:pt-32 lg:pl-3 lg:pr-4 pb-16">
            {children}
        </div>
    </>
  );
}