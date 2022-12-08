const url = "";

export const getData = async () => {
    const res = await fetch({
        url,
        method:'GET',
        headers:{
            'xyz': 'ahmed'
        }
    });
    const data = await res.json();
    return data;
};