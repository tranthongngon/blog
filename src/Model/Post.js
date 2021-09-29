import { Author } from "./Author";

export class Post {
    initWithSnapShot(snapshotItem) {
        const data = snapshotItem.data();

        this.author = new Author(data.author);
        this.id = data.id;
        this.title = data.title;
        this.category = data.category;
        this.imgUrl = data.imgUrl;
        this.tags = data.tags;
        this.time = data.time;
        this.content = data.content;

        return this;
    }

    initWithRaw(authorImg, authorName,authorBio, content, title, id, category, tags, imgUrl) {

        this.author = new Author({authorImg, authorName, authorBio});
        this.id = id;
        this.title = title;
        this.category = category;
        this.imgUrl = imgUrl;
        this.tags = tags;
        this.time = Date().toLocaleString().substring(0,15);
        this.content = content;

        return this;
    }
}

export var PostConverter = {
    toFirestore: function(p) {
        return {
            author: {
                authorImg: p.author.authorImg,
                authorName: p.author.authorName,
                authorBio:p.author.authorBio
            },
            content: p.content,
            title: p.title,
            id: p.id,
            category: p.category,
            tags: p.tags,
            time:p.time,
            imgUrl: p.imgUrl
            };
    },
    fromFirestore: function(snapshot, options){
        return new Post().initWithSnapShot(snapshot);
    }
};