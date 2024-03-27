import TotalCard from "./_compontents/TotalCard"
import ChartSelector from "./_compontents/ChartSelector"

export default function Section2() {
    return (
        <section>
            <div className="m-3 flex gap-6">
                <ChartSelector />
                <TotalCard />
            </div>
        </section>
    )
}
