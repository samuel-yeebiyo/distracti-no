window.addEventListener('popstate', (event) => {

    console.log("Updated")
    console.log(event.state)
    removeRecommendedVideos();
    removeRelatedVideos();

})


const removeRecommendedVideos = () => {
    // In the homepage
    /**
    
    Another option would just be to blanket the videos and give option with timwout
    to see the videos underneath
    
    Things to remove from the sidebar
    * Shorts
    * Subscriptions
    * Explore
    * More from YouTube
    */
   
}
    
const removeRelatedVideos = () =>{
    // During video
    /**
     Skip ads automatically
     Remove recommended vidoes on the side
     */
    
}