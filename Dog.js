class Dog {
    constructor(data){
        Object.assign(this,data)
    }
    matchStatus(bool) {
        this.hasBeenSwiped = true
        this.hasBeenLiked = bool
    }
    renderDogs(){
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
        return `<div class=${name === "Rex" ? "rex" : name === "Teddy" ? "teddy" : "bella" }>
            <img id="badge" alt="badge-like" src="./images/badge-like.png">
            <img id="nope-badge" alt="badge-like" src="./images/badge-nope.png">
            <h1>${name}, ${age}</h1>
            <h2>${bio}</h2>
            </div`
    }
}

export default Dog











