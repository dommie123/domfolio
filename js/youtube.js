const API_KEY = 'AIzaSyCCXCZ5WqteHTtLfCDxrCihepsYTP8zz-o';
const BASE_URL = 'https://www.googleapis.com/youtube/v3/channels';

var subCountElement = document.querySelector("#subscriber-count");
var viewCountElement = document.querySelector("#view-count");
var likeCountElement = document.querySelector("#like-count");

getSubscriberCount();
getViewCount();
getLikeCount();

function getSubscriberCount() {
    const apiUrl = `${BASE_URL}?part=statistics&id=UC1Ep7sLY-qLKvHDp7MuNiDw&key=${API_KEY}`;
    fetch(apiUrl).then(req => req.json()).then(res => {
        if (res.items.length === 0) {
            subCountElement.innerText = '???'
        } else {
            subCountElement.innerText = res.items[0].statistics.subscriberCount;
        }
    }).catch(() => { subCountElement.innerText = 'ERROR'});

}

function getViewCount() {
    const apiUrl = `${BASE_URL}?part=statistics&id=UC1Ep7sLY-qLKvHDp7MuNiDw&key=${API_KEY}`;
    fetch(apiUrl).then(req => req.json()).then(res => {
        if (res.items.length === 0) {
            viewCountElement.innerText = '???'
        } else {
            viewCountElement.innerText = res.items[0].statistics.viewCount;
        }
    }).catch(() => { viewCountElement.innerText = 'ERROR'});
}

function getLikeCount() {
    likeCountElement.innerText = '24+';
}

function getContent() {

}