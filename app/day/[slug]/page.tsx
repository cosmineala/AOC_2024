
import DayPart from "@/components/DayPart";

export async function generateStaticParams() {

    return Array.from({ length: 25 }, (_, i) => i + 1).map(day => ({
        slug: day.toString(),
    }));
}

export default async function Page({ params, }: { params: Promise<{ slug: string }> }) {
    
    const slug = (await params).slug;
    let day = parseInt(slug);

    return (
        <main>
            <DayPart day={day} part={1} />
            <div className="h-4" ></div>
            <DayPart day={day} part={2} />
        </main>
    );

}