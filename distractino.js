window.addEventListener('popstate', (event) => {
    watchForAds()
})
const config = {attributes: true, childList: true, subTree: true}
const callback = (mutationList, observer) =>{
    for(const mutation of mutationList){
        if(mutation.type === 'childList'){
            const skipButton = document.querySelector(".ytp-ad-skip-button")
            if(skipButton){
                skipButton.click()
            }
        }
	/*else if(mutation.type === 'attributes'){
            console.log(`The ${mutation.attributeName} attribute was changed`)
        }else{
            console.log("something else changed")
        }*/
    }
}

const watchForAds = () => {
    const targetNode = document.querySelector(".video-ads")

    if(targetNode){
        const observer = new MutationObserver(callback)
        observer.observe(targetNode, config)
    }
}
watchForAds()
