        
    const api_url = 'https://0ql20y916m.execute-api.ap-southeast-2.amazonaws.com/default/updateFuction';

    async function getCount(){
        const response = await fetch(api_url);
        const data = await response.json();
        visitorCount = data.Attributes.visitorCount;
        document.getElementById('visitor-counter').innerHTML = visitorCount;
    }

    getCount();