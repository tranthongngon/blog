import db from "../firebase";
import { Post, PostConverter } from "../Model/Post";

const POST_LIMIT = 100;

class PostController {
    constructor() {
        this.ref = db.collection("blogs-list");
    }

    getAllPost(limit = POST_LIMIT) {
        return new Promise((resolve, reject) => {
            this.ref
                .limit(limit)
                .get()
                .then((snapshot) => {
                    const items = snapshot.docs.map((p) => {
                        return new Post().initWithSnapShot(p);
                    });
                    resolve(items);
                });
        });
    }

    // createAt
    // updateAt
    createPost(authorImg, authorName,authorBio, content, title, id, category, tags, imgUrl) {
        const post = new Post().initWithRaw(authorImg, authorName,authorBio, content, title, id, category, tags, imgUrl);
        return this
        .ref
        .doc()
        .withConverter(PostConverter)
        .set(post);
    }
}

export default new PostController();