export default function Balance({ totalBalance }) {
  return (
    <>
      <div className="text-center text-3xl font-semibold mb-8">
        Current Balance: €{totalBalance}
      </div>
    </>
  );
}
