//이 파일은 실행을 해보면서, 이해를 돕기위해 만들어 봤습니다.

const p1 = new Promise(
    (resolve, reject) => {
        setTimeout(() => resolve(2), 2000)
    }
)

const p2 = new Promise(
    (resolve, reject) => {
        setTimeout(resolve, 4000, 7)
        //reject("좋아요 구독 안하심 에러")
    }
)

Promise.all([p1, p2]).then(
    (values) => {
        console.log(values)
    }
).catch(
    (error) => {
        console.error("err", error)
    }
)