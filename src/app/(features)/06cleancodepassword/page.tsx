import BadCodeExamplePage from "./bad-code";
import GoodCodeExamplePage from "./good-code";

export default function CleanCodePassword() {
  return (
    <div className="w-full min-h-screen bg-slate-100 p-6">
      <section className="flex gap-6 container mx-auto">
        <div className="w-full border-2 flex items-center justify-center rounded">
          <BadCodeExamplePage />
        </div>
        <div className=" border-2 rounded w-full flex items-center justify-center">
          <GoodCodeExamplePage />
        </div>
      </section>
    </div>
  )
}
