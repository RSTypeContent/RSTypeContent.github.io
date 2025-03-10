    const loadVideo = (iframe) => {
        const cid = "UCrs63WjED0eMSdXep8fMs6A";
        const channelURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`)
        const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;

        fetch(reqURL)
            .then(response => response.json())
            .then(result => {
              console.log(result)
                const videoNumber = iframe.getAttribute('vnum')
                const link = result.items[videoNumber].link;
                const id = link.substr(link.indexOf("=") + 1);
                iframe.setAttribute("src", `https://youtube.com/embed/${id}?controls=1&autoplay=0`);
            })
            .catch(error => console.log('error', error));
    }

    const iframes = document.getElementsByClassName('latestVideoEmbed');
    for (let i = 0, len = iframes.length; i < len; i++) {
        loadVideo(iframes[i]);
    }
