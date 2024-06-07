export async function FetchAvaiblePlaces() {
    const datas = await fetch("http://localhost:3000/places");
    const resData = await datas.json();
    if (!datas.ok) {
        throw new Error('Failed to fetch places')
    }

    return resData.places;
}

export async function FetchUserPlaces() {
    const datas = await fetch("http://localhost:3000/user-places");
    const resData = await datas.json();
    if (!datas.ok) {
        throw new Error('Failed to fetch places')
    }

    return resData.places;
}

export async function UpdateUserPlaces(places) {
    const datas = fetch("http://localhost:3000/user-places", {
        method: 'PUT',
        body: JSON.stringify({ places }),
        headers: { 'Content-Type': 'application/json' },
    })
    const resData = await datas.json();

    if (!datas.ok) {
        throw new Error('Failed to update user data')
    }

    return resData.message;
}