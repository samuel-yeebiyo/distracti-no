const config = {attributes: true, childList: true, subTree: true}
const callback = (mutationList, observer) =>{
    for(const mutation of mutationList){
        if(mutation.type === 'childList'){
            console.log("child node added or removed")
            const skipButton = document.querySelector(".ytp-ad-skip-button")
            if(skipButton){
                console.log("Found skip button")
                skipButton.click()
            }
        }else if(mutation.type === 'attributes'){
            console.log(`The ${mutation.attributeName} attribute was changed`)
        }else{
            console.log("something else changed")
        }
    }
}


const observer = new MutationObserver(callback)
const targetNode = document.querySelector(".video-ads")
console.log(targetNode)
if(targetNode){
    observer.observe(targetNode, config)
}
