Vue.component('person', {
    template: '#person',
    data: () => {
        return {
            windowWidth: 0,
            windowHeight: 0,
        }
    },
    props: {
        person: Object,
        index: Number
    },
    created: function() {
        this.windowWidth =  window.innerWidth;
        this.windowHeight = window.innerHeight;

        window.addEventListener("resize", () => {
            this.windowWidth =  window.innerWidth;
            this.windowHeight = window.innerHeight;
        });
    },
    computed: {
        left: function() {
            return this.windowWidth > 480
                ? this.calculateRating(this.windowWidth, this.person)
                : this.calculatePosition(this.windowWidth, this.index);
        },

        top: function() {
            return this.windowWidth > 480
                ? this.calculatePosition(this.windowHeight, this.index)
                : this.calculateRating(this.windowHeight, this.person);
        }
    },
    methods: {
        addRating: (item) => {
            item.rating++;
        },
        minusRating: (item) => {
            item.rating--;
        },
        calculateRating: (area, person) => {
            const boardArea = area / 2;
            const step = boardArea / 15;

            if (person.rating < 0) {
                return boardArea - (Math.abs(person.rating) * step);
            } else if (person.rating > 0) {
                return boardArea + (Math.abs(person.rating) * step - 40);
            } else {
                return boardArea - 20;
            }
        },
        calculatePosition: (area, index) => {
            const step = 20;
            return step * index;
        }
    }
});

Vue.component('board', {
    template: '#peopleBoard',
    data: () => {
        return {
            people: [
                {
                    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=350',
                    rating: 0,
                    name: 'Sergey'
                },
                {
                    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=350',
                    rating: -10,
                    name: 'AA'
                },
                {
                    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&h=350',
                    rating: 5,
                    name: 'Roman'
                },
                {
                    image: 'https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&h=350',
                    rating: -3,
                    name: 'Roma'
                },
                {
                    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=350',
                    rating: 1,
                    name: 'Romchik'
                },
                {
                    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&h=350',
                    rating: -4,
                    name: 'Romasik'
                },
                {
                    image: 'https://images.pexels.com/photos/462680/pexels-photo-462680.jpeg?auto=compress&cs=tinysrgb&h=350',
                    rating: 10,
                    name: 'Romka'
                },
                {
                    image: 'https://images.pexels.com/photos/638700/pexels-photo-638700.jpeg?auto=compress&cs=tinysrgb&h=350',
                    rating: 1,
                    name: 'Romulichka'
                },
            ]
        }
    }
});
