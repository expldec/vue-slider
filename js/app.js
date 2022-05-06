const app = new Vue(
    {
        el : '#root',
        data: {
            activePic: 0,
            places: [
                {
                    "image": "img/01.jpg",
                    "title": "Svezia",
                    "text": "Svezium ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
                },
                {
                    "image": "img/02.jpg",
                    "title": "Svizzera",
                    "text": "Lorem ipsum helveticus"
                },
                {
                    "image": "img/03.jpg",
                    "title": "Gran Bretagna",
                    "text": "Lorem ipsum, perfida Britannia sit amet consectetur adipisicing elit."
                },
                {
                    "image": "img/04.jpg",
                    "title": "Germania",
                    "text": "Lorem germanicum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"
                },
                {
                    "image": "img/05.jpg",
                    "title": "Paradise",
                    "text": "Et temporibus paradisiensis voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"
                }
            ],
        },
        methods: {
            goForward: function() {
                this.activePic >= this.places.length -1 ? this.activePic = 0 : this.activePic++;
                console.log(this.activePic);
            },
            goBack: function() {
                this.activePic <= 0 ? this.activePic = this.places.length - 1 : this.activePic--;
                console.log(this.activePic);
            },
            focusOnThis: function() {
                console.log(this);
            }
        }
    }
)