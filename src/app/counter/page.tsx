import CounterComponent from "@/components/counter/CounterComponent";
import CounterResult from "@/components/counter/CounterResult";

export default function CounterPage() {
  return (
    <main>
        <div className="min-h-screen flex flex-col justify-center items-center gap-6">
        <CounterResult />
        <CounterComponent />
        </div>
    </main>
  );
}
