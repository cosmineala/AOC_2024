export default async function CreateInput( day: number ): Promise<string> {
    const res = await fetch(`/input/day${day}.txt`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const input = await res.text();
    return input;
}