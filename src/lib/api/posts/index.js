import { put, takeEvery, all } from 'redux-saga/effects';
const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* testPostApi() {
    yield delay(1000);
    console.log('test post api........................ ')
}
export function* readPosts() {
    yield delay(2000);
    const postList = [
        {
            postId: 1,
            title: "Jessica Jones with remarkable abilities in New York City." ,
            imgSrc:"https://mblogthumb-phinf.pstatic.net/20160414_22/shgusgnl66_14606201040627JSqU_JPEG/Marvels.Jessica.Jones.S01E05.AKA.The.Sandwich.Saved.Me.720p.NF.WEBRip.DD5.1.x264.JPG?type=w2",
            isLiked: true,
            isBookmark: false
        }, {
            postId: 2,
            title: "Stranger Things season 3 is comming this summer.",
            imgSrc:"https://i.pinimg.com/originals/f9/60/a0/f960a0b17088c116e2b154de877b94c7.gif",
            isLiked: true,
            isBookmark: true
        }, {
            postId: 3,
            title: "You can find out Silver Lining.",
            imgSrc:"https://i-h1.pinimg.com/564x/ef/cc/ab/efccab1f0c3192f98be0b6000b1e94e7.jpg",
            isLiked: true,
            isBookmark: true
        }, {
            postId: 4,
            title: "Call me by your name",
            imgSrc:"https://i-h1.pinimg.com/564x/a5/ae/12/a5ae12f19bd35ef6d16bbfb3c26b5bea.jpg",
            isLiked: false,
            isBookmark: true
        }, {
            postId: 5,
            title: "Love or Death",
            imgSrc:"https://i-h1.pinimg.com/564x/2b/e3/a4/2be3a481ee89631eb17b136ed2e122d0.jpg",
            isLiked: true,
            isBookmark: false
        }, {
            postId: 6,
            title: "Who is Blue??!",
            imgSrc:"https://i-h1.pinimg.com/564x/1e/59/ab/1e59ab634dab7cea100b8b1e36ba79d7.jpg",
            isLiked: true,
            isBookmark: true
        }
    ];
    
    console.log(postList, '???????????????????')
    // return postList;
    yield put({ type: 'SET_POST_LIST', postList })
}

export function* watchIncrementAsync() {
    yield takeEvery('SET_POST_LIST_ASYNC', readPosts)
}

export default function* rootSaga() {
    yield all([
        watchIncrementAsync(),
        testPostApi()
    ])
    
}