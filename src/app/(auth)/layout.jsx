export default function authLayout({ children }) {
  return (
    <>
      <div className="flex items-center justify-center mx-auto min-h-dvh">
        {children}
      </div>
    </>
  );
}
