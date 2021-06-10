(() => {
    const app = {
        initialize () {
            this.cacheElements();
            this.loadProjects();
        },

        cacheElements() {
            this.$projects = document.querySelector(".projects--inject");
        },

        async loadProjects() {
            try {
                console.log("fetching project data");
                const response = await fetch("./data/projects.json");
                const json = await response.json();
                this.showProjects(json);
            } catch (error) {
                console.error(error);
            };
        },

        showProjects(d) {
            d.forEach(element => {
                let tempStr = `
                <li class="loaded--project">
                    <h3>${element.project}</h3>
                    <div class="loaded--project-flex">
                        <img src="${element.image}">
                        <div class="flex--projecttext">
                            <p>${element.description}</p>
                            <div class="bottom-projecttext">
                                <p>Date of creation: ${element.timeCreated}</p>
                                <p>Technologies used for this project: ${element.technologies}</p>
                                <a href="#"><p class="repo-link">Link to github repository</p></a>
                            </div>
                        </div>
                    </div>
                </li>`;

                this.$projects.innerHTML += tempStr;
            });
        }
        
    };
    app.initialize();
})();